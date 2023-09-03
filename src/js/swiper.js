import Swiper from 'swiper';
import 'swiper/css';

const breakpoints = {
  // when window width is >= 768px
  320: {
    slidesPerView: 1,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 2,
  },
  // when window width is >= 1280px
  1280: {
    slidesPerView: 3,
  },
};

const swiper = new Swiper('.swiper', {
  spaceBetween: 32,
  breakpoints
});
