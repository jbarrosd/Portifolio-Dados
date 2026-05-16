/**
 * motion.js
 * Responsável por todas as animações e efeitos visuais da aplicação.
 * Utiliza Intersection Observer para animações ao rolar a página.
 */

// ========================================
// ANIMAÇÕES DE ENTRADA (FADE IN)
// ========================================

/**
 * Observa elementos e aplica animação quando entram na viewport
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observa cards da sidebar
    document.querySelectorAll('.sidebar-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`;
        observer.observe(el);
    });

    // Observa cards de projeto
    document.querySelectorAll('.project-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(12px)';
        el.style.transition = `opacity 0.4s ease ${i * 0.1}s, transform 0.4s ease ${i * 0.1}s`;
        observer.observe(el);
    });
}

// ========================================
// CLASSE ANIMATE-IN
// ========================================

/**
 * Adiciona a classe que dispara a animação CSS
 */
document.addEventListener('DOMContentLoaded', () => {
    // Injeta estilo global para animate-in
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// ========================================
// EFEITO GLOW NO HOVER DOS CARDS
// ========================================

/**
 * Adiciona efeito de glow suave ao passar o mouse sobre os cards
 */
function initHoverGlow() {
    document.querySelectorAll('.project-card-image-wrapper').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.35)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
}

// ========================================
// ANIMAÇÃO DO BANNER
// ========================================

/**
 * Animação sutil de parallax no banner ao rolar
 */
function initBannerParallax() {
    const banner = document.querySelector('.banner-bg-image');
    if (!banner) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        banner.style.transform = `translateY(${scrollY * 0.2}px)`;
    }, { passive: true });
}

// ========================================
// PULSO NO STATUS DOT
// ========================================

/**
 * Já controlado via CSS @keyframes pulse-dot
 * Função reservada para extensões futuras
 */
function initStatusPulse() {
    // Controlado por CSS
}

// ========================================
// EXPORTAÇÃO
// ========================================

const Motion = {
    init() {
        initBannerParallax();
        // Scroll animations inicializadas após renderização dos componentes
        setTimeout(() => {
            initScrollAnimations();
            initHoverGlow();
        }, 300);
    }
};
