/**
 * NavBar.js
 * Responsável pelo comportamento da barra de navegação superior
 * e pelo botão de compartilhar.
 */

// ========================================
// BOTÃO COMPARTILHAR
// ========================================

/**
 * Inicializa o botão de compartilhar perfil
 */
function initShareButton() {
    const shareBtn = document.getElementById('shareBtn');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', () => {
        const url = window.location.href;

        // Tenta usar a Web Share API (mobile)
        if (navigator.share) {
            navigator.share({
                title: 'Jean Barros | Portfólio',
                text: 'Confira o portfólio de Jean Barros!',
                url: url,
            });
        } else {
            // Fallback: copia para clipboard
            navigator.clipboard.writeText(url).then(() => {
                showToast('Link copiado para a área de transferência!');
            }).catch(() => {
                showToast('Link: ' + url);
            });
        }
    });
}

// ========================================
// TOAST DE NOTIFICAÇÃO
// ========================================

/**
 * Exibe uma mensagem toast temporária
 * @param {string} message - Mensagem a exibir
 */
function showToast(message) {
    // Remove toast anterior se existir
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: rgba(139, 92, 246, 0.95);
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 12px;
        font-family: var(--font-main);
        z-index: 9999;
        opacity: 0;
        transition: all 0.25s ease;
        white-space: nowrap;
        box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
        pointer-events: none;
    `;

    document.body.appendChild(toast);

    // Anima entrada
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Remove após 3s
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ========================================
// NAVBAR
// ========================================

const NavBar = {
    init() {
        initShareButton();
    }
};
