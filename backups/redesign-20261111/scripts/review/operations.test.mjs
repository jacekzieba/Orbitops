import test from 'node:test';
import assert from 'node:assert/strict';
import {calculate,inventoryAt} from '../../prototyp/operations-model.js';
import {copy} from '../../prototyp/landing-copy.js';
import {operationsCopy} from '../../prototyp/operations-copy.js';
import {page} from '../../prototyp/landing-view.js';

test('independently specified delay cases and bridge coverage',()=>{
  const cases=[{sea:false,port:false,arrival:12,gap:0,shortfall:0},{sea:true,port:false,arrival:22,gap:1,shortfall:10},{sea:false,port:true,arrival:15,gap:0,shortfall:0},{sea:true,port:true,arrival:25,gap:4,shortfall:40}];
  for(const c of cases){const r=calculate(c);assert.equal(r.arrival,c.arrival);assert.equal(r.gap,c.gap);assert.equal(r.shortfall,c.shortfall);assert.equal(calculate({...c,bridge:true}).gap,0);}
});
test('daily stock is conserved across deliveries and pauses during shortage',()=>{
  for(const sea of [true,false])for(const port of [true,false])for(const bridge of [true,false]){
    const options={sea,port,bridge},arrival=12+(sea?10:0)+(port?3:0);
    let expected=210;
    for(let day=0;day<=35;day++){
      if(day>0)expected=Math.max(0,expected-10);
      if(day===arrival)expected+=200;
      if(bridge&&day===18)expected+=60;
      assert.equal(inventoryAt(day,options),expected,JSON.stringify({day,...options}));
    }
  }
});
test('important inventory boundaries',()=>{
  assert.equal(inventoryAt(21),0);
  assert.equal(inventoryAt(24),0);
  assert.equal(inventoryAt(25),200);
  assert.equal(inventoryAt(25,{bridge:true}),220);
  assert.equal(inventoryAt(18,{sea:false,port:false,bridge:true}),290);
});
test('every authored translation exists and static pages contain no missing values',()=>{
  for(const source of [copy,operationsCopy])for(const lang of ['pl','en','de']){
    assert.deepEqual(Object.keys(source[lang]),Object.keys(source.pl));
    for(const [key,text] of Object.entries(source[lang]))assert.ok(typeof text==='string'&&text.length>0,lang+':'+key);
  }
  for(const lang of ['pl','en','de'])for(const standalone of [false,true])assert.ok(!page(lang,standalone).includes('undefined'));
});
