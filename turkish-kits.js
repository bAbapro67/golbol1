// Canvas kit colours and designs transcribed from the user's 28 shirt references.
(() => {
 const entries = [
  ['997','trabzonspor','trabzonspor7.jpg','trabzonspor kaleci.jpg','stripes','#76172b','#86bce7','#d9ba70','papara','joma','#a4d46e','#81b452','#151b17'],
  ['7914','basaksehir','istanbul başakşehir.jpg','istanbul başakşehir kaleci.jpg','pinstripes','#171844','#33378f','#f57f21','TODINI','puma','#151718','#56595c','#d2d4cd'],
  ['11429','samsunspor','samsunspor.jpg','samsunspor kaleci.jpg','stripes','#f5f3ee','#ba1823','#191b20','COREX HOLDING','hummel','#4b478b','#343465','#d6e842'],
  ['789','goztepe','göztepe.jpg','göztepe kaleci.jpg','quarters','#f4d11a','#b91e29','#151818','euroil','umbro','#5091ac','#30768f','#122a36'],
  ['7656','rizespor','rizespor.jpg','rizespor kaleci.jpg','stripes','#193d86','#156541','#ffffff','ÇAYKUR','adidas','#e27572','#f7b4b1','#eeeeee'],
  ['6870','kasimpasa','kasımpaşa.jpg','kasımpaşa kaleci.jpg','pinstripes','#f5f5f2','#1b2645','#1b2645','aksa','adidas','#f07840','#f8b27c','#151515'],
  ['7648','konyaspor','konyaspor.jpg','konyaspor kaleci.jpg','stripes','#f6f6f2','#0a674f','#cb2533','TÜMOSAN','hummel','#22272d','#45505d','#86bf66'],
  ['20070','gaziantep','gaziantep fk.jpg','gaziantep fk kaleci.jpg','stripes','#181a1c','#a81c24','#f2f2ef','none','adidas','#94d6ce','#50b394','#151d20'],
  ['9078','alanyaspor','alanyaspor.jpg','alanyaspor kaleci.jpg','thin-hoops','#f27616','#238849','#ffffff','none','puma','#7a9dce','#202731','#171c23'],
  ['996','genclerbirligi','gençlerbirliği fk.jpg','gençlerbirliği fk kaleci.jpg','stripes','#181a1c','#b01821','#ffffff','ANADOLU HOTELS','nike','#a6a8a7','#d4d5d2','#151515'],
  ['995','kocaelispor','kocaelispor.jpg','kocaelispor kaleci.jpg','shattered-stripes','#115747','#141919','#f5f5f0','SAFİPORT','adidas','#50b6ce','#318da9','#d2cba4'],
  ['20729','eyupspor','eyüpspor.jpg','eyüpspor kaleci.jpg','rough-stripes','#241772','#e1c21a','#e1c21a','none','nike','#46b938','#256a39','#f0f0e7'],
  ['19267','erzurumspor','erzurumspor.jpg','erzurumspor kaleci.jpg','stripes','#f5f5f0','#79bfe7','#141c25','AŞKALE ÇİMENTO','umbro','#b6e4df','#9ed3c9','#192b31'],
  ['132334','corum','çorum fk.jpg','çorum fk kaleci.jpg','stripes','#141719','#b41f25','#f5f3ef','ARCA','joma','#95de55','#428730','#101811']
 ];
 window.ArenaTurkishKitReferences=entries.map(([id,slug,field,keeper])=>({id,slug,field,keeper}));
 for(const [id,slug,field,keeper,pattern,shirt,stripe,trim,sponsor,brand,gk,gkStripe,gkTrim] of entries){
  const team=window.ARENA_TEAMS.find(t=>t.espnId===id);if(!team)continue;
  const common={brand,sponsor,referenceComplete:true};
  team.kit={...common,pattern,shirt,stripe,trim,collar:pattern==='stripes'&&id==='11429'?'#ba1823':shirt,shorts:['11429','7648','19267'].includes(id)?'#f1f2ed':shirt,shortTrim:trim,socks:shirt,sponsorInk:trim,stripeWidth:id==='20070'?4:8,stripeGap:id==='20070'?9:16,reference:`assets/kit-references/${slug}-field.jpg`};
  if(id==='997')Object.assign(team.kit,{sponsorInk:'#d9ba70',sleeve:'#76172b',collar:'#86bce7'});
  if(id==='7648')team.kit.sponsorInk='#cb2533';
  if(id==='6870')team.kit.sponsorInk='#1b2645';
  if(id==='789')Object.assign(team.kit,{sponsorInk:'#141819',collar:'#151818'});
  if(id==='11429')Object.assign(team.kit,{trim:'#f5f5ef',sponsorInk:'#17191b',sleeve:'#f5f5ef'});
  if(id==='20070')team.kit.sideSponsor='arkın group';
  if(brand==='adidas')team.kit.shoulder=trim;
  if(id==='995')Object.assign(team.kit,{sponsorInk:'#248dba',sponsorPanel:'#ffffff'});
  team.keeperKit={...common,pattern:['7914','9078'].includes(id)?'sleeve-zigzag':id==='20729'?'slashes':['11429','7648'].includes(id)?'marble':'contours',shirt:gk,stripe:gkStripe,trim:gkTrim,shorts:gk,socks:gk,shortTrim:gkTrim,collar:id==='997'?'#151b17':gk,longSleeves:true,keeper:true,hemPattern:['6870','7656','20070','995'].includes(id),sponsorInk:gkTrim,reference:`assets/kit-references/${slug}-keeper.jpg`};
  if(['789','995','19267','7914','9078','7648','11429','996'].includes(id))team.keeperKit.sponsor='none';
  if(id==='7648')team.keeperKit.collar='#9f2d63';
  team.kitPending=false;
 }
})();
