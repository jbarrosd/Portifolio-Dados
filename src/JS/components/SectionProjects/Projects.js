/**
 * Projects.js
 * Renderiza lista de projetos e gerencia as abas.
 */

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    const projetos = typeof PROJETOS !== 'undefined' ? PROJETOS : [];

    if (!projetos.length) {
        container.innerHTML = '<p style="padding:24px;text-align:center;color:var(--text-muted);font-size:12px;">Nenhum projeto disponível.</p>';
        return;
    }

    container.innerHTML = projetos
        .map((p, i) => createProjectCard(p, i, projetos.length))
        .join('');
}

function initTabs() {
    const tabBtns     = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const content = document.getElementById('tab-' + target);
            if (content) content.classList.add('active');
        });
    });
}

const Projects = {
    init() {
        renderProjects();
        initTabs();
    }
};
