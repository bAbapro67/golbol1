// One card generator for private online rooms and offline CPU drafts.
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.ArenaDraftCards=factory();})(typeof window==='object'?window:globalThis,()=>{
 'use strict';
 const finishes={'bronze':'BRONZ','silver':'GÜMÜŞ','gold':'ALTIN'};
 function register(data){for(const [key,value] of Object.entries(data.finishes))finishes[key]=value.name;}
 function finishFor(card){
  if(card.coach)return 'gold';
  if(card.finish&&finishes[card.finish])return card.finish;
  if(card.base<=64)return 'bronze';
  if(card.base<=74)return 'silver';
  return 'gold';
 }
 function offers(teams,picks=[],random=Math.random){
  if(picks.length>=6)return [];
  const keeper=picks.length===4,coach=picks.length===5,pool=[],seen=new Set();
  teams.forEach((team,teamIndex)=>{
   if(team.category==='special'&&!team.draftEligible||team.draftTeam)return;
   (coach?[team.coach]:keeper?[team.keeper]:team.players).forEach((player,playerIndex)=>{
    if(!player||picks.some(c=>c.team===teamIndex&&c.player===playerIndex&&c.keeper===keeper&&!!c.coach===coach))return;
    if(!coach&&!player.fc27Cards?.length)return;
    const identity=coach?player.realName||player.name:player.fc27Id||player.fc27Cards[0].assetId||teamIndex+':'+playerIndex;
    if(seen.has(identity)||!coach&&picks.some(c=>c.assetId===identity))return;seen.add(identity);
    const base=coach?85:player.fc27Cards.find(c=>c.baseItem)?.rating;
    if(!Number.isFinite(base))return;
    pool.push({team:teamIndex,player:playerIndex,keeper,coach,base,assetId:identity,eligible:!coach&&player.fc27Cards.some(c=>!c.baseItem),items:player.fc27Cards||[]});
   });
  });
  const take=list=>list[Math.min(list.length-1,Math.floor(Math.max(0,Math.min(.999999,random()))*list.length))];
  const secondHigh=!coach&&random()<.45;
  const chosen=Array.from({length:Math.min(5,pool.length)},(_,slot)=>{
   let candidates=pool,matches=()=>true;
   const high=slot===4||slot===3&&secondHigh;
   if(!coach){matches=c=>slot===0?c.rating<=74:slot===1?c.rating>=75&&c.rating<=79:slot===2?c.rating>=80&&c.rating<=83:high?c.rating>=84:c.rating<=83;const preferred=pool.filter(c=>c.items.some(matches));if(preferred.length)candidates=preferred;else matches=()=>true;}
   const candidate=take(candidates);pool.splice(pool.indexOf(candidate),1);
   const {items,...identity}=candidate;
   if(coach)return {...identity,tier:'normal',premium:false,rating:85,finish:'gold'};
   const matching=items.filter(matches),baseItems=matching.filter(c=>c.baseItem),specialItems=matching.filter(c=>!c.baseItem);
   const variants=!baseItems.length||specialItems.length&&random()<(high ? .25 : .12)?specialItems:baseItems,item=take(variants);
   return {...identity,...item,tier:item.rarity>=2?'special':'normal',premium:false};
  });
  // Shuffle presentation positions so a low or high slot cannot be predicted.
  for(let i=chosen.length-1;i>0;i--){const j=Math.floor(Math.max(0,Math.min(.999999,random()))*(i+1));[chosen[i],chosen[j]]=[chosen[j],chosen[i]];}
  return chosen;
 }
 if(typeof window==='object'&&window.ARENA_FC27_CARDS)register(window.ARENA_FC27_CARDS);
 return {offers,finishFor,finishes,register};
});
