(() => {
 'use strict';
 const $=s=>document.querySelector(s),reduce=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
 let offerKey='',squadKey='',timer=null,revealing=false,needsFocus=false;
 const text=(tag,className,value)=>{const el=document.createElement(tag);el.className=className;el.textContent=value;return el;};
 function tile(card,teams){
  const team=teams[card.team],player=card.coach?team.coach:card.keeper?team.keeper:team.players[card.player],finish=window.ArenaDraftCards.finishFor(card);
  const el=document.createElement('div');el.className='draft-card '+finish;el.dataset.finish=finish;
  const style=window.ARENA_FC27_CARDS?.finishes[finish];if(style?.art)el.style.backgroundImage=`url("${style.art}")`;if(style?.ink)el.style.color=style.ink;
  if(card.foil){el.classList.add('draft-holographic');el.dataset.foil=card.foil;}
  el.setAttribute('role','img');el.setAttribute('aria-label',`${player.name}, ${card.rating} puan, ${window.ArenaDraftCards.finishes[finish]}`);
  const rating=document.createElement('span');rating.className='draft-card-rating';rating.append(text('strong','',card.rating),text('span','draft-card-role',card.coach?'TD':card.position||(card.keeper?'KL':'SAHA')));
  el.append(rating,window.ArenaDraftPortraits.make(player));
  if(team.crest){const crest=document.createElement('img');crest.className='draft-club';crest.src=team.crest;crest.alt='';crest.decoding='async';crest.onerror=()=>crest.remove();el.append(crest);}
  el.append(text('b','draft-card-name',player.name));
  const line=document.createElement('span');line.className='draft-card-line';el.append(line);
  const stats=document.createElement('span');stats.className='draft-card-stats';
  if(card.stats)stats.classList.add('fc27-stats');
  const labels=card.keeper?['DIV','HAN','KIC','REF','SPD','POS']:['PAC','SHO','PAS','DRI','DEF','PHY'];
  const entries=card.coach?[]:card.stats?card.stats.map((value,i)=>[labels[i],value]):[['HIZ',Math.round((player.speed||6)*9)],['ŞUT',Math.round((player.shot||6)*9)],['ZIP',Math.round((player.jump||6)*9)]];
  for(const [label,value] of entries){
   const stat=document.createElement('span');stat.className='draft-stat';stat.append(text('b','',value),text('small','',label));stats.append(stat);
  }
  el.append(stats,text('span','draft-card-team',(team.short||team.name)+(card.rarity>=2?' · '+(window.ArenaDraftCards.finishes[finish]||''):'')));
  const shine=document.createElement('span');shine.className='draft-spotlight';el.append(shine);
  return el;
 }
 function skip(){
  clearTimeout(timer);timer=null;revealing=false;
  $('#draft-offers')?.classList.remove('draft-is-opening');
  const button=$('#draft-reveal-skip');if(button)button.hidden=true;
 }
 function renderOffers(cards,teams,choose,pending,round){
  const offers=$('#draft-offers'),key=JSON.stringify([round,cards]);
  if(key!==offerKey){
   skip();offerKey=key;needsFocus=true;offers.replaceChildren();
   cards.forEach((card,index)=>{
    const choice=document.createElement('button');choice.type='button';choice.className='draft-choice';choice.dataset.draftIndex=index;choice.style.setProperty('--reveal-delay',index*80+'ms');
    const player=card.coach?teams[card.team].coach:card.keeper?teams[card.team].keeper:teams[card.team].players[card.player],finish=window.ArenaDraftCards.finishFor(card);
    choice.setAttribute('aria-label',`${player.name} · ${card.rating} · ${window.ArenaDraftCards.finishes[finish]} · × Seç`);
    const flip=document.createElement('span');flip.className='draft-flip';const back=document.createElement('span');back.className='draft-back';back.setAttribute('aria-hidden','true');flip.append(back,tile(card,teams));choice.append(flip);
    choice.onclick=()=>{if(revealing)skip();else choose(index);};offers.append(choice);
   });
   if(cards.length&&!reduce()){revealing=true;offers.classList.add('draft-is-opening');$('#draft-reveal-skip').hidden=false;timer=setTimeout(skip,880);}
  }
  offers.querySelectorAll('button').forEach(button=>button.disabled=pending);
  if(!pending&&needsFocus){needsFocus=false;if(offers.firstElementChild&&Array.from(navigator.getGamepads?.()||[]).some(p=>p?.connected))window.ArenaPad?.focus(offers.firstElementChild);}
 }
 function renderSquad(cards,teams){
  const key=JSON.stringify(cards);if(key===squadKey)return;squadKey=key;
  const squad=$('#draft-squad');squad.replaceChildren();
  for(let index=0;index<6;index++){const slot=document.createElement('div');slot.className='draft-slot'+(cards[index]?'':' empty');slot.dataset.slot=index;if(cards[index])slot.append(tile(cards[index],teams));else slot.append(text('span','draft-slot-label',index===5?'TEKNİK DİREKTÖR':index===4?'KALECİ':`${index+1}. SAHA`));squad.append(slot);}
 }
 async function select(index,slotIndex){
  if(reduce())return;
  const source=$(`[data-draft-index="${index}"] .draft-card`),slot=$(`[data-slot="${slotIndex}"]`);if(!source||!slot)return;
  const from=source.getBoundingClientRect(),to=slot.getBoundingClientRect();if(!from.width||!to.width)return;
  const ghost=source.cloneNode(true);ghost.classList.add('draft-flight');ghost.setAttribute('aria-hidden','true');ghost.style.left=from.left+'px';ghost.style.top=from.top+'px';ghost.style.width=from.width+'px';$('#draft-dialog').append(ghost);
  const animation=ghost.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${to.left-from.left}px,${to.top-from.top}px) scale(${to.width/from.width})`,opacity:.45}],{duration:200,easing:'cubic-bezier(.2,.7,.3,1)',fill:'forwards'});
  let fallback;await Promise.race([animation.finished.catch(()=>{}),new Promise(resolve=>{fallback=setTimeout(resolve,240);})]);clearTimeout(fallback);animation.cancel();ghost.remove();
 }
 function reset(){skip();offerKey='';squadKey='';$('#draft-dialog')?.querySelectorAll('.draft-flight').forEach(el=>el.remove());}
 window.ArenaDraftUI={tile,renderOffers,renderSquad,select,skip,reset,get revealing(){return revealing;}};
})();
