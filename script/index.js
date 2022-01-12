const input = document.querySelector('.menu-toggle input');
const navBar = document.querySelector('.nav-wrapper');

input.addEventListener('click', function() {
    navBar.classList.toggle('slide');
})