(() => {
 'use strict';
 const source=window.ArenaPortraitSource;
 function make(player){
  const holder=document.createElement('span');holder.className='draft-face';
  const image=document.createElement('img');image.className='draft-face-photo';image.alt=player.realName||player.name;image.decoding='async';holder.append(image);
  const candidates=source.sources(player,window.ARENA_DRAFT_FACES),prepared=window.ARENA_CARD_PORTRAITS?.[source.key(player)];if(prepared)candidates.unshift({path:prepared});
  holder.ready=(async()=>{
   for(const entry of candidates){try{
    image.src=entry.path;await image.decode();if(image.naturalWidth<32||image.naturalHeight<32)continue;
    if(entry.crop||entry.columns||entry.rows){
     const w=image.naturalWidth,h=image.naturalHeight,cols=entry.columns||1,rows=entry.rows||1;
     const region=entry.crop?entry.crop.map((v,i)=>v*(i%2?h:w)):[(entry.cell||0)%cols*w/cols,Math.floor((entry.cell||0)/cols)*h/rows,w/cols,h/rows];
     const canvas=document.createElement('canvas');canvas.width=192;canvas.height=240;const c=canvas.getContext('2d');const scale=Math.min(192/region[2],240/region[3]),dw=region[2]*scale,dh=region[3]*scale;c.drawImage(image,...region,(192-dw)/2,(240-dh)/2,dw,dh);image.src=canvas.toDataURL('image/png');await image.decode();
    }
    holder.dataset.source=entry.path;holder.dataset.ready='true';return true;
   }catch{}}
   image.src='assets/draft/face-fallback.svg';holder.dataset.ready='fallback';return false;
  })();
  return holder;
 }
 window.ArenaDraftPortraits={make,key:source.key};
})();
