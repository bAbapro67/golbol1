(() => {
 'use strict';
 const apiOrigin=String(window.GOLBOL_API_ORIGIN||document.querySelector('meta[name="golbol-api-origin"]')?.content||location.origin).replace(/\/$/,'');
 const base=apiOrigin===location.origin?'':apiOrigin;
 function guidance(){return 'Bu web sürümü hesap ve online oyun sunucusuna ulaşamıyor. Web paketini statik dosya sitesi yerine Node.js sunucusunda başlat ve oyun ile /api aynı HTTPS adresinde olsun.';}
 async function request(path,options={}){
  let response;
  try{response=await fetch(base+path,{credentials:base?'include':'same-origin',...options});}
  catch(error){throw Object.assign(Error(guidance()),{cause:error,code:'API_UNREACHABLE'});}
  const type=response.headers.get('content-type')||'';let data;
  try{data=type.includes('application/json')?await response.json():null;}catch{data=null;}
  if(!response.ok)throw Object.assign(Error(data?.error||guidance()),{status:response.status,code:response.status===404?'API_MISSING':undefined});
  if(!data)throw Object.assign(Error(guidance()),{code:'API_INVALID'});
  return data;
 }
 window.ArenaApi={request,base,guidance};
})();
