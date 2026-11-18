(function(r,f){if(typeof module==='object'&&module.exports)module.exports=f();else r.ArenaMatchInsights=f();})(typeof window==='object'?window:globalThis,()=>{
 'use strict';const create=()=>({saves:[0,0],control:[0,0],players:{}});
 function actor(s,p){const id=p.side+':'+p.i+':'+p.star.name;return s.players[id]||(s.players[id]={id,name:p.star.name,side:p.side,seat:p.controller,goals:0,shots:0,supers:0,control:0});}
 function shot(s,p,superShot,ball,width){const row=actor(s,p);row.shots++;if(superShot)row.supers++;if(ball&&width){const speed=Math.round(Math.hypot(ball.vx||0,ball.vy||0)*105/width*3.6),distance=Math.round(Math.abs((p.side===0?width:0)-ball.x)*105/width*10)/10;row.lastShot={speed,distance};row.fastestShot=Math.max(row.fastestShot||0,speed);}}
 function goal(s,p,side){if(p&&p.side===side){const row=actor(s,p);row.goals++;row.longestGoal=Math.max(row.longestGoal||0,row.lastShot?.distance||0);}}
 function save(s,p){s.saves[p.side]++;const row=actor(s,p);row.saves=(row.saves||0)+1;}
 function control(s,p,side,dt){if(side!==0&&side!==1)return;s.control[side]+=dt;if(p)actor(s,p).control+=dt;}
 function report(s,players,shots,score){for(const p of players)actor(s,p);const rows=Object.values(s.players).map(p=>({...p,control:Math.round(p.control*10)/10})),total=s.control[0]+s.control[1],possession=total?[Math.round(s.control[0]/total*100),0]:[0,0];if(total)possession[1]=100-possession[0];const active=rows.filter(p=>p.goals||p.shots||p.control).sort((a,b)=>(b.goals*6+b.shots+b.control/15)-(a.goals*6+a.shots+a.control/15)||a.id.localeCompare(b.id));return {score:[...score],shots:[...shots],saves:[...s.saves],possession,controlledSeconds:Math.round(total),players:rows,mvp:active[0]||null};}
 const baseReport=report;
 function extendedReport(...args){const data=baseReport(...args),best=key=>{const row=data.players.filter(p=>p[key]>0).sort((a,b)=>b[key]-a[key])[0];return row?{name:row.name,value:row[key]}:null;};return {...data,strongestShot:best('fastestShot'),longestGoal:best('longestGoal'),topKeeper:best('saves'),units:{speed:'km/h',distance:'m'}};}
 return {create,actor,shot,goal,save,control,report:extendedReport};
});
