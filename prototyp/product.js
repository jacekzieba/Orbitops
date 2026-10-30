(() => {
  const tabs = [...document.querySelectorAll('[data-workspace-tab]')];
  function openTab(name, focus = false) {
    tabs.forEach(button => {
      const active = button.dataset.workspaceTab === name;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
      document.getElementById(`view-${button.dataset.workspaceTab}`).hidden = !active;
      if (active && focus) button.focus();
    });
  }
  tabs.forEach((button, index) => {
    button.tabIndex = index === 0 ? 0 : -1;
    button.addEventListener('click', () => openTab(button.dataset.workspaceTab));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); openTab(tabs[next].dataset.workspaceTab, true); }
    });
  });
  document.querySelector('[data-open-actions]').addEventListener('click', () => openTab('actions', true));
  const scenarios = {
    rain: {category:'PROGNOZA / OPADY', badge:'Pogoda', title:'Intensywne opady', region:'Region dostawcy A · Rotterdam', relation:'Dostawca A → Wrocław', impact:'Dostawa do weryfikacji', action:'Potwierdź termin i status dostawy u dostawcy.', area:[351,242,68,53], path:'M351 242Q460 150 576 260', label:'Opady wymagające uwagi', name:'REGION DOSTAWCY A',color:'#f0ac49'},
    heat: {category:'PROGNOZA / TEMPERATURA', badge:'Pogoda', title:'Prognozowany upał', region:'Region dostawcy C · Mediolan', relation:'Dostawca C → Wrocław', impact:'Warunki realizacji do sprawdzenia', action:'Sprawdź warunki przechowywania oraz realizacji dostawy.', area:[436,371,72,48], path:'M436 371Q480 280 576 260', label:'Temperatura w regionie dostawcy', name:'REGION DOSTAWCY C',color:'#ed8b6a'},
    transport: {category:'SCENARIUSZ / TRANSPORT', badge:'Transport', title:'Zmiana warunków transportu', region:'Region dostawcy B · Hamburg', relation:'Dostawca B → Warszawa', impact:'Plan dostawy do potwierdzenia', action:'Zweryfikuj termin u przewoźnika i dostępne warianty realizacji.', area:[450,210,59,42], path:'M450 210Q510 160 648 236', label:'Relacja transportowa do sprawdzenia', name:'REGION DOSTAWCY B',color:'#83b8ed'}
  };
  document.querySelectorAll('[data-risk]').forEach(button => button.addEventListener('click', () => {
    const scenario = scenarios[button.dataset.risk];
    document.querySelectorAll('[data-risk]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const fields = {'preview-category':'category','preview-risk-badge':'badge','preview-risk-title':'title','preview-risk-region':'region','preview-relation':'relation','preview-impact':'impact','preview-action':'action','preview-map-label':'label','preview-region-name':'name'};
    Object.entries(fields).forEach(([id,key]) => document.getElementById(id).textContent = scenario[key]);
    const area = document.getElementById('preview-risk-area');
    ['cx','cy','rx','ry'].forEach((key,index) => area.setAttribute(key,scenario.area[index]));
    area.setAttribute('fill',scenario.color); area.setAttribute('stroke',scenario.color);
    document.getElementById('preview-active-route').setAttribute('d',scenario.path);
    const sourceMarker = document.getElementById('preview-source-marker');
    sourceMarker.setAttribute('cx',scenario.area[0]); sourceMarker.setAttribute('cy',scenario.area[1]);
    const destination = button.dataset.risk === 'transport' ? [648,236] : [576,260];
    const destinationMarker = document.getElementById('preview-destination-marker');
    destinationMarker.setAttribute('cx',destination[0]); destinationMarker.setAttribute('cy',destination[1]);
    const selectedCities = {rain:['rotterdam','wroclaw'],heat:['milan','wroclaw'],transport:['hamburg','warsaw']}[button.dataset.risk];
    document.querySelectorAll('[data-city]').forEach(label=>label.classList.toggle('selected',selectedCities.includes(label.dataset.city)));

  }));
  const actions = [...document.querySelectorAll('.preview-action-list input')];
  actions.forEach(input => input.addEventListener('change', () => {
    document.getElementById('action-progress').textContent = `${actions.filter(item=>item.checked).length} z 3 sprawdzonych`;
  }));
  document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {
    const checkbox = document.querySelector(`[data-topic="${link.dataset.interest}"]`);
    if (checkbox) { checkbox.checked = true; checkbox.dispatchEvent(new Event('input',{bubbles:true})); }
  }));

  const form = document.getElementById('contact-form');
  const message = document.getElementById('contact-message');
  const result = document.getElementById('contact-result');
  let draft = '';
  message.addEventListener('input', () => document.getElementById('message-count').textContent = `${message.value.length}/500`);
  form.addEventListener('input', event => { result.hidden = true; if (event.target.setCustomValidity) event.target.setCustomValidity(''); });
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelectorAll('[required]').forEach(field => field.setCustomValidity(field.value.trim() ? '' : 'Uzupełnij to pole.'));
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const interests = fields.getAll('interest').join(', ') || 'Nie wskazano';
    draft = `Dzień dobry,\n\nChcę porozmawiać o OrbitOps.\n\nImię i nazwisko: ${fields.get('fullName').trim()}\nFirma: ${fields.get('company').trim()}\nStanowisko: ${fields.get('role').trim() || 'Nie podano'}\nBranża: ${fields.get('industry') || 'Nie podano'}\nE-mail: ${fields.get('email').trim()}\nTelefon: ${fields.get('phone').trim() || 'Nie podano'}\nObszary zainteresowania: ${interests}\n\nWyzwania operacyjne:\n${fields.get('message').trim()}\n`;
    document.getElementById('contact-mailto').href = `mailto:orbitops@gmail.com?subject=${encodeURIComponent('OrbitOps — kontakt: '+fields.get('company').trim())}&body=${encodeURIComponent(draft)}`;
    document.getElementById('copy-status').textContent = '';
    result.hidden = false;
  });
  document.getElementById('copy-contact').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(draft);
      document.getElementById('copy-status').textContent = 'Treść wiadomości została skopiowana.';
    } catch {
      document.getElementById('copy-status').textContent = 'Nie udało się skopiować. Użyj przycisku otwierającego wiadomość w programie pocztowym.';
    }
  });
})();
