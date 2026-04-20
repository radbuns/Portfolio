// Menambahkan efek scroll halus saat link navigasi diklik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const teks = "Hello, I'm Radhit Rabbani";
let i = 0;

function mengetik() {
    if (i < teks.length) {
        document.getElementById("typing").innerHTML += teks.charAt(i);
        i++;
        setTimeout(mengetik, 100); // Kecepatan mengetik (100ms)
    }
}

// Jalankan fungsi saat halaman selesai dimuat
window.onload = mengetik;

const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i"); // Mengambil tag <i> di dalam tombol

themeToggle.addEventListener("click", () => {
    // Hanya mengubah bentuk ikon saja
    if (icon.classList.contains("fa-moon")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
    
    // Memberikan efek animasi "pulsa" singkat saat diklik
    themeToggle.style.transform = "scale(1.5)";
    setTimeout(() => {
        themeToggle.style.transform = "scale(1)";
    }, 200);
});