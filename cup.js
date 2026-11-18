// Real 2026 groups; arcade scores and knockout pairing are generated for this save.
(() => {
 class Cup {
  constructor(teams,selected,random=Math.random){
   this.teams=teams;this.selected=selected;this.random=random;this.stage='groups';this.played=0;this.finished=false;this.champion=null;
   this.nations=teams.map((t,i)=>({t,i})).filter(x=>x.t.category==='national');
   this.rows=new Map(this.nations.map(({i})=>[i,{id:i,points:0,gf:0,ga:0,played:0}]));
   this.groups=Array.from({length:12},(_,i)=>this.nations.filter(x=>x.t.group===String.fromCharCode(65+i)).map(x=>x.i));
   this.group=this.groups.find(g=>g.includes(selected));this.matches=[];
   this.groupOpponents=this.group.filter(i=>i!==selected);this.opponent=this.groupOpponents[0];
   for(const g of this.groups)for(let a=0;a<g.length;a++)for(let b=a+1;b<g.length;b++)if(g[a]!==selected&&g[b]!==selected)this.groupScore(g[a],g[b],this.goals(),this.goals());
  }
  goals(){return Math.floor(this.random()*5);}
  compare(a,b){return b.points-a.points||(b.gf-b.ga)-(a.gf-a.ga)||b.gf-a.gf||a.id-b.id;}
  table(){return this.group.map(id=>this.rows.get(id)).sort((a,b)=>this.compare(a,b));}
  groupScore(a,b,x,y){const A=this.rows.get(a),B=this.rows.get(b);A.gf+=x;A.ga+=y;B.gf+=y;B.ga+=x;A.played++;B.played++;A.points+=x>y?3:x===y?1:0;B.points+=y>x?3:x===y?1:0;this.matches.push({a,b,x,y});}
  label(){return this.stage==='groups'?'GRUP '+this.teams[this.selected].group+' · '+(this.played+1)+'/3':this.stage==='third'?'ÜÇÜNCÜLÜK MAÇI':({32:'SON 32',16:'SON 16',8:'ÇEYREK FİNAL',4:'YARI FİNAL',2:'FİNAL'}[this.bracket?.length]||'TURNUVA TAMAMLANDI');}
  record(x,y){
   if(this.finished)throw Error('Tournament finished');
   if(this.stage==='groups'){
    this.groupScore(this.selected,this.opponent,x,y);this.played++;
    if(this.played<3){this.opponent=this.groupOpponents[this.played];return;}
    const sorted=this.groups.map(g=>g.map(id=>this.rows.get(id)).sort((a,b)=>this.compare(a,b)));
    const qualified=sorted.flatMap(g=>g.slice(0,2).map(r=>r.id));qualified.push(...sorted.map(g=>g[2]).sort((a,b)=>this.compare(a,b)).slice(0,8).map(r=>r.id));
    this.bracket=qualified;this.stage='knockout';
    if(!qualified.includes(this.selected)){this.finished=true;this.reason='GRUPTA ELENDİN';return;}
    this.setOpponent();return;
   }
   if(x===y)throw Error('Knockout requires a winner');
   const winner=x>y?this.selected:this.opponent;this.matches.push({a:this.selected,b:this.opponent,x,y});
   if(this.stage==='third'){this.finished=true;this.reason=winner===this.selected?'DÜNYA ÜÇÜNCÜSÜ!':'DÜNYA DÖRDÜNCÜSÜ';return;}
   const winners=[],losers=[];
   for(let i=0;i<this.bracket.length;i+=2){const a=this.bracket[i],b=this.bracket[i+1];const w=a===this.selected||b===this.selected?winner:(this.random()<.5?a:b);winners.push(w);losers.push(w===a?b:a);}
   if(this.bracket.length===2){this.finished=true;this.champion=winner;this.reason=winner===this.selected?'DÜNYA ŞAMPİYONU!':'DÜNYA İKİNCİSİ';return;}
   if(winner!==this.selected){if(this.bracket.length===4){this.stage='third';this.opponent=losers.find(i=>i!==this.selected);return;}this.finished=true;this.reason='TURNUVAYA VEDA';return;}
   this.bracket=winners;this.setOpponent();
  }
  setOpponent(){const i=this.bracket.indexOf(this.selected);this.opponent=this.bracket[i%2?i-1:i+1];}
 }
 window.ArenaCup=Cup;
})();
