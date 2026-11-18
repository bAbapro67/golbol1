(() => {
 'use strict';
 const aliases=new Map(),remember=(a,b)=>{if(a&&a!==b)aliases.set(a,b);};
 const first=['BARSELORA','REAL MERİD','MANCHESTER GÖK','PARİS YILDIZ','GALATA ASLAN','FENER YAKASI','BEŞİK KARTAL','MİLANO ATEŞ','BAVYERA KIRMIZI','LİVER IRMAK','MİAMİ PEMBE','RİYAD GÜNEŞ','LONDRA TOPÇU','LONDRA MAVİ','MİLANO GECE','ATLETİK MERİD'];
 function invented(name){const vowels={a:'e',e:'a',i:'y',ı:'i',o:'u',u:'o',ö:'ü',ü:'ö',A:'E',E:'A',İ:'Y',I:'İ',O:'U',U:'O',Ö:'Ü',Ü:'Ö'};let changed=false;return String(name).replace(/[aeiıouöüAEİIOUÖÜ]/g,x=>{if(changed)return x;changed=true;return vowels[x];})+(changed?'':'a');}
 const xml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
 const uri=s=>'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s);
 window.ARENA_TEAMS.forEach((team,i)=>{
  if(team.category==='special')return;
  const name=first[i]||invented(team.name);remember(team.name,name);remember(team.name.toLocaleUpperCase('tr'),name.toLocaleUpperCase('tr'));
  const primary=/^#[\da-f]{3,8}$/i.test(team.color)?team.color:'#c8384b',secondary=/^#[\da-f]{3,8}$/i.test(team.dark)?team.dark:'#18345b';
  const round=[2,4,5,8,11].includes(i)||i%5===0;
  const outline=round?'<circle cx="60" cy="65" r="49"/>':'<path d="M15 21Q60 2 105 21L99 83Q86 111 60 123Q34 111 21 83Z"/>';
  const mark=i%3===0?'<path d="m60 37 8 19 21 2-16 14 5 22-18-11-18 11 5-22-16-14 21-2z"/>':i%3===1?'<path d="m35 79 13-38 12 23 12-23 13 38-25 13z"/>':'<path d="M33 45h54v12H67v38H53V57H33z"/>';
  team.crest=uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 130"><g fill="${secondary}" stroke="#ecdcaa" stroke-width="5">${outline}</g><path d="M29 33h16v56H29zm46 0h16v56H75z" fill="${primary}" opacity=".9"/><g fill="#fff3cb">${mark}</g><text x="60" y="111" text-anchor="middle" fill="white" font-size="10" font-family="Arial" font-weight="bold">${xml(name.split(/\s+/).map(w=>w[0]).join('').slice(0,4))}</text></svg>`);
  team.crestScale=1;
  for(const p of [...team.players,team.keeper,team.coach].filter(Boolean)){remember(p.name,invented(p.name));if(p.realName)remember(p.realName,invented(p.name));}
  if(team.stadium)remember(team.stadium.name,`${name} Arenası`);
 });
 for(const [a,b]of Object.entries({'UCL':'YKL','UEFA':'Yıldız Birliği','Champions League':'Yıldızlar Kupası','Şampiyonlar Ligi':'Yıldızlar Kupası','Ultimate Team':'Rüya Kadro','ULTIMATE TEAM':'RÜYA KADRO','FC 27':'GB 27','FC27':'GB27','AVENGERS':'KAHRAMANLAR','Avengers':'Kahramanlar','Marvel':'Yıldız Evreni','Spotify':'Melodi','Emirates':'Skyora','Etihad':'Bulut','Allianz':'Birlik','Chobani':'Çayır','RAMS':'DORUK','Tüpraş':'Kuzey','San Siro':'Milora','Anfield':'Irmak','Stamford Bridge':'Mavi Köprü','Camp Nou':'Yeni Katalan','Bernabéu':'Merid','PlayStation':'Oyun İstasyonu'}))remember(a,b);
 // The user explicitly keeps uniforms, including their printed sponsor lettering.
 for(const sponsor of ['Spotify','Emirates','Etihad','Chobani'])aliases.delete(sponsor);
 for(const team of window.ARENA_TEAMS.filter(t=>t.category==='special'))for(const item of [team,...team.players,team.keeper,team.coach].filter(Boolean))for(const name of [item.name,item.realName].filter(Boolean)){aliases.set(name,name);aliases.set(name.toLocaleUpperCase('tr'),name.toLocaleUpperCase('tr'));}
 // Display aliases leave stored IDs and gameplay identity checks intact.
 const entries=[...aliases].sort((a,b)=>b[0].length-a[0].length),pattern=new RegExp(entries.map(([a])=>a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
 const display=s=>String(s).replace(pattern,a=>aliases.get(a));
 window.ArenaFiction={display,aliases};
 const original=CanvasRenderingContext2D.prototype.fillText;CanvasRenderingContext2D.prototype.fillText=function(value,...args){return original.call(this,display(value),...args);};
 const measured=CanvasRenderingContext2D.prototype.measureText;CanvasRenderingContext2D.prototype.measureText=function(value){return measured.call(this,display(value));};
 const seen=new WeakMap();function translate(root){if(root.nodeType===3){if(root.parentElement?.closest('script,style,input,textarea,[contenteditable],[data-fiction-exempt]'))return;if(seen.get(root)===root.nodeValue)return;const value=display(root.nodeValue);if(value!==root.nodeValue)root.nodeValue=value;seen.set(root,root.nodeValue);return;}if(root.nodeType!==1&&root.nodeType!==9)return;for(const node of root.childNodes)translate(node);}
 const observer=new MutationObserver(records=>{for(const r of records){if(r.type==='characterData')translate(r.target);else for(const node of r.addedNodes)translate(node);}});translate(document.body);observer.observe(document.body,{subtree:true,childList:true,characterData:true});
})();
