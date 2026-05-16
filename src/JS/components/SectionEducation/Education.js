/**
 * Education.js
 * Responsável por renderizar a formação acadêmica na sidebar.
 */

// ========================================
// CRIAÇÃO DO CARD DE FORMAÇÃO
// ========================================

/**
 * Cria o HTML de um card de formação
 * @param {Object} formacao - {curso, instituicao, periodo}
 * @returns {string} HTML do card
 */
function createEducationCard(formacao) {
    return `
        <div class="education-card">
            <span class="education-curso">${formacao.curso}</span>
            <div class="education-meta">
                <span class="education-instituicao">${formacao.instituicao}</span>
                <span class="education-periodo">${formacao.periodo}</span>
            </div>
        </div>
    `;
}

// ========================================
// RENDERIZAÇÃO DA FORMAÇÃO
// ========================================

/**
 * Renderiza toda a formação acadêmica na sidebar
 */
function renderEducation() {
    const container = document.getElementById('educationList');
    if (!container) return;

    // Usa os dados do Bios.js
    const formacao = typeof FORMACAO !== 'undefined' ? FORMACAO : [];

    container.innerHTML = formacao
        .map((f) => createEducationCard(f))
        .join('');
}

// ========================================
// EDUCATION COMPONENT
// ========================================

const Education = {
    init() {
        renderEducation();
    }
};
