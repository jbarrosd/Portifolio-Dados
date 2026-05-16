/**
 * Skills.js
 * Renderiza as skills (Power BI, SQL, Figma, Soft Skills) na sidebar.
 */

const SKILL_ICONS = {
    'Power BI':    'fas fa-chart-bar',
    'SQL':         'fas fa-database',
    'Figma':       'fab fa-figma',
    'Soft Skills': 'fas fa-handshake',
};

function renderStars(total, max) {
    max = max || 4;
    let html = '';
    for (let i = 1; i <= max; i++) {
        html += '<span class="star' + (i <= total ? '' : ' empty') + '">★</span>';
    }
    return html;
}

function renderSkills() {
    const container = document.getElementById('skillsList');
    if (!container) return;

    const skills = typeof SKILLS !== 'undefined' ? SKILLS : [];

    container.innerHTML = skills.map(function(skill) {
        const iconClass = SKILL_ICONS[skill.nome] || 'fas fa-code';
        return '<div class="skill-item">' +
            '<div class="skill-label">' +
                '<div class="skill-icon"><i class="' + iconClass + '"></i></div>' +
                '<span class="skill-name">' + skill.nome + '</span>' +
            '</div>' +
            '<div class="skill-stars">' + renderStars(skill.estrelas) + '</div>' +
        '</div>';
    }).join('');
}

const Skills = { init: function() { renderSkills(); } };
