import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initVideo} from './modules/video';
import {initPrice} from './modules/price';
import {initSliderJury} from './modules/swiper-jury';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import {initSliderFeedback} from './modules/swiper-feedback';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    initVideo();
    initPrice();
    initSliderJury();
    initTabs();
    initAccordions();
    initSliderFeedback();
  });
});
