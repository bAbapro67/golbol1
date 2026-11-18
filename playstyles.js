// Fictional game balancing, not claims about real personalities.
(() => {
    const profiles = [
        ['Çalım ustası',1,.85,true], ['Agresif kanat',1.05,1.35,false],
        ['Patlayıcı forvet',1.14,1,false], ['Zarif teknisyen',.96,.6,true],
        ['Güçlü bitirici',1.22,1.15,false], ['Narin oyun kurucu',.95,.65,false],
        ['Çalım ustası',1,.9,true], ['Çalım ustası',1,.85,true],
        ['Güçlü santrfor',1.2,1.2,false], ['Aşırtma uzmanı',1.03,.8,true],
        ['Sert şutör',1.2,1,false], ['Agresif kanat',1.04,1.3,false],
        ['Agresif lider',1.08,1.5,false], ['Aşırtma uzmanı',1,.85,true],
        ['Narin driplör',.97,.65,false], ['Zarif maestro',.93,.55,false]
    ];
    window.ARENA_TEAMS.forEach(team => team.players.forEach(player => {
        if(player.traits) return;
        const [title,power,aggression,rainbow] = profiles[player.portrait];
        player.traits = {title,power,aggression,rainbow,fragility:aggression<.7?1.35:aggression>1.2?.8:1};
    }));
})();
