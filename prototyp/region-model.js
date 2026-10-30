import * as THREE from './node_modules/three/build/three.module.js';

/** An illustrative industrial region. Geometry is schematic, not a real traffic model. */
export function createRegionModel() {
  const group = new THREE.Group();
  const materials = new Map();
  function mat(color, extra = {}) {
    const key = `${color}:${JSON.stringify(extra)}`;
    if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({color, roughness:.85, ...extra}));
    return materials.get(key);
  }
  function box(x,y,z,w,h,d,color,extra={}) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat(color,extra));
    mesh.position.set(x,y,z); mesh.castShadow=true; mesh.receiveShadow=true; group.add(mesh); return mesh;
  }
  function flat(points,color,y,extra={}) {
    const shape = new THREE.Shape();
    points.forEach(([x,z],i)=>i?shape.lineTo(x,-z):shape.moveTo(x,-z)); shape.closePath();
    const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape),mat(color,{side:THREE.DoubleSide,...extra}));
    mesh.rotation.x=-Math.PI/2; mesh.position.y=y; mesh.receiveShadow=true; group.add(mesh); return mesh;
  }
  const markings=[];
  function stripe(x,z,w,d,rotation=0,y=.346,color=0xf5edd8) { markings.push({x,y,z,w,d,rotation,color}); }
  function segment(a,b,width,color,y=.315,height=.035) {
    const dx=b[0]-a[0],dz=b[1]-a[1], length=Math.hypot(dx,dz);
    const mesh=box((a[0]+b[0])/2,y,(a[1]+b[1])/2,length,height,width,color);
    mesh.rotation.y=-Math.atan2(dz,dx); return mesh;
  }
  function road(a,b,width=.82,major=false) {
    segment(a,b,width+.14,0xb6bdb5,.286,.065);
    segment(a,b,width,0x56636b,.326,.022);
    const dx=b[0]-a[0],dz=b[1]-a[1],length=Math.hypot(dx,dz),yaw=-Math.atan2(dz,dx);
    for(let distance=.35;distance<length-.2;distance+=.7){
      const x=a[0]+dx*distance/length,z=a[1]+dz*distance/length;
      if(major && (Math.abs(x+3.2)<.55 || Math.abs(x-4.15)<.55))continue;
      if(!major && Math.abs(z)<.6)continue;
      stripe(x,z,.32,.026,yaw);
    }
  }
  box(0,-.17,0,18,.56,12,0xb4baa2);
  box(0,.125,0,18,.08,12,0xc8d0b0);
  // Agricultural plots and planted rows establish geographic scale.
  const plots=[[-6.15,3.6,4.8,3.65,0xaaba86],[-6.4,-5.1,4.2,1.55,0xbcc68e],[-1.55,4.6,1.6,2.2,0xd2c59e],[6.6,-3.65,3.8,3.8,0xb5c698],[2.5,-4.3,1.8,2.8,0xc5cba1]];
  plots.forEach(([x,z,w,d,color])=>{
    flat([[x-w/2,z-d/2],[x+w/2,z-d/2],[x+w/2,z+d/2],[x-w/2,z+d/2]],color,.174);
    for(let row=0;row<Math.floor(d/.28);row++)stripe(x,z-d/2+.15+row*.28,w-.15,.028,0,.18,0x92a178);
  });
  // One continuous river, below the road surface.
  const river=new THREE.Shape();river.moveTo(-.9,6);river.bezierCurveTo(-1.4,3.7,.9,2.4,-.1,.6);river.bezierCurveTo(-.8,-1,1,-2.5,1.45,-4);river.bezierCurveTo(1.7,-4.8,1.1,-5.5,1.2,-6);river.lineTo(2.65,-6);river.bezierCurveTo(3,-4.4,1.7,-3,1.25,-1.6);river.bezierCurveTo(2.1,.7,.8,2.5,.65,3.8);river.bezierCurveTo(.5,5.1,.9,5.6,.7,6);river.closePath();
  const water=new THREE.Mesh(new THREE.ShapeGeometry(river,40),mat(0x6eabb7,{roughness:.35,metalness:.08}));water.rotation.x=-Math.PI/2;water.position.y=.192;water.receiveShadow=true;group.add(water);
  const ripples=[];
  for(let i=0;i<8;i++){
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(.23,.018),new THREE.MeshBasicMaterial({color:0xc6e2dd,transparent:true,opacity:.35,depthWrite:false}));
    mesh.rotation.x=-Math.PI/2;mesh.position.set(.15,.197,-4.7+i*1.2);group.add(mesh);ripples.push(mesh);
  }
  road([-9,0],[9,0],.86,true);
  road([-3.2,-6],[-3.2,6],.68);
  road([4.15,-6],[4.15,6],.68);
  road([-7.2,-1.65],[-3.2,-1.65],.6);
  road([4.15,2],[7.5,2],.6);
  // Physical bridge: a flat deck, rectangular guardrails and piers.
  box(.35,.326,0,3.55,.085,.99,0x65747a);
  for(const z of [-.53,.53]){
    box(.35,.62,z,3.75,.065,.045,0xc1c8c4);
    for(let x=-1.4;x<=2.1;x+=.46)box(x,.47,z,.045,.30,.045,0xcbd0c5);
  }
  for(const x of [-.7,1.3])box(x,.19,0,.19,.25,.66,0x9faea8);
  for(let x=-1.3;x<2.1;x+=.65)stripe(x,0,.30,.028,0,.376);
  // Crosswalks and stop bars make the intersections read as streets.
  for(const x of [-3.2,4.15]){
    for(const z of [-.73,.73])for(let k=-2;k<=2;k++)stripe(x+k*.1,z,.056,.26);
    stripe(x-.18,-.61,.28,.055);
    stripe(x+.18,.61,.28,.055);
  }
  // Supplier: a low logistics warehouse with four docks and an apricot canopy.
  flat([[-8,-4.7],[-3.65,-4.7],[-3.65,-1.1],[-8,-1.1]],0xaeb8b3,.19);
  box(-5.8,.69,-3.25,3.45,1.0,1.75,0xd3c7b4);
  box(-5.8,1.225,-3.25,3.61,.085,1.88,0xe2ddd1);
  box(-5.8,1.10,-2.28,3.72,.10,.38,0xb77b58);
  for(let dock=0;dock<4;dock++){
    const x=-6.95+dock*.77;
    box(x,.57,-2.36,.47,.56,.035,0x637b82);
    box(x,.285,-2.12,.54,.12,.38,0x778b8e);
    box(x,.64,-2.325,.34,.04,.02,0xd5e4df);
    stripe(x,-1.97,.035,.45,0,.205,0xf3d7a7);
  }
  for(let x=-7;x<-4.7;x+=.56)for(const z of [-3.65,-3.12]){
    const panel=box(x,1.29,z,.43,.035,.39,0x355762,{metalness:.15});panel.rotation.x=.10;
  }
  box(-7.1,.60,-4.25,1.15,.73,.65,0xdecbb3);
  box(-7.1,.98,-4.25,1.25,.05,.72,0xa77554);
  for(let n=0;n<3;n++){
    box(-7.65,.35,-3.5+n*.58,.35,.31,.46,[0x608782,0xb78461,0x889b78][n]);
    box(-7.65,.52,-3.5+n*.58,.36,.035,.47,0xc9cdb4);
  }
  // Recipient: a larger factory with a sawtooth roof, glazing, silos and stacks.
  flat([[3.55,1.45],[8.1,1.45],[8.1,5.4],[3.55,5.4]],0xb9c0b6,.19);
  box(5.75,.79,3.65,3.65,1.18,1.85,0x547b88);
  for(let bay=0;bay<4;bay++){
    const profile=new THREE.Shape();profile.moveTo(0,0);profile.lineTo(.91,0);profile.lineTo(.91,.46);profile.lineTo(0,.12);profile.closePath();
    const roof=new THREE.Mesh(new THREE.ExtrudeGeometry(profile,{depth:1.93,bevelEnabled:false}),mat(0xd0d5cc));
    roof.position.set(3.9+bay*.91,1.38,2.69);roof.castShadow=true;roof.receiveShadow=true;group.add(roof);
    box(4.80+bay*.91,1.64,3.65,.022,.27,1.75,0x92c4c8,{roughness:.35});
    box(4.33+bay*.91,.86,2.707,.58,.30,.025,0xa2d0d3,{roughness:.3});
  }
  box(4.6,.93,4.97,1.45,1.45,.57,0x698b91);
  box(4.6,1.68,4.97,1.55,.08,.67,0xd1d5c9);
  for(let n=0;n<3;n++)box(4.1+n*.44,1.05,5.265,.28,.35,.025,0xa2d0d3);
  const fans=[];
  for(const [x,z,h] of [[7.85,3.1,2.05],[7.85,4.25,2.45]]){
    const stack=new THREE.Mesh(new THREE.CylinderGeometry(.13,.16,h,12),mat(0x9d9f92));stack.position.set(x,.2+h/2,z);stack.castShadow=true;group.add(stack);
    for(const y of [h*.65,h*.85]){const ring=new THREE.Mesh(new THREE.CylinderGeometry(.137,.137,.075,12),mat(0xc7a17a));ring.position.set(x,.2+y,z);group.add(ring);}
    const fan=new THREE.Group();for(const angle of [0,Math.PI/2]){const blade=new THREE.Mesh(new THREE.BoxGeometry(.37,.025,.07),mat(0x456c75));blade.rotation.y=angle;fan.add(blade);}fan.position.set(x,h+.23,z);group.add(fan);fans.push(fan);
  }
  for(let n=0;n<2;n++){
    const silo=new THREE.Mesh(new THREE.CylinderGeometry(.23,.23,1.15,16),mat(0xc0c9c3,{metalness:.18}));silo.position.set(7.3,.78,1.95+n*.65);silo.castShadow=true;group.add(silo);
  }
  box(5.9,.67,2.68,.65,.78,.025,0x284e60);
  box(5.9,1.11,2.45,.90,.08,.55,0x58b6a5);
  // Local parking, loading aprons and human-scale street furniture.
  for(let i=0;i<5;i++){
    stripe(-7.7+i*.48,-4.43,.035,.52,0,.20);
    stripe(5.0+i*.45,5.1,.035,.48,0,.20);
  }
  const fences=[];
  for(let x=-8;x<-3.6;x+=.4)fences.push([x,.42,-4.82]);
  for(let z=2.4;z<5.6;z+=.4)fences.push([8.25,.42,z]);
  const fenceMesh=new THREE.InstancedMesh(new THREE.BoxGeometry(.035,.43,.035),mat(0x859a94),fences.length);
  const dummy=new THREE.Object3D();fences.forEach((p,i)=>{dummy.position.set(...p);dummy.updateMatrix();fenceMesh.setMatrixAt(i,dummy.matrix)});fenceMesh.castShadow=true;group.add(fenceMesh);
  segment([-8,-4.82],[-3.65,-4.82],.025,0x97a79b,.55,.025);
  segment([8.25,2.4],[8.25,5.5],.025,0x97a79b,.55,.025);
  for(const [x,z] of [[-3.8,-.7],[3.5,.7],[-7.8,-1.65],[7.7,1.4]]){
    box(x,.75,z,.035,1.05,.035,0x78908f);
    box(x,.99,z,.27,.22,.035,0xd9e1cf);
  }
  // Instanced planting stays inexpensive while adding scale and texture.
  let seed=314;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};const trees=[];
  for(let i=0;i<110;i++){
    const x=-8.65+random()*17.3,z=-5.65+random()*11.3;
    if(Math.abs(z)<.75||Math.abs(x+3.2)<.65||Math.abs(x-4.15)<.65||Math.abs(x)<2||x< -3.6&&z< -1||x>3.5&&z>1.2)continue;
    trees.push({x,z,scale:.75+random()*.5});
  }
  const crowns=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(.22,1),mat(0x71906c),trees.length);
  const trunks=new THREE.InstancedMesh(new THREE.CylinderGeometry(.035,.045,.28,5),mat(0x9c8a6a),trees.length);
  trees.forEach((tree,i)=>{dummy.position.set(tree.x,.53,tree.z);dummy.scale.set(tree.scale,1.15*tree.scale,tree.scale);dummy.updateMatrix();crowns.setMatrixAt(i,dummy.matrix);dummy.position.y=.30;dummy.scale.setScalar(1);dummy.updateMatrix();trunks.setMatrixAt(i,dummy.matrix)});crowns.castShadow=true;trunks.castShadow=true;group.add(crowns,trunks);
  // Batch road paint by color; everything is planar rather than cylindrical.
  const colors=[...new Set(markings.map(item=>item.color))];
  colors.forEach(color=>{const items=markings.filter(item=>item.color===color);const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(1,.008,1),mat(color),items.length);items.forEach((item,i)=>{dummy.position.set(item.x,item.y,item.z);dummy.rotation.set(0,item.rotation,0);dummy.scale.set(item.w,1,item.d);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix)});group.add(mesh)});
  // A flat route highlight lies on the physical road, including the bridge.
  const deliveryPoints=[[-5.8,-1.82],[-3.4,-1.82],[-3.4,-.18],[-1.3,-.18],[1.7,-.18],[3.97,-.18],[3.97,1.8],[5.9,1.8],[6.8,1.98],[6.25,2.2],[4.33,2.2],[4.33,.18],[1.7,.18],[-1.3,.18],[-3.0,.18],[-3.0,-1.48],[-5.8,-1.48],[-6.5,-1.63]];
  const deliveryCurve=new THREE.CatmullRomCurve3(deliveryPoints.map(([x,z])=>new THREE.Vector3(x,.382,z)),true,'centripetal');
  const routePoints=[[-5.8,-1.65],[-3.2,-1.65],[-3.2,0],[4.15,0],[4.15,2],[6.2,2]];
  const routeGroup=new THREE.Group();routeGroup.material=new THREE.MeshBasicMaterial({color:0x20594e,transparent:true,opacity:1,depthWrite:false});
  routePoints.slice(1).forEach((point,index)=>{const a=routePoints[index],b=point,dx=b[0]-a[0],dz=b[1]-a[1];const mesh=new THREE.Mesh(new THREE.PlaneGeometry(Math.hypot(dx,dz),.14),routeGroup.material);mesh.rotation.set(-Math.PI/2,0,-Math.atan2(dz,dx));mesh.position.set((a[0]+b[0])/2,.383,(a[1]+b[1])/2);routeGroup.add(mesh)});group.add(routeGroup);
  function vehicle(color,truck=false){
    const vehicle=new THREE.Group();
    const part=(w,h,d,x,y,z,c)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(c));mesh.position.set(x,y,z);mesh.castShadow=true;vehicle.add(mesh);return mesh;};
    part(truck?.29:.22,.065,truck?.77:.40,0,.065,0,0x34434a);
    if(truck){part(.28,.25,.47,0,.21,-.14,0xe3ddd0);part(.27,.20,.24,0,.18,.24,color);part(.23,.075,.012,0,.23,.366,0x8dbac6);part(.235,.018,.33,0,.34,-.14,0xc8cbbf);}else{part(.23,.12,.43,0,.14,0,color);part(.19,.10,.22,0,.24,-.015,color);part(.17,.065,.012,0,.25,.10,0x9ec9d3);part(.17,.065,.012,0,.25,-.13,0x9ec9d3);}
    const wheels=[];for(const side of [-1,1])for(const z of (truck?[-.33,.25]:[-.14,.14])){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.063,.063,.045,10),mat(0x29353c));wheel.rotation.z=Math.PI/2;wheel.position.set(side*(truck?.16:.13),.065,z);vehicle.add(wheel);wheels.push(wheel);}
    return{group:vehicle,wheels};
  }
  const vehicles=[];
  for(const [offset,color] of [[.05,0xb77b58],[.56,0x2b8c83]]){const item=vehicle(color,true);group.add(item.group);vehicles.push({...item,curve:deliveryCurve,offset,speed:.52/deliveryCurve.getLength()});}
  const carCurve=new THREE.LineCurve3(new THREE.Vector3(-8.9,.382,.19),new THREE.Vector3(8.9,.382,.19));
  const car=vehicle(0xc6a46d);group.add(car.group);vehicles.push({...car,curve:carCurve,offset:.23,speed:.9/17.8,open:true});
  const vanCurve=new THREE.LineCurve3(new THREE.Vector3(4.32,.382,5.8),new THREE.Vector3(4.32,.382,-5.8));
  const van=vehicle(0x7c9da8);group.add(van.group);vehicles.push({...van,curve:vanCurve,offset:.65,speed:.62/11.6,open:true});
  // A forklift shuttles pallets inside the supplier's loading apron.
  const forklift=new THREE.Group();const forkliftBody=new THREE.Mesh(new THREE.BoxGeometry(.22,.17,.28),mat(0xd0a25c));forkliftBody.position.y=.14;forklift.add(forkliftBody);
  for(const x of [-.08,.08]){const mast=new THREE.Mesh(new THREE.BoxGeometry(.025,.34,.025),mat(0x52636a));mast.position.set(x,.28,.13);forklift.add(mast);const tine=new THREE.Mesh(new THREE.BoxGeometry(.025,.025,.20),mat(0x52636a));tine.position.set(x,.08,.21);forklift.add(tine);}group.add(forklift);
  const supplier=new THREE.Vector3(-5.8,1.54,-3.1),factory=new THREE.Vector3(5.65,1.98,3.65);
  for(const side of [-1,1])for(const z of [-.09,.10]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.035,8),mat(0x29353c));wheel.rotation.z=Math.PI/2;wheel.position.set(side*.12,.045,z);forklift.add(wheel);}
  const pins=[];[supplier,factory].forEach((position,i)=>{const pin=new THREE.Mesh(new THREE.SphereGeometry(.105,20,12),mat(i?0x268c86:0xb77b58));pin.position.copy(position);group.add(pin);pins.push(pin);});
  const focusRing=new THREE.Mesh(new THREE.RingGeometry(.20,.27,40),new THREE.MeshBasicMaterial({color:0xa44832,side:THREE.DoubleSide,transparent:true,opacity:.9}));focusRing.rotation.x=-Math.PI/2;focusRing.position.set(-5.8,1.56,-3.1);group.add(focusRing);
  const rain=new THREE.Group();const rainArea=flat([[-8,-4.9],[-3.8,-4.9],[-3.8,-1.05],[-8,-1.05]],0x7caebe,.191,{transparent:true,opacity:.28,depthWrite:false});group.remove(rainArea);rain.add(rainArea);
  const drops=new Float32Array(32*6);const seeds=Array.from({length:32},()=>({x:-7.7+random()*3.5,z:-4.6+random()*3.3,phase:random()}));
  const dropsGeometry=new THREE.BufferGeometry();dropsGeometry.setAttribute('position',new THREE.BufferAttribute(drops,3));const rainLines=new THREE.LineSegments(dropsGeometry,new THREE.LineBasicMaterial({color:0x568da8,transparent:true,opacity:.6,depthWrite:false}));rain.add(rainLines);group.add(rain);
  // Action beacons connect each suggested next step to a physical part of the scene.
  const actionGroup=new THREE.Group();group.add(actionGroup);let activeAction=-1;
  const actionSites=[new THREE.Vector3(-5.8,.39,-1.65),new THREE.Vector3(6.3,.39,2.05),new THREE.Vector3(.4,.40,0)];
  const actionRings=actionSites.map(site=>{
    const mesh=new THREE.Mesh(new THREE.RingGeometry(.48,.57,48),new THREE.MeshBasicMaterial({color:0x00b58b,transparent:true,opacity:.8,side:THREE.DoubleSide,depthWrite:false}));
    mesh.rotation.x=-Math.PI/2;mesh.position.copy(site);actionGroup.add(mesh);return mesh;
  });
  const actionPointer=new THREE.Mesh(new THREE.ConeGeometry(.17,.38,4),new THREE.MeshBasicMaterial({color:0x00b58b}));actionPointer.rotation.z=Math.PI;actionGroup.add(actionPointer);
  const routeSignal=new THREE.Mesh(new THREE.SphereGeometry(.12,12,8),new THREE.MeshBasicMaterial({color:0x90ffe0}));actionGroup.add(routeSignal);
  const stock=new THREE.Group();group.add(stock);for(let i=0;i<4;i++){const box=new THREE.Mesh(new THREE.BoxGeometry(.28,.25,.26),mat(0xd3b787));box.position.set(6.0+(i%2)*.34,.48,2.55+Math.floor(i/2)*.32);box.castShadow=true;stock.add(box);}
  function setAction(action){activeAction=action;actionGroup.visible=action>=0;actionRings.forEach((ring,i)=>ring.visible=i===action);routeSignal.visible=action===2;}
  function update(time){
    for(const item of vehicles){const progress=(time*item.speed+item.offset)%1;const position=item.curve.getPointAt(progress);const tangent=item.curve.getTangentAt(progress);item.group.position.copy(position);item.group.position.y=position.x> -1.45&&position.x<2.15&&Math.abs(position.z)<.5?.371:.338;item.group.rotation.y=Math.atan2(tangent.x,tangent.z);item.group.visible=!item.open||progress>.015&&progress<.985;item.wheels.forEach(wheel=>wheel.rotation.x=-time*6);}
    if(activeAction>=0){const site=actionSites[activeAction];actionPointer.position.copy(site).add(new THREE.Vector3(0,.8+Math.sin(time*2)*.12,0));const ring=actionRings[activeAction];ring.scale.setScalar(1+(time*.5%1)*.65);ring.material.opacity=.9-(time*.5%1)*.6;const p=deliveryCurve.getPointAt((time*.065)%1);routeSignal.position.copy(p).add(new THREE.Vector3(0,.13,0));}
    forklift.position.set(-6.9+Math.sin(time*.35)*.5,.195,-2.04);forklift.rotation.y=Math.cos(time*.35)>0?Math.PI/2:-Math.PI/2;
    fans.forEach((fan,i)=>fan.rotation.y=time*(i?1.4:-1.1));
    ripples.forEach((r,i)=>{r.position.z=-5.7+((time*.26+i*1.4)%11.4);r.material.opacity=.19+.08*Math.sin(time+i);});
    seeds.forEach((seed,i)=>{const y=.6+(1-(time*.65+seed.phase)%1)*2.6;drops.set([seed.x,y,seed.z,seed.x+.025,y-.19,seed.z],i*6)});dropsGeometry.attributes.position.needsUpdate=true;
  }
  update(4);
  return{group,rain,connection:routeGroup,supplier,factory,warehouse:factory,pins,focusRing,update,setAction};
}
