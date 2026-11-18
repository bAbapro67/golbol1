(function(root){
 'use strict';
 const api={
  view(room,now=Date.now()){return room.matchPause?{...room.matchPause,ready:[...room.matchPause.ready],serverTime:now}:null;},
  request(room,members,actor,now=Date.now()){
   if(!members.includes(actor))throw Error('Invalid player');
   if(!room.matchPause)room.matchPause={until:now+60000,ready:[],members:[...members]};
   return api.view(room,now);
  },
  ready(room,actor,now=Date.now()){
   const p=room.matchPause;if(!p||!p.members.includes(actor))return false;
   if(!p.ready.includes(actor))p.ready.push(actor);
   if(p.members.every(id=>p.ready.includes(id)))room.matchPause=null;
   return true;
  },
  tick(room,now=Date.now()){if(room.matchPause&&now>=room.matchPause.until){room.matchPause=null;return true;}return false;}
 };
 if(typeof module==='object'&&module.exports)module.exports=api;else root.GolbolMatchPause=api;
})(typeof window==='object'?window:globalThis);
