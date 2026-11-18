# İngiltere formaları ve Fenerbahçe yüz düzeltmesi

11 takımın 22 saha ve kaleci görseli `assets/kit-references` içine kopyalandı ve `english-kits.js` ile uygulandı: Tottenham, Nottingham Forest, Newcastle United, Manchester United, Fulham, Everton, Crystal Palace, Brighton, Brentford, Aston Villa ve mevcut Arsenal.

Formalar mevcut hareketli canvas gövdesine renk, desen, sponsor, yaka ve kol ayrıntılarıyla aktarıldı. Kaleci formaları dosya adındaki `kaleci` ifadesiyle ayrıldı.

Lukaku/Greenwood atlası iki farklı yüz içerir. Tek satırlı atlasta menü portresinin dikey konumu 0/0 nedeniyle NaN oluyordu; CSS konumu geçersiz kalınca iki oyuncu da ilk hücreyi gösterebiliyordu. `portraitMarkup` artık tek satır ve tek sütun için konumu sıfır hesaplar; hücre 0 ve hücre 1 farklı yüzleri gösterir. Maçtaki canvas kırpması değişmez.
