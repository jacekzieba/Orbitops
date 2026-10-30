(() => {
 const header=document.querySelector('.header'),button=header.querySelector('.menu'),nav=header.querySelector('nav');
 nav.id='site-navigation';button.setAttribute('aria-controls',nav.id);
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
 function close(){nav.classList.remove('open');button.setAttribute('aria-expanded','false');}
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){close();button.focus();}});
 document.addEventListener('click',e=>{if(!header.contains(e.target))close();});
 matchMedia('(min-width:1380px)').addEventListener('change',close);
})();
