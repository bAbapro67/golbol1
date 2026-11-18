# Kullanıcı tercihleri

- Oyun değişikliklerinden sonra hem masaüstü uygulamasını hem web paketini güncelle. Yalnızca kaynak dosyalarını değiştirmek yeterli değildir.
- İki dağıtımı birlikte hazırlamak için `npm run release:build` kullan. Masaüstü çıktısı `desktop-release/last-build.json` içinde, web çıktısı `web-release/Golbol-Web.zip` yolundadır.
- Mevcut kullanıcı kayıtlarını koru; dağıtım paketlerine kullanıcı verisi ekleme.
- Masaüstü uygulaması açık olduğunda yeni paket farklı bir klasöre yazılabilir. `desktop-release/last-build.json` içindeki güncel hedefi kullan ve mevcut Golbol masaüstü kısayolunu `scripts/update-desktop-shortcut.ps1` ile güncelle; kullanıcının açık oyununu zorla kapatma.
