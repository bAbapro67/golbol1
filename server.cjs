const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = __dirname;
function createServer(options = {}) {
  const origin = options.origin || process.env.PUBLIC_ORIGIN || `http://localhost:${process.env.PORT||3000}`;
  function json(res,status,body){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(body));}
  function fail(status,message){throw Object.assign(new Error(message),{status});}
  const onlineModule=require('./online-server.cjs');
  let accounts,sen;
  const ultimate=require('./ultimate-store.cjs').createUltimateStore({directory:options.ultimateDir,teams:onlineModule.catalog.ARENA_TEAMS,authorize:(req,token)=>accounts.authorizeClub(req,token)});
  accounts=require('./accounts.cjs').createAccounts({directory:options.ultimateDir,ultimate,inviteRoom:(user,code,kind)=>kind==='sen'?sen.invite(user,code):online.invite(user,code)});
  const spectators=require('./spectator-hub.js').createSpectators({current:req=>accounts.current(req)});
  const online=onlineModule.createOnline(ultimate,{spectators,record:(...args)=>sen.recordNative(...args)});
  sen=require('./sen-server.cjs').createSen({spectators,directory:options.ultimateDir,current:req=>accounts.current(req),linkClub:(req,token)=>{const value=accounts.current(req)?.clubToken||token;if(!value)return null;accounts.authorizeClub(req,value);ultimate.read(value);return value;},dailyProgress:ultimate.dailyProgress});
  const server=http.createServer(async (req,res)=>{
    res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');
    try {
      const url=new URL(req.url,origin);
      if(url.pathname==='/api/health'){json(res,200,{ok:true,api:'golbol'});return;}
      if(await accounts.handle(req,res,url))return;
      if(await spectators.handle(req,res,url))return;
      if(await sen.handle(req,res,url))return;
      if(url.pathname.startsWith('/api/online/')||url.pathname==='/api/ultimate/trade')accounts.requireOnline(req,res);
      if(await ultimate.handle(req,res,url))return;
      if(await online.handle(req,res,url))return;
      if(url.pathname.startsWith('/api/'))fail(404,'Endpoint removed.');
      if(!['GET','HEAD'].includes(req.method))fail(405,'Bu isteğe izin verilmedi.');
      const relative=decodeURIComponent(url.pathname).replace(/^\//,'')||'index.html';
      // Only serve public game files and assets.
      const allowed=relative==='index.html'||(/^[\w-]+\.(js|css)$/.test(relative)&&relative!=='server.cjs')||/^assets\/[\w\-./ ]+\.(png|jpe?g|jfif|svg|webp|gif|mp3|wav|ogg|m4a|woff2?|ttf|otf)$/i.test(relative);
      const target=path.resolve(ROOT,relative);if(!allowed||!target.startsWith(ROOT+path.sep))fail(404,'Dosya bulunamadı.');
      if(!fs.existsSync(target)||!fs.statSync(target).isFile())fail(404,'Dosya bulunamadı.');
      const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.jpeg':'image/jpeg','.mp3':'audio/mpeg','.wav':'audio/wav','.ogg':'audio/ogg','.ttf':'font/ttf','.otf':'font/otf','.woff':'font/woff','.woff2':'font/woff2'};
      res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache'});if(req.method==='HEAD')return res.end();fs.createReadStream(target).pipe(res);
    } catch(error) { if(!res.headersSent)json(res,error.status||500,{error:error.status?error.message:'İşlem tamamlanamadı. Tekrar dene.'});else res.end(); }
  });
  server.on('close',()=>{spectators.dispose();online.dispose();accounts.dispose();sen.dispose();});
  return server;
}
if(require.main===module){const port=Number(process.env.PORT||3000);createServer({ultimateDir:process.env.DATA_DIR||path.join(ROOT,'.local-data','ultimate')}).listen(port,process.env.HOST||'0.0.0.0',()=>console.log(`Golbol: ${process.env.PUBLIC_ORIGIN||'http://localhost:'+port}`));}
module.exports={createServer};
