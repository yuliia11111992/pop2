function closePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

function openTelegram() {
    // Замените на ваш Telegram username или ссылку
    window.open('https://t.me/your_username', '_blank');
}

function openWhatsApp() {
    // Замените на ваш номер WhatsApp (в международном формате без +)
    window.open('https://wa.me/79001234567', '_blank');
}

// Закрытие по клику на overlay
document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Закрытие по нажатию Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Анимация закрытия
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
