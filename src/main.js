// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiperr/modules";
// import "swiper/css";
// import "swiper/css/naigation";

// // TESTIMONIALS CONTAINER

// const swiper = new Swiper(".swiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   speed: 400,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// SCROLL-TO-TOP-BTN

document.addEventListener("DOMContentLoaded", () => {});

let scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}

scrollBtn.addEventListener("click", topFunction);
