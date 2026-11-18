(() => {
 'use strict';
 const box=document.createElement('section');
 box.id='room-chat';box.hidden=true;box.setAttribute('aria-label','Oda sohbeti');
 box.innerHTML='<button id="chat-toggle" type="button" aria-expanded="false">SOHBET <span id="chat-unread"></span></button><div id="chat-panel" hidden><p class="chat-caption">Yalnızca bu odadaki oyuncularla</p><ol id="chat-messages" role="log" aria-live="polite" aria-label="Mesajlar"></ol><form id="chat-form"><label class="chat-caption" for="chat-input">Mesajın</label><div class="chat-compose"><input id="chat-input" maxlength="400" autocomplete="off" placeholder="Bir mesaj yaz…"><button type="submit">GÖNDER</button></div><p id="chat-error" role="status"></p></form></div>';
 document.querySelector('#arena').append(box);
 const $=s=>box.querySelector(s),log=$('#chat-messages'),input=$('#chat-input');
 const seen=new Set();let unread=0,sending=false;
 function add(m,history=false){
  if(seen.has(m.id))return;seen.add(m.id);
  const row=document.createElement('li'),who=document.createElement('b'),text=document.createElement('span');
  const mine=Number.isInteger(m.seat)?m.seat===window.ArenaSen?.room?.seat:m.peerId?m.peerId===window.ArenaOnline.peerId:m.role===window.ArenaOnline.role;row.classList.toggle('mine',mine);
  who.textContent=mine?'Sen':(m.name|| (m.role==='host'?'Ev sahibi':'Arkadaşın'));text.textContent=m.text;row.append(who,text);log.append(row);
  while(log.children.length>60)log.firstChild.remove();
  if(!history&&!mine&&$('#chat-panel').hidden){unread++;$('#chat-unread').textContent='('+unread+')';}
  log.scrollTop=log.scrollHeight;
 }
 $('#chat-toggle').onclick=()=>{const open=$('#chat-panel').hidden;$('#chat-panel').hidden=!open;$('#chat-toggle').setAttribute('aria-expanded',String(open));if(open){unread=0;$('#chat-unread').textContent='';log.scrollTop=log.scrollHeight;input.focus();}};
 $('#chat-form').onsubmit=async e=>{
  e.preventDefault();if(sending||!input.value.trim())return;
  sending=true;const text=input.value;$('#chat-error').textContent='';$('#chat-form button').disabled=true;
  try{if(window.ArenaSen?.room?.playing)await ArenaSen.sendChat(text);else await window.ArenaOnline.send({type:'chat',text});if(input.value===text)input.value='';}
  catch(error){$('#chat-error').textContent=error.message;}
  finally{sending=false;$('#chat-form button').disabled=false;input.focus();}
 };
 input.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();$('#chat-toggle').click();}});
 window.addEventListener('online-message',e=>{const m=e.detail;if(m.type==='ready'){clear();senCode='';}if(m.type==='chat')add(m);if(m.type==='chat-history')m.messages.forEach(m=>add(m,true));});
 function clear(){box.hidden=true;$('#chat-panel').hidden=true;$('#chat-toggle').setAttribute('aria-expanded','false');log.replaceChildren();seen.clear();input.value='';unread=0;$('#chat-unread').textContent='';$('#chat-error').textContent='';}
 window.addEventListener('online-reset',clear);
 window.addEventListener('sen-message',e=>{if(e.detail.type==='chat')add(e.detail);});
 let senCode='';window.addEventListener('sen-room-changed',e=>{const room=e.detail;if(senCode!==room?.code){clear();senCode=room?.code||'';}for(const m of room?.chat||[])add(m,true);});
 setInterval(()=>{box.hidden=!(window.ArenaOnline?.running||window.ArenaSen?.room?.playing);if(box.hidden){$('#chat-panel').hidden=true;$('#chat-toggle').setAttribute('aria-expanded','false');}},150);
})();
