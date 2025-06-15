const items = document.querySelectorAll('.item');
const indicators = document.querySelectorAll('.indicators ul li');
const number = document.querySelector('.number');

let current = 0;

// Atualiza o carrossel
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        indicators[index].classList.remove('active');
        if (index === current) {
            item.classList.add('active');
            indicators[index].classList.add('active');
        }
    });
    number.textContent = `0${current + 1}`;
}

// Botões
document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % items.length;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    updateCarousel();
});

// Indicadores (clicáveis se quiser)
indicators.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        current = index;
        updateCarousel();
    });
});
