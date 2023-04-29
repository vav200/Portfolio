const footer = document.querySelector("footer");
const desc = document.querySelector(".footer__desc");
const animelements = document.querySelectorAll(".anim-item");

window.addEventListener("scroll", function (e) {
  animelements.forEach((elem) => {
    if (elem.offsetTop + elem.offsetHeight / 2 <= window.scrollY + window.innerHeight) {
      elem.classList.add("scroll_anim");
    } else {
      elem.classList.remove("scroll_anim");
    }
  });
});
