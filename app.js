/**
 * ============================================================================
 * CONFIGURAÇÃO GLOBAL AUTOMÁTICA (OPCIONAL PARA VERCEL / GITHUB)
 * Se quiser que a ferramenta na Vercel já abra conectada à sua Planilha Google
 * sem precisar colar a URL no navegador, basta colar a URL do seu Web App aqui:
 * ============================================================================
 */
const DEFAULT_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzPBtOLmcRe5kdpEUMDaaMe555re_XWxGDFPBRYELIVH1o4dPPdk0A1UC-UIXCAebKayQ/exec';

// Biblioteca de Ícones SVG Prontos
const SVG_ICONS = {
  none: { label: 'Sem Ícone', svg: '' },
  custom_image: { label: '🖼️ Imagem / Ícone Personalizado (URL ou Upload)', svg: '' },
  whatsapp: {
    label: '💬 WhatsApp',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 4.467 4.621-1.454c1.908 1.24 4.181 1.954 6.587 1.954 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>`
  },
  instagram: {
    label: '📸 Instagram',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
  },
  linkedin: {
    label: '💼 LinkedIn',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
  },
  youtube: {
    label: '▶️ YouTube / Vídeo',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`
  },
  globe: {
    label: '🌐 Site Oficial / Link',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
  },
  download: {
    label: '📥 E-book / PDF / Download',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
  },
  calendar: {
    label: '📅 Agendar Reunião / Evento',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`
  },
  mail: {
    label: '✉️ E-mail / Contato',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
  },
  phone: {
    label: '📞 Telefone / Ligar',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  cart: {
    label: '🛒 Loja / Comprar Agora',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`
  },
  map: {
    label: '📍 Como Chegar / Endereço',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
  },
  star: {
    label: '⭐ Destaque / VIP',
    svg: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  }
};

const STORAGE_KEY_TREES = 'rd_linktree_all_trees_v2';
const STORAGE_KEY_ACTIVE = 'rd_linktree_active_id_v2';
const STORAGE_KEY_SHEETS = 'rd_linktree_sheets_url_v2';
const STORAGE_KEY_LOCAL_CLICKS = 'rd_linktree_local_clicks_v2';
const SESSION_KEY_AUTH = 'rd_linktree_session_key_v2';
const DEFAULT_LOCAL_PASS = 'senai2026';

// Modelos iniciais embutidos (também presentes na pasta /trees/ do repositório)
const BUILTIN_TREES = {
  'institucional-principal': {
    treeId: 'institucional-principal',
    treeName: 'Canais Oficiais (Institucional)',
    source: 'repo',
    brand: {
      layout: 'logo-circle',
      logoSize: 96,
      logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=900&auto=format&fit=crop&q=80',
      alt: 'Logomarca Oficial',
      link: '',
      title: 'Sua Marca | Canais Rápidos',
      bio: 'Escolha abaixo como prefere falar com nosso time de especialistas ou acesse nossos conteúdos exclusivos.'
    },
    design: {
      transparentBg: false,
      bgColor: '#0f172a',
      textColor: '#f8fafc',
      btnBg: '#1e293b',
      btnText: '#ffffff',
      btnBorder: '#3b82f6',
      btnRadius: '14px',
      maxWidth: '480px',
      iconSize: '38px'
    },
    links: [
      {
        id: 'rd-btn-whatsapp',
        title: 'Falar com Especialista no WhatsApp',
        subtitle: 'Atendimento comercial rápido',
        url: 'https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20links.',
        target: '_blank',
        iconType: 'whatsapp',
        customImageUrl: '',
        highlight: true,
        gtmEvent: 'click_linktree_whatsapp',
        gtmCategory: 'Linktree RD',
        gtmLabel: 'WhatsApp Comercial',
        rdNativeSelector: '',
        collapsed: false
      },
      {
        id: 'rd-btn-ebook',
        title: 'Baixar Apresentação & Catálogo 2026',
        subtitle: 'PDF completo + tabela comparativa',
        url: '#rd-popup-catalogo',
        target: '_self',
        iconType: 'download',
        customImageUrl: '',
        highlight: false,
        gtmEvent: 'click_linktree_catalogo',
        gtmCategory: 'Linktree RD',
        gtmLabel: 'Download Catalogo',
        rdNativeSelector: '#rd-button-exemplo',
        collapsed: true
      },
      {
        id: 'rd-btn-site',
        title: 'Conhecer Nosso Site Oficial',
        subtitle: 'Cases, soluções e portfólio completo',
        url: 'https://www.rdstation.com/',
        target: "_blank",
        iconType: 'globe',
        customImageUrl: '',
        highlight: false,
        gtmEvent: 'click_linktree_site',
        gtmCategory: 'Linktree RD',
        gtmLabel: 'Site Oficial',
        rdNativeSelector: '',
        collapsed: true
      }
    ]
  },
  'campanha-comercial': {
    treeId: 'campanha-comercial',
    treeName: 'Campanha Comercial & WhatsApp',
    source: 'repo',
    brand: {
      layout: 'banner-and-logo',
      logoSize: 88,
      logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=900&auto=format&fit=crop&q=80',
      alt: 'Time Comercial',
      link: '',
      title: 'Atendimento Direto | Consultoria',
      bio: 'Selecione sua região ou fale diretamente com um consultor agora mesmo.'
    },
    design: {
      transparentBg: false,
      bgColor: '#064e3b',
      textColor: '#ecfdf5',
      btnBg: '#047857',
      btnText: '#ffffff',
      btnBorder: '#34d399',
      btnRadius: '999px',
      maxWidth: '480px',
      iconSize: '38px'
    },
    links: [
      {
        id: 'rd-btn-whats-sp',
        title: 'WhatsApp — Atendimento São Paulo & Sul',
        subtitle: 'Consultores online agora',
        url: 'https://wa.me/5511999999999',
        target: '_blank',
        iconType: 'whatsapp',
        customImageUrl: '',
        highlight: true,
        gtmEvent: 'click_whats_sp_sul',
        gtmCategory: 'Comercial',
        gtmLabel: 'WhatsApp SP e Sul',
        rdNativeSelector: '',
        collapsed: false
      },
      {
        id: 'rd-btn-agenda',
        title: 'Agendar Demonstração Online',
        subtitle: 'Escolha o melhor dia e horário',
        url: '#rd-section-agendamento',
        target: '_self',
        iconType: 'calendar',
        customImageUrl: '',
        highlight: false,
        gtmEvent: 'click_agendar_demo',
        gtmCategory: 'Comercial',
        gtmLabel: 'Agendar Demonstracao',
        rdNativeSelector: '',
        collapsed: true
      }
    ]
  }
};

let treesMap = loadLocalTreesMap();
let activeTreeId = localStorage.getItem(STORAGE_KEY_ACTIVE) || 'institucional-principal';
if (!treesMap[activeTreeId]) activeTreeId = Object.keys(treesMap)[0];
let state = treesMap[activeTreeId];

let sheetsWebhookUrl = localStorage.getItem(STORAGE_KEY_SHEETS) || DEFAULT_SHEETS_WEBHOOK_URL;
let sessionAppKey = sessionStorage.getItem(SESSION_KEY_AUTH) || '';
let cloudClicksCache = [];

function loadLocalTreesMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TREES);
    if (!raw) return JSON.parse(JSON.stringify(BUILTIN_TREES));
    const parsed = JSON.parse(raw);
    return { ...JSON.parse(JSON.stringify(BUILTIN_TREES)), ...parsed };
  } catch {
    return JSON.parse(JSON.stringify(BUILTIN_TREES));
  }
}

function saveAllTreesLocally() {
  try {
    treesMap[state.treeId] = state;
    localStorage.setItem(STORAGE_KEY_TREES, JSON.stringify(treesMap));
    localStorage.setItem(STORAGE_KEY_ACTIVE, state.treeId);
  } catch {}
}

function getLocalClicks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LOCAL_CLICKS);
    if (raw) return JSON.parse(raw);
  } catch {}
  // Cliques iniciais de exemplo para o Dashboard não abrir vazio antes de conectar a planilha
  const now = Date.now();
  return [
    {
      timestamp: new Date(now - 3600 * 1000 * 2).toISOString(),
      tree_id: 'institucional-principal',
      tree_name: 'Canais Oficiais (Institucional)',
      button_id: 'rd-btn-whatsapp',
      button_label: 'WhatsApp Comercial',
      gtm_event: 'click_linktree_whatsapp',
      utm_source: 'instagram',
      device: 'Mobile'
    },
    {
      timestamp: new Date(now - 3600 * 1000 * 5).toISOString(),
      tree_id: 'institucional-principal',
      tree_name: 'Canais Oficiais (Institucional)',
      button_id: 'rd-btn-whatsapp',
      button_label: 'WhatsApp Comercial',
      gtm_event: 'click_linktree_whatsapp',
      utm_source: 'google-ads',
      device: 'Mobile'
    },
    {
      timestamp: new Date(now - 3600 * 1000 * 8).toISOString(),
      tree_id: 'institucional-principal',
      tree_name: 'Canais Oficiais (Institucional)',
      button_id: 'rd-btn-ebook',
      button_label: 'Download Catalogo',
      gtm_event: 'click_linktree_catalogo',
      utm_source: 'rd-email',
      device: 'Desktop'
    },
    {
      timestamp: new Date(now - 3600 * 1000 * 14).toISOString(),
      tree_id: 'campanha-comercial',
      tree_name: 'Campanha Comercial & WhatsApp',
      button_id: 'rd-btn-whats-sp',
      button_label: 'WhatsApp SP e Sul',
      gtm_event: 'click_whats_sp_sul',
      utm_source: 'meta-ads',
      device: 'Mobile'
    }
  ];
}

function recordLocalClick(clickObj) {
  const list = getLocalClicks();
  list.push(clickObj);
  try {
    localStorage.setItem(STORAGE_KEY_LOCAL_CLICKS, JSON.stringify(list.slice(-500)));
  } catch {}
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function slugify(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* =========================================================================
   CARREGAMENTO AUTOMÁTICO DA PASTA /trees/ (GITHUB / VERCEL) E GOOGLE SHEETS
   ========================================================================= */

async function loadRepoTreesFolder() {
  try {
    const res = await fetch('trees/index.json', { cache: 'no-store' });
    if (!res.ok) return;
    const indexData = await res.json();
    if (!indexData || !Array.isArray(indexData.trees)) return;

    for (const item of indexData.trees) {
      if (!item.file) continue;
      try {
        const treeRes = await fetch(item.file, { cache: 'no-store' });
        if (treeRes.ok) {
          const treeJson = await treeRes.json();
          const tId = treeJson.treeId || item.id;
          // Se ainda não foi editado localmente, usa o da pasta /trees/
          if (!treesMap[tId] || treesMap[tId].source === 'repo') {
            treesMap[tId] = { ...treeJson, treeId: tId, treeName: treeJson.treeName || item.name, source: 'repo' };
          }
        }
      } catch {}
    }
    if (treesMap[activeTreeId]) {
      state = treesMap[activeTreeId];
    }
    renderTreeSwitcher();
    syncFormInputsFromState();
    renderLinksEditor();
    updatePreviewAndExport();
  } catch {
    // Em protocolo file:// local, usa o BUILTIN_TREES normalmente
  }
}

async function loadAppsScriptPreviewCode() {
  const codeEl = document.getElementById('code-apps-script');
  try {
    const res = await fetch('google-apps-script.js');
    if (res.ok) {
      codeEl.textContent = await res.text();
      return;
    }
  } catch {}
  codeEl.textContent = `// Abra o arquivo google-apps-script.js na raiz do seu repositório para copiar o script completo da Planilha Google.`;
}

async function syncWithGoogleSheets(showFeedback = false) {
  const badge = document.getElementById('sheets-status-badge');
  const urlInput = document.getElementById('input-sheets-url');
  sheetsWebhookUrl = (urlInput.value || '').trim();
  localStorage.setItem(STORAGE_KEY_SHEETS, sheetsWebhookUrl);
  updatePreviewAndExport();

  if (!sheetsWebhookUrl) {
    badge.className = 'cloud-badge disconnected';
    badge.textContent = '⚡ Planilha: Modo Local';
    renderDashboard();
    return;
  }

  badge.className = 'cloud-badge disconnected';
  badge.textContent = '⏳ Sincronizando Planilha...';

  try {
    const sep = sheetsWebhookUrl.includes('?') ? '&' : '?';
    const keyParam = encodeURIComponent(sessionAppKey || '');
    const res = await fetch(`${sheetsWebhookUrl}${sep}action=all&key=${keyParam}&t=${Date.now()}`);
    const data = await res.json();

    if (data && data.authError) {
      badge.className = 'cloud-badge disconnected';
      badge.textContent = '🔒 Senha incorreta na Planilha';
      if (showFeedback) {
        alert('A Senha Base digitada não confere com a variável APP_MASTER_PASSWORD configurada no seu Google Apps Script.');
      }
      sessionStorage.removeItem(SESSION_KEY_AUTH);
      sessionAppKey = '';
      document.getElementById('auth-lock-overlay').hidden = false;
      return;
    }

    if (data && data.ok) {
      // Mescla árvores vindas da aba Trees da Planilha Google
      if (Array.isArray(data.trees)) {
        data.trees.forEach((row) => {
          if (row.id && row.data) {
            treesMap[row.id] = {
              ...row.data,
              treeId: row.id,
              treeName: row.name || row.data.treeName || row.id,
              source: 'sheets'
            };
          }
        });
      }

      if (Array.isArray(data.clicks)) {
        cloudClicksCache = data.clicks;
      }

      saveAllTreesLocally();
      if (treesMap[activeTreeId]) state = treesMap[activeTreeId];

      badge.className = 'cloud-badge connected';
      badge.textContent = `☁️ Planilha Conectada (${cloudClicksCache.length} cliques)`;

      renderTreeSwitcher();
      syncFormInputsFromState();
      renderLinksEditor();
      updatePreviewAndExport();
      renderDashboard();

      if (showFeedback) {
        alert('Conectado e sincronizado com sucesso com sua Planilha Google!');
      }
    } else {
      throw new Error(data.error || 'Resposta inválida');
    }
  } catch (err) {
    badge.className = 'cloud-badge disconnected';
    badge.textContent = '⚠️ Erro na URL da Planilha';
    renderDashboard();
    if (showFeedback) {
      alert('Não foi possível ler a Planilha Google. Verifique se você implantou o Apps Script como "App da Web" com acesso para "Qualquer pessoa".');
    }
  }
}

async function saveCurrentTreeToSheets() {
  if (!sheetsWebhookUrl) {
    alert('Configure primeiro a URL da sua Planilha Google na aba "5. 📊 Dashboard & Sheets" para salvar na nuvem! (Ou use o botão "Baixar .json (/trees)" no topo).');
    document.querySelector('.tab-btn[data-tab="tab-dashboard"]').click();
    return;
  }

  const btn = document.getElementById('btn-save-cloud');
  const originalText = btn.textContent;
  btn.textContent = '⏳ Salvando...';

  try {
    const payload = {
      action: 'save_tree',
      app_key: sessionAppKey,
      tree_id: state.treeId,
      tree_name: state.treeName,
      tree_data: state
    };

    const res = await fetch(sheetsWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data && data.authError) {
      btn.textContent = originalText;
      alert('Acesso negado pela Planilha: Senha Base do App incorreta!');
      document.getElementById('auth-lock-overlay').hidden = false;
      return;
    }
    if (data && data.ok) {
      btn.textContent = '✓ Salvo na Planilha!';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2200);
      syncWithGoogleSheets(false);
    } else {
      throw new Error('Falha ao salvar');
    }
  } catch {
    btn.textContent = originalText;
    alert('Erro ao salvar na Planilha Google. Verifique a URL configurada na aba 5.');
  }
}

/* =========================================================================
   GERADOR DE CÓDIGO HTML/CSS/JS PARA O RD STATION (COM GTM + GOOGLE SHEETS)
   ========================================================================= */

function generateStylesBlock() {
  const d = state.design;
  const b = state.brand;
  const bgRule = d.transparentBg ? 'transparent' : d.bgColor;
  const paddingRule = d.transparentBg ? '12px 4px' : '28px 20px';
  const boxShadowRule = d.transparentBg ? 'none' : '0 12px 32px rgba(0, 0, 0, 0.22)';

  return `<style>
  /* RD Linktree Studio (${escapeHtml(state.treeId)}) */
  .rd-lt-root, .rd-lt-root * {
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
  .rd-lt-root {
    width: 100%;
    max-width: ${d.maxWidth};
    margin: 0 auto;
    background: ${bgRule};
    color: ${d.textColor};
    padding: ${paddingRule};
    border-radius: 20px;
    box-shadow: ${boxShadowRule};
    text-align: center;
  }
  .rd-lt-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 22px;
  }
  .rd-lt-banner {
    width: 100%;
    max-height: 190px;
    object-fit: cover;
    border-radius: 14px;
    display: block;
    margin-bottom: 14px;
  }
  .rd-lt-banner-wrap {
    width: 100%;
    position: relative;
    margin-bottom: ${Math.round(b.logoSize / 2) + 12}px;
  }
  .rd-lt-banner-wrap .rd-lt-banner {
    margin-bottom: 0;
  }
  .rd-lt-banner-wrap .rd-lt-logo {
    position: absolute;
    left: 50%;
    bottom: -${Math.round(b.logoSize / 2)}px;
    transform: translateX(-50%);
    border: 4px solid ${d.transparentBg ? '#ffffff' : d.bgColor};
    background: #ffffff;
  }
  .rd-lt-logo {
    width: ${b.logoSize}px;
    height: ${b.layout === 'logo-rounded' ? 'auto' : b.logoSize + 'px'};
    max-width: 100%;
    object-fit: ${b.layout === 'logo-rounded' ? 'contain' : 'cover'};
    border-radius: ${b.layout === 'logo-circle' || b.layout === 'banner-and-logo' ? '50%' : '12px'};
    margin-bottom: 12px;
    display: block;
    box-shadow: 0 4px 14px rgba(0,0,0,0.18);
  }
  .rd-lt-title {
    margin: 0 0 6px 0;
    font-size: 1.3rem;
    font-weight: 700;
    color: ${d.textColor};
    line-height: 1.3;
    text-wrap: balance;
  }
  .rd-lt-bio {
    margin: 0;
    font-size: 0.94rem;
    color: ${d.textColor};
    opacity: 0.86;
    line-height: 1.5;
    white-space: pre-line;
    text-wrap: pretty;
    max-width: 92%;
  }
  .rd-lt-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
  .rd-lt-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    padding: 13px 16px;
    background-color: ${d.btnBg};
    color: ${d.btnText} !important;
    text-decoration: none !important;
    border-radius: ${d.btnRadius};
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
    cursor: pointer;
    text-align: left;
    position: relative;
    overflow: hidden;
  }
  .rd-lt-btn:hover {
    transform: translateY(-2px);
    border-color: ${d.btnBorder};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
  .rd-lt-btn.rd-lt-highlight {
    border: 2px solid ${d.btnBorder};
    box-shadow: 0 0 0 3px ${d.btnBorder}33;
  }
  .rd-lt-btn-media {
    width: ${d.iconSize};
    height: ${d.iconSize};
    min-width: ${d.iconSize};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${d.btnText};
    overflow: hidden;
  }
  .rd-lt-btn-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    display: block;
  }
  .rd-lt-btn-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .rd-lt-btn-title {
    font-size: 0.96rem;
    font-weight: 600;
    line-height: 1.3;
    color: ${d.btnText};
  }
  .rd-lt-btn-sub {
    font-size: 0.78rem;
    opacity: 0.78;
    margin-top: 2px;
    color: ${d.btnText};
  }
  .rd-lt-btn-arrow {
    font-size: 1rem;
    opacity: 0.65;
    padding-left: 4px;
    transition: transform 0.18s ease;
  }
  .rd-lt-btn:hover .rd-lt-btn-arrow {
    transform: translateX(3px);
    opacity: 1;
  }
</style>`;
}

function generateHeaderHtml() {
  const b = state.brand;
  let mediaHtml = '';

  const wrapLink = (inner) => {
    if (!b.link || !b.link.trim()) return inner;
    return `<a href="${escapeHtml(b.link)}" target="_blank" rel="noopener" class="rd-lt-brand-link" style="display:contents;color:inherit;text-decoration:none;">${inner}</a>`;
  };

  if (b.layout === 'logo-circle' || b.layout === 'logo-rounded') {
    if (b.logoUrl) {
      mediaHtml = wrapLink(`<img src="${escapeHtml(b.logoUrl)}" alt="${escapeHtml(b.alt)}" class="rd-lt-logo" />`);
    }
  } else if (b.layout === 'banner-full') {
    if (b.bannerUrl) {
      mediaHtml = wrapLink(`<img src="${escapeHtml(b.bannerUrl)}" alt="${escapeHtml(b.alt)}" class="rd-lt-banner" />`);
    }
  } else if (b.layout === 'banner-and-logo') {
    mediaHtml = wrapLink(`
      <div class="rd-lt-banner-wrap">
        ${b.bannerUrl ? `<img src="${escapeHtml(b.bannerUrl)}" alt="${escapeHtml(b.alt)}" class="rd-lt-banner" />` : ''}
        ${b.logoUrl ? `<img src="${escapeHtml(b.logoUrl)}" alt="${escapeHtml(b.alt)}" class="rd-lt-logo" />` : ''}
      </div>
    `);
  }

  return `<div class="rd-lt-header">
  ${mediaHtml}
  ${b.title ? `<h2 class="rd-lt-title">${escapeHtml(b.title)}</h2>` : ''}
  ${b.bio ? `<p class="rd-lt-bio">${escapeHtml(b.bio)}</p>` : ''}
</div>`;
}

function generateSingleButtonHtml(link, idx) {
  const btnId = escapeHtml(link.id || `rd-lt-btn-${idx + 1}`);
  const gtmEvent = escapeHtml(link.gtmEvent || 'rd_linktree_click');
  const gtmCat = escapeHtml(link.gtmCategory || 'Linktree RD');
  const gtmLabel = escapeHtml(link.gtmLabel || link.title || `Botao ${idx + 1}`);
  const rdSelector = escapeHtml(link.rdNativeSelector || '');
  const highlightClass = link.highlight ? ' rd-lt-highlight' : '';

  let mediaMarkup = '';
  if (link.iconType === 'custom_image' && link.customImageUrl) {
    mediaMarkup = `<span class="rd-lt-btn-media"><img src="${escapeHtml(link.customImageUrl)}" alt="" loading="lazy" /></span>`;
  } else if (link.iconType && SVG_ICONS[link.iconType] && SVG_ICONS[link.iconType].svg) {
    mediaMarkup = `<span class="rd-lt-btn-media">${SVG_ICONS[link.iconType].svg}</span>`;
  }

  const subtitleMarkup = link.subtitle
    ? `<span class="rd-lt-btn-sub">${escapeHtml(link.subtitle)}</span>`
    : '';

  const relAttr = link.target === '_blank' ? ' rel="noopener"' : '';
  const rdTriggerAttr = rdSelector ? ` data-rd-trigger="${rdSelector}"` : '';

  return `<a href="${escapeHtml(link.url || '#')}"
   id="${btnId}"
   class="rd-lt-btn rd-button-custom${highlightClass}"
   target="${escapeHtml(link.target || '_blank')}"${relAttr}
   data-tree-id="${escapeHtml(state.treeId)}"
   data-tree-name="${escapeHtml(state.treeName)}"
   data-gtm-event="${gtmEvent}"
   data-gtm-category="${gtmCat}"
   data-gtm-label="${gtmLabel}"${rdTriggerAttr}>
  ${mediaMarkup}
  <span class="rd-lt-btn-content">
    <span class="rd-lt-btn-title">${escapeHtml(link.title || 'Link sem título')}</span>
    ${subtitleMarkup}
  </span>
  <span class="rd-lt-btn-arrow" aria-hidden="true">→</span>
</a>`;
}

function generateTrackingScript() {
  const webhookStr = JSON.stringify(sheetsWebhookUrl || '');
  return `<script>
(function() {
  var SHEETS_WEBHOOK_URL = ${webhookStr};
  if (window.__rdLinktreeTrackerInitialized) return;
  window.__rdLinktreeTrackerInitialized = true;

  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.rd-lt-btn');
    if (!btn) return;

    var params = new URLSearchParams(window.location.search);
    var payload = {
      action: 'click',
      tree_id: btn.getAttribute('data-tree-id') || ${JSON.stringify(state.treeId)},
      tree_name: btn.getAttribute('data-tree-name') || ${JSON.stringify(state.treeName)},
      event: btn.getAttribute('data-gtm-event') || 'rd_linktree_click',
      gtm_event: btn.getAttribute('data-gtm-event') || 'rd_linktree_click',
      gtm_category: btn.getAttribute('data-gtm-category') || 'Linktree RD',
      gtm_label: btn.getAttribute('data-gtm-label') || btn.innerText.trim(),
      button_label: btn.getAttribute('data-gtm-label') || btn.innerText.trim(),
      button_id: btn.id || '',
      button_url: btn.getAttribute('href') || '',
      page_url: window.location.href,
      utm_source: params.get('utm_source') || '(direto)',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      device: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
    };

    /* 1. Envia para o Google Tag Manager (dataLayer) */
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    /* 2. Envia automaticamente para a Planilha Google (Dashboard) sem travar a navegação */
    if (SHEETS_WEBHOOK_URL) {
      try {
        var blob = new Blob([JSON.stringify(payload)], { type: 'text/plain;charset=utf-8' });
        if (navigator.sendBeacon) {
          navigator.sendBeacon(SHEETS_WEBHOOK_URL, blob);
        } else {
          fetch(SHEETS_WEBHOOK_URL, { method: 'POST', body: blob, mode: 'no-cors', keepalive: true });
        }
      } catch (err) {}
    }

    /* 3. Se configurado, aciona o clique de um botão/popup nativo do RD Station */
    var rdTrigger = btn.getAttribute('data-rd-trigger');
    if (rdTrigger) {
      try {
        var nativeRdEl = document.querySelector(rdTrigger);
        if (nativeRdEl && nativeRdEl !== btn) {
          if (btn.getAttribute('href') === '#' || btn.getAttribute('href').indexOf('#rd-') === 0) {
            e.preventDefault();
          }
          nativeRdEl.click();
        }
      } catch (err) {}
    }
  }, true);
})();
</script>`;
}

function generateFullSingleComponentCode() {
  const styles = generateStylesBlock();
  const header = generateHeaderHtml();
  const buttons = state.links.map((l, i) => generateSingleButtonHtml(l, i)).join('\n    ');
  const script = generateTrackingScript();

  return `${styles}

<div class="rd-lt-root" data-tree-id="${escapeHtml(state.treeId)}">
  ${header}
  <div class="rd-lt-links">
    ${buttons}
  </div>
</div>

${script}`;
}

/* =========================================================================
   SELETOR DE ÁRVORES & DASHBOARD MULTI-LINKTREE
   ========================================================================= */

function renderTreeSwitcher() {
  const select = document.getElementById('select-active-tree');
  const dashFilter = document.getElementById('dash-filter-tree');
  const currentFilterVal = dashFilter.value || 'ALL';

  select.innerHTML = '';
  dashFilter.innerHTML = `<option value="ALL">Todas as Árvores (Consolidado)</option>`;

  Object.values(treesMap).forEach((tree) => {
    const badge = tree.source === 'sheets' ? '☁️ ' : '📁 ';
    const opt = document.createElement('option');
    opt.value = tree.treeId;
    opt.textContent = `${badge}${tree.treeName} (${tree.treeId})`;
    if (tree.treeId === state.treeId) opt.selected = true;
    select.appendChild(opt);

    const fOpt = document.createElement('option');
    fOpt.value = tree.treeId;
    fOpt.textContent = `${tree.treeName} (${tree.treeId})`;
    dashFilter.appendChild(fOpt);
  });

  if ([...dashFilter.options].some((o) => o.value === currentFilterVal)) {
    dashFilter.value = currentFilterVal;
  }

  document.getElementById('input-tree-id').value = state.treeId;
  document.getElementById('input-tree-name').value = state.treeName;
  const exportBadge = document.getElementById('export-tree-id-badge');
  if (exportBadge) exportBadge.textContent = state.treeId;
}

function renderDashboard() {
  const allClicks = sheetsWebhookUrl && cloudClicksCache.length > 0 ? cloudClicksCache : getLocalClicks();
  const treeFilter = document.getElementById('dash-filter-tree').value || 'ALL';
  const daysFilter = document.getElementById('dash-filter-days').value || 'ALL';

  const now = Date.now();
  const maxAgeMs = daysFilter === 'ALL' ? Infinity : Number(daysFilter) * 24 * 3600 * 1000;

  const filtered = allClicks.filter((c) => {
    if (treeFilter !== 'ALL' && c.tree_id !== treeFilter) return false;
    if (maxAgeMs !== Infinity && c.timestamp) {
      const t = new Date(c.timestamp).getTime();
      if (!Number.isNaN(t) && now - t > maxAgeMs) return false;
    }
    return true;
  });

  // Atualiza KPIs
  document.getElementById('kpi-total-clicks').textContent = String(filtered.length);
  document.getElementById('kpi-source-mode').textContent =
    sheetsWebhookUrl && cloudClicksCache.length > 0 ? '☁️ Planilha Google ao vivo' : '⚡ Simulador / Dados locais';

  const treesSet = new Set(filtered.map((c) => c.tree_id));
  document.getElementById('kpi-active-trees').textContent = String(treesSet.size);

  const utmCounts = {};
  const buttonStats = {};

  filtered.forEach((c) => {
    const utm = c.utm_source || '(direto)';
    utmCounts[utm] = (utmCounts[utm] || 0) + 1;

    const key = `${c.tree_id}::${c.button_id || c.button_label}`;
    if (!buttonStats[key]) {
      buttonStats[key] = {
        treeId: c.tree_id,
        treeName: c.tree_name || c.tree_id,
        buttonId: c.button_id || '—',
        buttonLabel: c.button_label || c.button_id || 'Botão',
        count: 0,
        lastClick: c.timestamp || '',
        utms: {}
      };
    }
    buttonStats[key].count += 1;
    if (c.timestamp && c.timestamp > buttonStats[key].lastClick) {
      buttonStats[key].lastClick = c.timestamp;
    }
    buttonStats[key].utms[utm] = (buttonStats[key].utms[utm] || 0) + 1;
  });

  const sortedUtms = Object.entries(utmCounts).sort((a, b) => b[1] - a[1]);
  document.getElementById('kpi-top-utm').textContent = sortedUtms.length > 0 ? `${sortedUtms[0][0]} (${sortedUtms[0][1]})` : '—';

  const sortedButtons = Object.values(buttonStats).sort((a, b) => b.count - a.count);
  if (sortedButtons.length > 0) {
    document.getElementById('kpi-top-btn').textContent = sortedButtons[0].buttonLabel;
    document.getElementById('kpi-top-btn-count').textContent = `${sortedButtons[0].count} cliques (${sortedButtons[0].treeId})`;
  } else {
    document.getElementById('kpi-top-btn').textContent = '—';
    document.getElementById('kpi-top-btn-count').textContent = '0 cliques';
  }

  // Renderiza Gráfico de Barras
  const barsContainer = document.getElementById('dashboard-bars-container');
  const maxCount = sortedButtons.length > 0 ? sortedButtons[0].count : 1;

  if (sortedButtons.length === 0) {
    barsContainer.innerHTML = `<div class="form-hint">Nenhum clique encontrado para este filtro. Clique em "🧪 Simular Clique Teste" acima ou em um botão do Preview!</div>`;
  } else {
    barsContainer.innerHTML = sortedButtons
      .slice(0, 8)
      .map((item) => {
        const pct = Math.max(6, Math.round((item.count / maxCount) * 100));
        return `
          <div class="bar-row">
            <div class="bar-row-meta">
              <span>${escapeHtml(item.buttonLabel)} <small style="color:#94a3b8;">[${escapeHtml(item.treeId)}]</small></span>
              <span style="color:#34d399;">${item.count} cliques</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${pct}%;"></div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // Renderiza Tabela Responsiva
  const tbody = document.getElementById('dashboard-table-body');
  if (sortedButtons.length === 0) {
    tbody.innerHTML = `<tr><th scope="row">Sem registros</th><td colspan="5">Nenhum clique registrado no período selecionado.</td></tr>`;
  } else {
    tbody.innerHTML = sortedButtons
      .map((item) => {
        const topUtmEntry = Object.entries(item.utms).sort((a, b) => b[1] - a[1])[0];
        const topUtmStr = topUtmEntry ? `${topUtmEntry[0]} (${topUtmEntry[1]})` : '(direto)';
        const dateFormatted = item.lastClick
          ? new Date(item.lastClick).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
          : '—';

        return `
          <tr>
            <th scope="row">${escapeHtml(item.buttonLabel)}</th>
            <td><code>${escapeHtml(item.treeId)}</code></td>
            <td><code>${escapeHtml(item.buttonId)}</code></td>
            <td>${escapeHtml(topUtmStr)}</td>
            <td>${escapeHtml(dateFormatted)}</td>
            <td><strong style="color:#34d399;">${item.count}</strong></td>
          </tr>
        `;
      })
      .join('');
  }
}

/* =========================================================================
   SINCRONIZAÇÃO DO FORMULÁRIO E EDITOR DE LINKS
   ========================================================================= */

function syncFormInputsFromState() {
  document.getElementById('brand-layout').value = state.brand.layout;
  const sizeInput = document.getElementById('brand-logo-size');
  sizeInput.value = state.brand.logoSize;
  sizeInput.style.setProperty('--progress', `${((state.brand.logoSize - 56) / (220 - 56)) * 100}%`);
  document.getElementById('label-logo-size').textContent = `${state.brand.logoSize}px`;

  document.getElementById('brand-logo-url').value = state.brand.logoUrl;
  document.getElementById('brand-banner-url').value = state.brand.bannerUrl;
  document.getElementById('brand-alt').value = state.brand.alt;
  document.getElementById('brand-link').value = state.brand.link;
  document.getElementById('brand-title').value = state.brand.title;
  document.getElementById('brand-bio').value = state.brand.bio;

  const layout = state.brand.layout;
  document.getElementById('group-logo-url').style.display =
    layout === 'logo-circle' || layout === 'logo-rounded' || layout === 'banner-and-logo' ? '' : 'none';
  document.getElementById('group-logo-size').style.display =
    layout === 'logo-circle' || layout === 'logo-rounded' || layout === 'banner-and-logo' ? '' : 'none';
  document.getElementById('group-banner-url').style.display =
    layout === 'banner-full' || layout === 'banner-and-logo' ? '' : 'none';

  document.getElementById('design-transparent-bg').checked = state.design.transparentBg;
  document.getElementById('group-bg-color').style.opacity = state.design.transparentBg ? '0.45' : '1';
  document.getElementById('design-bg-color').value = state.design.bgColor;
  document.getElementById('design-bg-color-hex').value = state.design.bgColor;
  document.getElementById('design-text-color').value = state.design.textColor;
  document.getElementById('design-text-color-hex').value = state.design.textColor;
  document.getElementById('design-btn-bg').value = state.design.btnBg;
  document.getElementById('design-btn-bg-hex').value = state.design.btnBg;
  document.getElementById('design-btn-text').value = state.design.btnText;
  document.getElementById('design-btn-text-hex').value = state.design.btnText;
  document.getElementById('design-btn-border').value = state.design.btnBorder;
  document.getElementById('design-btn-border-hex').value = state.design.btnBorder;
  document.getElementById('design-btn-radius').value = state.design.btnRadius;
  document.getElementById('design-max-width').value = state.design.maxWidth;
  document.getElementById('design-icon-size').value = state.design.iconSize;

  document.getElementById('input-sheets-url').value = sheetsWebhookUrl;
}

function renderLinksEditor() {
  const container = document.getElementById('links-editor-container');
  container.innerHTML = '';

  if (state.links.length === 0) {
    container.innerHTML = `<div class="info-callout">Nenhum link adicionado ainda. Clique em <strong>+ Adicionar Link</strong> acima para criar o primeiro botão.</div>`;
    return;
  }

  state.links.forEach((link, idx) => {
    const card = document.createElement('div');
    card.className = 'link-editor-card';

    const iconOptionsHtml = Object.entries(SVG_ICONS)
      .map(([key, item]) => `<option value="${key}" ${link.iconType === key ? 'selected' : ''}>${item.label}</option>`)
      .join('');

    card.innerHTML = `
      <div class="link-card-header" data-toggle-idx="${idx}">
        <div class="link-card-title">
          <span>#${idx + 1}</span>
          <span class="truncate">${escapeHtml(link.title || 'Link sem título')}</span>
          <span class="gtm-pill" title="Evento GTM">${escapeHtml(link.gtmEvent || 'rd_linktree_click')}</span>
        </div>
        <div class="link-card-controls">
          <button type="button" class="icon-btn" data-move-up="${idx}" title="Mover para cima" aria-label="Mover link ${idx + 1} para cima" ${idx === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="icon-btn" data-move-down="${idx}" title="Mover para baixo" aria-label="Mover link ${idx + 1} para baixo" ${idx === state.links.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="icon-btn" data-duplicate="${idx}" title="Duplicar este link" aria-label="Duplicar link ${idx + 1}">⧉</button>
          <button type="button" class="icon-btn" data-delete="${idx}" title="Excluir link" aria-label="Excluir link ${idx + 1}" style="color:#fca5a5;">✕</button>
          <button type="button" class="icon-btn" data-toggle-btn="${idx}" aria-label="Expandir ou recolher configurações do link">${link.collapsed ? '▼' : '▲'}</button>
        </div>
      </div>

      <div class="link-card-body ${link.collapsed ? 'collapsed' : ''}">
        <div class="form-grid">
          <div class="form-group">
            <label>Texto Principal do Botão</label>
            <input type="text" data-field="title" data-idx="${idx}" value="${escapeHtml(link.title)}" placeholder="Ex: Falar no WhatsApp" />
          </div>

          <div class="form-group">
            <label>Subtítulo Opcional (abaixo do texto)</label>
            <input type="text" data-field="subtitle" data-idx="${idx}" value="${escapeHtml(link.subtitle)}" placeholder="Ex: Resposta imediata" />
          </div>

          <div class="form-group">
            <label>URL de Destino (ou #ancora do RD)</label>
            <input type="text" data-field="url" data-idx="${idx}" value="${escapeHtml(link.url)}" placeholder="https://... ou #rd-section-form" />
          </div>

          <div class="form-group">
            <label>Abertura do Link</label>
            <select data-field="target" data-idx="${idx}">
              <option value="_blank" ${link.target === '_blank' ? 'selected' : ''}>Nova aba (_blank)</option>
              <option value="_self" ${link.target === '_self' ? 'selected' : ''}>Mesma aba (_self / Âncora RD)</option>
            </select>
          </div>

          <div class="form-group">
            <label>Ícone ou Imagem no Botão</label>
            <select data-field="iconType" data-idx="${idx}">
              ${iconOptionsHtml}
            </select>
          </div>

          <div class="form-group" style="${link.iconType === 'custom_image' ? '' : 'display:none;'}" id="custom-img-group-${idx}">
            <label>URL ou Upload da Imagem do Botão</label>
            <div class="upload-inline">
              <input type="text" data-field="customImageUrl" data-idx="${idx}" value="${escapeHtml(link.customImageUrl)}" placeholder="https://.../icone.png" />
              <label class="btn btn-secondary btn-sm file-upload-label">
                📁 Upload
                <input type="file" data-upload-link-img="${idx}" accept="image/*" hidden />
              </label>
            </div>
          </div>

          <div class="form-group full">
            <label class="checkbox-row checkbox-label">
              <input type="checkbox" class="visually-hidden" data-field="highlight" data-idx="${idx}" ${link.highlight ? 'checked' : ''} />
              <span>Destacar este botão com borda luminosa (Ideal para o CTA principal)</span>
            </label>
          </div>
        </div>

        <div class="gtm-subbox">
          <div class="gtm-subbox-title">
            <span>🏷️ Tags do GTM, Dashboard Sheets &amp; Botão Nativo RD</span>
            <span style="font-weight:400; font-size:0.74rem; color:#94a3b8;">Rastreamento automático</span>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label>ID HTML do Botão (Click ID)</label>
              <input type="text" data-field="id" data-idx="${idx}" value="${escapeHtml(link.id)}" placeholder="rd-btn-whatsapp" />
            </div>

            <div class="form-group">
              <label>Nome do Evento GTM (dataLayer)</label>
              <input type="text" data-field="gtmEvent" data-idx="${idx}" value="${escapeHtml(link.gtmEvent)}" placeholder="click_linktree_whatsapp" />
            </div>

            <div class="form-group">
              <label>Rótulo no Dashboard / GTM</label>
              <input type="text" data-field="gtmLabel" data-idx="${idx}" value="${escapeHtml(link.gtmLabel)}" placeholder="WhatsApp Comercial" />
            </div>

            <div class="form-group">
              <label title="Se você tiver um botão nativo do RD na LP (ex: #rd-button-joq3m2w0) que abre um Pop-up do RD, informe o seletor aqui">
                Acionar Botão/Popup Nativo do RD (Opcional)
              </label>
              <input type="text" data-field="rdNativeSelector" data-idx="${idx}" value="${escapeHtml(link.rdNativeSelector || '')}" placeholder="Ex: #rd-button-joq3m2w0" />
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderModularExportSnippets() {
  const container = document.getElementById('modular-codes-container');
  const baseStylesAndScript = `${generateStylesBlock()}\n${generateTrackingScript()}`;
  const headerComponentCode = `<div class="rd-lt-root" style="margin-bottom: 12px;">\n  ${generateHeaderHtml()}\n</div>`;

  let html = `
    <div class="modular-snippet-card">
      <h4>
        <span>Passo 1: Estilos + Script GTM/Sheets (Cole no 1º Componente HTML ou em Edição Avançada)</span>
      </h4>
      <div class="copyable">
        <span class="copy">
          <button type="button" class="copy-button" command="--copy" commandfor="code-mod-base" aria-label="Copiar estilos e script GTM">
            <span class="icon-copy" aria-hidden="true">📋</span>
            <span class="icon-check" aria-hidden="true">✓</span>
            <span>Copiar Base CSS + Script</span>
          </button>
          <span class="tip" role="status"></span>
        </span>
        <pre><code id="code-mod-base">${escapeHtml(baseStylesAndScript)}</code></pre>
      </div>
    </div>

    <div class="modular-snippet-card">
      <h4>
        <span>Componente HTML — Marca / Topo + Bio</span>
      </h4>
      <div class="copyable">
        <span class="copy">
          <button type="button" class="copy-button" command="--copy" commandfor="code-mod-header" aria-label="Copiar código do topo e marca">
            <span class="icon-copy" aria-hidden="true">📋</span>
            <span class="icon-check" aria-hidden="true">✓</span>
            <span>Copiar Topo</span>
          </button>
          <span class="tip" role="status"></span>
        </span>
        <pre><code id="code-mod-header">${escapeHtml(headerComponentCode)}</code></pre>
      </div>
    </div>
  `;

  state.links.forEach((link, idx) => {
    const snippetId = `code-mod-link-${idx}`;
    const btnWrapperCode = `<div class="rd-lt-root" style="padding-top: 6px; padding-bottom: 6px; background: transparent; box-shadow: none;">\n  ${generateSingleButtonHtml(link, idx)}\n</div>`;

    html += `
      <div class="modular-snippet-card">
        <h4>
          <span>Componente HTML Individual — Botão #${idx + 1}: ${escapeHtml(link.title || 'Sem título')}</span>
        </h4>
        <div class="copyable">
          <span class="copy">
            <button type="button" class="copy-button" command="--copy" commandfor="${snippetId}" aria-label="Copiar código do botão ${idx + 1}">
              <span class="icon-copy" aria-hidden="true">📋</span>
              <span class="icon-check" aria-hidden="true">✓</span>
              <span>Copiar Botão #${idx + 1}</span>
            </button>
            <span class="tip" role="status"></span>
          </span>
          <pre><code id="${snippetId}">${escapeHtml(btnWrapperCode)}</code></pre>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function updatePreviewAndExport() {
  saveAllTreesLocally();
  const fullCode = generateFullSingleComponentCode();

  const previewMount = document.getElementById('live-preview-mount');
  const buttonsHtml = state.links.map((l, i) => generateSingleButtonHtml(l, i)).join('\n');
  previewMount.innerHTML = `
    ${generateStylesBlock()}
    <div class="rd-lt-root">
      ${generateHeaderHtml()}
      <div class="rd-lt-links">
        ${buttonsHtml}
      </div>
    </div>
  `;

  document.getElementById('code-single-component').textContent = fullCode;
  renderModularExportSnippets();
}

/* =========================================================================
   COPY BUTTON LOGIC (Per modern-web-guidance `copy-button`)
   ========================================================================= */

const copyTimers = new WeakMap();
let lastCopyMessage = '';

function legacyCopy(text) {
  const field = Object.assign(document.createElement('textarea'), { value: text });
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;inset-block-start:0;opacity:0';
  document.body.append(field);
  field.select();
  try {
    return document.execCommand('copy');
  } finally {
    field.remove();
  }
}

function reportCopyStatus(button, ok) {
  const tip = button.nextElementSibling;
  if (!tip) return;
  clearTimeout(copyTimers.get(button));
  button.removeAttribute('data-copied');
  button.removeAttribute('data-failed');
  let message = ok ? 'Copiado!' : 'Falha ao copiar';
  if (message === lastCopyMessage) message += '\u00A0';
  lastCopyMessage = message;
  tip.textContent = '';
  void button.offsetWidth;
  button.setAttribute(ok ? 'data-copied' : 'data-failed', '');
  requestAnimationFrame(() => {
    tip.textContent = message;
  });
  copyTimers.set(
    button,
    setTimeout(() => {
      button.removeAttribute('data-copied');
      button.removeAttribute('data-failed');
      tip.textContent = '';
    }, 2000)
  );
}

async function copyFromTarget(button, target) {
  const text = target.matches('input, textarea') ? target.value : target.innerText.trim();
  if (!text) return;
  try {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      if (!legacyCopy(text)) throw new Error('Copy failed');
    }
    reportCopyStatus(button, true);
  } catch {
    reportCopyStatus(button, false);
  }
}

if ('CommandEvent' in window) {
  document.addEventListener(
    'command',
    (event) => {
      if (event.command && event.command.startsWith('--copy')) {
        copyFromTarget(event.source, event.target);
      }
    },
    true
  );
} else {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('button[command^="--copy"]');
    if (!button) return;
    const target = document.getElementById(button.getAttribute('commandfor'));
    if (target) copyFromTarget(button, target);
  });
}

/* =========================================================================
   EVENT LISTENERS DA APLICAÇÃO
   ========================================================================= */

function initEvents() {
  // Navegação por Abas
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetTab = document.getElementById(btn.dataset.tab);
      if (targetTab) targetTab.classList.add('active');

      if (btn.dataset.tab === 'tab-dashboard') {
        renderDashboard();
      }
    });
  });

  document.getElementById('btn-go-code').addEventListener('click', () => {
    const exportTabBtn = document.querySelector('.tab-btn[data-tab="tab-export"]');
    if (exportTabBtn) exportTabBtn.click();
  });

  // Gerenciador Multi-Linktree (Topo)
  document.getElementById('select-active-tree').addEventListener('change', (e) => {
    const selectedId = e.target.value;
    if (treesMap[selectedId]) {
      activeTreeId = selectedId;
      state = treesMap[selectedId];
      renderTreeSwitcher();
      syncFormInputsFromState();
      renderLinksEditor();
      updatePreviewAndExport();
    }
  });

  document.getElementById('btn-new-tree').addEventListener('click', () => {
    const namePrompt = prompt('Qual o nome do novo Linktree? (Ex: Campanha Black Friday)');
    if (!namePrompt) return;
    const newId = slugify(namePrompt) || `linktree-${Date.now()}`;
    const clone = JSON.parse(JSON.stringify(BUILTIN_TREES['institucional-principal']));
    clone.treeId = newId;
    clone.treeName = namePrompt.trim();
    clone.source = 'local';
    clone.brand.title = namePrompt.trim();
    treesMap[newId] = clone;
    activeTreeId = newId;
    state = clone;
    renderTreeSwitcher();
    syncFormInputsFromState();
    renderLinksEditor();
    updatePreviewAndExport();
  });

  document.getElementById('input-tree-id').addEventListener('change', (e) => {
    const cleanId = slugify(e.target.value) || state.treeId;
    const oldId = state.treeId;
    if (cleanId !== oldId) {
      delete treesMap[oldId];
      state.treeId = cleanId;
      activeTreeId = cleanId;
      treesMap[cleanId] = state;
      renderTreeSwitcher();
      updatePreviewAndExport();
    }
  });

  document.getElementById('input-tree-name').addEventListener('input', (e) => {
    state.treeName = e.target.value;
    renderTreeSwitcher();
    updatePreviewAndExport();
  });

  document.getElementById('btn-save-cloud').addEventListener('click', () => {
    saveCurrentTreeToSheets();
  });

  // Dashboard & Planilha Google
  document.getElementById('btn-connect-sheets').addEventListener('click', () => {
    syncWithGoogleSheets(true);
  });

  document.getElementById('btn-refresh-dashboard').addEventListener('click', () => {
    syncWithGoogleSheets(false);
  });

  document.getElementById('dash-filter-tree').addEventListener('change', renderDashboard);
  document.getElementById('dash-filter-days').addEventListener('change', renderDashboard);

  document.getElementById('btn-test-click-cloud').addEventListener('click', async () => {
    const firstBtn = state.links[0] || { id: 'rd-btn-teste', gtmLabel: 'Botão Teste', gtmEvent: 'click_teste', url: '#' };
    const sampleClick = {
      action: 'click',
      timestamp: new Date().toISOString(),
      tree_id: state.treeId,
      tree_name: state.treeName,
      button_id: firstBtn.id,
      button_label: firstBtn.gtmLabel || firstBtn.title || 'Botão Teste',
      gtm_event: firstBtn.gtmEvent || 'rd_linktree_click',
      button_url: firstBtn.url || '#',
      page_url: window.location.href,
      utm_source: 'teste-painel',
      utm_medium: 'dashboard',
      utm_campaign: state.treeId,
      device: 'Desktop'
    };

    recordLocalClick(sampleClick);
    cloudClicksCache.push(sampleClick);
    renderDashboard();

    if (sheetsWebhookUrl) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(sampleClick)
        });
        syncWithGoogleSheets(false);
      } catch {}
    }
  });

  // Eventos da Aba 1 (Marca e Topo)
  document.getElementById('brand-layout').addEventListener('change', (e) => {
    state.brand.layout = e.target.value;
    syncFormInputsFromState();
    updatePreviewAndExport();
  });

  document.getElementById('brand-logo-size').addEventListener('input', (e) => {
    const val = Number(e.target.value);
    state.brand.logoSize = val;
    e.target.style.setProperty('--progress', `${((val - 56) / (220 - 56)) * 100}%`);
    document.getElementById('label-logo-size').textContent = `${val}px`;
    updatePreviewAndExport();
  });

  ['logoUrl', 'bannerUrl', 'alt', 'link', 'title', 'bio'].forEach((key) => {
    const mapId = {
      logoUrl: 'brand-logo-url',
      bannerUrl: 'brand-banner-url',
      alt: 'brand-alt',
      link: 'brand-link',
      title: 'brand-title',
      bio: 'brand-bio'
    }[key];

    document.getElementById(mapId).addEventListener('input', (e) => {
      state.brand[key] = e.target.value;
      updatePreviewAndExport();
    });
  });

  function handleImageUpload(fileInput, callback) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 600;
          let { width, height } = img;
          if (width > maxDim || height > maxDim) {
            const ratio = Math.min(maxDim / width, maxDim / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/webp', 0.85);
          callback(dataUrl);
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  handleImageUpload(document.getElementById('upload-logo-file'), (dataUrl) => {
    state.brand.logoUrl = dataUrl;
    document.getElementById('brand-logo-url').value = dataUrl;
    updatePreviewAndExport();
  });

  handleImageUpload(document.getElementById('upload-banner-file'), (dataUrl) => {
    state.brand.bannerUrl = dataUrl;
    document.getElementById('brand-banner-url').value = dataUrl;
    updatePreviewAndExport();
  });

  // Eventos da Aba 2 (Links & GTM)
  document.getElementById('btn-add-link').addEventListener('click', () => {
    const nextNum = state.links.length + 1;
    state.links.push({
      id: `rd-btn-link-${nextNum}`,
      title: `Novo Canal de Atendimento #${nextNum}`,
      subtitle: 'Clique para acessar',
      url: 'https://',
      target: '_blank',
      iconType: 'globe',
      customImageUrl: '',
      highlight: false,
      gtmEvent: `click_linktree_item_${nextNum}`,
      gtmCategory: 'Linktree RD',
      gtmLabel: `Link ${nextNum}`,
      rdNativeSelector: '',
      collapsed: false
    });
    renderLinksEditor();
    updatePreviewAndExport();
  });

  const linksContainer = document.getElementById('links-editor-container');

  linksContainer.addEventListener('input', (e) => {
    const field = e.target.dataset.field;
    const idx = Number(e.target.dataset.idx);
    if (!field || Number.isNaN(idx) || !state.links[idx]) return;

    if (e.target.type === 'checkbox') {
      state.links[idx][field] = e.target.checked;
    } else {
      state.links[idx][field] = e.target.value;
    }

    if (field === 'iconType') {
      const customImgGroup = document.getElementById(`custom-img-group-${idx}`);
      if (customImgGroup) {
        customImgGroup.style.display = e.target.value === 'custom_image' ? '' : 'none';
      }
    }

    const card = e.target.closest('.link-editor-card');
    if (card) {
      if (field === 'title') {
        const titleSpan = card.querySelector('.link-card-title .truncate');
        if (titleSpan) titleSpan.textContent = e.target.value || 'Link sem título';
      }
      if (field === 'gtmEvent') {
        const pill = card.querySelector('.gtm-pill');
        if (pill) pill.textContent = e.target.value || 'rd_linktree_click';
      }
    }

    updatePreviewAndExport();
  });

  linksContainer.addEventListener('change', (e) => {
    if (e.target.dataset.uploadLinkImg !== undefined) {
      const idx = Number(e.target.dataset.uploadLinkImg);
      const file = e.target.files && e.target.files[0];
      if (!file || !state.links[idx]) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        state.links[idx].customImageUrl = ev.target.result;
        renderLinksEditor();
        updatePreviewAndExport();
      };
      reader.readAsDataURL(file);
    }
  });

  linksContainer.addEventListener('click', (e) => {
    const upBtn = e.target.closest('[data-move-up]');
    if (upBtn) {
      e.stopPropagation();
      const idx = Number(upBtn.dataset.moveUp);
      if (idx > 0) {
        const temp = state.links[idx - 1];
        state.links[idx - 1] = state.links[idx];
        state.links[idx] = temp;
        renderLinksEditor();
        updatePreviewAndExport();
      }
      return;
    }

    const downBtn = e.target.closest('[data-move-down]');
    if (downBtn) {
      e.stopPropagation();
      const idx = Number(downBtn.dataset.moveDown);
      if (idx < state.links.length - 1) {
        const temp = state.links[idx + 1];
        state.links[idx + 1] = state.links[idx];
        state.links[idx] = temp;
        renderLinksEditor();
        updatePreviewAndExport();
      }
      return;
    }

    const dupBtn = e.target.closest('[data-duplicate]');
    if (dupBtn) {
      e.stopPropagation();
      const idx = Number(dupBtn.dataset.duplicate);
      const clone = JSON.parse(JSON.stringify(state.links[idx]));
      clone.id = `${clone.id}-copia`;
      clone.title = `${clone.title} (Cópia)`;
      clone.collapsed = false;
      state.links.splice(idx + 1, 0, clone);
      renderLinksEditor();
      updatePreviewAndExport();
      return;
    }

    const delBtn = e.target.closest('[data-delete]');
    if (delBtn) {
      e.stopPropagation();
      const idx = Number(delBtn.dataset.delete);
      state.links.splice(idx, 1);
      renderLinksEditor();
      updatePreviewAndExport();
      return;
    }

    const toggleHeader = e.target.closest('[data-toggle-idx]');
    if (toggleHeader && !e.target.closest('button:not([data-toggle-btn])')) {
      const idx = Number(toggleHeader.dataset.toggleIdx);
      state.links[idx].collapsed = !state.links[idx].collapsed;
      renderLinksEditor();
    }
  });

  // Eventos da Aba 3 (Design e Cores)
  const colorPairs = [
    ['design-bg-color', 'design-bg-color-hex', 'bgColor'],
    ['design-text-color', 'design-text-color-hex', 'textColor'],
    ['design-btn-bg', 'design-btn-bg-hex', 'btnBg'],
    ['design-btn-text', 'design-btn-text-hex', 'btnText'],
    ['design-btn-border', 'design-btn-border-hex', 'btnBorder']
  ];

  colorPairs.forEach(([pickerId, hexId, prop]) => {
    const picker = document.getElementById(pickerId);
    const hex = document.getElementById(hexId);

    picker.addEventListener('input', (e) => {
      state.design[prop] = e.target.value;
      hex.value = e.target.value;
      updatePreviewAndExport();
    });

    hex.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (/^#[0-9a-fA-F]{6}$/.test(val)) {
        state.design[prop] = val;
        picker.value = val;
        updatePreviewAndExport();
      }
    });
  });

  document.getElementById('design-transparent-bg').addEventListener('change', (e) => {
    state.design.transparentBg = e.target.checked;
    document.getElementById('group-bg-color').style.opacity = e.target.checked ? '0.45' : '1';
    updatePreviewAndExport();
  });

  ['btnRadius', 'maxWidth', 'iconSize'].forEach((prop) => {
    const idMap = {
      btnRadius: 'design-btn-radius',
      maxWidth: 'design-max-width',
      iconSize: 'design-icon-size'
    }[prop];

    document.getElementById(idMap).addEventListener('change', (e) => {
      state.design[prop] = e.target.value;
      updatePreviewAndExport();
    });
  });

  const PRESETS = {
    'rd-dark': {
      transparentBg: false,
      bgColor: '#0f172a',
      textColor: '#f8fafc',
      btnBg: '#1e293b',
      btnText: '#ffffff',
      btnBorder: '#3b82f6'
    },
    'clean-light': {
      transparentBg: false,
      bgColor: '#f8fafc',
      textColor: '#0f172a',
      btnBg: '#ffffff',
      btnText: '#0f172a',
      btnBorder: '#2563eb'
    },
    emerald: {
      transparentBg: false,
      bgColor: '#064e3b',
      textColor: '#ecfdf5',
      btnBg: '#047857',
      btnText: '#ffffff',
      btnBorder: '#34d399'
    },
    'transparent-rd': {
      transparentBg: true,
      bgColor: '#0f172a',
      textColor: '#ffffff',
      btnBg: '#1e293b',
      btnText: '#ffffff',
      btnBorder: '#38bdf8'
    }
  };

  document.querySelectorAll('[data-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = PRESETS[btn.dataset.preset];
      if (!preset) return;
      Object.assign(state.design, preset);
      syncFormInputsFromState();
      updatePreviewAndExport();
    });
  });

  // Alternar Preview Mobile / Desktop
  document.querySelectorAll('[data-device]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-device]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const sim = document.getElementById('rd-simulator');
      sim.classList.toggle('mobile-view', btn.dataset.device === 'mobile');
      sim.classList.toggle('desktop-view', btn.dataset.device === 'desktop');
    });
  });

  // Simulador de clique no Preview (registra no dataLayer, no Dashboard local e na Planilha Google se conectada!)
  document.getElementById('live-preview-mount').addEventListener('click', (e) => {
    const btn = e.target.closest('.rd-lt-btn');
    if (!btn) return;
    e.preventDefault();

    const payload = {
      action: 'click',
      timestamp: new Date().toISOString(),
      tree_id: state.treeId,
      tree_name: state.treeName,
      event: btn.getAttribute('data-gtm-event') || 'rd_linktree_click',
      gtm_event: btn.getAttribute('data-gtm-event') || 'rd_linktree_click',
      gtm_category: btn.getAttribute('data-gtm-category') || 'Linktree RD',
      gtm_label: btn.getAttribute('data-gtm-label') || '',
      button_label: btn.getAttribute('data-gtm-label') || '',
      button_id: btn.id || '',
      button_url: btn.getAttribute('href') || '',
      utm_source: 'preview-studio',
      device: 'Preview'
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    recordLocalClick(payload);
    cloudClicksCache.push(payload);
    renderDashboard();

    if (sheetsWebhookUrl) {
      try {
        const blob = new Blob([JSON.stringify(payload)], { type: 'text/plain;charset=utf-8' });
        if (navigator.sendBeacon) navigator.sendBeacon(sheetsWebhookUrl, blob);
      } catch {}
    }

    const logList = document.getElementById('datalayer-log-list');
    const entry = document.createElement('div');
    entry.className = 'console-entry';
    const time = new Date().toLocaleTimeString('pt-BR');
    entry.innerHTML = `<strong>[${time}] Clique (${escapeHtml(state.treeId)}):</strong> <code>${escapeHtml(JSON.stringify({ event: payload.event, button_id: payload.button_id, label: payload.button_label }))}</code>`;
    logList.prepend(entry);
  });

  document.getElementById('btn-clear-console').addEventListener('click', () => {
    document.getElementById('datalayer-log-list').innerHTML =
      `<div class="console-entry">Console limpo. Clique em qualquer botão no Preview acima para testar o rastreamento.</div>`;
  });

  // Baixar arquivo .json com o nome exato do slug para colocar na pasta /trees/ do GitHub
  document.getElementById('btn-export-json').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.treeId || 'linktree'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('input-import-json').addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        const tId = imported.treeId || slugify(file.name.replace(/\.json$/i, '')) || `tree-${Date.now()}`;
        const newTree = {
          treeId: tId,
          treeName: imported.treeName || tId,
          source: 'imported',
          brand: { ...BUILTIN_TREES['institucional-principal'].brand, ...(imported.brand || {}) },
          design: { ...BUILTIN_TREES['institucional-principal'].design, ...(imported.design || {}) },
          links: Array.isArray(imported.links) ? imported.links : []
        };
        treesMap[tId] = newTree;
        activeTreeId = tId;
        state = newTree;
        renderTreeSwitcher();
        syncFormInputsFromState();
        renderLinksEditor();
        updatePreviewAndExport();
      } catch {
        alert('Arquivo JSON inválido.');
      }
    };
    reader.readAsText(file);
  });

  // Eventos de Autenticação (Tela de Bloqueio / Senha Base)
  const lockOverlay = document.getElementById('auth-lock-overlay');
  const passInput = document.getElementById('current-password');
  const togglePassBtn = document.getElementById('btn-toggle-pass');
  const errorBox = document.getElementById('auth-error-box');

  if (sessionAppKey) {
    lockOverlay.hidden = true;
  }

  togglePassBtn.addEventListener('click', () => {
    const isPassword = passInput.type === 'password';
    passInput.type = isPassword ? 'text' : 'password';
    togglePassBtn.textContent = isPassword ? '🙈 Ocultar' : '👁️ Mostrar';
    togglePassBtn.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
  });

  document.getElementById('auth-signin-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const typed = passInput.value.trim();
    if (!typed) return;

    errorBox.classList.remove('visible');

    // Se já houver URL da planilha configurada, valida a senha direto no servidor do Google Sheets
    if (sheetsWebhookUrl) {
      try {
        const sep = sheetsWebhookUrl.includes('?') ? '&' : '?';
        const res = await fetch(`${sheetsWebhookUrl}${sep}action=all&key=${encodeURIComponent(typed)}&t=${Date.now()}`);
        const data = await res.json();
        if (data && data.authError) {
          errorBox.textContent = 'Senha Base recusada pela Planilha Google.';
          errorBox.classList.add('visible');
          return;
        }
      } catch {}
    } else if (typed !== DEFAULT_LOCAL_PASS) {
      errorBox.textContent = 'Senha incorreta. Para o primeiro acesso sem planilha conectada, use: senai2026';
      errorBox.classList.add('visible');
      return;
    }

    sessionAppKey = typed;
    sessionStorage.setItem(SESSION_KEY_AUTH, typed);
    lockOverlay.hidden = true;
    passInput.value = '';

    if (sheetsWebhookUrl) {
      syncWithGoogleSheets(false);
    }
  });

  document.getElementById('btn-lock-app').addEventListener('click', () => {
    sessionAppKey = '';
    sessionStorage.removeItem(SESSION_KEY_AUTH);
    lockOverlay.hidden = false;
    passInput.focus();
  });
}

// Inicialização
renderTreeSwitcher();
syncFormInputsFromState();
renderLinksEditor();
updatePreviewAndExport();
renderDashboard();
initEvents();
loadRepoTreesFolder();
loadAppsScriptPreviewCode();
if (sheetsWebhookUrl) {
  syncWithGoogleSheets(false);
}
