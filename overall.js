(() => {
    const teams = window.ARENA_TEAMS;
    for (const team of teams) for (const star of [...team.players, team.keeper, team.coach].filter(Boolean)) {
        star.overall = team.category === 'special' ? 99 : Math.round(star.overall || team.performance?.squadRating || 78);
        star.overallSource = star.fc27Cards?.length ? 'EA SPORTS FC 27 · 23.10.2026' : team.category === 'special' ? 'Özel takım' : 'Mevcut EA veri kopyası; FC27 doğrulaması bekliyor';
    }
    window.ArenaPerformance = {
        quality(p) { return .72 + (Math.max(40, Math.min(99, p.star.overall || 78)) - 40) * .012; },
        reaction(p) { return Math.max(.025, .3 - ((p.star.overall || 78) - 40) * .0046); }
    };
    const details = document.querySelector('#game-details');
    const sections = [
        ['Kontroller', 'PS5: Sol analog veya yön tuşlarıyla hareket et. ↑ zıpla, ↓ veya △ kay, □ şut, × pas, ○ süper şut, R1 yedek. Options duraklatır, dokunmatik yüzeye basmak tam ekranı açar. Tüm menülerde sol analog / yön tuşlarıyla gez, × seç ve ○ geri dön. Metin girişlerinde × ekran klavyesini açar. Sağ analog penaltı hedefini ve çizilen süper şut yolunu kontrol eder. İkinci PS5 kolu yerel iki oyunculu modlarda çalışır.'],
        ['Overall sistemi', 'Overall 40–99 arasındadır. Özel takımların saha oyuncuları, yedekleri ve kalecileri 99 overalldır. Yüksek overall koşuyu, şut gücünü, temas gücünü ve CPU tepkisini artırır; kalecinin hareketi ve müdahalesi de güçlenir. FC 27 ile eşleşen oyuncularda yayımlanmış temel kart puanı kullanılır. Draftta yalnızca doğrulanmış FC 27 kartları bulunur; rastgele +7 veya 99 yükseltmesi verilmez. Temel kartların yanında oyuncuya ait yayımlanmış özel sürümler kendi puanı, özellikleri ve çerçevesiyle gelebilir. FC 27 kartı eşleşmeyen oyuncular normal maçlarda korunur, draft havuzuna girmez.'],
        ['Maç ve hareketler', 'Tek oyuncu, iki oyuncu ve takım modlarında rakip kaleye gol at. Süper şut göstergesi dolunca güçlü vuruş yapabilirsin. Havada kafa ve röveşata vuruşları vardır. Yakından rakibe dönerek şut çekmek rakibi kısa süre bayıltabilir. Temas kondisyonu düşürür, sakatlık hareketi ve vuruşu zayıflatır; sakat oyuncu zamanla toparlanır.'],
        ['Yedekler ve duran toplar', 'Değişiklik talebi gol, penaltı veya kale vuruşu gibi oyun durduğunda uygulanır. Kulübede kalan yedeklerden seçebilirsin. Kale vuruşunda pas alacak oyuncuya tıkla; gösterilen yüzde top kaybı riskidir. Üçüncü korner penaltıya dönüşür. Beraberlik ekranından ek süre veya penaltı seçeneklerini takip et.'],
        ['Antrenman ve turnuva', 'Antrenmanda tek veya iki saha oyuncusu, CPU veya insan arkadaş ve şut, kafa, röveşata, penaltı çalışmaları seçilir. Antrenman tek kalelidir; süre ve süper şut sınırsızdır, oyuncu değişikliği yoktur. Turnuva ekranları fikstürü, eleme ilerlemesini ve kupa sonucunu gösterir. Özel takımların karakter güçleri ve çift zıplama özellikleri oyuncuya göre devam eder.'],
    ];
    details.innerHTML = '<h3>OYUN BİLGİLERİ VE DETAYLARI</h3>' + sections.map(([title, body]) => '<details><summary>' + title + '</summary><p>' + body + '</p></details>').join('') + '<details><summary>Tüm takımlar ve oyuncu puanları</summary>' + teams.map(t => '<p><b>' + t.name + '</b><br>' + [...t.players, t.keeper].filter(Boolean).map(p => p.name + ': ' + p.overall + ' OVR').join(' · ') + '</p>').join('') + '</details>';
})();
