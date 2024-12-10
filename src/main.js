const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".navbar_list");
const main = document.getElementById("main");
const heroImg = document.querySelector(".hero_img");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("nav_active");
  overlay.classList.toggle("opacity-50");
  overlay.classList.toggle("pointer-events-auto");
  navbarList.classList.toggle("w-64");

  if (burgerBtn.classList.contains("nav_active")) {
    burgerBtn.classList.remove("absolute");
    burgerBtn.classList.add("fixed");
    burgerBtn.classList.add("right-5");
  } else {
    burgerBtn.classList.add("absolute");
    burgerBtn.classList.remove("fixed");
    burgerBtn.classList.remove("right-5");
    burgerBtn.classList.add("right-1");
  }
});

const responsiveImage = () => {
  const screenSize = window.innerWidth;

  if (screenSize <= 718) {
    heroImg.src = "assets/images/image-web-3-mobile.jpg";
  } else {
    heroImg.src = "assets/images/image-web-3-desktop.jpg";
  }
};

window.addEventListener("resize", responsiveImage);
window.addEventListener("load", responsiveImage);
