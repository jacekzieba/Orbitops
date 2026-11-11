import {page} from './landing-view.js';
import {copy,languages} from './landing-copy.js';
import {OperationsDemo} from './operations-demo.js';
const standalone=document.body.dataset.page==='demo';
const params=new URLSearchParams(location.search);
let savedLanguage;try{savedLanguage=localStorage.getItem('orbitops-language');}catch{}
let language=[params.get('lang'),savedLanguage,'pl'].find(value=>languages.includes(value));
let demo;
function render(){
  const state=demo?.state;
  const oldDetails=[...document.querySelectorAll('details[open]')].map(x=>x.className);
  document.getElementById('site-root').innerHTML=page(language,standalone);
  demo=new OperationsDemo(document.getElementById('operations-demo'),language);
  if(state){demo.state=state;demo.render();}
  oldDetails.forEach(name=>{if(name)document.querySelector(`details.${name}`)?.setAttribute('open','');});
  document.documentElement.lang=language;
  const c=copy[language],title=standalone?c.demoTitle:c.title,description=standalone?c.demoDescription:c.description;
  document.title=title;
  for(const [selector,value] of Object.entries({'meta[name="description"]':description,'meta[property="og:title"]':title,'meta[property="og:description"]':description,'meta[name="twitter:title"]':title,'meta[name="twitter:description"]':description,'meta[property="og:locale"]':{pl:'pl_PL',en:'en_GB',de:'de_DE'}[language]}))document.querySelector(selector)?.setAttribute('content',value);
  const schema=document.querySelector('script[type="application/ld+json"]');if(schema){const data=JSON.parse(schema.textContent);for(const node of data['@graph']){if(node.inLanguage)node.inLanguage=language;if(node['@type']==='WebPage')Object.assign(node,{name:title,description});}schema.textContent=JSON.stringify(data);}
}
render();
document.addEventListener('click',event=>{
  const lang=event.target.closest('[data-language]');if(lang){const y=window.scrollY;language=lang.dataset.language;try{localStorage.setItem('orbitops-language',language);}catch{}const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);render();window.scrollTo(0,y);document.querySelector(`[data-language="${language}"]`)?.focus({preventScroll:true});return;}
  const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('main-nav');
  if(event.target.closest('.menu-toggle')){const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);}else if(!event.target.closest('.site-header')||event.target.closest('a')){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const toggle=document.querySelector('.menu-toggle');if(toggle.getAttribute('aria-expanded')==='true'){toggle.setAttribute('aria-expanded','false');document.getElementById('main-nav').classList.remove('is-open');toggle.focus();}}});
