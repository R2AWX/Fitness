const sliderJury = document.querySelector('[data-swiper="jury"]');
const buttonNext = document.querySelector('[data-button="next-jury"]');
const buttonPrev = document.querySelector('[data-button="prev-jury"]');

function initSliderJury() {
  if (sliderJury) {
    new Swiper(sliderJury, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,

      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 0,
        },

        768: {
          slidesPerView: 2,
          initialSlide: 2,
          spaceBetween: 32,
        },

        320: {
          slidesPerView: 1,
          initialSlide: 2,
        },
      },
    });
  }
}

export {initSliderJury};
