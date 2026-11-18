'use strict';
const Moderation=require('./moderation-core.js');
const fs=require('node:fs'),path=require('node:path');
const {randomBytes,scrypt,timingSafeEqual,createHash}=require('node:crypto');
const {promisify}=require('node:util');
const derive=promisify(scrypt),fail=(status,message)=>{throw Object.assign(Error(message),{status});};
const digest=value=>createHash('sha256').update(value).digest('hex');
function createAccounts({directory,ultimate,inviteRoom=()=>null}){
 const file=directory&&path.join(directory,'accounts.json'),users=new Map(),sessions=new Map(),pending=new Set(),attempts=new Map(),streams=new Map();
 const lifetime=30*24*3600*1000,presence=new Map();
 if(file&&fs.existsSync(file)){const data=JSON.parse(fs.readFileSync(file,'utf8'));if(data.version!==1)throw Error('Hesap kayıt sürümü desteklenmiyor.');for(const user of data.users)users.set(user.key,user);for(const session of data.sessions||[])if(session.expires>Date.now())sessions.set(session.hash,session);}
 function persist(){if(!file)return;fs.mkdirSync(directory,{recursive:true});const temp=file+'.tmp';fs.writeFileSync(temp,JSON.stringify({version:1,users:[...users.values()],sessions:[...sessions.values()]}));fs.renameSync(temp,file);}
 function sessionKey(req){const raw=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith('golbol_session='))?.slice(15);return raw&&/^[a-f0-9]{64}$/.test(raw)?digest(raw):null;}
 function current(req){const key=sessionKey(req),session=key&&sessions.get(key);if(!session||session.expires<=Date.now())return null;const user=users.get(session.user)||null;if(user)presence.set(user.key,Date.now());return user;}
 function social(user){return {friends:(user.friends||[]).map(key=>users.get(key)).filter(Boolean).map(u=>({username:u.username,online:Date.now()-(presence.get(u.key)||0)<60000})),requests:(user.friendRequests||[]).map(key=>users.get(key)?.username).filter(Boolean),invitations:(user.invitations||[]).filter(i=>i.expires>Date.now()).map(i=>({...i,from:users.get(i.from)?.username||i.from}))};}
 const owner=token=>[...users.values()].find(u=>u.clubToken===token);
 function authorizeClub(req,token){const user=owner(token);if(user&&current(req)?.key!==user.key)fail(401,'Bu kulüp için hesabına giriş yap.');}
 function requireOnline(req,res){const user=current(req);if(!user)fail(401,'Çevrimiçi oynamak için giriş yap veya kaydol.');req.account=user;
  if(req.url.startsWith('/api/online/events')){const key=sessionKey(req);if(!streams.has(key))streams.set(key,new Set());streams.get(key).add(res);res.on('close',()=>{streams.get(key)?.delete(res);if(!streams.get(key)?.size)streams.delete(key);});}
  return user;
 }
 function cookie(req,res,value,age){const secure=!!req.socket.encrypted||process.env.PUBLIC_ORIGIN?.startsWith('https://');res.setHeader('Set-Cookie',`golbol_session=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${age}${secure?'; Secure':''}`);}
 function signIn(req,res,user){const old=sessionKey(req);if(old){sessions.delete(old);for(const stream of streams.get(old)||[])stream.end();streams.delete(old);}for(const [key,s]of sessions)if(s.expires<=Date.now())sessions.delete(key);const token=randomBytes(32).toString('hex'),hash=digest(token);sessions.set(hash,{hash,user:user.key,expires:Date.now()+lifetime});persist();cookie(req,res,token,lifetime/1000);return view(user);}
 function photo(value){return typeof value==='string'&&/^data:image\/(?:png|jpe?g|webp);base64,[a-zA-Z0-9+/=]+$/.test(value)&&Buffer.byteLength(value,'utf8')<=300000?value:null;}
 function view(user){return {user:{username:user.username,profilePhoto:photo(user.profilePhoto),language:user.language==='en'?'en':'tr'},clubToken:user.clubToken,profile:ultimate.read(user.clubToken)};}
 async function passwordHash(password,salt){return derive(password,salt,64,{N:131072,r:8,p:1,maxmem:160*1024*1024});}
 async function handle(req,res,url){if(!url.pathname.startsWith('/api/account/'))return false;
  const reply=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
  try{
   if(req.headers.origin){let requestOrigin;try{requestOrigin=new URL(req.headers.origin);}catch{fail(403,'Geçersiz kaynak.');}const own=`${req.socket.encrypted?'https':'http'}://${req.headers.host}`,publicOrigin=process.env.PUBLIC_ORIGIN&&new URL(process.env.PUBLIC_ORIGIN).origin;if(requestOrigin.origin!==own&&requestOrigin.origin!==publicOrigin&&requestOrigin.host!==req.headers.host)fail(403,'Geçersiz kaynak.');}
   const action=url.pathname.slice('/api/account/'.length);
   if(req.method==='GET'&&action==='session'){const user=current(req);reply(200,user?view(user):{user:null});return true;}
   if(req.method!=='POST')fail(405,'Geçersiz istek.');
   if(!req.headers['content-type']?.startsWith('application/json'))fail(415,'JSON isteği gerekli.');
   let raw='';const maximum=action==='settings'?310000:4096;for await(const chunk of req){raw+=chunk;if(Buffer.byteLength(raw)>maximum)fail(413,'İstek çok büyük.');}let body;try{body=JSON.parse(raw);}catch{fail(400,'Geçersiz veri.');}
   if(action==='social'){
    const user=current(req);if(!user)fail(401,'Arkadaşlar için hesabına giriş yap.');const op=body.op||'read',target=users.get(String(body.username||'').trim().toLowerCase());
    if(['request','accept','decline','remove','invite'].includes(op)&&(!target||target===user))fail(400,'Geçerli bir arkadaş kullanıcı adı yaz.');
    if(op==='request'){if((user.friends||[]).includes(target.key))fail(409,'Zaten arkadaşsınız.');if((target.friendRequests||[]).length>=50)fail(409,'Arkadaşlık isteği listesi dolu.');target.friendRequests=[...new Set([...(target.friendRequests||[]),user.key])];}
    else if(op==='accept'){if(!(user.friendRequests||[]).includes(target.key))fail(409,'Arkadaşlık isteği bulunamadı.');if((user.friends||[]).length>=100||(target.friends||[]).length>=100)fail(409,'Arkadaş listesi dolu.');user.friends=[...new Set([...(user.friends||[]),target.key])];target.friends=[...new Set([...(target.friends||[]),user.key])];user.friendRequests=user.friendRequests.filter(k=>k!==target.key);target.friendRequests=(target.friendRequests||[]).filter(k=>k!==user.key);}
    else if(op==='decline')user.friendRequests=(user.friendRequests||[]).filter(k=>k!==target.key);
    else if(op==='remove'){user.friends=(user.friends||[]).filter(k=>k!==target.key);target.friends=(target.friends||[]).filter(k=>k!==user.key);}
    else if(op==='invite'){if(!(user.friends||[]).includes(target.key))fail(403,'Önce arkadaş olmalısınız.');const invitation=inviteRoom(user,String(body.code||'').toUpperCase(),body.kind);if(!invitation)fail(409,'Önce katılıma açık bir oda oluştur.');target.invitations=(target.invitations||[]).filter(i=>i.expires>Date.now()&&i.from!==user.key).slice(-19);target.invitations.push({...invitation,id:randomBytes(12).toString('hex'),from:user.key,expires:Date.now()+10*60000});}
    else if(op==='dismiss')user.invitations=(user.invitations||[]).filter(i=>i.id!==body.id);
    else if(op!=='read')fail(400,'Geçersiz arkadaş işlemi.');
    if(op!=='read')persist();reply(200,social(user));return true;
   }
   if(action==='logout'){const key=sessionKey(req);sessions.delete(key);for(const stream of streams.get(key)||[])stream.end();streams.delete(key);persist();cookie(req,res,'',0);reply(200,{user:null});return true;}
   if(action==='settings'){
    const user=current(req);if(!user)fail(401,'Hesap ayarları için giriş yap.');
    if(body.action==='language'){if(!['tr','en'].includes(body.language))fail(400,'Geçersiz dil seçimi.');user.language=body.language;persist();reply(200,view(user));return true;}
    if(body.action==='photo'){user.profilePhoto=photo(body.profilePhoto);if(body.profilePhoto&&!user.profilePhoto)fail(400,'Profil fotoğrafı PNG, JPG veya WebP ve en fazla 220 KB olmalı.');persist();reply(200,view(user));return true;}
    if(body.action==='password'){
     if(typeof body.currentPassword!=='string'||typeof body.newPassword!=='string'||body.newPassword.length<8||body.newPassword.length>128)fail(400,'Yeni şifre 8–128 karakter olmalı.');
     const actual=await passwordHash(body.currentPassword,user.salt),expected=Buffer.from(user.hash,'hex');if(!timingSafeEqual(actual,expected))fail(401,'Mevcut şifre yanlış.');
     user.salt=randomBytes(16).toString('hex');user.hash=(await passwordHash(body.newPassword,user.salt)).toString('hex');persist();reply(200,{...view(user),passwordChanged:true});return true;
    }
    fail(400,'Hesap ayarı geçersiz.');
   }
   if(!['register','login'].includes(action))fail(404,'İşlem bulunamadı.');
   const username=typeof body.username==='string'?body.username.trim().normalize('NFKC'):'',key=username.toLowerCase();
   if(!/^[a-zA-Z0-9_]{3,24}$/.test(username))fail(400,'Kullanıcı adı 3–24 harf, rakam veya alt çizgi olmalı.');
   if(typeof body.password!=='string'||body.password.length<8||body.password.length>128)fail(400,'Şifre 8–128 karakter olmalı.');
   // Bound both expensive password work and failed attempts; do not trust proxy IP headers.
   const now=Date.now(),ip=req.socket.remoteAddress||'local';for(const [k,v]of attempts)if(v.until<=now)attempts.delete(k);
   for(const bucket of ['ip:'+ip,'user:'+key]){const limit=bucket.startsWith('ip:')?40:12,v=attempts.get(bucket)||{count:0,until:now+15*60000};if(v.count>=limit)fail(429,'Çok fazla deneme. Biraz sonra tekrar dene.');v.count++;attempts.set(bucket,v);}
   if(pending.size>=2)fail(503,'Giriş işlemleri yoğun. Biraz sonra tekrar dene.');
   const job=Symbol();pending.add(job);
   try{
    if(action==='register'){
     Moderation.assertText(username);
     if(users.has(key))fail(409,'Bu kullanıcı adı kullanılıyor.');if(users.size>=500)fail(503,'Hesap kapasitesi dolu.');
     const salt=randomBytes(16).toString('hex'),hash=(await passwordHash(body.password,salt)).toString('hex');
     if(users.has(key))fail(409,'Bu kullanıcı adı kullanılıyor.');
     let clubToken=body.guestToken;if(clubToken){ultimate.read(clubToken);if(owner(clubToken))fail(409,'Bu ilerleme zaten bir hesaba bağlı.');}else clubToken=ultimate.create().clubToken;
     const user={key,username,salt,hash,clubToken,tutorialEligible:true,language:body.language==='en'?'en':'tr'};users.set(key,user);reply(200,{...signIn(req,res,user),imported:!!body.guestToken});
    }else{
     const user=users.get(key),salt=user?.salt||'00000000000000000000000000000000',actual=await passwordHash(body.password,salt),expected=user?Buffer.from(user.hash,'hex'):Buffer.alloc(64);
     if(!timingSafeEqual(actual,expected)||!user)fail(401,'Kullanıcı adı veya şifre yanlış.');reply(200,signIn(req,res,user));
    }
   }finally{pending.delete(job);}
  }catch(error){if(!res.headersSent)reply(error.status||500,{error:error.status?error.message:'Hesap işlemi tamamlanamadı.'});}
  return true;
 }
 return {handle,current,authorizeClub,requireOnline,dispose(){for(const set of streams.values())for(const stream of set)stream.end();streams.clear();}};
}
module.exports={createAccounts};
