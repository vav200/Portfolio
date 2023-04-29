const burg = document.querySelector(".burg");
const dropMenu = document.querySelector(".header__drop-menu");
const close = document.querySelector(".drop-menu-close");

burg.onclick = function () {
  burg.classList.add("burg_active");
  dropMenu.classList.add("header__drop-menu_active");
};
close.onclick = function () {
  burg.classList.remove("burg_active");
  dropMenu.classList.remove("header__drop-menu_active");
};
