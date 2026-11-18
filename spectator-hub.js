'use strict';
exports.createSpectators=function({current,now=Date.now}){
 const sources=new Map(),viewers=new Map();
 const allowed=(req,source)=>{const user=current(req);return !!user&&source.members.some(key=>(user.friends||[]).includes(key));};
 const send=(res,data)=>{if(res.destroyed||res.writableEnded)return;if(res.writableLength>512000){res.destroy();return;}res.write('data: '+JSON.stringify(data)+'\n\n');};
 function publish(key,meta,snapshot){let source=sources.get(key);if(!source){source={...meta,last:0};sources.set(key,source);}Object.assign(source,meta);source.snapshot=snapshot;if(now()-source.last<100)return;source.last=now();for(const viewer of viewers.get(key)||[]){if(!allowed(viewer.req,source)){send(viewer.res,{type:'ended'});viewer.res.end();}else send(viewer.res,{type:'snapshot',snapshot});}}
 function end(key,snapshot){for(const {res}of viewers.get(key)||[]){if(snapshot)send(res,{type:'snapshot',snapshot});send(res,{type:'ended'});res.end();}viewers.delete(key);sources.delete(key);}
 async function handle(req,res,url){if(!url.pathname.startsWith('/api/watch/'))return false;const user=current(req);if(!user)throw Object.assign(Error('Önce hesabına giriş yap.'),{status:401});if(req.method!=='GET')throw Object.assign(Error('Seyirciler yalnızca maç izleyebilir.'),{status:405});
  if(url.pathname==='/api/watch/friends'){const matches=[...sources].filter(([,s])=>allowed(req,s)).map(([id,s])=>({id,title:s.title,kind:s.kind}));res.writeHead(200,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify({matches}));return true;}
  const key=url.searchParams.get('id'),source=sources.get(key);if(url.pathname!=='/api/watch/events'||!source)throw Object.assign(Error('İzlenebilir maç bulunamadı.'),{status:404});if(!allowed(req,source))throw Object.assign(Error('Yalnızca arkadaşının maçını izleyebilirsin.'),{status:403});if((viewers.get(key)?.size||0)>=30)throw Object.assign(Error('Seyirci alanı dolu.'),{status:409});
  res.writeHead(200,{'Content-Type':'text/event-stream','Cache-Control':'no-store','Connection':'keep-alive','X-Accel-Buffering':'no'});if(!viewers.has(key))viewers.set(key,new Set());const viewer={req,res};viewers.get(key).add(viewer);send(res,{type:'watch-start',kind:source.kind,config:source.config,title:source.title,snapshot:source.snapshot});const pulse=setInterval(()=>{if(!allowed(req,source)){send(res,{type:'ended'});res.end();}else if(!res.destroyed)res.write(': heartbeat\n\n');},15000);pulse.unref();res.on('close',()=>{clearInterval(pulse);viewers.get(key)?.delete(viewer);});return true;
 }
 return {publish,end,handle,dispose(){for(const key of sources.keys())end(key);},_test:{sources,viewers}};
};
