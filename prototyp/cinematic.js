/* Demonstration only: authored examples, no live agent or operational data. */
(() => {
  const video = document.querySelector('#port-film');
  const toggle = document.querySelector('#film-toggle');
  const panels = [...document.querySelectorAll('.agent-conversation')];
  const cases = [...document.querySelectorAll('[data-agent-case]')];
  const hero = document.querySelector('.film-hero');
  if (!video || !toggle || !hero) return;
  const filmSpeed = .6;
  video.defaultPlaybackRate = filmSpeed;
  video.playbackRate = filmSpeed;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let wantsPlayback = !motion.matches && !navigator.connection?.saveData;
  let visible = false;
  let selected = 0;
  let elapsed = wantsPlayback ? 0 : 5000;
  let last = performance.now();
  const duration = 16000;
  function renderMessages() {
    panels.forEach((panel, index) => {
      panel.hidden = index !== selected;
      panel.querySelectorAll('.agent-message').forEach((message, i) => {
        message.classList.toggle('is-visible', index === selected && (motion.matches || i === 0 || elapsed >= i * 2400));
        message.setAttribute('aria-hidden', String(index !== selected || (!motion.matches && i > 0 && elapsed < i * 2400)));
      });
    });
    cases.forEach((button, index) => {
      button.setAttribute('aria-pressed', String(index === selected));
      button.style.setProperty('--case-progress', String(motion.matches ? 1 : elapsed / duration));
    });
  }
  function label() {
    toggle.setAttribute('aria-pressed', String(wantsPlayback));
    toggle.querySelector('.film-toggle-icon').textContent = wantsPlayback ? 'Ⅱ' : '▶';
    toggle.querySelector('.film-toggle-label').textContent = window.OrbitI18n.t(wantsPlayback ? 'Wstrzymaj animacje' : 'Uruchom animacje');
  }
  function sync() {
    last = performance.now();
    if (wantsPlayback && visible && !document.hidden) {
      const source = video.querySelector('source');
      if (!source.hasAttribute('src')) { source.src = source.dataset.src; video.load(); }
      video.playbackRate = filmSpeed;
      video.play().catch(() => { /* The poster and manual control remain available. */ });
    } else video.pause();
    label();
  }
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .08 }).observe(hero);
  toggle.addEventListener('click', () => { wantsPlayback = !wantsPlayback; sync(); });
  cases.forEach((button, index) => button.addEventListener('click', () => {
    selected = index; elapsed = wantsPlayback ? 0 : 5000; last = performance.now(); renderMessages();
  }));
  setInterval(() => {
    const now = performance.now();
    if (wantsPlayback && visible && !document.hidden && !motion.matches) {
      elapsed += Math.min(now - last, 500);
      if (elapsed >= duration) { elapsed = 0; selected = (selected + 1) % panels.length; }
      renderMessages();
    }
    last = now;
  }, 100);
  document.addEventListener('visibilitychange', sync);
  document.addEventListener('languagechange', label);
  motion.addEventListener('change', () => {
    wantsPlayback = !motion.matches && !navigator.connection?.saveData;
    renderMessages(); sync();
  });
  document.querySelectorAll('[data-story-step]').forEach(link => link.addEventListener('click', () => {
    document.querySelector(`.report-step[data-step="${link.dataset.storyStep}"]`)?.click();
  }));
  renderMessages(); label();
})();
