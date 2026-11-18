(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ArenaFC27Catalog=api;})(typeof window==='object'?window:globalThis,()=>{
 const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
 function attributes(card){const stats=card.stats||[];return {overall:card.rating,speed:clamp(Math.round((card.position==='GK'?stats[4]||50:stats[0]||60)/10),4,10),shot:clamp(Math.round((card.position==='GK'?stats[2]||60:stats[1]||60)/10),4,10),jump:clamp(Math.round((card.jump||60)/10),4,10)};}
 function install(teams,data){teams.forEach((team,ti)=>{if(team.category==='special'&&team.short!=='ICON'||team.draftTeam)return;if(team.short==='ICON')team.draftEligible=true;[...team.players,team.keeper].forEach((player,pi)=>{const entry=data.players[ti+':'+pi];player.fc27Cards=entry?.items.filter(c=>c.available!==false)||[];if(entry){const base=entry.items.find(c=>c.baseItem);Object.assign(player,attributes(base),{overallSource:'EA SPORTS FC 27 · 23.10.2026',fc27Id:entry.id});}});});}
 return {install,attributes};
});
