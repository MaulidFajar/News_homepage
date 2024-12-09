const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".navbar_list");
const main = document.getElementById("main");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("nav_active");

  if (navbarList.classList.contains("w-0")) {
    navbarList.classList.remove("w-0");
    navbarList.classList.add("w-64");
    document.body.classList.add("bg-black/55");
  } else {
    navbarList.classList.add("w-0");
    navbarList.classList.remove("w-64");
    document.body.classList.remove("bg-black/55");
  }
});
