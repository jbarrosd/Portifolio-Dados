/**
 * ProjectsDetails.js
 * Modal de detalhes do projeto com iframe Power BI embeddado.
 * Suporta múltiplos frames com abas horizontais caso necessário.
 */

function renderProjectDetails(projeto) {
    const overlay  = document.getElementById('projectModalOverlay');
    const inner    = document.getElementById('modalContentInner');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (!overlay || !inner) return;

    const desc   = projeto.descricaoCompleta;
    const frames = projeto.powerBiFrames || [];

    // Power BI — abas só aparecem se tiver mais de 1 frame
    let powerBiHtml = '';
    if (frames.length > 0) {
        const showTabs = frames.length > 1;
        const tabsHtml = showTabs
            ? '<div class="pbi-tabs">' +
                frames.map(function(_, i) {
                    return '<button class="pbi-tab-btn ' + (i === 0 ? 'active' : '') + '" ' +
                           'onclick="switchPbiTab(' + i + ', ' + projeto.id + ')">Página ' + (i + 1) + '</button>';
                }).join('') +
              '</div>'
            : '';

        const iframesHtml = frames.map(function(url, i) {
            return '<div class="pbi-frame-wrapper ' + (i === 0 ? 'active' : '') + '" ' +
                   'data-frame-index="' + i + '" data-project-id="' + projeto.id + '">' +
                   '<div class="pbi-loading">' +
                       '<i class="fas fa-spinner fa-spin"></i>' +
                       '<span>Carregando Power BI...</span>' +
                   '</div>' +
                   '<iframe class="pbi-iframe" src="' + url + '" frameborder="0" allowFullScreen="true" ' +
                   'onload="this.previousElementSibling.style.display=\'none\'"></iframe>' +
                   '</div>';
        }).join('');

        powerBiHtml =
            '<div class="pbi-container" id="pbiContainer-' + projeto.id + '">' +
                tabsHtml +
                '<div class="pbi-frames-wrapper">' + iframesHtml + '</div>' +
            '</div>';
    }

    // Botão acessar — sempre visível
    const linkHref = (projeto.linkExterno && projeto.linkExterno !== '#')
        ? projeto.linkExterno
        : '#';
    const btnAcessar = '<a href="' + linkHref + '" target="_blank" class="modal-access-btn">' +
        '<i class="fas fa-external-link-alt"></i> Acessar o projeto</a>';

    inner.innerHTML =
        '<h2 class="modal-project-title">' + projeto.titulo + '</h2>' +
        powerBiHtml +
        btnAcessar +
        '<div class="modal-section">' +
            '<p class="modal-section-label">Descrição do projeto:</p>' +
            '<p class="modal-section-text">' + desc.descricao + '</p>' +
        '</div>' +
        '<div class="modal-section">' +
            '<p class="modal-section-label">Contexto e objetivos:</p>' +
            '<p class="modal-section-text">' + desc.contexto + '</p>' +
        '</div>' +
        '<div class="modal-section">' +
            '<p class="modal-section-label">Principais Insights e descobertas:</p>' +
            '<p class="modal-section-text" style="white-space:pre-line;">' + desc.insights + '</p>' +
        '</div>' +
        (projeto.skills && projeto.skills.length > 0
            ? '<div class="modal-section"><p class="modal-section-label">Skills utilizados:</p>' +
              '<div class="modal-skills-list">' +
              projeto.skills.map(function(s) { return '<span class="modal-skill-tag">' + s + '</span>'; }).join('') +
              '</div></div>'
            : '');

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (closeBtn) closeBtn.onclick = closeProjectModal;
    overlay.onclick = function(e) { if (e.target === overlay) closeProjectModal(); };
}

function switchPbiTab(index, projectId) {
    const container = document.getElementById('pbiContainer-' + projectId);
    if (!container) return;
    container.querySelectorAll('.pbi-tab-btn').forEach(function(btn, i) {
        btn.classList.toggle('active', i === index);
    });
    container.querySelectorAll('.pbi-frame-wrapper').forEach(function(wrap, i) {
        wrap.classList.toggle('active', i === index);
    });
}

function closeProjectModal() {
    const overlay = document.getElementById('projectModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeProjectModal();
});

const ProjectsDetails = {
    render: renderProjectDetails,
    close:  closeProjectModal,
};
