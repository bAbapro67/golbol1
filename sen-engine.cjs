'use strict';
// Run the actual game.js physics on the server. No second football simulation.
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const files=['roster.js','expansion.js','coaches.js','kits.js','playstyles.js','overall.js','keeper-balance.js','sen-core.js','sen-player.js','sen-head-data.js','match-insights.js','game.js'];
const scripts=files.map(file=>new vm.Script(fs.readFileSync(path.join(__dirname,file),'utf8'),{filename:file}));
function createEngine(profiles,training,rules=null,cpuSides=[],options={}){
 const elements=new Map(),noop=()=>{};
 const ctx=new Proxy({},{get:(o,k)=>o[k]||(o[k]=String(k).startsWith('create')?()=>({addColorStop:noop}):noop),set:(o,k,v)=>(o[k]=v,true)});
 function element(id){if(elements.has(id))return elements.get(id);const el={value:'',textContent:'',innerHTML:'',hidden:false,open:false,disabled:false,dataset:{},style:{setProperty:noop},classList:{toggle:noop,add:noop,remove:noop,contains:()=>false},clientWidth:1200,width:1200,height:660,setAttribute:noop,addEventListener:noop,removeEventListener:noop,getContext:()=>ctx,querySelectorAll:()=>[],querySelector:s=>element(s),closest:s=>element(s),append:noop,replaceChildren:noop,focus:noop,scrollIntoView:noop,click:noop,getBoundingClientRect:()=>({left:0,top:0,width:1200,height:660})};el.parentElement=el;el.previousElementSibling=el;elements.set(id,el);return el;}
 const window={ARENA_HEADLESS:true,addEventListener:noop,dispatchEvent:noop,matchMedia:()=>({matches:true}),devicePixelRatio:1};
 const context={window,console,Math,Date,performance:{now:()=>Date.now()},Image:class{complete=false;naturalWidth=0;naturalHeight=0;addEventListener(){}},requestAnimationFrame:noop,setTimeout:noop,clearTimeout:noop,CustomEvent:class{},document:{querySelector:element,querySelectorAll:()=>[],getElementById:element,addEventListener:noop,createElement:()=>element('surface'),hidden:false},navigator:{getGamepads:()=>[]}};
 vm.createContext(context);for(const script of scripts)script.runInContext(context);
 const engine=window.ArenaSenEngine;engine.begin({profiles,training,rules,cpuSides,...options,remote:false});
 return {step(inputs,dt){inputs.forEach((input,side)=>engine.input(side,input||{}));engine.step(dt);return engine.snapshot();},snapshot:()=>engine.snapshot(),rating:(value,side)=>engine.rating(value,side),get debug(){return engine.inspect();}};
}
module.exports={createEngine};
