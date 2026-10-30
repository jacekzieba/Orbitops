(() => {
 const header=document.querySelector('.header'),button=header.querySelector('.menu'),nav=header.querySelector('nav');
 nav.id='site-navigation';button.setAttribute('aria-controls',nav.id);
 const label=()=>button.setAttribute('aria-label',window.OrbitI18n.t(button.getAttribute('aria-expanded')==='true'?'Zamknij menu':'Otwórz menu'));
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);label();});
 function close(){nav.classList.remove('open');button.setAttribute('aria-expanded','false');label();}
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){close();button.focus();}});
 document.addEventListener('click',e=>{if(!header.contains(e.target))close();});
 document.addEventListener('languagechange',label);
 matchMedia('(min-width:1380px)').addEventListener('change',close);
})();
