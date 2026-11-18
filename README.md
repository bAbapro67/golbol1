# Golbol · Masaüstü ve tarayıcı oyunu

Tarayıcıda tam oyun, mağaza ve çevrimiçi sunucu listesi için [web yayınlama rehberine](WEB_YAYINLAMA.md) bak. `npm start` ile yerelde, `npm run web:build` ile yayın paketini hazırlayarak oynayabilirsin.

## PS5 kontrolleri

| İşlem | Kontrol |
| --- | --- |
| Menülerde gezinme | Sol analog veya yön tuşları |
| Seç / onayla | × |
| Geri | ○ |
| Seçenek değerini değiştir | ← / → |
| Hazırlıkta önceki / sonraki adım | L1 / R1 |
| Metin yazma | Metin kutusunda × ile ekran klavyesi |
| Ekran klavyesinde sil / boşluk | □ / △ |
| Hareket | Sol analog, ← / →; L2 / R2 de kullanılabilir |
| Zıpla / kay | ↑ / ↓ veya △ |
| Şut / pas / süper şut | □ / × / ○ |
| Yedek değişikliği talebi | R1 |
| Penaltı hedefi / kaleci yüksekliği | Sağ analog |
| Çizilen süper şut | Sağ analog ile çiz, × ile gönder |
| Duraklat / devam et | Options |
| Tam ekran | Dokunmatik yüzeye bas |

Kolunu USB veya Bluetooth ile bağla ve bir tuşa bas. İkinci PS5 kolu yerel iki oyunculu ve birlikte oynanan modlarda ikinci oyuncuyu yönetir. Kol bağlantısı kesilirse basılı kontroller temizlenir. Kontrolcünün Windows tarafından standart gamepad olarak tanınması gerekir.

## Draft ve maçlar

**Offline Draft · CPU:** Ana menüden aç. Her turda beş seçenekten bir kart seçerek üç saha oyuncusu ve bir kaleci oluştur. CPU da kendi kadrosunu kurar. Dört seçimden sonra maçı başlat. İnternet ve oda gerekmez.

**Arkadaş draftı:** Çevrimiçi Oyna ekranında oda oluştur; arkadaşın bağlanınca Ultimate Draft seç. İki taraf da dört kartını tamamlayınca ev sahibi maçı başlatır. Normal, elit ve nadir 99 kartlar ortak kart üreticisini kullanır. Uygun özelliklere sahip yıldızların özel varyantları vardır; düşük puanlı oyuncular normal kartlarla gelir. Kart puanları maç gücüne uygulanır. Aynı kadroyla rövanş oynanabilir; yeni online draft için yeni oda açılır.

Hazırlık maçı, CPU rakip, CPU takım arkadaşı, iki kol ile yerel maç, UCL turnuvası ve antrenman seçenekleri korunur. Menüdeki Kontroller bölümünde PS5 açıklamaları bulunur.

Draft kartlarında oyuncu yüzleri, kulüp arması ve oyun içi istatistikler bulunur. ≤64 bronz, 65–74 gümüş, ≥75 altın kabuk kullanır. Gümüş ve altının ayrıca premium kabukları vardır; premium görünüm tek başına puan artırmaz. Elit yükseltmeler ve 99 kartlar farklı özel şekil/desenlere sahiptir. Yeni turda beş kart sırayla açılır, seçilen kart kadroya geçer. Açılış sırasında × animasyonu atlar; sonraki × kartı seçer. Azaltılmış hareket ayarında açılış atlanır. Görseller yereldir, offline draft sırasında internet gerekmez. [Kart kaynakları ve FC referansları](assets/draft/SOURCES.md).

## Aynı Wi-Fi üzerinde arkadaşla oynama

Ana menüde **Uygulama / Arkadaş bağlantısı → Aynı Wi-Fi’da arkadaş bağlantısı** seçeneğini aç. Gösterilen yerel adresi arkadaşın tarayıcısında açsın; ardından aynı oda koduna katılsın. Ağ bağlantısını değiştirmek açık maçı/odayı kapatır. Başlangıçta yerel ağ erişimi kapalıdır. İnternet üzerinden oynamak için web paketini ortak bir Node.js sunucusunda yayımla; [kurulum](WEB_YAYINLAMA.md).

Oda açıkken **Sohbet** düğmesiyle yazışabilirsin. Duraklatma ekranında da Oda Sohbeti seçeneği vardır. Son 60 mesaj oda kapanana kadar bellekte tutulur; diske sohbet kaydı yazılmaz. PS5 ile sohbet ve oda kodu için ekran klavyesi kullanılabilir.

## Performans ve doğrulama

Donma incelemesi, bilgisayar ölçümleri ve menü süreleri: [PERFORMANS_RAPORU.md](PERFORMANS_RAPORU.md).

Çalıştırılan güncel kontroller:

- `node tests/overall-controls.test.cjs`
- `node tests/team-alphabet.test.cjs`
- `node tests/draft-cards.test.cjs`
- `node tests/chat.test.cjs`
- `node tests/draft.test.cjs`
- `node tests/online.test.cjs`
- `node_modules/electron/dist/electron.exe tests/ps5-desktop.cjs` — gizli gerçek pencerede sanal kollarla menü, draft, CPU, iki kol ve ekran klavyesi; rapor `artifacts/ps5-desktop.json`.
- `node_modules/electron/dist/electron.exe tests/draft-presentation.cjs` — beş temel kart türü, yedi PNG kabuk, yüzler, online kart seçimi ve arkadaş güncellemesinde açılışın yeniden başlamaması; rapor `artifacts/draft-presentation.json`.
- `powershell -NoProfile -ExecutionPolicy Bypass -File tests/desktop-smoke.ps1` — paketlenmiş `.exe`, PS5/offline modülleri, güvenli masaüstü köprüsü ve gerçek oda sohbeti.

## Geliştirme

`npm install` sonrası test çalışma motorunu `node_modules/node/bin/node.exe node_modules/electron/install.js` ile kur. `npm run desktop` geliştirici uygulamasını, `npm run desktop:build` Windows paketlemesini çalıştırır. Araçların gerektirdiği Node sürümü projeye özeldir; sistemdeki Node kurulumu değiştirilmez. Yeni paket önce ayrı klasörde hazırlanır, ardından mevcut uygulamanın yerine geçirilir.

Gönderilen özgün logo `desktop/logo.png` olarak saklanır. Çok boyutlu Windows simgesini yeniden üretmek için `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/create-logo-icon.ps1` kullanılır.

Kaynaklar: [kadrolar](EXPANSION_SOURCES.md), [teknik direktörler](COACH_SOURCES.md), [formalar](KIT_SOURCES.md), [armalar](assets/crests/SOURCES.md), [sesler](assets/audio/SOURCES.md), [portreler](assets/GENERATION.md).
