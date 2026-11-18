(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ArenaPortraitSource=api;})(typeof window==='object'?window:globalThis,()=>{
 const corrected={9:0,6:1,7:2,3:3},rows=[[0,316],[316,300],[616,305],[921,333]];
 function key(p){const d=p.gamePortrait||p.head;return [p.id||p.eaId||p.realName||p.name,d?.sheet||'',d?.cell||0,d?.crop?.join(',')||'',p.portrait??''].join('|');}
 function sources(p,index={files:{},originals:{}}){const list=[],id=String(p.eaId||p.id||'').replace(/^ea-/,'');const photo=p.photo?.startsWith('assets/')?p.photo:index.files[id]||index.originals[p.portrait];if(photo)list.push({path:photo});const d=p.gamePortrait||p.head;if(d?.sheet?.startsWith('assets/'))list.push({path:d.sheet,...(d.crop?{crop:d.crop}:{columns:d.columns||1,rows:d.rows||1,cell:d.cell||0})});if(Object.hasOwn(corrected,p.portrait))list.push({path:'assets/player-heads-corrected.png',columns:2,rows:2,cell:corrected[p.portrait]});else if(p.portrait>=0&&rows[Math.floor(p.portrait/4)]){const [top,height]=rows[Math.floor(p.portrait/4)];list.push({path:'assets/player-heads.png',crop:[p.portrait%4/4,top/1254,1/4,height/1254]});}return list;}
 // Card portraits use the game's isolated heads, never rectangular photo fallbacks.
 const legacySources=sources;
 function headSources(p){
  if(Number.isInteger(p.portrait)&&p.portrait>=0&&p.portrait<16)return [{path:'assets/draft/generated-heads.png',columns:4,rows:4,cell:p.portrait}];
  return legacySources({...p,photo:null},{files:{},originals:{}});
 }
 return {key,sources:headSources};
});
