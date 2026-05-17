/**
 * ProjectsCard.js
 * Card fiel ao layout de referência:
 * - Título acima
 * - Imagem real do dashboard (print) clicável
 * - Bloco de descrição
 * - Botão "Ver detalhes"
 * - Divisor entre projetos
 */

function createProjectCard(projeto, index, total) {
    const isLast = index === total - 1;

    return `
        <div class="project-card" data-project-id="${projeto.id}">

            <h3 class="project-card-title">${projeto.titulo}</h3>

            <div class="project-card-image-wrapper ${projeto.imagensCapa && projeto.imagensCapa.length > 1 ? 'has-carousel' : ''}"
                 onclick="openProjectModal(${projeto.id})"
                 title="Ver detalhes">
                 
                <div class="carousel-track">
                    ${projeto.imagensCapa ? projeto.imagensCapa.map((img, i) => `
                        <img class="project-card-image"
                             src="${img}"
                             alt="${projeto.titulo}"
                             loading="lazy"
                             onerror="this.parentElement.parentElement.classList.add('img-error'); this.style.display='none'">
                    `).join('') : ''}
                </div>
                
                ${projeto.imagensCapa && projeto.imagensCapa.length > 1 ? `
                <div class="carousel-dots">
                    ${projeto.imagensCapa.map((_, i) => `<span class="carousel-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
                </div>
                ` : ''}

                <div class="project-card-img-placeholder">
                    <i class="fas fa-chart-bar"></i>
                </div>
                <div class="project-card-img-hover">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>

            <div class="project-card-desc-block">
                <p class="project-card-desc-label">Descrição do projeto:</p>
                <p class="project-card-desc-text">${projeto.descricao}</p>
            </div>

            <button class="project-ver-detalhes-btn"
                    onclick="openProjectModal(${projeto.id})">
                Ver detalhes
            </button>

        </div>
        ${!isLast ? '<div class="project-divider"></div>' : ''}
    `;
}

function openProjectModal(id) {
    const projetos = typeof PROJETOS !== 'undefined' ? PROJETOS : [];
    const projeto  = projetos.find(p => p.id === id);
    if (!projeto) return;
    if (typeof ProjectsDetails !== 'undefined') ProjectsDetails.render(projeto);
}
