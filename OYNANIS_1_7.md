# Oynanış 1.7

Tek oyunculu saha 1800 birimden 1960 birime, iki oyunculu ve takım modları 2200 birimden 2400 birime genişletildi. Kaleler ve oyuncu başlangıçları yeni genişliğe göre yerleşir. Çizim çözünürlüğü mevcut ölçekleme ve önbellek sistemiyle yönetilir. Kale üst sınırı 8 birim yükseltildi; gol açıklığı yaklaşık yüzde 3 genişledi.

Önceden normal şutta kaleciye temas, kurtarışa çok yakın bir kesinlik veriyordu. Kalecinin hareket çarpanı da takım ortalamasına bağlıydı. Artık kalecinin kendi ratingi hareket hızını, tepki süresini, sıçramayı, penaltıda uzanma aralığını ve şut temasındaki kurtarış olasılığını etkiler. Şutçunun ratingi ile topun hızı ve süper şut olması kurtarış hesabına girer. Başarısız temas topu kaleci arkasına sektirebilir; düşük ratingli kaleci her fiziksel temasında otomatik kurtarmaz. Her şut için tek olasılık kararı kullanılır. Adminin açıkça ayarladığı kurtarış değeri korunur.

Bu olasılıklar garanti skor veya bütün şutlar için sabit kurtarış yüzdesi değildir. Şutun kaleye isabet etmesi, kalecinin konumu ve şut açısı hâlâ sonucu etkiler. Draft oyuncuları gerçek kart ratinglerini kullanır.

Doğrulama: `keeper-balance.test.cjs`, gerçek maç motorunu çalıştıran `keeper-game.test.cjs`, satış/takas/sınır için `club-transfers.test.cjs` ve iki ayrı kulüp arayüzünü kullanan `transfers-desktop.cjs`.
