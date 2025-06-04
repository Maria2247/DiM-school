import Accordion from "accordion-js";

function initAccordionPrices() {
  new Accordion(".accordion-container", {
    openOnInit: [0],
  });
}

initAccordionPrices();
