var isRonaldo = true;

function toggleGambar() {
  var gambar = document.querySelector(".gambar");
  if (isRonaldo) {
    gambar.src = "ronaldo2.jpg"; // Ganti dengan nama file gambar Messi
    gambar.alt = "ronaldo salto"; // Ganti alt teks gambar Messi
  } else {
    gambar.src = "ronaldo.jpg"; // Ganti dengan nama file gambar Ronaldo
    gambar.alt = "ronaldo"; // Ganti alt teks gambar Ronaldo
  }
  isRonaldo = !isRonaldo; // Toggle status gambar
}
