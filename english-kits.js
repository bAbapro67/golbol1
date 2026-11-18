// Designs from the user's 22 English club shirt photographs.
(()=>{
const entries=[
 ['367','tottenham','tottenham hotspur','white','#f6f6f7','#ececf0','#24264f','AIA','nike','zigzag','#f73d92','#785eb1','#ffffff'],
 ['393','forest','nottingham forest','marble','#d61c2b','#b21d27','#ffffff','MAREX','adidas','contours','#153f3e','#23504c','#ed2737'],
 ['361','newcastle','newcastle united','stripes','#161b1e','#f4f3ee','#76c8dc','KNOX HYDRATE','adidas','white','#cfb6da','#cfb6da','#302341'],
 ['360','manunited','manchester united','contours','#cf1731','#b71b2d','#ffffff','Snapdragon','adidas','contours','#17191b','#42464a','#c4c7c4'],
 ['370','fulham','fulham fc','white','#f4f3fa','#eeeef2','#171b25','ClickHouse','adidas','contours','#329bdd','#66bce8','#9cdaed'],
 ['368','everton','everton fc','white','#203aae','#203aae','#ffffff','CMC MARKETS','castore','marble','#8bed63','#5dce44','#171d17'],
 ['384','palace','crystal palace','shattered-stripes','#1448b1','#e3183a','#ffffff','Temporal','macron','shards','#54d964','#2cba53','#101b16'],
 ['331','brighton','brighton hove albion','pinstripes','#0954aa','#ffffff','#ffffff','AMERICAN EXPRESS','nike','zigzag','#f34c99','#8170b5','#ffffff'],
 ['337','brentford','brentford fc','stripes','#d20e32','#f7f5f5','#e5b647','indeed','joma','marble','#b882c1','#6f467e','#211726'],
 ['362','villa','aston villa','white','#641c32','#641c32','#b5d4e9','VISIT RWANDA','adidas','contours','#2b2c31','#44464b','#ddc478'],
 ['359','arsenal','arsenal fc','white','#de1432','#c81532','#ffffff','emirates','adidas','contours','#c9c9c6','#e1e0db','#191b1c']
];
window.ArenaEnglishKitReferences=entries.map(([id,slug,file])=>({id,slug,field:file+'.jpg',keeper:file+' kaleci.jpg'}));
for(const [id,slug,file,pattern,shirt,stripe,trim,sponsor,brand,gkPattern,gk,gkStripe,gkTrim] of entries){
 const team=id==='359'?window.ARENA_TEAMS[12]:window.ARENA_TEAMS.find(t=>t.espnId===id);if(!team)continue;
 const common={brand,sponsor,referenceComplete:true};
 team.kit={...common,pattern,shirt,stripe,trim,collar:shirt,shorts:shirt,shortTrim:trim,socks:shirt,sponsorInk:trim,stripeWidth:id==='361'?7:9,stripeGap:id==='361'?13:18,reference:`assets/kit-references/${slug}-field.jpg`};
 team.keeperKit={...common,pattern:gkPattern,shirt:gk,stripe:gkStripe,trim:gkTrim,collar:gk,shorts:gk,socks:gk,shortTrim:gkTrim,sponsorInk:gkTrim,keeper:true,longSleeves:['360','370'].includes(id),hemPattern:['360','370','359'].includes(id),reference:`assets/kit-references/${slug}-keeper.jpg`};
 if(brand==='adidas'){team.kit.shoulder=trim;team.keeperKit.shoulder=gkTrim;}
 if(id==='367')Object.assign(team.kit,{sponsorInk:'#b91f3b',sidePanel:'#252748'});
 if(id==='393')Object.assign(team.keeperKit,{collar:gkTrim,sponsorInk:'#ffffff'});
 if(id==='361'){team.kit.collar='#181e21';team.kit.sponsorInk='#ffffff';team.keeperKit.collar=gkTrim;}
 if(id==='360')Object.assign(team.kit,{collarType:'polo',collar:'#f2f2ed'});
 if(id==='370')Object.assign(team.kit,{collar:'#151a24'});
 if(id==='368'){team.kit.collar='#f1d642';team.keeperKit.collar='#171d17';}
 if(id==='337'){Object.assign(team.kit,{sleeve:shirt,sponsorInk:'#211726',collar:'#211726'});team.keeperKit.sidePanel='#211726';}
 if(id==='362'){Object.assign(team.kit,{collarType:'polo',collar:trim,sponsorInk:'#ffffff'});team.keeperKit.shoulder=gkTrim;}
 if(id==='359')Object.assign(team.kit,{sleeve:'#ffffff',collar:'#811c30',shoulder:'#811c30'});
 team.kitPending=false;
}
})();
