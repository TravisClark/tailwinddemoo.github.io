const navbar = document.querySelector("#navbar");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("bg-darkGray");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-darkGray");
  }
});
