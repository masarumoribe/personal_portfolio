"use strict";

// Menu fade animation
const nav = document.querySelector("#navbar");

const handleHover = function (e) {
  if (e.target.classList.contains("nav_link")) {
    const clicked = e.target;
    const siblings = clicked.closest("#navbar").querySelectorAll(".nav_link");
    const logo = clicked.closest("#navbar").querySelector("img");

    siblings.forEach((el) => {
      if (el !== clicked) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));
