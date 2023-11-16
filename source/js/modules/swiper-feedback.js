const sliderFeedback = document.querySelector('[data-swiper="feedback"]');
const buttonNext = document.querySelector('[data-button="next-feedback"]');
const buttonPrev = document.querySelector('[data-button="prev-feedback"]');

function initSliderFeedback() {
  if (sliderFeedback) {
    new Swiper(sliderFeedback, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: 1,
    });
  }
}

export {initSliderFeedback};
