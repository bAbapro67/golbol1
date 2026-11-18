// Generated game heads. Original sixteen keep their original/corrected atlases.
(() => {
  const sheets = [
    ['assets/player-heads-extra-a-leao.png', ['250465','252107','298008','288897','rafael-leao','195821','174980','288896','142200','303821','286831','235662','303748','257206','45843','174466']],
    ['assets/player-heads-extra-b.png', ['125088','22774','169797','184012','297362','134283','217092','288925','222922','176948','205750','189026','84774','196876','231059','301748']]
  ];
  const portraits = new Map();
  for (const [sheet, ids] of sheets) ids.forEach((id, cell) => portraits.set(id, {sheet, cell, columns:4, rows:4}));
  for (const team of window.ARENA_TEAMS) for (const player of [...team.players,team.keeper]) {
    delete player.photo; delete player.photoFormat; delete player.faceCrop;
    if (player.portrait < 0) player.gamePortrait = portraits.get(player.id);
  }
})();
