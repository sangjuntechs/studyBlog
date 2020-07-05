const slideBtn = document.querySelector('.menu');
const activeIn = document.querySelector('.menu_box');
const OutBtn = document.querySelector('.close_icon');

function open() {
    activeIn.classList.add('active');
}

function close() {
    activeIn.classList.remove('active');
}

const openMenu = slideBtn.addEventListener('click', open);
const closeMenu = OutBtn.addEventListener('click', close);
