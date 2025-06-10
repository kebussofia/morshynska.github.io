const swiper_new = new Swiper('#swiper-01', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // allowSlideNext: false,
  // allowSlidePrev: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

// And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

});

const swiper_new2 = new Swiper('#swiper-02', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  centerInsufficientSlides: true,
  centeredSlides: true,
  centeredSlidesBounds: true,

  // allowSlideNext: false,
  // allowSlidePrev: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

// And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

});