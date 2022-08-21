const slideDelay = 3000;
const images = document.querySelector('.images');
let curSlide = 0;

window.setInterval(()=>{
    curSlide++;
    if(curSlide === images.childElementCount){
        curSlide = 0;
    }

    images.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
}, slideDelay);
