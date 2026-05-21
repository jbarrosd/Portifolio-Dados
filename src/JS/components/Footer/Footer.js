/**
 * Footer.js
 * Responsável pelo rodapé da aplicação.
 * (Reservado para uso futuro — o site original não exibe footer visível)
 */

// ========================================
// FOOTER COMPONENT
// ========================================

const Footer = {
    init() {
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
};
