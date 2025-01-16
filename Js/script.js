// Ini File Javascript

//user
window.addEventListener('DOMContentLoaded', function () {
    let userName = '';

    // Keep prompting until the user provides a valid name
    while (!userName) {
        userName = prompt('Silakan masukkan nama Anda untuk melanjutkan:');
        if (!userName) {
            alert('Nama tidak boleh kosong. Silakan coba lagi.');
        }
    }

    // Update the greeting text with the user's name
    document.getElementById('user-greeting').textContent = userName;
});

// Pilih semua elemen dengan kelas "card" visi and misi
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Hapus kelas "active" dari semua card
        cards.forEach(c => c.classList.remove('active'));
        // Tambahkan kelas "active" pada card yang diklik
        card.classList.add('active');
    });
});

// Tentang Kami
// Pilih tombol "Pelajari Lebih Lanjut"
const learnMoreBtn = document.querySelector('.learn-more-btn');

// Tambahkan event listener untuk klik tombol
learnMoreBtn.addEventListener('click', () => {
    alert('Terima kasih telah tertarik untuk belajar lebih lanjut tentang Ruang Hijau!');
});

// Portfolio
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Anda memilih proyek: ' + card.querySelector('h3').textContent);
    });
});

// Kontak
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-email').textContent = email;
    document.getElementById('output-message').textContent = message;

    
    document.getElementById('output-section').style.display = 'block';

    this.reset();
});

const tombol = document.getElementById('tombol');
const navigation = document.querySelector('.navigation');

tombol.addEventListener('click', () => {
    navigation.classList.toggle('show');
});

document.querySelectorAll('.Navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = document.querySelector('.main-header').offsetHeight; // Offset header height
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});