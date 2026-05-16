/**
 * Contact.js
 * Responsável por renderizar as informações de contato na sidebar.
 */

// ========================================
// RENDERIZAÇÃO DO CONTATO
// ========================================

/**
 * Atualiza os dados de contato na sidebar com base nos dados do BIO
 */
function renderContact() {
    if (typeof BIO === 'undefined') return;

    const { email, telefone, linkedin } = BIO.contato;

    // Email
    const emailEl = document.querySelector('.contact-item:nth-child(1) .contact-text');
    if (emailEl) emailEl.textContent = email;

    // Telefone
    const telEl = document.querySelector('.contact-item:nth-child(2) .contact-text');
    if (telEl) telEl.textContent = telefone;

    // LinkedIn
    const linkedinEl = document.querySelector('.contact-item:nth-child(3) .contact-link');
    if (linkedinEl) {
        linkedinEl.href        = linkedin;
        linkedinEl.textContent = linkedin;
    }
}

// ========================================
// CONTACT COMPONENT
// ========================================

const Contact = {
    init() {
        renderContact();
    }
};
