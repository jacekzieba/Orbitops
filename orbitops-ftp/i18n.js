(() => {
  const catalog = window.OrbitTranslations;
  const supported = ['pl', 'en', 'de'];
  const queryLanguage = new URLSearchParams(location.search).get('lang');
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('orbitops-language'); } catch {}
  let language = supported.includes(queryLanguage) ? queryLanguage : supported.includes(savedLanguage) ? savedLanguage : 'pl';
  const records = [];
  if (!document.body.classList.contains('demo-page')) {
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script,style,.language-switcher')) continue;
    if (catalog[node.textContent.trim()]) records.push({node, source:node.textContent});
  }
  document.querySelectorAll('[aria-label],[alt],[placeholder],meta[name="description"]').forEach(node => {
    for (const attr of ['aria-label','alt','placeholder','content']) {
      const source = node.getAttribute(attr);
      if (source && catalog[source]) records.push({node, attr, source});
    }
  });
  }
  function t(source) {
    const pair = catalog[source.trim()];
    return language === 'pl' || !pair ? source : source.replace(source.trim(), pair[language === 'en' ? 0 : 1]);
  }
  function progress(count) {
    return language === 'en' ? `${count} of 3 checked` : language === 'de' ? `${count} von 3 geprüft` : `${count} z 3 sprawdzonych`;
  }
  function setLanguage(next) {
    if (!supported.includes(next)) return;
    language = next;
    document.documentElement.lang = language;
    records.forEach(({node,attr,source}) => {
      if (!node.isConnected) return;
      if (attr) node.setAttribute(attr,t(source)); else node.textContent=t(source);
    });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.language === language)));
    document.querySelectorAll('#contact-form input,#contact-form textarea').forEach(field => field.setCustomValidity(''));
    try { localStorage.setItem('orbitops-language',language); } catch {}
    const url = new URL(location.href);
    url.searchParams.set('lang',language);
    history.replaceState(null,'',url);
    document.querySelectorAll('[data-language-link]').forEach(link => {
      const target = new URL(link.getAttribute('href'), location.href);
      target.searchParams.set('lang', language);
      link.setAttribute('href', target.pathname + target.search + target.hash);
    });
    document.dispatchEvent(new Event('languagechange'));
  }
  window.OrbitI18n = {t, progress, get language() { return language; }};
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  setLanguage(language);
})();
