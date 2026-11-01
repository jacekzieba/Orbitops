import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import { createRegionModel } from './region-model.js?v=20261101-night3';
const {t}=window.OrbitI18n;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const regionHost=document.querySelector('#region');
let step=0,regionAction=0;
let regionMotionPaused=reduced,regionElapsed=4,mapControls;
const touchRegion=matchMedia('(max-width: 760px), (pointer: coarse)');
const renderers=[];
let regionVisible=false,mapRendered=false;
const visibility=new IntersectionObserver(entries=>entries.forEach(e=>{regionVisible=e.isIntersecting;}),{rootMargin:'120px'});visibility.observe(regionHost);
function renderer(host){const r=new THREE.WebGLRenderer({antialias:true,alpha:true});r.setPixelRatio(Math.min(devicePixelRatio,2));r.setSize(host.clientWidth,host.clientHeight);r.outputColorSpace=THREE.SRGBColorSpace;r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=1.3;host.prepend(r.domElement);renderers.push(r);return r;}
const regionModel=createRegionModel;
function lights(scene){
  scene.add(new THREE.HemisphereLight(0x9ec4e0,0x14232d,1.9));
  const key=new THREE.DirectionalLight(0xbcd6ff,2.3);key.position.set(-7,14,8);key.castShadow=true;
  Object.assign(key.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:.5,far:45});key.shadow.mapSize.set(1024,1024);key.shadow.bias=-.0004;key.shadow.normalBias=.025;key.shadow.radius=3;scene.add(key);
  for(const [x,y,z,c,i] of [[-5.8,2.2,-2,0xe0a84f,14],[5.8,2.6,3.4,0x5ee6c8,16],[.4,1.4,0,0x6ee3c2,6]]){const l=new THREE.PointLight(c,i,9,1.6);l.position.set(x,y,z);scene.add(l);}
}

let mapRenderer,mapScene,mapCamera,mapModel;
try{
mapRenderer=renderer(regionHost);mapRenderer.shadowMap.enabled=true;mapRenderer.shadowMap.type=THREE.PCFShadowMap;mapScene=new THREE.Scene();mapScene.background=new THREE.Color(0x0a1620);const aspect=regionHost.clientWidth/regionHost.clientHeight;mapCamera=new THREE.OrthographicCamera(-11*aspect,11*aspect,11,-11,.1,150);mapCamera.position.set(17,19,22);mapCamera.lookAt(0,0,0);lights(mapScene);mapModel=regionModel();mapScene.add(mapModel.group);
mapControls=new OrbitControls(mapCamera,mapRenderer.domElement);mapControls.target.set(0,.5,0);mapControls.enableDamping=!reduced;mapControls.dampingFactor=.075;mapControls.enableZoom=false;mapControls.enablePan=false;mapControls.minPolarAngle=.4;mapControls.maxPolarAngle=1.25;mapControls.rotateSpeed=.65;mapControls.update();mapControls.saveState();
mapControls.addEventListener('start',()=>regionHost.classList.add('is-dragging'));mapControls.addEventListener('end',()=>regionHost.classList.remove('is-dragging'));
}catch(e){regionHost.innerHTML='<p style="padding:35px;line-height:1.7">Dostawca A → Twoja dostawa → Twoja fabryka<br>Pełny opis przykładu znajduje się obok.</p>';console.error(e);}
document.querySelectorAll('.report-step').forEach(b=>b.addEventListener('click',()=>{step=Number(b.dataset.step);document.querySelector('#region-actions').hidden=step!==2;document.querySelectorAll('[data-select-step]').forEach(x=>{const a=Number(x.dataset.selectStep)===step;x.classList.toggle('active',a);x.setAttribute('aria-pressed',String(a))});document.querySelectorAll('.report-step').forEach(x=>{const a=x===b;x.classList.toggle('active',a);x.setAttribute('aria-expanded',String(a))});document.querySelector('.legend-line').style.background=step===1?'#a44832':'#20594e';const tag=document.querySelector('#information-tag');tag.textContent=t(['PROGNOZA · OPADY','WNIOSEK · DOSTAWA DO SPRAWDZENIA','DZIAŁANIE · WERYFIKACJA'][step]);tag.className='information-tag '+['','impact','action'][step];document.querySelector('#supplier-label')?.classList.toggle('attention',step===1);const impactLabel=document.querySelector('#impact-label');if(impactLabel)impactLabel.style.display=step===1?'flex':'none';document.querySelector('#mobile-state').textContent=t(['Pogoda w regionie dostawcy wymaga uwagi.','Możliwy wpływ — bez potwierdzenia opóźnienia.','Sprawdź dostawcę, zapas i alternatywy.'][step]);}));
const regionActionContent=[
 ['Potwierdź gotowość dostawcy','Zapytaj, czy towar jest gotowy do odbioru i czy termin wymaga aktualizacji.'],
 ['Sprawdź bufor w fabryce','Porównaj dostępny zapas z planem produkcji. Ustal, ile czasu daje Ci obecny bufor.'],
 ['Potwierdź warunki transportu','Sprawdź przejezdność i termin odbioru z przewoźnikiem. Ustal, czy plan dostawy wymaga zmiany.']
];
document.querySelectorAll('[data-region-action]').forEach(button=>button.addEventListener('click',()=>{
 regionAction=Number(button.dataset.regionAction);
 document.querySelectorAll('[data-region-action]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 document.querySelector('#region-action-title').textContent=t(regionActionContent[regionAction][0]);
 document.querySelector('#region-action-copy').textContent=t(regionActionContent[regionAction][1]);
 mapRendered=false;
}));
function setRegionInteraction(enabled){
  if(!mapControls)return;
  mapControls.enabled=enabled;regionHost.classList.toggle('is-interactive',enabled);mapRenderer.domElement.style.touchAction=enabled?'none':'pan-y';
  const button=document.querySelector('#rotate');button.setAttribute('aria-pressed',String(enabled));button.textContent=t(enabled?'Wyłącz obracanie':'Włącz obracanie');
  document.querySelector('#region-gesture-hint').textContent=t(enabled?'Przeciągnij model, aby zmienić widok.':'Włącz obracanie, aby obejrzeć model z innej strony.');
}
setRegionInteraction(!touchRegion.matches);touchRegion.addEventListener('change',()=>setRegionInteraction(!touchRegion.matches));
document.querySelector('#rotate').addEventListener('click',()=>setRegionInteraction(!mapControls?.enabled));
document.querySelector('#reset-region').addEventListener('click',()=>{if(mapControls){mapControls.reset();mapModel.group.rotation.set(0,0,0);mapRendered=false;}});
document.querySelectorAll('[data-region-turn]').forEach(button=>button.addEventListener('click',()=>{if(!mapControls)return;const offset=mapCamera.position.clone().sub(mapControls.target);offset.applyAxisAngle(new THREE.Vector3(0,1,0),Number(button.dataset.regionTurn)*Math.PI/8);mapCamera.position.copy(mapControls.target).add(offset);mapControls.update();mapRendered=false;}));
function updateMotionButton(){const button=document.querySelector('#region-motion');button.textContent=t(regionMotionPaused?'Uruchom ruch':'Wstrzymaj ruch');button.setAttribute('aria-pressed',String(!regionMotionPaused));}
updateMotionButton();document.querySelector('#region-motion').addEventListener('click',()=>{regionMotionPaused=!regionMotionPaused;updateMotionButton();});
document.querySelectorAll('.header nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.header nav').classList.remove('open');document.querySelector('.menu').setAttribute('aria-expanded','false')}));

function resize(){mapRendered=false;if(mapRenderer){mapRenderer.setSize(regionHost.clientWidth,regionHost.clientHeight);let a=regionHost.clientWidth/regionHost.clientHeight;const h=a<1.5?8.6:6.4;mapCamera.left=-h*a;mapCamera.right=h*a;mapCamera.top=h;mapCamera.bottom=-h;mapCamera.updateProjectionMatrix()}}window.addEventListener('resize',resize);const sizeObserver=new ResizeObserver(resize);sizeObserver.observe(regionHost);resize();
let last=performance.now();
function label(id,point){if(!mapCamera)return;const p=point.clone();mapModel.group.localToWorld(p);p.project(mapCamera);const el=document.getElementById(id);if(!el)return;const half=el.offsetWidth/2+7;const x=THREE.MathUtils.clamp((p.x+1)/2*regionHost.clientWidth,half,regionHost.clientWidth-half);const y=THREE.MathUtils.clamp((-p.y+1)/2*regionHost.clientHeight-12,el.offsetHeight+8,regionHost.clientHeight-7);el.style.left=x+'px';el.style.top=y+'px';}
function animate(now){requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.05);last=now;
if(mapRenderer&&(regionVisible||!mapRendered)){mapRendered=true;const rainMaterial=mapModel.rain.children[0].material;rainMaterial.opacity=THREE.MathUtils.damp(rainMaterial.opacity,step===2?0:step===1?.22:.48,8,reduced?1:dt);mapModel.rain.visible=rainMaterial.opacity>.005;mapModel.connection.visible=step>0;mapModel.connection.material.color.setHex(step===1?0xa44832:0x20594e);mapModel.focusRing.visible=step>0;mapModel.focusRing.material.color.setHex(step===1?0xa44832:0x20594e);mapModel.pins[0].material.color.setHex(step===1?0xa44832:0x20594e);if(!regionMotionPaused&&regionVisible&&!document.hidden)regionElapsed+=dt;
mapModel.setAction(step===2?regionAction:-1);
document.querySelector('#supplier-label').classList.toggle('action-focus',step===2&&regionAction===0);
document.querySelector('#factory-label').classList.toggle('action-focus',step===2&&regionAction===1);
mapModel.update(regionElapsed);mapControls?.update();
mapCamera.updateMatrixWorld();
const aspect=regionHost.clientWidth/regionHost.clientHeight;let extentX=0,extentY=0;
for(const x of [-9.2,9.2])for(const y of [0,3.3])for(const z of [-6.2,6.2]){const corner=new THREE.Vector3(x,y,z).applyMatrix4(mapCamera.matrixWorldInverse);extentX=Math.max(extentX,Math.abs(corner.x));extentY=Math.max(extentY,Math.abs(corner.y));}
const targetHalf=Math.max(6.0,extentY*1.13,extentX/aspect*1.13);const half=THREE.MathUtils.lerp(mapCamera.top,targetHalf,reduced?1:.16);
mapCamera.left=-half*aspect;mapCamera.right=half*aspect;mapCamera.top=half;mapCamera.bottom=-half;mapCamera.updateProjectionMatrix();
mapRenderer.render(mapScene,mapCamera);label('supplier-label',mapModel.supplier.clone().add(new THREE.Vector3(0,.6,0)));label('factory-label',mapModel.factory.clone());label('impact-label',new THREE.Vector3(.3,1.2,0));}}
requestAnimationFrame(animate);
document.querySelectorAll('[data-select-step]').forEach(b=>b.addEventListener('click',()=>document.querySelector(`.report-step[data-step="${b.dataset.selectStep}"]`).click()));

document.addEventListener('languagechange',()=>{
 updateMotionButton();setRegionInteraction(mapControls?.enabled ?? false);
 document.querySelector(`.report-step[data-step="${step}"]`).click();
 document.querySelector(`[data-region-action="${regionAction}"]`).click();
});
