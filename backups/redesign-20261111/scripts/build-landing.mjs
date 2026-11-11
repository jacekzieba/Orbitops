import {writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {page} from '../prototyp/landing-view.js';
import {copy} from '../prototyp/landing-copy.js';
const root=new URL('../prototyp/',import.meta.url);
const escape=value=>value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const standalone of [false,true]){
  const c=copy.pl,title=standalone?c.demoTitle:c.title,description=standalone?c.demoDescription:c.description;
  const name=standalone?'demo.html':'index.html',url='https://orbitops.eu/'+(standalone?name:'');
  const schema={'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':'https://orbitops.eu/#organization',name:'OrbitOps',url:'https://orbitops.eu/',logo:'https://orbitops.eu/assets/logo-square.png',email:'kontakt@orbitops.eu'},{'@type':'WebSite','@id':'https://orbitops.eu/#website',name:'OrbitOps',url:'https://orbitops.eu/',inLanguage:'pl'},{'@type':'WebPage','@id':url+'#webpage',name:title,description,url,inLanguage:'pl',isPartOf:{'@id':'https://orbitops.eu/#website'}}]};
  const html=`<!DOCTYPE html>
<html lang="pl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#112c39">
<title>${title}</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${url}">
<meta property="og:type" content="website"><meta property="og:site_name" content="OrbitOps"><meta property="og:locale" content="pl_PL"><meta property="og:url" content="${url}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:image" content="https://orbitops.eu/assets/og-product.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="OrbitOps — dane dla lepszych decyzji biznesowych">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(title)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="https://orbitops.eu/assets/og-product.jpg">
<link rel="icon" href="favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="favicon.ico"><link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="stylesheet" href="assets/fonts.css"><link rel="stylesheet" href="landing.css?v=20261111-product">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head><body data-page="${standalone?'demo':'landing'}"><div id="site-root">${page('pl',standalone)}</div><script type="module" src="landing.js?v=20261111-product"></script></body></html>`;
  await writeFile(new URL(name,root),html);
  console.log('Built '+fileURLToPath(new URL(name,root)));
}
