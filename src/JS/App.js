/**
 * App.js
 * Inicializa todos os componentes na ordem correta.
 */

/**
 * Alinha a altura do card de projetos com a sidebar,
 * criando scroll interno no card de projetos.
 */
function alignProjectsToSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    if (!sidebar || !mainContent) return;

    // Em telas mobile, os componentes ficam empilhados em coluna,
    // então a seção de projetos não deve ter altura restrita à sidebar.
    if (window.innerWidth <= 700) {
        mainContent.style.maxHeight = 'none';
        return;
    }

    // Espera layout renderizar
    requestAnimationFrame(function() {
        const sidebarHeight = sidebar.offsetHeight;
        if (sidebarHeight > 0) {
            mainContent.style.maxHeight = sidebarHeight + 'px';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof Themes      !== 'undefined') Themes.init();
    if (typeof NavBar      !== 'undefined') NavBar.init();
    if (typeof Section     !== 'undefined') Section.init();
    if (typeof Skills      !== 'undefined') Skills.init();
    if (typeof Experiences !== 'undefined') Experiences.init();
    if (typeof Education   !== 'undefined') Education.init();
    if (typeof Projects    !== 'undefined') Projects.init();
    if (typeof Insights    !== 'undefined') Insights.init();
    if (typeof Contact     !== 'undefined') Contact.init();
    if (typeof Footer      !== 'undefined') Footer.init();
    if (typeof Motion      !== 'undefined') Motion.init();

    // Alinha altura dos projetos com a sidebar
    setTimeout(alignProjectsToSidebar, 100);
});

window.addEventListener('resize', function() {
    alignProjectsToSidebar();
});
