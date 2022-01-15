const hotelSlider = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button-next",
    prevEl: ".hotel-slider__button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button-next",
    prevEl: ".reviews-slider__button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var mebuButton = document.querySelector(".menu-button");
mebuButton.addEventListener("click", function () {
  console.log("Клик по кномпе");
  document.querySelector(".navbar-mobile").toggleAttribute("hidden");
  document.querySelector(".navbar-bottom").toggleAttribute("hidden");
});
