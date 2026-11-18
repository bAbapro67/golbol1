// Native canvas designs transcribed from the user's Portuguese, Dutch, Belgian and Scottish references.
(()=>{
 const entries=[
 ['12698','famalicao','famalicao','famalicao','contours','#c6e3d5','#b49a47','#af9240','bwin','puma','slashes','#151b1e','#7a858b','#eeeeee'],
 ['5309','vitoria','vitoria sc','vitoria sc','white','#151719','#25272a','#ffffff','PLACARD.PT','hummel','shards','#ed1773','#822767','#ffffff'],
 ['2994','braga','sc braga','sc braga','contours','#742238','#873048','#c7ac79','SOLVERDE.PT','puma','marble','#07506a','#1fabc1','#ffffff'],
 ['2250','sporting','sporting cp','sporting cp','hoops','#175641','#ffffff','#ffffff','Betano','nike','white','#194c3d','#194c3d','#d8bd69'],
 ['437','porto','fc porto','fc porto','stripes','#fafafa','#0755b4','#ffffff','Betano','newbalance','pinstripes','#421329','#561f38','#ffffff'],
 ['1929','benfica','sl benfica',null,'white','#f04448','#f04448','#ffffff','emirates','adidas'],
 ['148','psv','psv','psv','stripes','#d70918','#ffffff','#13171a','BRAINPORT EINDHOVEN','puma','white','#f5f1f0','#a76bc1','#ff8059'],
 ['142','feyenoord','feyenoord','feyenoord','halves','#e01926','#ffffff','#14181a','MediaMarkt','castore','marble','#83f345','#54cf30','#14181a'],
 ['152','twente','fc twente','fc twente','pinstripes','#ef2537','#db1d30','#ffffff','ggmgastro','castore','marble','#73f447','#28cd34','#131a17'],
 ['140','alkmaar','az alkmaar','az alkmaar','contours','#ee5458','#d44449','#ffffff','AFAS software','nike','zigzag','#6834c3','#b476db','#ffffff'],
 ['139','ajax','afc ajax','afc ajax','paris','#ffffff','#b51c32','#ffffff','Ziggo','adidas','contours','#262829','#485053','#e5e3db'],
 ['5807','union','royale union saint gilloise','royale union sait gilloise','pinstripes','#39794c','#173b3a','#c5b861','Orange','oneills','white','#121715','#121715','#6ce0bc'],
 ['3611','gent','kaa gent','kaa gent','lettering','#084998','#2579b4','#ffffff','baloise','craft','lettering','#232126','#47434a','#ffffff'],
 ['938','genk','krc genk','krc genk','halves','#174aba','#2787e5','#ffffff','beobank','nike','zigzag','#f8e637','#ffc745','#121818'],
 ['441','anderlecht','rsc anderlecht','rsc anderlecht','white','#eeeaf7','#e2dbee','#523c87','Sunweb','adidas','white','#158457','#239568','#34465f'],
 ['570','brugge','club brugge','club brugge','stripes','#161b21','#087ccc','#ffffff','betsson.sport','castore','marble','#ffbd18','#ef9520','#25272a'],
 ['257','rangers','rangers fc','rangers fc','pinstripes','#075aa7','#ffffff','#ffffff','UNIBET','umbro','contours','#f2f2f3','#76d7de','#171b20'],
 ['258','hibernian','hibernian fc','hibernian','white','#2c6755','#2c6755','#ffffff','bevvy.com','reebok','shards','#f5a9b9','#e086a1','#151719'],
 ['262','hearts','hearts','hearts','white','#592237','#592237','#ffffff','Stellar Omada','hummel','shards','#fc6f20','#ffb147','#ffffff'],
 ['256','celtic','celtic fc','celtic fc','hoops','#fafafa','#22986c','#c7ae66','dafabet','adidas','contours','#f2e23a','#fff39d','#111a16']
 ];
 window.ArenaEuropeanKitReferences=entries.map(([id,slug,field,keeper])=>({id,slug,field:field+'.jpg',keeper:keeper?keeper+' kaleci.jpg':null}));
 for(const [id,slug,field,keeper,pattern,shirt,stripe,trim,sponsor,brand,gkPattern,gk,gkStripe,gkTrim] of entries){
  const team=window.ARENA_TEAMS.find(t=>t.espnId===id);if(!team)continue;
  const common={brand,sponsor,referenceComplete:true};
  team.kit={...common,pattern,shirt,stripe,trim,collar:trim,sleeve:shirt,shorts:shirt,shortTrim:trim,socks:shirt,sponsorInk:trim,stripeWidth:9,stripeGap:18,reference:`assets/kit-references/${slug}-field.jpg`};
  if(brand==='adidas')team.kit.shoulder=trim;
  if(['5309','437','257','258','262'].includes(id))team.kit.collarType='polo';
  if(id==='12698')Object.assign(team.kit,{collar:shirt,sponsorInk:'#af9240',crestCenter:true});
  if(id==='2250')Object.assign(team.kit,{collarType:'polo',sleeve:shirt});
  if(id==='2994')team.kit.collar=shirt;
  if(id==='139')Object.assign(team.kit,{sponsorInk:'#ffffff',sleeve:'#ffffff',collar:'#ffffff',centerStripeWidth:25});
  if(id==='140')team.kit.sleeve='#ffffff';
  if(id==='258')Object.assign(team.kit,{sleeve:'#ffffff',collarType:'polo'});
  if(id==='5807')Object.assign(team.kit,{collar:'#213252',trim:'#213252',sponsorInk:'#c5b861',collarType:'polo'});
  if(keeper){
   team.keeperKit={...common,pattern:gkPattern,shirt:gk,stripe:gkStripe,trim:gkTrim,collar:gkTrim,shorts:gk,shortTrim:gkTrim,socks:gk,sponsorInk:gkTrim,keeper:true,longSleeves:id==='139',reference:`assets/kit-references/${slug}-keeper.jpg`};
   if(['12698','2994','441'].includes(id))team.keeperKit.collar=gk;
   if(id==='437')Object.assign(team.keeperKit,{collar:gk,collarType:'polo'});
   if(id==='441')Object.assign(team.keeperKit,{sleeve:'#34465f',collar:'#34465f',shoulder:'#8adbc4'});
   if(id==='148')Object.assign(team.keeperKit,{sponsorInk:'#f76998',sleeve:gk,collar:'#ff8059'});
   if(id==='258')Object.assign(team.keeperKit,{sidePanel:'#141819',sponsorInk:'#141819',collar:gk});
   if(id==='257')team.keeperKit.secondaryPatternInk='#dadb51';
   team.kitPending=false;
  }
  else team.kitPending=true;
 }
})();
