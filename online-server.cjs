const MatchPause=require('./match-pause.js');
const Moderation=require('./moderation-core.js');
﻿'use strict';
const {randomBytes,randomInt}=require('node:crypto');
const vm=require('node:vm'),fs=require('node:fs'),catalog={window:{}};
vm.createContext(catalog);
for(const file of ['expansion.js','club-portraits.js','europe.js','coaches.js','europe-clubs.js','special-teams.js','team-performance.js','fc27-card-data.js','fc27-catalog.js','fc27-install.js'])vm.runInContext(fs.readFileSync(require.resolve('./'+file),'utf8'),catalog);
for(const team of catalog.window.ARENA_TEAMS)for(const player of [...team.players,team.keeper].filter(Boolean))player.overall=team.category==='special'?99:Math.round(player.overall||team.performance?.squadRating||78);
const draftCards=require('./draft-cards.js'),clubs=require('./club-designer.js');
draftCards.register(catalog.window.ARENA_FC27_CARDS);
function offers(picks){return draftCards.offers(catalog.window.ARENA_TEAMS,picks,()=>randomInt(0x100000000)/0x100000000);}

function createOnline(ultimate,{spectators,record}={}){
 const rooms=new Map();
 const party=require('./party-server.cjs').createParty({spectators,record,ultimate,teams:catalog.window.ARENA_TEAMS,offers});
 const reply=(res,status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
 const emit=(peer,data)=>{if(peer?.stream&&!peer.stream.destroyed&&!peer.stream.writableEnded){if(peer.stream.writableLength>512000){peer.stream.destroy();return;}peer.stream.write(`data: ${JSON.stringify(data)}\n\n`);}};
 const token=()=>randomBytes(24).toString('hex');
 const close=(code,reason)=>{spectators?.end('online:'+code);const room=rooms.get(code);if(!room)return;for(const peer of [room.host,room.guest]){emit(peer,{type:'closed',reason});peer?.stream?.end();}rooms.delete(code);};
 const publishPause=room=>{for(const peer of [room.host,room.guest])emit(peer,{type:'match-pause',pause:MatchPause.view(room),ready:!!room.matchPause?.ready.includes(peer===room.host?'host':'guest')});};
 const pauseTimer=setInterval(()=>{for(const room of rooms.values())if(MatchPause.tick(room))publishPause(room);},100);pauseTimer.unref();
 const lobby=room=>({type:'ultimate-state',mode:room.mode,playing:!!room.playing,finished:!!room.finished,players:[room.host,room.guest].map(peer=>peer?{ready:!!peer.ultimateReady,connected:!!peer.stream,squad:peer.readySquad||null}:null)});
 const broadcastLobby=room=>{if(room.mode==='ultimate')for(const peer of [room.host,room.guest])emit(peer,lobby(room));};
 async function handle(req,res,url){
  if(!url.pathname.startsWith('/api/online/'))return false;
  try{
   if(req.headers.origin){let requestOrigin;try{requestOrigin=new URL(req.headers.origin);}catch{reply(res,403,{error:'Geçersiz kaynak.'});return true;}const own=`${req.socket.encrypted?'https':'http'}://${req.headers.host}`,publicOrigin=process.env.PUBLIC_ORIGIN&&new URL(process.env.PUBLIC_ORIGIN).origin;if(requestOrigin.origin!==own&&requestOrigin.origin!==publicOrigin&&requestOrigin.host!==req.headers.host){reply(res,403,{error:'Geçersiz kaynak.'});return true;}}
   if(req.method==='GET'&&url.pathname==='/api/online/rooms'){reply(res,200,{rooms:[...party.list(),...[...rooms.entries()].filter(([,r])=>!r.guest&&!r.config&&!r.draft&&r.host.stream).map(([code,r])=>({code,mode:r.mode,players:1,capacity:2,party:false}))]});return true;}
   if(req.method==='GET'&&await party.handle(req,res,url,null))return true;
   if(req.method==='GET'&&url.pathname==='/api/online/events'){
    const code=url.searchParams.get('code'),room=rooms.get(code),key=url.searchParams.get('token');
    const peer=room&&[room.host,room.guest].find(p=>p&&p.token===key);
    if(!peer){reply(res,403,{error:'Oda oturumu geçersiz.'});return true;}
    peer.stream?.end();res.writeHead(200,{'Content-Type':'text/event-stream','Cache-Control':'no-store','Connection':'keep-alive','X-Accel-Buffering':'no'});res.write(': connected\n\n');peer.stream=res;peer.seen=Date.now();
    emit(peer,{type:'ready',joined:!!room.guest});emit(peer,{type:'chat-history',messages:room.chat||[]});if(room.guest)emit(room.host,{type:'joined'});
    if(room.draft)emit(peer,{type:'draft-state',draft:room.draft});
    broadcastLobby(room);
    if(room.config){emit(peer,{type:'start',config:room.config});if(peer===room.host)emit(room.guest,{type:'start',config:room.config});if(room.playing)emit(peer,{type:'play'});if(room.snapshot)emit(peer,room.snapshot);publishPause(room);}
    const pulse=setInterval(()=>{if(res.destroyed){clearInterval(pulse);return;}res.write(': heartbeat\n\n');},15000);pulse.unref();
    req.on('close',()=>{clearInterval(pulse);if(peer.stream===res){peer.stream=null;peer.seen=Date.now();emit(peer===room.host?room.guest:room.host,{type:'disconnected'});}});return true;
   }
   if(req.method!=='POST'){reply(res,405,{error:'Geçersiz istek.'});return true;}
   let body='';for await(const chunk of req){body+=chunk;if(Buffer.byteLength(body)>256000){reply(res,413,{error:'İstek çok büyük.'});return true;}}
   let p;try{p=JSON.parse(body);}catch{reply(res,400,{error:'Geçersiz veri.'});return true;}
   Moderation.request(url.pathname,p);
   if(['create','join'].includes(url.pathname.slice('/api/online/'.length))&&req.account&&p.clubToken!==req.account.clubToken){reply(res,403,{error:'Kendi hesabının kulübüyle katıl.'});return true;}
   if(await party.handle(req,res,url,p))return true;
   const action=url.pathname.slice('/api/online/'.length);
   if(action==='create'){
    if(rooms.size>=200){reply(res,503,{error:'Sunucu dolu.'});return true;}
    let code;do{code=randomBytes(3).toString('hex').toUpperCase();}while(rooms.has(code));
    const mode=p.mode||'classic';if(!['classic','draft','ultimate'].includes(mode)){reply(res,400,{error:'Maç türü geçersiz.'});return true;}
    if(p.clubToken)ultimate?.read(p.clubToken);if(mode==='ultimate'&&!p.clubToken){reply(res,403,{error:'Önce Ultimate Team kulübünü aç.'});return true;}
    const host={accountKey:req.account?.key,token:token(),seen:Date.now(),clubToken:p.clubToken||null,...(mode==='ultimate'?{readySquad:ultimate.selected(p.clubToken),ultimateReady:false}:{})};rooms.set(code,{host,guest:null,mode,created:Date.now()});reply(res,200,{code,token:host.token,role:'host',mode});return true;
   }
   const code=String(p.code||'').toUpperCase(),room=rooms.get(code);
   if(!room){reply(res,404,{error:'Oda bulunamadı.'});return true;}
   if(action==='join'){
    if(room.guest){reply(res,409,{error:'Oda dolu.'});return true;}
    if(p.mode&&p.mode!==room.mode){reply(res,409,{error:'Odanın maç türü farklı. Doğru maç türünü seç.'});return true;}if(p.clubToken)ultimate?.read(p.clubToken);
    if(room.mode==='ultimate'&&(!p.clubToken||p.clubToken===room.host.clubToken)){reply(res,403,{error:'Arkadaşın kendi Ultimate Team kulübüyle katılmalı.'});return true;}
    room.guest={accountKey:req.account?.key,token:token(),seen:Date.now(),clubToken:p.clubToken||null,...(room.mode==='ultimate'?{readySquad:ultimate.selected(p.clubToken),ultimateReady:false}:{})};reply(res,200,{code,token:room.guest.token,role:'guest',mode:room.mode});return true;
   }
   const peer=[room.host,room.guest].find(v=>v&&v.token===p.token);
   if(!peer){reply(res,403,{error:'Oda oturumu geçersiz.'});return true;}peer.seen=Date.now();
   if(action==='leave'){close(code,'Oyuncu odadan ayrıldı.');reply(res,200,{ok:true});return true;}
   if(action!=='send'||!p.message||typeof p.message!=='object'){reply(res,400,{error:'Geçersiz mesaj.'});return true;}
   const m=p.message;
   if(m.type==='rematch-vote'){if(!room.finished||!room.guest){reply(res,409,{error:'Ma\u00e7 hen\u00fcz bitmedi.'});return true;}room.rematchVotes=room.rematchVotes||new Set();room.rematchVotes.add(peer===room.host?'host':'guest');for(const player of [room.host,room.guest])emit(player,{type:'rematch-state',votes:room.rematchVotes.size,total:2,voted:room.rematchVotes.has(player===room.host?'host':'guest')});if(room.rematchVotes.size===2){room.rematchVotes.clear();room.snapshot=null;room.playing=false;room.finished=false;room.rewarded=false;room.guestReady=false;room.matchPause=null;room.matchId=token();for(const player of [room.host,room.guest])emit(player,{type:'start',config:room.config});}reply(res,200,{ok:true});return true;}
   if(m.type==='pause'||m.type==='pause-ready'){if(!room.playing||room.finished){reply(res,409,{error:'Aktif online ma\u00e7 yok.'});return true;}if(m.type==='pause')MatchPause.request(room,['host','guest'],peer===room.host?'host':'guest');else MatchPause.ready(room,peer===room.host?'host':'guest');publishPause(room);reply(res,200,{ok:true});return true;}
   if(room.matchPause&&['input','point','snapshot','play'].includes(m.type)){reply(res,200,{ok:true});return true;}
   if(['ultimate-ready','ultimate-start','ultimate-rematch'].includes(m.type)){
    if(room.mode!=='ultimate'||!ultimate){reply(res,409,{error:'Bu oda Ultimate Team kulüp maçı değil.'});return true;}
    if(m.type==='ultimate-ready'){
     if(room.config||room.playing){reply(res,409,{error:'Maç devam ediyor. Rövanş için ev sahibini bekle.'});return true;}peer.readySquad=ultimate.selected(peer.clubToken);peer.ultimateReady=m.ready!==false;broadcastLobby(room);
    }else if(m.type==='ultimate-rematch'){
     if(peer!==room.host||!room.finished){reply(res,409,{error:'Önce maç tamamlanmalı.'});return true;}room.config=null;room.snapshot=null;room.playing=false;room.finished=false;room.guestReady=false;for(const player of [room.host,room.guest])if(player){player.ultimateReady=false;player.readySquad=ultimate.selected(player.clubToken);}broadcastLobby(room);
    }else{
     if(peer!==room.host||room.config||!room.guest?.stream||![room.host,room.guest].every(v=>v.ultimateReady)){reply(res,409,{error:'İki oyuncu da kadrosunu hazır olarak işaretlemeli.'});return true;}
     for(const p of [room.host,room.guest])p.readySquad=ultimate.selected(p.clubToken);room.matchPause=null;room.matchId=token();room.rewarded=false;room.finished=false;room.playing=false;room.guestReady=false;room.config={selection:[{team:0,player:0},{team:1,player:0}],light:'night',ultimate:{matchId:room.matchId},draft:[room.host.readySquad.cards,room.guest.readySquad.cards],draftIdentities:[room.host.readySquad.identity,room.guest.readySquad.identity]};
     for(const player of [room.host,room.guest])emit(player,{type:'start',config:room.config});
    }reply(res,200,{ok:true});return true;
   }
   if(m.type==='chat'){
    if(typeof m.text!=='string'||!m.text.trim()||m.text.length>400){reply(res,400,{error:'Mesaj 1–400 karakter olmalı.'});return true;}
    if(peer.lastChat&&Date.now()-peer.lastChat<700){reply(res,429,{error:'Mesaj göndermeden önce bir an bekle.'});return true;}
    peer.lastChat=Date.now();
    const message={type:'chat',id:token(),role:peer===room.host?'host':'guest',text:m.text.trim(),time:Date.now()};
    room.chat=(room.chat||[]).concat(message).slice(-60);
    for(const player of [room.host,room.guest])emit(player,message);
    reply(res,200,{ok:true});return true;
   }
   if(m.type==='draft-begin'||m.type==='draft-pick'||m.type==='draft-identity'){
    if(room.mode==='ultimate'){reply(res,409,{error:'Draft için ayrı bir online draft odası aç.'});return true;}
    if(m.type==='draft-identity'){
     if(!room.draft||room.playing||room.config){reply(res,409,{error:'Kulüp şu anda değiştirilemez.'});return true;}room.draft.identities[peer===room.host?0:1]=clubs.normalize(m.identity);
    }else if(m.type==='draft-begin'){
     if(peer!==room.host||!room.guest?.stream||room.playing||room.draft){reply(res,409,{error:'?ki oyuncu haz?r olmal?. Yeni draft i?in yeni oda a?.'});return true;}
     room.config=null;room.snapshot=null;room.draft={identities:[clubs.normalize(m.identity),clubs.normalize({name:"DEPLASMAN KULÜBÜ",short:"DEP"})],picks:[[],[]],offers:[offers([]),offers([])]};
    }else{
     const side=peer===room.host?0:1,d=room.draft;
     if(!d||m.round!==d.picks[side].length||!Number.isInteger(m.index)||!d.offers[side][m.index]){reply(res,400,{error:'Ge?ersiz kart se?imi.'});return true;}
     d.picks[side].push(d.offers[side][m.index]);d.offers[side]=d.picks[side].length<6?offers(d.picks[side]):[];
    }
    for(const player of [room.host,room.guest])emit(player,{type:'draft-state',draft:room.draft});reply(res,200,{ok:true});return true;
   }
   if(peer===room.host){
    if(m.type==='start'){
     if(room.mode==='ultimate'){reply(res,403,{error:'Kulüp maçı kadroları sunucu tarafından hazırlanır.'});return true;}
     if(!room.guest?.stream){reply(res,409,{error:'Önce arkadaşının bağlanmasını bekle.'});return true;}
     if(!m.config||!Array.isArray(m.config.selection)||m.config.selection.length!==2||!m.config.selection.every(v=>Number.isInteger(v.team)&&v.team>=0&&v.team<1000&&Number.isInteger(v.player)&&v.player>=0&&v.player<100)){reply(res,400,{error:'Geçersiz maç ayarı.'});return true;}
     if(room.draft){if(!room.draft.picks.every(p=>p.length===6)||JSON.stringify(m.config.draft)!==JSON.stringify(room.draft.picks)||JSON.stringify(m.config.draftIdentities)!==JSON.stringify(room.draft.identities)){reply(res,409,{error:'Draft kadrolar? tamamlanmal?.'});return true;}}else if(m.config.draft){reply(res,400,{error:'Draft haz?rlanmad?.'});return true;}
     room.config=m.config;room.snapshot=null;room.playing=false;room.guestReady=false;room.matchId=token();room.rewarded=false;room.finished=false;
    }else if(!['snapshot','play'].includes(m.type)){reply(res,403,{error:'Mesaj izni yok.'});return true;}
    if(m.type==='play'){if(!room.config||!room.guestReady){reply(res,409,{error:'Rakibin maç hazırlığı henüz tamamlanmadı.'});return true;}room.playing=true;}
    if(m.type==='snapshot'){if(room.config&&!room.finished)spectators?.publish('online:'+code,{kind:'native',title:code,members:[room.host,room.guest].map(p=>p?.accountKey).filter(Boolean),config:room.config},m);if(!room.config){reply(res,409,{error:'Maç başlamadı.'});return true;}room.snapshot=m;if(room.playing&&!room.rewarded&&m.state==='result'){
     const penalties=m.shootout?.done?m.shootout.score:null;if(!Array.isArray(m.score)||m.score.length!==2||!m.score.every(n=>Number.isInteger(n)&&n>=0&&n<=999)){reply(res,400,{error:'Maç skoru geçersiz.'});return true;}
     require('./ultimate-team-core.js').reward(m.score,0,penalties);room.rewarded=true;room.finished=true;for(const [side,player]of [room.host,room.guest].entries())record?.(player?.accountKey,{...m.stats,winner:(penalties||m.score)[0]>(penalties||m.score)[1]?0:1},side,room.matchId);spectators?.end('online:'+code,m);for(const [side,player] of [room.host,room.guest].entries())if(player?.clubToken){const result=ultimate.award(player.clubToken,'online:'+room.matchId,m.score,side,penalties);emit(player,{type:'ultimate-reward',...result});}
    }}
    emit(room.guest,m);
   }else{
    if(!['input','pause','point','ready-to-play','start-error'].includes(m.type)){reply(res,403,{error:'Mesaj izni yok.'});return true;}
    if(m.type==='ready-to-play'){if(!room.config){reply(res,409,{error:'Maç hazırlanmadı.'});return true;}room.guestReady=true;}
    if(m.type==='start-error'){room.playing=false;room.guestReady=false;}
    if(m.type==='input'&&(!Array.isArray(m.held)||!Array.isArray(m.pressed)||m.held.length>30||m.pressed.length>30)){reply(res,400,{error:'Geçersiz kontrol.'});return true;}
    if(m.type==='point'&&(!Number.isFinite(m.x)||!Number.isFinite(m.y))){reply(res,400,{error:'Geçersiz hedef.'});return true;}
    emit(room.host,m);
   }
   reply(res,200,{ok:true});return true;
  }catch{if(!res.headersSent)reply(res,400,{error:'İstek tamamlanamadı.'});return true;}
 }
 const sweep=setInterval(()=>{const now=Date.now();for(const [code,r]of rooms)if([r.host,r.guest].some(p=>p&&!p.stream&&now-p.seen>30000)||now-r.created>4*3600000)close(code,'Oda bağlantısı kapandı.');},10000);sweep.unref();
 return {invite(user,code){const r=rooms.get(code);return party.invite(user,code)||(r&&r.host.clubToken===user.clubToken&&!r.guest&&!r.config?{kind:'online',code,mode:r.mode}:null);},handle,dispose(){clearInterval(pauseTimer);party.dispose();clearInterval(sweep);for(const code of rooms.keys())close(code,'Sunucu kapandı.');}};
}
module.exports={createOnline,catalog:catalog.window};

