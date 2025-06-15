const items = document.querySelectorAll('.item');
const indicators = document.querySelectorAll('.indicators ul li');
const number = document.querySelector('.number');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let current = 0;

function showSlide(index) {
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    items[index].classList.add('active');
    indicators[index].classList.add('active');
    number.innerText = '0' + (index + 1);
}

next.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showSlide(current);
});

prev.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showSlide(current);
});

showSlide(current);
