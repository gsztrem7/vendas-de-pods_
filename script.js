document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');
    const buyButtons = document.querySelectorAll('.buy-button');
    const modal = document.getElementById('pix-modal');
    const closeModalButton = document.querySelector('.close-button');
    const selectedProduct = document.getElementById('selected-product');

    // Navegação entre seções
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            sections.forEach(section => section.classList.add('hidden')); // Esconde todas as seções
            const sectionId = button.getAttribute('data-section');
            document.getElementById(sectionId).classList.remove('hidden'); // Mostra a seção selecionada
        });
    });

    // Abrir modal ao clicar em "Comprar"
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            selectedProduct.textContent = productName; // Exibe o nome do produto no modal
            modal.style.display = 'flex';
        });
    });

    // Fechar modal
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar modal ao clicar fora dele
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
