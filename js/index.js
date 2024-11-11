const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});


