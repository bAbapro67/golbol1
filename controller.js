(() => {
 'use strict';
 const previous=new Map(),heldKeys=new Set(),blocked=new Set();let focused=null,lastDirection='',nextMove=0,statusText='',restoreFocus=null,textTarget=null,scopeBefore=null;
 const $=s=>document.querySelector(s);
 const keyboard=document.createElement('dialog');keyboard.id='pad-keyboard';
 keyboard.innerHTML='<section class="pad-keyboard"><h2>PS5 ile yaz</h2><p>Yön tuşları / sol analog · × Harf seç · □ Sil · △ Boşluk · ○ Tamam</p><output id="pad-text"></output><div id="pad-letters"></div><div class="pad-text-actions"><button type="button" data-edit="delete">□ SİL</button><button type="button" data-edit="space">△ BOŞLUK</button><button type="button" data-edit="case">BÜYÜK / KÜÇÜK</button><button type="button" data-edit="done">TAMAM</button></div></section>';
 document.body.append(keyboard);let upper=true;
 function syncText(){const out=$('#pad-text');out.textContent=textTarget?.type==='password'?'•'.repeat(textTarget.value.length):textTarget?.value||'…';}
 function write(value){if(!textTarget)return;const max=textTarget.maxLength>0?textTarget.maxLength:400;textTarget.value=(textTarget.value+value).slice(0,max);textTarget.dispatchEvent(new Event('input',{bubbles:true}));syncText();}
 function letters(){const grid=$('#pad-letters');grid.replaceChildren();for(const char of '1234567890QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ.,!?-_@'){
  const b=document.createElement('button');b.type='button';b.textContent=upper?char:char.toLocaleLowerCase('tr');b.onclick=()=>write(b.textContent);grid.append(b);
 }}
 function closeKeyboard(){keyboard.close();textTarget?.dispatchEvent(new Event('change',{bubbles:true}));restoreFocus?.focus({preventScroll:true});focused=restoreFocus;}
 keyboard.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{const kind=b.dataset.edit;if(kind==='done')closeKeyboard();if(kind==='delete'&&textTarget){textTarget.value=Array.from(textTarget.value).slice(0,-1).join('');syncText();}if(kind==='space')write(' ');if(kind==='case'){upper=!upper;letters();}});letters();
 function openKeyboard(input){textTarget=input;restoreFocus=input;syncText();keyboard.showModal();focused=null;focusTarget($('#pad-letters button'));}
 function visible(el){return !!el&&!el.disabled&&!el.closest('[hidden],.hidden,[inert]')&&el.getClientRects().length>0;}
 function topDialog(){if(keyboard.open)return keyboard;const designer=$('#club-designer');if(designer?.open)return designer;return [...document.querySelectorAll('dialog[open]')].at(-1);}
 function root(){if(window.ArenaOpening?.root)return window.ArenaOpening.root;if(window.ArenaSpectator?.active)return $('#watch-bar');const dialog=topDialog();if(dialog)return dialog;const network=$('#network-pause');if(network&&!network.hidden)return network;const chat=$('#chat-panel');if(chat&&!chat.hidden)return chat;const state=window.ArenaControls?.state;return document.getElementById(state)||$('#menu');}
 function targets(){return [...(root()?.querySelectorAll('button,select,input,textarea,summary,[tabindex="0"]')||[])].filter(visible);}
 function focusTarget(el){if(!el)return;if(focused!==el){focused?.classList.remove('gamepad-focus');focused=el;}el.classList.add('gamepad-focus');el.focus({preventScroll:true});el.scrollIntoView({block:'nearest',inline:'nearest',behavior:'instant'});}
 function navigate(direction){
  const list=targets();if(!list.length)return;
  if(!list.includes(focused))return focusTarget(list[0]);
  if(focused.matches('input[type="range"]')&&(direction==='left'||direction==='right')){
   const amount=(Number(focused.step)||1)*5*(direction==='left'?-1:1);
   focused.value=String(Math.max(Number(focused.min)||0,Math.min(Number(focused.max)||100,Number(focused.value)+amount)));focused.dispatchEvent(new Event('input',{bubbles:true}));return;
  }
  if(focused.tagName==='SELECT'&&(direction==='left'||direction==='right')){
   const options=[...focused.options].filter(o=>!o.disabled),i=options.findIndex(o=>o.value===focused.value),d=direction==='left'?-1:1;
   focused.value=options[(i+d+options.length)%options.length].value;focused.dispatchEvent(new Event('change',{bubbles:true}));return;
  }
  const rect=focused.getBoundingClientRect(),x=rect.x+rect.width/2,y=rect.y+rect.height/2;let best=null,score=Infinity;
  for(const el of list){if(el===focused)continue;const r=el.getBoundingClientRect(),dx=r.x+r.width/2-x,dy=r.y+r.height/2-y;
   const primary=direction==='left'?-dx:direction==='right'?dx:direction==='up'?-dy:dy,cross=direction==='left'||direction==='right'?Math.abs(dy):Math.abs(dx);
   if(primary<=3)continue;const value=primary+cross*2.5;if(value<score){score=value;best=el;}
  }
  const delta=direction==='left'||direction==='up'?-1:1;focusTarget(best||list[(list.indexOf(focused)+delta+list.length)%list.length]);
 }
 function confirm(){window.ArenaCrowd?.unlock?.();const list=targets();if(!list.includes(focused)){focusTarget(list[0]);return;}if(focused.matches('input[type="range"]')){navigate('right');return;}if(focused.matches('input:not([type="checkbox"]):not([type="radio"]),textarea')){openKeyboard(focused);return;}if(focused.tagName==='SELECT'){navigate('right');return;}focused.click();}
 function back(){if(window.ArenaOpening?.active)return;if(window.ArenaSpectator?.active){window.ArenaSpectator.stop();return;}if(keyboard.open){closeKeyboard();return;}const dialog=topDialog();if(dialog){dialog.close();return;}if($('#chat-panel')&&!$('#chat-panel').hidden){$('#chat-toggle').click();return;}window.ArenaControls?.back();focused=null;}
 function release(){for(const code of heldKeys)window.ArenaControls?.keyUp(code);heldKeys.clear();}
 function poll(){
  if(window.ArenaSen?.active&&window.ArenaSen.state&&!window.ArenaOpening?.active){window.ArenaSen.pollPad();if(window.ArenaSen.playing){release();return;}}
  const game=window.ArenaControls;if(!game)return;
  const pads=Array.from(navigator.getGamepads?.()||[]).filter(p=>p?.connected&&p.mapping==='standard');
  const text=pads.length?'PS5 KOLU HAZIR · × Seç · ○ Geri':'PS5 kolunu USB / Bluetooth ile bağla ve bir tuşa bas';
  if(statusText!==text){const status=$('#gamepad-status');if(status)status.textContent=text;statusText=text;}
  if(!pads.length){release();previous.clear();return;}
  const menu=!!window.ArenaSpectator?.active||!!document.body.classList.contains('network-paused')||game.state!=='playing'||!!document.querySelector('dialog[open]')||!!$('#chat-panel')&&!$('#chat-panel').hidden;
  if(menu){const scope=root();if(scope!==scopeBefore||!focused?.isConnected||focused?.disabled){scopeBefore=scope;focusTarget(targets()[0]);}}else scopeBefore=null;
  const nextKeys=new Set();
  pads.slice(0,2).forEach((pad,index)=>{
   const down=i=>!!pad.buttons[i]&&(pad.buttons[i].pressed||pad.buttons[i].value>.5),before=previous.get(pad.index)||new Set(),now=new Set(pad.buttons.map((b,i)=>down(i)?i:-1).filter(i=>i>=0)),edge=i=>now.has(i)&&!before.has(i);
   previous.set(pad.index,now);
   if(index===0)for(const button of [0,1,2,3,5]){if(!down(button))blocked.delete(button);else if(menu)blocked.add(button);}
   if(index===0){
    if(edge(17)){if(window.GolbolDesktop)window.GolbolDesktop.fullscreen();else $('#fullscreen').click();}
    if(menu){
     release();const x=pad.axes[0]||0,y=pad.axes[1]||0;
     const direction=down(14)?'left':down(15)?'right':down(12)?'up':down(13)?'down':Math.max(Math.abs(x),Math.abs(y))<.55?'':Math.abs(x)>Math.abs(y)?(x<0?'left':'right'):(y<0?'up':'down');
     const time=performance.now();if(direction&&(direction!==lastDirection||time>=nextMove)){navigate(direction);nextMove=time+(direction!==lastDirection?330:155);}lastDirection=direction;
     if(edge(0))confirm();if(edge(1))back();if(edge(9))game.pause();
     if(keyboard.open){if(edge(2))keyboard.querySelector('[data-edit="delete"]').click();if(edge(3))write(' ');}
     else{if((edge(2)||edge(4))&&game.state==='setup')$('#setup-prev').click();if(edge(5)&&game.state==='setup')$('#setup-next').click();if(edge(3)&&!$('#room-chat')?.hidden)$('#chat-toggle').click();}
     return;
    }
    lastDirection='';if(edge(9)){game.pause();release();return;}
    if(game.drawn){game.drawPath(pad.axes[2]||0,pad.axes[3]||0,edge(0));return;}
   }
   if(menu)return;
   if(index===1&&!game.secondController)return;
   const codes=index===0?['KeyA','KeyD','KeyW','KeyS','KeyV','KeyF','KeyB','KeyR']:['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyK','KeyJ','KeyL','KeyO'];
   const x=pad.axes[0]||0,y=pad.axes[1]||0,aimY=game.penalty?(pad.axes[3]||0):0;
   const action=button=>down(button)&&(index>0||!blocked.has(button));
   const states=[x<-.22||down(14)||down(6),x>.22||down(15)||down(7),y<-.65||down(12)||aimY<-.2,down(13)||action(3)||aimY>.2,action(2),action(0),action(1),action(5)];
   states.forEach((held,i)=>{if(held)nextKeys.add(codes[i]);});
  });
  for(const code of heldKeys)if(!nextKeys.has(code))game.keyUp(code);
  for(const code of nextKeys)game.keyDown(code);
  game.aim(0,0);
  heldKeys.clear();nextKeys.forEach(code=>heldKeys.add(code));
 }
 window.ArenaPad={poll,release,navigate,confirm,back,openKeyboard,focus:focusTarget};
 window.addEventListener('gamepaddisconnected',release);
})();
