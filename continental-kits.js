// Canvas kits based on the user's German, Italian and French shirt references.
(()=>{
const entries=[
 [
  "137",
  "werder bremen",
  "stripes",
  "#087448",
  "#ffffff",
  "#ffffff",
  "MATTHÄI",
  "hummel",
  "shards",
  "#53318b",
  "#45b96d",
  "#ffffff"
 ],
 [
  "134",
  "vfb stuttgart",
  "chest-band",
  "#fafafa",
  "#c51030",
  "#c51030",
  "LBBW",
  "jako",
  "contours",
  "#50ec00",
  "#39d100",
  "#151719"
 ],
 [
  "7911",
  "tsg hoffenheim",
  "contours",
  "#155295",
  "#0e407c",
  "#ffffff",
  "SAP",
  "macron",
  "shards",
  "#d8ed39",
  "#baca29",
  "#171b1e"
 ],
 [
  "126",
  "sc freiburg",
  "stripes",
  "#f5f5f5",
  "#c90d2a",
  "#161719",
  "Lexware",
  "nike",
  "zigzag",
  "#57358b",
  "#9862bb",
  "#ffffff"
 ],
 [
  "11420",
  "rb leipzig",
  "pinstripes",
  "#f7f7f7",
  "#dd1434",
  "#d7142d",
  "Red Bull",
  "puma",
  "cells",
  "#0863a2",
  "#2aa4da",
  "#ffffff"
 ],
 [
  "125",
  "einracht frankfurt",
  "pinstripes",
  "#202124",
  "#c9233b",
  "#ffffff",
  "indeed",
  "adidas",
  "contours",
  "#eee12e",
  "#fff378",
  "#151719"
 ],
 [
  "268",
  "borussia mönchengladbach",
  "slashes",
  "#f7f7f7",
  "#d1e4db",
  "#151719",
  "REUTER",
  "puma",
  "cells",
  "#fff325",
  "#e5d536",
  "#151719"
 ],
 [
  "124",
  "borussia dortmund",
  "white",
  "#ffda00",
  "#ffda00",
  "#151719",
  "vodafone",
  "puma",
  "cells",
  "#f578ca",
  "#6e256b",
  "#ffffff"
 ],
 [
  "131",
  "bayer 04 leverkusen",
  "stripes",
  "#161719",
  "#b91130",
  "#ffffff",
  "Barmenia Gothaer",
  "newbalance",
  "shards",
  "#e8f34a",
  "#b8c348",
  "#292d29"
 ],
 [
  "2950",
  "1. fcmainz 05",
  "contours",
  "#ec1925",
  "#d61220",
  "#ffffff",
  "Kömmerling",
  "jako",
  "contours",
  "#8ebebc",
  "#a9d0cd",
  "#ffffff"
 ],
 [
  "118",
  "udinese calcio",
  "stripes",
  "#f5f4ed",
  "#25292d",
  "#d8c55b",
  "IO SONO FRIULI",
  "macron",
  "shards",
  "#25292d",
  "#30353b",
  "#ffffff"
 ],
 [
  "239",
  "torino fc",
  "contours",
  "#62152e",
  "#701e38",
  "#ffffff",
  "SUZUKI",
  "joma",
  "contours",
  "#161719",
  "#666539",
  "#f5dd0b"
 ],
 [
  "114",
  "ssc napoli",
  "white",
  "#397da4",
  "#397da4",
  "#e4d3b4",
  "MSC",
  "ea7",
  "white",
  "#20242d",
  "#20242d",
  "#0092c6"
 ],
 [
  "112",
  "ss lazio",
  "white",
  "#80b9ed",
  "#80b9ed",
  "#243746",
  "none",
  "mizuno",
  "shards",
  "#d8b2ea",
  "#8b4b9c",
  "#483752"
 ],
 [
  "111",
  "juventus fc",
  "stripes",
  "#f5f5ed",
  "#161719",
  "#b5a05f",
  "Jeep",
  "adidas",
  "contours",
  "#ff7419",
  "#ffb157",
  "#eeeeee"
 ],
 [
  "2572",
  "como 1907",
  "pinstripes",
  "#155a80",
  "#0c4265",
  "#ffffff",
  "Revolut",
  "adidas",
  "contours",
  "#161719",
  "#303236",
  "#ffffff"
 ],
 [
  "107",
  "bologna fc",
  "stripes",
  "#222c46",
  "#bf1e32",
  "#ffffff",
  "Saputo",
  "macron",
  "shards",
  "#1b2027",
  "#292e37",
  "#ffffff"
 ],
 [
  "105",
  "atalanta bc",
  "shattered-stripes",
  "#111a20",
  "#087fd0",
  "#ffffff",
  "Lete",
  "newbalance",
  "shards",
  "#e5f355",
  "#b5d447",
  "#c7102c"
 ],
 [
  "104",
  "as roma",
  "white",
  "#ba1638",
  "#ba1638",
  "#f2b524",
  "EUROBET",
  "adidas",
  "white",
  "#079967",
  "#079967",
  "#f4e9d9"
 ],
 [
  "109",
  "acf fiorentina",
  "contours",
  "#64358b",
  "#502477",
  "#ffffff",
  "Mediacom",
  "joma",
  "contours",
  "#f18d27",
  "#d9741e",
  "#64358b"
 ],
 [
  "169",
  "stade rennais",
  "contours",
  "#e30d22",
  "#c81427",
  "#ffffff",
  "SAMSIC",
  "puma",
  "white",
  "#efa5c1",
  "#efa5c1",
  "#202124"
 ],
 [
  "180",
  "rc strasbourg alsace",
  "hoops",
  "#0747ad",
  "#063d96",
  "#ffffff",
  "WINAMAX",
  "adidas",
  "contours",
  "#ff8b41",
  "#ffba7b",
  "#ffffff"
 ],
 [
  "175",
  "rc lens",
  "white",
  "#f7d120",
  "#f7d120",
  "#d82730",
  "Auchan",
  "adidas",
  "white",
  "#db8dc7",
  "#db8dc7",
  "#f4efe5"
 ],
 [
  "176",
  "olympique marseille",
  "white",
  "#e4e3f7",
  "#e4e3f7",
  "#282632",
  "CMA CGM",
  "puma",
  "cells",
  "#ff7938",
  "#382a29",
  "#ffffff"
 ],
 [
  "167",
  "olympique lyonnais",
  "paris",
  "#f8f8f8",
  "#c81737",
  "#154490",
  "emirates",
  "adidas",
  "white",
  "#a6a8b6",
  "#a6a8b6",
  "#555862"
 ],
 [
  "2502",
  "ogc nice",
  "stripes",
  "#c1192d",
  "#17191c",
  "#ffffff",
  "Robinhood",
  "kappa",
  "pinstripes",
  "#ff9708",
  "#eb8400",
  "#17191c"
 ],
 [
  "166",
  "lille losc",
  "chevron",
  "#eb233d",
  "#202b46",
  "#ffffff",
  "boulanger",
  "newbalance",
  "shards",
  "#0089d0",
  "#695b9d",
  "#ffffff"
 ],
 [
  "174",
  "as monaco",
  "contours",
  "#58273a",
  "#6a3548",
  "#b7a175",
  "apm MONACO",
  "mizuno",
  "shards",
  "#ccff00",
  "#b3e530",
  "#151719"
 ]
];
window.ArenaContinentalKitReferences=[
 {
  "id": "137",
  "slug": "club-137",
  "field": "werder bremen.jpg",
  "keeper": "werder bremen kaleci.jpg"
 },
 {
  "id": "134",
  "slug": "club-134",
  "field": "vfb stuttgart.jpg",
  "keeper": "vfb stuttgart kaleci.jpg"
 },
 {
  "id": "7911",
  "slug": "club-7911",
  "field": "tsg hoffenheim.jpg",
  "keeper": "tsg hoffenheim kaleci.jpg"
 },
 {
  "id": "126",
  "slug": "club-126",
  "field": "sc freiburg.jpg",
  "keeper": "sc freiburg kaleci.jpg"
 },
 {
  "id": "11420",
  "slug": "club-11420",
  "field": "rb leipzig.jpg",
  "keeper": "rb leipzig kaleci.jpg"
 },
 {
  "id": "125",
  "slug": "club-125",
  "field": "einracht frankfurt.jpg",
  "keeper": "einracht frankfurt kaleci.jpg"
 },
 {
  "id": "268",
  "slug": "club-268",
  "field": "borussia mönchengladbach.jpg",
  "keeper": "borussia mönchengladbach kaleci.jpg"
 },
 {
  "id": "124",
  "slug": "club-124",
  "field": "borussia dortmund.jpg",
  "keeper": "borussia dortmund kaleci.jpg"
 },
 {
  "id": "131",
  "slug": "club-131",
  "field": "bayer 04 leverkusen.jpg",
  "keeper": "bayer 04 leverkusen kaleci.jpg"
 },
 {
  "id": "2950",
  "slug": "club-2950",
  "field": "1. fcmainz 05.jpg",
  "keeper": "1. fcmainz 05 kaleci.jpg"
 },
 {
  "id": "118",
  "slug": "club-118",
  "field": "udinese calcio.jpg",
  "keeper": "udinese calcio kaleci.jpg"
 },
 {
  "id": "239",
  "slug": "club-239",
  "field": "torino fc.jpg",
  "keeper": "torino fc kaleci.jpg"
 },
 {
  "id": "114",
  "slug": "club-114",
  "field": "ssc napoli.jpg",
  "keeper": "ssc napoli kaleci.jpg"
 },
 {
  "id": "112",
  "slug": "club-112",
  "field": "ss lazio.jpg",
  "keeper": "ss lazio kaleci.jpg"
 },
 {
  "id": "111",
  "slug": "club-111",
  "field": "juventus fc.jpg",
  "keeper": "juventus fc kaleci.jpg"
 },
 {
  "id": "2572",
  "slug": "club-2572",
  "field": "como 1907.jpg",
  "keeper": "como 1907 kaleci.jpg"
 },
 {
  "id": "107",
  "slug": "club-107",
  "field": "bologna fc.jpg",
  "keeper": "bologna fc kaleci.jpg"
 },
 {
  "id": "105",
  "slug": "club-105",
  "field": "atalanta bc.jpg",
  "keeper": "atalanta bc kaleci.jpg"
 },
 {
  "id": "104",
  "slug": "club-104",
  "field": "as roma.jpg",
  "keeper": "as roma kaleci.jpg"
 },
 {
  "id": "109",
  "slug": "club-109",
  "field": "acf fiorentina.jpg",
  "keeper": "afc fiorentina kaleci.jpg"
 },
 {
  "id": "169",
  "slug": "club-169",
  "field": "stade rennais.jpg",
  "keeper": "stade rennais kaleci.jpg"
 },
 {
  "id": "180",
  "slug": "club-180",
  "field": "rc strasbourg alsace.jpg",
  "keeper": "rc strasbourg alsace kaleci.jpg"
 },
 {
  "id": "175",
  "slug": "club-175",
  "field": "rc lens.jpg",
  "keeper": "rc lens kaleci.jpg"
 },
 {
  "id": "176",
  "slug": "club-176",
  "field": "olympique marseille.jpg",
  "keeper": "olympique marseille kaleci.jpg"
 },
 {
  "id": "167",
  "slug": "club-167",
  "field": "olympique lyonnais.jpg",
  "keeper": "olympique lyonnais kaleci.jpg"
 },
 {
  "id": "2502",
  "slug": "club-2502",
  "field": "ogc nice.jpg",
  "keeper": "ogc nice kaleci.jpg"
 },
 {
  "id": "166",
  "slug": "club-166",
  "field": "lille losc.jpg",
  "keeper": "lille losc kalei.jpg"
 },
 {
  "id": "174",
  "slug": "club-174",
  "field": "as monaco.jpg",
  "keeper": "as monaco kaleci.jpg"
 }
];
for(const [id,file,pattern,shirt,stripe,trim,sponsor,brand,gkPattern,gk,gkStripe,gkTrim] of entries){
 const team=window.ARENA_TEAMS.find(t=>t.espnId===id);if(!team)throw Error('Missing kit team '+id);
 const common={brand,sponsor,referenceComplete:true};
 team.kit={...common,pattern,shirt,stripe,trim,sponsorInk:trim,collar:shirt,shorts:shirt,shortTrim:trim,socks:shirt,stripeWidth:9,stripeGap:18,reference:'assets/kit-references/club-'+id+'-field.jpg'};
 team.keeperKit={...common,pattern:gkPattern,shirt:gk,stripe:gkStripe,trim:gkTrim,sponsorInk:gkTrim,collar:gk,shorts:gk,shortTrim:gkTrim,socks:gk,keeper:true,longSleeves:['137','125','7911','2572','180','167'].includes(id),hemPattern:['125','111','2572','180'].includes(id),reference:'assets/kit-references/club-'+id+'-keeper.jpg'};
 if(brand==='adidas'){team.kit.shoulder=trim;team.keeperKit.shoulder=gkTrim;}
 if(id==='137')Object.assign(team.kit,{collar:'#ffffff',sponsorInk:'#087448'});
 if(id==='134'){team.kit.sleeve='#c51030';team.keeperKit.sleeve='#ffffff';team.keeperKit.chestBand='#ffffff';}
 if(id==='7911')Object.assign(team.kit,{sleeve:'#f5f5f5',collar:'#133957'});
 if(id==='124'){team.kit.collar='#151719';team.keeperKit.collar='#151719';}
 if(id==='268')team.kit.collar='#15533c';
 if(id==='107')Object.assign(team.kit,{collarType:'polo',collar:'#222c46'});
 if(['114','112','111','2572','2502'].includes(id))team.kit.collarType='polo';
 if(id==='112'){team.kit.collar='#ffffff';team.kit.sleeve='#80b9ed';}
 if(id==='104'){team.kit.sleeve='#7c1936';team.keeperKit.collar='#f4e9d9';}
 if(id==='167'){team.kit.sleeve='#154490';team.kit.collar='#b5a05f';}
 if(id==='2502'){team.kit.collar='#17191c';team.keeperKit.collar='#17191c';team.keeperKit.sleeve='#17191c';}
 if(id==='174'){team.kit.collarType='polo';team.kit.collar=shirt;}
 team.kitPending=false;
}
})();
