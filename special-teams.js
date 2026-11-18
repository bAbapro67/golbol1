// User-created fantasy teams; ratings are game balancing, portraits are generated likenesses.
(()=>{
  const anchors = {"caglar-burak":[0.48838,0.95375,0.04784688995215311,0.956140350877193],"batu":[0.50265,0.98804,0.03668261562998405,0.9904306220095693],"yaman":[0.50087,0.95694,0.050239234449760764,0.9593301435406698],"demirkan":[0.48895,0.97448,0.024720893141945772,0.9768740031897927],"mehmet-ege":[0.50465,0.94418,0.06060606060606061,0.9465709728867624]};
  const head = id => ({sheet:`assets/special-teams/bfk/${id}-head.png`,cell:0,columns:1,rows:1,transparentHead:true,headAnchor:anchors[id]});
  const player = (name,id,number,title,skin) => ({name,realName:name,number,portrait:-1,skin,hair:'#26211e',style:'short',speed:8,shot:8,jump:8,overall:88,gamePortrait:head(id),traits:{title,power:1,aggression:1,fragility:1,rainbow:false}});
  const kit = (keeper=false) => ({pattern:'bfk-sweeps',shirt:keeper?'#f3348d':'#101113',stripe:keeper?'#dc2878':'#252629',trim:'#ffffff',collar:keeper?'#f3348d':'#101113',collarAccent:'#ffffff',sleeve:keeper?'#f3348d':'#101113',sleeveTrim:'#ffffff',shorts:keeper?'#f3348d':'#101113',shortTrim:'#ffffff',socks:keeper?'#f3348d':'#101113',brand:'diadora',sponsor:'none',keeper,longSleeves:keeper,crestSize:14,referenceComplete:true,reference:`assets/special-teams/bfk/${keeper?'keeper':'field'}-reference.jpg`});
  const team={name:'BFK',realName:'Bahçeşehir FK',short:'BFK',city:'Bahçeşehir',country:'Özel Takımlar',category:'special',color:'#f3348d',dark:'#101113',crest:'assets/special-teams/bfk/crest.jpg',
    players:[player('Yaman Karatepe','yaman',7,'Çalım ustası','#c99b7c'),player('Demirkan Demirel','demirkan',10,'Oyun kurucu','#cfa58e'),player('Mehmet Ege M.','mehmet-ege',9,'Bitirici','#cba082')],
    keeper:{...player('Batu Karatepe','batu',1,'Kaleci','#cfab8e'),goalkeeper:true,shot:6,jump:9},
    coach:{name:'Çağlar Burak',realName:'Çağlar Burak',skin:'#cfa58e',hair:'#26211e',head:{sheet:'assets/special-teams/bfk/caglar-burak-head.png',crop:[0,0,1,1]}},
    stadium:{name:'BFK Arenası',city:'Bahçeşehir',architecture:'bowl',seat:'#101113',trim:'#f3348d'},kit:kit(),keeperKit:kit(true),kitPending:false,
    performance:{overall:88,squadRating:88,form:1,source:'Özel takım oyun dengesi'},portraitSource:'User reference likenesses generated with built-in imagegen'};
  // Append after existing special teams so their stored indices remain stable.
  window.addBFKTeam=()=>{window.ARENA_TEAMS.push(team);window.ArenaSpecialTeams.push(team);delete window.addBFKTeam;};
})();
(()=>{
const team={
  "name": "ICONS TEA",
  "realName": "ICONS TEA",
  "short": "ICON",
  "city": "Efsaneler",
  "country": "Özel Takımlar",
  "category": "special",
  "color": "#d3091a",
  "dark": "#81101a",
  "crest": "assets/special-teams/icons-crest.svg",
  "players": [
    {
      "name": "Ronaldinyo",
      "realName": "Ronaldinho",
      "number": 10,
      "skin": "#b58361",
      "hair": "#171719",
      "style": "curl",
      "portrait": -1,
      "speed": 10,
      "shot": 9,
      "jump": 9,
      "overall": 97,
      "gamePortrait": {
        "sheet": "assets/special-teams/icons-heads-v2.png",
        "cell": 0,
        "columns": 3,
        "rows": 2,
        "transparentHead": true,
        "headAnchor": [
          0.55243,
          0.91602,
          0.078125,
          0.921875
        ]
      },
      "traits": {
        "title": "Çalım ustası",
        "rainbow": true,
        "power": 1.02,
        "aggression": 0.85,
        "fragility": 1
      }
    },
    {
      "name": "Peléo",
      "realName": "Pelé",
      "number": 10,
      "skin": "#855c43",
      "hair": "#171719",
      "style": "curl",
      "portrait": -1,
      "speed": 10,
      "shot": 10,
      "jump": 10,
      "overall": 97,
      "gamePortrait": {
        "sheet": "assets/special-teams/icons-heads-v2.png",
        "cell": 1,
        "columns": 3,
        "rows": 2,
        "transparentHead": true,
        "headAnchor": [
          0.49493,
          0.9043,
          0.0546875,
          0.91015625
        ]
      },
      "traits": {
        "title": "Efsane bitirici",
        "rainbow": false,
        "power": 1.12,
        "aggression": 0.85,
        "fragility": 1
      }
    },
    {
      "name": "Diego Maradono",
      "realName": "Diego Maradona",
      "number": 10,
      "skin": "#c59476",
      "hair": "#171719",
      "style": "curl",
      "portrait": -1,
      "speed": 10,
      "shot": 9,
      "jump": 8,
      "overall": 97,
      "gamePortrait": {
        "sheet": "assets/special-teams/icons-heads-v2.png",
        "cell": 2,
        "columns": 3,
        "rows": 2,
        "transparentHead": true,
        "headAnchor": [
          0.48612,
          0.91797,
          0.09375,
          0.923828125
        ]
      },
      "traits": {
        "title": "Sol ayak maestrosu",
        "rainbow": true,
        "power": 1.04,
        "aggression": 0.85,
        "fragility": 1
      }
    }
  ],
  "keeper": {
    "name": "Gianluigi Buffan",
    "realName": "Gianluigi Buffon",
    "number": 1,
    "portrait": -1,
    "skin": "#c99c7c",
    "hair": "#252019",
    "speed": 9,
    "shot": 7,
    "jump": 10,
    "overall": 96,
    "goalkeeper": true,
    "gamePortrait": {
      "sheet": "assets/special-teams/icons-heads-v2.png",
      "cell": 3,
      "columns": 3,
      "rows": 2,
      "transparentHead": true,
      "headAnchor": [
        0.53515,
        0.90039,
        0.021484375,
        0.90625
      ]
    },
    "traits": {
      "title": "Efsane kaleci",
      "power": 1,
      "aggression": 1,
      "fragility": 1,
      "rainbow": false
    }
  },
  "coach": {
    "name": "Zinedin Zidano",
    "realName": "Zinedine Zidane",
    "skin": "#cba181",
    "hair": null,
    "beard": true,
    "head": {
      "sheet": "assets/special-teams/icons-heads-v2.png",
      "cell": 4,
      "crop": [
        0.3833333333333333,
        0.5224609375,
        0.2333333333333333,
        0.427734375
      ]
    },
    "portraitEra": "Güncel teknik direktör görünümü"
  },
  "stadium": {
    "name": "Icons Arenası",
    "city": "Efsaneler",
    "architecture": "bowl",
    "seat": "#b90c24",
    "trim": "#c7a655"
  },
  "kit": {
    "pattern": "diagonal-knit",
    "shirt": "#c90013",
    "stripe": "#e01928",
    "trim": "#ffffff",
    "collar": "#bc0013",
    "sleeve": "#c90013",
    "sleeveTrim": "#e01928",
    "sidePanel": "#df1422",
    "shorts": "#c90013",
    "shortTrim": "#e01928",
    "socks": "#c90013",
    "sponsor": "none",
    "brand": "nike",
    "referenceComplete": true,
    "reference": "assets/kit-references/icons-tea-field.jpg",
    "keeper": false,
    "longSleeves": false,
    "crestStars": 3,
    "crestStarInk": "#c7a655"
  },
  "keeperKit": {
    "pattern": "diagonal-knit",
    "shirt": "#f7f7f7",
    "stripe": "#e8e8e8",
    "trim": "#df1422",
    "collar": "#f7f7f7",
    "collarAccent": "#df1422",
    "sleeve": "#f7f7f7",
    "sleeveTrim": "#df1422",
    "sidePanel": "#df1422",
    "shorts": "#f7f7f7",
    "shortTrim": "#df1422",
    "socks": "#f7f7f7",
    "sponsor": "none",
    "brand": "nike",
    "referenceComplete": true,
    "reference": "assets/kit-references/icons-tea-keeper.jpg",
    "keeper": true,
    "longSleeves": false,
    "crestStars": 3,
    "crestStarInk": "#c7a655"
  },
  "kitPending": false,
  "performance": {
    "overall": 96,
    "squadRating": 96,
    "form": 1,
    "source": "Özel takım oyun dengesi"
  },
  "portraitEras": [
    "Ronaldinho · 2005",
    "Pelé · 1970",
    "Maradona · 1986",
    "Buffon · 2006",
    "Zidane · güncel"
  ],
  "portraitSource": "AI-generated photorealistic likeness sprites"
};
window.ARENA_TEAMS.push(team);
window.ArenaSpecialTeams=[team];
})();

(()=>{
const team={
  "name": "STREAMERS",
  "realName": "Streamers",
  "short": "STRM",
  "city": "Yayıncılar",
  "country": "Özel Takımlar",
  "category": "special",
  "color": "#8ed8f7",
  "dark": "#143f63",
  "crest": "assets/special-teams/streamers-crest.svg",
  "players": [
    {
      "name": "IShowSpeed",
      "realName": "IShowSpeed",
      "number": 7,
      "skin": "#8e503c",
      "hair": "#131313",
      "style": "curl",
      "portrait": -1,
      "speed": 10,
      "shot": 10,
      "jump": 10,
      "overall": 95,
      "gamePortrait": {
        "sheet": "assets/special-teams/streamers-heads.png",
        "cell": 0,
        "columns": 3,
        "rows": 2,
        "transparentHead": true,
        "headAnchor": [
          0.5,
          0.94,
          0.01,
          0.96
        ]
      },
      "traits": {
        "title": "Yayıncı çalımcı",
        "rainbow": true,
        "power": 1.1,
        "aggression": 0.9,
        "fragility": 1
      }
    },
    {
      "name": "Kai Cenat",
      "realName": "Kai Cenat",
      "number": 10,
      "skin": "#8a5038",
      "hair": "#191515",
      "style": "curl",
      "portrait": -1,
      "speed": 10,
      "shot": 9,
      "jump": 9,
      "overall": 95,
      "gamePortrait": {
        "sheet": "assets/special-teams/streamers-heads.png",
        "cell": 1,
        "columns": 3,
        "rows": 2,
        "transparentHead": true,
        "headAnchor": [
          0.5,
          0.94,
          0.01,
          0.96
        ]
      },
      "traits": {
        "title": "Yayıncı çalımcı",
        "rainbow": true,
        "power": 1.1,
        "aggression": 0.9,
        "fragility": 1
      }
    },
    {
      "name": "Lacy",
      "realName": "Lacy",
      "number": 9,
      "skin": "#d9a38e",
      "hair": "#4a372c",
      "style": "crop",
      "portrait": -1,
      "speed": 9,
      "shot": 10,
      "jump": 9,
      "overall": 95,
      "gamePortrait": {
        "sheet": "assets/special-teams/streamers-heads.png",
        "cell": 2,
        "columns": 3,
        "rows": 2,
        "transparentHead": true,
        "headAnchor": [
          0.5,
          0.94,
          0.01,
          0.96
        ]
      },
      "traits": {
        "title": "Yayıncı bitirici",
        "rainbow": false,
        "power": 1.1,
        "aggression": 0.9,
        "fragility": 1
      }
    }
  ],
  "keeper": {
    "name": "xQc",
    "realName": "xQc",
    "number": 1,
    "skin": "#e5b69c",
    "hair": "#e7d5a6",
    "style": "curl",
    "portrait": -1,
    "speed": 9,
    "shot": 8,
    "jump": 10,
    "overall": 95,
    "gamePortrait": {
      "sheet": "assets/special-teams/streamers-heads.png",
      "cell": 3,
      "columns": 3,
      "rows": 2,
      "transparentHead": true,
      "headAnchor": [
        0.5,
        0.94,
        0.01,
        0.96
      ]
    },
    "traits": {
      "title": "Yayıncı kaleci",
      "rainbow": false,
      "power": 1,
      "aggression": 1,
      "fragility": 1
    },
    "goalkeeper": true
  },
  "coach": {
    "name": "KingSammelot",
    "realName": "KingSammelot",
    "skin": "#cca38e",
    "hair": "#28201b",
    "head": {
      "sheet": "assets/special-teams/streamers-heads.png",
      "cell": 4,
      "crop": [
        0.3333333333333333,
        0.5,
        0.3333333333333333,
        0.5
      ]
    },
    "portraitEra": "2026 referans görünümü"
  },
  "stadium": {
    "name": "Streamers Arenası",
    "city": "Yayıncılar",
    "architecture": "bowl",
    "seat": "#59bfea",
    "trim": "#def7ff"
  },
  "kit": {
    "pattern": "white",
    "shirt": "#8ed8f7",
    "stripe": "#8ed8f7",
    "trim": "#ffffff",
    "collar": "#61b9df",
    "sleeve": "#8ed8f7",
    "sleeveTrim": "#ffffff",
    "shorts": "#8ed8f7",
    "shortTrim": "#ffffff",
    "socks": "#8ed8f7",
    "sponsor": "none",
    "brand": "none",
    "referenceComplete": true,
    "crestCenter": true,
    "crestSize": 32
  },
  "keeperKit": {
    "pattern": "streamer-symbols",
    "shirt": "#000000",
    "stripe": "#82909b",
    "trim": "#d6eaf5",
    "collar": "#000000",
    "sleeve": "#000000",
    "sleeveTrim": "#000000",
    "shorts": "#000000",
    "shortTrim": "#000000",
    "socks": "#000000",
    "sponsor": "none",
    "brand": "none",
    "referenceComplete": true,
    "crestCenter": true,
    "crestSize": 32,
    "keeper": true,
    "longSleeves": true
  },
  "kitPending": false,
  "performance": {
    "overall": 95,
    "squadRating": 95,
    "form": 1,
    "source": "Özel takım oyun dengesi"
  },
  "portraitSource": "AI-generated portrait cutouts with 2026 appearance references"
};
window.ARENA_TEAMS.push(team);
window.ArenaSpecialTeams.push(team);
})();

(()=>{const team={
  "name": "AI",
  "realName": "AI",
  "short": "AI",
  "city": "Yapay Zeka",
  "country": "Özel Takımlar",
  "category": "special",
  "color": "#e7d8bc",
  "dark": "#54182d",
  "crest": "assets/special-teams/ai/crest.svg",
  "players": [
    {
      "name": "ChatGPT",
      "realName": "ChatGPT",
      "number": 10,
      "portrait": -1,
      "skin": "#10a17f",
      "hair": "#29252b",
      "style": "crop",
      "speed": 10,
      "shot": 10,
      "jump": 10,
      "overall": 96,
      "gamePortrait": {
        "sheet": "assets/special-teams/ai/chatgpt-head.svg",
        "cell": 0,
        "columns": 1,
        "rows": 1,
        "circleHead": true
      },
      "traits": {
        "title": "AI yıldızı",
        "rainbow": true,
        "power": 1.1,
        "aggression": 0.9,
        "fragility": 1
      }
    },
    {
      "name": "Gemini",
      "realName": "Gemini",
      "number": 7,
      "portrait": -1,
      "skin": "#619bcf",
      "hair": "#29252b",
      "style": "crop",
      "speed": 10,
      "shot": 10,
      "jump": 10,
      "overall": 96,
      "gamePortrait": {
        "sheet": "assets/special-teams/ai/gemini-head.svg",
        "cell": 0,
        "columns": 1,
        "rows": 1,
        "circleHead": true
      },
      "traits": {
        "title": "AI yıldızı",
        "rainbow": true,
        "power": 1.1,
        "aggression": 0.9,
        "fragility": 1
      }
    },
    {
      "name": "Claude",
      "realName": "Claude",
      "number": 9,
      "portrait": -1,
      "skin": "#d77755",
      "hair": "#29252b",
      "style": "crop",
      "speed": 10,
      "shot": 10,
      "jump": 10,
      "overall": 96,
      "gamePortrait": {
        "sheet": "assets/special-teams/ai/claude-head.svg",
        "cell": 0,
        "columns": 1,
        "rows": 1,
        "circleHead": true
      },
      "traits": {
        "title": "AI yıldızı",
        "rainbow": true,
        "power": 1.1,
        "aggression": 0.9,
        "fragility": 1
      }
    }
  ],
  "keeper": {
    "name": "Kimi AI",
    "realName": "Kimi AI",
    "number": 1,
    "portrait": -1,
    "skin": "#e7d8bc",
    "hair": "#29252b",
    "style": "crop",
    "speed": 10,
    "shot": 10,
    "jump": 10,
    "overall": 96,
    "gamePortrait": {
      "sheet": "assets/special-teams/ai/kimi-head.svg",
      "cell": 0,
      "columns": 1,
      "rows": 1,
      "circleHead": true
    },
    "traits": {
      "title": "AI kaleci",
      "rainbow": false,
      "power": 1,
      "aggression": 1,
      "fragility": 1
    },
    "goalkeeper": true
  },
  "coach": {
    "name": "Kumru AI",
    "realName": "Kumru AI",
    "skin": "#d4c7a9",
    "hair": null,
    "head": {
      "sheet": "assets/special-teams/ai/kumru-head.svg",
      "crop": [
        0,
        0,
        1,
        1
      ],
      "roundHead": true
    }
  },
  "stadium": {
    "name": "AI Arenası",
    "city": "Yapay Zeka",
    "architecture": "bowl",
    "seat": "#671c3a",
    "trim": "#e7d8bc"
  },
  "kit": {
    "pattern": "white",
    "shirt": "#e7d8bc",
    "stripe": "#e7d8bc",
    "trim": "#5b1934",
    "collar": "#5b1934",
    "sleeve": "#e7d8bc",
    "sleeveTrim": "#5b1934",
    "shorts": "#e7d8bc",
    "shortTrim": "#5b1934",
    "socks": "#e7d8bc",
    "sponsor": "none",
    "brand": "none",
    "referenceComplete": true
  },
  "keeperKit": {
    "pattern": "white",
    "shirt": "#671c3a",
    "stripe": "#671c3a",
    "trim": "#e7d8bc",
    "collar": "#e7d8bc",
    "sleeve": "#671c3a",
    "sleeveTrim": "#e7d8bc",
    "shorts": "#671c3a",
    "shortTrim": "#e7d8bc",
    "socks": "#671c3a",
    "sponsor": "none",
    "brand": "none",
    "referenceComplete": true,
    "keeper": true,
    "longSleeves": true
  },
  "kitPending": false,
  "performance": {
    "overall": 96,
    "squadRating": 96,
    "form": 1,
    "source": "Özel takım oyun dengesi"
  },
  "portraitSource": "User-provided original images in circular SVG clips"
};window.ARENA_TEAMS.push(team);window.ArenaSpecialTeams.push(team);})();
window.addBFKTeam();
(()=>{
  const anchors={"spider-man":[0.51059,0.91054,0.043478260869565216,0.91304347826086951],"iron-man":[0.49507,0.96948,0.028951486697965573,0.971830985915493],"captain-america":[0.50666,0.9331,0.027758007117437724,0.9352313167259787],"thor":[0.50524,0.91132,0.030087094220110848,0.91369754552652416],"hulk-normal":[0.53288,0.92521,0.04843304843304843,0.92735042735042739]};
  const head=id=>({sheet:`assets/special-teams/avengers/${id}-v2.png`,cell:0,columns:1,rows:1,transparentHead:true,headAnchor:anchors[id]});
  const player = (name,id,number,skin,hair) => ({name,realName:name,number,portrait:-1,skin,hair,style:'short',speed:8,shot:8,jump:8,overall:88,gamePortrait:head(id),traits:{title:name,power:1,aggression:1,fragility:1,rainbow:false}});
  const kit = keeper => ({pattern:'shards',shirt:keeper?'#cf2439':'#572a88',stripe:keeper?'#2453a7':'#7446a4',trim:keeper?'#ffffff':'#e7ba59',collar:keeper?'#2453a7':'#291746',sleeve:keeper?'#cf2439':'#572a88',sleeveTrim:keeper?'#2453a7':'#e7ba59',shorts:keeper?'#2453a7':'#291746',shortTrim:keeper?'#cf2439':'#e7ba59',socks:keeper?'#cf2439':'#572a88',brand:'none',sponsor:'none',keeper,longSleeves:keeper,crestSize:20,referenceComplete:true});
  const team={name:'AVENGERS',realName:'AVENGERS',short:'AVNG',city:'New York',country:'Özel Takımlar',category:'special',color:'#a577d5',dark:'#291746',crest:'assets/special-teams/avengers/crest.png',
    players:[player('Hulk','hulk-normal',7,'#ceac8f','#303132'),player('Captain America','captain-america',10,'#d7aa87','#654b30'),player('Thor','thor',9,'#e1b190','#d5b44d')],
    keeper:{...player('Spider-Man','spider-man',1,'#d1a18b','#372921'),goalkeeper:true,jump:9},
    coach:{name:'Iron Man',realName:'Iron Man',skin:'#c59d80',hair:'#30241f',head:{sheet:'assets/special-teams/avengers/iron-man-v2.png',crop:[0,.028951486697965573,1,.9428794992175274]}},
    stadium:{name:'Avengers Arena',city:'New York',architecture:'bowl',seat:'#572a88',trim:'#e7ba59'},kit:kit(false),keeperKit:kit(true),kitPending:false,
    performance:{overall:88,squadRating:88,form:1,source:'Özel takım oyun dengesi'},portraitSource:'User reference faces prepared with imagegen'};
  window.ARENA_TEAMS.push(team);window.ArenaSpecialTeams.push(team);
})();
// Separate from the regular Galata Aslanları squad.
(()=>{
  const base='assets/special-teams/galatasaray/';
  const field={pattern:'halves',shirt:'#ffa51f',stripe:'#8b002b',trim:'#ffffff',shorts:'#8b002b',shortTrim:'#ffa51f',socks:'#8b002b',collar:'#8b002b',sleeve:'#8b002b',farSleeve:'#ffa51f',brand:'nike',sponsor:'none',crestStars:4,crestStarInk:'#ffce39',turkishBadge:true,referenceComplete:true};
  const langKit={...field,brand:'puma',collarType:'v',collar:'#ffa51f',sleeve:'#ffa51f',farSleeve:'#8b002b',sleeveTrim:'#8b002b',crestStars:5,reference:base+'references/noa-lang-kit.jpg'};
  const zahaKit={...field,sponsor:'SOCAR',sponsorInk:'#ffffff',brandInk:'#8b002b',sleeveSponsor:'TURKISH AIRLINES',reference:base+'references/zaha-kit.jpg'};
  const icardiKit={...field,sponsor:'sixt',sponsorInk:'#171b1e',brandInk:'#171b1e',collar:'#171b1e',chestYoke:'#171b1e',sleeveSponsor:'TUNÇ HOLDİNG',turkishBadge:false,reference:base+'references/icardi-kit.jpg'};
  const keeperKit={pattern:'gs-keeper',shirt:'#009579',stripe:'#00b391',trim:'#ffffff',shorts:'#008572',shortTrim:'#ffffff',socks:'#008572',collar:'#006e5d',sleeve:'#009579',sleeveTrim:'#006e5d',brand:'nike',sponsor:'sixt',sponsorInk:'#ffffff',crestStars:4,crestStarInk:'#ffce39',turkishBadge:true,keeper:true,longSleeves:true,referenceComplete:true,reference:base+'references/muslera-kit.jpg'};
  const anchors={'noa-lang':[.52437,.94976,.023125996810207338,.95215311004784686],zaha:[.49597,.94817,.0430622009569378,.95055821371610849],icardi:[.49166,.88517,.080542264752791068,.88755980861244022],muslera:[.50412,.94099,.051036682615629984,.94338118022328543]};
  const head=id=>({sheet:base+id+'-head.png',cell:0,columns:1,rows:1,transparentHead:true,headAnchor:anchors[id]});
  const player=(name,id,number,skin,hair,kit)=>({name,realName:name,number,portrait:-1,skin,hair,style:'short',speed:8,shot:8,jump:8,overall:88,gamePortrait:head(id),kit,traits:{title:name,power:1,aggression:1,fragility:1,rainbow:false}});
  const team={name:'GALATASARAY',realName:'GALATASARAY',short:'GSO',city:'İstanbul',country:'Özel Takımlar',category:'special',color:'#ffb51b',dark:'#8b002b',crest:base+'crest.svg',
    players:[player('Noa Lang','noa-lang',7,'#dfb294','#9b8a67',langKit),player('Wilfried Zaha','zaha',14,'#784b36','#201b19',zahaKit),player('Mauro Icardi','icardi',9,'#d8b090','#e5e3cf',icardiKit)],
    keeper:{...player('Fernando Muslera','muslera',1,'#d6ac88','#332820'),goalkeeper:true,jump:9},
    coach:{name:'Fatih Terim',realName:'Fatih Terim',skin:'#caa582',hair:'#8c8c83',head:{sheet:base+'fatih-terim-head.png',crop:[0,.071770334928229665,1,.8046251993620415]}},
    stadium:{name:'Galatasaray Arena',city:'İstanbul',architecture:'bowl',seat:'#8b002b',trim:'#ffb51b'},kit:langKit,keeperKit,kitPending:false,
    performance:{overall:88,squadRating:88,form:1,source:'Özel takım oyun dengesi'},portraitSource:'User reference photos prepared with built-in imagegen; Fatih Terim reference from galatasaray.org'};
  window.ARENA_TEAMS.push(team);window.ArenaSpecialTeams.push(team);
})();

// Basketball legends playing football in custom Lakers-inspired kits.
(()=>{
  const base='assets/special-teams/basketlabb/';
  const anchors={"shaquille-oneal":[0.49402,0.94896,0.03189792663476874,0.9513556618819776],"magic-johnson":[0.49945,0.94258,0.03508771929824561,0.9449760765550239],"michael-jordan":[0.51476,0.94179,0.03349282296650718,0.9441786283891547],"lebron-james":[0.51,0.98,0.06,0.99]};
  const head=id=>({sheet:base+id+'-head.'+(id==='lebron-james'?'svg':'png'),cell:0,columns:1,rows:1,transparentHead:true,headAnchor:anchors[id] || [.5,.95,.02,.96]});
  const player=(name,id,number)=>({name,realName:name,number,portrait:-1,skin:'#865338',hair:'#211b18',style:'short',speed:8,shot:8,jump:8,overall:88,gamePortrait:head(id),traits:{title:name,power:1,aggression:1,fragility:1,rainbow:false}});
  const kit=keeper=>({pattern:'basketlabb',shirt:keeper?'#552583':'#fdb927',stripe:keeper?'#fdb927':'#552583',trim:keeper?'#fdb927':'#552583',collar:keeper?'#fdb927':'#552583',collarType:'v',sleeve:keeper?'#552583':'#fdb927',sleeveTrim:'#ffffff',shorts:keeper?'#552583':'#fdb927',shortTrim:keeper?'#fdb927':'#552583',socks:keeper?'#552583':'#fdb927',brand:'none',sponsor:'BasketLabb',sponsorInk:keeper?'#fdb927':'#552583',crestSize:18,keeper,longSleeves:keeper,referenceComplete:true});
  const team={name:'BasketLabb',realName:'BasketLabb',short:'BLAB',city:'Los Angeles',country:'Özel Takımlar',category:'special',color:'#fdb927',dark:'#552583',crest:base+'crest.svg',
    players:[player('Michael Jordan','michael-jordan',23),player('Shaq','shaquille-oneal',34),player('Magic Johnson','magic-johnson',32)],
    keeper:{...player('LeBron James','lebron-james',1),goalkeeper:true,jump:9},
    coach:{name:'Kobe Bryant',realName:'Kobe Bryant',skin:'#9d684a',hair:'#211b18',head:{sheet:base+'kobe-bryant-head.svg',crop:[0,0,1,1]}},
    stadium:{name:'BasketLabb Arena',city:'Los Angeles',architecture:'bowl',seat:'#552583',trim:'#fdb927'},kit:kit(false),keeperKit:kit(true),kitPending:false,
    performance:{overall:88,squadRating:88,form:1,source:'Özel takım oyun dengesi'},portraitSource:'Built-in imagegen basketball legend portraits'};
  team.players[1].realName="Shaquille O'Neal";
  window.ARENA_TEAMS.push(team);window.ArenaSpecialTeams.push(team);
})();

// THEBIG26: portraits from the user's five character references.
(()=>{
  const base='assets/special-teams/thebig26/';
  const anchors={"zias":[0.47743,0.91148,0.07496012759170653,0.9138755980861244],"lapeace":[0.50769,0.96252,0.023923444976076555,0.9649122807017544],"tung-tung-sahur":[0.49938,0.9386,0.03668261562998405,0.9409888357256778],"berberkerim":[0.48822,0.94418,0.03189792663476874,0.9465709728867624],"kwebbelkop":[0.50769,0.84769,0.08293460925039872,0.8500797448165869]};
  const head=id=>({sheet:base+id+'-head.png',cell:0,columns:1,rows:1,transparentHead:true,headAnchor:anchors[id] || [.5,.95,.02,.96]});
  const player=(name,id,number,skin,hair)=>({name,realName:name,number,portrait:-1,skin,hair,style:'short',speed:8,shot:8,jump:8,overall:88,gamePortrait:head(id),traits:{title:name,power:1,aggression:1,fragility:1,rainbow:false}});
  const kit=keeper=>({pattern:'thebig26',shirt:keeper?'#28e3df':'#0c1822',stripe:keeper?'#0c1822':'#28e3df',trim:'#c7ff43',collar:'#c7ff43',collarType:'v',sleeve:keeper?'#28e3df':'#0c1822',sleeveTrim:'#c7ff43',shorts:'#0c1822',shortTrim:keeper?'#28e3df':'#c7ff43',socks:keeper?'#28e3df':'#0c1822',brand:'none',sponsor:'THEBIG26',sponsorInk:keeper?'#0c1822':'#ffffff',crestSize:17,keeper,longSleeves:keeper,referenceComplete:true});
  const team={name:'THEBIG26',realName:'THEBIG26',short:'BIG26',city:'26 Arena',country:'Özel Takımlar',category:'special',color:'#c7ff43',dark:'#0c1822',crest:base+'crest.svg',
    players:[player('Berberkerim','berberkerim',7,'#d8a886','#24211f'),player('Lapeace','lapeace',10,'#905c38','#eee7d9'),player('Zias','zias',9,'#865239','#221b19')],
    keeper:{...player('Kwebbelkop','kwebbelkop',1,'#d0a17c','#33241e'),goalkeeper:true,jump:9},
    coach:{name:'Tung Tung Tung Sahur',realName:'Tung Tung Tung Sahur',skin:'#b87935',hair:'#8b5427',head:{sheet:base+'tung-tung-sahur-head.png',crop:[0,0.03668261562998405,1,0.9043062200956937]}},
    stadium:{name:'THEBIG26 Arena',city:'26 Arena',architecture:'bowl',seat:'#0c1822',trim:'#28e3df'},kit:kit(false),keeperKit:kit(true),kitPending:false,
    performance:{overall:88,squadRating:88,form:1,source:'Özel takım oyun dengesi'},portraitSource:'User reference photos prepared with built-in imagegen'};
  for(const p of team.players)if(['Lapeace','Zias'].includes(p.name))p.gamePortrait.flipHorizontal=true;
  window.ARENA_TEAMS.push(team);window.ArenaSpecialTeams.push(team);
})();
