const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close');
const body = document.querySelector('.body');
const speakers = document.querySelectorAll('.speaker__wrapper');

menu.addEventListener('click', () => {
    nav.classList.add('nav--visible');
    menu.classList.add('menu--hidden');
    close.classList.add('close--visible');
    body.classList.add('body--no-scroll');
});

close.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
    menu.classList.remove('menu--hidden');
    close.classList.remove('close--visible');
    body.classList.remove('body--no-scroll');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

speakers.forEach(speaker => {
    observer.observe(speaker);
});
