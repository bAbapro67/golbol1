// 101 additional clubs. Sources: EUROPE_CLUB_SOURCES.md; selections: EUROPE_STAR_SELECTION.md.
(() => {
const clubs = [
  {
    "name": "Trabzonspor",
    "realName": "Trabzonspor",
    "short": "TRAB",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "997",
    "color": "#5699eb",
    "dark": "#8E003B",
    "crest": "assets/europe-clubs/crest-997.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/997.png",
    "players": [
      {
        "name": "Mohamed Salah",
        "realName": "Mohamed Salah",
        "id": "173896",
        "number": 10,
        "portrait": -1,
        "skin": "#d59675",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 9,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/997/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5224447208576949,
            0.9840255591054313,
            0.05750798722044728,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 91,
          "performance": 80,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "209331",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p209331.png?padding=0.7"
      },
      {
        "name": "Fabinho",
        "realName": "Fabinho",
        "id": "176287",
        "number": 6,
        "portrait": -1,
        "skin": "#d79374",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/997/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 8,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "209499",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p209499.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5271179590087519,
            0.987220447284345,
            0.134185303514377,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Stefan Savic",
        "realName": "Stefan Savic",
        "id": "150541",
        "number": 15,
        "portrait": -1,
        "skin": "#da9581",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/997/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 12,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "204639",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p204639.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5146246052585384,
            0.987220447284345,
            0.08945686900958466,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "André Onana",
      "realName": "André Onana",
      "id": "215340",
      "number": 24,
      "portrait": -1,
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-00.png",
        "cell": 3,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5227448613052861,
          0.9968051118210862,
          0.051118210862619806,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "skin": "#a46e5d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/997/roster",
      "eaId": "226753",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p226753.png?padding=0.7"
    },
    "coach": {
      "name": "Thomas Reis",
      "skin": "#da927c",
      "hair": "#302520",
      "source": "https://en.wikipedia.org/wiki/Trabzonspor",
      "pending": false,
      "wikiTitle": "Thomas Reis",
      "head": {
        "sheet": "assets/europe-clubs/heads-00.png",
        "cell": 4,
        "crop": [
          0.04704944178628389,
          0.24960127591706538,
          0.1682615629984051,
          0.24401913875598086
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Trabzonspor Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#5699eb",
      "trim": "#8E003B"
    },
    "kit": {
      "brand": "joma",
      "sponsor": "papara",
      "referenceComplete": true,
      "pattern": "stripes",
      "shirt": "#76172b",
      "stripe": "#86bce7",
      "trim": "#d9ba70",
      "collar": "#86bce7",
      "shorts": "#76172b",
      "shortTrim": "#d9ba70",
      "socks": "#76172b",
      "sponsorInk": "#d9ba70",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/trabzonspor-field.jpg",
      "sleeve": "#76172b"
    },
    "keeperKit": {
      "brand": "joma",
      "sponsor": "papara",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#a4d46e",
      "stripe": "#81b452",
      "trim": "#151b17",
      "shorts": "#a4d46e",
      "socks": "#a4d46e",
      "shortTrim": "#151b17",
      "collar": "#151b17",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#151b17",
      "reference": "assets/kit-references/trabzonspor-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/997/roster",
    "wikiTitle": "Trabzonspor"
  },
  {
    "name": "Başakşehir",
    "realName": "Istanbul Basaksehir",
    "short": "IBFK",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "7914",
    "color": "#ff6600",
    "dark": "#091453",
    "crest": "assets/europe-clubs/crest-7914.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/7914.png",
    "players": [
      {
        "name": "Edin Visca",
        "realName": "Edin Visca",
        "id": "154647",
        "number": 10,
        "portrait": -1,
        "skin": "#e7a58e",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7914/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5391917434722245,
            0.9680511182108626,
            0.05750798722044728,
            0.987220447284345
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 0,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "205678",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p205678.png?padding=0.7"
      },
      {
        "name": "Andreas Skov Olsen",
        "realName": "Andreas Skov Olsen",
        "id": "259707",
        "number": 70,
        "portrait": -1,
        "skin": "#e3aa9b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7914/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 32,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "240017",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p240017.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5074808777204719,
            0.9616613418530351,
            0.03194888178913738,
            0.9776357827476039
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Yusuf Sari",
        "realName": "Yusuf Sari",
        "id": "262947",
        "number": 7,
        "portrait": -1,
        "skin": "#db9d8c",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7914/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241389",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241389.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5176509337637101,
            0.952076677316294,
            0,
            0.9680511182108626
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Muhammed Sengezer",
      "realName": "Muhammed Sengezer",
      "id": "241800",
      "number": 16,
      "portrait": -1,
      "skin": "#e99f85",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7914/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-00.png",
        "cell": 8,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5310477784365006,
          0.9456869009584664,
          0.006389776357827476,
          0.9648562300319489
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "235931",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p235931.png?padding=0.7"
    },
    "coach": {
      "name": "Nuri Şahin",
      "skin": "#e9a28b",
      "hair": "#302520",
      "source": "https://en.wikipedia.org/wiki/%C4%B0stanbul%20Ba%C5%9Fak%C5%9Fehir%20F.K.",
      "pending": false,
      "wikiTitle": "Nuri Şahin",
      "head": {
        "sheet": "assets/europe-clubs/heads-00.png",
        "cell": 9,
        "crop": [
          0.2942583732057416,
          0.5055821371610846,
          0.17065390749601275,
          0.24401913875598086
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Başakşehir Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#ff6600",
      "trim": "#091453"
    },
    "kit": {
      "brand": "puma",
      "sponsor": "TODINI",
      "referenceComplete": true,
      "pattern": "pinstripes",
      "shirt": "#171844",
      "stripe": "#33378f",
      "trim": "#f57f21",
      "collar": "#171844",
      "shorts": "#171844",
      "shortTrim": "#f57f21",
      "socks": "#171844",
      "sponsorInk": "#f57f21",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/basaksehir-field.jpg"
    },
    "keeperKit": {
      "brand": "puma",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "sleeve-zigzag",
      "shirt": "#151718",
      "stripe": "#56595c",
      "trim": "#d2d4cd",
      "shorts": "#151718",
      "socks": "#151718",
      "shortTrim": "#d2d4cd",
      "collar": "#151718",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#d2d4cd",
      "reference": "assets/kit-references/basaksehir-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7914/roster",
    "wikiTitle": "İstanbul Başakşehir F.K."
  },
  {
    "name": "Samsunspor",
    "realName": "Samsunspor",
    "short": "SAM",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "11429",
    "color": "#000000",
    "dark": "#C60000",
    "crest": "assets/europe-clubs/crest-11429.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/11429.png",
    "players": [
      {
        "name": "Afonso Sousa",
        "realName": "Afonso Sousa",
        "id": "307519",
        "number": 77,
        "portrait": -1,
        "skin": "#e99f8b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/11429/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 2,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "258698",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p258698.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5039917535940636,
            0.9456869009584664,
            0.012779552715654952,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Emre Kilinc",
        "realName": "Emre Kilinc",
        "id": "261298",
        "number": 11,
        "portrait": -1,
        "skin": "#e19a82",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/11429/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 26,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "239045",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239045.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5026230048597595,
            0.9488817891373802,
            0.025559105431309903,
            0.9648562300319489
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mohamed Bayo",
        "realName": "Mohamed Bayo",
        "id": "267519",
        "number": 18,
        "portrait": -1,
        "skin": "#a16758",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/11429/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 4,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241821",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241821.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5219775078344463,
            0.9105431309904153,
            0,
            0.9297124600638977
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Okan Kocuk",
      "realName": "Okan Kocuk",
      "id": "217643",
      "number": 1,
      "portrait": -1,
      "skin": "#e79d87",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/11429/roster",
      "eaId": "223175",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223175.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-00.png",
        "cell": 13,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5288698964936858,
          0.9201277955271565,
          0,
          0.939297124600639
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Thorsten Fink",
      "skin": "#d88f7a",
      "hair": "#302520",
      "source": "https://en.wikipedia.org/wiki/Samsunspor",
      "pending": false,
      "wikiTitle": "Thorsten Fink",
      "head": {
        "sheet": "assets/europe-clubs/heads-00.png",
        "cell": 14,
        "crop": [
          0.5422647527910686,
          0.7496012759170654,
          0.17065390749601275,
          0.23285486443381181
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Samsunspor Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#C60000"
    },
    "kit": {
      "brand": "hummel",
      "sponsor": "COREX HOLDING",
      "referenceComplete": true,
      "pattern": "stripes",
      "shirt": "#f5f3ee",
      "stripe": "#ba1823",
      "trim": "#f5f5ef",
      "collar": "#ba1823",
      "shorts": "#f1f2ed",
      "shortTrim": "#191b20",
      "socks": "#f5f3ee",
      "sponsorInk": "#17191b",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/samsunspor-field.jpg",
      "sleeve": "#f5f5ef"
    },
    "keeperKit": {
      "brand": "hummel",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "marble",
      "shirt": "#4b478b",
      "stripe": "#343465",
      "trim": "#d6e842",
      "shorts": "#4b478b",
      "socks": "#4b478b",
      "shortTrim": "#d6e842",
      "collar": "#4b478b",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#d6e842",
      "reference": "assets/kit-references/samsunspor-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/11429/roster",
    "wikiTitle": "Samsunspor"
  },
  {
    "name": "Göztepe",
    "realName": "Goztepe",
    "short": "GOZ",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "789",
    "color": "#000000",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-789.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/789.png",
    "players": [
      {
        "name": "Efkan Bekiroglu",
        "realName": "Efkan Bekiroglu",
        "id": "271737",
        "number": 10,
        "portrait": -1,
        "skin": "#e79f88",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/789/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-00.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5129269184065642,
            0.9073482428115016,
            0.003194888178913738,
            0.9265175718849841
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 70,
          "performance": 26,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "243914",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p243914.png?padding=0.7"
      },
      {
        "name": "Juan",
        "realName": "Juan",
        "id": "297074",
        "number": 9,
        "portrait": -1,
        "skin": "#96634f",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/789/roster",
        "selection": {
          "method": "EA overall",
          "overall": 69,
          "performance": 44,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "73864",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p73864.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5528076199576006,
            0.9968051118210862,
            0.11182108626198083,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Alexis Antunes",
        "realName": "Alexis Antunes",
        "id": "290184",
        "number": 8,
        "portrait": -1,
        "skin": "#ce917e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/789/roster",
        "selection": {
          "method": "EA overall",
          "overall": 69,
          "performance": 14,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "250764",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p250764.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5340700043490035,
            0.9968051118210862,
            0.134185303514377,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Luka Gugeshashvili",
      "realName": "Luka Gugeshashvili",
      "id": "258926",
      "number": 25,
      "portrait": -1,
      "skin": "#c38877",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/789/roster",
      "eaId": "232123",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p232123.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-01.png",
        "cell": 2,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.49109390450002566,
          0.9968051118210862,
          0.1182108626198083,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Stanimir Stoilov",
      "skin": "#de9f8b",
      "hair": "#302520",
      "source": "https://en.wikipedia.org/wiki/G%C3%B6ztepe%20S.K.",
      "pending": false,
      "head": {
        "sheet": "assets/europe-clubs/heads-01.png",
        "cell": 3,
        "crop": [
          0.7719298245614035,
          0.045454545454545456,
          0.18819776714513556,
          0.20414673046251994
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "wikiTitle": "Stanimir Stoilov"
    },
    "stadium": {
      "name": "Göztepe Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#000000"
    },
    "kit": {
      "brand": "umbro",
      "sponsor": "euroil",
      "referenceComplete": true,
      "pattern": "quarters",
      "shirt": "#f4d11a",
      "stripe": "#b91e29",
      "trim": "#151818",
      "collar": "#151818",
      "shorts": "#f4d11a",
      "shortTrim": "#151818",
      "socks": "#f4d11a",
      "sponsorInk": "#141819",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/goztepe-field.jpg"
    },
    "keeperKit": {
      "brand": "umbro",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#5091ac",
      "stripe": "#30768f",
      "trim": "#122a36",
      "shorts": "#5091ac",
      "socks": "#5091ac",
      "shortTrim": "#122a36",
      "collar": "#5091ac",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#122a36",
      "reference": "assets/kit-references/goztepe-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/789/roster",
    "wikiTitle": "Göztepe S.K."
  },
  {
    "name": "Çaykur Rizespor",
    "realName": "Caykur Rizespor",
    "short": "CAY",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "7656",
    "color": "#000000",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-7656.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/7656.png",
    "players": [
      {
        "name": "Ali Sowe",
        "realName": "Ali Sowe",
        "id": "174010",
        "number": 9,
        "portrait": -1,
        "skin": "#714b3f",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7656/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 28,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "215323",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p215323.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5659736539762981,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Qazim Laçi",
        "realName": "Qazim Laçi",
        "id": "226180",
        "number": 20,
        "portrait": -1,
        "skin": "#af7765",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7656/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 20,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "234983",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234983.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5264595052823458,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Modibo Sagnan",
        "realName": "Modibo Sagnan",
        "id": "266162",
        "number": 93,
        "portrait": -1,
        "skin": "#85594d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7656/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 12,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241708",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241708.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.492454550595154,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Yahia Fofana",
      "realName": "Yahia Fofana",
      "id": "261595",
      "number": 75,
      "portrait": -1,
      "skin": "#7a5044",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7656/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-01.png",
        "cell": 7,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.48137028373649776,
          0.9968051118210862,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "242179",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p242179.png?padding=0.7"
    },
    "coach": {
      "name": "Recep Uçar",
      "skin": "#d99c86",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Recep Uçar",
      "source": "https://en.wikipedia.org/wiki/%C3%87aykur%20Rizespor",
      "head": {
        "sheet": "assets/europe-clubs/heads-01.png",
        "cell": 8,
        "crop": [
          0.044657097288676235,
          0.5,
          0.19059011164274323,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Çaykur Rizespor Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#000000"
    },
    "kit": {
      "brand": "adidas",
      "sponsor": "ÇAYKUR",
      "referenceComplete": true,
      "pattern": "stripes",
      "shirt": "#193d86",
      "stripe": "#156541",
      "trim": "#ffffff",
      "collar": "#193d86",
      "shorts": "#193d86",
      "shortTrim": "#ffffff",
      "socks": "#193d86",
      "sponsorInk": "#ffffff",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/rizespor-field.jpg",
      "shoulder": "#ffffff"
    },
    "keeperKit": {
      "brand": "adidas",
      "sponsor": "ÇAYKUR",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#e27572",
      "stripe": "#f7b4b1",
      "trim": "#eeeeee",
      "shorts": "#e27572",
      "socks": "#e27572",
      "shortTrim": "#eeeeee",
      "collar": "#e27572",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": true,
      "sponsorInk": "#eeeeee",
      "reference": "assets/kit-references/rizespor-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7656/roster",
    "wikiTitle": "Çaykur Rizespor"
  },
  {
    "name": "Kasımpaşa",
    "realName": "Kasimpasa",
    "short": "KAS",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "6870",
    "color": "#000000",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-6870.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/6870.png",
    "players": [
      {
        "name": "Haris Hajradinovic",
        "realName": "Haris Hajradinovic",
        "id": "191946",
        "number": 10,
        "portrait": -1,
        "skin": "#c0846d",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/6870/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 4,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "226517",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p226517.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5360980600973083,
            0.9936102236421726,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Cláudio Winck",
        "realName": "Cláudio Winck",
        "id": "159052",
        "number": 2,
        "portrait": -1,
        "skin": "#ce927c",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/6870/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 24,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "216580",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p216580.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.49487768576328,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Kerem Demirbay",
        "realName": "Kerem Demirbay",
        "id": "188053",
        "number": 26,
        "portrait": -1,
        "skin": "#dda08a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/6870/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 10,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "211748",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211748.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.48554608185226594,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Andreas Gianniotis",
      "realName": "Andreas Gianniotis",
      "id": "178360",
      "number": 1,
      "portrait": -1,
      "skin": "#e9a186",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/6870/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-01.png",
        "cell": 12,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5702917371092222,
          0.9137380191693291,
          0.02875399361022364,
          0.9329073482428115
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "210327",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210327.png?padding=0.7"
    },
    "coach": {
      "name": "Emre Belözoğlu",
      "skin": "#e4a188",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Emre Belözoğlu",
      "source": "https://en.wikipedia.org/wiki/Kas%C4%B1mpa%C5%9Fa%20S.K.",
      "head": {
        "sheet": "assets/europe-clubs/heads-01.png",
        "cell": 13,
        "crop": [
          0.29505582137161085,
          0.75518341307815,
          0.17703349282296652,
          0.22807017543859648
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Kasımpaşa Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#000000"
    },
    "kit": {
      "brand": "adidas",
      "sponsor": "aksa",
      "referenceComplete": true,
      "pattern": "pinstripes",
      "shirt": "#f5f5f2",
      "stripe": "#1b2645",
      "trim": "#1b2645",
      "collar": "#f5f5f2",
      "shorts": "#f5f5f2",
      "shortTrim": "#1b2645",
      "socks": "#f5f5f2",
      "sponsorInk": "#1b2645",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/kasimpasa-field.jpg",
      "shoulder": "#1b2645"
    },
    "keeperKit": {
      "brand": "adidas",
      "sponsor": "aksa",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#f07840",
      "stripe": "#f8b27c",
      "trim": "#151515",
      "shorts": "#f07840",
      "socks": "#f07840",
      "shortTrim": "#151515",
      "collar": "#f07840",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": true,
      "sponsorInk": "#151515",
      "reference": "assets/kit-references/kasimpasa-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/6870/roster",
    "wikiTitle": "Kasımpaşa S.K."
  },
  {
    "name": "Konyaspor",
    "realName": "Konyaspor",
    "short": "KNY",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "7648",
    "color": "#288A00",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-7648.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/7648.png",
    "players": [
      {
        "name": "Arthur Masuaku",
        "realName": "Arthur Masuaku",
        "id": "165892",
        "number": 26,
        "portrait": -1,
        "skin": "#94685d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7648/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "212491",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212491.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5023369202682302,
            0.9424920127795527,
            0,
            0.9552715654952076
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jean-Luc Dompé",
        "realName": "Jean-Luc Dompé",
        "id": "206999",
        "number": 91,
        "portrait": -1,
        "skin": "#8a5a4b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7648/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "224970",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p224970.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-01.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4918753422716902,
            0.9265175718849841,
            0,
            0.9456869009584664
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Diogo Gonçalves",
        "realName": "Diogo Gonçalves",
        "id": "238896",
        "number": 7,
        "portrait": -1,
        "skin": "#dc9e88",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7648/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 18,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "231390",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p231390.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.520172459127403,
            0.9680511182108626,
            0.06389776357827476,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Bahad&#305;R Han Gungordu",
      "realName": "Bahad&#305;R Han Gungordu",
      "id": "275956",
      "number": 13,
      "portrait": -1,
      "skin": "#e9a38f",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7648/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-02.png",
        "cell": 1,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5056270185417335,
          0.9712460063897763,
          0.07348242811501597,
          0.9904153354632588
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "İlhan Palut",
      "skin": "#d4947a",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "İlhan Palut",
      "source": "https://en.wikipedia.org/wiki/Konyaspor",
      "head": {
        "sheet": "assets/europe-clubs/heads-02.png",
        "cell": 2,
        "crop": [
          0.5334928229665071,
          0.01036682615629984,
          0.17862838915470494,
          0.23923444976076555
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Konyaspor Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#288A00",
      "trim": "#000000"
    },
    "kit": {
      "brand": "hummel",
      "sponsor": "TÜMOSAN",
      "referenceComplete": true,
      "pattern": "stripes",
      "shirt": "#f6f6f2",
      "stripe": "#0a674f",
      "trim": "#cb2533",
      "collar": "#f6f6f2",
      "shorts": "#f1f2ed",
      "shortTrim": "#cb2533",
      "socks": "#f6f6f2",
      "sponsorInk": "#cb2533",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/konyaspor-field.jpg"
    },
    "keeperKit": {
      "brand": "hummel",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "marble",
      "shirt": "#22272d",
      "stripe": "#45505d",
      "trim": "#86bf66",
      "shorts": "#22272d",
      "socks": "#22272d",
      "shortTrim": "#86bf66",
      "collar": "#9f2d63",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#86bf66",
      "reference": "assets/kit-references/konyaspor-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/7648/roster",
    "wikiTitle": "Konyaspor"
  },
  {
    "name": "Gaziantep FK",
    "realName": "Gaziantep FK",
    "short": "GAZ",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "20070",
    "color": "#000000",
    "dark": "#C60000",
    "crest": "assets/europe-clubs/crest-20070.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/20070.png",
    "players": [
      {
        "name": "Alexandru Maxim",
        "realName": "Alexandru Maxim",
        "id": "173816",
        "number": 44,
        "portrait": -1,
        "skin": "#e5a18d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20070/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 24,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "211061",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211061.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5019365937576801,
            0.9840255591054313,
            0.07667731629392971,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Deian Sorescu",
        "realName": "Deian Sorescu",
        "id": "240542",
        "number": 18,
        "portrait": -1,
        "skin": "#e79c89",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20070/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 28,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "246562",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p246562.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5104822937505599,
            0.9648562300319489,
            0.02875399361022364,
            0.9840255591054313
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Abakar Sylla",
        "realName": "Abakar Sylla",
        "id": "340239",
        "number": 21,
        "portrait": -1,
        "skin": "#8f594b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20070/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 4,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "269003",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p269003.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.501401803041869,
            0.9776357827476039,
            0.02875399361022364,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Kacper Tobiasz",
      "realName": "Kacper Tobiasz",
      "id": "320305",
      "number": 25,
      "portrait": -1,
      "skin": "#e0a28f",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20070/roster",
      "eaId": "262251",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p262251.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-02.png",
        "cell": 6,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.49568133303846884,
          0.9680511182108626,
          0.012779552715654952,
          0.9840255591054313
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Orhan Ak",
      "skin": "#db8f77",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Orhan Ak",
      "source": "https://en.wikipedia.org/wiki/Gaziantep%20F.K.",
      "head": {
        "sheet": "assets/europe-clubs/heads-02.png",
        "cell": 7,
        "crop": [
          0.7814992025518341,
          0.25757575757575757,
          0.1850079744816587,
          0.23923444976076555
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Gaziantep FK Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#C60000"
    },
    "kit": {
      "brand": "adidas",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "stripes",
      "shirt": "#181a1c",
      "stripe": "#a81c24",
      "trim": "#f2f2ef",
      "collar": "#181a1c",
      "shorts": "#181a1c",
      "shortTrim": "#f2f2ef",
      "socks": "#181a1c",
      "sponsorInk": "#f2f2ef",
      "stripeWidth": 4,
      "stripeGap": 9,
      "reference": "assets/kit-references/gaziantep-field.jpg",
      "sideSponsor": "arkın group",
      "shoulder": "#f2f2ef"
    },
    "keeperKit": {
      "brand": "adidas",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#94d6ce",
      "stripe": "#50b394",
      "trim": "#151d20",
      "shorts": "#94d6ce",
      "socks": "#94d6ce",
      "shortTrim": "#151d20",
      "collar": "#94d6ce",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": true,
      "sponsorInk": "#151d20",
      "reference": "assets/kit-references/gaziantep-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20070/roster",
    "wikiTitle": "Gaziantep F.K."
  },
  {
    "name": "Alanyaspor",
    "realName": "Alanyaspor",
    "short": "ALA",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "9078",
    "color": "#000000",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-9078.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/9078.png",
    "players": [
      {
        "name": "Gaïus Makouta",
        "realName": "Gaïus Makouta",
        "id": "297014",
        "number": 42,
        "portrait": -1,
        "skin": "#a66c5b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/9078/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 28,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "235570",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p235570.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.49904454286015215,
            0.9488817891373802,
            0.019169329073482427,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Paolo Fernandes",
        "realName": "Paolo Fernandes",
        "id": "259139",
        "number": 22,
        "portrait": -1,
        "skin": "#e59e83",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/9078/roster",
        "selection": {
          "method": "EA overall",
          "overall": 71,
          "performance": 14,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223979",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223979.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4964543275431001,
            0.9361022364217252,
            0.03194888178913738,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Hwang Ui-Jo",
        "realName": "Hwang Ui-Jo",
        "id": "236628",
        "number": 16,
        "portrait": -1,
        "skin": "#da9b88",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/9078/roster",
        "selection": {
          "method": "EA overall",
          "overall": 71,
          "performance": 12,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "212260",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212260.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4902789102480718,
            0.9424920127795527,
            0,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Paulo Victor",
      "realName": "Paulo Victor",
      "id": "143774",
      "number": 48,
      "portrait": -1,
      "skin": "#db9178",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/9078/roster",
      "eaId": "193107",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p193107.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-02.png",
        "cell": 11,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.504136158350605,
          0.939297124600639,
          0.025559105431309903,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "João Pereira",
      "skin": "#e59a83",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "João Pereira (footballer, born 1984)",
      "source": "https://en.wikipedia.org/wiki/Alanyaspor",
      "head": {
        "sheet": "assets/europe-clubs/heads-02.png",
        "cell": 12,
        "crop": [
          0.03827751196172249,
          0.7496012759170654,
          0.18022328548644337,
          0.22966507177033493
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Alanyaspor Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#000000"
    },
    "kit": {
      "brand": "puma",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "thin-hoops",
      "shirt": "#f27616",
      "stripe": "#238849",
      "trim": "#ffffff",
      "collar": "#f27616",
      "shorts": "#f27616",
      "shortTrim": "#ffffff",
      "socks": "#f27616",
      "sponsorInk": "#ffffff",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/alanyaspor-field.jpg"
    },
    "keeperKit": {
      "brand": "puma",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "sleeve-zigzag",
      "shirt": "#7a9dce",
      "stripe": "#202731",
      "trim": "#171c23",
      "shorts": "#7a9dce",
      "socks": "#7a9dce",
      "shortTrim": "#171c23",
      "collar": "#7a9dce",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#171c23",
      "reference": "assets/kit-references/alanyaspor-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/9078/roster",
    "wikiTitle": "Alanyaspor"
  },
  {
    "name": "Gençlerbirliği",
    "realName": "Genclerbirligi",
    "short": "GEN",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "996",
    "color": "#000000",
    "dark": "#e91b23",
    "crest": "assets/europe-clubs/crest-996.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/996.png",
    "players": [
      {
        "name": "Adama Traoré",
        "realName": "Adama Traoré",
        "id": "231367",
        "number": 14,
        "portrait": -1,
        "skin": "#a46957",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/996/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 20,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "213956",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p213956.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5074641949130004,
            0.9105431309904153,
            0,
            0.9297124600638977
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Kévin Rodrigues",
        "realName": "Kévin Rodrigues",
        "id": "173614",
        "number": 1,
        "portrait": -1,
        "skin": "#db9379",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/996/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 0,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "209289",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p209289.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5011277172393482,
            0.9105431309904153,
            0,
            0.9361022364217252
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Sekou Koita",
        "realName": "Sekou Koita",
        "id": "228556",
        "number": 22,
        "portrait": -1,
        "skin": "#9b6253",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/996/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 26,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "246762",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p246762.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-02.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5066319228600754,
            0.9169329073482428,
            0,
            0.9361022364217252
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Irfan Can Egribayat",
      "realName": "Irfan Can Egribayat",
      "id": "241797",
      "number": 70,
      "portrait": -1,
      "skin": "#da987e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/996/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-03.png",
        "cell": 0,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5479389474279439,
          0.9904153354632588,
          0.054313099041533544,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "234341",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234341.png?padding=0.7"
    },
    "coach": {
      "name": "Metin Diyadin",
      "skin": "#da957b",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Metin Diyadin",
      "source": "https://en.wikipedia.org/wiki/Gen%C3%A7lerbirli%C4%9Fi%20S.K.",
      "head": {
        "sheet": "assets/europe-clubs/heads-03.png",
        "cell": 1,
        "crop": [
          0.28708133971291866,
          0.0215311004784689,
          0.18341307814992025,
          0.22647527910685805
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Gençlerbirliği Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#e91b23"
    },
    "kit": {
      "brand": "nike",
      "sponsor": "ANADOLU HOTELS",
      "referenceComplete": true,
      "pattern": "stripes",
      "shirt": "#181a1c",
      "stripe": "#b01821",
      "trim": "#ffffff",
      "collar": "#181a1c",
      "shorts": "#181a1c",
      "shortTrim": "#ffffff",
      "socks": "#181a1c",
      "sponsorInk": "#ffffff",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/genclerbirligi-field.jpg"
    },
    "keeperKit": {
      "brand": "nike",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#a6a8a7",
      "stripe": "#d4d5d2",
      "trim": "#151515",
      "shorts": "#a6a8a7",
      "socks": "#a6a8a7",
      "shortTrim": "#151515",
      "collar": "#a6a8a7",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#151515",
      "reference": "assets/kit-references/genclerbirligi-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/996/roster",
    "wikiTitle": "Gençlerbirliği S.K."
  },
  {
    "name": "Kocaelispor",
    "realName": "Kocaelispor",
    "short": "KOC",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "995",
    "color": "#000000",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-995.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/995.png",
    "players": [
      {
        "name": "Bruno Petkovic",
        "realName": "Bruno Petkovic",
        "id": "182097",
        "number": 9,
        "portrait": -1,
        "skin": "#dc9c86",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/995/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 0,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "215455",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p215455.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.513443185026309,
            0.9968051118210862,
            0.054313099041533544,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Berkan Kutlu",
        "realName": "Berkan Kutlu",
        "id": "292252",
        "number": 10,
        "portrait": -1,
        "skin": "#e49f89",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 6,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/995/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5167581072796817,
            0.9936102236421726,
            0.09904153354632587,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 34,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "259675",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p259675.png?padding=0.7"
      },
      {
        "name": "Massadio Haidara",
        "realName": "Massadio Haidara",
        "id": "154532",
        "number": 21,
        "portrait": -1,
        "skin": "#885f56",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/995/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 20,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "201955",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p201955.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5423360498005926,
            0.9776357827476039,
            0.03514376996805112,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Serhat Öztasdelen",
      "realName": "Serhat Öztasdelen",
      "id": "408090",
      "number": 83,
      "portrait": -1,
      "skin": "#e59f8b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/995/roster",
      "eaId": "80001",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p80001.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-03.png",
        "cell": 5,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5172003155294713,
          0.9456869009584664,
          0.03514376996805112,
          0.9616613418530351
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Selçuk İnan",
      "skin": "#e19e85",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Selçuk İnan",
      "source": "https://en.wikipedia.org/wiki/Kocaelispor",
      "head": {
        "sheet": "assets/europe-clubs/heads-03.png",
        "cell": 6,
        "crop": [
          0.5318979266347688,
          0.24960127591706538,
          0.18022328548644337,
          0.24720893141945774
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Kocaelispor Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#000000"
    },
    "kit": {
      "brand": "adidas",
      "sponsor": "SAFİPORT",
      "referenceComplete": true,
      "pattern": "shattered-stripes",
      "shirt": "#115747",
      "stripe": "#141919",
      "trim": "#f5f5f0",
      "collar": "#115747",
      "shorts": "#115747",
      "shortTrim": "#f5f5f0",
      "socks": "#115747",
      "sponsorInk": "#248dba",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/kocaelispor-field.jpg",
      "shoulder": "#f5f5f0",
      "sponsorPanel": "#ffffff"
    },
    "keeperKit": {
      "brand": "adidas",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#50b6ce",
      "stripe": "#318da9",
      "trim": "#d2cba4",
      "shorts": "#50b6ce",
      "socks": "#50b6ce",
      "shortTrim": "#d2cba4",
      "collar": "#50b6ce",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": true,
      "sponsorInk": "#d2cba4",
      "reference": "assets/kit-references/kocaelispor-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/995/roster",
    "wikiTitle": "Kocaelispor"
  },
  {
    "name": "Eyüpspor",
    "realName": "Eyupspor",
    "short": "EYU",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "20729",
    "color": "#000000",
    "dark": "#C60000",
    "crest": "assets/europe-clubs/crest-20729.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/20729.png",
    "players": [
      {
        "name": "Jawad El Yamiq",
        "realName": "Jawad El Yamiq",
        "id": "232461",
        "number": 5,
        "portrait": -1,
        "skin": "#da9b82",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20729/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241775",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241775.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5403043752750091,
            0.9776357827476039,
            0,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Abdelhamid Sabiri",
        "realName": "Abdelhamid Sabiri",
        "id": "252293",
        "number": 10,
        "portrait": -1,
        "skin": "#de967c",
        "hair": "#302520",
        "style": "crop",
        "speed": 6,
        "shot": 7,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20729/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5340447154471545,
            0.9616613418530351,
            0.009584664536741214,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 4,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "237499",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p237499.png?padding=0.7"
      },
      {
        "name": "Simone Giordano",
        "realName": "Simone Giordano",
        "id": "345759",
        "number": 21,
        "portrait": -1,
        "skin": "#eca28f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 6,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20729/roster",
        "selection": {
          "method": "EA overall",
          "overall": 68,
          "performance": 10,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "270088",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p270088.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5267124498379182,
            0.9456869009584664,
            0.003194888178913738,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Horatiu Moldovan",
      "realName": "Horatiu Moldovan",
      "id": "285799",
      "number": 31,
      "portrait": -1,
      "skin": "#e09b86",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20729/roster",
      "eaId": "251136",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p251136.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-03.png",
        "cell": 10,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5213547799733784,
          0.9616613418530351,
          0.01597444089456869,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Mustafa Dalcı",
      "skin": "#db9680",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Mustafa Dalcı",
      "source": "https://en.wikipedia.org/wiki/Ey%C3%BCpspor",
      "head": {
        "sheet": "assets/europe-clubs/heads-03.png",
        "cell": 11,
        "crop": [
          0.7886762360446571,
          0.5031897926634769,
          0.17942583732057416,
          0.24641148325358853
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Eyüpspor Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#C60000"
    },
    "kit": {
      "brand": "nike",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "rough-stripes",
      "shirt": "#241772",
      "stripe": "#e1c21a",
      "trim": "#e1c21a",
      "collar": "#241772",
      "shorts": "#241772",
      "shortTrim": "#e1c21a",
      "socks": "#241772",
      "sponsorInk": "#e1c21a",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/eyupspor-field.jpg"
    },
    "keeperKit": {
      "brand": "nike",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "slashes",
      "shirt": "#46b938",
      "stripe": "#256a39",
      "trim": "#f0f0e7",
      "shorts": "#46b938",
      "socks": "#46b938",
      "shortTrim": "#f0f0e7",
      "collar": "#46b938",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#f0f0e7",
      "reference": "assets/kit-references/eyupspor-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/20729/roster",
    "wikiTitle": "Eyüpspor"
  },
  {
    "name": "Erzurumspor FK",
    "realName": "Erzurum BB",
    "short": "ERZ",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "19267",
    "color": "#000000",
    "dark": "#C60000",
    "crest": "assets/europe-clubs/crest-19267.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/19267.png",
    "players": [
      {
        "name": "Elisha Owusu",
        "realName": "Elisha Owusu",
        "id": "266057",
        "number": 42,
        "portrait": -1,
        "skin": "#865a52",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/19267/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "238392",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p238392.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5485294222755895,
            0.9297124600638977,
            0,
            0.9456869009584664
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Gyrano Kerk",
        "realName": "Gyrano Kerk",
        "id": "199663",
        "number": 9,
        "portrait": -1,
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5271635929250413,
            0.9329073482428115,
            0.006389776357827476,
            0.952076677316294
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "skin": "#bd7861",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/19267/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 8,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "225653",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p225653.png?padding=0.7"
      },
      {
        "name": "Miguel Cardoso",
        "realName": "Miguel Cardoso",
        "id": "214311",
        "number": 20,
        "portrait": -1,
        "skin": "#dd967d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/19267/roster",
        "selection": {
          "method": "EA overall",
          "overall": 70,
          "performance": 18,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "224890",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p224890.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-03.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5142792104634591,
            0.9233226837060703,
            0,
            0.9424920127795527
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Ertugrul Taskiran",
      "realName": "Ertugrul Taskiran",
      "id": "153939",
      "number": 1,
      "portrait": -1,
      "skin": "#e49a82",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/19267/roster",
      "eaId": "194372",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p194372.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-03.png",
        "cell": 15,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5130104907654199,
          0.939297124600639,
          0,
          0.9552715654952076
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Serkan Özbalta",
      "skin": "#d38d74",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Serkan Özbalta",
      "source": "https://en.wikipedia.org/wiki/Erzurumspor%20F.K.",
      "head": {
        "sheet": "assets/europe-clubs/heads-04.png",
        "cell": 0,
        "crop": [
          0.046251993620414676,
          0.02631578947368421,
          0.17543859649122806,
          0.22328548644338117
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Erzurumspor FK Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#C60000"
    },
    "kit": {
      "brand": "umbro",
      "sponsor": "AŞKALE ÇİMENTO",
      "referenceComplete": true,
      "pattern": "stripes",
      "shirt": "#f5f5f0",
      "stripe": "#79bfe7",
      "trim": "#141c25",
      "collar": "#f5f5f0",
      "shorts": "#f1f2ed",
      "shortTrim": "#141c25",
      "socks": "#f5f5f0",
      "sponsorInk": "#141c25",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/erzurumspor-field.jpg"
    },
    "keeperKit": {
      "brand": "umbro",
      "sponsor": "none",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#b6e4df",
      "stripe": "#9ed3c9",
      "trim": "#192b31",
      "shorts": "#b6e4df",
      "socks": "#b6e4df",
      "shortTrim": "#192b31",
      "collar": "#b6e4df",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#192b31",
      "reference": "assets/kit-references/erzurumspor-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/19267/roster",
    "wikiTitle": "Erzurumspor F.K."
  },
  {
    "name": "Çorum FK",
    "realName": "Çorum FK",
    "short": "COR",
    "city": "Türkiye",
    "category": "club",
    "country": "Türkiye",
    "league": "Süper Lig",
    "leagueId": "tur.1",
    "espnId": "132334",
    "color": "#000000",
    "dark": "#C60000",
    "crest": "assets/europe-clubs/crest-132334.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/132334.png",
    "players": [
      {
        "name": "Çaglar Söyüncü",
        "realName": "Çaglar Söyüncü",
        "id": "230757",
        "number": 2,
        "portrait": -1,
        "skin": "#e6a68f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/132334/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 2,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "232119",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p232119.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5348868384012154,
            0.9968051118210862,
            0.08626198083067092,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Cengiz Ünder",
        "realName": "Cengiz Ünder",
        "id": "239706",
        "number": 7,
        "portrait": -1,
        "skin": "#df9f8a",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/132334/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 30,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "235889",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p235889.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5053707465286638,
            0.9968051118210862,
            0.10223642172523961,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mame Thiam",
        "realName": "Mame Thiam",
        "id": "174979",
        "number": 9,
        "portrait": -1,
        "skin": "#89584d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/132334/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "217007",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p217007.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5113771170603129,
            0.9968051118210862,
            0.12460063897763578,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Marcos Felipe",
      "realName": "Marcos Felipe",
      "id": "191997",
      "number": 1,
      "portrait": -1,
      "skin": "#da9a83",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/132334/roster",
      "eaId": "219339",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p219339.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-04.png",
        "cell": 4,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5386471248302668,
          0.9968051118210862,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Burak Yılmaz",
      "skin": "#e5a08a",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Burak Yılmaz",
      "source": "https://en.wikipedia.org/wiki/%C3%87orum%20F.K.",
      "head": {
        "sheet": "assets/europe-clubs/heads-04.png",
        "cell": 5,
        "crop": [
          0.2878787878787879,
          0.24960127591706538,
          0.18421052631578946,
          0.24322169059011164
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Çorum FK Stadı",
      "city": "Türkiye",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#C60000"
    },
    "kit": {
      "brand": "joma",
      "sponsor": "ARCA",
      "referenceComplete": true,
      "pattern": "stripes",
      "shirt": "#141719",
      "stripe": "#b41f25",
      "trim": "#f5f3ef",
      "collar": "#141719",
      "shorts": "#141719",
      "shortTrim": "#f5f3ef",
      "socks": "#141719",
      "sponsorInk": "#f5f3ef",
      "stripeWidth": 8,
      "stripeGap": 16,
      "reference": "assets/kit-references/corum-field.jpg"
    },
    "keeperKit": {
      "brand": "joma",
      "sponsor": "ARCA",
      "referenceComplete": true,
      "pattern": "contours",
      "shirt": "#95de55",
      "stripe": "#428730",
      "trim": "#101811",
      "shorts": "#95de55",
      "socks": "#95de55",
      "shortTrim": "#101811",
      "collar": "#95de55",
      "longSleeves": true,
      "keeper": true,
      "hemPattern": false,
      "sponsorInk": "#101811",
      "reference": "assets/kit-references/corum-keeper.jpg"
    },
    "kitPending": false,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/teams/132334/roster",
    "wikiTitle": "Çorum F.K."
  },
  {
    "name": "Manchester United",
    "realName": "Manchester United",
    "short": "MAN",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "360",
    "color": "#da020e",
    "dark": "#4169E1",
    "crest": "assets/europe-clubs/crest-360.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/360.png",
    "players": [
      {
        "name": "Bruno Fernandes",
        "realName": "Bruno Fernandes",
        "id": "124091",
        "number": 8,
        "portrait": -1,
        "skin": "#d59784",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/360/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4955041348047375,
            0.9808306709265175,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 87,
          "performance": 40,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "212198",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212198.png?padding=0.7"
      },
      {
        "name": "Bryan Mbeumo",
        "realName": "Bryan Mbeumo",
        "id": "271170",
        "number": 19,
        "portrait": -1,
        "skin": "#c87e5f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/360/roster",
        "selection": {
          "method": "EA overall",
          "overall": 85,
          "performance": 26,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "243014",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p243014.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5171382530508104,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Youri Tielemans",
        "realName": "Youri Tielemans",
        "id": "193297",
        "number": 18,
        "portrait": -1,
        "skin": "#d79071",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/360/roster",
        "selection": {
          "method": "EA overall",
          "overall": 85,
          "performance": 10,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "216393",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p216393.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.542115255550031,
            0.9808306709265175,
            0,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Senne Lammens",
      "realName": "Senne Lammens",
      "id": "301425",
      "number": 1,
      "portrait": -1,
      "skin": "#dd9f8e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/360/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-04.png",
        "cell": 9,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5361746182894741,
          0.9584664536741214,
          0.003194888178913738,
          0.9776357827476039
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "254803",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p254803.png?padding=0.7"
    },
    "coach": {
      "name": "Michael Carrick",
      "skin": "#e7a392",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Michael Carrick",
      "source": "https://en.wikipedia.org/wiki/Manchester%20United%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-04.png",
        "cell": 10,
        "crop": [
          0.5366826156299841,
          0.5055821371610846,
          0.17862838915470494,
          0.24401913875598086
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Manchester United Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#da020e",
      "trim": "#4169E1"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#da020e",
      "stripe": "#4169E1",
      "trim": "#ffffff",
      "shorts": "#4169E1",
      "shortTrim": "#da020e",
      "socks": "#da020e",
      "collar": "#4169E1",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/360/roster",
    "wikiTitle": "Manchester United F.C."
  },
  {
    "name": "Tottenham Hotspur",
    "realName": "Tottenham Hotspur",
    "short": "TOT",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "367",
    "color": "#ffffff",
    "dark": "#0B1426",
    "crest": "assets/europe-clubs/crest-367.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/367.png",
    "players": [
      {
        "name": "Sandro Tonali",
        "realName": "Sandro Tonali",
        "id": "261047",
        "number": 16,
        "portrait": -1,
        "skin": "#eaa28e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/367/roster",
        "selection": {
          "method": "EA overall",
          "overall": 86,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241096",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241096.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5137130591054313,
            0.9584664536741214,
            0,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Omar Marmoush",
        "realName": "Omar Marmoush",
        "id": "303745",
        "number": 22,
        "portrait": -1,
        "skin": "#e39b7e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 9,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/367/roster",
        "selection": {
          "method": "EA overall",
          "overall": 84,
          "performance": 8,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "256675",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p256675.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5385821546497129,
            0.9329073482428115,
            0.009584664536741214,
            0.9552715654952076
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "James Maddison",
        "realName": "James Maddison",
        "id": "194450",
        "number": 10,
        "portrait": -1,
        "skin": "#eaa693",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/367/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-04.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5337620421136923,
            0.9137380191693291,
            0.009584664536741214,
            0.9329073482428115
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 84,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "220697",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p220697.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Antonín Kinsky",
      "realName": "Antonín Kinsky",
      "id": "324393",
      "number": 31,
      "portrait": -1,
      "skin": "#e09e8e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/367/roster",
      "eaId": "73580",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p73580.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-04.png",
        "cell": 14,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5133899453410381,
          0.8977635782747604,
          0.019169329073482427,
          0.9137380191693291
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Roberto De Zerbi",
      "skin": "#dc9a84",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Roberto De Zerbi",
      "source": "https://en.wikipedia.org/wiki/Tottenham%20Hotspur%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-04.png",
        "cell": 15,
        "crop": [
          0.7942583732057417,
          0.7496012759170654,
          0.1682615629984051,
          0.23604465709728867
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Tottenham Hotspur Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#0B1426"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#0B1426",
      "trim": "#ffffff",
      "shorts": "#0B1426",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#0B1426",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/367/roster",
    "wikiTitle": "Tottenham Hotspur F.C."
  },
  {
    "name": "Newcastle United",
    "realName": "Newcastle United",
    "short": "NEW",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "361",
    "color": "#000000",
    "dark": "#0B1B3D",
    "crest": "assets/europe-clubs/crest-361.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/361.png",
    "players": [
      {
        "name": "Yoane Wissa",
        "realName": "Yoane Wissa",
        "id": "224077",
        "number": 9,
        "portrait": -1,
        "skin": "#9b6755",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/361/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5406326671712739,
            0.9968051118210862,
            0.12140575079872204,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 24,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "234824",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234824.png?padding=0.7"
      },
      {
        "name": "Sven Botman",
        "realName": "Sven Botman",
        "id": "274633",
        "number": 4,
        "portrait": -1,
        "skin": "#e29986",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/361/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 10,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "251809",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p251809.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5147940002822793,
            0.9712460063897763,
            0.08945686900958466,
            0.987220447284345
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Fabian Schär",
        "realName": "Fabian Schär",
        "id": "179233",
        "number": 5,
        "portrait": -1,
        "skin": "#db9b85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/361/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 4,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "210047",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210047.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5101892687358247,
            0.9968051118210862,
            0.0926517571884984,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Lukás Hornícek",
      "realName": "Lukás Hornícek",
      "id": "319267",
      "number": 21,
      "portrait": -1,
      "skin": "#e29983",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/361/roster",
      "eaId": "258936",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p258936.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-05.png",
        "cell": 3,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5155685781880712,
          0.9968051118210862,
          0.08306709265175719,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Matthias Jaissle",
      "skin": "#d39a88",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Matthias Jaissle",
      "source": "https://en.wikipedia.org/wiki/Newcastle%20United%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-05.png",
        "cell": 4,
        "crop": [
          0.04784688995215311,
          0.24960127591706538,
          0.16905901116427433,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Newcastle United Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#0B1B3D"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#000000",
      "stripe": "#0B1B3D",
      "trim": "#ffffff",
      "shorts": "#0B1B3D",
      "shortTrim": "#000000",
      "socks": "#000000",
      "collar": "#0B1B3D",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/361/roster",
    "wikiTitle": "Newcastle United F.C."
  },
  {
    "name": "Aston Villa",
    "realName": "Aston Villa",
    "short": "AVL",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "362",
    "color": "#660e36",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-362.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/362.png",
    "players": [
      {
        "name": "Boubacar Kamara",
        "realName": "Boubacar Kamara",
        "id": "250936",
        "number": 8,
        "portrait": -1,
        "skin": "#c68568",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/362/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 16,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "236987",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236987.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5160072426212515,
            0.987220447284345,
            0.04472843450479233,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Leon Goretzka",
        "realName": "Leon Goretzka",
        "id": "174550",
        "number": 27,
        "portrait": -1,
        "skin": "#dda292",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/362/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 0,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "209658",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p209658.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5143322551138096,
            0.9840255591054313,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "John McGinn",
        "realName": "John McGinn",
        "id": "162843",
        "number": 7,
        "portrait": -1,
        "skin": "#e09b8c",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/362/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5049130459275235,
            0.9584664536741214,
            0,
            0.9776357827476039
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 22,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "210881",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210881.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Zion Suzuki",
      "realName": "Zion Suzuki",
      "id": "265958",
      "number": 1,
      "portrait": -1,
      "skin": "#c18064",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/362/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-05.png",
        "cell": 8,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5300358356070677,
          0.9488817891373802,
          0.025559105431309903,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "255981",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p255981.png?padding=0.7"
    },
    "coach": {
      "name": "Unai Emery",
      "skin": "#de9886",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Unai Emery",
      "source": "https://en.wikipedia.org/wiki/Aston%20Villa%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-05.png",
        "cell": 9,
        "crop": [
          0.2902711323763955,
          0.5063795853269537,
          0.17464114832535885,
          0.24322169059011164
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Aston Villa Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#660e36",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#660e36",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#660e36",
      "socks": "#660e36",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/362/roster",
    "wikiTitle": "Aston Villa F.C."
  },
  {
    "name": "Brighton & Hove Albion",
    "realName": "Brighton & Hove Albion",
    "short": "BHA",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "331",
    "color": "#0606fa",
    "dark": "#005F60",
    "crest": "assets/europe-clubs/crest-331.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/331.png",
    "players": [
      {
        "name": "Kaoru Mitoma",
        "realName": "Kaoru Mitoma",
        "id": "274278",
        "number": 7,
        "portrait": -1,
        "skin": "#dba186",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/331/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 0,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "255565",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p255565.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.513406804517498,
            0.9456869009584664,
            0.02875399361022364,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Maxim De Cuyper",
        "realName": "Maxim De Cuyper",
        "id": "301327",
        "number": 29,
        "portrait": -1,
        "skin": "#d09281",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/331/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 30,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "251479",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p251479.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.513344124375463,
            0.9488817891373802,
            0.022364217252396165,
            0.9680511182108626
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Olivier Boscagli",
        "realName": "Olivier Boscagli",
        "id": "216017",
        "number": 21,
        "portrait": -1,
        "skin": "#de967f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/331/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 10,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "225863",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p225863.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5399518233920314,
            0.8945686900958466,
            0,
            0.9105431309904153
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Bart Verbruggen",
      "realName": "Bart Verbruggen",
      "id": "291609",
      "number": 1,
      "portrait": -1,
      "skin": "#d89887",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/331/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-05.png",
        "cell": 13,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5100418507144018,
          0.8977635782747604,
          0,
          0.9137380191693291
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "258498",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p258498.png?padding=0.7"
    },
    "coach": {
      "name": "Fabian Hürzeler",
      "skin": "#e0a18f",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Fabian Hürzeler",
      "source": "https://en.wikipedia.org/wiki/Brighton%20%26%20Hove%20Albion%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-05.png",
        "cell": 14,
        "crop": [
          0.5406698564593302,
          0.7496012759170654,
          0.16905901116427433,
          0.22807017543859648
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Brighton & Hove Albion Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#0606fa",
      "trim": "#005F60"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0606fa",
      "stripe": "#005F60",
      "trim": "#ffffff",
      "shorts": "#005F60",
      "shortTrim": "#0606fa",
      "socks": "#0606fa",
      "collar": "#005F60",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/331/roster",
    "wikiTitle": "Brighton & Hove Albion F.C."
  },
  {
    "name": "Crystal Palace",
    "realName": "Crystal Palace",
    "short": "CRY",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "384",
    "color": "#0202fb",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-384.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/384.png",
    "players": [
      {
        "name": "Jean-Philippe Mateta",
        "realName": "Jean-Philippe Mateta",
        "id": "241187",
        "number": 14,
        "portrait": -1,
        "skin": "#784a3a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/384/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 2,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "236461",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236461.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-05.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5193003164776132,
            0.9041533546325878,
            0.003194888178913738,
            0.9233226837060703
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Yéremy Pino",
        "realName": "Yéremy Pino",
        "id": "297370",
        "number": 10,
        "portrait": -1,
        "skin": "#de9d87",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/384/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5378232708885686,
            0.9968051118210862,
            0.09904153354632587,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 10,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "259377",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p259377.png?padding=0.7"
      },
      {
        "name": "Quinten Timber",
        "realName": "Quinten Timber",
        "id": "282230",
        "number": 23,
        "portrait": -1,
        "skin": "#c68162",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/384/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "251806",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p251806.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5112772137738045,
            0.9968051118210862,
            0.0926517571884984,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Dean Henderson",
      "realName": "Dean Henderson",
      "id": "234172",
      "number": 1,
      "portrait": -1,
      "skin": "#e6a99d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/384/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-06.png",
        "cell": 2,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.4829320405962447,
          0.9968051118210862,
          0.10543130990415335,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "233306",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p233306.png?padding=0.7"
    },
    "coach": {
      "name": "Pierre Sage",
      "skin": "#cd9686",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Pierre Sage",
      "source": "https://en.wikipedia.org/wiki/Crystal%20Palace%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-06.png",
        "cell": 3,
        "crop": [
          0.784688995215311,
          0.02631578947368421,
          0.17543859649122806,
          0.22328548644338117
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Crystal Palace Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#0202fb",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0202fb",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#0202fb",
      "socks": "#0202fb",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/384/roster",
    "wikiTitle": "Crystal Palace F.C."
  },
  {
    "name": "Everton",
    "realName": "Everton",
    "short": "EVE",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "368",
    "color": "#0606fa",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-368.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/368.png",
    "players": [
      {
        "name": "James Tarkowski",
        "realName": "James Tarkowski",
        "id": "155226",
        "number": 6,
        "portrait": -1,
        "skin": "#d09782",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/368/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 24,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "202695",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p202695.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5358827577622334,
            0.9808306709265175,
            0,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jack Grealish",
        "realName": "Jack Grealish",
        "id": "172850",
        "number": 10,
        "portrait": -1,
        "skin": "#d59e91",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/368/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5268092456590859,
            0.9680511182108626,
            0,
            0.987220447284345
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "206517",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p206517.png?padding=0.7"
      },
      {
        "name": "Christian Nørgaard",
        "realName": "Christian Nørgaard",
        "id": "178077",
        "number": 23,
        "portrait": -1,
        "skin": "#ba816e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/368/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 0,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "210697",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210697.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.498188445519869,
            0.9776357827476039,
            0,
            0.9904153354632588
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Jordan Pickford",
      "realName": "Jordan Pickford",
      "id": "159443",
      "number": 1,
      "portrait": -1,
      "skin": "#d39e93",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/368/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-06.png",
        "cell": 7,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.48006477307540807,
          0.9808306709265175,
          0,
          0.9968051118210862
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "204935",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p204935.png?padding=0.7"
    },
    "coach": {
      "name": "David Moyes",
      "skin": "#e49f90",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "David Moyes",
      "source": "https://en.wikipedia.org/wiki/Everton%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-06.png",
        "cell": 8,
        "crop": [
          0.04864433811802233,
          0.507177033492823,
          0.16905901116427433,
          0.24242424242424243
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Everton Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#0606fa",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0606fa",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#0606fa",
      "socks": "#0606fa",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/368/roster",
    "wikiTitle": "Everton F.C."
  },
  {
    "name": "Fulham",
    "realName": "Fulham",
    "short": "FUL",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "370",
    "color": "#ffffff",
    "dark": "#CC0000",
    "crest": "assets/europe-clubs/crest-370.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/370.png",
    "players": [
      {
        "name": "Antonee Robinson",
        "realName": "Antonee Robinson",
        "id": "222396",
        "number": 33,
        "portrait": -1,
        "skin": "#d59374",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/370/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "229348",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p229348.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5272258284878335,
            0.9329073482428115,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Alex Iwobi",
        "realName": "Alex Iwobi",
        "id": "175063",
        "number": 17,
        "portrait": -1,
        "skin": "#ae6e53",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/370/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 10,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "213655",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p213655.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4884669710254,
            0.9648562300319489,
            0.025559105431309903,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Sander Berge",
        "realName": "Sander Berge",
        "id": "218998",
        "number": 16,
        "portrait": -1,
        "skin": "#e49f8e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/370/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 10,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "228092",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p228092.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4949480830670926,
            0.9424920127795527,
            0.022364217252396165,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Bernd Leno",
      "realName": "Bernd Leno",
      "id": "153765",
      "number": 1,
      "portrait": -1,
      "skin": "#de9d8a",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/370/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-06.png",
        "cell": 12,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5453015512147859,
          0.8913738019169329,
          0,
          0.9073482428115016
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "192563",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p192563.png?padding=0.7"
    },
    "coach": {
      "name": "Álvaro Arbeloa",
      "skin": "#da967d",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Álvaro Arbeloa",
      "source": "https://en.wikipedia.org/wiki/Fulham%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-06.png",
        "cell": 13,
        "crop": [
          0.291866028708134,
          0.7496012759170654,
          0.17065390749601275,
          0.22727272727272727
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Fulham Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#CC0000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#CC0000",
      "trim": "#ffffff",
      "shorts": "#CC0000",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#CC0000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/370/roster",
    "wikiTitle": "Fulham F.C."
  },
  {
    "name": "Brentford",
    "realName": "Brentford",
    "short": "BRE",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "337",
    "color": "#f42727",
    "dark": "#0f1c3f",
    "crest": "assets/europe-clubs/crest-337.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/337.png",
    "players": [
      {
        "name": "Mikkel Damsgaard",
        "realName": "Mikkel Damsgaard",
        "id": "308932",
        "number": 24,
        "portrait": -1,
        "skin": "#dba090",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/337/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241508",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241508.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5122115534993392,
            0.8722044728434505,
            0,
            0.8881789137380192
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Nathan Collins",
        "realName": "Nathan Collins",
        "id": "279780",
        "number": 22,
        "portrait": -1,
        "skin": "#de998b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/337/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "248484",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p248484.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-06.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5085279653427455,
            0.8945686900958466,
            0,
            0.9105431309904153
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Kevin Schade",
        "realName": "Kevin Schade",
        "id": "310958",
        "number": 7,
        "portrait": -1,
        "skin": "#c18669",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 8,
        "jump": 10,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/337/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.52268996672073,
            0.9904153354632588,
            0.051118210862619806,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 34,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "260926",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p260926.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Caoimhín Kelleher",
      "realName": "Caoimhín Kelleher",
      "id": "275599",
      "number": 1,
      "portrait": -1,
      "skin": "#e1ac9e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/337/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-07.png",
        "cell": 1,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5105511926939935,
          0.9840255591054313,
          0.08945686900958466,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "240913",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p240913.png?padding=0.7"
    },
    "coach": {
      "name": "Keith Andrews",
      "skin": "#d49d90",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Keith Andrews (footballer)",
      "source": "https://en.wikipedia.org/wiki/Brentford%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-07.png",
        "cell": 2,
        "crop": [
          0.5342902711323764,
          0.025518341307814992,
          0.18022328548644337,
          0.22248803827751196
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Brentford Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#f42727",
      "trim": "#0f1c3f"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#f42727",
      "stripe": "#0f1c3f",
      "trim": "#ffffff",
      "shorts": "#0f1c3f",
      "shortTrim": "#f42727",
      "socks": "#f42727",
      "collar": "#0f1c3f",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/337/roster",
    "wikiTitle": "Brentford F.C."
  },
  {
    "name": "Nottingham Forest",
    "realName": "Nottingham Forest",
    "short": "NFO",
    "city": "İngiltere",
    "category": "club",
    "country": "İngiltere",
    "league": "Premier League",
    "leagueId": "eng.1",
    "espnId": "393",
    "color": "#c8102e",
    "dark": "#1B3624",
    "crest": "assets/europe-clubs/crest-393.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/393.png",
    "players": [
      {
        "name": "Murillo",
        "realName": "Murillo",
        "id": "338894",
        "number": 5,
        "portrait": -1,
        "skin": "#c38062",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 10,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/393/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 16,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "278016",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p278016.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.521640375399361,
            0.9840255591054313,
            0.11182108626198083,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Nikola Milenkovic",
        "realName": "Nikola Milenkovic",
        "id": "238990",
        "number": 31,
        "portrait": -1,
        "skin": "#df9987",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/393/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "238095",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p238095.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5183544294272828,
            0.9297124600638977,
            0,
            0.9456869009584664
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Morgan Gibbs-White",
        "realName": "Morgan Gibbs-White",
        "id": "243396",
        "number": 10,
        "portrait": -1,
        "skin": "#c7886c",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/393/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5151794338360948,
            0.9488817891373802,
            0.03514376996805112,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 30,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "236015",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236015.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Matz Sels",
      "realName": "Matz Sels",
      "id": "179497",
      "number": 26,
      "portrait": -1,
      "skin": "#db9585",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/393/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-07.png",
        "cell": 6,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5127215381221247,
          0.9424920127795527,
          0.038338658146964855,
          0.9584664536741214
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "199641",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p199641.png?padding=0.7"
    },
    "coach": {
      "name": "Oliver Glasner",
      "skin": "#dc988b",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Oliver Glasner",
      "source": "https://en.wikipedia.org/wiki/Nottingham%20Forest%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-07.png",
        "cell": 7,
        "crop": [
          0.7894736842105263,
          0.2623604465709729,
          0.17703349282296652,
          0.22089314194577353
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Nottingham Forest Stadı",
      "city": "İngiltere",
      "architecture": "bowl",
      "seat": "#c8102e",
      "trim": "#1B3624"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#c8102e",
      "stripe": "#1B3624",
      "trim": "#ffffff",
      "shorts": "#1B3624",
      "shortTrim": "#c8102e",
      "socks": "#c8102e",
      "collar": "#1B3624",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/393/roster",
    "wikiTitle": "Nottingham Forest F.C."
  },
  {
    "name": "Sevilla",
    "realName": "Sevilla",
    "short": "SEV",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "243",
    "color": "#ffffff",
    "dark": "#d81022",
    "crest": "assets/europe-clubs/crest-243.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/243.png",
    "players": [
      {
        "name": "Youssouf Fofana",
        "realName": "Youssouf Fofana",
        "id": "277307",
        "number": 24,
        "portrait": -1,
        "skin": "#83584d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/243/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 16,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "245630",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p245630.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5183803987175686,
            0.9329073482428115,
            0.038338658146964855,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Chidera Ejuke",
        "realName": "Chidera Ejuke",
        "id": "254270",
        "number": 21,
        "portrait": -1,
        "skin": "#d28d70",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/243/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 20,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "238050",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p238050.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5152877975883747,
            0.9329073482428115,
            0.006389776357827476,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Lucas Stassin",
        "realName": "Lucas Stassin",
        "id": "323033",
        "number": 19,
        "portrait": -1,
        "skin": "#e19d88",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/243/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 14,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "262657",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p262657.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5089070404703323,
            0.9297124600638977,
            0.01597444089456869,
            0.9552715654952076
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Odisseas Vlachodimos",
      "realName": "Odisseas Vlachodimos",
      "id": "159135",
      "number": 1,
      "portrait": -1,
      "skin": "#d5917d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/243/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-07.png",
        "cell": 11,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5211319526893482,
          0.9297124600638977,
          0.009584664536741214,
          0.9456869009584664
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Luis García Plaza",
      "skin": "#de9480",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Luis García (footballer, born 1972)",
      "source": "https://en.wikipedia.org/wiki/Sevilla%20FC",
      "head": {
        "sheet": "assets/europe-clubs/heads-07.png",
        "cell": 12,
        "crop": [
          0.03907496012759171,
          0.7496012759170654,
          0.18580542264752792,
          0.23285486443381181
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Sevilla Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#d81022"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#d81022",
      "trim": "#ffffff",
      "shorts": "#d81022",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#d81022",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/243/roster",
    "wikiTitle": "Sevilla FC"
  },
  {
    "name": "Real Betis",
    "realName": "Real Betis",
    "short": "BET",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "244",
    "color": "#288A00",
    "dark": "#0A422D",
    "crest": "assets/europe-clubs/crest-244.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/244.png",
    "players": [
      {
        "name": "Isco",
        "realName": "Isco",
        "id": "143564",
        "number": 22,
        "portrait": -1,
        "skin": "#e59985",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/244/roster",
        "selection": {
          "method": "EA overall",
          "overall": 84,
          "performance": 14,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "197781",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p197781.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5166246259708638,
            0.9297124600638977,
            0,
            0.9488817891373802
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Giovani Lo Celso",
        "realName": "Giovani Lo Celso",
        "id": "207343",
        "number": 20,
        "portrait": -1,
        "skin": "#da9581",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/244/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 2,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "226226",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p226226.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5071281435473605,
            0.9137380191693291,
            0,
            0.9297124600638977
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Antony",
        "realName": "Antony",
        "id": "281558",
        "number": 7,
        "portrait": -1,
        "skin": "#dd9f83",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/244/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 14,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "255475",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p255475.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-07.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5136593545359822,
            0.9137380191693291,
            0,
            0.9297124600638977
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Álvaro Valles",
      "realName": "Álvaro Valles",
      "id": "283892",
      "number": 1,
      "portrait": -1,
      "skin": "#e4a489",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/244/roster",
      "eaId": "246657",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p246657.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-08.png",
        "cell": 0,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5414098280549465,
          0.9968051118210862,
          0.054313099041533544,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Manuel Pellegrini",
      "skin": "#d89a87",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Manuel Pellegrini",
      "source": "https://en.wikipedia.org/wiki/Real%20Betis",
      "head": {
        "sheet": "assets/europe-clubs/heads-08.png",
        "cell": 1,
        "crop": [
          0.2767145135566188,
          0.01594896331738437,
          0.20574162679425836,
          0.23365231259968103
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Real Betis Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#288A00",
      "trim": "#0A422D"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#288A00",
      "stripe": "#0A422D",
      "trim": "#ffffff",
      "shorts": "#0A422D",
      "shortTrim": "#288A00",
      "socks": "#288A00",
      "collar": "#0A422D",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/244/roster",
    "wikiTitle": "Real Betis"
  },
  {
    "name": "Real Sociedad",
    "realName": "Real Sociedad",
    "short": "RSO",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "89",
    "color": "#3366CC",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-89.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/89.png",
    "players": [
      {
        "name": "Takefusa Kubo",
        "realName": "Takefusa Kubo",
        "id": "256587",
        "number": 14,
        "portrait": -1,
        "skin": "#c99782",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/89/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "237681",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p237681.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4841691725280455,
            0.9808306709265175,
            0.08626198083067092,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Yangel Herrera",
        "realName": "Yangel Herrera",
        "id": "236185",
        "number": 21,
        "portrait": -1,
        "skin": "#df947a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/89/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 22,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "234060",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234060.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5025265927457245,
            0.9968051118210862,
            0.08626198083067092,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Sergio Gómez",
        "realName": "Sergio Gómez",
        "id": "265993",
        "number": 17,
        "portrait": -1,
        "skin": "#d49687",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/89/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 14,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241811",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241811.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5359133363184925,
            0.9648562300319489,
            0,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Álex Remiro",
      "realName": "Álex Remiro",
      "id": "217319",
      "number": 1,
      "portrait": -1,
      "skin": "#d79c89",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/89/roster",
      "eaId": "227127",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p227127.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-08.png",
        "cell": 5,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5091205523832908,
          0.9808306709265175,
          0,
          0.9968051118210862
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Pellegrino Matarazzo",
      "skin": "#d28c73",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Pellegrino Matarazzo",
      "source": "https://en.wikipedia.org/wiki/Real%20Sociedad",
      "head": {
        "sheet": "assets/europe-clubs/heads-08.png",
        "cell": 6,
        "crop": [
          0.532695374800638,
          0.259170653907496,
          0.1810207336523126,
          0.24003189792663476
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Real Sociedad Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#3366CC",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#3366CC",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#3366CC",
      "socks": "#3366CC",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/89/roster",
    "wikiTitle": "Real Sociedad"
  },
  {
    "name": "Villarreal",
    "realName": "Villarreal",
    "short": "VIL",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "102",
    "color": "#ffff00",
    "dark": "#6cace4",
    "crest": "assets/europe-clubs/crest-102.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/102.png",
    "players": [
      {
        "name": "Gerard Moreno",
        "realName": "Gerard Moreno",
        "id": "156172",
        "number": 7,
        "portrait": -1,
        "skin": "#d9957b",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/102/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5090909406438021,
            0.9648562300319489,
            0,
            0.987220447284345
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 28,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "208093",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p208093.png?padding=0.7"
      },
      {
        "name": "Nicolas Pépé",
        "realName": "Nicolas Pépé",
        "id": "210397",
        "number": 19,
        "portrait": -1,
        "skin": "#8d5b4c",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/102/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 28,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "226110",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p226110.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.547497020639992,
            0.9297124600638977,
            0.006389776357827476,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Juan Foyth",
        "realName": "Juan Foyth",
        "id": "242710",
        "number": 8,
        "portrait": -1,
        "skin": "#e8a08b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/102/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "237221",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p237221.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5278794564919833,
            0.9361022364217252,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Luiz Júnior",
      "realName": "Luiz Júnior",
      "id": "307648",
      "number": 1,
      "portrait": -1,
      "skin": "#c07c5d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/102/roster",
      "eaId": "258885",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p258885.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-08.png",
        "cell": 10,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.49873598156808857,
          0.939297124600639,
          0.006389776357827476,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Iñigo Pérez",
      "skin": "#e49c7e",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Iñigo Pérez",
      "source": "https://en.wikipedia.org/wiki/Villarreal%20CF",
      "head": {
        "sheet": "assets/europe-clubs/heads-08.png",
        "cell": 11,
        "crop": [
          0.7910685805422647,
          0.5023923444976076,
          0.16985645933014354,
          0.24720893141945774
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Villarreal Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#ffff00",
      "trim": "#6cace4"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffff00",
      "stripe": "#6cace4",
      "trim": "#ffffff",
      "shorts": "#6cace4",
      "shortTrim": "#ffff00",
      "socks": "#ffff00",
      "collar": "#6cace4",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/102/roster",
    "wikiTitle": "Villarreal CF"
  },
  {
    "name": "Athletic Club",
    "realName": "Athletic Club",
    "short": "ATH",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "93",
    "color": "#C8142F",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-93.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/93.png",
    "players": [
      {
        "name": "Nico Williams",
        "realName": "Nico Williams",
        "id": "312146",
        "number": 10,
        "portrait": -1,
        "skin": "#b1745e",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/93/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5460101047626124,
            0.9041533546325878,
            0,
            0.9201277955271565
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 86,
          "performance": 20,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "256516",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p256516.png?padding=0.7"
      },
      {
        "name": "Iñaki Williams",
        "realName": "Iñaki Williams",
        "id": "214412",
        "number": 9,
        "portrait": -1,
        "skin": "#ab715f",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 8,
        "jump": 10,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/93/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5132961925027442,
            0.9265175718849841,
            0,
            0.9456869009584664
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 32,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "216201",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p216201.png?padding=0.7"
      },
      {
        "name": "Álex Berenguer",
        "realName": "Álex Berenguer",
        "id": "209579",
        "number": 7,
        "portrait": -1,
        "skin": "#e59c86",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/93/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 28,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "225201",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p225201.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-08.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5112125361326639,
            0.9009584664536742,
            0,
            0.9169329073482428
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Unai Simón",
      "realName": "Unai Simón",
      "id": "222375",
      "number": 1,
      "portrait": -1,
      "skin": "#eb9e87",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/93/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-08.png",
        "cell": 15,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5048467269594488,
          0.9041533546325878,
          0,
          0.9265175718849841
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "230869",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p230869.png?padding=0.7"
    },
    "coach": {
      "name": "Edin Terzić",
      "skin": "#c68b76",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Edin Terzić",
      "source": "https://en.wikipedia.org/wiki/Athletic%20Bilbao",
      "head": {
        "sheet": "assets/europe-clubs/heads-09.png",
        "cell": 0,
        "crop": [
          0.04066985645933014,
          0.028708133971291867,
          0.19617224880382775,
          0.22089314194577353
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Athletic Club Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#C8142F",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#C8142F",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#C8142F",
      "socks": "#C8142F",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/93/roster",
    "wikiTitle": "Athletic Bilbao"
  },
  {
    "name": "Valencia",
    "realName": "Valencia",
    "short": "VAL",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "94",
    "color": "#ffffff",
    "dark": "#FF6F00",
    "crest": "assets/europe-clubs/crest-94.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/94.png",
    "players": [
      {
        "name": "Arnau Martínez",
        "realName": "Arnau Martínez",
        "id": "308728",
        "number": 22,
        "portrait": -1,
        "skin": "#c28577",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/94/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 8,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "260815",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p260815.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5229788804118839,
            0.9744408945686901,
            0.10862619808306709,
            0.9904153354632588
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Hugo Duro",
        "realName": "Hugo Duro",
        "id": "267477",
        "number": 9,
        "portrait": -1,
        "skin": "#e0a28d",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/94/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 20,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "243032",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p243032.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.49583199283937324,
            0.987220447284345,
            0.11501597444089456,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Luis Rioja",
        "realName": "Luis Rioja",
        "id": "264177",
        "number": 11,
        "portrait": -1,
        "skin": "#e19e85",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/94/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 16,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "224415",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p224415.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5107769931222436,
            0.9968051118210862,
            0.12460063897763578,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Stole Dimitrievski",
      "realName": "Stole Dimitrievski",
      "id": "165334",
      "number": 1,
      "portrait": -1,
      "skin": "#dd9e89",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/94/roster",
      "eaId": "211348",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211348.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-09.png",
        "cell": 4,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5344098916423312,
          0.9552715654952076,
          0,
          0.9744408945686901
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Javier Aguirre",
      "skin": "#da9e86",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Javier Aguirre",
      "source": "https://en.wikipedia.org/wiki/Valencia%20CF",
      "head": {
        "sheet": "assets/europe-clubs/heads-09.png",
        "cell": 5,
        "crop": [
          0.291866028708134,
          0.2631578947368421,
          0.1810207336523126,
          0.22886762360446572
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Valencia Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#FF6F00"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#FF6F00",
      "trim": "#ffffff",
      "shorts": "#FF6F00",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#FF6F00",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/94/roster",
    "wikiTitle": "Valencia CF"
  },
  {
    "name": "Celta Vigo",
    "realName": "Celta Vigo",
    "short": "CEL",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "85",
    "color": "#6cace4",
    "dark": "#004996",
    "crest": "assets/europe-clubs/crest-85.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/85.png",
    "players": [
      {
        "name": "Iago Aspas",
        "realName": "Iago Aspas",
        "id": "92800",
        "number": 10,
        "portrait": -1,
        "skin": "#e29785",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/85/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 20,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "192629",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p192629.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5154019558554029,
            0.952076677316294,
            0.054313099041533544,
            0.9680511182108626
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Javi Galán",
        "realName": "Javi Galán",
        "id": "231838",
        "number": 22,
        "portrait": -1,
        "skin": "#da9f8e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/85/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 12,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "231591",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p231591.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5174823635421727,
            0.9552715654952076,
            0,
            0.9712460063897763
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Borja Iglesias",
        "realName": "Borja Iglesias",
        "id": "214995",
        "number": 7,
        "portrait": -1,
        "skin": "#df9980",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/85/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 4,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "224179",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p224179.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5267141237614288,
            0.9552715654952076,
            0,
            0.9776357827476039
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Andrei Radu",
      "realName": "Andrei Radu",
      "id": "144720",
      "number": 13,
      "portrait": -1,
      "skin": "#dd9984",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/85/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-09.png",
        "cell": 9,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5302676263623534,
          0.9169329073482428,
          0.006389776357827476,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Claudio Giráldez",
      "skin": "#d3907e",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Claudio Giráldez",
      "source": "https://en.wikipedia.org/wiki/RC%20Celta%20de%20Vigo",
      "head": {
        "sheet": "assets/europe-clubs/heads-09.png",
        "cell": 10,
        "crop": [
          0.5382775119617225,
          0.5047846889952153,
          0.17862838915470494,
          0.24481658692185007
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Celta Vigo Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#6cace4",
      "trim": "#004996"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#6cace4",
      "stripe": "#004996",
      "trim": "#ffffff",
      "shorts": "#004996",
      "shortTrim": "#6cace4",
      "socks": "#6cace4",
      "collar": "#004996",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/85/roster",
    "wikiTitle": "RC Celta de Vigo"
  },
  {
    "name": "Osasuna",
    "realName": "Osasuna",
    "short": "OSA",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "97",
    "color": "#cd0000",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-97.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/97.png",
    "players": [
      {
        "name": "Ante Budimir",
        "realName": "Ante Budimir",
        "id": "207288",
        "number": 17,
        "portrait": -1,
        "skin": "#e29b81",
        "hair": "#302520",
        "style": "crop",
        "speed": 6,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/97/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5200171441353909,
            0.8977635782747604,
            0.006389776357827476,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 54,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "188335",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p188335.png?padding=0.7"
      },
      {
        "name": "Rubén García",
        "realName": "Rubén García",
        "id": "178328",
        "number": 14,
        "portrait": -1,
        "skin": "#e29e85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/97/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 14,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "211022",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211022.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5237732571413973,
            0.8945686900958466,
            0,
            0.9105431309904153
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Lucas Torró",
        "realName": "Lucas Torró",
        "id": "170154",
        "number": 6,
        "portrait": -1,
        "skin": "#e09e86",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/97/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 10,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "208137",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p208137.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-09.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5311723140784963,
            0.8881789137380192,
            0,
            0.9041533546325878
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Sergio Herrera",
      "realName": "Sergio Herrera",
      "id": "191360",
      "number": 1,
      "portrait": -1,
      "skin": "#e4a08a",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/97/roster",
      "eaId": "224003",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p224003.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-09.png",
        "cell": 14,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5156265970319522,
          0.9041533546325878,
          0,
          0.9201277955271565
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Luis Miguel Ramis",
      "skin": "#dd9986",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Luis Miguel Ramis",
      "source": "https://en.wikipedia.org/wiki/CA%20Osasuna",
      "head": {
        "sheet": "assets/europe-clubs/heads-09.png",
        "cell": 15,
        "crop": [
          0.7902711323763956,
          0.7496012759170654,
          0.17145135566188197,
          0.23285486443381181
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Osasuna Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#cd0000",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#cd0000",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#cd0000",
      "socks": "#cd0000",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/97/roster",
    "wikiTitle": "CA Osasuna"
  },
  {
    "name": "Getafe",
    "realName": "Getafe",
    "short": "GET",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "2922",
    "color": "#0000ff",
    "dark": "#7F1734",
    "crest": "assets/europe-clubs/crest-2922.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2922.png",
    "players": [
      {
        "name": "Johan Mojica",
        "realName": "Johan Mojica",
        "id": "173247",
        "number": 22,
        "portrait": -1,
        "skin": "#c48564",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/2922/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 12,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "214026",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p214026.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5198724230512821,
            0.987220447284345,
            0.051118210862619806,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Enes Ünal",
        "realName": "Enes Ünal",
        "id": "218122",
        "number": 19,
        "portrait": -1,
        "skin": "#d59a82",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/2922/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 22,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223197",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223197.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5187445523767793,
            0.9680511182108626,
            0.09584664536741214,
            0.987220447284345
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Orel Mangala",
        "realName": "Orel Mangala",
        "id": "228424",
        "number": 23,
        "portrait": -1,
        "skin": "#946252",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/2922/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 14,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "234078",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234078.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5017066585896476,
            0.9968051118210862,
            0.13099041533546327,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "David Soria",
      "realName": "David Soria",
      "id": "196339",
      "number": 13,
      "portrait": -1,
      "skin": "#dc9783",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/2922/roster",
      "eaId": "223952",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223952.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-10.png",
        "cell": 3,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.530340776226336,
          0.987220447284345,
          0.0926517571884984,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "José Bordalás",
      "skin": "#b87963",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "José Bordalás",
      "source": "https://en.wikipedia.org/wiki/Getafe%20CF",
      "head": {
        "sheet": "assets/europe-clubs/heads-10.png",
        "cell": 4,
        "crop": [
          0.04146730462519936,
          0.24960127591706538,
          0.17942583732057416,
          0.24641148325358853
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Getafe Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#0000ff",
      "trim": "#7F1734"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0000ff",
      "stripe": "#7F1734",
      "trim": "#ffffff",
      "shorts": "#7F1734",
      "shortTrim": "#0000ff",
      "socks": "#0000ff",
      "collar": "#7F1734",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/2922/roster",
    "wikiTitle": "Getafe CF"
  },
  {
    "name": "Espanyol",
    "realName": "Espanyol",
    "short": "ESP",
    "city": "İspanya",
    "category": "club",
    "country": "İspanya",
    "league": "LaLiga",
    "leagueId": "esp.1",
    "espnId": "88",
    "color": "#3366CC",
    "dark": "#C8142F",
    "crest": "assets/europe-clubs/crest-88.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/88.png",
    "players": [
      {
        "name": "Omar El Hilali",
        "realName": "Omar El Hilali",
        "id": "310682",
        "number": 23,
        "portrait": -1,
        "skin": "#dc9e83",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/88/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 18,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "261654",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p261654.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5160735796963734,
            0.9233226837060703,
            0.022364217252396165,
            0.9456869009584664
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Bryan Zaragoza",
        "realName": "Bryan Zaragoza",
        "id": "311571",
        "number": 15,
        "portrait": -1,
        "skin": "#d19887",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 5,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/88/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 8,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "271916",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p271916.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5097867021534516,
            0.9456869009584664,
            0,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Quilindschy Hartman",
        "realName": "Quilindschy Hartman",
        "id": "346210",
        "number": 3,
        "portrait": -1,
        "skin": "#db987f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/88/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "271121",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p271121.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5227940145651484,
            0.9456869009584664,
            0.04153354632587859,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Marko Dmitrovic",
      "realName": "Marko Dmitrovic",
      "id": "179211",
      "number": 13,
      "portrait": -1,
      "skin": "#d99780",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/88/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-10.png",
        "cell": 8,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5204544193310554,
          0.9233226837060703,
          0.01597444089456869,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "227290",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p227290.png?padding=0.7"
    },
    "coach": {
      "name": "Manolo González",
      "skin": "#bc8271",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Manolo González",
      "source": "https://en.wikipedia.org/wiki/RCD%20Espanyol",
      "head": {
        "sheet": "assets/europe-clubs/heads-10.png",
        "cell": 9,
        "crop": [
          0.2886762360446571,
          0.5055821371610846,
          0.18181818181818182,
          0.24401913875598086
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Espanyol Stadı",
      "city": "İspanya",
      "architecture": "bowl",
      "seat": "#3366CC",
      "trim": "#C8142F"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#3366CC",
      "stripe": "#C8142F",
      "trim": "#ffffff",
      "shorts": "#C8142F",
      "shortTrim": "#3366CC",
      "socks": "#3366CC",
      "collar": "#C8142F",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/teams/88/roster",
    "wikiTitle": "RCD Espanyol"
  },
  {
    "name": "Juventus",
    "realName": "Juventus",
    "short": "JUV",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "111",
    "color": "#000000",
    "dark": "#E8A2B0",
    "crest": "assets/europe-clubs/crest-111.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/111.png",
    "players": [
      {
        "name": "Bremer",
        "realName": "Bremer",
        "id": "258307",
        "number": 3,
        "portrait": -1,
        "skin": "#bd7d61",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/111/roster",
        "selection": {
          "method": "EA overall",
          "overall": 85,
          "performance": 26,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "239580",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239580.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5057047539145149,
            0.9361022364217252,
            0,
            0.9552715654952076
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Manuel Locatelli",
        "realName": "Manuel Locatelli",
        "id": "217538",
        "number": 5,
        "portrait": -1,
        "skin": "#e1a08a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/111/roster",
        "selection": {
          "method": "EA overall",
          "overall": 84,
          "performance": 12,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "222077",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p222077.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5192114066224051,
            0.9105431309904153,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Teun Koopmeiners",
        "realName": "Teun Koopmeiners",
        "id": "258968",
        "number": 8,
        "portrait": -1,
        "skin": "#e09985",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/111/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 24,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "240679",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p240679.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5119529193692198,
            0.8977635782747604,
            0,
            0.9137380191693291
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Guglielmo Vicario",
      "realName": "Guglielmo Vicario",
      "id": "204082",
      "number": 25,
      "portrait": -1,
      "skin": "#dd9a81",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/111/roster",
      "eaId": "240091",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p240091.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-10.png",
        "cell": 13,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5200699183232907,
          0.8913738019169329,
          0,
          0.9105431309904153
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Luciano Spalletti",
      "skin": "#cd8a6f",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Luciano Spalletti",
      "source": "https://en.wikipedia.org/wiki/Juventus%20FC",
      "head": {
        "sheet": "assets/europe-clubs/heads-10.png",
        "cell": 14,
        "crop": [
          0.5239234449760766,
          0.7496012759170654,
          0.19776714513556617,
          0.22328548644338117
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Juventus Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#E8A2B0"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#000000",
      "stripe": "#E8A2B0",
      "trim": "#ffffff",
      "shorts": "#E8A2B0",
      "shortTrim": "#000000",
      "socks": "#000000",
      "collar": "#E8A2B0",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/111/roster",
    "wikiTitle": "Juventus FC"
  },
  {
    "name": "Napoli",
    "realName": "Napoli",
    "short": "NAP",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "114",
    "color": "#0677d2",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-114.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/114.png",
    "players": [
      {
        "name": "Kevin De Bruyne",
        "realName": "Kevin De Bruyne",
        "id": "134947",
        "number": 11,
        "portrait": -1,
        "skin": "#dc9689",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/114/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-10.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.532567068051277,
            0.8977635782747604,
            0,
            0.9137380191693291
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 87,
          "performance": 24,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "192985",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p192985.png?padding=0.7"
      },
      {
        "name": "Scott McTominay",
        "realName": "Scott McTominay",
        "id": "255850",
        "number": 8,
        "portrait": -1,
        "skin": "#e3b0a1",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/114/roster",
        "selection": {
          "method": "EA overall",
          "overall": 85,
          "performance": 4,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "237238",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p237238.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5301176653939064,
            0.9840255591054313,
            0.038338658146964855,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Stanislav Lobotka",
        "realName": "Stanislav Lobotka",
        "id": "188412",
        "number": 68,
        "portrait": -1,
        "skin": "#db9d87",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/114/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 18,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "216435",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p216435.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.515943337390081,
            0.9712460063897763,
            0.08626198083067092,
            0.987220447284345
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Alex Meret",
      "realName": "Alex Meret",
      "id": "209746",
      "number": 1,
      "portrait": -1,
      "skin": "#dca18b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/114/roster",
      "eaId": "225116",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p225116.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-11.png",
        "cell": 2,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5168168177878957,
          0.9808306709265175,
          0.051118210862619806,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Massimiliano Allegri",
      "skin": "#cf8a6f",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Massimiliano Allegri",
      "source": "https://en.wikipedia.org/wiki/SSC%20Napoli",
      "head": {
        "sheet": "assets/europe-clubs/heads-11.png",
        "cell": 3,
        "crop": [
          0.7814992025518341,
          0.02073365231259968,
          0.18022328548644337,
          0.22328548644338117
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Napoli Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#0677d2",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0677d2",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#0677d2",
      "socks": "#0677d2",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/114/roster",
    "wikiTitle": "SSC Napoli"
  },
  {
    "name": "Roma",
    "realName": "AS Roma",
    "short": "ROMA",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "104",
    "color": "#990a2c",
    "dark": "#F5F3E5",
    "crest": "assets/europe-clubs/crest-104.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/104.png",
    "players": [
      {
        "name": "Paulo Dybala",
        "realName": "Paulo Dybala",
        "id": "164839",
        "number": 21,
        "portrait": -1,
        "skin": "#e3a088",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 9,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/104/roster",
        "selection": {
          "method": "EA overall",
          "overall": 86,
          "performance": 34,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "211110",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211110.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5246321934287855,
            0.9488817891373802,
            0.03514376996805112,
            0.9648562300319489
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Gianluca Mancini",
        "realName": "Gianluca Mancini",
        "id": "212597",
        "number": 23,
        "portrait": -1,
        "skin": "#df9d86",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/104/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 22,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "229582",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p229582.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.531999059357817,
            0.9488817891373802,
            0.019169329073482427,
            0.9680511182108626
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Evan Ndicka",
        "realName": "Evan Ndicka",
        "id": "242593",
        "number": 5,
        "portrait": -1,
        "skin": "#936153",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/104/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "236403",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236403.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5132086345435278,
            0.9488817891373802,
            0.04153354632587859,
            0.9648562300319489
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Mile Svilar",
      "realName": "Mile Svilar",
      "id": "238798",
      "number": 99,
      "portrait": -1,
      "skin": "#d99b85",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/104/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-11.png",
        "cell": 7,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.49875237289849045,
          0.952076677316294,
          0.019169329073482427,
          0.9712460063897763
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "230872",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p230872.png?padding=0.7"
    },
    "coach": {
      "name": "Gian Piero Gasperini",
      "skin": "#ce8970",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Gian Piero Gasperini",
      "source": "https://en.wikipedia.org/wiki/AS%20Roma",
      "head": {
        "sheet": "assets/europe-clubs/heads-11.png",
        "cell": 8,
        "crop": [
          0.03668261562998405,
          0.5031897926634769,
          0.18181818181818182,
          0.24242424242424243
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Roma Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#990a2c",
      "trim": "#F5F3E5"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#990a2c",
      "stripe": "#F5F3E5",
      "trim": "#ffffff",
      "shorts": "#F5F3E5",
      "shortTrim": "#990a2c",
      "socks": "#990a2c",
      "collar": "#F5F3E5",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/104/roster",
    "wikiTitle": "AS Roma"
  },
  {
    "name": "Lazio",
    "realName": "Lazio",
    "short": "LAZ",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "112",
    "color": "#74bde7",
    "dark": "#FFFFFF",
    "crest": "assets/europe-clubs/crest-112.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/112.png",
    "players": [
      {
        "name": "Mattia Zaccagni",
        "realName": "Mattia Zaccagni",
        "id": "204669",
        "number": 10,
        "portrait": -1,
        "skin": "#df9f83",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/112/roster",
        "selection": {
          "method": "EA overall",
          "overall": 84,
          "performance": 30,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "220502",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p220502.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5259082157290058,
            0.9456869009584664,
            0.01597444089456869,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Davide Frattesi",
        "realName": "Davide Frattesi",
        "id": "250850",
        "number": 16,
        "portrait": -1,
        "skin": "#dd9f8f",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/112/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 34,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "239807",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239807.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5159840482674413,
            0.9456869009584664,
            0.009584664536741214,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Nicolò Rovella",
        "realName": "Nicolò Rovella",
        "id": "285969",
        "number": 6,
        "portrait": -1,
        "skin": "#df9b86",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/112/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 4,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "255001",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p255001.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5143739233196102,
            0.9329073482428115,
            0.01597444089456869,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Christos Mandas",
      "realName": "Christos Mandas",
      "id": "265140",
      "number": 35,
      "portrait": -1,
      "skin": "#e6a48b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/112/roster",
      "eaId": "278032",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p278032.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-11.png",
        "cell": 12,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5260013793999301,
          0.9073482428115016,
          0,
          0.9265175718849841
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Gennaro Gattuso",
      "skin": "#d48f76",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Gennaro Gattuso",
      "source": "https://en.wikipedia.org/wiki/SS%20Lazio",
      "head": {
        "sheet": "assets/europe-clubs/heads-11.png",
        "cell": 13,
        "crop": [
          0.2838915470494418,
          0.7496012759170654,
          0.18660287081339713,
          0.23923444976076555
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Lazio Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#74bde7",
      "trim": "#FFFFFF"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#74bde7",
      "stripe": "#FFFFFF",
      "trim": "#ffffff",
      "shorts": "#FFFFFF",
      "shortTrim": "#74bde7",
      "socks": "#74bde7",
      "collar": "#FFFFFF",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/112/roster",
    "wikiTitle": "SS Lazio"
  },
  {
    "name": "Atalanta",
    "realName": "Atalanta",
    "short": "ATA",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "105",
    "color": "#1157bf",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-105.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/105.png",
    "players": [
      {
        "name": "Éderson",
        "realName": "Éderson",
        "id": "278210",
        "number": 13,
        "portrait": -1,
        "skin": "#ce866a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/105/roster",
        "selection": {
          "method": "EA overall",
          "overall": 85,
          "performance": 18,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "210257",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210257.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5054112373082649,
            0.9329073482428115,
            0,
            0.952076677316294
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Charles De Ketelaere",
        "realName": "Charles De Ketelaere",
        "id": "296319",
        "number": 17,
        "portrait": -1,
        "skin": "#dea18e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/105/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 16,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "251470",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p251470.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-11.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.516730514743026,
            0.9041533546325878,
            0,
            0.9233226837060703
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mario Pasalic",
        "realName": "Mario Pasalic",
        "id": "189668",
        "number": 8,
        "portrait": -1,
        "skin": "#ce9580",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/105/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223273",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223273.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5586424683469412,
            0.9968051118210862,
            0.10862619808306709,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Marco Carnesecchi",
      "realName": "Marco Carnesecchi",
      "id": "284804",
      "number": 29,
      "portrait": -1,
      "skin": "#c58c7a",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/105/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-12.png",
        "cell": 1,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.541996784338816,
          0.9968051118210862,
          0.08945686900958466,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "252154",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p252154.png?padding=0.7"
    },
    "coach": {
      "name": "Maurizio Sarri",
      "skin": "#a4715d",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Maurizio Sarri",
      "source": "https://en.wikipedia.org/wiki/Atalanta%20BC",
      "head": {
        "sheet": "assets/europe-clubs/heads-12.png",
        "cell": 2,
        "crop": [
          0.5350877192982456,
          0.03668261562998405,
          0.18022328548644337,
          0.21291866028708134
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Atalanta Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#1157bf",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#1157bf",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#1157bf",
      "socks": "#1157bf",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/105/roster",
    "wikiTitle": "Atalanta BC"
  },
  {
    "name": "Fiorentina",
    "realName": "Fiorentina",
    "short": "FIO",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "109",
    "color": "#4c1d84",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-109.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/109.png",
    "players": [
      {
        "name": "Pedro Gonçalves",
        "realName": "Pedro Gonçalves",
        "id": "262591",
        "number": 28,
        "portrait": -1,
        "skin": "#be836f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/109/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 6,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "240950",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p240950.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5034706522441232,
            0.9968051118210862,
            0.09584664536741214,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Dodô",
        "realName": "Dodô",
        "id": "168453",
        "number": 2,
        "portrait": -1,
        "skin": "#be836a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/109/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 2,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "234112",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234112.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5689555840107495,
            0.9744408945686901,
            0,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Franco Mastantuono",
        "realName": "Franco Mastantuono",
        "id": "376473",
        "number": 30,
        "portrait": -1,
        "skin": "#c88f7f",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/109/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 34,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "279173",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p279173.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5475644032838598,
            0.9680511182108626,
            0,
            0.9840255591054313
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "David de Gea",
      "realName": "David de Gea",
      "id": "108482",
      "number": 43,
      "portrait": -1,
      "skin": "#c68e7e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/109/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-12.png",
        "cell": 6,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5131258318536907,
          0.9968051118210862,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Paolo Vanoli",
      "skin": "#c58f75",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Paolo Vanoli",
      "source": "https://en.wikipedia.org/wiki/ACF%20Fiorentina",
      "head": {
        "sheet": "assets/europe-clubs/heads-12.png",
        "cell": 7,
        "crop": [
          0.7615629984051037,
          0.24960127591706538,
          0.22169059011164274,
          0.24641148325358853
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Fiorentina Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#4c1d84",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#4c1d84",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#4c1d84",
      "socks": "#4c1d84",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/109/roster",
    "wikiTitle": "ACF Fiorentina"
  },
  {
    "name": "Bologna",
    "realName": "Bologna",
    "short": "BOL",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "107",
    "color": "#04043d",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-107.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/107.png",
    "players": [
      {
        "name": "Artem Dovbyk",
        "realName": "Artem Dovbyk",
        "id": "226211",
        "number": 9,
        "portrait": -1,
        "skin": "#e09c89",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/107/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5634837719621468,
            0.9424920127795527,
            0.01597444089456869,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 14,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "242458",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p242458.png?padding=0.7"
      },
      {
        "name": "Riccardo Orsolini",
        "realName": "Riccardo Orsolini",
        "id": "234426",
        "number": 7,
        "portrait": -1,
        "skin": "#e2a18a",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/107/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.531377081676072,
            0.9552715654952076,
            0.04153354632587859,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "233556",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p233556.png?padding=0.7"
      },
      {
        "name": "Arthur Theate",
        "realName": "Arthur Theate",
        "id": "304222",
        "number": 3,
        "portrait": -1,
        "skin": "#d8977f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/107/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "257278",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p257278.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5029072643874787,
            0.9552715654952076,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Lukasz Skorupski",
      "realName": "Lukasz Skorupski",
      "id": "179358",
      "number": 1,
      "portrait": -1,
      "skin": "#e09c8b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/107/roster",
      "eaId": "189908",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p189908.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-12.png",
        "cell": 11,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5153146934312366,
          0.9456869009584664,
          0.019169329073482427,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Raffaele Palladino",
      "skin": "#d79682",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Raffaele Palladino",
      "source": "https://en.wikipedia.org/wiki/Bologna%20FC%201909",
      "head": {
        "sheet": "assets/europe-clubs/heads-12.png",
        "cell": 12,
        "crop": [
          0.05263157894736842,
          0.7496012759170654,
          0.17145135566188197,
          0.2240829346092504
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Bologna Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#04043d",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#04043d",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#04043d",
      "socks": "#04043d",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/107/roster",
    "wikiTitle": "Bologna FC 1909"
  },
  {
    "name": "Torino",
    "realName": "Torino",
    "short": "TOR",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "239",
    "color": "#9f0000",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-239.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/239.png",
    "players": [
      {
        "name": "Duván Zapata",
        "realName": "Duván Zapata",
        "id": "193644",
        "number": 91,
        "portrait": -1,
        "skin": "#9d6350",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/239/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 4,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "215333",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p215333.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5384558782006637,
            0.9105431309904153,
            0,
            0.9329073482428115
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Nikola Vlasic",
        "realName": "Nikola Vlasic",
        "id": "206378",
        "number": 10,
        "portrait": -1,
        "skin": "#e09e89",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/239/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5167670985021554,
            0.9265175718849841,
            0,
            0.9424920127795527
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 10,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241095",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241095.png?padding=0.7"
      },
      {
        "name": "Daniel Bragança",
        "realName": "Daniel Bragança",
        "id": "290592",
        "number": 21,
        "portrait": -1,
        "skin": "#de9982",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/239/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "252143",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p252143.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-12.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5146613868514602,
            0.8913738019169329,
            0,
            0.9105431309904153
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Lucas Perri",
      "realName": "Lucas Perri",
      "id": "252406",
      "number": 20,
      "portrait": -1,
      "skin": "#dba18e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/239/roster",
      "eaId": "230670",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p230670.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-13.png",
        "cell": 0,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5344744634280919,
          0.9968051118210862,
          0.09584664536741214,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Ignazio Abate",
      "skin": "#d89c8a",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Ignazio Abate",
      "source": "https://en.wikipedia.org/wiki/Torino%20FC",
      "head": {
        "sheet": "assets/europe-clubs/heads-13.png",
        "cell": 1,
        "crop": [
          0.2926634768740032,
          0.024720893141945772,
          0.17065390749601275,
          0.22488038277511962
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Torino Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#9f0000",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#9f0000",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#9f0000",
      "socks": "#9f0000",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/239/roster",
    "wikiTitle": "Torino FC"
  },
  {
    "name": "Como",
    "realName": "Como",
    "short": "COMO",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "2572",
    "color": "#4169E1",
    "dark": "#FFFFFF",
    "crest": "assets/europe-clubs/crest-2572.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2572.png",
    "players": [
      {
        "name": "Moise Kean",
        "realName": "Moise Kean",
        "id": "248633",
        "number": 90,
        "portrait": -1,
        "skin": "#966458",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/2572/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 12,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "236610",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236610.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.49449578083346685,
            0.9968051118210862,
            0.12140575079872204,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Nico Paz",
        "realName": "Nico Paz",
        "id": "337970",
        "number": 10,
        "portrait": -1,
        "skin": "#db9f8b",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/2572/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5012209943349246,
            0.9584664536741214,
            0.07667731629392971,
            0.9744408945686901
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 24,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "277846",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p277846.png?padding=0.7"
      },
      {
        "name": "Luis Milla",
        "realName": "Luis Milla",
        "id": "264211",
        "number": 6,
        "portrait": -1,
        "skin": "#a87564",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/2572/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 10,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "242201",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p242201.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5333580815400757,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Jean Butez",
      "realName": "Jean Butez",
      "id": "214740",
      "number": 1,
      "portrait": -1,
      "skin": "#d39c8d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/2572/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-13.png",
        "cell": 5,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5194176433251271,
          0.9968051118210862,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "225149",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p225149.png?padding=0.7"
    },
    "coach": {
      "name": "Cesc Fàbregas",
      "skin": "#c38875",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Cesc Fàbregas",
      "source": "https://en.wikipedia.org/wiki/Como%201907",
      "head": {
        "sheet": "assets/europe-clubs/heads-13.png",
        "cell": 6,
        "crop": [
          0.5366826156299841,
          0.24960127591706538,
          0.17543859649122806,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Como Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#4169E1",
      "trim": "#FFFFFF"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#4169E1",
      "stripe": "#FFFFFF",
      "trim": "#ffffff",
      "shorts": "#FFFFFF",
      "shortTrim": "#4169E1",
      "socks": "#4169E1",
      "collar": "#FFFFFF",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/2572/roster",
    "wikiTitle": "Como 1907"
  },
  {
    "name": "Udinese",
    "realName": "Udinese",
    "short": "UDI",
    "city": "İtalya",
    "category": "club",
    "country": "İtalya",
    "league": "Serie A",
    "leagueId": "ita.1",
    "espnId": "118",
    "color": "#19161D",
    "dark": "#0F1C3F",
    "crest": "assets/europe-clubs/crest-118.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/118.png",
    "players": [
      {
        "name": "David Alaba",
        "realName": "David Alaba",
        "id": "118444",
        "number": 1,
        "portrait": -1,
        "skin": "#ba7b63",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/118/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 0,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "197445",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p197445.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4883180688675896,
            0.9968051118210862,
            0.08626198083067092,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Idrissa Gueye",
        "realName": "Idrissa Gueye",
        "id": "377170",
        "number": 7,
        "portrait": -1,
        "skin": "#6a4b46",
        "hair": "#302520",
        "style": "crop",
        "speed": 6,
        "shot": 6,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/118/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 16,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "193474",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p193474.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.532100341914958,
            0.9712460063897763,
            0,
            0.9904153354632588
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Oumar Solet",
        "realName": "Oumar Solet",
        "id": "261066",
        "number": 28,
        "portrait": -1,
        "skin": "#875744",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/118/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "242238",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p242238.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5176946222481748,
            0.9648562300319489,
            0,
            0.9840255591054313
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Maduka Okoye",
      "realName": "Maduka Okoye",
      "id": "295476",
      "number": 40,
      "portrait": -1,
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-13.png",
        "cell": 10,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.4841667696326761,
          0.9968051118210862,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "skin": "#c2876e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/118/roster",
      "eaId": "257288",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p257288.png?padding=0.7"
    },
    "coach": {
      "name": "Kosta Runjaić",
      "skin": "#d19b8a",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Kosta Runjaić",
      "source": "https://en.wikipedia.org/wiki/Udinese%20Calcio",
      "head": {
        "sheet": "assets/europe-clubs/heads-13.png",
        "cell": 11,
        "crop": [
          0.7830940988835726,
          0.5,
          0.1810207336523126,
          0.24641148325358853
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Udinese Stadı",
      "city": "İtalya",
      "architecture": "bowl",
      "seat": "#19161D",
      "trim": "#0F1C3F"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#19161D",
      "stripe": "#0F1C3F",
      "trim": "#ffffff",
      "shorts": "#0F1C3F",
      "shortTrim": "#19161D",
      "socks": "#19161D",
      "collar": "#0F1C3F",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/teams/118/roster",
    "wikiTitle": "Udinese Calcio"
  },
  {
    "name": "Borussia Dortmund",
    "realName": "Borussia Dortmund",
    "short": "DOR",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "124",
    "color": "#ffee00",
    "dark": "#272726",
    "crest": "assets/europe-clubs/crest-124.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/124.png",
    "players": [
      {
        "name": "Serhou Guirassy",
        "realName": "Serhou Guirassy",
        "id": "186381",
        "number": 9,
        "portrait": -1,
        "skin": "#8b5c51",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 9,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/124/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5219677009934789,
            0.9456869009584664,
            0.019169329073482427,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 87,
          "performance": 36,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "215441",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p215441.png?padding=0.7"
      },
      {
        "name": "Nico Schlotterbeck",
        "realName": "Nico Schlotterbeck",
        "id": "286828",
        "number": 4,
        "portrait": -1,
        "skin": "#dfa090",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/124/roster",
        "selection": {
          "method": "EA overall",
          "overall": 85,
          "performance": 4,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "247819",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p247819.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5345006431268412,
            0.9361022364217252,
            0.009584664536741214,
            0.952076677316294
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Felix Nmecha",
        "realName": "Felix Nmecha",
        "id": "281122",
        "number": 8,
        "portrait": -1,
        "skin": "#d28f70",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/124/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-13.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.48479296788099835,
            0.9456869009584664,
            0,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 24,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "246863",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p246863.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Gregor Kobel",
      "realName": "Gregor Kobel",
      "id": "238544",
      "number": 1,
      "portrait": -1,
      "skin": "#e3a08f",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/124/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-13.png",
        "cell": 15,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.4971468311726156,
          0.9488817891373802,
          0,
          0.9648562300319489
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "235073",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p235073.png?padding=0.7"
    },
    "coach": {
      "name": "Niko Kovač",
      "skin": "#d9957e",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Niko Kovač",
      "source": "https://en.wikipedia.org/wiki/Borussia%20Dortmund",
      "head": {
        "sheet": "assets/europe-clubs/heads-14.png",
        "cell": 0,
        "crop": [
          0.044657097288676235,
          0.014354066985645933,
          0.1810207336523126,
          0.23524720893141945
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Borussia Dortmund Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#ffee00",
      "trim": "#272726"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffee00",
      "stripe": "#272726",
      "trim": "#ffffff",
      "shorts": "#272726",
      "shortTrim": "#ffee00",
      "socks": "#ffee00",
      "collar": "#272726",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/124/roster",
    "wikiTitle": "Borussia Dortmund"
  },
  {
    "name": "Bayer Leverkusen",
    "realName": "Bayer Leverkusen",
    "short": "B04",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "131",
    "color": "#DA0308",
    "dark": "#f9fbfc",
    "crest": "assets/europe-clubs/crest-131.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/131.png",
    "players": [
      {
        "name": "Patrik Schick",
        "realName": "Patrik Schick",
        "id": "212330",
        "number": 14,
        "portrait": -1,
        "skin": "#d99f8e",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/131/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5147023899338061,
            0.9904153354632588,
            0.051118210862619806,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 85,
          "performance": 46,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "234236",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234236.png?padding=0.7"
      },
      {
        "name": "Moussa Diaby",
        "realName": "Moussa Diaby",
        "id": "270670",
        "number": 19,
        "portrait": -1,
        "skin": "#8d5a4c",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 10,
        "shot": 8,
        "jump": 6,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/131/roster",
        "selection": {
          "method": "EA overall",
          "overall": 84,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241852",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241852.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5229063036908702,
            0.9968051118210862,
            0.12460063897763578,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Aleix García",
        "realName": "Aleix García",
        "id": "219294",
        "number": 24,
        "portrait": -1,
        "skin": "#d7967f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/131/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "228813",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p228813.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.518176483489126,
            0.9968051118210862,
            0.08626198083067092,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Mark Flekken",
      "realName": "Mark Flekken",
      "id": "177821",
      "number": 1,
      "portrait": -1,
      "skin": "#e8a08c",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/131/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-14.png",
        "cell": 4,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5496619856898164,
          0.987220447284345,
          0.02875399361022364,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "211738",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211738.png?padding=0.7"
    },
    "coach": {
      "name": "Carles Martínez Novell",
      "skin": "#d39583",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Carles Martínez Novell",
      "source": "https://en.wikipedia.org/wiki/Bayer%2004%20Leverkusen",
      "head": {
        "sheet": "assets/europe-clubs/heads-14.png",
        "cell": 5,
        "crop": [
          0.2942583732057416,
          0.259170653907496,
          0.17145135566188197,
          0.23524720893141945
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Bayer Leverkusen Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#DA0308",
      "trim": "#f9fbfc"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#DA0308",
      "stripe": "#f9fbfc",
      "trim": "#ffffff",
      "shorts": "#f9fbfc",
      "shortTrim": "#DA0308",
      "socks": "#DA0308",
      "collar": "#f9fbfc",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/131/roster",
    "wikiTitle": "Bayer 04 Leverkusen"
  },
  {
    "name": "RB Leipzig",
    "realName": "RB Leipzig",
    "short": "RBL",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "11420",
    "color": "#ffffff",
    "dark": "#740c14",
    "crest": "assets/europe-clubs/crest-11420.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/11420.png",
    "players": [
      {
        "name": "Willi Orbán",
        "realName": "Willi Orbán",
        "id": "162162",
        "number": 4,
        "portrait": -1,
        "skin": "#d39584",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/11420/roster",
        "selection": {
          "method": "EA overall",
          "overall": 84,
          "performance": 16,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "204638",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p204638.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5342703798568184,
            0.9712460063897763,
            0,
            0.9840255591054313
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "David Raum",
        "realName": "David Raum",
        "id": "249548",
        "number": 22,
        "portrait": -1,
        "skin": "#e19c90",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/11420/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 8,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "236703",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236703.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5163551684266082,
            0.9904153354632588,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Christopher Nkunku",
        "realName": "Christopher Nkunku",
        "id": "222176",
        "number": 28,
        "portrait": -1,
        "skin": "#d48c70",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/11420/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 22,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "232411",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p232411.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5337882854100107,
            0.952076677316294,
            0.04153354632587859,
            0.9776357827476039
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Maarten Vandevoordt",
      "realName": "Maarten Vandevoordt",
      "id": "277377",
      "number": 26,
      "portrait": -1,
      "skin": "#d9998b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/11420/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-14.png",
        "cell": 9,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5319015501124127,
          0.9456869009584664,
          0.006389776357827476,
          0.9616613418530351
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "242879",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p242879.png?padding=0.7"
    },
    "coach": {
      "name": "Martín Demichelis",
      "skin": "#d88c7a",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Martín Demichelis",
      "source": "https://en.wikipedia.org/wiki/RB%20Leipzig",
      "head": {
        "sheet": "assets/europe-clubs/heads-14.png",
        "cell": 10,
        "crop": [
          0.5382775119617225,
          0.5007974481658692,
          0.18181818181818182,
          0.24242424242424243
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "RB Leipzig Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#740c14"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#740c14",
      "trim": "#ffffff",
      "shorts": "#740c14",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#740c14",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/11420/roster",
    "wikiTitle": "RB Leipzig"
  },
  {
    "name": "Eintracht Frankfurt",
    "realName": "Eintracht Frankfurt",
    "short": "SGE",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "125",
    "color": "#ffffff",
    "dark": "#272726",
    "crest": "assets/europe-clubs/crest-125.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/125.png",
    "players": [
      {
        "name": "Jonathan Burkardt",
        "realName": "Jonathan Burkardt",
        "id": "274887",
        "number": 9,
        "portrait": -1,
        "skin": "#d6968d",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/125/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 38,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "244257",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p244257.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5233624410433012,
            0.952076677316294,
            0.02875399361022364,
            0.9648562300319489
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Robin Koch",
        "realName": "Robin Koch",
        "id": "208285",
        "number": 4,
        "portrait": -1,
        "skin": "#da9b8b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/125/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 14,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "236532",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236532.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5514152154460614,
            0.9424920127795527,
            0,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mario Götze",
        "realName": "Mario Götze",
        "id": "143020",
        "number": 27,
        "portrait": -1,
        "skin": "#e6998a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 8,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/125/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 12,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "192318",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p192318.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-14.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5334601469429198,
            0.9265175718849841,
            0.009584664536741214,
            0.9456869009584664
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Noah Atubolu",
      "realName": "Noah Atubolu",
      "id": "321064",
      "number": 1,
      "portrait": -1,
      "skin": "#d08a6c",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/125/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-14.png",
        "cell": 14,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5142451808926244,
          0.9424920127795527,
          0,
          0.9584664536741214
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "262659",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p262659.png?padding=0.7"
    },
    "coach": {
      "name": "Adi Hütter",
      "skin": "#cc8a72",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Adi Hütter",
      "source": "https://en.wikipedia.org/wiki/Eintracht%20Frankfurt",
      "head": {
        "sheet": "assets/europe-clubs/heads-14.png",
        "cell": 15,
        "crop": [
          0.7886762360446571,
          0.7496012759170654,
          0.17862838915470494,
          0.23843700159489634
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Eintracht Frankfurt Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#272726"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#272726",
      "trim": "#ffffff",
      "shorts": "#272726",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#272726",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/125/roster",
    "wikiTitle": "Eintracht Frankfurt"
  },
  {
    "name": "VfB Stuttgart",
    "realName": "VfB Stuttgart",
    "short": "VFB",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "134",
    "color": "#ffffff",
    "dark": "#DA0308",
    "crest": "assets/europe-clubs/crest-134.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/134.png",
    "players": [
      {
        "name": "Angelo Stiller",
        "realName": "Angelo Stiller",
        "id": "290232",
        "number": 6,
        "portrait": -1,
        "skin": "#e1a896",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/134/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 8,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "250959",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p250959.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5421543312917114,
            0.9968051118210862,
            0.09904153354632587,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Maximilian Mittelstädt",
        "realName": "Maximilian Mittelstädt",
        "id": "216225",
        "number": 7,
        "portrait": -1,
        "skin": "#dea190",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/134/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.521248754529145,
            0.9968051118210862,
            0.0926517571884984,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 22,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "227647",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p227647.png?padding=0.7"
      },
      {
        "name": "Ermedin Demirovic",
        "realName": "Ermedin Demirovic",
        "id": "269136",
        "number": 9,
        "portrait": -1,
        "skin": "#d89884",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/134/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 16,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "238900",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p238900.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5396654800528254,
            0.9968051118210862,
            0.10862619808306709,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Fabian Bredlow",
      "realName": "Fabian Bredlow",
      "id": "201123",
      "number": 1,
      "portrait": -1,
      "skin": "#e0a18a",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/134/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-15.png",
        "cell": 3,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5293434325304233,
          0.9968051118210862,
          0.08306709265175719,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "223603",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223603.png?padding=0.7"
    },
    "coach": {
      "name": "Sebastian Hoeneß",
      "skin": "#dc9884",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Sebastian Hoeneß",
      "source": "https://en.wikipedia.org/wiki/VfB%20Stuttgart",
      "head": {
        "sheet": "assets/europe-clubs/heads-15.png",
        "cell": 4,
        "crop": [
          0.04704944178628389,
          0.24960127591706538,
          0.17543859649122806,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "VfB Stuttgart Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#DA0308"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#DA0308",
      "trim": "#ffffff",
      "shorts": "#DA0308",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#DA0308",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/134/roster",
    "wikiTitle": "VfB Stuttgart"
  },
  {
    "name": "Freiburg",
    "realName": "SC Freiburg",
    "short": "SCF",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "126",
    "color": "#DA0308",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-126.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/126.png",
    "players": [
      {
        "name": "Matthias Ginter",
        "realName": "Matthias Ginter",
        "id": "170209",
        "number": 28,
        "portrait": -1,
        "skin": "#d09380",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/126/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 26,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "207862",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p207862.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5221897996135126,
            0.9808306709265175,
            0,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Vincenzo Grifo",
        "realName": "Vincenzo Grifo",
        "id": "179571",
        "number": 32,
        "portrait": -1,
        "skin": "#dc9379",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/126/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "212096",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212096.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5301719037534836,
            0.9808306709265175,
            0,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Philipp Lienhart",
        "realName": "Philipp Lienhart",
        "id": "219316",
        "number": 3,
        "portrait": -1,
        "skin": "#d59684",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/126/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "231366",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p231366.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5265491956625181,
            0.9680511182108626,
            0,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Mio Backhaus",
      "realName": "Mio Backhaus",
      "id": "338852",
      "number": 1,
      "portrait": -1,
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-15.png",
        "cell": 8,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5506186241010522,
          0.939297124600639,
          0,
          0.9552715654952076
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "skin": "#ca8e80",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/126/roster",
      "eaId": "268428",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p268428.png?padding=0.7"
    },
    "coach": {
      "name": "Julian Schuster",
      "skin": "#e7a08a",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Julian Schuster",
      "source": "https://en.wikipedia.org/wiki/SC%20Freiburg",
      "head": {
        "sheet": "assets/europe-clubs/heads-15.png",
        "cell": 9,
        "crop": [
          0.2902711323763955,
          0.5055821371610846,
          0.17703349282296652,
          0.24401913875598086
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Freiburg Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#DA0308",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#DA0308",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#DA0308",
      "socks": "#DA0308",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/126/roster",
    "wikiTitle": "SC Freiburg"
  },
  {
    "name": "Mainz 05",
    "realName": "Mainz",
    "short": "M05",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "2950",
    "color": "#DA0308",
    "dark": "#000055",
    "crest": "assets/europe-clubs/crest-2950.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2950.png",
    "players": [
      {
        "name": "Nadiem Amiri",
        "realName": "Nadiem Amiri",
        "id": "210818",
        "number": 10,
        "portrait": -1,
        "skin": "#d59279",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/2950/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5318744144706815,
            0.9456869009584664,
            0.025559105431309903,
            0.9584664536741214
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 8,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "225309",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p225309.png?padding=0.7"
      },
      {
        "name": "Kaishu Sano",
        "realName": "Kaishu Sano",
        "id": "357030",
        "number": 6,
        "portrait": -1,
        "skin": "#d3947a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/2950/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 20,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "73078",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p73078.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5310254233267735,
            0.9456869009584664,
            0.03514376996805112,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Stefan Posch",
        "realName": "Stefan Posch",
        "id": "238906",
        "number": 4,
        "portrait": -1,
        "skin": "#dc9b85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/2950/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223671",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223671.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5247186130204405,
            0.8977635782747604,
            0,
            0.9137380191693291
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Alexander Schwolow",
      "realName": "Alexander Schwolow",
      "id": "156416",
      "number": 1,
      "portrait": -1,
      "skin": "#df9e88",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/2950/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-15.png",
        "cell": 13,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5303325330359,
          0.9201277955271565,
          0,
          0.9361022364217252
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Urs Fischer",
      "skin": "#e19987",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Urs Fischer (footballer)",
      "source": "https://en.wikipedia.org/wiki/1.%20FSV%20Mainz%2005",
      "head": {
        "sheet": "assets/europe-clubs/heads-15.png",
        "cell": 14,
        "crop": [
          0.5366826156299841,
          0.7503987240829346,
          0.19298245614035087,
          0.23524720893141945
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Mainz 05 Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#DA0308",
      "trim": "#000055"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#DA0308",
      "stripe": "#000055",
      "trim": "#ffffff",
      "shorts": "#000055",
      "shortTrim": "#DA0308",
      "socks": "#DA0308",
      "collar": "#000055",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/2950/roster",
    "wikiTitle": "1. FSV Mainz 05"
  },
  {
    "name": "Hoffenheim",
    "realName": "TSG Hoffenheim",
    "short": "TSG",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "7911",
    "color": "#003399",
    "dark": "#000055",
    "crest": "assets/europe-clubs/crest-7911.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/7911.png",
    "players": [
      {
        "name": "Andrej Kramaric",
        "realName": "Andrej Kramaric",
        "id": "139520",
        "number": 27,
        "portrait": -1,
        "skin": "#e49e87",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/7911/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 8,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "216354",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p216354.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-15.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5299076601284473,
            0.9137380191693291,
            0.006389776357827476,
            0.9297124600638977
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Adam Hlozek",
        "realName": "Adam Hlozek",
        "id": "292169",
        "number": 10,
        "portrait": -1,
        "skin": "#c88d79",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/7911/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5394924564253638,
            0.9776357827476039,
            0.04472843450479233,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 24,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "246618",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p246618.png?padding=0.7"
      },
      {
        "name": "Patrick Wimmer",
        "realName": "Patrick Wimmer",
        "id": "300095",
        "number": 8,
        "portrait": -1,
        "skin": "#df9f8f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/7911/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "254566",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p254566.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5353355535098644,
            0.9712460063897763,
            0.0670926517571885,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Oliver Baumann",
      "realName": "Oliver Baumann",
      "id": "138213",
      "number": 1,
      "portrait": -1,
      "skin": "#e19f88",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/7911/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-16.png",
        "cell": 2,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5195960330395186,
          0.9808306709265175,
          0.0670926517571885,
          0.9968051118210862
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "193698",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p193698.png?padding=0.7"
    },
    "coach": {
      "name": "Christian Ilzer",
      "skin": "#e29d8b",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Christian Ilzer",
      "source": "https://en.wikipedia.org/wiki/TSG%201899%20Hoffenheim",
      "head": {
        "sheet": "assets/europe-clubs/heads-16.png",
        "cell": 3,
        "crop": [
          0.7870813397129187,
          0.0215311004784689,
          0.17862838915470494,
          0.22807017543859648
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Hoffenheim Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#003399",
      "trim": "#000055"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#003399",
      "stripe": "#000055",
      "trim": "#ffffff",
      "shorts": "#000055",
      "shortTrim": "#003399",
      "socks": "#003399",
      "collar": "#000055",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/7911/roster",
    "wikiTitle": "TSG 1899 Hoffenheim"
  },
  {
    "name": "Borussia Mönchengladbach",
    "realName": "Borussia Mönchengladbach",
    "short": "BMG",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "268",
    "color": "#ffffff",
    "dark": "#03915c",
    "crest": "assets/europe-clubs/crest-268.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/268.png",
    "players": [
      {
        "name": "Tim Kleindienst",
        "realName": "Tim Kleindienst",
        "id": "185906",
        "number": 11,
        "portrait": -1,
        "skin": "#df9e87",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/268/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 6,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "214096",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p214096.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5496454380091056,
            0.9648562300319489,
            0.022364217252396165,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Franck Honorat",
        "realName": "Franck Honorat",
        "id": "196029",
        "number": 9,
        "portrait": -1,
        "skin": "#e49f86",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/268/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5284594079131184,
            0.9680511182108626,
            0.03514376996805112,
            0.9840255591054313
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 20,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "220876",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p220876.png?padding=0.7"
      },
      {
        "name": "Nicolas Kühn",
        "realName": "Nicolas Kühn",
        "id": "260262",
        "number": 19,
        "portrait": -1,
        "skin": "#da9b84",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/268/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 2,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "239977",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239977.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5051756530436985,
            0.9680511182108626,
            0.03194888178913738,
            0.9904153354632588
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Moritz Nicolas",
      "realName": "Moritz Nicolas",
      "id": "238536",
      "number": 1,
      "portrait": -1,
      "skin": "#d79988",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/268/roster",
      "eaId": "235018",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p235018.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-16.png",
        "cell": 7,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5224103607542925,
          0.9616613418530351,
          0.03514376996805112,
          0.9776357827476039
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Alexander Blessin",
      "skin": "#d89780",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Alexander Blessin",
      "source": "https://en.wikipedia.org/wiki/Borussia%20M%C3%B6nchengladbach",
      "head": {
        "sheet": "assets/europe-clubs/heads-16.png",
        "cell": 8,
        "crop": [
          0.050239234449760764,
          0.5031897926634769,
          0.17065390749601275,
          0.24641148325358853
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Borussia Mönchengladbach Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#03915c"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#03915c",
      "trim": "#ffffff",
      "shorts": "#03915c",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#03915c",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/268/roster",
    "wikiTitle": "Borussia Mönchengladbach"
  },
  {
    "name": "Werder Bremen",
    "realName": "Werder Bremen",
    "short": "SVW",
    "city": "Almanya",
    "category": "club",
    "country": "Almanya",
    "league": "Bundesliga",
    "leagueId": "ger.1",
    "espnId": "137",
    "color": "#03915c",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-137.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/137.png",
    "players": [
      {
        "name": "Niclas Füllkrug",
        "realName": "Niclas Füllkrug",
        "id": "170257",
        "number": 10,
        "portrait": -1,
        "skin": "#e8a18d",
        "hair": "#302520",
        "style": "crop",
        "speed": 6,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/137/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5358437187522864,
            0.9361022364217252,
            0.019169329073482427,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 32,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "205431",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p205431.png?padding=0.7"
      },
      {
        "name": "Mitchell Weiser",
        "realName": "Mitchell Weiser",
        "id": "159139",
        "number": 8,
        "portrait": -1,
        "skin": "#e09e8a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/137/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 12,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "206591",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p206591.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5200697940466767,
            0.9361022364217252,
            0.02875399361022364,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jens Stage",
        "realName": "Jens Stage",
        "id": "234757",
        "number": 6,
        "portrait": -1,
        "skin": "#e39f8b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 9,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/137/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 0,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "232711",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p232711.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5089041731230982,
            0.9169329073482428,
            0.006389776357827476,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Karl Hein",
      "realName": "Karl Hein",
      "id": "282646",
      "number": 1,
      "portrait": -1,
      "skin": "#d99b89",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/137/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-16.png",
        "cell": 12,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5412274109756982,
          0.8881789137380192,
          0,
          0.9041533546325878
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "248732",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p248732.png?padding=0.7"
    },
    "coach": {
      "name": "Daniel Thioune",
      "skin": "#af725d",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Daniel Thioune",
      "source": "https://en.wikipedia.org/wiki/SV%20Werder%20Bremen",
      "head": {
        "sheet": "assets/europe-clubs/heads-16.png",
        "cell": 13,
        "crop": [
          0.2926634768740032,
          0.7496012759170654,
          0.1682615629984051,
          0.23444976076555024
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Werder Bremen Stadı",
      "city": "Almanya",
      "architecture": "bowl",
      "seat": "#03915c",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#03915c",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#03915c",
      "socks": "#03915c",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/teams/137/roster",
    "wikiTitle": "SV Werder Bremen"
  },
  {
    "name": "Marseille",
    "realName": "Marseille",
    "short": "OLM",
    "city": "Fransa",
    "category": "club",
    "country": "Fransa",
    "league": "Ligue 1",
    "leagueId": "fra.1",
    "espnId": "176",
    "color": "#ffffff",
    "dark": "#011F68",
    "crest": "assets/europe-clubs/crest-176.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/176.png",
    "players": [
      {
        "name": "Pierre-Emile Højbjerg",
        "realName": "Pierre-Emile Højbjerg",
        "id": "159543",
        "number": 23,
        "portrait": -1,
        "skin": "#d59287",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/176/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 18,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "213648",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p213648.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5180549726335986,
            0.9137380191693291,
            0,
            0.9361022364217252
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Nayef Aguerd",
        "realName": "Nayef Aguerd",
        "id": "245243",
        "number": 21,
        "portrait": -1,
        "skin": "#d8987f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/176/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 10,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "244749",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p244749.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-16.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5258208430992442,
            0.9041533546325878,
            0,
            0.9233226837060703
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Igor Paixão",
        "realName": "Igor Paixão",
        "id": "289114",
        "number": 14,
        "portrait": -1,
        "skin": "#c57e61",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/176/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "271400",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p271400.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5261779203556506,
            0.9616613418530351,
            0.08945686900958466,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Jeffrey de Lange",
      "realName": "Jeffrey de Lange",
      "id": "228707",
      "number": 12,
      "portrait": -1,
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-17.png",
        "cell": 1,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5027829960467073,
          0.9744408945686901,
          0.04472843450479233,
          0.9904153354632588
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "skin": "#e4a18e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/176/roster",
      "eaId": "239559",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239559.png?padding=0.7"
    },
    "coach": {
      "name": "Bruno Génésio",
      "skin": "#c9876d",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Bruno Génésio",
      "source": "https://en.wikipedia.org/wiki/Olympique%20de%20Marseille",
      "head": {
        "sheet": "assets/europe-clubs/heads-17.png",
        "cell": 2,
        "crop": [
          0.5382775119617225,
          0.017543859649122806,
          0.17543859649122806,
          0.22647527910685805
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Marseille Stadı",
      "city": "Fransa",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#011F68"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#011F68",
      "trim": "#ffffff",
      "shorts": "#011F68",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#011F68",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/176/roster",
    "wikiTitle": "Olympique de Marseille"
  },
  {
    "name": "Lyon",
    "realName": "Lyon",
    "short": "LYON",
    "city": "Fransa",
    "category": "club",
    "country": "Fransa",
    "league": "Ligue 1",
    "leagueId": "fra.1",
    "espnId": "167",
    "color": "#ffffff",
    "dark": "#1a1a1a",
    "crest": "assets/europe-clubs/crest-167.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/167.png",
    "players": [
      {
        "name": "Loïs Openda",
        "realName": "Loïs Openda",
        "id": "276265",
        "number": 17,
        "portrait": -1,
        "skin": "#ca8468",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 10,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/167/roster",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 22,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "243580",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p243580.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4881589975519688,
            0.9712460063897763,
            0.06070287539936102,
            0.9840255591054313
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Corentin Tolisso",
        "realName": "Corentin Tolisso",
        "id": "192060",
        "number": 8,
        "portrait": -1,
        "skin": "#d58d70",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/167/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5320565838867796,
            0.952076677316294,
            0.022364217252396165,
            0.9680511182108626
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 30,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "219683",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p219683.png?padding=0.7"
      },
      {
        "name": "Nicolás Tagliafico",
        "realName": "Nicolás Tagliafico",
        "id": "145190",
        "number": 3,
        "portrait": -1,
        "skin": "#e8a38e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/167/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 2,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "211256",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211256.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5142354611914118,
            0.939297124600639,
            0.025559105431309903,
            0.9552715654952076
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Dominik Greif",
      "realName": "Dominik Greif",
      "id": "221278",
      "number": 1,
      "portrait": -1,
      "skin": "#dc9b84",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/167/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-17.png",
        "cell": 6,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5029123674932902,
          0.9297124600638977,
          0.019169329073482427,
          0.9456869009584664
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "263139",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p263139.png?padding=0.7"
    },
    "coach": {
      "name": "Paulo Fonseca",
      "skin": "#d48e76",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Paulo Fonseca",
      "source": "https://en.wikipedia.org/wiki/Olympique%20Lyonnais",
      "head": {
        "sheet": "assets/europe-clubs/heads-17.png",
        "cell": 7,
        "crop": [
          0.7870813397129187,
          0.2551834130781499,
          0.1722488038277512,
          0.23365231259968103
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Lyon Stadı",
      "city": "Fransa",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#1a1a1a"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#1a1a1a",
      "trim": "#ffffff",
      "shorts": "#1a1a1a",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#1a1a1a",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/167/roster",
    "wikiTitle": "Olympique Lyonnais"
  },
  {
    "name": "Monaco",
    "realName": "AS Monaco",
    "short": "MON",
    "city": "Fransa",
    "category": "club",
    "country": "Fransa",
    "league": "Ligue 1",
    "leagueId": "fra.1",
    "espnId": "174",
    "color": "#E91514",
    "dark": "#004c37",
    "crest": "assets/europe-clubs/crest-174.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/174.png",
    "players": [
      {
        "name": "Denis Zakaria",
        "realName": "Denis Zakaria",
        "id": "222628",
        "number": 6,
        "portrait": -1,
        "skin": "#915d50",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 9,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/174/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "229261",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p229261.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5348067092651757,
            0.9297124600638977,
            0.006389776357827476,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Eric Dier",
        "realName": "Eric Dier",
        "id": "155532",
        "number": 3,
        "portrait": -1,
        "skin": "#e7a38d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/174/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 24,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "202335",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p202335.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5118308310189535,
            0.9297124600638977,
            0.006389776357827476,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mika Biereth",
        "realName": "Mika Biereth",
        "id": "308552",
        "number": 14,
        "portrait": -1,
        "skin": "#d89484",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/174/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 4,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "270050",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p270050.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.497667731629393,
            0.9297124600638977,
            0,
            0.9456869009584664
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Lukas Hradecky",
      "realName": "Lukas Hradecky",
      "id": "134169",
      "number": 1,
      "portrait": -1,
      "skin": "#eba893",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/174/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-17.png",
        "cell": 11,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5024258507045598,
          0.9329073482428115,
          0.003194888178913738,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "190941",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p190941.png?padding=0.7"
    },
    "coach": {
      "name": "Filipe Luís",
      "skin": "#e29c85",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Filipe Luís",
      "source": "https://en.wikipedia.org/wiki/AS%20Monaco%20FC",
      "head": {
        "sheet": "assets/europe-clubs/heads-17.png",
        "cell": 12,
        "crop": [
          0.03668261562998405,
          0.7496012759170654,
          0.18580542264752792,
          0.22248803827751196
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Monaco Stadı",
      "city": "Fransa",
      "architecture": "bowl",
      "seat": "#E91514",
      "trim": "#004c37"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#E91514",
      "stripe": "#004c37",
      "trim": "#ffffff",
      "shorts": "#004c37",
      "shortTrim": "#E91514",
      "socks": "#E91514",
      "collar": "#004c37",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/174/roster",
    "wikiTitle": "AS Monaco FC"
  },
  {
    "name": "Lille",
    "realName": "Lille",
    "short": "LILL",
    "city": "Fransa",
    "category": "club",
    "country": "Fransa",
    "league": "Ligue 1",
    "leagueId": "fra.1",
    "espnId": "166",
    "color": "#c2051b",
    "dark": "#e2d3d7",
    "crest": "assets/europe-clubs/crest-166.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/166.png",
    "players": [
      {
        "name": "Alexsandro",
        "realName": "Alexsandro",
        "id": "340900",
        "number": 4,
        "portrait": -1,
        "skin": "#c27e63",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/166/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "269493",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p269493.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5136421549018537,
            0.9041533546325878,
            0,
            0.9297124600638977
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Benjamin André",
        "realName": "Benjamin André",
        "id": "123683",
        "number": 21,
        "portrait": -1,
        "skin": "#db977d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/166/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 8,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "190674",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p190674.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5199031623258031,
            0.8785942492012779,
            0.003194888178913738,
            0.8945686900958466
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Olivier Giroud",
        "realName": "Olivier Giroud",
        "id": "88965",
        "number": 9,
        "portrait": -1,
        "skin": "#e39981",
        "hair": "#302520",
        "style": "crop",
        "speed": 5,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/166/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 30,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "178509",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p178509.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-17.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5073247783394307,
            0.9233226837060703,
            0,
            0.939297124600639
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Berke Özer",
      "realName": "Berke Özer",
      "id": "257267",
      "number": 1,
      "portrait": -1,
      "skin": "#d89884",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/166/roster",
      "eaId": "239254",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239254.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-18.png",
        "cell": 0,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5446560083591165,
          0.9680511182108626,
          0.054313099041533544,
          0.9808306709265175
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Davide Ancelotti",
      "skin": "#dd977d",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Davide Ancelotti",
      "source": "https://en.wikipedia.org/wiki/Lille%20OSC",
      "head": {
        "sheet": "assets/europe-clubs/heads-18.png",
        "cell": 1,
        "crop": [
          0.29904306220095694,
          0.022328548644338118,
          0.1634768740031898,
          0.22727272727272727
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Lille Stadı",
      "city": "Fransa",
      "architecture": "bowl",
      "seat": "#c2051b",
      "trim": "#e2d3d7"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#c2051b",
      "stripe": "#e2d3d7",
      "trim": "#ffffff",
      "shorts": "#e2d3d7",
      "shortTrim": "#c2051b",
      "socks": "#c2051b",
      "collar": "#e2d3d7",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/166/roster",
    "wikiTitle": "Lille OSC"
  },
  {
    "name": "Lens",
    "realName": "Lens",
    "short": "RCL",
    "city": "Fransa",
    "category": "club",
    "country": "Fransa",
    "league": "Ligue 1",
    "leagueId": "fra.1",
    "espnId": "175",
    "color": "#E91514",
    "dark": "#004c37",
    "crest": "assets/europe-clubs/crest-175.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/175.png",
    "players": [
      {
        "name": "Jean-Clair Todibo",
        "realName": "Jean-Clair Todibo",
        "id": "277327",
        "number": 20,
        "portrait": -1,
        "skin": "#c8886b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/175/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 4,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "245388",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p245388.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5093564582382474,
            0.9968051118210862,
            0.054313099041533544,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Amadou Haidara",
        "realName": "Amadou Haidara",
        "id": "228557",
        "number": 21,
        "portrait": -1,
        "skin": "#885f56",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/175/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 8,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "238463",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p238463.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5199988093584427,
            0.9968051118210862,
            0.04472843450479233,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jonathan Gradit",
        "realName": "Jonathan Gradit",
        "id": "197187",
        "number": 24,
        "portrait": -1,
        "skin": "#e39d85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/175/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 4,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "221284",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p221284.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5530927205990493,
            0.9680511182108626,
            0.04153354632587859,
            0.9840255591054313
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Robin Risser",
      "realName": "Robin Risser",
      "id": "344517",
      "number": 40,
      "portrait": -1,
      "skin": "#e0a28d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/175/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-18.png",
        "cell": 5,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.523246566177876,
          0.9648562300319489,
          0.025559105431309903,
          0.9840255591054313
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "271918",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p271918.png?padding=0.7"
    },
    "coach": {
      "name": "Yannick Cahuzac",
      "skin": "#d1917c",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Yannick Cahuzac",
      "source": "https://en.wikipedia.org/wiki/RC%20Lens",
      "head": {
        "sheet": "assets/europe-clubs/heads-18.png",
        "cell": 6,
        "crop": [
          0.5382775119617225,
          0.24960127591706538,
          0.17304625199362042,
          0.24561403508771928
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Lens Stadı",
      "city": "Fransa",
      "architecture": "bowl",
      "seat": "#E91514",
      "trim": "#004c37"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#E91514",
      "stripe": "#004c37",
      "trim": "#ffffff",
      "shorts": "#004c37",
      "shortTrim": "#E91514",
      "socks": "#E91514",
      "collar": "#004c37",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/175/roster",
    "wikiTitle": "RC Lens"
  },
  {
    "name": "Rennes",
    "realName": "Stade Rennais",
    "short": "REN",
    "city": "Fransa",
    "category": "club",
    "country": "Fransa",
    "league": "Ligue 1",
    "leagueId": "fra.1",
    "espnId": "169",
    "color": "#ef2f24",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-169.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/169.png",
    "players": [
      {
        "name": "Boulaye Dia",
        "realName": "Boulaye Dia",
        "id": "282381",
        "number": 22,
        "portrait": -1,
        "skin": "#925f50",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/169/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 6,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "246242",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p246242.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5192919899589229,
            0.9840255591054313,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Valentin Rongier",
        "realName": "Valentin Rongier",
        "id": "207136",
        "number": 21,
        "portrait": -1,
        "skin": "#eba48c",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/169/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 18,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223874",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223874.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5397310646994268,
            0.939297124600639,
            0.02875399361022364,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Sebastian Szymanski",
        "realName": "Sebastian Szymanski",
        "id": "243844",
        "number": 17,
        "portrait": -1,
        "skin": "#e7a08c",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/169/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 22,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "235973",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p235973.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5264557457814204,
            0.9233226837060703,
            0.02875399361022364,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Brice Samba",
      "realName": "Brice Samba",
      "id": "164126",
      "number": 30,
      "portrait": -1,
      "skin": "#9a614f",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/169/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-18.png",
        "cell": 10,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5166208642443277,
          0.9424920127795527,
          0.012779552715654952,
          0.9616613418530351
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "204883",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p204883.png?padding=0.7"
    },
    "coach": {
      "name": "Franck Haise",
      "skin": "#e79982",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Franck Haise",
      "source": "https://en.wikipedia.org/wiki/Stade%20Rennais%20FC",
      "head": {
        "sheet": "assets/europe-clubs/heads-18.png",
        "cell": 11,
        "crop": [
          0.7854864433811802,
          0.5079744816586922,
          0.18261562998405104,
          0.24162679425837322
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Rennes Stadı",
      "city": "Fransa",
      "architecture": "bowl",
      "seat": "#ef2f24",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ef2f24",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#ef2f24",
      "socks": "#ef2f24",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/169/roster",
    "wikiTitle": "Stade Rennais F.C."
  },
  {
    "name": "Nice",
    "realName": "Nice",
    "short": "NICE",
    "city": "Fransa",
    "category": "club",
    "country": "Fransa",
    "league": "Ligue 1",
    "leagueId": "fra.1",
    "espnId": "2502",
    "color": "#ef2f24",
    "dark": "#e2d3d7",
    "crest": "assets/europe-clubs/crest-2502.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2502.png",
    "players": [
      {
        "name": "Mohamed Amoura",
        "realName": "Mohamed Amoura",
        "id": "315384",
        "number": 9,
        "portrait": -1,
        "skin": "#e7a289",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/2502/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5449005496928819,
            0.9169329073482428,
            0,
            0.9361022364217252
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 14,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "264697",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p264697.png?padding=0.7"
      },
      {
        "name": "Jonathan Clauss",
        "realName": "Jonathan Clauss",
        "id": "232089",
        "number": 92,
        "portrait": -1,
        "skin": "#e39a83",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/2502/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 10,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "239093",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239093.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.524792204981989,
            0.8977635782747604,
            0,
            0.9137380191693291
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Youssouf Ndayishimiye",
        "realName": "Youssouf Ndayishimiye",
        "id": "255192",
        "number": 55,
        "portrait": -1,
        "skin": "#986456",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/2502/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 10,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "255533",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p255533.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-18.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5193706106884197,
            0.9073482428115016,
            0.009584664536741214,
            0.9329073482428115
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Yehvann Diouf",
      "realName": "Yehvann Diouf",
      "id": "241029",
      "number": 23,
      "portrait": -1,
      "skin": "#df9a7a",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/2502/roster",
      "eaId": "235633",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p235633.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-18.png",
        "cell": 15,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5215239431937801,
          0.9137380191693291,
          0,
          0.9361022364217252
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Olivier Pantaloni",
      "skin": "#d88d77",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Olivier Pantaloni",
      "source": "https://en.wikipedia.org/wiki/OGC%20Nice",
      "head": {
        "sheet": "assets/europe-clubs/heads-19.png",
        "cell": 0,
        "crop": [
          0.050239234449760764,
          0.03269537480063796,
          0.18341307814992025,
          0.21690590111642744
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Nice Stadı",
      "city": "Fransa",
      "architecture": "bowl",
      "seat": "#ef2f24",
      "trim": "#e2d3d7"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ef2f24",
      "stripe": "#e2d3d7",
      "trim": "#ffffff",
      "shorts": "#e2d3d7",
      "shortTrim": "#ef2f24",
      "socks": "#ef2f24",
      "collar": "#e2d3d7",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/2502/roster",
    "wikiTitle": "OGC Nice"
  },
  {
    "name": "Strasbourg",
    "realName": "Strasbourg",
    "short": "STR",
    "city": "Fransa",
    "category": "club",
    "country": "Fransa",
    "league": "Ligue 1",
    "leagueId": "fra.1",
    "espnId": "180",
    "color": "#0000bf",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-180.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/180.png",
    "players": [
      {
        "name": "Sebastian Nanasi",
        "realName": "Sebastian Nanasi",
        "id": "303787",
        "number": 11,
        "portrait": -1,
        "skin": "#e0a490",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/180/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 22,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "256782",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p256782.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5433741998960832,
            0.9840255591054313,
            0.08945686900958466,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Ismael Doukoure",
        "realName": "Ismael Doukoure",
        "id": "305935",
        "number": 6,
        "portrait": -1,
        "skin": "#9e6c5e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/180/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "257090",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p257090.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4953974289085627,
            0.9968051118210862,
            0.09904153354632587,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Giovanni Reyna",
        "realName": "Giovanni Reyna",
        "id": "290230",
        "number": 13,
        "portrait": -1,
        "skin": "#d89c85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/180/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 18,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "245541",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p245541.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.47996179917986387,
            0.9840255591054313,
            0.10223642172523961,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Filip Jørgensen",
      "realName": "Filip Jørgensen",
      "id": "304256",
      "number": 1,
      "portrait": -1,
      "skin": "#dfa08d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/180/roster",
      "eaId": "258485",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p258485.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-19.png",
        "cell": 4,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5570589065527285,
          0.9808306709265175,
          0.051118210862619806,
          0.9968051118210862
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Hugo Oliveira",
      "skin": "#d48c76",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Hugo Oliveira (football manager)",
      "source": "https://en.wikipedia.org/wiki/RC%20Strasbourg%20Alsace",
      "head": {
        "sheet": "assets/europe-clubs/heads-19.png",
        "cell": 5,
        "crop": [
          0.2894736842105263,
          0.26395534290271133,
          0.18421052631578946,
          0.23125996810207336
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Strasbourg Stadı",
      "city": "Fransa",
      "architecture": "bowl",
      "seat": "#0000bf",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0000bf",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#0000bf",
      "socks": "#0000bf",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/teams/180/roster",
    "wikiTitle": "RC Strasbourg Alsace"
  },
  {
    "name": "Benfica",
    "realName": "Benfica",
    "short": "SLB",
    "city": "Portekiz",
    "category": "club",
    "country": "Portekiz",
    "league": "Primeira Liga",
    "leagueId": "por.1",
    "espnId": "1929",
    "color": "#ca281d",
    "dark": "#1a1a1a",
    "crest": "assets/europe-clubs/crest-1929.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/1929.png",
    "players": [
      {
        "name": "Vangelis Pavlidis",
        "realName": "Vangelis Pavlidis",
        "id": "220819",
        "number": 14,
        "portrait": -1,
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.490470681176847,
            0.952076677316294,
            0,
            0.9712460063897763
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "skin": "#e1997d",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/1929/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 90,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "229188",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p229188.png?padding=0.7"
      },
      {
        "name": "Dodi Lukébakio",
        "realName": "Dodi Lukébakio",
        "id": "229443",
        "number": 11,
        "portrait": -1,
        "skin": "#a16957",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/1929/roster",
        "selection": {
          "method": "EA overall",
          "overall": 82,
          "performance": 12,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "231416",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p231416.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4841930476063552,
            0.9616613418530351,
            0.054313099041533544,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Rui Silva",
        "realName": "Rui Silva",
        "id": "405542",
        "number": 94,
        "portrait": -1,
        "skin": "#e09f8b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/1929/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 0,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "210385",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210385.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5595396727355956,
            0.9456869009584664,
            0.03194888178913738,
            0.9584664536741214
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Samuel Soares",
      "realName": "Samuel Soares",
      "id": "307631",
      "number": 24,
      "portrait": -1,
      "skin": "#bc7e65",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/1929/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-19.png",
        "cell": 9,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5413383220216411,
          0.939297124600639,
          0.01597444089456869,
          0.9584664536741214
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "270060",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p270060.png?padding=0.7"
    },
    "coach": {
      "name": "Marco Silva",
      "skin": "#cc9482",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Marco Silva",
      "source": "https://en.wikipedia.org/wiki/S.L.%20Benfica",
      "head": {
        "sheet": "assets/europe-clubs/heads-19.png",
        "cell": 10,
        "crop": [
          0.5366826156299841,
          0.5039872408293461,
          0.1762360446570973,
          0.23684210526315788
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Benfica Stadı",
      "city": "Portekiz",
      "architecture": "bowl",
      "seat": "#ca281d",
      "trim": "#1a1a1a"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ca281d",
      "stripe": "#1a1a1a",
      "trim": "#ffffff",
      "shorts": "#1a1a1a",
      "shortTrim": "#ca281d",
      "socks": "#ca281d",
      "collar": "#1a1a1a",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/1929/roster",
    "wikiTitle": "S.L. Benfica"
  },
  {
    "name": "Porto",
    "realName": "FC Porto",
    "short": "FCP",
    "city": "Portekiz",
    "category": "club",
    "country": "Portekiz",
    "league": "Primeira Liga",
    "leagueId": "por.1",
    "espnId": "437",
    "color": "#0000dd",
    "dark": "#ffa000",
    "crest": "assets/europe-clubs/crest-437.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/437.png",
    "players": [
      {
        "name": "Chris Smalling",
        "realName": "Chris Smalling",
        "id": "123605",
        "number": 6,
        "portrait": -1,
        "skin": "#cd907b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/437/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 0,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "189881",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p189881.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4201556984806842,
            0.9584664536741214,
            0.025559105431309903,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Santiago Gimenez",
        "realName": "Santiago Gimenez",
        "id": "260775",
        "number": 29,
        "portrait": -1,
        "skin": "#dd9681",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/437/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 12,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "245152",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p245152.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.544749504846959,
            0.9265175718849841,
            0,
            0.9424920127795527
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Alan Varela",
        "realName": "Alan Varela",
        "id": "307601",
        "number": 22,
        "portrait": -1,
        "skin": "#df9b87",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/437/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "260599",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p260599.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-19.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5398209853375764,
            0.9137380191693291,
            0,
            0.9329073482428115
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Diogo Costa",
      "realName": "Diogo Costa",
      "id": "238903",
      "number": 99,
      "portrait": -1,
      "skin": "#d7967b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/437/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-19.png",
        "cell": 14,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5186283006579521,
          0.9137380191693291,
          0,
          0.9329073482428115
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "234577",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234577.png?padding=0.7"
    },
    "coach": {
      "name": "Francesco Farioli",
      "skin": "#cb907e",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Francesco Farioli",
      "source": "https://en.wikipedia.org/wiki/FC%20Porto",
      "head": {
        "sheet": "assets/europe-clubs/heads-19.png",
        "cell": 15,
        "crop": [
          0.7814992025518341,
          0.7496012759170654,
          0.17384370015948963,
          0.23843700159489634
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Porto Stadı",
      "city": "Portekiz",
      "architecture": "bowl",
      "seat": "#0000dd",
      "trim": "#ffa000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0000dd",
      "stripe": "#ffa000",
      "trim": "#ffffff",
      "shorts": "#ffa000",
      "shortTrim": "#0000dd",
      "socks": "#0000dd",
      "collar": "#ffa000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/437/roster",
    "wikiTitle": "FC Porto"
  },
  {
    "name": "Sporting CP",
    "realName": "Sporting CP",
    "short": "SCP",
    "city": "Portekiz",
    "category": "club",
    "country": "Portekiz",
    "league": "Primeira Liga",
    "leagueId": "por.1",
    "espnId": "2250",
    "color": "#008127",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-2250.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2250.png",
    "players": [
      {
        "name": "Gonçalo Inácio",
        "realName": "Gonçalo Inácio",
        "id": "304106",
        "number": 25,
        "portrait": -1,
        "skin": "#da9b87",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2250/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 20,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "257179",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p257179.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5388441784284386,
            0.9968051118210862,
            0.054313099041533544,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Luis Suárez",
        "realName": "Luis Suárez",
        "id": "272722",
        "number": 97,
        "portrait": -1,
        "skin": "#be7a5d",
        "hair": "#302520",
        "style": "crop",
        "speed": 5,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2250/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4913612249924451,
            0.987220447284345,
            0.04792332268370607,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 68,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "176580",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p176580.png?padding=0.7"
      },
      {
        "name": "Rodrigo Zalazar",
        "realName": "Rodrigo Zalazar",
        "id": "287494",
        "number": 17,
        "portrait": -1,
        "skin": "#c88b76",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2250/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 28,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "251377",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p251377.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.49217499582872437,
            0.9968051118210862,
            0.054313099041533544,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Rui Silva",
      "realName": "Rui Silva",
      "id": "177898",
      "number": 1,
      "portrait": -1,
      "skin": "#e3a48b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2250/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-20.png",
        "cell": 3,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.49519208291124445,
          0.9968051118210862,
          0.04153354632587859,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "210385",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210385.png?padding=0.7"
    },
    "coach": {
      "name": "Rui Borges",
      "skin": "#c98b74",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Rui Borges",
      "source": "https://en.wikipedia.org/wiki/Sporting%20CP",
      "head": {
        "sheet": "assets/europe-clubs/heads-20.png",
        "cell": 4,
        "crop": [
          0.03588516746411483,
          0.24960127591706538,
          0.19059011164274323,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Sporting CP Stadı",
      "city": "Portekiz",
      "architecture": "bowl",
      "seat": "#008127",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#008127",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#008127",
      "socks": "#008127",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2250/roster",
    "wikiTitle": "Sporting CP"
  },
  {
    "name": "Braga",
    "realName": "Braga",
    "short": "SCB",
    "city": "Portekiz",
    "category": "club",
    "country": "Portekiz",
    "league": "Primeira Liga",
    "leagueId": "por.1",
    "espnId": "2994",
    "color": "#de1f26",
    "dark": "#2b6a36",
    "crest": "assets/europe-clubs/crest-2994.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2994.png",
    "players": [
      {
        "name": "Ricardo Horta",
        "realName": "Ricardo Horta",
        "id": "184423",
        "number": 21,
        "portrait": -1,
        "skin": "#df997e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2994/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 6,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "213516",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p213516.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5089885049899542,
            0.9712460063897763,
            0.022364217252396165,
            0.987220447284345
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jonas Wind",
        "realName": "Jonas Wind",
        "id": "271215",
        "number": 19,
        "portrait": -1,
        "skin": "#dd9e8b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2994/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 12,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "241522",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p241522.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5089429224736096,
            0.9584664536741214,
            0,
            0.9744408945686901
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "João Moutinho",
        "realName": "João Moutinho",
        "id": "50959",
        "number": 8,
        "portrait": -1,
        "skin": "#de9b85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2994/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 12,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "162347",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p162347.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5065773706714884,
            0.9776357827476039,
            0,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Bernardo",
      "realName": "Bernardo",
      "id": "340560",
      "number": 31,
      "portrait": -1,
      "skin": "#d79376",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2994/roster",
      "eaId": "232805",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p232805.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-20.png",
        "cell": 8,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5341370235785308,
          0.952076677316294,
          0.01597444089456869,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Carlos Vicens",
      "skin": "#dd957c",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Carlos Vicens",
      "source": "https://en.wikipedia.org/wiki/S.C.%20Braga",
      "head": {
        "sheet": "assets/europe-clubs/heads-20.png",
        "cell": 9,
        "crop": [
          0.28548644338118023,
          0.5023923444976076,
          0.1810207336523126,
          0.24720893141945774
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Braga Stadı",
      "city": "Portekiz",
      "architecture": "bowl",
      "seat": "#de1f26",
      "trim": "#2b6a36"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#de1f26",
      "stripe": "#2b6a36",
      "trim": "#ffffff",
      "shorts": "#2b6a36",
      "shortTrim": "#de1f26",
      "socks": "#de1f26",
      "collar": "#2b6a36",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/2994/roster",
    "wikiTitle": "S.C. Braga"
  },
  {
    "name": "Vitória SC",
    "realName": "Vitória de Guimaraes",
    "short": "VSC",
    "city": "Portekiz",
    "category": "club",
    "country": "Portekiz",
    "league": "Primeira Liga",
    "leagueId": "por.1",
    "espnId": "5309",
    "color": "#ffffff",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-5309.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/5309.png",
    "players": [
      {
        "name": "Samu",
        "realName": "Samu",
        "id": "206714",
        "number": 20,
        "portrait": -1,
        "skin": "#aa705b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/5309/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 22,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "277581",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p277581.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5041422327673981,
            0.9552715654952076,
            0.01597444089456869,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Alan",
        "realName": "Alan",
        "id": "266670",
        "number": 10,
        "portrait": -1,
        "skin": "#ca8565",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 5,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/5309/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 10,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "275545",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p275545.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.49685807520800945,
            0.9424920127795527,
            0.012779552715654952,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "João Mendes",
        "realName": "João Mendes",
        "id": "332686",
        "number": 13,
        "portrait": -1,
        "skin": "#e39b85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/5309/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 14,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "244416",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p244416.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5281330435566417,
            0.9233226837060703,
            0,
            0.9424920127795527
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Oliwier Zych",
      "realName": "Oliwier Zych",
      "id": "312523",
      "number": 48,
      "portrait": -1,
      "skin": "#e29a84",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/5309/roster",
      "eaId": "271411",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p271411.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-20.png",
        "cell": 13,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5070674576136496,
          0.9137380191693291,
          0,
          0.9297124600638977
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Tiago Margarido",
      "skin": "#d7957e",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Tiago Margarido",
      "source": "https://en.wikipedia.org/wiki/Vit%C3%B3ria%20S.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-20.png",
        "cell": 14,
        "crop": [
          0.5350877192982456,
          0.7496012759170654,
          0.18261562998405104,
          0.23444976076555024
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Vitória SC Stadı",
      "city": "Portekiz",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/5309/roster",
    "wikiTitle": "Vitória S.C."
  },
  {
    "name": "Famalicão",
    "realName": "FC Famalicao",
    "short": "FCF",
    "city": "Portekiz",
    "category": "club",
    "country": "Portekiz",
    "league": "Primeira Liga",
    "leagueId": "por.1",
    "espnId": "12698",
    "color": "#FFFFFF",
    "dark": "#183760",
    "crest": "assets/europe-clubs/crest-12698.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/12698.png",
    "players": [
      {
        "name": "Sorriso",
        "realName": "Sorriso",
        "id": "314606",
        "number": 7,
        "portrait": -1,
        "skin": "#cb8a6d",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/12698/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-20.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.49481350401564683,
            0.9201277955271565,
            0,
            0.939297124600639
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 36,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "70971",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p70971.png?padding=0.7"
      },
      {
        "name": "Óscar Aranda",
        "realName": "Óscar Aranda",
        "id": "297368",
        "number": 11,
        "portrait": -1,
        "skin": "#d89888",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/12698/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 20,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "277594",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p277594.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5381230916736646,
            0.9968051118210862,
            0.12779552715654952,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Gustavo Garcia",
        "realName": "Gustavo Garcia",
        "id": "289899",
        "number": 2,
        "portrait": -1,
        "skin": "#cb8d73",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 6,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/12698/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 2,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "73453",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p73453.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5250120355376603,
            0.9968051118210862,
            0.12140575079872204,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Lazar Carevic",
      "realName": "Lazar Carevic",
      "id": "330458",
      "number": 25,
      "portrait": -1,
      "skin": "#e09b87",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/12698/roster",
      "eaId": "240834",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p240834.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-21.png",
        "cell": 2,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5047991443966838,
          0.9968051118210862,
          0.16932907348242812,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Carlos Carvalhal",
      "skin": "#d18874",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Carlos Carvalhal",
      "source": "https://en.wikipedia.org/wiki/F.C.%20Famalic%C3%A3o",
      "head": {
        "sheet": "assets/europe-clubs/heads-21.png",
        "cell": 3,
        "crop": [
          0.7950558213716108,
          0.03110047846889952,
          0.16586921850079744,
          0.21850079744816586
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Famalicão Stadı",
      "city": "Portekiz",
      "architecture": "bowl",
      "seat": "#FFFFFF",
      "trim": "#183760"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#FFFFFF",
      "stripe": "#183760",
      "trim": "#ffffff",
      "shorts": "#183760",
      "shortTrim": "#FFFFFF",
      "socks": "#FFFFFF",
      "collar": "#183760",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/teams/12698/roster",
    "wikiTitle": "F.C. Famalicão"
  },
  {
    "name": "Ajax",
    "realName": "Ajax Amsterdam",
    "short": "AJA",
    "city": "Hollanda",
    "category": "club",
    "country": "Hollanda",
    "league": "Eredivisie",
    "leagueId": "ned.1",
    "espnId": "139",
    "color": "#DF1B27",
    "dark": "#4d6286",
    "crest": "assets/europe-clubs/crest-139.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/139.png",
    "players": [
      {
        "name": "Julian Brandt",
        "realName": "Julian Brandt",
        "id": "197628",
        "number": 8,
        "portrait": -1,
        "skin": "#ca8f85",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/139/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.551721579837585,
            0.9776357827476039,
            0,
            0.9904153354632588
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 83,
          "performance": 46,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "212194",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212194.png?padding=0.7"
      },
      {
        "name": "Thilo Kehrer",
        "realName": "Thilo Kehrer",
        "id": "214401",
        "number": 6,
        "portrait": -1,
        "skin": "#c0846b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/139/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 22,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "226229",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p226229.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.525853153131562,
            0.9808306709265175,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Viktor Tsygankov",
        "realName": "Viktor Tsygankov",
        "id": "212231",
        "number": 11,
        "portrait": -1,
        "skin": "#ca8f83",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 6,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/139/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 22,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "244369",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p244369.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5025972831958075,
            0.9584664536741214,
            0,
            0.9712460063897763
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Marc-André ter Stegen",
      "realName": "Marc-André ter Stegen",
      "id": "140740",
      "number": 1,
      "portrait": -1,
      "skin": "#d49a8f",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/139/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-21.png",
        "cell": 7,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5184769941863511,
          0.9680511182108626,
          0,
          0.9840255591054313
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "192448",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p192448.png?padding=0.7"
    },
    "coach": {
      "name": "Míchel",
      "skin": "#da937e",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Míchel (footballer, born 1975)",
      "source": "https://en.wikipedia.org/wiki/AFC%20Ajax",
      "head": {
        "sheet": "assets/europe-clubs/heads-21.png",
        "cell": 8,
        "crop": [
          0.04784688995215311,
          0.5055821371610846,
          0.17145135566188197,
          0.24401913875598086
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Ajax Stadı",
      "city": "Hollanda",
      "architecture": "bowl",
      "seat": "#DF1B27",
      "trim": "#4d6286"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#DF1B27",
      "stripe": "#4d6286",
      "trim": "#ffffff",
      "shorts": "#4d6286",
      "shortTrim": "#DF1B27",
      "socks": "#DF1B27",
      "collar": "#4d6286",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/139/roster",
    "wikiTitle": "AFC Ajax"
  },
  {
    "name": "PSV Eindhoven",
    "realName": "PSV Eindhoven",
    "short": "PSV",
    "city": "Hollanda",
    "category": "club",
    "country": "Hollanda",
    "league": "Eredivisie",
    "leagueId": "ned.1",
    "espnId": "148",
    "color": "#ef2f24",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-148.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/148.png",
    "players": [
      {
        "name": "Ivan Perisic",
        "realName": "Ivan Perisic",
        "id": "103485",
        "number": 5,
        "portrait": -1,
        "skin": "#df9f8a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/148/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 36,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "181458",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p181458.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5207276451394489,
            0.9584664536741214,
            0.009584664536741214,
            0.9776357827476039
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Filip Kostic",
        "realName": "Filip Kostic",
        "id": "174496",
        "number": 18,
        "portrait": -1,
        "skin": "#e19a80",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/148/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 4,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "208574",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p208574.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5148571274724486,
            0.952076677316294,
            0.025559105431309903,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jerdy Schouten",
        "realName": "Jerdy Schouten",
        "id": "239998",
        "number": 22,
        "portrait": -1,
        "skin": "#e19a8b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/148/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 0,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "235149",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p235149.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5053013995573985,
            0.9361022364217252,
            0.03194888178913738,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Matej Kovár",
      "realName": "Matej Kovár",
      "id": "277313",
      "number": 32,
      "portrait": -1,
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-21.png",
        "cell": 12,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5513118404492207,
          0.8849840255591054,
          0,
          0.9009584664536742
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "skin": "#da998b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/148/roster",
      "eaId": "242948",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p242948.png?padding=0.7"
    },
    "coach": {
      "name": "Peter Bosz",
      "skin": "#e09a89",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Peter Bosz",
      "source": "https://en.wikipedia.org/wiki/PSV%20Eindhoven",
      "head": {
        "sheet": "assets/europe-clubs/heads-21.png",
        "cell": 13,
        "crop": [
          0.29505582137161085,
          0.7511961722488039,
          0.17384370015948963,
          0.22647527910685805
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "PSV Eindhoven Stadı",
      "city": "Hollanda",
      "architecture": "bowl",
      "seat": "#ef2f24",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ef2f24",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#ef2f24",
      "socks": "#ef2f24",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/148/roster",
    "wikiTitle": "PSV Eindhoven"
  },
  {
    "name": "Feyenoord",
    "realName": "Feyenoord Rotterdam",
    "short": "FEY",
    "city": "Hollanda",
    "category": "club",
    "country": "Hollanda",
    "league": "Eredivisie",
    "leagueId": "ned.1",
    "espnId": "142",
    "color": "#ef2f24",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-142.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/142.png",
    "players": [
      {
        "name": "Sem Steijn",
        "realName": "Sem Steijn",
        "id": "277106",
        "number": 14,
        "portrait": -1,
        "skin": "#d9998a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/142/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 14,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "244728",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p244728.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5059799364748181,
            0.8690095846645367,
            0,
            0.8817891373801917
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Charles Vanhoutte",
        "realName": "Charles Vanhoutte",
        "id": "276260",
        "number": 34,
        "portrait": -1,
        "skin": "#d89784",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/142/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 14,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "244889",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p244889.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-21.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5060112276601293,
            0.8913738019169329,
            0,
            0.9105431309904153
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Anis Hadj Moussa",
        "realName": "Anis Hadj Moussa",
        "id": "341711",
        "number": 23,
        "portrait": -1,
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5170804752323687,
            0.9968051118210862,
            0.08945686900958466,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "skin": "#e4a38c",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/142/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 58,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "70726",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p70726.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Tjark Ernst",
      "realName": "Tjark Ernst",
      "id": "335870",
      "number": 1,
      "portrait": -1,
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-22.png",
        "cell": 1,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5158506139815199,
          0.9808306709265175,
          0.08626198083067092,
          0.9968051118210862
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "skin": "#de9d8f",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/142/roster",
      "eaId": "262931",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p262931.png?padding=0.7"
    },
    "coach": {
      "name": "Giovanni van Bronckhorst",
      "skin": "#d18e74",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Giovanni van Bronckhorst",
      "source": "https://en.wikipedia.org/wiki/Feyenoord",
      "head": {
        "sheet": "assets/europe-clubs/heads-22.png",
        "cell": 2,
        "crop": [
          0.5390749601275917,
          0.023923444976076555,
          0.1762360446570973,
          0.22567783094098884
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Feyenoord Stadı",
      "city": "Hollanda",
      "architecture": "bowl",
      "seat": "#ef2f24",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ef2f24",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#ef2f24",
      "socks": "#ef2f24",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/142/roster",
    "wikiTitle": "Feyenoord"
  },
  {
    "name": "AZ Alkmaar",
    "realName": "AZ Alkmaar",
    "short": "AZ",
    "city": "Hollanda",
    "category": "club",
    "country": "Hollanda",
    "league": "Eredivisie",
    "leagueId": "ned.1",
    "espnId": "140",
    "color": "#ef2f24",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-140.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/140.png",
    "players": [
      {
        "name": "Jordy Clasie",
        "realName": "Jordy Clasie",
        "id": "150199",
        "number": 8,
        "portrait": -1,
        "skin": "#e29a89",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 6,
        "jump": 5,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/140/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 16,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "199422",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p199422.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5196353841901248,
            0.987220447284345,
            0.10223642172523961,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Wouter Goes",
        "realName": "Wouter Goes",
        "id": "329972",
        "number": 3,
        "portrait": -1,
        "skin": "#a07067",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/140/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 20,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "273752",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p273752.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5267635025066613,
            0.9840255591054313,
            0,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Calvin Stengs",
        "realName": "Calvin Stengs",
        "id": "248677",
        "number": 14,
        "portrait": -1,
        "skin": "#a66c52",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/140/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 34,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "236593",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236593.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5189995452746954,
            0.9776357827476039,
            0.051118210862619806,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Jari De Busser",
      "realName": "Jari De Busser",
      "id": "255740",
      "number": 28,
      "portrait": -1,
      "skin": "#e0a08d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/140/roster",
      "eaId": "244218",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p244218.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-22.png",
        "cell": 6,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5175905958957615,
          0.987220447284345,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Lee-Roy Echteld",
      "skin": "#da9281",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Lee-Roy Echteld",
      "source": "https://en.wikipedia.org/wiki/AZ%20Alkmaar",
      "head": {
        "sheet": "assets/europe-clubs/heads-22.png",
        "cell": 7,
        "crop": [
          0.7878787878787878,
          0.2631578947368421,
          0.1810207336523126,
          0.23604465709728867
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "AZ Alkmaar Stadı",
      "city": "Hollanda",
      "architecture": "bowl",
      "seat": "#ef2f24",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ef2f24",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#ef2f24",
      "socks": "#ef2f24",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/140/roster",
    "wikiTitle": "AZ Alkmaar"
  },
  {
    "name": "FC Twente",
    "realName": "FC Twente",
    "short": "TWE",
    "city": "Hollanda",
    "category": "club",
    "country": "Hollanda",
    "league": "Eredivisie",
    "leagueId": "ned.1",
    "espnId": "152",
    "color": "#F31522",
    "dark": "#9df9f7",
    "crest": "assets/europe-clubs/crest-152.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/152.png",
    "players": [
      {
        "name": "Wout Weghorst",
        "realName": "Wout Weghorst",
        "id": "177042",
        "number": 9,
        "portrait": -1,
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5381341032078866,
            0.9616613418530351,
            0.009584664536741214,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "skin": "#e69a8a",
        "hair": "#302520",
        "style": "crop",
        "speed": 5,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/152/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 52,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223689",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223689.png?padding=0.7"
      },
      {
        "name": "Daan Rots",
        "realName": "Daan Rots",
        "id": "304905",
        "number": 11,
        "portrait": -1,
        "skin": "#da9d8f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/152/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 26,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "259563",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p259563.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5036178054755738,
            0.9552715654952076,
            0.03514376996805112,
            0.9712460063897763
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Bart van Rooij",
        "realName": "Bart van Rooij",
        "id": "277855",
        "number": 28,
        "portrait": -1,
        "skin": "#db9987",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 6,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/152/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 20,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "262311",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p262311.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5194106467789229,
            0.952076677316294,
            0.02875399361022364,
            0.9680511182108626
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Lars Unnerstall",
      "realName": "Lars Unnerstall",
      "id": "148868",
      "number": 1,
      "portrait": -1,
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-22.png",
        "cell": 11,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5290611943966577,
          0.987220447284345,
          0.02875399361022364,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "skin": "#e09785",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/152/roster",
      "eaId": "199833",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p199833.png?padding=0.7"
    },
    "coach": {
      "name": "John van den Brom",
      "skin": "#e59b86",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "John van den Brom",
      "source": "https://en.wikipedia.org/wiki/FC%20Twente",
      "head": {
        "sheet": "assets/europe-clubs/heads-22.png",
        "cell": 12,
        "crop": [
          0.037480063795853266,
          0.7503987240829346,
          0.18660287081339713,
          0.23444976076555024
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "FC Twente Stadı",
      "city": "Hollanda",
      "architecture": "bowl",
      "seat": "#F31522",
      "trim": "#9df9f7"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#F31522",
      "stripe": "#9df9f7",
      "trim": "#ffffff",
      "shorts": "#9df9f7",
      "shortTrim": "#F31522",
      "socks": "#F31522",
      "collar": "#9df9f7",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/teams/152/roster",
    "wikiTitle": "FC Twente"
  },
  {
    "name": "Club Brugge",
    "realName": "Club Brugge",
    "short": "BRU",
    "city": "Belçika",
    "category": "club",
    "country": "Belçika",
    "league": "Pro League",
    "leagueId": "bel.1",
    "espnId": "570",
    "color": "#0081ff",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-570.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/570.png",
    "players": [
      {
        "name": "Hans Vanaken",
        "realName": "Hans Vanaken",
        "id": "193849",
        "number": 20,
        "portrait": -1,
        "skin": "#e29e8b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/570/roster",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 26,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "200155",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p200155.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5228456081820089,
            0.9105431309904153,
            0,
            0.9265175718849841
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Brandon Mechele",
        "realName": "Brandon Mechele",
        "id": "191222",
        "number": 44,
        "portrait": -1,
        "skin": "#e29885",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/570/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 30,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "212204",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212204.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5181736879552563,
            0.9201277955271565,
            0,
            0.9361022364217252
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Felix Lemarechal",
        "realName": "Felix Lemarechal",
        "id": "324419",
        "number": 80,
        "portrait": -1,
        "skin": "#d79683",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/570/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 20,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "264869",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p264869.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-22.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5209689637455667,
            0.9169329073482428,
            0,
            0.9329073482428115
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Yann Sommer",
      "realName": "Yann Sommer",
      "id": "93197",
      "number": 1,
      "portrait": -1,
      "skin": "#db9a7c",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/570/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-23.png",
        "cell": 0,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.524886354811386,
          0.9968051118210862,
          0.09904153354632587,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "177683",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p177683.png?padding=0.7"
    },
    "coach": {
      "name": "Ivan Leko",
      "skin": "#d7a28d",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Ivan Leko",
      "source": "https://en.wikipedia.org/wiki/Club%20Brugge%20KV",
      "head": {
        "sheet": "assets/europe-clubs/heads-23.png",
        "cell": 1,
        "crop": [
          0.291866028708134,
          0.011164274322169059,
          0.17783094098883573,
          0.23843700159489634
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Club Brugge Stadı",
      "city": "Belçika",
      "architecture": "bowl",
      "seat": "#0081ff",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0081ff",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#0081ff",
      "socks": "#0081ff",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/570/roster",
    "wikiTitle": "Club Brugge KV"
  },
  {
    "name": "Anderlecht",
    "realName": "Anderlecht",
    "short": "AND",
    "city": "Belçika",
    "category": "club",
    "country": "Belçika",
    "league": "Pro League",
    "leagueId": "bel.1",
    "espnId": "441",
    "color": "#695196",
    "dark": "#fafafc",
    "crest": "assets/europe-clubs/crest-441.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/441.png",
    "players": [
      {
        "name": "Oliver Antman",
        "realName": "Oliver Antman",
        "id": "285974",
        "number": 11,
        "portrait": -1,
        "skin": "#d09582",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/441/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 14,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "247447",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p247447.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5141703989552051,
            0.9840255591054313,
            0.08306709265175719,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Adriano Bertaccini",
        "realName": "Adriano Bertaccini",
        "id": "277376",
        "number": 91,
        "portrait": -1,
        "skin": "#de957f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/441/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 12,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "251156",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p251156.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5118427640169912,
            0.9968051118210862,
            0.09584664536741214,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Danylo Sikan",
        "realName": "Danylo Sikan",
        "id": "288490",
        "number": 14,
        "portrait": -1,
        "skin": "#dc9f8a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/441/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 22,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "247122",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p247122.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.524346569298646,
            0.9840255591054313,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Colin Coosemans",
      "realName": "Colin Coosemans",
      "id": "152749",
      "number": 26,
      "portrait": -1,
      "skin": "#da9e8b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/441/roster",
      "eaId": "200059",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p200059.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-23.png",
        "cell": 5,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5256419248119404,
          0.987220447284345,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Vítor Bruno",
      "skin": "#d39077",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Vítor Bruno (football manager)",
      "source": "https://en.wikipedia.org/wiki/RSC%20Anderlecht",
      "head": {
        "sheet": "assets/europe-clubs/heads-23.png",
        "cell": 6,
        "crop": [
          0.5406698564593302,
          0.26555023923444976,
          0.1722488038277512,
          0.23365231259968103
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Anderlecht Stadı",
      "city": "Belçika",
      "architecture": "bowl",
      "seat": "#695196",
      "trim": "#fafafc"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#695196",
      "stripe": "#fafafc",
      "trim": "#ffffff",
      "shorts": "#fafafc",
      "shortTrim": "#695196",
      "socks": "#695196",
      "collar": "#fafafc",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/441/roster",
    "wikiTitle": "R.S.C. Anderlecht"
  },
  {
    "name": "Genk",
    "realName": "Racing Genk",
    "short": "GENK",
    "city": "Belçika",
    "category": "club",
    "country": "Belçika",
    "league": "Pro League",
    "leagueId": "bel.1",
    "espnId": "938",
    "color": "#0000ff",
    "dark": "#cccccc",
    "crest": "assets/europe-clubs/crest-938.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/938.png",
    "players": [
      {
        "name": "Bryan Heynen",
        "realName": "Bryan Heynen",
        "id": "223337",
        "number": 8,
        "portrait": -1,
        "skin": "#d6988b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/938/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 22,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "229659",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p229659.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5183775793841396,
            0.987220447284345,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Junya Ito",
        "realName": "Junya Ito",
        "id": "219350",
        "number": 10,
        "portrait": -1,
        "skin": "#e39d81",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/938/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5365968571437636,
            0.9456869009584664,
            0.051118210862619806,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 34,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "232905",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p232905.png?padding=0.7"
      },
      {
        "name": "Matte Smets",
        "realName": "Matte Smets",
        "id": "346609",
        "number": 6,
        "portrait": -1,
        "skin": "#e7a18b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/938/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 12,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "271032",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p271032.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5195851224264016,
            0.9329073482428115,
            0.03514376996805112,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Lucca Kiaba Mounganga",
      "realName": "Lucca Kiaba Mounganga",
      "id": "387927",
      "number": 28,
      "portrait": -1,
      "skin": "#9e634e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/938/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-23.png",
        "cell": 10,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5075651020898081,
          0.9329073482428115,
          0.02875399361022364,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Jess Thorup",
      "skin": "#e49581",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Jess Thorup",
      "source": "https://en.wikipedia.org/wiki/KRC%20Genk",
      "head": {
        "sheet": "assets/europe-clubs/heads-23.png",
        "cell": 11,
        "crop": [
          0.7870813397129187,
          0.5127591706539075,
          0.1810207336523126,
          0.23684210526315788
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Genk Stadı",
      "city": "Belçika",
      "architecture": "bowl",
      "seat": "#0000ff",
      "trim": "#cccccc"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0000ff",
      "stripe": "#cccccc",
      "trim": "#ffffff",
      "shorts": "#cccccc",
      "shortTrim": "#0000ff",
      "socks": "#0000ff",
      "collar": "#cccccc",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/938/roster",
    "wikiTitle": "K.R.C. Genk"
  },
  {
    "name": "Gent",
    "realName": "KAA Gent",
    "short": "GENT",
    "city": "Belçika",
    "category": "club",
    "country": "Belçika",
    "league": "Pro League",
    "leagueId": "bel.1",
    "espnId": "3611",
    "color": "#0000ff",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-3611.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/3611.png",
    "players": [
      {
        "name": "Christian Burgess",
        "realName": "Christian Burgess",
        "id": "181403",
        "number": 16,
        "portrait": -1,
        "skin": "#e89b8a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/3611/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 22,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "210044",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210044.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5300723832954617,
            0.9424920127795527,
            0,
            0.9584664536741214
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Michel-Ange Balikwisha",
        "realName": "Michel-Ange Balikwisha",
        "id": "304204",
        "number": 7,
        "portrait": -1,
        "skin": "#ba7456",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/3611/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 10,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "257208",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p257208.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5182622908087964,
            0.939297124600639,
            0,
            0.9584664536741214
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Siebe van der Heyden",
        "realName": "Siebe van der Heyden",
        "id": "240517",
        "number": 44,
        "portrait": -1,
        "skin": "#e09c87",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/3611/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 20,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "234167",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234167.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-23.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5116059903124516,
            0.9233226837060703,
            0,
            0.939297124600639
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Davy Roef",
      "realName": "Davy Roef",
      "id": "178363",
      "number": 33,
      "portrait": -1,
      "skin": "#e49a82",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/3611/roster",
      "eaId": "204549",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p204549.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-23.png",
        "cell": 15,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5123864405855325,
          0.939297124600639,
          0,
          0.9552715654952076
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Rik De Mil",
      "skin": "#c58c7a",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Rik De Mil",
      "source": "https://en.wikipedia.org/wiki/KAA%20Gent",
      "head": {
        "sheet": "assets/europe-clubs/heads-24.png",
        "cell": 0,
        "crop": [
          0.046251993620414676,
          0.017543859649122806,
          0.1762360446570973,
          0.23205741626794257
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Gent Stadı",
      "city": "Belçika",
      "architecture": "bowl",
      "seat": "#0000ff",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0000ff",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#0000ff",
      "socks": "#0000ff",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/3611/roster",
    "wikiTitle": "K.A.A. Gent"
  },
  {
    "name": "Union Saint-Gilloise",
    "realName": "Union St.-Gilloise",
    "short": "USG",
    "city": "Belçika",
    "category": "club",
    "country": "Belçika",
    "league": "Pro League",
    "leagueId": "bel.1",
    "espnId": "5807",
    "color": "#FCEE33",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-5807.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/5807.png",
    "players": [
      {
        "name": "Adem Zorgane",
        "realName": "Adem Zorgane",
        "id": "298901",
        "number": 8,
        "portrait": -1,
        "skin": "#d5997f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/5807/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 20,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "262925",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p262925.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5057772594523609,
            0.9968051118210862,
            0.10223642172523961,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Rob Schoofs",
        "realName": "Rob Schoofs",
        "id": "157133",
        "number": 17,
        "portrait": -1,
        "skin": "#d69480",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/5807/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 26,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "205369",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p205369.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4988578393323775,
            0.987220447284345,
            0.10223642172523961,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Kevin Mac Allister",
        "realName": "Kevin Mac Allister",
        "id": "234337",
        "number": 5,
        "portrait": -1,
        "skin": "#e09986",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/5807/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 20,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "233230",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p233230.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5055735768066498,
            0.987220447284345,
            0.09904153354632587,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Hervé Koffi",
      "realName": "Hervé Koffi",
      "id": "247940",
      "number": 70,
      "portrait": -1,
      "skin": "#906459",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/5807/roster",
      "eaId": "239342",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239342.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-24.png",
        "cell": 4,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5586787059275169,
          0.9808306709265175,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "David Hubert",
      "skin": "#d59784",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "David Hubert",
      "source": "https://en.wikipedia.org/wiki/Royale%20Union%20Saint-Gilloise",
      "head": {
        "sheet": "assets/europe-clubs/heads-24.png",
        "cell": 5,
        "crop": [
          0.28708133971291866,
          0.24960127591706538,
          0.17942583732057416,
          0.24401913875598086
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Union Saint-Gilloise Stadı",
      "city": "Belçika",
      "architecture": "bowl",
      "seat": "#FCEE33",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#FCEE33",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#FCEE33",
      "socks": "#FCEE33",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/teams/5807/roster",
    "wikiTitle": "Royale Union Saint-Gilloise"
  },
  {
    "name": "Celtic",
    "realName": "Celtic",
    "short": "CEL",
    "city": "İskoçya",
    "category": "club",
    "country": "İskoçya",
    "league": "Premiership",
    "leagueId": "sco.1",
    "espnId": "256",
    "color": "#009921",
    "dark": "#f9e900",
    "crest": "assets/europe-clubs/crest-256.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/256.png",
    "players": [
      {
        "name": "Callum McGregor",
        "realName": "Callum McGregor",
        "id": "84049",
        "number": 42,
        "portrait": -1,
        "skin": "#e19d88",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/256/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 12,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "211093",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211093.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5028124239643649,
            0.9648562300319489,
            0.038338658146964855,
            0.9808306709265175
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Cameron Carter-Vickers",
        "realName": "Cameron Carter-Vickers",
        "id": "219273",
        "number": 20,
        "portrait": -1,
        "skin": "#d08c71",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/256/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 12,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "228174",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p228174.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4970103663366856,
            0.9840255591054313,
            0.04153354632587859,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Alistair Johnston",
        "realName": "Alistair Johnston",
        "id": "293691",
        "number": 2,
        "portrait": -1,
        "skin": "#dd9986",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/256/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 4,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "256107",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p256107.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5528585524930356,
            0.9424920127795527,
            0.019169329073482427,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Viljami Sinisalo",
      "realName": "Viljami Sinisalo",
      "id": "307098",
      "number": 1,
      "portrait": -1,
      "skin": "#e7a190",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/256/roster",
      "eaId": "258928",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p258928.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-24.png",
        "cell": 9,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5190362087326944,
          0.9297124600638977,
          0.012779552715654952,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Martin O'Neill",
      "skin": "#d58c78",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Martin O'Neill",
      "source": "https://en.wikipedia.org/wiki/Celtic%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-24.png",
        "cell": 10,
        "crop": [
          0.5263157894736842,
          0.5063795853269537,
          0.19936204146730463,
          0.24322169059011164
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Celtic Stadı",
      "city": "İskoçya",
      "architecture": "bowl",
      "seat": "#009921",
      "trim": "#f9e900"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#009921",
      "stripe": "#f9e900",
      "trim": "#ffffff",
      "shorts": "#f9e900",
      "shortTrim": "#009921",
      "socks": "#009921",
      "collar": "#f9e900",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/256/roster",
    "wikiTitle": "Celtic F.C."
  },
  {
    "name": "Rangers",
    "realName": "Rangers",
    "short": "RAN",
    "city": "İskoçya",
    "category": "club",
    "country": "İskoçya",
    "league": "Premiership",
    "leagueId": "sco.1",
    "espnId": "257",
    "color": "#0046ff",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-257.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/257.png",
    "players": [
      {
        "name": "Nicolas Raskin",
        "realName": "Nicolas Raskin",
        "id": "260027",
        "number": 43,
        "portrait": -1,
        "skin": "#e4a18f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/257/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "239810",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239810.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5100443324129499,
            0.939297124600639,
            0.012779552715654952,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Badredine Bouanani",
        "realName": "Badredine Bouanani",
        "id": "345115",
        "number": 26,
        "portrait": -1,
        "skin": "#e19e85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/257/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 4,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "270465",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p270465.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5417160049747909,
            0.9073482428115016,
            0,
            0.9265175718849841
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Lawrence Shankland",
        "realName": "Lawrence Shankland",
        "id": "173306",
        "number": 7,
        "portrait": -1,
        "skin": "#e19b87",
        "hair": "#302520",
        "style": "crop",
        "speed": 6,
        "shot": 8,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/257/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-24.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5240591475276174,
            0.8945686900958466,
            0,
            0.9105431309904153
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 34,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "216218",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p216218.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Ivor Pandur",
      "realName": "Ivor Pandur",
      "id": "277234",
      "number": 1,
      "portrait": -1,
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-24.png",
        "cell": 14,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5033704137895496,
          0.8977635782747604,
          0,
          0.9137380191693291
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "skin": "#de9c87",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/257/roster",
      "eaId": "258585",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p258585.png?padding=0.7"
    },
    "coach": {
      "name": "Derek McInnes",
      "skin": "#c77d6c",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Derek McInnes",
      "source": "https://en.wikipedia.org/wiki/Rangers%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-24.png",
        "cell": 15,
        "crop": [
          0.7799043062200957,
          0.7496012759170654,
          0.18660287081339713,
          0.23923444976076555
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Rangers Stadı",
      "city": "İskoçya",
      "architecture": "bowl",
      "seat": "#0046ff",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#0046ff",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#0046ff",
      "socks": "#0046ff",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/257/roster",
    "wikiTitle": "Rangers F.C."
  },
  {
    "name": "Hearts",
    "realName": "Heart of Midlothian",
    "short": "HOM",
    "city": "İskoçya",
    "category": "club",
    "country": "İskoçya",
    "league": "Premiership",
    "leagueId": "sco.1",
    "espnId": "262",
    "color": "#8E003B",
    "dark": "#ead6b7",
    "crest": "assets/europe-clubs/crest-262.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/262.png",
    "players": [
      {
        "name": "Blair Spittal",
        "realName": "Blair Spittal",
        "id": "178894",
        "number": 16,
        "portrait": -1,
        "skin": "#dca499",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/262/roster",
        "selection": {
          "method": "EA overall",
          "overall": 69,
          "performance": 14,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223663",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223663.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.534545655612902,
            0.9968051118210862,
            0.0926517571884984,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Craig Halkett",
        "realName": "Craig Halkett",
        "id": "180078",
        "number": 4,
        "portrait": -1,
        "skin": "#db9788",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/262/roster",
        "selection": {
          "method": "EA overall",
          "overall": 69,
          "performance": 0,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "222045",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p222045.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5225601999763341,
            0.9968051118210862,
            0.08626198083067092,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Stephen Kingsley",
        "realName": "Stephen Kingsley",
        "id": "150601",
        "number": 3,
        "portrait": -1,
        "skin": "#d99e92",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/262/roster",
        "selection": {
          "method": "EA overall",
          "overall": 67,
          "performance": 12,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223747",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223747.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5059074062455979,
            0.9968051118210862,
            0.09584664536741214,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Beau Reus",
      "realName": "Beau Reus",
      "id": "277882",
      "number": 1,
      "portrait": -1,
      "skin": "#c18268",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/262/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-25.png",
        "cell": 3,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.4982415077786248,
          0.9968051118210862,
          0.0926517571884984,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Wouter Vrancken",
      "skin": "#c78c7b",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Wouter Vrancken",
      "source": "https://en.wikipedia.org/wiki/Heart%20of%20Midlothian%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-25.png",
        "cell": 4,
        "crop": [
          0.04226475279106858,
          0.24960127591706538,
          0.1810207336523126,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Hearts Stadı",
      "city": "İskoçya",
      "architecture": "bowl",
      "seat": "#8E003B",
      "trim": "#ead6b7"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#8E003B",
      "stripe": "#ead6b7",
      "trim": "#ffffff",
      "shorts": "#ead6b7",
      "shortTrim": "#8E003B",
      "socks": "#8E003B",
      "collar": "#ead6b7",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/262/roster",
    "wikiTitle": "Heart of Midlothian F.C."
  },
  {
    "name": "Hibernian",
    "realName": "Hibernian",
    "short": "HIBS",
    "city": "İskoçya",
    "category": "club",
    "country": "İskoçya",
    "league": "Premiership",
    "leagueId": "sco.1",
    "espnId": "258",
    "color": "#009f00",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-258.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/258.png",
    "players": [
      {
        "name": "Martin Boyle",
        "realName": "Martin Boyle",
        "id": "139748",
        "number": 10,
        "portrait": -1,
        "skin": "#db9f90",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/258/roster",
        "selection": {
          "method": "EA overall",
          "overall": 71,
          "performance": 36,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "211221",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211221.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5256071247927164,
            0.9904153354632588,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Felix Passlack",
        "realName": "Felix Passlack",
        "id": "225573",
        "number": 25,
        "portrait": -1,
        "skin": "#d39889",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 6,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/258/roster",
        "selection": {
          "method": "EA overall",
          "overall": 71,
          "performance": 20,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "228080",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p228080.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5117021385682038,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Grant Hanley",
        "realName": "Grant Hanley",
        "id": "146577",
        "number": 4,
        "portrait": -1,
        "skin": "#dda195",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/258/roster",
        "selection": {
          "method": "EA overall",
          "overall": 71,
          "performance": 16,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "198904",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p198904.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5165725425540787,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Raphael Sallinger",
      "realName": "Raphael Sallinger",
      "id": "218661",
      "number": 1,
      "portrait": -1,
      "skin": "#d89e91",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/258/roster",
      "eaId": "228562",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p228562.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-25.png",
        "cell": 8,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5476850805441695,
          0.9648562300319489,
          0,
          0.9840255591054313
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Marink Reedijk",
      "skin": "#d48f77",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Marink Reedijk",
      "source": "https://en.wikipedia.org/wiki/Hibernian%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-25.png",
        "cell": 9,
        "crop": [
          0.2966507177033493,
          0.5087719298245614,
          0.17862838915470494,
          0.23524720893141945
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Hibernian Stadı",
      "city": "İskoçya",
      "architecture": "bowl",
      "seat": "#009f00",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#009f00",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#009f00",
      "socks": "#009f00",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/teams/258/roster",
    "wikiTitle": "Hibernian F.C."
  },
  {
    "name": "Olympiacos",
    "realName": "Olympiacos",
    "short": "OLY",
    "city": "Yunanistan",
    "category": "club",
    "country": "Yunanistan",
    "league": "Super League",
    "leagueId": "gre.1",
    "espnId": "435",
    "color": "#d01729",
    "dark": "#0202fb",
    "crest": "assets/europe-clubs/crest-435.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/435.png",
    "players": [
      {
        "name": "Remo Freuler",
        "realName": "Remo Freuler",
        "id": "152600",
        "number": 19,
        "portrait": -1,
        "skin": "#d49887",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/435/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 14,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "202024",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p202024.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5115863661789983,
            0.9680511182108626,
            0,
            0.9840255591054313
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Ayoub El Kaabi",
        "realName": "Ayoub El Kaabi",
        "id": "269562",
        "number": 9,
        "portrait": -1,
        "skin": "#c17c60",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/435/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5104736258035488,
            0.9456869009584664,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 80,
          "performance": 6,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "243586",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p243586.png?padding=0.7"
      },
      {
        "name": "Leon Bailey",
        "realName": "Leon Bailey",
        "id": "224809",
        "number": 17,
        "portrait": -1,
        "skin": "#c2795a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/435/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 2,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "229906",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p229906.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.536484690189128,
            0.9297124600638977,
            0.006389776357827476,
            0.9456869009584664
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Stefan Ortega",
      "realName": "Stefan Ortega",
      "id": "151855",
      "number": 1,
      "portrait": -1,
      "skin": "#e09b84",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/435/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-25.png",
        "cell": 13,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5460999612255296,
          0.9265175718849841,
          0,
          0.9424920127795527
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "200159",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p200159.png?padding=0.7"
    },
    "coach": {
      "name": "Imanol Alguacil",
      "skin": "#cc8971",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Imanol Alguacil",
      "source": "https://en.wikipedia.org/wiki/Olympiacos%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-25.png",
        "cell": 14,
        "crop": [
          0.5382775119617225,
          0.7496012759170654,
          0.17384370015948963,
          0.23285486443381181
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Olympiacos Stadı",
      "city": "Yunanistan",
      "architecture": "bowl",
      "seat": "#d01729",
      "trim": "#0202fb"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#d01729",
      "stripe": "#0202fb",
      "trim": "#ffffff",
      "shorts": "#0202fb",
      "shortTrim": "#d01729",
      "socks": "#d01729",
      "collar": "#0202fb",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/435/roster",
    "wikiTitle": "Olympiacos F.C."
  },
  {
    "name": "Panathinaikos",
    "realName": "Panathinaikos",
    "short": "PAO",
    "city": "Yunanistan",
    "category": "club",
    "country": "Yunanistan",
    "league": "Super League",
    "leagueId": "gre.1",
    "espnId": "443",
    "color": "#2b6a36",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-443.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/443.png",
    "players": [
      {
        "name": "Stefan de Vrij",
        "realName": "Stefan de Vrij",
        "id": "141443",
        "number": 6,
        "portrait": -1,
        "skin": "#de9882",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/443/roster",
        "selection": {
          "method": "EA overall",
          "overall": 84,
          "performance": 10,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "198176",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p198176.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-25.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5131654125569594,
            0.9233226837060703,
            0,
            0.9424920127795527
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Davide Calabria",
        "realName": "Davide Calabria",
        "id": "194747",
        "number": 2,
        "portrait": -1,
        "skin": "#e39c8a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/443/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 18,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "228881",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p228881.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5340203126865645,
            0.9584664536741214,
            0.06070287539936102,
            0.9776357827476039
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Azzedine Ounahi",
        "realName": "Azzedine Ounahi",
        "id": "291552",
        "number": 21,
        "portrait": -1,
        "skin": "#d59379",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/443/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 16,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "255125",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p255125.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.520374628009515,
            0.9808306709265175,
            0.051118210862619806,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Iñaki Peña",
      "realName": "Iñaki Peña",
      "id": "282680",
      "number": 1,
      "portrait": -1,
      "skin": "#e1a28d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/443/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-26.png",
        "cell": 2,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5218691996581982,
          0.9616613418530351,
          0.07348242811501597,
          0.9776357827476039
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "246139",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p246139.png?padding=0.7"
    },
    "coach": {
      "name": "Jacob Neestrup",
      "skin": "#dd9a85",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Jacob Neestrup",
      "source": "https://en.wikipedia.org/wiki/Panathinaikos%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-26.png",
        "cell": 3,
        "crop": [
          0.7950558213716108,
          0.019138755980861243,
          0.16507177033492823,
          0.22488038277511962
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Panathinaikos Stadı",
      "city": "Yunanistan",
      "architecture": "bowl",
      "seat": "#2b6a36",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#2b6a36",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#2b6a36",
      "socks": "#2b6a36",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/443/roster",
    "wikiTitle": "Panathinaikos F.C."
  },
  {
    "name": "AEK Atina",
    "realName": "AEK Athens",
    "short": "AEK",
    "city": "Yunanistan",
    "category": "club",
    "country": "Yunanistan",
    "league": "Super League",
    "leagueId": "gre.1",
    "espnId": "887",
    "color": "#ffff00",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-887.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/887.png",
    "players": [
      {
        "name": "Lovro Majer",
        "realName": "Lovro Majer",
        "id": "237549",
        "number": 14,
        "portrait": -1,
        "skin": "#e49f87",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/887/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 22,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "244261",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p244261.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5494147496738627,
            0.9265175718849841,
            0.02875399361022364,
            0.9424920127795527
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "João Mário",
        "realName": "João Mário",
        "id": "169402",
        "number": 23,
        "portrait": -1,
        "skin": "#be7b5d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/887/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 8,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "212814",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212814.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5270938343854544,
            0.8945686900958466,
            0.04472843450479233,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Oleksandr Zubkov",
        "realName": "Oleksandr Zubkov",
        "id": "228267",
        "number": 10,
        "portrait": -1,
        "skin": "#e49787",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/887/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5133526942665794,
            0.9105431309904153,
            0.022364217252396165,
            0.9329073482428115
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "237055",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p237055.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Thomas Strakosha",
      "realName": "Thomas Strakosha",
      "id": "180047",
      "number": 1,
      "portrait": -1,
      "skin": "#dd9679",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/887/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-26.png",
        "cell": 7,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5193195437350795,
          0.9297124600638977,
          0.022364217252396165,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "212151",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212151.png?padding=0.7"
    },
    "coach": {
      "name": "Marko Nikolić",
      "skin": "#e69c8b",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Marko Nikolić (football manager)",
      "source": "https://en.wikipedia.org/wiki/AEK%20Athens%20F.C.",
      "head": {
        "sheet": "assets/europe-clubs/heads-26.png",
        "cell": 8,
        "crop": [
          0.04784688995215311,
          0.5015948963317385,
          0.17703349282296652,
          0.24800637958532695
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "AEK Atina Stadı",
      "city": "Yunanistan",
      "architecture": "bowl",
      "seat": "#ffff00",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffff00",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#ffff00",
      "socks": "#ffff00",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/887/roster",
    "wikiTitle": "AEK Athens F.C."
  },
  {
    "name": "PAOK",
    "realName": "PAOK",
    "short": "PAOK",
    "city": "Yunanistan",
    "category": "club",
    "country": "Yunanistan",
    "league": "Super League",
    "leagueId": "gre.1",
    "espnId": "605",
    "color": "#000000",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-605.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/605.png",
    "players": [
      {
        "name": "Simon Banza",
        "realName": "Simon Banza",
        "id": "231161",
        "number": 24,
        "portrait": -1,
        "skin": "#9d6149",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 8,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/605/roster",
        "selection": {
          "method": "EA overall",
          "overall": 81,
          "performance": 0,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "231652",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p231652.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5524237954960248,
            0.9137380191693291,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Andrija Zivkovic",
        "realName": "Andrija Zivkovic",
        "id": "193282",
        "number": 14,
        "portrait": -1,
        "skin": "#eca694",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/605/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 38,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "220746",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p220746.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5269437625667658,
            0.9073482428115016,
            0.006389776357827476,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Aritz Elustondo",
        "realName": "Aritz Elustondo",
        "id": "214742",
        "number": 6,
        "portrait": -1,
        "skin": "#e39f86",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/605/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "226221",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p226221.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5191080276072956,
            0.9105431309904153,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Jirí Pavlenka",
      "realName": "Jirí Pavlenka",
      "id": "212928",
      "number": 1,
      "portrait": -1,
      "skin": "#e49985",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/605/roster",
      "eaId": "236583",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p236583.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-26.png",
        "cell": 12,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5320756630660783,
          0.9105431309904153,
          0,
          0.9265175718849841
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Alessio Lisci",
      "skin": "#d78f77",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Alessio Lisci",
      "source": "https://en.wikipedia.org/wiki/PAOK%20FC",
      "head": {
        "sheet": "assets/europe-clubs/heads-26.png",
        "cell": 13,
        "crop": [
          0.29505582137161085,
          0.7496012759170654,
          0.1682615629984051,
          0.22807017543859648
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "PAOK Stadı",
      "city": "Yunanistan",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#000000",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#000000",
      "socks": "#000000",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/teams/605/roster",
    "wikiTitle": "PAOK FC"
  },
  {
    "name": "Red Bull Salzburg",
    "realName": "RB Salzburg",
    "short": "SLZ",
    "city": "Avusturya",
    "category": "club",
    "country": "Avusturya",
    "league": "Bundesliga",
    "leagueId": "aut.1",
    "espnId": "2790",
    "color": "#d82c3a",
    "dark": "#052a87",
    "crest": "assets/europe-clubs/crest-2790.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2790.png",
    "players": [
      {
        "name": "Jesper Lindstrom",
        "realName": "Jesper Lindstrom",
        "id": "278822",
        "number": 35,
        "portrait": -1,
        "skin": "#e29d89",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/2790/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 0,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "245741",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p245741.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5112631703229603,
            0.8785942492012779,
            0,
            0.8977635782747604
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Yorbe Vertessen",
        "realName": "Yorbe Vertessen",
        "id": "291669",
        "number": 11,
        "portrait": -1,
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-26.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5258131214320017,
            0.9009584664536742,
            0,
            0.9169329073482428
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "skin": "#e89c8c",
        "hair": "#302520",
        "style": "crop",
        "speed": 9,
        "shot": 7,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/2790/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 34,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "260020",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p260020.png?padding=0.7"
      },
      {
        "name": "Dominik Schmid",
        "realName": "Dominik Schmid",
        "id": "136597",
        "number": 31,
        "portrait": -1,
        "skin": "#d79985",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/2790/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 18,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "239016",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239016.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5179505284164485,
            0.9968051118210862,
            0.09904153354632587,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Christian Zawieschitzky",
      "realName": "Christian Zawieschitzky",
      "id": "374530",
      "number": 52,
      "portrait": -1,
      "skin": "#d69789",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/2790/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-27.png",
        "cell": 1,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5197200951794994,
          0.9968051118210862,
          0.07348242811501597,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "75825",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p75825.png?padding=0.7"
    },
    "coach": {
      "name": "Danny Röhl",
      "skin": "#8f6d69",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Danny Röhl",
      "source": "https://en.wikipedia.org/wiki/FC%20Red%20Bull%20Salzburg",
      "head": {
        "sheet": "assets/europe-clubs/heads-27.png",
        "cell": 2,
        "crop": [
          0.5374800637958532,
          0.011164274322169059,
          0.17543859649122806,
          0.23843700159489634
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Red Bull Salzburg Stadı",
      "city": "Avusturya",
      "architecture": "bowl",
      "seat": "#d82c3a",
      "trim": "#052a87"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#d82c3a",
      "stripe": "#052a87",
      "trim": "#ffffff",
      "shorts": "#052a87",
      "shortTrim": "#d82c3a",
      "socks": "#d82c3a",
      "collar": "#052a87",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/2790/roster",
    "wikiTitle": "FC Red Bull Salzburg"
  },
  {
    "name": "Sturm Graz",
    "realName": "SK Sturm Graz",
    "short": "STG",
    "city": "Avusturya",
    "category": "club",
    "country": "Avusturya",
    "league": "Bundesliga",
    "leagueId": "aut.1",
    "espnId": "3746",
    "color": "#ffffff",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-3746.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/3746.png",
    "players": [
      {
        "name": "Otar Kiteishvili",
        "realName": "Otar Kiteishvili",
        "id": "221130",
        "number": 10,
        "portrait": -1,
        "skin": "#d79a86",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 7,
        "jump": 6,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/3746/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5172164930947234,
            0.9968051118210862,
            0.0926517571884984,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 0,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "245058",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p245058.png?padding=0.7"
      },
      {
        "name": "Jon Gorenc Stankovic",
        "realName": "Jon Gorenc Stankovic",
        "id": "214012",
        "number": 4,
        "portrait": -1,
        "skin": "#d3947f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/3746/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 14,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "226129",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p226129.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5237441620546041,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Oumar Diakité",
        "realName": "Oumar Diakité",
        "id": "329483",
        "number": 14,
        "portrait": -1,
        "skin": "#7f5950",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/3746/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "277178",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p277178.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5112329188960314,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Danill Khudiakov",
      "realName": "Danill Khudiakov",
      "id": "318018",
      "number": 53,
      "portrait": -1,
      "skin": "#d79a89",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/3746/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-27.png",
        "cell": 6,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5065802049155,
          0.9968051118210862,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Fabio Ingolitsch",
      "skin": "#cf917e",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Fabio Ingolitsch",
      "source": "https://en.wikipedia.org/wiki/SK%20Sturm%20Graz",
      "head": {
        "sheet": "assets/europe-clubs/heads-27.png",
        "cell": 7,
        "crop": [
          0.7862838915470495,
          0.24960127591706538,
          0.18181818181818182,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Sturm Graz Stadı",
      "city": "Avusturya",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/3746/roster",
    "wikiTitle": "SK Sturm Graz"
  },
  {
    "name": "Rapid Wien",
    "realName": "Rapid Vienna",
    "short": "VIE",
    "city": "Avusturya",
    "category": "club",
    "country": "Avusturya",
    "league": "Bundesliga",
    "leagueId": "aut.1",
    "espnId": "519",
    "color": "#2b6a36",
    "dark": "#dc1f26",
    "crest": "assets/europe-clubs/crest-519.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/519.png",
    "players": [
      {
        "name": "Matthias Seidl",
        "realName": "Matthias Seidl",
        "id": "364532",
        "number": 18,
        "portrait": -1,
        "skin": "#d99987",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/519/roster",
        "selection": {
          "method": "EA overall",
          "overall": 71,
          "performance": 34,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "275638",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p275638.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5254290998085667,
            0.9712460063897763,
            0,
            0.987220447284345
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Nenad Cvetkovic",
        "realName": "Nenad Cvetkovic",
        "id": "321883",
        "number": 55,
        "portrait": -1,
        "skin": "#e59e85",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/519/roster",
        "selection": {
          "method": "EA overall",
          "overall": 71,
          "performance": 28,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "275918",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p275918.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5137805994816665,
            0.9776357827476039,
            0,
            0.9904153354632588
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Tonni Adamsen",
        "realName": "Tonni Adamsen",
        "id": "347071",
        "number": 8,
        "portrait": -1,
        "skin": "#db9b8d",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/519/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5098352156042625,
            0.9840255591054313,
            0,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 70,
          "performance": 52,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "271320",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p271320.png?padding=0.7"
      }
    ],
    "keeper": {
      "name": "Niklas Hedl",
      "realName": "Niklas Hedl",
      "id": "303858",
      "number": 1,
      "portrait": -1,
      "skin": "#d99e90",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/519/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-27.png",
        "cell": 11,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5185429391772414,
          0.9680511182108626,
          0,
          0.9840255591054313
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "256938",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p256938.png?padding=0.7"
    },
    "coach": {
      "name": "Johannes Hoff Thorup",
      "skin": "#e39b83",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Johannes Hoff Thorup",
      "source": "https://en.wikipedia.org/wiki/SK%20Rapid%20Wien",
      "head": {
        "sheet": "assets/europe-clubs/heads-27.png",
        "cell": 12,
        "crop": [
          0.03827751196172249,
          0.7527910685805422,
          0.18261562998405104,
          0.23444976076555024
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Rapid Wien Stadı",
      "city": "Avusturya",
      "architecture": "bowl",
      "seat": "#2b6a36",
      "trim": "#dc1f26"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#2b6a36",
      "stripe": "#dc1f26",
      "trim": "#ffffff",
      "shorts": "#dc1f26",
      "shortTrim": "#2b6a36",
      "socks": "#2b6a36",
      "collar": "#dc1f26",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/aut.1/teams/519/roster",
    "wikiTitle": "SK Rapid Wien"
  },
  {
    "name": "Basel",
    "realName": "FC Basel",
    "short": "FCB",
    "city": "İsviçre",
    "category": "club",
    "country": "İsviçre",
    "league": "Super League",
    "leagueId": "sui.1",
    "espnId": "989",
    "color": "#C8142F",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-989.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/989.png",
    "players": [
      {
        "name": "Xherdan Shaqiri",
        "realName": "Xherdan Shaqiri",
        "id": "136775",
        "number": 10,
        "portrait": -1,
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5391919512630723,
            0.9424920127795527,
            0.003194888178913738,
            0.9584664536741214
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "skin": "#ce907d",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 8,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/989/roster",
        "selection": {
          "method": "EA overall",
          "overall": 78,
          "performance": 64,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "193348",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p193348.png?padding=0.7"
      },
      {
        "name": "Bénie Traoré",
        "realName": "Bénie Traoré",
        "id": "312850",
        "number": 11,
        "portrait": -1,
        "skin": "#915e4f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/989/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 4,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "260651",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p260651.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5095917094941368,
            0.9456869009584664,
            0.009584664536741214,
            0.9616613418530351
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Dominik Schmid",
        "realName": "Dominik Schmid",
        "id": "136597",
        "number": 31,
        "portrait": -1,
        "skin": "#de9a84",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/989/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 34,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "239016",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p239016.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-27.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5065868179195225,
            0.9329073482428115,
            0,
            0.9552715654952076
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Marwin Hitz",
      "realName": "Marwin Hitz",
      "id": "125465",
      "number": 1,
      "portrait": -1,
      "skin": "#dba48e",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/989/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-28.png",
        "cell": 0,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5568982924174946,
          0.9968051118210862,
          0.08306709265175719,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "190243",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p190243.png?padding=0.7"
    },
    "coach": {
      "name": "Slaviša Jokanović",
      "skin": "#d18e79",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Slaviša Jokanović",
      "source": "https://en.wikipedia.org/wiki/FC%20Basel",
      "head": {
        "sheet": "assets/europe-clubs/heads-28.png",
        "cell": 1,
        "crop": [
          0.291866028708134,
          0.023923444976076555,
          0.17703349282296652,
          0.22567783094098884
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Basel Stadı",
      "city": "İsviçre",
      "architecture": "bowl",
      "seat": "#C8142F",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#C8142F",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#C8142F",
      "socks": "#C8142F",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/989/roster",
    "wikiTitle": "FC Basel"
  },
  {
    "name": "Young Boys",
    "realName": "Young Boys",
    "short": "YB",
    "city": "İsviçre",
    "category": "club",
    "country": "İsviçre",
    "league": "Super League",
    "leagueId": "sui.1",
    "espnId": "2722",
    "color": "#ffdd00",
    "dark": "#FFFFFF",
    "crest": "assets/europe-clubs/crest-2722.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2722.png",
    "players": [
      {
        "name": "Edimilson Fernandes",
        "realName": "Edimilson Fernandes",
        "id": "226970",
        "number": 6,
        "portrait": -1,
        "skin": "#946051",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/2722/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 36,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "215556",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p215556.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5118990282981063,
            0.9968051118210862,
            0.1182108626198083,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Joel Monteiro",
        "realName": "Joel Monteiro",
        "id": "307893",
        "number": 77,
        "portrait": -1,
        "skin": "#8f5945",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 9,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/2722/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 14,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "258924",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p258924.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4961550655768152,
            0.9968051118210862,
            0.06389776357827476,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Gregory Wüthrich",
        "realName": "Gregory Wüthrich",
        "id": "212335",
        "number": 5,
        "portrait": -1,
        "skin": "#c88d78",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/2722/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 8,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "220665",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p220665.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5489102881399152,
            0.9808306709265175,
            0,
            0.9968051118210862
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Marvin Keller",
      "realName": "Marvin Keller",
      "id": "341948",
      "number": 1,
      "portrait": -1,
      "skin": "#d19784",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/2722/roster",
      "eaId": "256726",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p256726.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-28.png",
        "cell": 5,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5304342896679235,
          0.9584664536741214,
          0,
          0.9744408945686901
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Gerardo Seoane",
      "skin": "#ca8f7d",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Gerardo Seoane",
      "source": "https://en.wikipedia.org/wiki/BSC%20Young%20Boys",
      "head": {
        "sheet": "assets/europe-clubs/heads-28.png",
        "cell": 6,
        "crop": [
          0.5342902711323764,
          0.24960127591706538,
          0.1850079744816587,
          0.24322169059011164
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Young Boys Stadı",
      "city": "İsviçre",
      "architecture": "bowl",
      "seat": "#ffdd00",
      "trim": "#FFFFFF"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffdd00",
      "stripe": "#FFFFFF",
      "trim": "#ffffff",
      "shorts": "#FFFFFF",
      "shortTrim": "#ffdd00",
      "socks": "#ffdd00",
      "collar": "#FFFFFF",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/2722/roster",
    "wikiTitle": "BSC Young Boys"
  },
  {
    "name": "Lugano",
    "realName": "FC Lugano",
    "short": "LUG",
    "city": "İsviçre",
    "category": "club",
    "country": "İsviçre",
    "league": "Super League",
    "leagueId": "sui.1",
    "espnId": "7672",
    "color": "#000000",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-7672.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/7672.png",
    "players": [
      {
        "name": "Renato Steffen",
        "realName": "Renato Steffen",
        "id": "193462",
        "number": 11,
        "portrait": -1,
        "skin": "#dca18e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/7672/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 18,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "210537",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p210537.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.49924269860284126,
            0.9712460063897763,
            0,
            0.9904153354632588
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mattia Zanotti",
        "realName": "Mattia Zanotti",
        "id": "323117",
        "number": 46,
        "portrait": -1,
        "skin": "#e7a287",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/7672/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 2,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "271573",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p271573.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.54683903069857,
            0.9424920127795527,
            0.012779552715654952,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Uran Bislimi",
        "realName": "Uran Bislimi",
        "id": "341382",
        "number": 25,
        "portrait": -1,
        "skin": "#eaa58c",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/7672/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 14,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "270913",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p270913.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 9,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5166226051097796,
            0.9329073482428115,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Amir Saipi",
      "realName": "Amir Saipi",
      "id": "288729",
      "number": 1,
      "portrait": -1,
      "skin": "#e39f86",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/7672/roster",
      "eaId": "247077",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p247077.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-28.png",
        "cell": 10,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5148228666664617,
          0.9233226837060703,
          0.006389776357827476,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Mattia Croci-Torti",
      "skin": "#e09786",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Mattia Croci-Torti",
      "source": "https://en.wikipedia.org/wiki/FC%20Lugano",
      "head": {
        "sheet": "assets/europe-clubs/heads-28.png",
        "cell": 11,
        "crop": [
          0.7870813397129187,
          0.5047846889952153,
          0.17862838915470494,
          0.24481658692185007
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Lugano Stadı",
      "city": "İsviçre",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#000000",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#000000",
      "socks": "#000000",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/sui.1/teams/7672/roster",
    "wikiTitle": "FC Lugano"
  },
  {
    "name": "FC København",
    "realName": "F.C. København",
    "short": "KBH",
    "city": "Danimarka",
    "category": "club",
    "country": "Danimarka",
    "league": "Superliga",
    "leagueId": "den.1",
    "espnId": "909",
    "color": "#ffffff",
    "dark": "#1a1a1a",
    "crest": "assets/europe-clubs/crest-909.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/909.png",
    "players": [
      {
        "name": "Mohamed Elyounoussi",
        "realName": "Mohamed Elyounoussi",
        "id": "162484",
        "number": 10,
        "portrait": -1,
        "skin": "#dc9e83",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/909/roster",
        "selection": {
          "method": "EA overall",
          "overall": 76,
          "performance": 76,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "203362",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p203362.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5413628970093916,
            0.9137380191693291,
            0,
            0.9297124600638977
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Thomas Delaney",
        "realName": "Thomas Delaney",
        "id": "151757",
        "number": 27,
        "portrait": -1,
        "skin": "#dd9680",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/909/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 16,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "193283",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p193283.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5114191181350196,
            0.8945686900958466,
            0,
            0.9105431309904153
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Alex Král",
        "realName": "Alex Král",
        "id": "257085",
        "number": 33,
        "portrait": -1,
        "skin": "#d79887",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/909/roster",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 38,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "247028",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p247028.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-28.png",
          "cell": 14,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.4944871038955697,
            0.8849840255591054,
            0,
            0.9105431309904153
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Diant Ramaj",
      "realName": "Diant Ramaj",
      "id": "287713",
      "number": 41,
      "portrait": -1,
      "skin": "#e3a08f",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/909/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-28.png",
        "cell": 15,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5170501763652146,
          0.9073482428115016,
          0,
          0.9265175718849841
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "248478",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p248478.png?padding=0.7"
    },
    "coach": {
      "name": "Bo Svensson",
      "skin": "#c99183",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Bo Svensson",
      "source": "https://en.wikipedia.org/wiki/F.C.%20Copenhagen",
      "head": {
        "sheet": "assets/europe-clubs/heads-29.png",
        "cell": 0,
        "crop": [
          0.050239234449760764,
          0.027910685805422646,
          0.17543859649122806,
          0.22169059011164274
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "FC København Stadı",
      "city": "Danimarka",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#1a1a1a"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#1a1a1a",
      "trim": "#ffffff",
      "shorts": "#1a1a1a",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#1a1a1a",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/909/roster",
    "wikiTitle": "F.C. Copenhagen"
  },
  {
    "name": "FC Midtjylland",
    "realName": "FC Midtjylland",
    "short": "MID",
    "city": "Danimarka",
    "category": "club",
    "country": "Danimarka",
    "league": "Superliga",
    "leagueId": "den.1",
    "espnId": "572",
    "color": "#000000",
    "dark": "#ff0900",
    "crest": "assets/europe-clubs/crest-572.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/572.png",
    "players": [
      {
        "name": "Rasmus Kristensen",
        "realName": "Rasmus Kristensen",
        "id": "234787",
        "number": 5,
        "portrait": -1,
        "skin": "#e4a496",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/572/roster",
        "selection": {
          "method": "EA overall",
          "overall": 79,
          "performance": 26,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "233301",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p233301.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5389834706512071,
            0.9968051118210862,
            0.16293929712460065,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Philip Billing",
        "realName": "Philip Billing",
        "id": "192660",
        "number": 8,
        "portrait": -1,
        "skin": "#956654",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 8,
        "jump": 8,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/572/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 30,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "220714",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p220714.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5066716153384581,
            0.9968051118210862,
            0.06070287539936102,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mads Bech Sørensen",
        "realName": "Mads Bech Sørensen",
        "id": "239004",
        "number": 22,
        "portrait": -1,
        "skin": "#d39d8f",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/572/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 18,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "234472",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p234472.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 3,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.500384066344912,
            0.9968051118210862,
            0.134185303514377,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Elias Ólafsson",
      "realName": "Elias Ólafsson",
      "id": "260843",
      "number": 1,
      "portrait": -1,
      "skin": "#95736d",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/572/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-29.png",
        "cell": 4,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5487801727478622,
          0.9968051118210862,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Mike Tullberg",
      "skin": "#c78c7e",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Mike Tullberg",
      "source": "https://en.wikipedia.org/wiki/FC%20Midtjylland",
      "head": {
        "sheet": "assets/europe-clubs/heads-29.png",
        "cell": 5,
        "crop": [
          0.3022328548644338,
          0.24960127591706538,
          0.1682615629984051,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "FC Midtjylland Stadı",
      "city": "Danimarka",
      "architecture": "bowl",
      "seat": "#000000",
      "trim": "#ff0900"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#000000",
      "stripe": "#ff0900",
      "trim": "#ffffff",
      "shorts": "#ff0900",
      "shortTrim": "#000000",
      "socks": "#000000",
      "collar": "#ff0900",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/572/roster",
    "wikiTitle": "FC Midtjylland"
  },
  {
    "name": "Brøndby IF",
    "realName": "Brøndby IF",
    "short": "BRO",
    "city": "Danimarka",
    "category": "club",
    "country": "Danimarka",
    "league": "Superliga",
    "leagueId": "den.1",
    "espnId": "575",
    "color": "#ffff00",
    "dark": "#43473d",
    "crest": "assets/europe-clubs/crest-575.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/575.png",
    "players": [
      {
        "name": "Bartosz Slisz",
        "realName": "Bartosz Slisz",
        "id": "288479",
        "number": 99,
        "portrait": -1,
        "skin": "#bb8370",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/575/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 30,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "243222",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p243222.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5083230673242702,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Patrick Mortensen",
        "realName": "Patrick Mortensen",
        "id": "118411",
        "number": 9,
        "portrait": -1,
        "skin": "#cf9686",
        "hair": "#302520",
        "style": "crop",
        "speed": 5,
        "shot": 7,
        "jump": 8,
        "goalkeeper": false,
        "traits": {
          "title": "Bitirici",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/575/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 22,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "191083",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p191083.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5057361037565905,
            0.9968051118210862,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mats Köhlert",
        "realName": "Mats Köhlert",
        "id": "225574",
        "number": 27,
        "portrait": -1,
        "skin": "#bb887a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/575/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 20,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "233178",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p233178.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 8,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5528378557441734,
            0.9904153354632588,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Patrick Pentz",
      "realName": "Patrick Pentz",
      "id": "237966",
      "number": 1,
      "portrait": -1,
      "skin": "#c59388",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/575/roster",
      "eaId": "228505",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p228505.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-29.png",
        "cell": 9,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5487826836167861,
          0.9840255591054313,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Thomas Nørgaard",
      "skin": "#c68f7f",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Thomas Nørgaard (football manager)",
      "source": "https://en.wikipedia.org/wiki/Br%C3%B8ndby%20IF",
      "head": {
        "sheet": "assets/europe-clubs/heads-29.png",
        "cell": 10,
        "crop": [
          0.5406698564593302,
          0.5,
          0.1762360446570973,
          0.24880382775119617
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Brøndby IF Stadı",
      "city": "Danimarka",
      "architecture": "bowl",
      "seat": "#ffff00",
      "trim": "#43473d"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffff00",
      "stripe": "#43473d",
      "trim": "#ffffff",
      "shorts": "#43473d",
      "shortTrim": "#ffff00",
      "socks": "#ffff00",
      "collar": "#43473d",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/den.1/teams/575/roster",
    "wikiTitle": "Brøndby IF"
  },
  {
    "name": "Malmö FF",
    "realName": "Malmö FF",
    "short": "MAL",
    "city": "İsveç",
    "category": "club",
    "country": "İsveç",
    "league": "Allsvenskan",
    "leagueId": "swe.1",
    "espnId": "2720",
    "color": "#5699eb",
    "dark": "#052a87",
    "crest": "assets/europe-clubs/crest-2720.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2720.png",
    "players": [
      {
        "name": "Busanello",
        "realName": "Busanello",
        "id": "301219",
        "number": 25,
        "portrait": -1,
        "skin": "#b8806a",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2720/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 42,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "273694",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p273694.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5024620617521687,
            0.9904153354632588,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Pontus Jansson",
        "realName": "Pontus Jansson",
        "id": "135579",
        "number": 18,
        "portrait": -1,
        "skin": "#e8a190",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 6,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2720/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 14,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "194201",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p194201.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5502359499764882,
            0.9488817891373802,
            0,
            0.9648562300319489
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jens Stryger Larsen",
        "realName": "Jens Stryger Larsen",
        "id": "193186",
        "number": 17,
        "portrait": -1,
        "skin": "#d79682",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2720/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 62,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "193133",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p193133.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-29.png",
          "cell": 13,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5500955409144412,
            0.9201277955271565,
            0.03514376996805112,
            0.9361022364217252
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Robin Olsen",
      "realName": "Robin Olsen",
      "id": "178176",
      "number": 1,
      "portrait": -1,
      "skin": "#e09a88",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2720/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-29.png",
        "cell": 14,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5257164063311321,
          0.9233226837060703,
          0.03194888178913738,
          0.939297124600639
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "eaId": "207557",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p207557.png?padding=0.7"
    },
    "coach": {
      "name": "Gaute Helstrup",
      "skin": "#e19a87",
      "hair": "#302520",
      "pending": false,
      "source": "https://www.mff.se/nyheter/kryss-mot-aik-mycket-bra-vi-kan-ta-med-oss-2026-09-07/",
      "head": {
        "sheet": "assets/europe-clubs/heads-29.png",
        "cell": 15,
        "crop": [
          0.7886762360446571,
          0.7559808612440191,
          0.17543859649122806,
          0.22966507177033493
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Malmö FF Stadı",
      "city": "İsveç",
      "architecture": "bowl",
      "seat": "#5699eb",
      "trim": "#052a87"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#5699eb",
      "stripe": "#052a87",
      "trim": "#ffffff",
      "shorts": "#052a87",
      "shortTrim": "#5699eb",
      "socks": "#5699eb",
      "collar": "#052a87",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2720/roster",
    "wikiTitle": "Malmö FF"
  },
  {
    "name": "Djurgården",
    "realName": "Djurgården",
    "short": "DJU",
    "city": "İsveç",
    "category": "club",
    "country": "İsveç",
    "league": "Allsvenskan",
    "leagueId": "swe.1",
    "espnId": "2339",
    "color": "#64a6e1",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-2339.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2339.png",
    "players": [
      {
        "name": "Adam Stahl",
        "realName": "Adam Stahl",
        "id": "269457",
        "number": 18,
        "portrait": -1,
        "skin": "#e0a390",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2339/roster",
        "selection": {
          "method": "EA overall",
          "overall": 68,
          "performance": 50,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "242055",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p242055.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5517606104818463,
            0.9776357827476039,
            0.07028753993610223,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Piotr Johansson",
        "realName": "Piotr Johansson",
        "id": "205729",
        "number": 2,
        "portrait": -1,
        "skin": "#dfa491",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 5,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2339/roster",
        "selection": {
          "method": "EA overall",
          "overall": 67,
          "performance": 68,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "223907",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p223907.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5219051998192471,
            0.9776357827476039,
            0.06070287539936102,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jacob Une",
        "realName": "Jacob Une",
        "id": "237053",
        "number": 4,
        "portrait": -1,
        "skin": "#dc9f8e",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 5,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2339/roster",
        "selection": {
          "method": "EA overall",
          "overall": 67,
          "performance": 42,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "213497",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p213497.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 2,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.503046786024859,
            0.9776357827476039,
            0.0670926517571885,
            0.9936102236421726
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Jacob Rinne",
      "realName": "Jacob Rinne",
      "id": "203266",
      "number": 35,
      "portrait": -1,
      "skin": "#e5a18b",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2339/roster",
      "eaId": "221584",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p221584.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-30.png",
        "cell": 3,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5142440841403624,
          0.9776357827476039,
          0.0926517571884984,
          0.9936102236421726
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Jani Honkavaara",
      "skin": "#d39782",
      "hair": "#302520",
      "source": "https://en.wikipedia.org/wiki/Djurg%C3%A5rdens%20IF%20Fotboll",
      "pending": false,
      "head": {
        "sheet": "assets/europe-clubs/heads-30.png",
        "cell": 4,
        "crop": [
          0.049441786283891544,
          0.2527910685805423,
          0.17703349282296652,
          0.23923444976076555
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style",
      "wikiTitle": "Jani Honkavaara"
    },
    "stadium": {
      "name": "Djurgården Stadı",
      "city": "İsveç",
      "architecture": "bowl",
      "seat": "#64a6e1",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#64a6e1",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#64a6e1",
      "socks": "#64a6e1",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2339/roster",
    "wikiTitle": "Djurgårdens IF Fotboll"
  },
  {
    "name": "Hammarby",
    "realName": "Hammarby IF",
    "short": "HAM",
    "city": "İsveç",
    "category": "club",
    "country": "İsveç",
    "league": "Allsvenskan",
    "leagueId": "swe.1",
    "espnId": "2495",
    "color": "#ffcc00",
    "dark": "#007a43",
    "crest": "assets/europe-clubs/crest-2495.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2495.png",
    "players": [
      {
        "name": "Nahir Besara",
        "realName": "Nahir Besara",
        "id": "143585",
        "number": 20,
        "portrait": -1,
        "skin": "#e5a189",
        "hair": "#302520",
        "style": "crop",
        "speed": 6,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2495/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 108,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "197240",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p197240.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5303766066858265,
            0.9424920127795527,
            0.04472843450479233,
            0.9584664536741214
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Victor Eriksson",
        "realName": "Victor Eriksson",
        "id": "334038",
        "number": 4,
        "portrait": -1,
        "skin": "#e8a18d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 5,
        "jump": 9,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2495/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 42,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "266337",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p266337.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5173039163299779,
            0.9265175718849841,
            0.03194888178913738,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Tesfaldet Tekie",
        "realName": "Tesfaldet Tekie",
        "id": "218436",
        "number": 5,
        "portrait": -1,
        "skin": "#b5775b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 7,
        "jump": 6,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2495/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 36,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "227835",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p227835.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 7,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5178118322334176,
            0.952076677316294,
            0.02875399361022364,
            0.9680511182108626
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Warner Hahn",
      "realName": "Warner Hahn",
      "id": "170727",
      "number": 1,
      "portrait": -1,
      "skin": "#9b6756",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2495/roster",
      "eaId": "222900",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p222900.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-30.png",
        "cell": 8,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5446576421848357,
          0.9169329073482428,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Henrik Rydström",
      "skin": "#e19b85",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Henrik Rydström",
      "source": "https://en.wikipedia.org/wiki/Hammarby%20Fotboll",
      "head": {
        "sheet": "assets/europe-clubs/heads-30.png",
        "cell": 9,
        "crop": [
          0.2886762360446571,
          0.5,
          0.18740031897926634,
          0.24960127591706538
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Hammarby Stadı",
      "city": "İsveç",
      "architecture": "bowl",
      "seat": "#ffcc00",
      "trim": "#007a43"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffcc00",
      "stripe": "#007a43",
      "trim": "#ffffff",
      "shorts": "#007a43",
      "shortTrim": "#ffcc00",
      "socks": "#ffcc00",
      "collar": "#007a43",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/swe.1/teams/2495/roster",
    "wikiTitle": "Hammarby Fotboll"
  },
  {
    "name": "Bodø/Glimt",
    "realName": "Bodo/Glimt",
    "short": "BODO",
    "city": "Norveç",
    "category": "club",
    "country": "Norveç",
    "league": "Eliteserien",
    "leagueId": "nor.1",
    "espnId": "2980",
    "color": "#FCEE33",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-2980.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2980.png",
    "players": [
      {
        "name": "Patrick Berg",
        "realName": "Patrick Berg",
        "id": "205924",
        "number": 7,
        "portrait": -1,
        "skin": "#e5a18b",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2980/roster",
        "selection": {
          "method": "EA overall",
          "overall": 77,
          "performance": 60,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "222227",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p222227.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 10,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5110698102719305,
            0.9233226837060703,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Jens Petter Hauge",
        "realName": "Jens Petter Hauge",
        "id": "235789",
        "number": 10,
        "portrait": -1,
        "skin": "#e79f8d",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 7,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2980/roster",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 11,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.524353112403848,
            0.9137380191693291,
            0.009584664536741214,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style",
        "selection": {
          "method": "EA overall",
          "overall": 74,
          "performance": 100,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "233848",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p233848.png?padding=0.7"
      },
      {
        "name": "Hakon Evjen",
        "realName": "Hakon Evjen",
        "id": "271088",
        "number": 26,
        "portrait": -1,
        "skin": "#e5a08d",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 9,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2980/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 72,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "242162",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p242162.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 12,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5261082498099682,
            0.8881789137380192,
            0,
            0.9041533546325878
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Nikita Haykin",
      "realName": "Nikita Haykin",
      "id": "217655",
      "number": 12,
      "portrait": -1,
      "skin": "#e49e8a",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2980/roster",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-30.png",
        "cell": 13,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.5286138143306702,
          0.9201277955271565,
          0,
          0.9329073482428115
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Kjetil Knutsen",
      "skin": "#d69178",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Kjetil Knutsen",
      "source": "https://en.wikipedia.org/wiki/FK%20Bod%C3%B8%2FGlimt",
      "head": {
        "sheet": "assets/europe-clubs/heads-30.png",
        "cell": 14,
        "crop": [
          0.5422647527910686,
          0.7496012759170654,
          0.16985645933014354,
          0.22886762360446572
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Bodø/Glimt Stadı",
      "city": "Norveç",
      "architecture": "bowl",
      "seat": "#FCEE33",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#FCEE33",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#FCEE33",
      "socks": "#FCEE33",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2980/roster",
    "wikiTitle": "FK Bodø/Glimt"
  },
  {
    "name": "Molde",
    "realName": "Molde",
    "short": "MOL",
    "city": "Norveç",
    "category": "club",
    "country": "Norveç",
    "league": "Eliteserien",
    "leagueId": "nor.1",
    "espnId": "2715",
    "color": "#000099",
    "dark": "#ffffff",
    "crest": "assets/europe-clubs/crest-2715.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/2715.png",
    "players": [
      {
        "name": "Martin Linnes",
        "realName": "Martin Linnes",
        "id": "146381",
        "number": 25,
        "portrait": -1,
        "skin": "#e29c87",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 8,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2715/roster",
        "selection": {
          "method": "EA overall",
          "overall": 72,
          "performance": 44,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "198599",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p198599.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-30.png",
          "cell": 15,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5307638275213559,
            0.8977635782747604,
            0,
            0.9137380191693291
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Emil Breivik",
        "realName": "Emil Breivik",
        "id": "280801",
        "number": 10,
        "portrait": -1,
        "skin": "#434244",
        "hair": "#302520",
        "style": "crop",
        "speed": 8,
        "shot": 6,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2715/roster",
        "selection": {
          "method": "EA overall",
          "overall": 69,
          "performance": 146,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "246063",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p246063.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-31.png",
          "cell": 0,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5744825001725821,
            0.9968354430379747,
            0.11708860759493671,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Eirik Hestad",
        "realName": "Eirik Hestad",
        "id": "179157",
        "number": 5,
        "portrait": -1,
        "skin": "#997770",
        "hair": "#302520",
        "style": "crop",
        "speed": 7,
        "shot": 6,
        "jump": 7,
        "goalkeeper": false,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2715/roster",
        "selection": {
          "method": "EA overall",
          "overall": 69,
          "performance": 108,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "211365",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p211365.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-31.png",
          "cell": 1,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5376605942484388,
            0.9968354430379747,
            0.12974683544303797,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Albert Posiadala",
      "realName": "Albert Posiadala",
      "id": "380207",
      "number": 22,
      "portrait": -1,
      "skin": "#695049",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2715/roster",
      "eaId": "269971",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p269971.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-31.png",
        "cell": 2,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.49502820910707124,
          0.9968354430379747,
          0.12025316455696203,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Sindre Tjelmeland",
      "skin": "#8c6b64",
      "hair": "#302520",
      "source": "https://en.wikipedia.org/wiki/Molde%20FK",
      "pending": false,
      "wikiTitle": "Sindre Tjelmeland",
      "head": {
        "sheet": "assets/europe-clubs/heads-31.png",
        "cell": 3,
        "crop": [
          0.7747385358004827,
          0.035545023696682464,
          0.17860016090104586,
          0.21406003159557663
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Molde Stadı",
      "city": "Norveç",
      "architecture": "bowl",
      "seat": "#000099",
      "trim": "#ffffff"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#000099",
      "stripe": "#ffffff",
      "trim": "#ffffff",
      "shorts": "#ffffff",
      "shortTrim": "#000099",
      "socks": "#000099",
      "collar": "#ffffff",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/2715/roster",
    "wikiTitle": "Molde FK"
  },
  {
    "name": "Rosenborg",
    "realName": "Rosenborg",
    "short": "ROS",
    "city": "Norveç",
    "category": "club",
    "country": "Norveç",
    "league": "Eliteserien",
    "leagueId": "nor.1",
    "espnId": "438",
    "color": "#ffffff",
    "dark": "#000000",
    "crest": "assets/europe-clubs/crest-438.png",
    "crestSource": "https://a.espncdn.com/i/teamlogos/soccer/500/438.png",
    "players": [
      {
        "name": "Jonas Svensson",
        "realName": "Jonas Svensson",
        "id": "146896",
        "number": 22,
        "portrait": -1,
        "skin": "#7a5040",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 6,
        "jump": 8,
        "traits": {
          "title": "Savunma yıldızı",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/438/roster",
        "selection": {
          "method": "EA overall",
          "overall": 75,
          "performance": 40,
          "rank": 1,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "198657",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p198657.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-31.png",
          "cell": 4,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5738804668114144,
            0.9968354430379747,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Simen Bolkan Nordli",
        "realName": "Simen Bolkan Nordli",
        "id": "275985",
        "number": 7,
        "portrait": -1,
        "skin": "#9c7060",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 7,
        "shot": 7,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": true,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/438/roster",
        "selection": {
          "method": "EA overall",
          "overall": 73,
          "performance": 60,
          "rank": 2,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "255464",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p255464.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-31.png",
          "cell": 5,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.537620027090754,
            0.9968354430379747,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      },
      {
        "name": "Mathias Kjølø",
        "realName": "Mathias Kjølø",
        "id": "293644",
        "number": 6,
        "portrait": -1,
        "skin": "#835a48",
        "hair": "#302520",
        "style": "crop",
        "goalkeeper": false,
        "speed": 5,
        "shot": 6,
        "jump": 7,
        "traits": {
          "title": "Oyun kurucu",
          "power": 1,
          "aggression": 1,
          "rainbow": false,
          "fragility": 1
        },
        "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/438/roster",
        "selection": {
          "method": "EA overall",
          "overall": 71,
          "performance": 6,
          "rank": 3,
          "source": "https://drop-api.ea.com/rating/ea-sports-fc"
        },
        "eaId": "259478",
        "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p259478.png?padding=0.7",
        "gamePortrait": {
          "sheet": "assets/europe-clubs/heads-31.png",
          "cell": 6,
          "columns": 4,
          "rows": 4,
          "transparentHead": true,
          "headAnchor": [
            0.5075040924410207,
            0.9968354430379747,
            0,
            1
          ]
        },
        "portraitSource": "AI-generated head sprite matching the original game style"
      }
    ],
    "keeper": {
      "name": "Leopold Wahlstedt",
      "realName": "Leopold Wahlstedt",
      "id": "272474",
      "number": 1,
      "portrait": -1,
      "skin": "#8d665a",
      "hair": "#302520",
      "style": "crop",
      "speed": 6,
      "shot": 6,
      "jump": 8,
      "goalkeeper": true,
      "traits": {
        "title": "Kaleci",
        "power": 1,
        "aggression": 1,
        "rainbow": false,
        "fragility": 1
      },
      "rosterSource": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/438/roster",
      "eaId": "243158",
      "eaAvatar": "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p243158.png?padding=0.7",
      "gamePortrait": {
        "sheet": "assets/europe-clubs/heads-31.png",
        "cell": 7,
        "columns": 4,
        "rows": 4,
        "transparentHead": true,
        "headAnchor": [
          0.463633081591632,
          0.9968354430379747,
          0,
          1
        ]
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "coach": {
      "name": "Freyr Alexandersson",
      "skin": "#36261d",
      "hair": "#302520",
      "pending": false,
      "wikiTitle": "Freyr Alexandersson",
      "source": "https://en.wikipedia.org/wiki/Rosenborg%20BK",
      "head": {
        "sheet": "assets/europe-clubs/heads-31.png",
        "cell": 8,
        "crop": [
          0.050683829444891394,
          0.5,
          0.1906677393403057,
          0.24960505529225907
        ],
        "generated": true
      },
      "portraitSource": "AI-generated head sprite matching the original game style"
    },
    "stadium": {
      "name": "Rosenborg Stadı",
      "city": "Norveç",
      "architecture": "bowl",
      "seat": "#ffffff",
      "trim": "#000000"
    },
    "kit": {
      "pattern": "white",
      "shirt": "#ffffff",
      "stripe": "#000000",
      "trim": "#ffffff",
      "shorts": "#000000",
      "shortTrim": "#ffffff",
      "socks": "#ffffff",
      "collar": "#000000",
      "sponsor": "none",
      "brand": "none"
    },
    "keeperKit": {
      "pattern": "white",
      "shirt": "#38997c",
      "stripe": "#22654f",
      "trim": "#f1efe3",
      "shorts": "#22654f",
      "shortTrim": "#f1efe3",
      "socks": "#38997c",
      "collar": "#22654f",
      "sponsor": "none",
      "brand": "none",
      "keeper": true
    },
    "kitPending": true,
    "source": "https://site.api.espn.com/apis/site/v2/sports/soccer/nor.1/teams/438/roster",
    "wikiTitle": "Rosenborg BK"
  }
];
for (const club of clubs) window.ARENA_TEAMS.push(club);
})();
// Current Amedspor roster verified from the official club on 2026-10-04.
(()=>{
 const base='assets/amedspor/',anchors={"diagne":[0.5045,0.92265,0.05342902711323764,0.9250398724082934],"hasi":[0.48877,0.95853,0.0430622009569378,0.9609250398724083],"lafont":[0.50337,0.93381,0.051834130781499205,0.9362041467304625],"ballet":[0.45675,0.94657,0.06140350877192982,0.94896331738437],"krasniqi":[0.4979,0.92743,0.045454545454545456,0.9298245614035088]};
 const head=id=>({sheet:base+id+'-head.png',cell:0,columns:1,rows:1,transparentHead:true,headAnchor:anchors[id] || [.5,.95,.02,.96]});
 const player=(name,id,number,skin,hair)=>({name,realName:name,number,portrait:-1,skin,hair,style:'short',speed:8,shot:8,jump:8,overall:75,gamePortrait:head(id),traits:{title:'Futbolcu',power:1,aggression:1,fragility:1,rainbow:false}});
 const field={pattern:'stripes',shirt:'#0f743c',stripe:'#e43138',trim:'#f0d774',collar:'#0f743c',collarType:'v',sleeve:'#0f743c',sleeveTrim:'#e43138',shorts:'#0f743c',shortTrim:'#f0d774',socks:'#0f743c',brand:'none',sponsor:'AMEDSPOR',sponsorInk:'#ffffff',referenceComplete:true};
 const keeper={pattern:'contours',shirt:'#202b30',stripe:'#39554b',trim:'#f0d774',collar:'#202b30',sleeve:'#202b30',shorts:'#202b30',shortTrim:'#f0d774',socks:'#202b30',brand:'none',sponsor:'AMEDSPOR',sponsorInk:'#f0d774',keeper:true,longSleeves:true,referenceComplete:true};
 window.ARENA_TEAMS.push({name:'Amedspor',realName:'Amedspor',short:'AMED',espnId:'132335',city:'Diyarbakır',country:'Türkiye',category:'club',color:'#e43138',dark:'#0f743c',crest:base+'crest.webp',
 players:[player('Mbaye Diagne','diagne',45,'#6e4938','#221c19'),player('Samuel Ballet','ballet',10,'#b77b57','#241b17'),player('Ermal Krasniqi','krasniqi',7,'#d4ac90','#362b23')],
 keeper:{...player('Alban Lafont','lafont',40,'#bb805f','#241b17'),goalkeeper:true,jump:9},
 coach:{name:'Besnik Hasi',realName:'Besnik Hasi',skin:'#d2a184',hair:'#34302b',head:{sheet:base+'hasi-head.png',crop:[0,0.0430622009569378,1,0.9178628389154705]}},
 stadium:{name:'Diyarbakır Stadyumu',city:'Diyarbakır',architecture:'bowl',seat:'#0f743c',trim:'#e43138'},kit:field,keeperKit:keeper,kitPending:false,
 performance:{overall:75,squadRating:75,form:1,source:'Game balance; official roster 2026-10-04'},source:'https://www.amedspor.com.tr/teams/football-men',portraitSource:'Official club photos prepared with built-in imagegen'});
})();
