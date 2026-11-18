(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ArenaKeeperBalance=api;})(typeof window==='object'?window:globalThis,()=>{
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function rating(actor){return clamp(Number(actor?.star?.overall)||78,40,99);}
 function quality(keeper){return clamp(.94+(rating(keeper)-78)*.012,.62,1.2);}
 function chance(keeper,shooter,speed=500,superShot=false){const own=rating(keeper),attack=rating(shooter),stats=keeper?.star?.fc27Stats,reflex=Number(stats?.ref||stats?.div)||own;return clamp(.73+(own-78)*.004+(own-attack)*.009+(reflex-own)*.0015-Math.max(0,speed-550)*.00028-(superShot?.2:0),.18,.92);}
 function reaction(keeper){return clamp(.14-(rating(keeper)-78)*.0035,.065,.26);}
 function penaltyReach(keeper,shooter){return clamp(.125+(rating(keeper)-rating(shooter))*.0012,.085,.16);}
 return {rating,quality,chance,reaction,penaltyReach};
});
