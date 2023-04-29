import gender from "./test/gender.js";
import age from "./test/age.js";
import unnecessary from "./test/unnecessary.js";
import numbers from "./test/numbers.js";
import boxes_first from "./test/boxes_first.js";
import boxes_second from "./test/boxes_second.js";
import towns from "./test/towns.js";
import peoples from "./test/peoples.js";
import habits from "./test/habits.js";
import test_img from "./test/test_img.js";
import number_star from "./test/number_star.js";
import sendrezult from "./test/send.js";
import finalpage from "./test/finalpage.js";

let body = document.body;
let rezult = {};

const but = document.querySelectorAll(".button");
const butinv = document.querySelector(".button-invers");

function radiobut() {
  const item = document.querySelectorAll(".test__options-item");
  item.forEach((elem) =>
    elem.addEventListener("click", function (e) {
      if (!e.target.classList.contains("item_active")) {
        item.forEach((elem) => {
          if (elem.classList.contains("item_active")) {
            elem.classList.remove("item_active");
            elem.querySelector("input").checked = false;
          }
        });
        e.target.classList.add("item_active");
        e.target.querySelector("input").checked = true;
      }
    })
  );
}

function colorBoxes() {
  const item = document.querySelectorAll(".colorblock");
  item.forEach((elem) =>
    elem.addEventListener("click", function (e) {
      if (!e.target.classList.contains("colorblock_active")) {
        item.forEach((elem) => {
          elem.classList.remove("colorblock_active");
        });
        e.target.classList.add("colorblock_active");
      }
    })
  );
}

function boxes() {
  const item = document.querySelectorAll(".numberblock");
  item.forEach((elem) =>
    elem.addEventListener("click", function (e) {
      if (!e.target.classList.contains("numberblock_active")) {
        item.forEach((elem) => {
          elem.classList.remove("numberblock_active");
        });
        e.target.classList.add("numberblock_active");
      }
    })
  );
}

function genderPage() {
  document.querySelector("footer").remove();
  document.querySelector(".ad").remove();
  document.querySelector(".desc").remove();
  document.querySelector(".header__add").remove();
  document.querySelector(".header__menu").remove();
  burg.classList.add("test-burg");
  document.querySelector(".header__nav").classList.add("test-nav");
  document.querySelector("header").classList.add("test-header");
  document.querySelector(".header__nav").classList.add("test-nav");
  let title = document.createElement("div");
  title.classList.add("nav__image-box");
  title.textContent = "тест на определение IQ";
  document.querySelector(".header__nav").append(title);
  let testBlock = document.createElement("section");
  testBlock.classList.add("test");

  testBlock.innerHTML = gender;
  document.querySelector("header").append(testBlock);
  radiobut();
}

function agePage() {
  document.querySelectorAll(".test__options input").forEach((elem) => {
    if (elem.checked == true) {
      rezult.gender = elem.value;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = age;
  document.querySelector(".statusbar_filler").style = "width: 18%;";
  radiobut();
}

function unnecessaryPage() {
  document.querySelectorAll(".test__options input").forEach((elem) => {
    if (elem.checked == true) {
      rezult.age = elem.value;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = unnecessary;
  document.querySelector(".statusbar_filler").style = "width: 27%;";
  radiobut();
}

function numbersPage() {
  document.querySelectorAll(".test__options input").forEach((elem) => {
    if (elem.checked == true) {
      rezult.unnecessary = elem.value;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = numbers;
  document.querySelector(".statusbar_filler").style = "width: 36%;";
  radiobut();
}

function boxesFirstPage() {
  document.querySelectorAll(".test__options input").forEach((elem) => {
    if (elem.checked == true) {
      rezult.numbers = elem.value;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = boxes_first;
  document.querySelector(".statusbar_filler").style = "width: 45%;";
  colorBoxes();
}

function boxesSecondPage() {
  document.querySelectorAll(".colorblock").forEach((elem) => {
    if (elem.classList.contains("colorblock_active")) {
      rezult.boxes_first = elem.dataset.firstColor;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = boxes_second;
  document.querySelector(".statusbar_filler").style = "width: 54%;";
  colorBoxes();
}

function townsPage() {
  document.querySelectorAll(".colorblock").forEach((elem) => {
    if (elem.classList.contains("colorblock_active")) {
      rezult.boxes_second = elem.dataset.secondColor;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = towns;
  document.querySelector(".statusbar_filler").style = "width: 63%;";
  radiobut();
}

function peoplesPage() {
  document.querySelectorAll(".test__options input").forEach((elem) => {
    if (elem.checked == true) {
      rezult.towns = elem.value;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = peoples;
  document.querySelector(".statusbar_filler").style = "width: 72%;";
  boxes();
}

function habitsPage() {
  document.querySelectorAll(".numberblock").forEach((elem) => {
    if (elem.classList.contains("numberblock_active")) {
      rezult.peoples = elem.dataset.number;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = habits;
  document.querySelector(".statusbar_filler").style = "width: 81%;";
  radiobut();
}

function testImgPage() {
  document.querySelectorAll(".test__options input").forEach((elem) => {
    if (elem.checked == true) {
      rezult.habits = elem.value;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = test_img;
  document.querySelector(".statusbar_filler").style = "width: 90%;";
  radiobut();
}

function numberStarPage() {
  document.querySelectorAll(".test__options input").forEach((elem) => {
    if (elem.checked == true) {
      rezult.test_img = elem.value;
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = number_star;
  document.querySelector(".statusbar_filler").style = "width: 100%;";
  boxes();
}

function sendRezult() {
  document.querySelectorAll(".numberblock").forEach((elem) => {
    if (elem.classList.contains("numberblock_active")) {
      rezult.number_star = elem.dataset.number;
      console.log(rezult);
    }
  });
  let testBlock = document.querySelector(".test");
  testBlock.innerHTML = sendrezult;
  setTimeout(function () {
    let testBlock = document.querySelector(".test");
    testBlock.innerHTML = finalpage;
    document.querySelector(".nav__image-box").textContent = "ГОТОВО!";
  }, 1500);
  setTimeout(function () {
    let timeCounter = document.querySelector(".final__downadd-bigger");
    let seconds = 0;
    let minuts = 10;
    let timer = setInterval(function () {
      seconds--;
      if (seconds <= 0 && minuts > 0) {
        seconds = 59;
        minuts--;
      } else if (seconds <= 0 && minuts == 0) {
        clearInterval(timer);
      }
      timeCounter.innerHTML = `${minuts}:${String(seconds).padStart(2, "0")}`;
    }, 1000);
    document.querySelector(".call-listen").addEventListener("click", function () {
      clearInterval(timer);
      let getanswer = new XMLHttpRequest();
      getanswer.open("GET", "https://swapi.dev/api/people/1/", false);

      getanswer.send();
      let obg = JSON.parse(getanswer.response);
      let rezultZone = document.querySelector(".rezult");
      console.log(rezultZone);
      for (let key in obg) {
        let li = document.createElement("li");
        li.innerHTML = `${key} = ${obg[key]}`;
        rezultZone.append(li);
      }
    });
  }, 1800);
}

body.addEventListener("click", function (e) {
  let target = e.target.id;
  switch (target) {
    case "mainBut1":
    case "mainBut2":
    case "mainBut3":
      genderPage();
      break;
    case "gender":
      agePage();
      break;
    case "age":
      unnecessaryPage();
      break;
    case "unnecessary":
      numbersPage();
      break;
    case "numbers":
      boxesFirstPage();
      break;
    case "boxes_first":
      boxesSecondPage();
      break;
    case "boxes_second":
      townsPage();
      break;
    case "towns":
      peoplesPage();
      break;
    case "peoples":
      habitsPage();
      break;
    case "habits":
      testImgPage();
      break;
    case "test_img":
      numberStarPage();
      break;
    case "number_star":
      sendRezult();
      break;
  }
});
