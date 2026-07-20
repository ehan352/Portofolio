// Menambahkan efek fade-in halus saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 0.8s ease-in-out';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 100);
});

// Anda bisa menambahkan logika kustom JavaScript lainnya di sini jika diperlukan nanti