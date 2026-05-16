/**
 * Section.js
 * Controla o expand/collapse inline da seção "Sobre" — sem popup.
 */

function initVerMais() {
    const btn       = document.getElementById('verMaisBtn');
    const extra     = document.getElementById('sobreExtra');
    if (!btn || !extra) return;

    let expandido = false;

    btn.addEventListener('click', () => {
        expandido = !expandido;
        if (expandido) {
            extra.style.display = 'block';
            btn.textContent = 'Ver menos';
        } else {
            extra.style.display = 'none';
            btn.textContent = 'Ver mais';
        }
    });
}

const Section = {
    init() { initVerMais(); }
};
