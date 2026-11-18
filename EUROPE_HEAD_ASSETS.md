# Yeni kulüplerin yüz görselleri

101 yeni kulübün 303 saha oyuncusu, 101 kalecisi ve 101 teknik direktörü için toplam 505 kafa görseli.

Görseller, mevcut `assets/player-heads-extra-b.png` dosyası tarz referansı kullanılarak yerleşik imagegen aracıyla üretildi. Gerçek kişilerin adlarıyla hazırlanan bu görseller oyun için üretilmiş benzetimlerdir; kaynak fotoğraf veya kusursuz biyometrik eşleşme iddiası taşımaz.

- Oyun dosyaları: `assets/europe-clubs/heads-00.png` ile `heads-31.png` arasında 32 saydam PNG atlası.
- Kullanılan tüm istemler ve kişi/hücre eşleştirmesi: `artifacts/europe-clubs/head-generation.json`.
- Alfa sınırları ve çene konumları: `artifacts/europe-clubs/head-measurements.json`.
- Saha kadrolarının puan kaynağı: [EA genel oyuncu puanları](https://drop-api.ea.com/rating/ea-sports-fc). İndirilen veri tarihi: 2 Ekim 2026. ESPN kadro kimlikleriyle eşleştirildi. Kadro özeti: `EUROPE_STAR_SELECTION.md`.

Oyuncuların çenesi, eski oyuncularla aynı 88 × 96 kafa çizim alanında forma yakasına oturur. Teknik direktörlerde saydam kafa sınırları kullanılır. Yeni yüzlerde oval fotoğraf kırpması veya fotoğraf arka planı bulunmaz.

Veri güncelleme sırası: `select-europe-stars.cjs`, `prepare-europe-heads.cjs`, manifestteki her atlas için yerleşik imagegen ile üretim, `measure-europe-heads.ps1`, `install-europe-heads.cjs`. Yeni bir kadro seçimi kişi/hücre eşleştirmesini değiştirebileceğinden, yüz manifesti ve görseller de birlikte güncellenmelidir.
