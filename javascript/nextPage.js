"use strict";
function getScrollPercentage () {
    const nextBtn = document.querySelector('.next_page')
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let windowHeight = window.innerHeight;
    let scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100 ;
    
    if (scrollPercent >= 99) {
        scrollPercent = 100
    } if (scrollPercent > 99) {
        nextBtn.classList.add('activeNext');
    } if (scrollPercent != 100) {
        nextBtn.classList.remove('activeNext');
    }

}



window.addEventListener('scroll', getScrollPercentage);