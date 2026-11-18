// Selected 2026/27 players: sources and artwork notes in UCL_SOURCES.md.
(() => {
  const squads = [
    ['LONDRA TOPÇULARI','TOP','LONDRA','#df2336','#ffffff', [['Bukayo Saka',7],['Declan Rice',41],['Martin Ødegaard',8],['David Raya',1]]],
    ['LONDRA MAVİ','LMV','LONDRA','#164cbe','#ffffff', [['Cole Palmer',10],['Morgan Rogers',17],['João Pedro',20],['Emiliano Martínez',1]]],
    ['MİLANO GECE','MGE','MİLANO','#1763c1','#101722', [['Lautaro Martínez',10],['Marcus Thuram',9],['Nicolò Barella',23],['Josep Martínez',1]]],
    ['MADRİT KIRMIZI','MKR','MADRİD','#d3293e','#ffffff', [['Julián Álvarez',19],['Álex Baena',10],['Giuliano Simeone',20],['Jan Oblak',13]]]
  ];
  squads.forEach(([name,short,city,color,dark,members],i)=>{
    const make=(entry,j)=>({name:entry[0],realName:entry[0],number:entry[1],id:`europe-${i}-${j}`,portrait:-1,
      gamePortrait:{sheet:'assets/player-heads-europe.png',cell:i*4+j,columns:4,rows:4},
      skin:[0,5,6,9].includes(i*4+j)?'#a47553':'#d4a585',hair:'#29201c',style:'crop',speed:j===3?6:9,shot:j===3?6:9,jump:8,goalkeeper:j===3,
      traits:{title:j===3?'Kaleci':'Teknik yıldız',power:1,aggression:.95,rainbow:j===0,fragility:1}});
    const roster=members.map(make);
    window.ARENA_TEAMS.push({name,short,city,color,dark,players:roster.slice(0,3),keeper:roster[3],category:'club',crestScale:i===3?1.12:1,coach:{name:'Teknik ekip'},crest:`assets/crests/${['ars','che','int','atm'][i]}.png`});
  });
})();
