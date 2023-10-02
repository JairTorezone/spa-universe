import * as el from "./element.js";

export function addColorWihteHome() {
  addWhiteHome();

  addWhiteUniverse();

  addWhiteExploration();
}

function addWhiteHome() {
  el.home.addEventListener("click", () => {
    el.home.classList.toggle("colorWhite");
  });
}

function addWhiteUniverse() {
  el.universe.addEventListener("click", () => {
    el.universe.classList.add("colorWhite");
  });
}

function addWhiteExploration() {
  el.exploration.addEventListener("click", () => {
    el.exploration.classList.toggle("colorWhite");
  });
}
