/**
 * Experiences.js
 * Responsável por renderizar a lista de experiências profissionais na sidebar.
 */

// ========================================
// RENDERIZAÇÃO DAS EXPERIÊNCIAS
// ========================================

/**
 * Renderiza todas as experiências profissionais
 */
function renderExperiences() {
    const container = document.getElementById('experienceList');
    if (!container) return;

    // Usa os dados do Bios.js
    const experiencias = typeof EXPERIENCIAS !== 'undefined' ? EXPERIENCIAS : [];

    container.innerHTML = experiencias
        .map((exp) => createExperienceCard(exp))
        .join('');
}

// ========================================
// EXPERIENCES COMPONENT
// ========================================

const Experiences = {
    init() {
        renderExperiences();
    }
};
