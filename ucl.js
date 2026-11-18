(() => {
  class UCL {
    constructor(teams,selected,random=Math.random){
      if (!teams[selected] || teams[selected].category === 'special') throw Error('Özel takımlar UCL turnuvasına katılamaz.');
      this.teams=teams;this.selected=selected;this.random=random;this.round=0;this.finished=false;this.champion=null;
      const strength=i=>teams[i].performance?.overall ?? teams[i].players.reduce((s,p)=>s+(p.overall ?? (p.speed+p.shot+p.jump)*3),0)/teams[i].players.length;
      const pool=teams.map((_,i)=>i).filter(i=>i!==selected && teams[i].category!=='special').sort((a,b)=>strength(b)-strength(a)||a-b).slice(0,15);
      for(let i=pool.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
      const ids=[selected,...pool.slice(0,15)];
      this.rounds=[Array.from({length:8},(_,i)=>({a:ids[i*2],b:ids[i*2+1],x:null,y:null,winner:null}))];
      this.setOpponent();
    }
    label(){return ['SON 16','ÇEYREK FİNAL','YARI FİNAL','FİNAL'][this.round];}
    setOpponent(){const m=this.rounds[this.round].find(m=>m.a===this.selected||m.b===this.selected);this.opponent=m?(m.a===this.selected?m.b:m.a):null;}
    record(x,y,penalties=null){
      if(this.finished||x===y&&(!penalties||penalties[0]===penalties[1]))throw Error('UCL requires an unfinished decisive match');
      let survived=false;
      for(const m of this.rounds[this.round]){
        if(m.a===this.selected||m.b===this.selected){m.x=m.a===this.selected?x:y;m.y=m.a===this.selected?y:x;if(penalties)m.penalties=m.a===this.selected?[...penalties]:[penalties[1],penalties[0]];}
        else {m.x=Math.floor(this.random()*4);m.y=Math.floor(this.random()*4);if(m.x===m.y)m.y++;}
        m.winner=(m.penalties?m.penalties[0]>m.penalties[1]:m.x>m.y)?m.a:m.b;if(m.winner===this.selected)survived=true;
      }
      const winners=this.rounds[this.round].map(m=>m.winner);
      if(winners.length===1){this.champion=winners[0];this.finished=true;return;}
      this.rounds.push(Array.from({length:winners.length/2},(_,i)=>({a:winners[i*2],b:winners[i*2+1],x:null,y:null,winner:null})));
      if(!survived){this.finished=true;return;}
      this.round++;this.setOpponent();
    }
    markup(){
      const card=m=>m?`<div class="ucl-pair">${[m.a,m.b].map((id,i)=>`<div class="${m.winner===id?'won':''} ${id===this.selected?'chosen':''}"><img src="${this.teams[id].crest}" alt=""><span>${this.teams[id].name}</span><b>${(i?m.y:m.x)??'–'}${m.penalties?' ('+m.penalties[i]+')':''}</b></div>`).join('')}</div>`:'<div class="ucl-pair pending">TUR BEKLENİYOR</div>';
      const column=(r,side)=>{const count=4/2**r,all=this.rounds[r]||[];return `<section class="ucl-column"><h4>${['SON 16','ÇEYREK','YARI FİNAL'][r]}</h4><div>${Array.from({length:count},(_,i)=>card(all[side*count+i])).join('')}</div></section>`;};
      return `<div class="ucl-bracket">${column(0,0)}${column(1,0)}${column(2,0)}<section class="ucl-final"><img class="ucl-logo" src="assets/fiction/league.svg" alt="UCL"><h3>FİNAL</h3>${card(this.rounds[3]?.[0])}<img class="ucl-trophy" src="assets/fiction/cup.svg" alt="Şampiyonluk kupası"></section>${column(2,1)}${column(1,1)}${column(0,1)}</div>`;
    }
  }
  window.ArenaUCL=UCL;
})();
