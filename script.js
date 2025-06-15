const items = document.querySelectorAll('.item');
const indicators = document.querySelectorAll('.indicators ul li');
const number = document.querySelector('.number');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let current = 0;

function updateCarousel(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        indicators[i].classList.toggle('active', i === index);
    });
    number.innerText = `0${index + 1}`;
}

next.addEventListener('click', () => {
    current = (current + 1) % items.length;
    updateCarousel(current);
});

prev.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    updateCarousel(current);
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        current = i;
        updateCarousel(current);
    });
});
