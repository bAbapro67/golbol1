(() => {
 'use strict';
 function create({onChange,onPause,id=''}){
  const root=document.createElement('nav');root.className='football-controls';root.dataset.enabled='true';if(id)root.id=id;root.setAttribute('aria-label','Dokunmatik futbol kontrolleri');
  root.innerHTML='<div class="football-stick" role="group" aria-label="Hareket analoğu"><span class="football-stick-ring"></span><span class="football-stick-nub"></span></div><div class="football-actions"><button type="button" class="football-action football-shoot" data-football-action="shoot" aria-label="Şut">ŞUT</button><button type="button" class="football-action football-jump" data-football-action="jump" aria-label="Zıpla">ZIPLA</button><button type="button" class="football-action football-slide" data-football-action="slide" aria-label="Kay">KAY</button><button type="button" class="football-action football-super" data-football-action="super" aria-label="Süper şut">SÜPER</button></div><button type="button" class="football-pause" aria-label="Duraklat">Ⅱ</button>';
  const stick=root.querySelector('.football-stick'),nub=root.querySelector('.football-stick-nub'),sources=new Map();let stickPointer=null,enabled=true;
  function emit(){const input={};for(const value of sources.values())for(const [key,held]of Object.entries(value))if(held)input[key]=true;root.querySelectorAll('[data-football-action]').forEach(b=>b.classList.toggle('held',!!input[b.dataset.footballAction]));onChange(input);}
  function move(e){const rect=stick.getBoundingClientRect(),radius=rect.width*.34,dx=e.clientX-rect.left-rect.width/2,dy=e.clientY-rect.top-rect.height/2,length=Math.hypot(dx,dy),scale=length>radius?radius/length:1,x=dx*scale/radius,y=dy*scale/radius;nub.style.transform=`translate(${x*radius}px,${y*radius}px)`;sources.set('analog',{left:x<-.18,right:x>.18,jump:y<-.7,slide:y>.7});emit();}
  stick.addEventListener('pointerdown',e=>{if(!enabled||stickPointer!==null)return;e.preventDefault();stickPointer=e.pointerId;try{stick.setPointerCapture(e.pointerId);}catch{}move(e);});
  stick.addEventListener('pointermove',e=>{if(e.pointerId===stickPointer){e.preventDefault();move(e);}});
  function releaseStick(e){if(e.pointerId!==stickPointer)return;stickPointer=null;sources.delete('analog');nub.style.transform='translate(0,0)';emit();}
  for(const event of ['pointerup','pointercancel','lostpointercapture'])stick.addEventListener(event,releaseStick);
  root.querySelectorAll('[data-football-action]').forEach(button=>{button.addEventListener('pointerdown',e=>{if(!enabled)return;e.preventDefault();try{button.setPointerCapture(e.pointerId);}catch{}sources.set(e.pointerId,{[button.dataset.footballAction]:true});emit();});const release=e=>{if(sources.delete(e.pointerId))emit();};for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,release);});
  root.querySelector('.football-pause').onclick=()=>onPause?.();
  function reset(){sources.clear();stickPointer=null;nub.style.transform='translate(0,0)';emit();}
  window.addEventListener('blur',reset);document.addEventListener('visibilitychange',()=>{if(document.hidden)reset();});
  return {root,reset,setEnabled(value){root.dataset.enabled=String(value);if(enabled===value)return;enabled=value;if(!value)reset();},get activePointers(){return sources.size;}};
 }
 window.ArenaMobileControls={create};
})();
