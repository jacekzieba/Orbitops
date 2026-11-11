/* One canonical URL per page; language query variants share that URL. */
(() => {
  const demo = document.body.classList.contains('demo-page');
  const copy = demo ? {
    pl: ['OrbitOps Demo — analiza ryzyka dostaw FibreFlow', 'Przetestuj demonstrator OrbitOps: sygnały ryzyka, zapasy i warianty działań w łańcuchu dostaw. Scenariusz FibreFlow opiera się na fikcyjnych danych.'],
    en: ['OrbitOps Demo — FibreFlow supply risk analysis', 'Explore the OrbitOps demo: risk signals, inventory and response options across a supply chain. The FibreFlow scenario uses fictional data.'],
    de: ['OrbitOps Demo — Lieferkettenrisiken bei FibreFlow', 'Entdecken Sie die OrbitOps-Demo: Risikosignale, Bestände und Handlungsoptionen in der Lieferkette. Das FibreFlow-Szenario nutzt fiktive Daten.']
  } : {
    pl: ['OrbitOps — dane, AI i cyfryzacja dla MŚP', 'Cyfryzacja i analityka dostępna dla MŚP. Rozwijamy OrbitOps, by łączyć dane firmy, AI i wiedzę satelitarną w jasne wnioski, wczesne ostrzeżenia i lepsze planowanie.'],
    en: ['OrbitOps — data, AI and digitalisation for SMEs', 'Digitalisation and analytics within reach of SMEs. We are building OrbitOps to connect business data, AI and satellite intelligence for clear insights, early warnings and better planning.'],
    de: ['OrbitOps — Daten, KI und Digitalisierung für KMU', 'Digitalisierung und Analytik für KMU. Wir entwickeln OrbitOps, um Unternehmensdaten, KI und Satelliteninformationen für klare Erkenntnisse, Frühwarnungen und bessere Planung zu verbinden.']
  };
  function update() {
    const lang = window.OrbitI18n?.language || 'pl';
    const [title, description] = copy[lang] || copy.pl;
    document.title = title;
    const values = {
      'meta[name="description"]': description,
      'meta[property="og:title"]': title,
      'meta[property="og:description"]': description,
      'meta[property="og:locale"]': {pl:'pl_PL', en:'en_GB', de:'de_DE'}[lang],
      'meta[name="twitter:title"]': title,
      'meta[name="twitter:description"]': description
    };
    for (const [selector, content] of Object.entries(values)) document.querySelector(selector)?.setAttribute('content', content);
    const schema = document.querySelector('script[type="application/ld+json"]');
    if (schema) {
      const data = JSON.parse(schema.textContent);
      for (const node of data['@graph']) {
        if (node.inLanguage) node.inLanguage = lang;
        if (node['@type'] === 'WebPage') Object.assign(node, {name:title, description});
      }
      schema.textContent = JSON.stringify(data);
    }
  }
  document.addEventListener('languagechange', update);
  update();
})();
