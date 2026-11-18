(() => {
 'use strict';
 const $=s=>document.querySelector(s),online=()=>window.ArenaOnline,teams=window.ARENA_TEAMS;
 const panel=document.createElement('dialog');panel.id='draft-dialog';
 panel.innerHTML='<section class="draft-room"><div class="draft-header"><div><div class="draft-eyebrow">GOLBOL / ULTIMATE</div><h2 id="draft-title">ARKADAŞ DRAFTI</h2></div><div id="draft-round-steps" class="draft-round" aria-label="Draft turları"><span></span><span></span><span></span><span></span><span></span><span></span></div></div><p class="draft-description">Beş kart açılır, sen birini seçersin. 4 saha oyuncusu + 1 kaleci + altın teknik direktör. Gerçek FC 27 kartları · düşük / orta / yüksek puan karışık. PS5: × Seç / açılışı atla · ○ Geri</p><div id="draft-local-options"></div><label class="draft-view-label">KADRO <select id="draft-team-view"><option value="0">Takım 1</option><option value="1">Takım 2</option></select></label><div class="draft-legend"><span style="--swatch:#ba824e">Bronz</span><span style="--swatch:#b5becb">Gümüş</span><span style="--swatch:#c8a963">Altın</span><span style="--swatch:#4b8eff">Yayımlanmış özel kartlar</span></div><p id="draft-progress" role="status"></p><div id="draft-offers"></div><button type="button" id="draft-reveal-skip" hidden>× AÇILIŞI ATLA</button><div class="draft-squad-header"><span>SENİN KADRON</span><span id="draft-average"></span></div><div id="draft-squad"></div><div class="draft-actions"><button type="button" id="draft-club">KULÜBÜNÜ TASARLA</button><button type="button" id="draft-play" class="primary" disabled>HAZIRLANIYOR</button><button type="button" id="draft-close" class="text-button">KÜÇÜLT / ○ GERİ</button></div></section>';
 document.body.append(panel);
 let draft=null,pending=false,indices=null,offline=false,generation=0,readyBefore=false,identitySynced=false,viewSide=0,localLayout={count:1,sides:[0,1]};
 function card(c){const t=teams[c.team],p=c.coach?t.coach:c.keeper?t.keeper:t.players[c.player];return {t,p};}
 function render(){
  const side=offline?viewSide:online().party?viewSide:online().role==='host'?0:1;
  const humanSides=new Set(localLayout.sides.slice(0,localLayout.count)),canPick=offline?humanSides.has(side):!online().party||draft.captains?.[side]===online().peerId;
  $('#draft-local-options').hidden=!offline;if(offline)ArenaLocalPlay.form($('#draft-local-options'),localLayout,next=>{localLayout=next;viewSide=next.sides[0];const sides=new Set(next.sides.slice(0,next.count));draft.identities=[0,1].map(s=>sides.has(s)?ArenaClub.normalize({...ArenaClubDesigner.profile,name:ArenaClubDesigner.profile.name+(sides.size===2?' · '+(s+1):'')}):ArenaClub.normalize({name:'CPU KULÜBÜ',short:'CPU',shirt:'#e73545'}));render();},draft.picks.some(p=>p.length>0));
  $('#draft-team-view').value=String(side);$('#draft-team-view').parentElement.hidden=!offline&&!online().party;
  const identity=window.ArenaClub.normalize(draft.identities?.[side]);$('#draft-club').disabled=!canPick;$('#draft-club').textContent=identity.name+' · '+identity.short+' / TASARLA';
  $('#draft-title').textContent=offline?'OFFLINE DRAFT · YAN YANA / CPU':'ARKADAŞ DRAFTI · '+(online().party?'EN FAZLA 2v2':'1v1');
  $('#draft-progress').textContent=`Sen: ${draft.picks[side].length}/6 · ${offline?(humanSides.has(1-side)?'Diğer yerel takım':'CPU'):'Diğer takım'}: ${draft.picks[1-side].length}/6 · ${draft.picks[side].length===4?'Kaleci seçimi':draft.picks[side].length===5?'Altın teknik direktör seçimi':draft.picks[side].length===6?'Kadro hazır':'Saha oyuncusu seçimi'}`;
  window.ArenaDraftUI.renderOffers(draft.offers[side],teams,index=>pick(index,side),pending||!canPick,draft.picks[side].length);
  window.ArenaDraftUI.renderSquad(draft.picks[side],teams);
  const count=draft.picks[side].length,footballers=draft.picks[side].filter(c=>!c.coach);
  $('#draft-round-steps').querySelectorAll('span').forEach((step,i)=>step.className=i<count?'complete':i===count?'current':'');
  $('#draft-average').textContent=footballers.length?'ORTALAMA '+Math.round(footballers.reduce((sum,c)=>sum+c.rating,0)/footballers.length):'5 OYUNCU + TEKNİK DİREKTÖR';
  const ready=draft.picks.every(p=>p.length===6),host=offline||online().role==='host';
  $('#draft-play').disabled=!ready||(!host&&!online().party);
  $('#draft-play').textContent=ready?(offline?'SEÇİLEN TAKIMLARLA MAÇA BAŞLA':online().party?'ODA / TAKIMLAR VE HAZIRLIK':host?'DRAFT MAÇINI BAŞLAT':'EV SAHİBİ MAÇI BAŞLATACAK'):'KADRONU TAMAMLA · × KART SEÇ';
  if(ready&&host&&!readyBefore&&Array.from(navigator.getGamepads?.()||[]).some(p=>p?.connected))window.ArenaPad?.focus($('#draft-play'));readyBefore=ready;
 }
 async function pick(index,side){
  if(pending||!draft.offers[side][index])return;
  const current=generation;pending=true;let error='';render();
  try{
   await window.ArenaDraftUI.select(index,draft.picks[side].length);if(current!==generation)return;
   if(offline){
    draft.picks[side].push(draft.offers[side][index]);
    const humanSides=new Set(localLayout.sides.slice(0,localLayout.count)),other=1-side;if(!humanSides.has(other)){const best=draft.offers[other].reduce((a,b)=>a.rating>=b.rating?a:b);draft.picks[other].push(best);}else if(draft.picks[side].length===6&&draft.picks[other].length<6)viewSide=other;
    draft.offers=draft.picks.map(picks=>window.ArenaDraftCards.offers(teams,picks));
   }else await online().send({type:'draft-pick',side,index,round:draft.picks[side].length});
  }catch(e){error=e.message;}finally{if(current===generation){pending=false;render();if(error)$('#draft-progress').textContent=error;}}
 }
 window.ArenaDraft={
  install(picks,identities){
   if(!indices)indices=[teams.length,teams.length+1];
   return picks.map((s,side)=>{
    if(s.length!==6)throw Error('Draft kadrosu tamamlanmadı.');
    const source=teams[s[0].team],clone=c=>({...card(c).p,powerTeam:card(c).p.powerTeam||(card(c).t.category==='special'?{short:card(c).t.short,name:card(c).t.name,category:'special'}:undefined),...(!c.coach?window.ArenaFC27Catalog.attributes(c):{}),kit:undefined,overall:c.rating,cardTier:c.tier,cardItemId:c.itemId});
    const identity=window.ArenaClub.normalize(identities?.[side]),crest=window.ArenaClub.uri(window.ArenaClub.logo(identity)),crestImage=new Image();crestImage.src=crest;
    teams[indices[side]]={...source,category:'draft',draftTeam:true,...identity,color:identity.shirt,crest,crestImage,kit:window.ArenaClub.kit(identity),keeperKit:{...window.ArenaClub.kit({...identity,shirt:identity.trim,stripe:identity.shirt}),keeper:true},players:s.slice(0,4).map(clone),keeper:clone(s[4]),coach:clone(s[5])};
    return {team:indices[side],player:0,reserve:1};
   });
  },
  get offline(){return offline;},get picks(){return draft?.picks;}
 };
 $('#offline-draft-open').onclick=()=>{
  if(online().active){$('#online-dialog').showModal();$('#online-status').textContent='Offline draft için önce odadan ayrıl.';return;}
  generation++;window.ArenaDraftUI.reset();localLayout={count:1,sides:[0,1]};viewSide=0;offline=true;pending=false;draft={identities:[window.ArenaClubDesigner.profile,window.ArenaClub.normalize({name:"CPU KULÜBÜ",short:"CPU",shirt:"#e73545",badge:"#e73545"})],picks:[[],[]],offers:[window.ArenaDraftCards.offers(teams),window.ArenaDraftCards.offers(teams)]};render();panel.showModal();
 };
 window.ArenaDraft.openOnline=async()=>{
  try{
   if(!online().active)throw Error('Önce oda oluştur veya arkadaşının odasına katıl.');
   if(draft&&!offline){if(!panel.open)panel.showModal();return;}
   generation++;window.ArenaDraftUI.reset();pending=false;draft=null;offline=false;await online().send({type:'draft-begin',identity:window.ArenaClubDesigner.profile});
  }catch(e){$('#online-status').textContent=e.message;throw e;}
 };
 $('#draft-begin').onclick=()=>window.ArenaDraft.openOnline().catch(()=>{});
 $('#draft-team-view').onchange=()=>{viewSide=Number($('#draft-team-view').value);ArenaDraftUI.reset();render();};
 window.ArenaDraft.customize=()=>window.ArenaClubDesigner.open(draft?.identities?.[offline||online().party?viewSide:online().role==='host'?0:1],async identity=>{if(draft&&offline&&panel.open){draft.identities[viewSide]=identity;render();}else if(draft&&!offline&&online().active&&panel.open)await online().send({type:'draft-identity',side:viewSide,identity});});
 $('#draft-club').onclick=()=>window.ArenaDraft.customize();
 $('#draft-reveal-skip').onclick=()=>window.ArenaDraftUI.skip();
 $('#draft-close').onclick=()=>panel.close();
 $('#draft-play').onclick=()=>{panel.close();$('#online-dialog').close();if(offline)window.ArenaLocalPlay.beginDraft(draft.picks,draft.identities,localLayout);else if(online().party)$('#online-dialog').showModal();else online().begin(draft.picks,draft.identities);};
 window.addEventListener('online-message',e=>{const m=e.detail;if(m.type==='party-state'&&!offline&&draft&&!m.drafting&&!m.preparing&&!m.playing&&!m.finished){generation++;draft=null;ArenaDraftUI.reset();panel.close();}if(m.type==='draft-state'){offline=false;draft=m.draft;if(!draft.captains||draft.captains[viewSide]!==online().peerId)viewSide=online().side||0;render();if(!panel.open)panel.showModal();if(!identitySynced&&!online().party){identitySynced=true;if(online().role!=='host')online().send({type:'draft-identity',identity:window.ArenaClubDesigner.profile}).catch(error=>$('#draft-progress').textContent=error.message);}}if(m.type==='start'){panel.close();document.querySelector('#club-designer').close();}});
 window.addEventListener('online-reset',()=>{identitySynced=false;if(!offline){generation++;window.ArenaDraftUI.reset();draft=null;panel.close();document.querySelector('#club-designer').close();}});
})();
