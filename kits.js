// Hand-drawn canvas kits based on the user's references; no shirt photos are loaded.
// Bodies are drawn facing right; the game mirrors the entire rig for left-facing poses.
(() => {
  const kits = [
    {pattern:'barca',shirt:'#153b91',stripe:'#a91e46',trim:'#d8bb59',shorts:'#102243',shortTrim:'#3175bb',socks:'#173d88',collar:'#16244b'},
    {pattern:'royal',shirt:'#f6f5ee',stripe:'#e8e9df',trim:'#173e36',shorts:'#f6f5ee',shortTrim:'#e58cab',socks:'#f6f5ee',collar:'#173e36',shoulder:'#e58cab'},
    {pattern:'city',shirt:'#57a3c5',stripe:'#bce5ed',trim:'#d5e5e9',shorts:'#a8d6e5',shortTrim:'#387f9e',socks:'#f0f4f4',collar:'#32687e'},
    {pattern:'paris',shirt:'#1d3e97',stripe:'#d62a43',trim:'#faf6ed',shorts:'#193782',shortTrim:'#e64156',socks:'#193782',collar:'#192f78'},
    {pattern:'halves',shirt:'#f5a51b',stripe:'#b42132',trim:'#f5e6c8',shorts:'#b42132',shortTrim:'#f5a51b',socks:'#b42132',collar:'#a31f30'},
    {pattern:'stripes',shirt:'#f7d329',stripe:'#152546',trim:'#ffffff',shorts:'#f8f8f2',shortTrim:'#162744',socks:'#f8f8f2',collar:'#ffffff',shoulder:'#ffffff'},
    {pattern:'stripes',shirt:'#f3f3ed',stripe:'#181b21',trim:'#1a1e24',shorts:'#181b21',shortTrim:'#f4f4ed',socks:'#f3f3ed',collar:'#151a20'},
    {pattern:'stripes',shirt:'#b92033',stripe:'#15191e',trim:'#f8f8f0',shorts:'#f3f4ed',shortTrim:'#b92033',socks:'#181b20',collar:'#15191e'},
    {pattern:'pinstripes',shirt:'#c90830',stripe:'#e63245',trim:'#fff0ce',shorts:'#c90830',shortTrim:'#fff0ce',socks:'#c90830',collar:'#fff0ce',shoulder:'#fff0ce'},
    {pattern:'shards',shirt:'#b4213a',stripe:'#ea7784',trim:'#ffffff',shorts:'#b4213a',shortTrim:'#ffffff',socks:'#b4213a',collar:'#eeeeee',shoulder:'#eeeeee'},
    {pattern:'white',shirt:'#242428',stripe:'#242428',trim:'#e6a9bd',shorts:'#242428',shortTrim:'#e6a9bd',socks:'#242428',collar:'#242428',shoulder:'#e6a9bd'},
    {pattern:'white',shirt:'#edce47',stripe:'#edce47',trim:'#24293b',shorts:'#edce47',shortTrim:'#24293b',socks:'#edce47',collar:'#24293b',shoulder:'#24293b'}
  ];
  const keeperColours = [
    ['#099859','#c7ed3b','#ffffff',false], ['#242426','#55555c','#eeeeee',false],
    ['#12a487','#005648','#e2ef41',false], ['#202732','#237385','#ffffff',true],
    ['#a4d65d','#58882e','#131a13',true], ['#8df3a1','#21b882','#142b24',true],
    ['#0d9963','#dbe33c','#ffffff',true], ['#8bf52c','#55c83b','#142016',false],
    ['#6be967','#21a060','#173a22',true], ['#08716b','#76ae9e','#eeeeee',false],
    ['#99e6a4','#35b48c','#142419',true], ['#18191b','#414247','#ffffff',true]
  ];
  const sponsors = ['spotify','emirates','etihad','qatar','pasifik','chobani','beko','emirates','telekom','standard','royal','humain'];
  const brands = ['nike','adidas','puma','nike','puma','adidas','adidas','puma','adidas','adidas','adidas','adidas'];
  const keeperPatterns = ['zigzag','contours','cells','zigzag','cells','contours','zigzag','cells','contours','shards','contours','contours'];
  const keeperKits = keeperColours.map(([shirt,stripe,trim,longSleeves],i) => ({pattern:keeperPatterns[i],shirt,stripe,trim,shorts:shirt,shortTrim:trim,socks:shirt,collar:i===1||i===11?shirt:stripe,longSleeves,sponsor:i===5?'otokoc':sponsors[i],brand:brands[i],keeper:true,hemPattern:[1,5,8,10,11].includes(i)}));
  Object.assign(kits[0], {trim:'#efc13c',collar:'#132751'});
  Object.assign(kits[2], {collar:'#eef3f5',trim:'#ffffff'});
  Object.assign(kits[5], {collar:'#172641',stripeWidth:5,stripeGap:10,shoulder:'#172641'});
  Object.assign(kits[6], {pattern:'besiktas'});
  Object.assign(kits[7], {collar:'#b92033',sleeve:'#15191e'});
  Object.assign(kits[10], {collarType:'polo'});
  window.ARENA_TEAMS.forEach((team,i)=>{
    if(team.kit && team.keeperKit) return;
    if(i>=12){
      const field={
TOP:{pattern:'white',shirt:'#e50929',stripe:'#ffffff',trim:'#ffffff',shorts:'#ffffff',shortTrim:'#d81932',socks:'#e50929',collar:'#c90926',sleeve:'#ffffff',shoulder:'#ffffff',sponsor:'emirates',brand:'adidas'},
LMV:{pattern:'chelsea',shirt:'#064acb',stripe:'#165bcf',trim:'#f5db38',shorts:'#064acb',shortTrim:'#f5db38',socks:'#064acb',collar:'#134399',collarType:'polo',sponsor:'none',brand:'nike'},
MGE:{pattern:'stripes',shirt:'#254dc4',stripe:'#11151c',trim:'#ffc52b',shorts:'#11151c',shortTrim:'#ffc52b',socks:'#11151c',collar:'#11151c',collarType:'polo',sponsor:'betsson',brand:'nike'},
MKR:{pattern:'stripes',shirt:'#df1230',stripe:'#ffffff',trim:'#16336d',shorts:'#16336d',shortTrim:'#ffffff',socks:'#df1230',collar:'#16336d',sponsor:'riyadh',brand:'nike'}};
const keeper={TOP:{pattern:'contours',shirt:'#c8c9c7',stripe:'#f1f0ee',trim:'#202222',collar:'#c8c9c7',hemPattern:true},LMV:{pattern:'zigzag',shirt:'#008c4c',stripe:'#c9ed39',trim:'#ffffff',collar:'#e0e9d9',sponsor:'usdc'},MGE:{pattern:'zigzag',shirt:'#e9d315',stripe:'#e8975b',trim:'#151b26',collar:'#e9d315'},MKR:{pattern:'zigzag',shirt:'#00b68b',stripe:'#c6ee55',trim:'#ffffff',collar:'#008f79'}};
kits[i]=field[team.short];keeperKits[i]={...kits[i],...keeper[team.short],keeper:true,longSleeves:false,collarType:undefined,shoulder:undefined,sleeve:undefined};
Object.assign(keeperKits[i],{shorts:keeperKits[i].shirt,socks:keeperKits[i].shirt,shortTrim:keeperKits[i].trim});
      team.kit=kits[i];team.keeperKit=keeperKits[i];return;
    }
    team.kit = Object.assign(kits[i],{sponsor:sponsors[i],brand:brands[i]});
    team.keeperKit = keeperKits[i];
  });

  const torsoCache = new WeakMap(), patternCache = new WeakMap();
  function draw(c,p,pose) {
    const s=p.star,k=(!p.isKeeper && s.kit) || p.team.kit,{swing,run,facing}=pose;
    const reaction=pose.keeperSave?'win':pose.reaction;
    const celebrating = reaction === 'win' && pose.celebrationStyle !== undefined;
    const wave = Math.sin((pose.celebrationTime || 0) * 9) * 7;
    const elbowY = celebrating && pose.celebrationStyle === 1 ? -61 : -81;
    const handY = celebrating && pose.celebrationStyle === 1 ? -64 : -102 + (celebrating ? wave : 0);
    const path=(points,fill)=>{c.beginPath();points(c);c.fillStyle=fill;c.fill();};
    const line=(x,y,x2,y2,color,width=1)=>{c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.stroke();};
    const round=(x,y,w,h,r,color)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=color;c.fill();};
    const text=(value,x,y,size,color,maxWidth=36)=>{c.save();c.translate(x,y);c.scale(facing,1);c.font=`900 ${size}px Arial`;c.textAlign='center';c.fillStyle=color;c.fillText(value,0,0,maxWidth);c.restore();};
    if(k.coachSuit){
      // A suit on the same articulated player body: identical foot swing and stance.
      const arm=swing*9+run*12;
      line(-17,-59,-24-arm,-40,k.shirt,9);line(-25-arm,-41,-24-arm,-38,'#f1f3f8',5);line(-24-arm,-38,-25-arm,-34,s.skin,7);
      for(const front of [false,true]){
        c.save();c.translate(front?8:-7,-32);c.rotate(front?-swing+run:-run*.85);
        path(q=>{q.moveTo(-9,-1);q.quadraticCurveTo(1,-5,9,0);q.lineTo(8,28);q.lineTo(-5,28);q.closePath();},k.shorts);
        line(5,2,5,26,'#536073',.8);round(-5,28,23,7,3,'#10151e');line(-3,35,16,35,'#637186',.8);c.restore();
      }
      shirtPath();c.fillStyle=k.shirt;c.fill();
      path(q=>{q.moveTo(-9,-67);q.lineTo(10,-67);q.lineTo(1,-43);q.closePath();},'#f1f3f8');
      path(q=>{q.moveTo(-2,-63);q.lineTo(3,-63);q.lineTo(4,-59);q.lineTo(1,-56);q.lineTo(-3,-59);q.closePath();},p.team.color);
      path(q=>{q.moveTo(1,-56);q.lineTo(4,-47);q.lineTo(1,-42);q.lineTo(-2,-47);q.closePath();},p.team.color);
      for(const side of [-1,1])path(q=>{q.moveTo(side*16,-62);q.lineTo(side*8,-67);q.lineTo(side*5,-56);q.lineTo(side*9,-53);q.lineTo(1,-42);q.closePath();},k.trim);
      line(1,-42,1,-29,'#101822',.8);round(0,-37,2,2,1,'#b2a789');round(0,-31,2,2,1,'#b2a789');line(-14,-33,-6,-33,'#536073',1);
      const crest=p.team.crestImage;if(crest?.complete&&crest.naturalWidth){c.save();c.scale(facing,1);c.drawImage(crest,8,-56,9,10);c.restore();}
      line(20,-58,26+arm,-40,k.shirt,9);line(26+arm,-41,26+arm,-38,'#f1f3f8',5);line(26+arm,-38,27+arm,-34,s.skin,7);
      return;
    }
    if(p.motorcycle){
      // Rear-wheel pivot lifts the front; wheel phase and exhaust follow travel distance.
      if(Math.abs(p.vx)>1){c.save();const smokeAlpha=c.globalAlpha;for(let n=0;n<5;n++){const progress=(p.walk*.13+n/5)%1;c.globalAlpha=smokeAlpha*.32*(1-progress);c.beginPath();c.arc(-49-progress*44,4-progress*16,4+progress*11,0,Math.PI*2);c.fillStyle='#aebdc8';c.fill();}c.restore();}
      for(const x of [-34,39]){c.beginPath();c.arc(x,20,16,0,Math.PI*2);c.fillStyle='#10151c';c.fill();c.strokeStyle='#85919c';c.lineWidth=3;c.stroke();c.beginPath();c.arc(x,20,10,0,Math.PI*2);c.strokeStyle='#28e3df';c.lineWidth=2;c.stroke();for(let n=0;n<3;n++){const a=p.walk+n*Math.PI*2/3;line(x,20,x+Math.cos(a)*10,20+Math.sin(a)*10,'#d2e5eb',2);}round(x+Math.cos(p.walk)*12-2,20+Math.sin(p.walk)*12-2,4,4,2,'#c7ff43');}
      line(-34,20,-12,-9,'#28e3df',5);line(-12,-9,19,14,'#28e3df',5);line(19,14,-34,20,'#4f6677',4);line(27,-26,39,20,'#b6c5ce',5);
      path(q=>{q.moveTo(-21,-12);q.lineTo(-9,-27);q.lineTo(19,-24);q.lineTo(30,-5);q.lineTo(5,7);q.lineTo(-22,4);q.closePath();},'#142b3a');
      line(-15,-17,21,-10,'#c7ff43',3);round(-22,-28,28,7,3,'#10151c');line(27,-26,23,-39,'#85919c',3);line(19,-40,32,-40,'#10151c',4);round(31,-24,9,7,3,'#f3f7b8');line(-29,5,-48,4,'#85919c',4);
    }
    function glove(x,y,angle=0) {
      c.save();c.translate(x,y);c.rotate(angle);
      round(-4,-4,8,10,2.5,'#f2f5ed');
      round(-5,-5,10,3,1,'#243444');
      round(3,-1,3,5,1.5,'#dbe5de');
      line(-2,-1,-2,3,'#789891',.65);line(.5,-1,.5,3,'#789891',.65);
      line(-2,4,2,4,'#39b5b0',1.2);c.restore();
    }
    function shirtPath(){c.beginPath();c.moveTo(-9,-69);c.quadraticCurveTo(-18,-67,-23,-60);c.lineTo(-18,-48);c.quadraticCurveTo(-19,-39,-17,-29);c.quadraticCurveTo(1,-25,21,-30);c.lineTo(20,-50);c.quadraticCurveTo(29,-59,20,-64);c.lineTo(10,-69);c.quadraticCurveTo(1,-62,-9,-69);c.closePath();}
    function drawSponsor() {
      if(k.casual||k.sponsor==='none')return;
      c.save(); c.translate(2,-44); c.scale(facing,1);
      const ink=k.sponsorInk || (k.pattern==='besiktas'?'#ffffff':k.trim);
      if(k.sponsorPanel)round(-18,-5,36,11,0,k.sponsorPanel);
      const label=(value,y,size,width=34)=>{c.fillStyle=ink;c.font=`800 ${size}px Arial`;c.textAlign='center';c.fillText(value,0,y,width);};
      if(k.sponsor==='pamesa'){label('PAMESA',0,7);label('ceramica',6,5);}
      else if(k.sponsor==='tm-estate'){round(-17,-6,34,12,0,ink);c.fillStyle=k.shirt;c.font='900 7px Arial';c.textAlign='center';c.fillText('TM',-7,2,14);c.beginPath();c.arc(9,-1,4,0,Math.PI*2);c.fill();label('TM Real Estate Group',11,2.8,38);}
      else if(k.sponsor==='fundacion1890'){label('FUNDACION',0,5.8);label('1890',7,6);}
      else if(k.sponsor==='baghdad'){label('Baghdad',0,6.3);label('Capital',7,5.8);}
      else if(k.sponsor==='gree'){label('GREE',3,8);}
      else if(k.sponsor==='arctempus'){label('ARCTEMPUS',2,5.7);}
      else if(k.sponsor==='estrella-galicia'){c.beginPath();c.ellipse(0,0,18,10,0,0,Math.PI*2);c.fillStyle='#111114';c.fill();const oldInk=ink;c.fillStyle='#ffffff';c.font='bold 6px Georgia';c.textAlign='center';c.fillText('Estrella',0,-1,30);c.fillText('Galicia',0,5,30);round(-2,-12,4,4,2,'#e32735');}
      else if(k.sponsor==='tecnocasa'){label('TECNOCASA',1,5.6);label('GROUP',7,3);path(q=>{q.moveTo(-19,-2);q.lineTo(-15,-6);q.lineTo(-11,-2);q.lineTo(-13,0);q.lineTo(-15,-2);q.lineTo(-17,0);q.closePath();},ink);}
      else if(k.sponsor==='kosner'){label('kosner',2,8);label('Climatizacion eficiente',7,2.7,37);}
      else if(k.sponsor==='kutxabank'){label('Kutxabank',3,6.2);}
      else if(k.sponsor==='spotify') {
        c.beginPath();c.arc(0,0,6.7,0,Math.PI*2);c.fillStyle=ink;c.fill();
        for(let i=0;i<3;i++){c.beginPath();c.moveTo(-4+i*.4,-2+i*2);c.quadraticCurveTo(0,-4+i*2,4-i*.4,-1+i*2);c.strokeStyle=k.shirt;c.lineWidth=1;c.stroke();}
      } else if(k.sponsor==='emirates'){label('Emirates',0,6.4);label('FLY BETTER',5,3.1);}
      else if(k.sponsor==='etihad'){label('ETIHAD',0,6.1);label('AIRWAYS',5,3.1);}
      else if(k.sponsor==='qatar'){label('QATAR',0,6.4);label('AIRWAYS',5,3.5);}
      else if(k.sponsor==='pasifik'){label('PASIFIK',0,5);label('HOLDING',5,4);}
      else if(k.sponsor==='chobani'){round(-18,-5,36,10,0,'#f5f3e9');c.fillStyle='#172641';c.font='900 6.2px Georgia';c.textAlign='center';c.fillText('Chobani',0,2,34);}
      else if(k.sponsor==='beko'){label('beko',2,8);line(-10,5,10,3,ink,1.1);}
      else if(k.sponsor==='telekom'){label('T',5,18);for(const x of [-12,12])round(x-1,-1,2,2,0,ink);}
      else if(k.sponsor==='standard'){label('standard',0,4.8);label('chartered',5,4.8);line(-16,-4,-12,-1,ink,1);line(-12,-1,-16,2,ink,1);}
      else if(k.sponsor==='royal') {
        path(q=>{q.moveTo(-8,-5);q.lineTo(-7,5);q.lineTo(7,5);q.lineTo(8,-5);q.lineTo(4,-1);q.lineTo(0,-7);q.lineTo(-4,-1);q.closePath();},ink);
        line(-8,0,8,0,k.shirt,1.3);line(0,2,0,10,ink,1.7);line(-7,6,0,10,ink,1.7);line(0,10,7,6,ink,1.7);
      } else if(k.sponsor==='otokoc'){label('Otokoc',3,7.5);}
      else if(k.sponsor==='humain'){label('HUMAIN',2,6);}
      else if(k.sponsor==='betsson'){label('betsson',0,6);label('.sport',5,3.8);}
      else if(k.sponsor==='usdc'){label('USDC',0,7);label('BY CIRCLE',5,2.7);}
      else if(k.sponsor==='riyadh'){label('R',-5,11);if(!k.keeper)round(-19,-2,38,9,0,'#16336d');c.fillStyle='#ffffff';c.font='800 4.8px Arial';c.textAlign='center';c.fillText('RIYADH AIR',0,4,36);}
      else if(k.sponsor==='ifs'){label('IFS',2,8);}
      else if(k.sponsor==='papara'){label('papara',3,8);}
      else if(k.sponsor==='sixt'){label('SIXT',2,9);label('rent a car',7,2.5);}
      else if(k.sponsor&&k.sponsor!=='none'){const words=k.sponsor.split(' ');if(words.length>1){label(words[0],0,5.7);label(words.slice(1).join(' '),5,3.8);}else label(k.sponsor,3,7);}
      if(k.sideSponsor)for(const x of [-15,17]){c.save();c.translate(x,-1);c.rotate(-Math.PI/2);c.fillStyle=ink;c.font='700 3px Arial';c.textAlign='center';c.fillText(k.sideSponsor,0,0,24);c.restore();}
      c.restore();
      c.save();c.translate(-11,-58);c.scale(facing,1);
      if(k.brand==='adidas')for(let i=0;i<3;i++)line(-3+i*2,0,-4+i*2,-2-i,k.trim,1.5);
      if(k.brand==='nike')path(q=>{q.moveTo(-4,-1);q.quadraticCurveTo(-5,4,4,-2);q.quadraticCurveTo(-1,0,-4,-1);},k.brandInk || k.trim);
      if(k.brand==='puma'){line(-3,0,1,-1,k.trim,1.3);line(1,-1,4,-3,k.trim,1);line(-3,0,-5,-2,k.trim,.8);line(0,-1,2,1,k.trim,.8);}
      if(k.brand==='kelme'){for(const [x,y,r] of [[0,0,1.6],[-3,-3,1],[0,-4,1],[3,-3,1]]){c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fillStyle=k.trim;c.fill();}}
      if(k.brand==='joma'){c.fillStyle=k.brandInk||k.trim;c.font='italic 900 8px Arial';c.fillText('J',0,2);}
      if(k.brand==='diadora'){c.fillStyle=k.trim;c.font='700 3.8px Arial';c.textAlign='center';c.fillText('diadora',0,1,14);path(q=>{q.moveTo(0,-4);q.lineTo(4,-4);q.lineTo(5,-2);q.lineTo(2,-3);q.closePath();},k.trim);}
      if(k.brand==='umbro'){for(const r of [3.5,2]){c.beginPath();c.moveTo(-r,0);c.lineTo(0,-r*.55);c.lineTo(r,0);c.lineTo(0,r*.55);c.closePath();c.strokeStyle=k.trim;c.lineWidth=.7;c.stroke();}}
      if(k.brand==='hummel'){for(let i=0;i<2;i++){line(-3+i*3,-2,-1+i*3,0,k.trim,.8);line(-1+i*3,0,1+i*3,-2,k.trim,.8);}}
      if(['newbalance','castore','oneills','craft','reebok','jako','macron','ea7','mizuno','kappa'].includes(k.brand)){c.fillStyle=k.trim;c.font='900 4px Arial';c.textAlign='center';c.fillText({newbalance:'NB',castore:'CASTORE',oneills:'oneills',craft:'CRAFT',reebok:'Reebok',jako:'JAKO',macron:'macron',ea7:'EA7',mizuno:'M',kappa:'Kappa'}[k.brand],0,1,10);}
      c.restore();
    }
    function paintKeeperPattern() {
      c.save();c.globalAlpha*=k.pattern==='zigzag'?.7:.42;
      const top=k.hemPattern?-38:-75;
      if(k.pattern==='gs-keeper')for(let row=0;row<6;row++)for(let col=0;col<4;col++){
        const x=-35+col*20+(row%2?9:0),y=-82+row*11;
        path(q=>{q.moveTo(x,y+9);q.lineTo(x+17,y);q.lineTo(x+25,y+2);q.lineTo(x+8,y+14);q.closePath();},(row+col)%3?k.stripe:'#004f48');
      }
      if(k.pattern==='stone')for(let y=-76;y<-25;y+=10)for(let x=-28;x<29;x+=11){const d=((x+y)%5)*.6;c.beginPath();c.moveTo(x,y);c.lineTo(x+8,y-2+d);c.lineTo(x+11,y+6);c.lineTo(x+3,y+10);c.closePath();c.strokeStyle=k.stripe;c.lineWidth=1.8;c.stroke();}
      if(k.pattern==='floral')for(let y=-74;y<-26;y+=10)for(let x=-26;x<28;x+=10){for(let petal=0;petal<4;petal++){const a=petal*Math.PI/2;c.beginPath();c.ellipse(x+Math.cos(a)*2,y+Math.sin(a)*2,3,1.4,a,0,Math.PI*2);c.strokeStyle=k.stripe;c.lineWidth=.8;c.stroke();}}
      if(k.pattern==='triangles')for(let y=-72;y<-28;y+=5)for(let x=-26;x<29;x+=6){c.beginPath();c.moveTo(x,y);c.lineTo(x+3,y-4);c.lineTo(x+6,y);c.closePath();c.strokeStyle=k.stripe;c.lineWidth=.5;c.stroke();}
      if(k.pattern==='brush')for(let n=0;n<90;n++){const x=-28+(n*17)%55,y=-74+(n*13)%47;line(x,y,x+4+n%9,y-1,k.stripe,.5);}
      if(k.pattern==='chevrons'){for(let i=0;i<4;i++){c.beginPath();c.moveTo(-27,-78+i*4);c.lineTo(2,-58+i*4);c.lineTo(29,-78+i*4);c.strokeStyle=k.stripe;c.lineWidth=1;c.stroke();}for(let i=0;i<3;i++)line(-27,-38+i*5,29,-38+i*5,k.stripe,.7);}
      if(k.pattern==='mosaic')for(let n=0;n<24;n++){const x=-29+(n*19)%53,y=-78+(n*11)%47;path(q=>{q.moveTo(x,y);q.lineTo(x+12,y-5);q.lineTo(x+7,y+8);q.lineTo(x+1,y+13);q.closePath();},[k.stripe,k.mosaicAccent||'#a0c956','#10171e'][n%3]);}
      if(k.pattern==='zigzag')for(let y=-78;y<-24;y+=5)for(let x=-30;x<33;x+=6){const yy=y+Math.sin(x*.1)*4;line(x,yy,x+3,yy+2,k.stripe,1);line(x+3,yy+2,x+6,yy-1,k.stripe,1);}
      if(k.pattern==='streamer-symbols')for(let row=0;row<5;row++)for(let col=0;col<6;col++){
        const x=-25+col*10+(row%2?3:0),y=-74+row*11;
        c.strokeStyle=k.stripe;c.fillStyle=k.stripe;c.lineWidth=.7;
        if((row+col)%3===0){c.beginPath();c.moveTo(x-1.5,y-2);c.lineTo(x+2,y);c.lineTo(x-1.5,y+2);c.closePath();c.fill();}
        else if((row+col)%3===1){c.beginPath();c.arc(x,y,1.5,0,Math.PI*2);c.stroke();}
        else {line(x-2,y,x+2,y,k.stripe,.7);line(x,y-2,x,y+2,k.stripe,.7);}
      }
      if(k.pattern==='cells')for(let y=-80;y<-22;y+=9)for(let x=-30;x<33;x+=10){const xx=x+((Math.round(y/9)%2)*5);c.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3;const px=xx+5*Math.cos(a),py=y+5*Math.sin(a);i?c.lineTo(px,py):c.moveTo(px,py);}c.closePath();c.strokeStyle=k.stripe;c.lineWidth=1;c.stroke();}
      if(k.pattern==='contours')for(let n=0;n<9;n++){c.beginPath();c.moveTo(-28,top+n*2);c.lineTo(-12+n,top-3+n*2);c.lineTo(4+n,top+5+n*2);c.lineTo(28,top+n*2);c.strokeStyle=k.stripe;c.lineWidth=.7;c.stroke();}
      if(k.secondaryPatternInk)for(let n=0;n<6;n++)line(-27+n*9,-73,19-n*6,-26,k.secondaryPatternInk,.6);
      if(k.pattern==='marble')for(let n=0;n<14;n++){c.beginPath();c.moveTo(-30,-73+n*4);c.bezierCurveTo(15,-86+n*3,-20,-45+n*2,30,-65+n*4);c.strokeStyle=k.stripe;c.lineWidth=2;c.stroke();}
      if(k.pattern==='slashes')for(let x=-45;x<35;x+=9)line(x,-25,x+35,-78,k.stripe,4);
      c.restore();
    }
    function keeperPattern() {
      let tile = patternCache.get(k);
      if (!tile) {
        tile = document.createElement('canvas'); tile.width=144; tile.height=112;
        const target=c; c=tile.getContext('2d'); c.scale(2,2); c.translate(36,78);
        paintKeeperPattern(); c=target; patternCache.set(k,tile);
      }
      c.drawImage(tile,-36,-78,72,56);
    }
    function limb(front) {
      if(p.motorcycle){
        line(front?8:-7,-29,front?19:3,-9,s.skin,10);line(front?19:3,-9,front?10:-5,8,k.socks,9);
        round(front?0:-14,7,22,7,3,'#233545');line(front?8:-7,-29,front?14:0,-18,k.shorts,15);return;
      }
      c.save();c.translate(front?8:-7,-32);
      c.rotate(front?-swing+run:-run*.85);
      if(!front)c.globalAlpha*=.82;
      if(k.casual){
        // Full-length denim legs and trainers, without football socks or studs.
        path(q=>{q.moveTo(-8,-1);q.quadraticCurveTo(0,-4,8,0);q.lineTo(9,28);q.lineTo(-4,28);q.lineTo(-7,10);q.closePath();},k.shorts);
        line(6,2,7,26,'#7893ab',.8);line(-3,26,7,26,'#b3c3cf',1.5);
        round(-5,28,21,7,3,front?'#ecece5':'#b6c0c5');
        line(-4,34,15,34,'#ffffff',2);line(3,29,9,30,'#71808b',1);c.restore();return;
      }
      // Thigh, curved short leg, knee and sock form one articulated limb.
      line(0,7,2,23,s.skin,10);
      path(q=>{q.moveTo(-9,-1);q.quadraticCurveTo(1,-5,9,0);q.lineTo(10,13);q.quadraticCurveTo(2,17,-8,13);q.closePath();},k.shorts);
      line(7,2,8,12,k.shortTrim,1.8);
      line(-6,13,7,14,'#111a282a',.8);
      const fabric=c.createLinearGradient(-9,0,10,0);fabric.addColorStop(0,'#00000024');fabric.addColorStop(.55,'#ffffff17');fabric.addColorStop(1,'#00000010');round(-7,0,15,12,2,fabric);
      if(front&&!k.casual&&!k.senAppearance){text(String(s.number),0,10,7,k.shortTrim);}
      line(2,21,3,29,k.socks,10);line(-2,20,6,20,k.shortTrim,1.4);
      path(q=>{q.moveTo(-3,27);q.quadraticCurveTo(3,25,8,28);q.quadraticCurveTo(18,29,19,33);q.quadraticCurveTo(16,36,-4,35);q.quadraticCurveTo(-7,31,-3,27);},k.bootColor||(front?'#eff2e6':'#233545'));
      line(-3,35,16,35,'#101a25',1.5);for(let x=1;x<10;x+=3)line(x,29,x+3,31,front?'#3c5260':'#dce8e8',.8);
      line(0,36,0,37,'#dce4e6',1.4);line(12,36,12,37,'#dce4e6',1.4);c.restore();
    }
    const arm=swing*9+run*12;
    // Far shoulder and arm are behind the shirt; near arm is painted last.
    const armColour = k.longSleeves ? k.shirt : s.skin;
    if (!reaction) line(-17,-59,-24-arm,-40,armColour,8);
    else { line(-19,-59,-32,reaction==='win'?elbowY:-68,armColour,8); line(-32,reaction==='win'?-81:-68,-27,reaction==='win'?handY:-89,armColour,8); }
    if(p.isKeeper)glove(reaction?-27:-24-arm,reaction?(reaction==='win'?handY-2:-91):-39,reaction?Math.PI:0);
    line(-18,-61,-22-arm*.3,-52,k.farSleeve || (k.pattern==='halves'?k.stripe:k.shirt),13);
    line(-26-arm*.3,-49,-19-arm*.3,-47,k.collar,2);
    limb(false);limb(true);
    function paintTorso() {
    shirtPath();c.fillStyle=k.shirt;c.fill();
    c.save();shirtPath();c.clip();
    if(k.pattern==='chelsea'){for(let n=0;n<5;n++){c.beginPath();c.ellipse(2,-48,10+n*3,12+n*3,0,0,Math.PI*2);c.strokeStyle=k.stripe;c.lineWidth=.7;c.stroke();}}
    if(k.pattern==='thebig26'){
      path(q=>{q.moveTo(-29,-78);q.lineTo(-18,-78);q.lineTo(33,-27);q.lineTo(22,-27);q.closePath();},k.stripe);
      path(q=>{q.moveTo(-29,-68);q.lineTo(-26,-68);q.lineTo(18,-24);q.lineTo(15,-24);q.closePath();},k.trim);
      c.save();c.globalAlpha*=.2;for(let x=-26;x<28;x+=7)line(x,-73,x+15,-28,k.stripe,.6);c.restore();
    }
    if(k.pattern==='basketlabb'){
      // Basketball side panels and court lines on an animated football shirt.
      for(const x of [-25,21]){c.fillStyle=k.stripe;c.fillRect(x,-76,7,53);line(x+2,-74,x+2,-27,'#ffffff',.7);}
      c.save();c.globalAlpha*=.16;
      c.beginPath();c.arc(1,-46,17,0,Math.PI*2);c.strokeStyle=k.stripe;c.lineWidth=.8;c.stroke();
      line(-16,-46,18,-46,k.stripe,.8);line(1,-63,1,-29,k.stripe,.8);c.restore();
    }
    if(k.pattern==='checks')for(let y=-73;y<-24;y+=12)for(let x=-24;x<30;x+=12)if((Math.round((x+24)/12)+Math.round((y+73)/12))%2===0){c.fillStyle=k.stripe;c.fillRect(x,y,12,12);}
    if(k.pattern==='hoops'||k.pattern==='thin-hoops')for(let y=-68;y<-24;y+=k.pattern==='thin-hoops'?8:15){c.fillStyle=k.stripe;c.fillRect(-26,y,55,k.pattern==='thin-hoops'?1.4:7);}
    if(k.pattern==='diagonal-knit')for(let x=-80;x<50;x+=4)line(x,-25,x+55,-80,k.stripe,.8);
    if(k.pattern==='bfk-sweeps')for(let y=-77;y<-22;y+=7){path(q=>{q.moveTo(-30,y);q.lineTo(29,y+13);q.lineTo(12,y+12);q.lineTo(-9,y+5);q.lineTo(4,y+10);q.lineTo(-30,y+3);q.closePath();},k.stripe);}
    if(k.pattern==='pinstripes')for(let x=-20;x<25;x+=8)line(x,-73,x,-27,k.stripe+'66',.7);
    if(k.pattern==='chevron'){line(-27,-68,2,-49,k.stripe,7);line(2,-49,28,-68,k.stripe,7);line(-27,-59,2,-40,'#bc293b',3);line(2,-40,28,-59,'#bc293b',3);}
    if(k.pattern==='chest-band'||k.chestBand){c.fillStyle=k.chestBand||k.stripe;c.fillRect(-26,-61,56,14);}
    if(k.pattern==='stripes')for(let x=-24;x<30;x+=k.stripeGap||19){c.fillStyle=k.stripe;c.fillRect(x,-73,k.stripeWidth||9,49);}
    if(k.pattern==='halves'){c.fillStyle=k.stripe;c.fillRect(2,-74,30,50);}
    if(k.pattern==='quarters'){c.fillStyle=k.stripe;c.fillRect(-26,-74,28,26);c.fillRect(2,-48,30,25);line(1,-73,1,-28,k.shirt,1);line(-24,-48,25,-48,k.shirt,1);}
    if(k.pattern==='shattered-stripes'||k.pattern==='rough-stripes'){
      for(let x=-24;x<30;x+=14){c.fillStyle=k.stripe;c.fillRect(x,-73,6,49);for(let y=-72;y<-28;y+=8)path(q=>{q.moveTo(x,y);q.lineTo(x+10,y+3);q.lineTo(x+5,y+8);q.closePath();},k.stripe);}
    }
    if(k.pattern==='besiktas') {
      c.fillStyle='#17191c';c.fillRect(-15,-74,31,26);
      for(let x=-14;x<19;x+=5){line(x,-73,x,-48,'#ffffff',.65);line(x,-48,x,-27,'#17191c',2);}
      c.fillStyle='#17191c';c.fillRect(-13,-49,29,12);
    }
    if(k.keeper) keeperPattern();
    if(!k.keeper&&['contours','floral','triangles'].includes(k.pattern))paintKeeperPattern();
    if(k.pattern==='lettering'){c.save();c.globalAlpha*=.3;c.fillStyle=k.stripe;c.font='700 4px Arial';c.textAlign='center';for(let y=-71;y<-27;y+=7)for(let x=-21;x<28;x+=17)c.fillText(['GANTOISE','KAA','BUFFALO'][Math.abs(Math.round(y+x))%3],x,y,16);c.restore();}
    if(k.sidePanel){path(q=>{q.moveTo(-25,-73);q.quadraticCurveTo(-12,-48,-21,-26);q.lineTo(-26,-26);q.closePath();},k.sidePanel);path(q=>{q.moveTo(29,-73);q.quadraticCurveTo(14,-48,23,-26);q.lineTo(30,-26);q.closePath();},k.sidePanel);}
    if(k.pattern==='shards')for(let y=-71;y<-27;y+=9)for(let x=-22;x<26;x+=11){const offset=(Math.round(y)%3)*2;path(q=>{q.moveTo(x,y);q.lineTo(x+3,y+5);q.lineTo(x+5+offset,y+1);q.closePath();},k.stripe+'88');}
    if(k.pattern==='barca') {
      for(let i=0;i<6;i++){c.fillStyle=i%2?'#a7193e':'#193986';c.fillRect(-24+i*9,-73,9,50);}
    }
    if(k.pattern==='city'){const g=c.createLinearGradient(0,-71,0,-28);g.addColorStop(0,'#397f9f');g.addColorStop(.45,'#76bad3');g.addColorStop(1,'#c5e6ed');c.fillStyle=g;c.fillRect(-25,-74,55,50);}
    if(k.pattern==='paris'){const width=k.centerStripeWidth||15;c.fillStyle=k.trim;c.fillRect(3-width/2-2,-74,width+4,50);c.fillStyle=k.stripe;c.fillRect(3-width/2,-74,width,50);}
    if(k.pattern==='royal')for(let y=-65;y<-27;y+=9)for(let x=-18;x<22;x+=10){line(x,y,x+5,y+3,'#b9c6b72b',.5);line(x+5,y+3,x+9,y-1,'#b9c6b72b',.5);}
    const shade=c.createLinearGradient(-22,0,24,0);shade.addColorStop(0,'#07142533');shade.addColorStop(.28,'#00000000');shade.addColorStop(.7,'#ffffff10');shade.addColorStop(1,'#00000020');c.fillStyle=shade;c.fillRect(-25,-75,55,52);
    for(let y=-58;y<-29;y+=3)line(-15,y,20,y-3,'#ffffff0c',.5);
    line(-14,-47,-12,-33,'#00000020',1);line(13,-44,16,-33,'#ffffff28',1);c.restore();
    // Shirt hem, collar ribbing and stitched neckline.
    if(k.chestYoke)path(q=>{q.moveTo(-17,-67);q.lineTo(-10,-73);q.lineTo(10,-73);q.lineTo(22,-65);q.lineTo(17,-58);q.lineTo(3,-64);q.lineTo(-15,-58);q.closePath();},k.chestYoke);
    line(-16,-29,20,-30,'#00000035',1.2);
    path(q=>{q.moveTo(-10,-69);q.quadraticCurveTo(0,-60,10,-69);q.lineTo(12,-66);q.quadraticCurveTo(0,-54,-12,-66);q.closePath();},k.collar);
    line(-8,-66,0,-61,k.trim,1);line(0,-61,8,-66,k.trim,1);
    if(k.collarAccent){line(-11,-69,-8,-62,k.collarAccent,2.5);line(11,-69,8,-62,k.collarAccent,2.5);}
    if(k.collarType==='v'){path(q=>{q.moveTo(-11,-69);q.lineTo(0,-55);q.lineTo(11,-69);q.lineTo(8,-69);q.lineTo(0,-59);q.lineTo(-8,-69);q.closePath();},k.collar);}
    if(k.collarType==='polo'){path(q=>{q.moveTo(-10,-69);q.lineTo(-2,-65);q.lineTo(-7,-60);q.closePath();},'#303034');path(q=>{q.moveTo(10,-69);q.lineTo(2,-65);q.lineTo(7,-60);q.closePath();},'#303034');}
    if(k.shoulder)for(let i=0;i<3;i++)line(12+i*3,-67,22+i*2,-59,k.shoulder,1.2);
    const emblemX=k.crestCenter?3:k.pattern==='paris'?3:12;
    const crest=p.team.crestImage;
    if(crest?.complete && crest.naturalWidth){c.save();c.translate(emblemX,k.crestSize?-49:-55);c.scale(pose.facing*(p.team.crestScale||1),p.team.crestScale||1);if(k.crestSize)c.drawImage(crest,-k.crestSize/2,-k.crestSize/2,k.crestSize,k.crestSize);else c.drawImage(crest,-5,-6,10,12);c.restore();}
    if(k.crestStars){c.fillStyle=k.crestStarInk||'#c7a655';c.font='5px Arial';c.textAlign='center';c.fillText('★'.repeat(k.crestStars),emblemX,-64,16);}
    if(k.turkishBadge){
      c.save();c.translate(0,-54);c.scale(facing,1);c.beginPath();c.arc(0,0,4,0,Math.PI*2);c.fillStyle='#d51f35';c.fill();c.strokeStyle='#ffffff';c.lineWidth=.6;c.stroke();
      c.beginPath();c.arc(-.5,0,2.3,0,Math.PI*2);c.fillStyle='#ffffff';c.fill();c.beginPath();c.arc(.25,-.25,1.85,0,Math.PI*2);c.fillStyle='#d51f35';c.fill();c.fillStyle='#ffffff';c.font='3px Arial';c.textAlign='center';c.fillText('★',1.8,1);c.restore();
    }
    drawSponsor();
    }
    let variants=torsoCache.get(k);
    if(!variants){variants=new Map();torsoCache.set(k,variants);}
    const badgeReady=!!(p.team.crestImage?.complete && p.team.crestImage.naturalWidth);
    const cacheKey=facing+':'+badgeReady;
    let torso=variants.get(cacheKey);
    if(!torso){
      torso=document.createElement('canvas');torso.width=128;torso.height=108;
      const target=c;c=torso.getContext('2d');c.scale(2,2);c.translate(32,77);
      paintTorso();c=target;variants.set(cacheKey,torso);
    }
    c.drawImage(torso,-32,-77,64,54);
    const nearSleeve=k.sleeve || (k.pattern==='halves'?k.shirt:k.shirt);
    if (pose.keeperThrow) { line(21,-57,34,-45,armColour,8);line(34,-45,48,-48,armColour,7);glove(49,-48,-Math.PI/2); }
    else if (!reaction) line(21,-57,27+arm*.4,-39,armColour,8);
    path(q=>{q.moveTo(17,-65);q.quadraticCurveTo(24,-67,29,-58);q.lineTo(31+arm*.2,-51);q.quadraticCurveTo(24,-46,18,-52);q.closePath();},nearSleeve);
    if(k.keeper){c.save();c.clip();keeperPattern();c.restore();}
    line(21,-51,29+arm*.2,-53,k.sleeveTrim||k.collar,2);
    line(23,-61,27,-55,'#ffffff33',1);
    if(k.sleeveSponsor){c.save();c.translate(25+arm*.2,-56);c.scale(facing,1);c.fillStyle=k.trim;c.font='700 2px Arial';c.textAlign='center';k.sleeveSponsor.split(' ').forEach((word,i)=>c.fillText(word,0,i*2.2,10));c.restore();}
    if(k.shoulder)for(let i=0;i<3;i++)line(19+i*2,-63,24+i*2,-57,k.shoulder,1);
    if (!reaction && !pose.keeperThrow) { if(p.isKeeper)glove(27+arm*.4,-38);else round(24+arm*.4,-40,7,7,3,s.skin); }
    else if(reaction) { line(23,-57,36,reaction==='win'?elbowY+2:-69,armColour,8); line(36,reaction==='win'?-79:-69,30,reaction==='win'?handY-1:-89,armColour,8); if(p.isKeeper)glove(30,reaction==='win'?-104:-91,Math.PI);else round(26,reaction==='win'?handY-6:-93,8,9,3,s.skin); }
    if(k.pattern==='sleeve-zigzag'&&!reaction&&!pose.keeperThrow)for(let y=-57;y<-41;y+=5){line(23+arm*.3,y,29+arm*.3,y-3,k.stripe,2.5);line(-25-arm,y,-19-arm,y-3,k.stripe,2.5);}
  }
  window.ArenaKitRenderer={draw,kits,keeperKits};
})();
