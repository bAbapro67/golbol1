# Menü donması incelemesi — 22 Ekim 2026

Menü donması kodda yeniden üretildi. Takım listesi, her kartın görünürlüğünü hesaplarken yeniden oluşturulup `localeCompare` seçenekleriyle tekrar tekrar sıralanıyordu. 126 takımlı iki panelde bu işlem tek tıklamada çok sayıda sıralama ve karşılaştırıcı oluşturuyordu. Tarayıcının ana JavaScript iş parçacığı bu sırada kullanıcı girişlerini ve çizimi bekletiyordu.

## Aynı bilgisayarda önce / sonra

Gizli gerçek Electron penceresinde aynı seçim eylemlerinin senkron tıklama işleyicileri ölçüldü. Bunlar tüm ekranın boyanma süresi veya FPS ölçümü değildir. Arka plandaki uygulamalar nedeniyle tek çalıştırmalar değişkenlik gösterebilir.

| Eylem | Önce | Sonra |
| --- | ---: | ---: |
| PS5 maç hazırlığını açma | 2.785 ms | 386 ms |
| Takım değiştirme — birinci seçim | 1.446 ms | 57 ms |
| Takım değiştirme — ikinci seçim | 2.175 ms | 79 ms |
| Oyuncu değiştirme | 2.110 ms | 12 ms |

Önceki sürümde hazırlık için ayrıca cihaz ekranından PS5 seçiliyordu. Yeni sürüm ana menüden doğrudan hazırlığa geçer. Ham kayıtlar: `artifacts/menu-before.json` ve `artifacts/menu-after.json`.

Pencerenin tüm kaynaklarıyla yüklenmesi ölçümler arasında uzadı (7,0 saniyeden 24,5 saniyeye); bu ölçüm medya/görsel yüklemelerini ve sistem yükünü de içerir. Açılış hızının arttığı iddia edilmiyor. Doğrulanan gelişme, menü tıklamalarında ana iş parçacığının bloke edildiği sürenin azalmasıdır.

## Yapılan düzeltmeler

- Tek `Intl.Collator` ve önbellekli alfabetik takım sırası kullanıldı. Her kart için tekrar sıralamak yerine panel başına filtre ve `Set` üzerinden üyelik denetimi yapılıyor.
- Oyuncuların tam boy portre atlasları artık hepsi baştan açılmak yerine çizimde ihtiyaç olduğunda yükleniyor.
- Durağan menü arka planı saniyede 30 kez çizilmek yerine seyrek yenileniyor; değişikliklerde hemen çiziliyor. Maçın 60 Hz çizim ve 120 Hz simülasyon hedefi korunuyor.
- Menüdeki büyük gri filtreler, bulanıklıklar ve gereksiz geçişler azaltıldı. Kontrolcü durumu değişmedikçe DOM metni güncellenmiyor.
- Mobil kontrol kodu, dokunmatik arayüz ve eski mobil kontrol testleri kaldırıldı. Genel pencere boyutu uyarlamaları korunuyor.

## Bilgisayarda görülen durum

Salt okunur WMI ve işlem ölçümleri:

- Intel Core i5-3317U, 4 mantıksal işlemci; anlık işlemci yükü %100.
- Yaklaşık 8 GB fiziksel bellek; ölçüm anında yaklaşık 1 GB kullanılabilir bellek, %79 taahhüt kullanımı ve 132 sayfa/saniye bellek sayfalama etkinliği.
- Chrome ve VS Code süreçleri de yüksek bellek kullanıyordu. Bu uygulamalar kapatılmadı.
- Intel HD Graphics 4000 ve AMD Radeon HD 7670M; Electron ölçümünde GPU birleştirme ve 2D hızlandırma etkin. Yazılımsal çizime düşüldüğüne dair kanıt bulunmadı.
- C: diskinde ilk ölçümde 4,7 GB, sonraki ölçümde 4,59 GB boş alan vardı. Ölçülen anda disk kuyruğu ve disk etkinliği sıfırdı; bu kayıt disk darboğazını doğrulamıyor.
- Örneklenen sistem kayıtlarında beklenmedik kapanma ve servis zaman aşımı olayları vardı. Bu kayıtlar tek başına donanım arızası teşhisi koydurmaz.

Kodun oluşturduğu uzun menü işlemleri, işlemci/bellek baskısıyla birleşince daha belirgin hissedilebilir. İşletim sistemi ayarları, kayıt defteri, sürücüler veya kullanıcının diğer programları değiştirilmedi.

## JavaScript “Cannot find” mesajı

Yalnızca “Cannot find” bölümü iletildi; eksik dosyanın adı ve tam yığın kaydı bulunmadığı için o pencerenin kesin dosyası saptanamadı. Bu mesaj eksik dosya/modül ya da başlatma yolu sınıfındadır; tek başına bilgisayar arızası göstermez. Yeni paket, kendi çalışma motoru ve çalışma zamanı dosyalarıyla hazırlanır. Başlatma yolları uygulama konumundan çözülür. Paketleme süresince çalışan eski paket yerinde tutulur; tamamlanınca değiştirilir. Son paket açılış ve sohbet testi ayrıca çalıştırılır.

## Test kapsamı

Kart çeşitleri, dört tur draft, CPU rakip, gerçek kart puanları, PS5 menü girişi, iki kol, bağlantı kesilince tuş bırakma, ekran klavyesi, duraklatma ve çizim gizli gerçek Electron penceresinde doğrulandı. Kontrolcü testleri sanal standart gamepad girdileri kullanır; fiziksel PS5 kolunun USB/Bluetooth sürücüsü bu testin kapsamında değildir.

Eski `game.test.cjs` ve `penalty-roster.test.cjs` kontrolleri önceki kaynak üzerinde de başarısızdı; ilki artık bulunmayan `requestPass`/`skill` yardımcılarını, ikincisi eski sahte DOM/oyuncu alanlarını bekliyor. Bu kontrollerin tümünün geçtiği iddia edilmiyor. Güncel startup/çizim, takım sıralaması, kartlar, odalar ve sohbet kontrolleri README içinde listelenmiştir.
