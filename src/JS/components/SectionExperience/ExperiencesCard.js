/**
 * ExperiencesCard.js
 * Responsável por gerar o HTML de um card de experiência profissional.
 */

// ========================================
// CRIAÇÃO DO CARD DE EXPERIÊNCIA
// ========================================

/**
 * Cria o HTML de um card de experiência
 * @param {Object} exp - Objeto de experiência {cargo, empresa, periodo}
 * @returns {string} HTML do card
 */
function createExperienceCard(exp) {
    return `
        <div class="experience-card">
            <span class="experience-cargo">${exp.cargo}</span>
            <div class="experience-meta">
                <span class="experience-empresa">${exp.empresa}</span>
                <span class="experience-periodo">${exp.periodo}</span>
            </div>
        </div>
    `;
}
