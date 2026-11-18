# Kadro ve görsel kaynakları

29 Eylül 2026 kadro veri kontrolü. Oyunda 12 kulüp vardır. Her kulübün oyun kadrosu üç saha oyuncusu ve bir kaleciden oluşur; gerçek takımların bütün kadrosu değildir. Millî takımlar ve Dünya Kupası modu kullanıcı isteğiyle kaldırılmıştır.

- Kadro verileri ve takım armaları: ESPN Soccer API. İndirilen kadro anlık görüntüleri `artifacts/rosters`, kaynak adresleri `artifacts/rosters/source-urls.json` dosyasındadır. Geçmiş araştırma dosyalarında oyundan kaldırılmış takımlar bulunabilir.
- Teknik direktör kaynakları: [COACH_SOURCES.md](COACH_SOURCES.md).
- Forma kaynakları: [KIT_SOURCES.md](KIT_SOURCES.md).
- İlk 16 yıldızın özgün oyun portreleri: `assets/player-heads.png` ve `assets/player-heads-corrected.png`; üretim notları [assets/GENERATION.md](assets/GENERATION.md).
- Arşivdeki gerçek oyuncu fotoğraflarının kaynakları: `assets/faces/CREDITS.json`. Bu kaynak fotoğrafları oyun portrelerinden ayrı tutulur.
- Yeni 32 oyun yüzü yerleşik imagegen ile üretildi. Dosyalar: [atlas A](assets/player-heads-extra-a.png), [atlas B](assets/player-heads-extra-b.png). Üretim tarifleri: [A](assets/player-heads-extra-a.prompt.txt), [B](assets/player-heads-extra-b.prompt.txt). Her atlas 4×4 yerleşimdedir; oyuncu eşleştirmeleri `club-portraits.js` içindedir. Eski 16 yüz ve dört düzeltilmiş portre değiştirilmeden geri getirildi.

## Kullanım

`index.html` dosyasını tarayıcıda açın. Tek oyuncu, karşılıklı iki oyuncu veya aynı takımda iki oyuncu seçilebilir. Antrenmanda yalnızca seçili takım bulunur. Tek oyuncuda iki yedek, birlikte oynamada bir ortak yedek vardır.

Ses başlangıçta kapalıdır. Ses düğmesine basınca düşük seviyede, yumuşak geçişle açılır. Menü, duraklama ve sekmeden ayrılma sesi durdurur.

P1: W/A/D hareket, V şut, B süper şut, E özel hareket, R oyuncu değişikliği.

P2: yön tuşları, K şut, L süper şut, I özel hareket, O oyuncu değişikliği.
