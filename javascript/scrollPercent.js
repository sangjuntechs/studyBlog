function getScrollPercentage () {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let windowHeight = window.innerHeight;
    let scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100 ;
    if (scrollPercent >= 99) {
        scrollPercent = 100
    }

    let percentMath = Math.floor(scrollPercent);

    console.log(percentMath);
    document.querySelector('.percent').innerText=`Current Scroll Percent: ${percentMath}%`;
}



window.addEventListener('scroll', getScrollPercentage);




