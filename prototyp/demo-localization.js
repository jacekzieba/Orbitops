/* Authored dictionaries, with source-aware translation of newly rendered UI. */
(() => {
 const textSources=new WeakMap(),attributeSources=new WeakMap();
 const reverse=new Map();for(const [pl,pair] of Object.entries(window.OrbitTranslations)){for(const value of pair)if(!reverse.has(value))reverse.set(value,pl);}
 const canonical=value=>reverse.has(value.trim())?value.replace(value.trim(),reverse.get(value.trim())):value;
 const attributes=['aria-label','alt','placeholder','title'];
 const language=()=>window.OrbitI18n?.language||'pl';
 function translate(source){
  const key=source.trim(),lang=language();if(!key||lang==='pl')return source;
  const index=lang==='en'?0:1,pair=window.OrbitTranslations[key];
  if(pair)return source.replace(key,pair[index]);
  for(const entry of window.OrbitDemoPatterns||[]){const re=new RegExp(entry.re);if(re.test(key))return source.replace(key,key.replace(re,entry[lang]));}
  if(/^[\d\s\u00a0\u202f.,]+ zł$/.test(key)){const amount=Number(key.replace(/zł|\s/g,'').replace(',','.'));return new Intl.NumberFormat(lang==='de'?'de-DE':'en-GB').format(amount)+' PLN';}
  return source;
 }
 function excluded(node){return node.parentElement?.closest('script,style,.language-switcher,[data-no-translate]');}
 function text(node){if(!node.textContent.trim()||excluded(node))return;let record=textSources.get(node);if(!record||node.data!==record.output)record={source:canonical(node.data)};record.output=translate(record.source);textSources.set(node,record);if(node.data!==record.output)node.data=record.output;}
 function attrs(el){let records=attributeSources.get(el);if(!records){records={};attributeSources.set(el,records);}for(const attr of attributes){const value=el.getAttribute(attr);if(value===null)continue;let r=records[attr];if(!r||r.output!==value)r={source:canonical(value)};r.output=translate(r.source);records[attr]=r;if(value!==r.output)el.setAttribute(attr,r.output);}}
 function scan(root){if(root.nodeType===3){text(root);return;}if(root.nodeType!==1&&root.nodeType!==9)return;if(root.nodeType===1){if(root.matches('script,style,.language-switcher'))return;attrs(root);}const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);while(walker.nextNode())text(walker.currentNode);root.querySelectorAll('[aria-label],[alt],[placeholder],[title]').forEach(attrs);}
 const observer=new MutationObserver(changes=>{const roots=new Set();for(const change of changes){if(change.type==='characterData')text(change.target);else if(change.type==='attributes')attrs(change.target);else for(const node of change.addedNodes)roots.add(node);}roots.forEach(scan);});
 // Keep original Polish fragments so switching languages preserves interactions and forms.
 scan(document.documentElement);
 observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});
 document.addEventListener('languagechange',()=>scan(document.documentElement));
 window.OrbitDemoLocalize={scan,translate};
})();
