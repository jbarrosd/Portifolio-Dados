/**
 * Themes.js
 * Gerenciamento de tema da aplicação.
 * Atualmente utiliza tema escuro como padrão (dark mode).
 */

// ========================================
// CONFIGURAÇÃO DO TEMA
// ========================================

const Themes = {

    // Tema atual
    current: 'dark',

    /**
     * Inicializa o tema ao carregar a página
     */
    init() {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.apply(savedTheme);
    },

    /**
     * Aplica um tema ao documento
     * @param {string} theme - 'dark' | 'light'
     */
    apply(theme) {
        this.current = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    },

    /**
     * Alterna entre dark e light
     */
    toggle() {
        const next = this.current === 'dark' ? 'light' : 'dark';
        this.apply(next);
    }

};
