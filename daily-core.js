(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ArenaDailyCore=api;})(typeof window==='object'?window:globalThis,()=>{
 'use strict';
 const DAY=86400000,OFFSET=10800000;
 const pools=[
  [['goals',3,'Herhangi bir modda 3 gol at'],['played',1,'Bir maçı tamamla'],['goals',5,'Herhangi bir modda 5 gol at'],['wins',1,'Bir maç kazan']],
  [['goals',10,'Herhangi bir modda toplam 10 gol at'],['cleanSheets',1,'Gol yemeden bir maç kazan'],['wins',2,'İki maç kazan'],['played',3,'Üç maç tamamla']],
  [['wins',5,'Beş maç kazan'],['goals',30,'Herhangi bir modda toplam 30 gol at'],['cleanSheets',3,'Üç maçı gol yemeden kazan'],['played',8,'Sekiz maç tamamla']]
 ];
 function schedule(time=Date.now()){const day=Math.floor((time+OFFSET)/DAY);return {day,date:new Date(day*DAY).toISOString().slice(0,10),nextReset:(day+1)*DAY-OFFSET,tasks:pools.map((pool,i)=>{const [metric,target,title]=pool[((day%pool.length)+pool.length)%pool.length];return {id:day+':'+i,difficulty:['KOLAY','ORTA','ZOR'][i],metric,target,title,reward:[100,1000,10000][i]};})};}
 function ensure(profile,time){const s=schedule(time);if(profile.daily?.day!==s.day)profile.daily={day:s.day,counts:{goals:0,wins:0,played:0,cleanSheets:0},claimed:[],bonus:false,events:[]};return s;}
 function view(profile,time){const s=ensure(profile,time),d=profile.daily;return {...s,bonus:5000,bonusPaid:d.bonus,tasks:s.tasks.map(t=>({...t,progress:Math.min(t.target,d.counts[t.metric]||0),completed:d.claimed.includes(t.id)}))};}
 function progress(profile,eventId,amounts,time){const s=ensure(profile,time),d=profile.daily;if(d.events.includes(eventId))return 0;d.events.push(eventId);d.events=d.events.slice(-4000);for(const metric of ['goals','wins','played','cleanSheets'])d.counts[metric]=(d.counts[metric]||0)+Math.max(0,Math.floor(Number(amounts[metric])||0));let reward=0;for(const t of s.tasks)if(!d.claimed.includes(t.id)&&d.counts[t.metric]>=t.target){d.claimed.push(t.id);reward+=t.reward;}if(d.claimed.length===3&&!d.bonus){reward+=5000;d.bonus=true;}profile.balance+=reward;return reward;}
 return {schedule,ensure,view,progress};
});
