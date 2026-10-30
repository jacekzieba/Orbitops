/* One canonical URL per page; language query variants share that URL. */
(() => {
  const demo = document.body.classList.contains('demo-page');
  const copy = demo ? {
    pl: ['OrbitOps Demo — analiza ryzyka dostaw FibreFlow', 'Przetestuj demonstrator OrbitOps: sygnały ryzyka, zapasy i warianty działań w łańcuchu dostaw. Scenariusz FibreFlow opiera się na fikcyjnych danych.'],
    en: ['OrbitOps Demo — FibreFlow supply risk analysis', 'Explore the OrbitOps demo: risk signals, inventory and response options across a supply chain. The FibreFlow scenario uses fictional data.'],
    de: ['OrbitOps Demo — Lieferkettenrisiken bei FibreFlow', 'Entdecken Sie die OrbitOps-Demo: Risikosignale, Bestände und Handlungsoptionen in der Lieferkette. Das FibreFlow-Szenario nutzt fiktive Daten.']
  } : {
    pl: ['OrbitOps — ryzyko w łańcuchu dostaw i dane satelitarne', 'Rozwijamy platformę łączącą dane satelitarne, pogodowe i firmowe. Poznaj OrbitOps i sprawdź, jak wcześniej dostrzegać ryzyko zakłóceń w łańcuchu dostaw.'],
    en: ['OrbitOps — supply chain risk and satellite data', 'We are developing a platform combining satellite, weather and business data. Discover OrbitOps and explore earlier awareness of supply chain disruptions.'],
    de: ['OrbitOps — Lieferkettenrisiken und Satellitendaten', 'Wir entwickeln eine Plattform für Satelliten-, Wetter- und Unternehmensdaten. Entdecken Sie OrbitOps, um Risiken in Lieferketten früher zu erkennen.']
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
