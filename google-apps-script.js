/**
 * ============================================================================
 * RD LINKTREE STUDIO — BACKEND SEGURO NO GOOGLE SHEETS (APPS SCRIPT)
 * ============================================================================
 * COMO ATIVAR PASSO A PASSO:
 * 1. Abra https://sheets.new para criar uma Planilha Google em branco.
 * 2. No menu superior, clique em "Extensões" > "Apps Script".
 * 3. Apague o código padrão, cole TODO este arquivo e defina abaixo a sua
 *    SENHA BASE na variável APP_MASTER_PASSWORD (linha 22).
 * 4. Clique em "Implantar" (botão azul no topo direito) > "Nova implantação".
 * 5. Clique na engrenagem ao lado de "Selecionar tipo" e escolha "App da Web".
 * 6. Preencha:
 *    - Executar como: "Eu" (sua conta Google)
 *    - Quem pode acessar: "Qualquer pessoa"
 * 7. Clique em "Implantar", autorize o acesso e copie a "URL do app da Web" (/exec).
 * ============================================================================
 */

// 🔐 DEFINA AQUI A SUA SENHA BASE DO APP (Mesma senha usada para entrar no painel):
var APP_MASTER_PASSWORD = 'senai2026';

var SHEET_CLICKS = 'Cliques';
var SHEET_TREES = 'Trees';

function ensureSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var clicksSheet = ss.getSheetByName(SHEET_CLICKS);
  if (!clicksSheet) {
    clicksSheet = ss.insertSheet(SHEET_CLICKS);
    clicksSheet.appendRow([
      'Timestamp',
      'Tree_ID',
      'Tree_Name',
      'Button_ID',
      'Button_Label',
      'GTM_Event',
      'Button_URL',
      'Page_URL',
      'UTM_Source',
      'UTM_Medium',
      'UTM_Campaign',
      'Device'
    ]);
    clicksSheet.getRange('A1:L1').setFontWeight('bold').setBackground('#1e293b').setFontColor('#ffffff');
    clicksSheet.setFrozenRows(1);
  }

  var treesSheet = ss.getSheetByName(SHEET_TREES);
  if (!treesSheet) {
    treesSheet = ss.insertSheet(SHEET_TREES);
    treesSheet.appendRow(['Tree_ID', 'Tree_Name', 'Updated_At', 'JSON_Data']);
    treesSheet.getRange('A1:D1').setFontWeight('bold').setBackground('#1e293b').setFontColor('#ffffff');
    treesSheet.setFrozenRows(1);
  }

  return { clicksSheet: clicksSheet, treesSheet: treesSheet };
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function isAuthorized(providedKey) {
  if (!APP_MASTER_PASSWORD) return true;
  return String(providedKey || '') === String(APP_MASTER_PASSWORD);
}

/**
 * Leitura do Dashboard e das Árvores Salvas (PROTEGIDO POR SENHA BASE)
 */
function doGet(e) {
  try {
    var providedKey = (e && e.parameter && e.parameter.key) ? e.parameter.key : '';
    if (!isAuthorized(providedKey)) {
      return jsonResponse({
        ok: false,
        authError: true,
        error: 'Acesso negado: Senha Base do App incorreta ou ausente.'
      });
    }

    var sheets = ensureSheets();
    var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : 'all';
    var result = { ok: true, trees: [], clicks: [] };

    if (action === 'all' || action === 'trees') {
      var treeRows = sheets.treesSheet.getDataRange().getValues();
      for (var i = 1; i < treeRows.length; i++) {
        var row = treeRows[i];
        if (!row[0]) continue;
        try {
          result.trees.push({
            id: String(row[0]),
            name: String(row[1] || row[0]),
            updatedAt: row[2] ? new Date(row[2]).toISOString() : '',
            data: JSON.parse(row[3])
          });
        } catch (err) {}
      }
    }

    if (action === 'all' || action === 'dashboard') {
      var clickRows = sheets.clicksSheet.getDataRange().getValues();
      var startIdx = Math.max(1, clickRows.length - 5000);
      for (var j = startIdx; j < clickRows.length; j++) {
        var c = clickRows[j];
        if (!c[0]) continue;
        result.clicks.push({
          timestamp: c[0] instanceof Date ? c[0].toISOString() : String(c[0]),
          tree_id: String(c[1] || 'padrao'),
          tree_name: String(c[2] || c[1] || 'Padrão'),
          button_id: String(c[3] || ''),
          button_label: String(c[4] || ''),
          gtm_event: String(c[5] || ''),
          button_url: String(c[6] || ''),
          page_url: String(c[7] || ''),
          utm_source: String(c[8] || '(direto)'),
          utm_medium: String(c[9] || ''),
          utm_campaign: String(c[10] || ''),
          device: String(c[11] || 'Desktop')
        });
      }
    }

    return jsonResponse(result);
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

/**
 * Gravação de Cliques (Público para as LPs do RD Station)
 * e Salvamento de Árvores (PROTEGIDO POR SENHA BASE)
 */
function doPost(e) {
  try {
    var sheets = ensureSheets();
    var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var body = JSON.parse(raw);
    var action = body.action || 'click';

    // 1. Registro de clique vindo da Landing Page do RD Station (não expõe senha na LP!)
    if (action === 'click') {
      sheets.clicksSheet.appendRow([
        new Date(),
        body.tree_id || 'padrao',
        body.tree_name || body.tree_id || 'Padrão',
        body.button_id || '',
        body.button_label || '',
        body.gtm_event || '',
        body.button_url || '',
        body.page_url || '',
        body.utm_source || '(direto)',
        body.utm_medium || '',
        body.utm_campaign || '',
        body.device || 'Desktop'
      ]);
      return jsonResponse({ ok: true, saved: 'click' });
    }

    // 2. Salvamento / Edição de Árvores de Links (EXIGE A SENHA BASE DO APP!)
    if (action === 'save_tree') {
      if (!isAuthorized(body.app_key)) {
        return jsonResponse({
          ok: false,
          authError: true,
          error: 'Senha Base do App incorreta. Não autorizado a salvar alterações.'
        });
      }

      var treeId = String(body.tree_id || '').trim();
      var treeName = String(body.tree_name || treeId).trim();
      var treeData = body.tree_data || {};
      if (!treeId) return jsonResponse({ ok: false, error: 'tree_id obrigatório' });

      var rows = sheets.treesSheet.getDataRange().getValues();
      var foundRowIndex = -1;
      for (var i = 1; i < rows.length; i++) {
        if (String(rows[i][0]) === treeId) {
          foundRowIndex = i + 1;
          break;
        }
      }

      var nowIso = new Date().toISOString();
      var jsonStr = JSON.stringify(treeData);

      if (foundRowIndex > 0) {
        sheets.treesSheet.getRange(foundRowIndex, 1, 1, 4).setValues([[treeId, treeName, nowIso, jsonStr]]);
      } else {
        sheets.treesSheet.appendRow([treeId, treeName, nowIso, jsonStr]);
      }

      return jsonResponse({ ok: true, saved: 'tree', tree_id: treeId });
    }

    return jsonResponse({ ok: false, error: 'Ação desconhecida: ' + action });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}
