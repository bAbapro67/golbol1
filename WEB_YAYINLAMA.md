# Golbol · Tarayıcı ve çevrimiçi sunucu
Bu paket offline modları, Online Draft, sunucu listesini, sohbeti ve Ultimate Team mağazasını içerir. Klavye veya gamepad ile bilgisayar tarayıcısından oynanır.

## Hesap ve ses ayarları

Misafir olarak offline oynanabilir. Online oyun, sunucu listesi ve takas için kullanıcı adı ve şifreyle hesap gerekir. İlk kayıt sırasında bu cihazdaki mevcut misafir kulübü; bakiyesi, kartları, kadrosu ve maç istatistikleriyle hesaba bağlanır. Mevcut hesaba giriş yapıldığında o hesabın kayıtlı kulübü yüklenir. Kullanıcı adları 3–24 harf/rakam/alt çizgi, şifreler 8–128 karakterdir.

Hesap ve ilerleme kayıtları `DATA_DIR` altında `accounts.json` ve `clubs.json` dosyalarında saklanır. İkisini birlikte yedekle ve kalıcı diskte tut. Hesaplar aynı oyun sunucusunda kullanılabilir; ayrı yerel masaüstü sunucusu ile yayımlanmış web sunucusu arasında kendiliğinden eşitlenmez. Şifreler scrypt özetiyle, oturumlar HttpOnly çerezle korunur. İnternet yayını HTTPS üzerinden yapılmalı.

Üstteki SES AYARLARI veya maçın duraklatma ekranından ana sesi ve 11 ayrı ses grubunu ayarlayabilirsin. Her grupta seviye ve aç/kapat kontrolü vardır. Tercihler bu cihazda saklanır. PS5 koluyla kaydırıcılarda sol/sağ sesi değiştirir.

## Başlatma ve yayınlama

Node.js 20 veya üstü kurulu sunucuda paket klasöründe `npm start` çalıştır. Yerel adres `http://localhost:3000`. Ek npm bağımlılığı gerekmez.

İnternette yayımlamak için uzun süre çalışan Node.js süreçlerini ve SSE bağlantılarını destekleyen hosting kullan. Statik hosting tek başına online oyun ve mağazayı çalıştıramaz. Tek sunucu süreci kullan; odalar bellekte tutulur ve yeniden başlatmada kapanır.

Ortam değişkenleri:

- `PORT`: hosting portu (varsayılan 3000).
- `HOST`: varsayılan `0.0.0.0`.
- `PUBLIC_ORIGIN`: oyunun tam HTTPS adresi, sonunda `/` olmadan. HTTPS proxy arkasında istek doğrulaması için ayarla.
- `DATA_DIR`: kulüp kayıtları için kalıcı disk klasörünün mutlak yolu. Varsayılan `.local-data/ultimate`. Yeniden dağıtımda kayıtları korumak için kalıcı disk bağla.

HTTPS ters proxy kullanıyorsan SSE yanıt tamponlamasını kapat ve uzun bağlantılara izin ver. Oyun ile `/api` aynı adreste olmalı.

## Her yerden katılma

Yayımlanan oyun adresini aç, Çevrimiçi Oyna ekranında Online Draft seç ve oda oluştur. Aynı web adresini açan diğer oyuncular sunucu listesinde odanı görüp basarak katılır. Liste 5 saniyede yenilenir; dolu veya hazırlığı başlamış odalar gizlenir. Oda kodu da kullanılabilir.

Dosyaların hazırlanması hosting hesabına dağıtım yapmaz. `localhost` ve ev Wi-Fi adresi dünyaya açık değildir.

## Paket

Kaynak klasöründe `npm run web:build` çalıştır. `web-release/Golbol-Web.zip` içindeki klasörün tamamını Node.js hostingine yükle. Masaüstü sürümü ayrıca kullanılabilir.
