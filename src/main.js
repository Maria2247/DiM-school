// TESTIMONIALS CONTAINER
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".icon-next",
      prevEl: ".icon-prev",
    },
  });
});

// SCROLL-TO-TOP-BTN

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

// CLEAN HASH ON RELOAD

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
});
