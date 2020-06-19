window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
    
})

function scrollAppear() {

    let scrollSection = window.scrollY;
    const apperSection = document.querySelector('.texts')

    if (scrollSection > 190) {
        
        apperSection.classList.add('appear');
        
    } else {
        apperSection.classList.remove('appear');
    }
    
}
window.addEventListener('scroll',scrollAppear);

