document.getElementById("whatsappForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form melakukan submit default

  // Ambil nilai input dari form
  var message = document.getElementById("message").value;

  // Nomor WhatsApp tujuan (tanpa tanda +, misal: +62 857-1001-1128 untuk nomor Indonesia)
  var phoneNumber = "6285710011128";

  // Format pesan yang akan dikirim
  var whatsappMessage = "Halo, Admin" + ".\nPesan: " + message;

  // Encode pesan agar sesuai dengan URL
  var encodedMessage = encodeURIComponent(whatsappMessage);

  // Buat URL untuk WhatsApp
  var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

  // Buka URL di tab baru
  window.open(whatsappUrl, "_blank");
});


// start nav scroll & agar jarak margin scroll benar
const nav = document.getElementById("nav");

// Fungsi untuk menangani scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
// end nav scroll

// start nav link
const navLinks = document.querySelectorAll("#nav .navigasi a");

// Tambahkan event listener ke setiap link
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Hapus class 'active' dari semua link
        navLinks.forEach(link => link.classList.remove("active"));

        // Tambahkan class 'active' ke link yang diklik
        this.classList.add("active");
    });
});
// end nav link

// start e-course
// Pilih semua elemen kategori dan kartu konten
const kategoriItems = document.querySelectorAll("#e-course .kategori p");
const cards = document.querySelectorAll("#e-course .content .card");

// Fungsi untuk menampilkan semua kartu pada load pertama
function showAllCards() {
    cards.forEach(card => card.classList.add("active"));
}

// Panggil fungsi untuk menampilkan semua kartu pada load pertama
showAllCards();

// Tambahkan event listener ke setiap kategori
kategoriItems.forEach(item => {
    item.addEventListener("click", function() {
        // Hapus class 'active' dari semua kategori
        kategoriItems.forEach(kategori => kategori.classList.remove("active"));
        
        // Tambahkan class 'active' ke kategori yang diklik
        this.classList.add("active");

        // Ambil kategori dari data attribute
        const category = this.getAttribute("data-category");

        // Tampilkan atau sembunyikan konten sesuai kategori
        cards.forEach(card => {
            const cardCategories = card.getAttribute("data-category").split(",");

            // Tampilkan semua kartu jika kategori "all" dipilih
            if (category === "all") {
                card.classList.add("active");
            } 
            // Tampilkan hanya kartu yang memiliki kategori sesuai yang dipilih
            else if (cardCategories.includes(category)) {
                card.classList.add("active");
            } 
            // Sembunyikan kartu yang tidak sesuai kategori
            else {
                card.classList.remove("active");
            }
        });
    });
});
// end e-course

// start burger menu
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navigasi = document.querySelector(".navigasi");

    burger.addEventListener("click", function () {
        navigasi.classList.toggle("show");
    });
});
// end burger menu

