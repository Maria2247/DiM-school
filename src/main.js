// import Accordion from "accordion-js";

// function initAccordionPrices() {
//   new Accordion(".accordion-container", {
//     openOnInit: [0],
//   });
// }

// initAccordionPrices();

let scrollBtn = document.getElementById("scrollBtn");

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

scrollBtn.addEventListener("click", topFunction);
