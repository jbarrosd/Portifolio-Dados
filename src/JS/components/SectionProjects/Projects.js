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

function initCarousels() {
    const wrappers = document.querySelectorAll('.project-card-image-wrapper.has-carousel');
    
    wrappers.forEach(wrapper => {
        const track = wrapper.querySelector('.carousel-track');
        const images = wrapper.querySelectorAll('.project-card-image');
        const dots = wrapper.querySelectorAll('.carousel-dot');
        if (images.length <= 1) return;
        
        let currentIndex = 0;
        
        setInterval(() => {
            if (dots.length) dots[currentIndex].classList.remove('active');
            
            currentIndex = (currentIndex + 1) % images.length;
            
            if (track) track.style.transform = `translateX(-${currentIndex * 100}%)`;
            if (dots.length) dots[currentIndex].classList.add('active');
        }, 3000); // 3 segundos
    });
}

const Projects = {
    init() {
        renderProjects();
        initTabs();
        initCarousels();
    }
};
