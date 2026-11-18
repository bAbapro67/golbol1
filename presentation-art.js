(() => {
 'use strict';
 // Rendered into the existing stadium cache once per venue, never every frame.
 function stadium(c,{day}){
  c.save();
  const shade=c.createLinearGradient(0,270,0,454);shade.addColorStop(0,'#02091688');shade.addColorStop(.35,'#02091600');shade.addColorStop(1,'#02091666');c.fillStyle=shade;c.fillRect(0,273,1200,181);
  c.fillStyle='#84eaff';c.fillRect(0,258,1200,2);c.fillStyle='#ebfaff';for(let x=0;x<1200;x+=24)c.fillRect(x,257,7,3);
  c.fillStyle=day?'#f5ffe811':'#9afbdc10';for(let i=0;i<12;i++){c.beginPath();c.moveTo(i*100+25,495);c.lineTo(i*100+75,495);c.lineTo(i*100+20,655);c.lineTo(i*100-30,655);c.closePath();if(i%2)c.fill();}
  c.strokeStyle='#ceefbb26';c.lineWidth=.6;for(let i=0;i<1200;i++){const x=(i*73.71)%1200,y=500+(i*31.73)%155;c.beginPath();c.moveTo(x,y);c.lineTo(x+.7,y-1.8);c.stroke();}
  c.strokeStyle='#edffed95';c.lineWidth=1;c.beginPath();c.ellipse(600,558,137,44,0,0,Math.PI*2);c.stroke();c.beginPath();c.moveTo(600,498);c.lineTo(600,627);c.moveTo(24,627);c.lineTo(1176,627);c.stroke();
  const lip=c.createLinearGradient(0,645,0,660);lip.addColorStop(0,'#071e1a00');lip.addColorStop(.4,'#092b20');lip.addColorStop(1,'#041710');c.fillStyle=lip;c.fillRect(0,645,1200,15);c.fillStyle='#9ad78435';c.fillRect(0,645,1200,1);
  c.restore();
 }
 window.ArenaPresentationArt={stadium};
})();
