(() => {
 'use strict';
 function refresh(){const identity=window.ArenaClubDesigner.profile;document.querySelector('#home-club-crest').src=window.ArenaClub.uri(window.ArenaClub.logo(identity));document.querySelector('#home-club-name').textContent=identity.name;document.querySelector('#home-club-short').textContent=identity.short;}
 for(const id of ['club-open','nav-club'])document.getElementById(id).onclick=()=>window.ArenaUltimateTeam.open(id==='nav-club'?'club':'home');
 window.addEventListener('club-profile-saved',refresh);refresh();
})();
