const slides = document.getElementsByClassName("carousel-item"),
    nextBtn = document.getElementById("carousel-btn-next"),
    prevBtn = document.getElementById("carousel-btn-prev");

let slidePosition = 0;

const totalSlides = slides.length;

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function moveToNextSlide () {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.remove("carousel-item-hidden");
    slides[slidePosition].classList.add("carousel-item-visible");
};

function moveToPrevSlide () {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.remove("carousel-item-hidden");
    slides[slidePosition].classList.add("carousel-item-visible");
};
