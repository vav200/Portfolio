// change cars

const orderbox = document.querySelector(".order-gaz__volumes");
const gazCar = document.querySelector(".order-gaz__pic");
const list = ["small", "medium", "standart", "bulk"];
orderbox.addEventListener("click", function (e) {
  document
    .querySelector(".order-gaz__volumes-item_active")
    .classList.remove("order-gaz__volumes-item_active");
  e.target.classList.add("order-gaz__volumes-item_active");
  switch (e.target.id) {
    case "small":
      gazCar.classList.remove(...list);
      gazCar.classList.add("small");
      break;
    case "medium":
      gazCar.classList.remove(...list);
      gazCar.classList.add("medium");
      break;
    case "standart":
      gazCar.classList.remove(...list);
      gazCar.classList.add("standart");
      break;
    case "bulk":
      gazCar.classList.remove(...list);
      gazCar.classList.add("bulk");
      break;
  }
});

// change rewievs

const arrRight = document.querySelector(".rewievs__arrow-right");
const arrLeft = document.querySelector(".rewievs__arrow-left");

arrRight.addEventListener("click", function () {
  if (document.querySelector(".rewievs__box_first-third")) {
    document
      .querySelector(".rewievs__box_first-third")
      .classList.remove("rewievs__box_first-third");
  }
  if (document.querySelector(".rewievs__box_third-first")) {
    document
      .querySelector(".rewievs__box_third-first")
      .classList.remove("rewievs__box_third-first");
  }
  let boxesRewiev = document.querySelectorAll(".rewievs__box");
  boxesRewiev.forEach((item) => {
    switch (item.className) {
      case "rewievs__box rewievs__box_first":
        item.className = "rewievs__box rewievs__box_third rewievs__box_first-third";
        break;
      case "rewievs__box rewievs__box_second":
        item.className = "rewievs__box rewievs__box_first";
        break;
      case "rewievs__box rewievs__box_third":
        item.className = "rewievs__box rewievs__box_second";
        break;
    }
  });
  let decor = document.querySelector(".rewievs__decor-item_active");
  if (decor.nextElementSibling) {
    decor.nextElementSibling.classList.add("rewievs__decor-item_active");
    decor.classList.remove("rewievs__decor-item_active");
  } else {
    document.querySelector(".rewievs__decor-item").classList.add("rewievs__decor-item_active");
    document
      .querySelector(".revievs__decor-wrap")
      .lastElementChild.classList.remove("rewievs__decor-item_active");
  }
});
arrLeft.addEventListener("click", function () {
  if (document.querySelector(".rewievs__box_first-third")) {
    document
      .querySelector(".rewievs__box_first-third")
      .classList.remove("rewievs__box_first-third");
  }
  if (document.querySelector(".rewievs__box_third-first")) {
    document
      .querySelector(".rewievs__box_third-first")
      .classList.remove("rewievs__box_third-first");
  }
  let boxesRewiev = document.querySelectorAll(".rewievs__box");
  boxesRewiev.forEach((item) => {
    switch (item.className) {
      case "rewievs__box rewievs__box_first":
        item.className = "rewievs__box rewievs__box_second";
        break;
      case "rewievs__box rewievs__box_second":
        item.className = "rewievs__box rewievs__box_third";
        break;
      case "rewievs__box rewievs__box_third":
        item.className = "rewievs__box rewievs__box_first rewievs__box_third-first";
        break;
    }
  });

  let decor = document.querySelector(".rewievs__decor-item_active");
  if (decor.previousElementSibling) {
    decor.previousElementSibling.classList.add("rewievs__decor-item_active");
    decor.classList.remove("rewievs__decor-item_active");
  } else {
    document.querySelector(".rewievs__decor-item").classList.remove("rewievs__decor-item_active");
    document
      .querySelector(".revievs__decor-wrap")
      .lastElementChild.classList.add("rewievs__decor-item_active");
  }
});

// output answers

const answers_questions = document.querySelector(".answers__questions");
answers_questions.addEventListener("click", function (e) {
  e.target.classList.toggle("answers__question_active");
  e.target.nextElementSibling.classList.toggle("answers__answer_active");
});
