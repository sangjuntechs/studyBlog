window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);

})

function scrollAppear() {

    let scrollSection = window.scrollY;
    const apperSection = document.querySelector('.text_section1')

    if (scrollSection > 200) {

        apperSection.classList.add('appear');

    } else {
        apperSection.classList.remove('appear');
    }

}
window.addEventListener('scroll', scrollAppear);


function scrollAppear2() {
    
    let scrollSection2 = window.scrollY;
    const appearSection2 = document.querySelector('.text_section2');

    if (scrollSection2 > 900) {

        appearSection2.classList.add('appear');
    } else {
        appearSection2.classList.remove('appear');
    }
}
window.addEventListener('scroll', scrollAppear2);