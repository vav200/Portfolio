(function () {
  window.onscroll = function () {
    if (window.scrollY > 50) {
      document.querySelector(".header__wrapper").classList.add("header_scroll");
      document
        .querySelectorAll(".header__nav-link")
        .forEach((item) => item.classList.add("header__nav-link_scroll"));
    } else {
      document.querySelector(".header__wrapper").classList.remove("header_scroll");
      document
        .querySelectorAll(".header__nav-link")
        .forEach((item) => item.classList.remove("header__nav-link_scroll"));
    }
  };
})();

// (function () {
//   window.onresize = function () {
//     if (window.screen.width < 1401) {
//       let doctors = document.querySelectorAll(".onlain-doctors__card");
//       doctors[doctors.length - 1].classList.add("onlain-doctors__card_remove");
//       console.log("ggggggggggggggggg");
//     }
//   };
// })();

(function () {
  document.querySelector(".header__burger").onclick = function () {
    document.querySelector(".header__burger").classList.toggle("burger_active");
    document.querySelector(".header__nav").classList.toggle("header__nav_active");
  };
})();
