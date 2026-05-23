/**
 * theme-toggle.js — Tema light/dark da landing www.jbraganca.com.br
 *
 * Comportamento:
 *  • Default = 'dark'. Cada HTML tem um <script> inline logo após
 *    <body> que aplica a classe SYNC pra evitar flash light→dark.
 *  • Preferência persiste em localStorage['site-theme'] = 'light' | 'dark'.
 *  • Aplica `body.theme-dark` quando dark.
 *  • Injeta um botão sol/lua na topbar (.atb-main, no início, à esquerda).
 *
 * O CSS do botão e dos overrides vive em shared/theme-dark.css.
 *
 * NOTA sobre sincronização entre sites:
 *   Esta landing é www.jbraganca.com.br e o site privado é
 *   projects.jbraganca.com.br. Por serem origens DIFERENTES, o
 *   localStorage NÃO sincroniza automaticamente entre os dois.
 *   Usar a mesma chave ('site-theme') é só consistência conceitual —
 *   se um dia quiser sync real, precisa de cookie com domain=.jbraganca.com.br.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'site-theme';
  const VALID = new Set(['light', 'dark']);

  function readPref() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (VALID.has(v)) return v;
    } catch (_) {}
    return 'dark';    // default explícito
  }

  function savePref(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (_) {}
  }

  function applyTheme(theme) {
    document.body.classList.toggle('theme-dark', theme === 'dark');
  }

  // ── Botão sol/lua ─────────────────────────────────────────
  const ICON_SUN = `
    <svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>`;
  const ICON_MOON = `
    <svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`;

  function createButton() {
    const btn = document.createElement('button');
    btn.className = 'atb-theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Alternar tema claro/escuro');
    btn.setAttribute('title', 'Alternar entre tema claro e escuro');
    btn.innerHTML = ICON_SUN + ICON_MOON;
    btn.addEventListener('click', () => {
      const atual = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
      const novo = atual === 'dark' ? 'light' : 'dark';
      applyTheme(novo);
      savePref(novo);
    });
    return btn;
  }

  function injectButton() {
    const main = document.querySelector('.atb-main');
    if (!main) return;
    if (main.querySelector('.atb-theme-toggle')) return;
    const btn = createButton();
    // Insere ANTES do .topbar-brand (canto extremo esquerdo).
    const brand = main.querySelector('.topbar-brand');
    if (brand) {
      main.insertBefore(btn, brand);
    } else {
      main.insertBefore(btn, main.firstChild);
    }
  }

  function init() {
    applyTheme(readPref());
    injectButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
