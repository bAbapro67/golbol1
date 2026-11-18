(function(root){
 'use strict';
 const create=()=>({fastestShot:0,longestGoal:0,streak:0,bestStreak:0,played:0,recent:[]});
 function apply(value,report,side,id,match=true,seat){
  const out={...create(),...value};if(out.recent.includes(id))return out;
  const rows=(report?.players||[]).filter(p=>p.side===side&&(seat===undefined?p.seat!==-1:p.seat===seat));
  for(const row of rows){out.fastestShot=Math.max(out.fastestShot,Math.min(100000,Number(row.fastestShot)||0));out.longestGoal=Math.max(out.longestGoal,Math.min(10000,Number(row.longestGoal)||0));}
  if(match){out.played++;const won=report.winner!==undefined?report.winner===side:report.score?.[side]>report.score?.[1-side];out.streak=won?out.streak+1:0;out.bestStreak=Math.max(out.bestStreak,out.streak);}
  out.recent=[...out.recent,id].slice(-100);return out;
 }
 const api={create,apply};if(typeof module==='object'&&module.exports)module.exports=api;else root.GolbolPersonalRecords=api;
})(typeof window==='object'?window:globalThis);
