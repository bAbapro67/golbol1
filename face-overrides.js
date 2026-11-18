(()=>{const updates=[
  {
    "team": 0,
    "index": 0,
    "id": "362150",
    "realName": "Lamine Yamal",
    "number": 10,
    "photo": "assets/faces/362150.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Lamine_Yamal",
    "photoFormat": "portrait"
  },
  {
    "team": 0,
    "index": 1,
    "id": "231050",
    "realName": "Raphinha",
    "number": 11,
    "photo": "assets/faces/231050.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Raphinha",
    "photoFormat": "portrait"
  },
  {
    "team": 1,
    "index": 0,
    "id": "231388",
    "realName": "Kylian Mbappé",
    "number": 10,
    "photo": "assets/faces/231388.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
    "photoFormat": "portrait"
  },
  {
    "team": 1,
    "index": 1,
    "id": "310452",
    "realName": "Arda Güler",
    "number": 15,
    "photo": "assets/faces/310452.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Arda_G%C3%BCler",
    "photoFormat": "portrait"
  },
  {
    "team": 2,
    "index": 0,
    "id": "253989",
    "realName": "Erling Haaland",
    "number": 9,
    "photo": "assets/faces/253989.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Erling_Haaland",
    "photoFormat": "portrait"
  },
  {
    "team": 2,
    "index": 1,
    "id": "250787",
    "realName": "Phil Foden",
    "number": 47,
    "photo": "assets/faces/250787.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Phil_Foden",
    "photoFormat": "portrait"
  },
  {
    "team": 3,
    "index": 0,
    "id": "229744",
    "realName": "Ousmane Dembélé",
    "number": 10,
    "photo": "assets/faces/229744.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Ousmane_Demb%C3%A9l%C3%A9",
    "photoFormat": "portrait"
  },
  {
    "team": 3,
    "index": 1,
    "id": "274745",
    "realName": "Khvicha Kvaratskhelia",
    "number": 7,
    "photo": "assets/faces/274745.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Khvicha_Kvaratskhelia",
    "photoFormat": "portrait"
  },
  {
    "team": 4,
    "index": 0,
    "id": "228296",
    "realName": "Victor Osimhen",
    "number": 45,
    "photo": "assets/faces/228296.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Victor_Osimhen",
    "photoFormat": "portrait"
  },
  {
    "team": 4,
    "index": 1,
    "id": "202641",
    "realName": "Leroy Sané",
    "number": 10,
    "photo": "assets/faces/202641.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Leroy_San%C3%A9",
    "photoFormat": "portrait"
  },
  {
    "team": 5,
    "index": 0,
    "id": "139437",
    "realName": "Romelu Lukaku",
    "number": 9,
    "photo": "assets/faces/139437.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Romelu_Lukaku",
    "photoFormat": "portrait",
    "name": "Romelu Lukako"
  },
  {
    "team": 6,
    "index": 0,
    "id": "272700",
    "realName": "Orkun Kökçü",
    "number": 10,
    "photo": "assets/faces/272700.png",
    "photoSource": "https://a.espncdn.com/i/headshots/soccer/players/full/272700.png",
    "photoFormat": "portrait"
  },
  {
    "team": 6,
    "index": 1,
    "id": "217476",
    "realName": "Václav Cerný",
    "number": 18,
    "photo": "assets/faces/217476.png",
    "photoSource": "https://a.espncdn.com/i/headshots/soccer/players/full/217476.png",
    "photoFormat": "portrait"
  },
  {
    "team": 7,
    "index": 0,
    "id": "225607",
    "realName": "Christian Pulisic",
    "number": 11,
    "photo": "assets/faces/225607.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Christian_Pulisic",
    "photoFormat": "portrait"
  },
  {
    "team": 7,
    "index": 1,
    "id": "76762",
    "realName": "Luka Modric",
    "number": 14,
    "photo": "assets/faces/76762.jpg",
    "photoSource": "https://en.wikipedia.org/wiki/Luka_Modric",
    "photoFormat": "portrait"
  }
];for(const u of updates){const {team,index,...data}=u;Object.assign(window.ARENA_TEAMS[team].players[index],data);}})();
