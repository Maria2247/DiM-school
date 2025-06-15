const modalBackDrop = document.getElementById("modal");
const modalDiscount = document.getElementById("modal-discount");
const modalThankYou = document.getElementById("modal-thank-you");
const scrollBtn = document.getElementById("scrollBtn");
const btnClose = document.querySelectorAll(".close-btn");
const modalEnrollBtn = document.querySelectorAll(".close-upon-enroll");
const enrollSection = document.getElementById("enroll");
const form = document.querySelector(".enroll-form");
const submitFormBtn = document.querySelector(".form-btn");

// MOBILE MENU
const burgerBtn = document.getElementById("burger-btn");
const headerMenu = document.getElementById("header-nav");
const closeMobBtn = document.querySelector(".close-mob-nav");
const navLink = document.querySelectorAll(".nav-item a");

burgerBtn.addEventListener("click", () => {
  headerMenu.classList.add("nav-open");
  closeMobBtn.classList.add("nav-open");
});

function closeMobileNav(e) {
  e.preventDefault();
  headerMenu.classList.remove("nav-open");
  closeMobBtn.classList.remove("nav-open");

  const href = e.currentTarget.getAttribute("href");
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);

    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
}

navLink.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

closeMobBtn.addEventListener("click", closeMobileNav);

// TESTIMONIALS CONTAINER
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    followFinger: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
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

// CLEAN HASH ON RELOAD and OPEN MODAL

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
  modalBackDrop.classList.add("is-open");
  modalDiscount.classList.add("is-open");
});

// SCROLL-TO-TOP-BTN

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

// CLOSE-BUTTON

function closeModal(e) {
  e.preventDefault();
  modalBackDrop.classList.remove("is-open");
  modalDiscount.classList.remove("is-open");
}

btnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// CLOSE-UPON-ENROLL

function closeUponEnroll(e) {
  e.preventDefault();

  modalBackDrop.classList.remove("is-open");
  modalDiscount.classList.remove("is-open");

  enrollSection.scrollIntoView();
}

modalEnrollBtn.forEach((btn) => btn.addEventListener("click", closeUponEnroll));

// THANK YOU MODAL

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value.trim(),
    telNumber: form.telNumber.value.trim(),
    email: form.email.value.trim(),
  };

  fetch("https://formsubmit.co/ajax/mbundzelyak@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      form.reset();
      modalBackDrop.classList.add("is-open");
      modalThankYou.classList.add("is-open");

      setTimeout(() => {
        modalBackDrop.classList.remove("is-open");
        modalThankYou.classList.remove("is-open");
      }, 5000);
    })
    .catch((error) => console.log("Error", error));
});
