// Bir mesajı HTML sayfasında "deneme" id'li alana yazdıran fonksiyon
function myFunction() {
  document.getElementById("deneme").innerHTML =
    "Sitemizde var olan şehirlere haritadan tıklayarak gidebilirsiniz (İstanbul, Bursa, Kocaeli, Düzce, İzmir, Antalya)";
}

// Kullanıcı bir şehir seçtiğinde uyarı (alert) gösteren fonksiyon
function sehirUyarisi(sehir) {
  alert(sehir + " sayfasına yönlendiriliyorsunuz lütfen tamama basınız...");
}

// Arka plan rengini değiştiren fonksiyon
// Parametre olarak gönderilen renk (hex kodu) sayfanın arka planına uygulanır
function temaDegistir(renk) {
  document.body.style.backgroundColor = renk;
}
