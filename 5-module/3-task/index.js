function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselInner = carousel.querySelector(".carousel__inner");
  const slide = carousel.querySelector(".carousel__slide");
  const arrowLeft = carousel.querySelector(".carousel__arrow_left");
  const arrowRight = carousel.querySelector(".carousel__arrow_right");
  const slideItems = carousel.querySelectorAll(".carousel__slide");

  let currentSlide = 0;
  let slideWidth = slide.offsetWidth;

  handlerArrows();

  const rollSlider = () => carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  function handlerArrows() {
    arrowLeft.style.display = "";
    arrowRight.style.display = "";

    if (currentSlide <= 0) {
      arrowLeft.style.display = "none";
    } else if (currentSlide >= slideItems.length - 1) {
      arrowRight.style.display = "none";
    }
  }

  arrowLeft.addEventListener("click", () => {
    currentSlide--;
    handlerArrows();
    rollSlider();
  });

  arrowRight.addEventListener("click", () => {
    currentSlide++;
    handlerArrows();
    rollSlider();
  });
}
