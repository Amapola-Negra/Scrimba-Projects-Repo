const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const infoSlide = document.getElementById("info-slide");
const allDots = document.getElementsByClassName("dot-item");
infoSlide.innerHTML = `This is the slide ${slidePosition +1}`
let interSlides = setInterval(changeSlideAuto, 5000); /* To automate slide transitions  */
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    for (let dot of allDots){
        dot.classList.remove("dot-item-active");
        dot.classList.add("dot-item-not-active");
    }
}

function changeSlideAuto() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    allDots[slidePosition].classList.add("dot-item-active");
    infoSlide.innerHTML = `This is the slide ${slidePosition +1}`
}
function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    allDots[slidePosition].classList.add("dot-item-active");
    infoSlide.innerHTML = `This is the slide ${slidePosition +1}`
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    allDots[slidePosition].classList.add("dot-item-active");
    infoSlide.innerHTML = `This is the slide ${slidePosition +1}`
}