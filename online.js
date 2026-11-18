(() => {
 'use strict';
 const $=s=>document.querySelector(s),dialog=$('#online-dialog'),status=$('#online-status'),info=$('#online-info');
 let session=null,events=null,joined=false,started=false,prepared=false,last=0,busy=false,lastInput=0,generation=0;
 let matchPause=null,pauseReady=false;
 let clockWorker=null,clockTimer=null,clockLast=0,lastConfig=null,partyState=null;
 try{localStorage.removeItem('golbol-career-v1');}catch{}
 const game=()=>window.ArenaOnlineGame;
 function notice(text){status.textContent=text;info.textContent=text;}
 async function post(action,data){const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),5000);try{return await (window.ArenaApi?.request('/api/online/'+action,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),signal:controller.signal})||fetch('/api/online/'+action,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),signal:controller.signal}).then(r=>r.json()));}finally{clearTimeout(timeout);}}
 function pulse(){const now=performance.now(),elapsed=(now-clockLast)/1000;clockLast=now;if(!session||!started)return;if(!matchPause&&session.role==='host')game().advance(elapsed);window.ArenaOnline.tick(now);}
 function stopClock(){clockWorker?.terminate();clockWorker=null;clearInterval(clockTimer);clockTimer=null;}
 function startClock(){
  stopClock();clockLast=performance.now();
  const fallback=()=>{clockWorker?.terminate();clockWorker=null;if(!clockTimer)clockTimer=setInterval(pulse,16);};
  try{clockWorker=new Worker('online-clock.js');clockWorker.onmessage=pulse;clockWorker.onerror=e=>{e.preventDefault();fallback();};}catch{fallback();}
 }
 function updateUI(){ $('#online-banner').classList.toggle('hidden',!session);$('#online-create').disabled=!!session;$('#online-join').disabled=!!session;$('#online-leave').disabled=!session;$('#online-mode').disabled=!!session; }
 async function send(message){if(!session)return;return post('send',{...session,message});}
 function reset(message){matchPause=null;pauseReady=false;window.dispatchEvent(new Event('online-reset'));generation++;stopClock();events?.close();events=null;session=null;joined=false;started=false;prepared=false;busy=false;lastConfig=null;partyState=null;game().stop();updateUI();if(message){notice(message);dialog.showModal();}}
 async function leave(){if(!session)return;const previous=session;reset();try{await post('leave',previous);}catch{}}
 async function connect(action,requestedMode){
  if(session)return;
  if(window.ArenaAccount&&!await ArenaAccount.requireLogin())return;
  if(!/^https?:$/.test(location.protocol)){notice('Çevrimiçi oyun için npm start ile sunucuyu başlatıp http://localhost:3000 adresini aç.');return;}
  $('#online-create').disabled=$('#online-join').disabled=true;
  try{
   const clubToken=await window.ArenaUltimateTeam?.session();const mode=requestedMode||$('#online-mode')?.value||'classic';
   session=await post(action,{code:$('#online-code').value.trim().toUpperCase(),mode,clubToken,party:true,localCount:Number($('#party-local-count')?.value||1)});$('#online-mode').value=session.mode||'classic';const current=++generation;joined=false;started=false;startClock();
   $('#online-code').value=session.code;updateUI();notice('ODA '+session.code+' · Bağlanılıyor…');
   if(window.ArenaApi?.base){throw Error('Online oyun için web sitesi ve API aynı adreste olmalı.');}
   events=new EventSource('/api/online/events?code='+session.code+'&token='+session.token);
   events.onmessage=e=>{
    if(current!==generation||!session)return;
    try{
     const m=JSON.parse(e.data);if(m.type==='party-state'){partyState=m;joined=m.seats.length>=2&&[0,1].every(side=>m.seats.some(s=>s.side===side));}window.dispatchEvent(new CustomEvent('online-message',{detail:m}));
     if(m.type==='match-pause'){matchPause=m.pause;pauseReady=m.ready;game().networkPause(!!matchPause);return;}
     if(m.type==='closed'){reset(m.reason);return;}
     if(m.type==='ready'||m.type==='joined'){
      joined=m.type==='joined'||m.joined;
      notice('ODA '+session.code+' · '+(joined?'Rakip bağlandı. Ev sahibi maçı başlatabilir.':'Kodu arkadaşına gönder, katılmasını bekle.'));
      if(!session.party&&session.role==='host'&&!prepared&&(session.mode||'classic')==='classic'){game().configure();dialog.close();}else if(session.party||session.mode!=='classic')dialog.showModal();
      if(session.role==='guest')notice('ODA '+session.code+' · Ev sahibinin maçı başlatması bekleniyor.');
     }
     if(m.type==='start'){
      started=false;
      try{game().begin(session.party?{...m.config,localPeer:session.peerId}:m.config);lastConfig=m.config;prepared=true;dialog.close();notice('İki oyuncunun hazır olması bekleniyor…');if(session.party||session.role==='guest')send({type:'ready-to-play'}).catch(error=>notice(error.message));}
      catch(error){prepared=false;notice('Maç hazırlanamadı: '+error.message);send({type:'start-error'}).catch(()=>{});}
     }
     if(m.type==='ready-to-play'&&!session.party&&session.role==='host'&&prepared){send({type:'play'}).then(()=>{if(session){started=true;notice('ODA '+session.code+' · Sen sol takımsın · PS5 · Sol analog / □ × ○ / R1');}}).catch(error=>notice(error.message));}
     if(m.type==='play'&&(session.party||session.role==='guest')&&prepared){started=true;notice('ODA '+session.code+(session.party?' · En fazla 2v2 · Klavye / PS5':' · Sen sağ takımsın · PS5 · Sol analog / □ × ○ / R1'));}
     if(m.type==='start-error'&&(session.party||session.role==='host')){started=false;notice('Rakibin oyunu hazırlanamadı. İki oyuncu da sayfayı yenileyip yeni oda oluşturmalı.');dialog.showModal();}
     if(m.type==='restore'&&session.party)game().receive(m.snapshot);
     if(m.type==='snapshot'&&session.role==='guest'&&started&&!matchPause)game().receive(m);
     if(m.type==='input'&&session.role==='host'){game().input(m);lastInput=performance.now();}
     if(['pause','point'].includes(m.type)&&session.role==='host')game().command(m);
     if(m.type==='disconnected'){joined=false;started=false;game().input({held:[],pressed:[]});notice('Rakibin bağlantısı kesildi. Maç durduruldu, yeniden bağlanması bekleniyor.');}
    }catch(error){notice('Maç verisi işlenemedi: '+error.message);}
   };
   events.onerror=()=>{if(!session)return;joined=false;started=false;notice('Bağlantı kesildi. Maç durduruldu, yeniden bağlanılıyor…');};
  }catch(error){session=null;notice(error.message);updateUI();}
 }
 window.ArenaOnline={
  requestRematch(){return send({type:'rematch-vote'});},
  get pauseState(){return matchPause;},get pauseReady(){return pauseReady;},requestPause(){return send({type:'pause'}).catch(error=>notice(error.message));},readyAfterPause(){return send({type:'pause-ready'}).catch(error=>notice(error.message));},
  get code(){return session?.code||'';},get party(){return !!session?.party;},get peerId(){return session?.peerId;},get partyState(){return partyState;},get side(){return partyState?.seats.find(s=>s.peer===session?.peerId&&s.local===0)?.side??0;},get mode(){return session?.mode||'classic';},connect, get joined(){return joined;},get active(){return !!session;},get role(){return session?.role;},get running(){return started;},send,leave,
  async begin(draft,draftIdentities){
   if(!session||session.role!=='host')return;
   if(session.party){try{if(lastConfig&&partyState?.finished)await send({type:'party-rematch'});dialog.showModal();}catch(error){notice(error.message);}return;}
   if(!joined){notice('Önce arkadaşının odaya katılmasını bekle.');dialog.showModal();return;}
   if(session.mode==='ultimate'){try{await send({type:'ultimate-rematch'});}catch(error){notice(error.message);}return;}
   if(!draft&&lastConfig?.draft){draft=lastConfig.draft;draftIdentities=lastConfig.draftIdentities;}
   started=false;prepared=true;notice('Rakibin maçı yüklemesi bekleniyor…');
   try{const config=game().begin(draft?{draft,draftIdentities,light:'night'}:undefined);lastConfig=config;await send({type:'start',config});}catch(error){prepared=false;game().stop();notice(error.message);dialog.showModal();}
  },
  tick(t){
   if(!session||!started||matchPause)return;
   if(!session.party&&session.role==='host'&&t-lastInput>400)game().input({held:[],pressed:[]});
   if(t-last<40||busy)return;last=t;busy=true;
   const current=generation;
   let message;try{message=session.role==='host'?game().snapshot():game().localInput();}catch(error){busy=false;notice(error.message);return;}
   send(message).catch(error=>{if(current===generation)notice('Güncelleme gönderilemedi, tekrar deneniyor: '+error.message);}).finally(()=>{if(current===generation)busy=false;});
  }
 };
 $('#online-open').onclick=()=>dialog.showModal();$('#online-room').onclick=()=>dialog.showModal();$('#online-create').onclick=()=>connect('create');$('#online-join').onclick=()=>connect('join');$('#online-leave').onclick=()=>leave();
 window.addEventListener('pagehide',()=>{if(session)navigator.sendBeacon('/api/online/leave',new Blob([JSON.stringify(session)],{type:'application/json'}));});
 // The visiting player sends controls; match choices and restart decisions belong to the host.
 document.addEventListener('click',e=>{if(!session||session.role!=='guest')return;const control=e.target.closest('button,select');if(session.party&&['sub-0','sub-1'].includes(control?.id))return;if(control&&['sub-0','sub-1','again','end-draw','extra-time','start-shootout','admin-open','pause'].includes(control.id)){e.stopImmediatePropagation();e.preventDefault();if(control.id==='again')send({type:'rematch-vote'});if(control.id==='pause')send({type:'pause'}).catch(error=>notice(error.message));}},true);
 const directory=document.createElement('section');directory.innerHTML='<h3>SUNUCU LİSTESİ</h3><p>Aynı oyun adresindeki açık odalar. Bir odaya basarak katıl.</p><button type="button" id="rooms-refresh">YENİLE</button><div id="rooms-list" role="status"></div>';
 $('#online-status').before(directory);
 let listing=false;
 async function refreshRooms(){if(listing||!dialog.open)return;if(window.ArenaAccount&&!ArenaAccount.user){directory.querySelector('#rooms-list').textContent='Sunucu listesini görmek için hesabına giriş yap.';return;}listing=true;const list=directory.querySelector('#rooms-list');try{const response=await fetch('/api/online/rooms',{cache:'no-store',signal:AbortSignal.timeout(5000)});if(!response.ok)throw Error();const data=await response.json();list.replaceChildren();for(const room of data.rooms){const button=document.createElement('button');button.type='button';button.textContent=room.code+' · '+({draft:'Online Draft',classic:'Klasik',ultimate:'Ultimate Team'}[room.mode]||room.mode)+' · '+room.players+'/'+room.capacity;button.disabled=!!session;button.onclick=()=>{$('#online-code').value=room.code;connect('join',room.mode);};list.append(button);}if(!data.rooms.length)list.textContent='Henüz açık sunucu yok. Oda oluştur ve arkadaşlarını bu oyun adresine davet et.';}catch{list.textContent='Sunucu listesi alınamadı. Yenile ile tekrar dene.';}finally{listing=false;}}
 directory.querySelector('#rooms-refresh').onclick=refreshRooms;
 new MutationObserver(()=>{if(dialog.open)refreshRooms();}).observe(dialog,{attributes:true,attributeFilter:['open']});
 setInterval(()=>{if(!document.hidden&&dialog.open)refreshRooms();},5000);
 updateUI();
})();
