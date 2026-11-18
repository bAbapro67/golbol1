# Takım gücü ve kurgu isimler

117 takımın gücü, mevcut ESPN kadrosuyla eşleşen EA erkek futbolcu puanlarından hesaplanır. En yüksek puanlı 18 kadro oyuncusunun ortalaması kullanılır; daha az eşleşme varsa bulunan oyuncular hesaplanır. EA puanları `artifacts/europe-clubs/ea-ratings.json` içindeki mevcut veri kopyasıdır. Lig sırası farklı liglerde eşdeğer güç sayılmaz.

2 Ekim 2026 tarihinde alınan ESPN puan tablolarından maç başına puan, kadro ortalamasına en fazla ±2,5 puanlık form etkisi ekler. İlk 10 maçta bu etki maç sayısıyla azaltılır. Kaynaklar: https://www.ea.com/games/ea-sports-fc/ratings ve https://site.api.espn.com/apis/v2/sports/soccer/esp.1/standings (diğer liglerin kodlarıyla aynı uç nokta).

Hareket ve şut çarpanı takım gücünün %75’i ve oynayan futbolcunun puanının %25’iyle hesaplanır; 0,72–1,22 arasında kalır. Kaleci hareketi, müdahale mesafesi ve toparlanması aynı güce bağlıdır. CPU şut fırsatına tepki süresi 0,025–0,3 saniyedir. Güç farkı sonucu zorla belirlemez. Antrenman kalecisinin önceki kolaylaştırılmış ayarları korunur.

Örnek: Real Madrid 85,96; Erzurumspor 67,82. Tam hesaplar `artifacts/performance/team-strength.json` dosyasındadır. Yeniden üretme: `node scripts/build-team-performance.cjs`.

Yeni 101 kulüp, 404 futbolcu ve 101 teknik direktörün görünen isimleri kurgudur. Gerçek adlar, veri ve forma eşleştirmeleri için saklanır; armalar, formalar ve yüzler korunur. Kulüp eşleştirmesi `KURGU_ISIMLER.md` içindedir.

Fener Yıldız’da ilk iki saha oyuncusu Romelu Lukaku ve Mason Greenwood’dur. EA kaynak yüzlerinden imagegen ile hazırlanmış iki şeffaf baş `assets/player-heads-fener-new.png` içindedir; boyun ve forma içermez. Hücreler 2×1, ölçülen çene/hiza ve ten rengi `artifacts/performance/fener-head-measurements.json` içindedir.

Kalelerin üst direği 290’dan 265’e çıkarıldı (açıklık yaklaşık %10 büyüdü). Saha oyuncularının görüntüsü %8 uzatıldı; kaleci görüntüsü aynı kaldı.
