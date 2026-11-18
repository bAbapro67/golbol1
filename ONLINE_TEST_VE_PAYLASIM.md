# İkinci oyun penceresi

Uygulama ayarlarındaki **ONLINE TEST - 2. PENCERE** düğmesi veya üst menüdeki **Online Test** ikinci bir oyun penceresi açar. İlk pencerede online oda oluşturun, ikinci pencerede aynı oda koduyla katılın. İki pencere aynı yerel sunucuyu, ayrı oyuncu kayıtlarını kullanır. Wi-Fi bağlantısını açmanız gerekmez. İkinci pencereyi kapatmak ana oyunu kapatmaz. Ana oyun kapatılınca test pencereleri de kapanır.

Maçlardaki stadyum, taraftar, gol sevinci ve ole kayıtları kaldırıldı. Müzik ve oyun efektleri korunur.

# Başka bilgisayara gönderme

`npm run desktop:build` Windows paketini oluşturur. Oyun açıkken eski klasör kilitliyse yeni sürüm ayrı klasöre yerleştirilir. Son paketin yolu `desktop-release/last-build.json` içindedir. `npm run desktop:share` tüm paketi `desktop-release/Golbol-Paylas.zip` dosyasına koyar ve SHA256 dosyasını oluşturur.

ZIP'in tamamını gönderin. Alıcı tüm dosyaları çıkartıp içindeki `Golbol.exe` dosyasını açmalıdır. EXE dosyasını veya masaüstü kısayolunu tek başına göndermek yeterli değildir.

Mevcut EXE dijital olarak imzalanmamıştır. Paylaşım paketinin hazırlanması diğer bilgisayardaki antivirüs engelinin çözüldüğünü kanıtlamaz. Kesin neden için o bilgisayarın koruma geçmişindeki tehdit adı ve engellenen dosya yolu gerekir.
