# RD Linktree Studio 🌲

Gerador e gerenciador de múltiplas árvores de links (estilo Linktree) desenhado especificamente para **Componentes HTML de Landing Pages do RD Station Marketing**, com disparo automático para **Google Tag Manager (`dataLayer`)**, acionamento opcional de **botões/pop-ups nativos do RD** e **Dashboard de Cliques integrado via Google Sheets** (sem necessidade de banco de dados pago).

---

## 🚀 Como automatizar tudo (GitHub + Vercel + Google Sheets)

### 1. Ativar a Planilha Google (1 minuto)
1. Crie uma planilha em branco no Google Sheets ([sheets.new](https://sheets.new)).
2. No menu superior, clique em **Extensões > Apps Script**.
3. Apague o código padrão e cole todo o conteúdo do arquivo [`google-apps-script.js`](./google-apps-script.js).
4. Clique em **Implantar > Nova implantação**.
5. Escolha o tipo **App da Web**:
   - **Executar como:** *Eu*
   - **Quem pode acessar:** *Qualquer pessoa*
6. Copie a **URL do App da Web** gerada (termina com `/exec`).
7. Cole essa URL na aba **5. 📊 Dashboard & Sheets** da ferramenta (ou fixe-a direto na linha `const DEFAULT_SHEETS_WEBHOOK_URL = 'SUA_URL_AQUI';` no topo do arquivo [`app.js`](./app.js) para que todos que abrirem o link da Vercel já entrem conectados automaticamente!).

---

### 2. Como salvar múltiplos Linktrees (`.json`)
Você pode guardar suas árvores de links de **duas formas**:

1. **Direto na Planilha Google (Botão `☁️ Salvar na Planilha`):**
   - Ao clicar em **Salvar na Planilha** na barra superior da ferramenta, o JSON completo daquela árvore é salvo na aba `Trees` da sua Planilha Google e fica disponível imediatamente no seletor **🌲 Linktree Ativo** para qualquer pessoa da equipe.
2. **Na pasta `/trees/` do GitHub/Vercel:**
   - Clique em **💾 Baixar .json (/trees)**, coloque o arquivo dentro da pasta [`/trees/`](./trees/) e registre-o no arquivo [`/trees/index.json`](./trees/index.json). A Vercel publica automaticamente a cada `git push`.

---

### 3. Publicando no RD Station
- Na aba **4. Código RD**, escolha:
  - **Opção A (Componente HTML Único):** Para colar a árvore inteira em um só bloco HTML na LP do RD.
  - **Opção B (Múltiplos Componentes HTML):** Para colar a marca e cada botão em blocos HTML separados na LP do RD.
- Todos os cliques feitos lá na Landing Page do RD Station enviam os dados automaticamente para o `dataLayer` (GTM) e para a aba `Cliques` da sua Planilha Google!
