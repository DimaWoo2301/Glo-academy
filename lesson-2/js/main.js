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

var modalButton = $('[data-toggle="modal" ]');
var closeModalButton = $(".modal__close");

modelButton.on("click", openModal);
closeModalButton.on("click,closeModal");

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__Dialog");
  modalOverlay.addClass(".modal__overlay--visible");
  modalDialog.addClass(".modal__dialog--visible");
}
function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__Dialog");
  modalOverlay.removeClass(".modal__overlay--visible");
  modalDialog.removeClass(".modal__dialog--visible");
}
