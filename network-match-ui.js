(() => {
 'use strict';
 const panel=document.createElement('section');panel.id='network-pause';panel.hidden=true;panel.setAttribute('aria-live','polite');
 panel.innerHTML='<div class="modal-card"><span class="tag">DURAKLATMA İSTEĞİ</span><h2>MAÇ DURAKLATILDI</h2><p id="network-pause-time"></p><p>İki oyuncu da hazır olduğunda veya 60 saniye dolunca maç devam eder.</p><button id="network-pause-ready" class="primary">HAZIRIM</button><p id="network-pause-status" role="status"></p></div>';
 document.querySelector('.game-wrap').append(panel);
 const ready=panel.querySelector('button'),status=panel.querySelector('#network-pause-status');let last=null,remaining=0,received=0,senReady=false,busy=false;
 window.addEventListener('sen-message',e=>{if(e.detail.type==='match-pause')senReady=e.detail.ready;});
 ready.onclick=async()=>{if(busy)return;busy=true;ready.disabled=true;try{if(window.ArenaSen?.room?.playing){await ArenaSen.readyAfterPause();senReady=true;}else await ArenaOnline.readyAfterPause();status.textContent='Diğer oyuncu bekleniyor…';}catch(e){status.textContent=e.message;}finally{busy=false;}};
 setInterval(()=>{
  const sen=window.ArenaSen?.room?.playing,pause=sen?ArenaSen.state?.pause:window.ArenaOnline?.pauseState;
  panel.hidden=!pause;document.body.classList.toggle('network-paused',!!pause);
  if(!pause){last=null;senReady=false;return;}
  if(pause!==last){if(!last){status.textContent='';senReady=sen&&pause.ready.includes(String(ArenaSen.room.seat));}remaining=Math.max(0,pause.until-pause.serverTime);received=performance.now();last=pause;}
  panel.querySelector('#network-pause-time').textContent=Math.max(0,Math.ceil((remaining-performance.now()+received)/1000))+' '+(window.ArenaLanguage?.t('sn')||'sn');
  ready.disabled=busy||(sen?senReady:ArenaOnline.pauseReady);
  if(ready.disabled&&!busy)status.textContent='Diğer oyuncu bekleniyor…';
 },100);
})();
