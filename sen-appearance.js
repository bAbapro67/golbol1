(() => {
 'use strict';const Core=window.ArenaSenCore,atlas=new Image();atlas.src='assets/sen/heads.png';
 const ready=new Promise((resolve,reject)=>{atlas.onload=resolve;atlas.onerror=()=>reject(Error('Oyuncu yüzleri yüklenemedi.'));});
 function drawHead(c,character){const a=Core.character(character),box=window.ArenaSenHeadBounds?.[a.face];if(!box||!atlas.complete)return;const height=104,width=height*box[2]/box[3],top=-67-height;if(window.ArenaRenderCache)window.ArenaRenderCache.drawImage(c,atlas,...box,-width/2,top,width,height);else c.drawImage(atlas,...box,-width/2,top,width,height);const line=(x,y,x2,y2,color,w=2)=>{c.strokeStyle=color;c.lineWidth=w;c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.stroke();};
  if(a.glasses){const y=top+height*.48;c.strokeStyle=a.glasses===2?'#dfc16c':'#1b2430';c.lineWidth=2;for(const x of [-21,4]){c.beginPath();c.roundRect(x,y,18,12,a.glasses===2?6:3);if(a.glasses>=3){c.fillStyle=a.glasses===4?'#7fbacddd':'#14212aee';c.fill();}c.stroke();}line(-3,y+4,4,y+4,c.strokeStyle);}
  if(a.hat){const color=['','#293a72','#bd5146','#2f5b49','#d3b35a','#242831'][a.hat],y=top+height*.08;c.fillStyle=color;c.beginPath();c.ellipse(0,y+8,width*.5,18,0,Math.PI,0);c.lineTo(width*.5,y+10);c.lineTo(-width*.5,y+10);c.closePath();c.fill();c.fillRect(-width*.5,y+7,width,7);if(a.hat<3)c.fillRect(4,y+10,width*.6,5);if(a.hat===5){c.beginPath();c.roundRect(-width*.3,y-13,width*.6,27,7);c.fill();}}
 }
 function details(c,character){const a=Core.character(character),top=Core.TOPS[a.top],line=(x,y,x2,y2,color,w=1)=>{c.strokeStyle=color;c.lineWidth=w;c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.stroke();};
  if(['muscle','bare'].includes(top.style)){line(-12,-51,-2,-49,'#714c3b77');line(3,-49,14,-51,'#714c3b77');line(1,-49,1,-32,'#714c3b66');if(top.style==='muscle')for(const y of [-44,-39,-34]){line(-8,y,-2,y+1,'#714c3b66');line(4,y+1,10,y,'#714c3b66');}}
  if(top.style==='hoodie'){line(-5,-62,-5,-46,'#dddaca');line(6,-62,6,-46,'#dddaca');c.fillStyle=top.accent;c.beginPath();c.roundRect(-10,-40,23,8,3);c.fill();}
 }
 function drawActor(c,character,actor={},options={}){window.ArenaSenEngine.preview(c,Core.character(character),actor.x||0,actor.y||0,options.scale||1);}
 window.ArenaSenAppearance={ready,atlas,drawActor,drawHead,details};
})();
