(() => {
 const dialog=document.createElement('dialog');dialog.id='desktop-settings';
 dialog.innerHTML='<section class="desktop-settings"><h2>UYGULAMA AYARLARI</h2><button type="button" id="desktop-test-window">ONLINE TEST - 2. PENCERE</button><p>Ilk pencerede oda kur. Ikinci pencerede ayni kodla katil.</p><p>PS5: Sol analog / yön tuşları · × Seç · ○ Geri</p><button type="button" id="desktop-network">AYNI WI-FI’DA ARKADAŞ BAĞLANTISI</button><button type="button" id="desktop-addresses">ARKADAŞ BAĞLANTI ADRESLERİ</button><button type="button" id="desktop-fullscreen">TAM EKRAN</button><button type="button" id="desktop-exit">OYUNDAN ÇIK</button><p id="desktop-message" role="status"></p><button type="button" id="desktop-settings-close">○ GERİ</button></section>';
 document.body.append(dialog);
 const $=s=>document.querySelector(s),api=window.GolbolDesktop;
 if(api){$('#desktop-settings-open').hidden=false;$('#desktop-test-open').hidden=false;}
 $('#desktop-settings-open').onclick=()=>{dialog.showModal();if(!api)$('#desktop-message').textContent='Bu ayarlar Windows uygulamasında kullanılabilir.';};
 $('#desktop-settings-close').onclick=()=>dialog.close();
 $('#desktop-test-open').onclick=async()=>{try{if(!api?.testWindow)throw Error('İkinci pencere için güncel Golbol masaüstü uygulamasını aç.');await api.testWindow();}catch(e){dialog.showModal();$('#desktop-message').textContent=e.message;}};
 for(const [id,method] of [['desktop-test-window','testWindow'],['desktop-network','network'],['desktop-addresses','addresses'],['desktop-fullscreen','fullscreen'],['desktop-exit','quit']])$('#'+id).onclick=async()=>{if(!api)return;try{const result=await api[method]();if(result)$('#desktop-message').textContent=result;}catch(e){$('#desktop-message').textContent=e.message;}};
 $('#pad-team-settings').onclick=()=>window.ArenaControls.settings('powers');
 $('#pad-match-settings').onclick=()=>window.ArenaControls.settings('match');
})();
