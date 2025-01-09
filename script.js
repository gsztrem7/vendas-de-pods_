document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            const pixKey = button.getAttribute("data-pix");
            alert(`Chave Pix para pagamento: ${pixKey}`);
        });
    });
});
