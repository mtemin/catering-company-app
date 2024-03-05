// FIRST CAROUSEL

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: 2000,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// PHONE NAVBAR

$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function () {
    $(".animated-icon3").toggleClass("open");
  });
});

// FIRST FORM EMPTY CHECK
let formSubmit = document.querySelector("#corporateFormSubmit");
formSubmit.addEventListener("click", formCheck);

function formCheck() {
  let formInputList = document.querySelectorAll(".corporate_form_input");
  for (let i = 0; i < formInputList.length; i++) {
    const formInput = formInputList[i];
    if (formInput.value === "") {
      formInput.nextElementSibling.classList.add("d-block");
    } else {
      formInput.nextElementSibling.classList.add("d-none");
    }
  }
  let checkBox = document.querySelector("#privacyCheckbox");
  if (checkBox.checked === false) {
    checkBox.nextElementSibling.nextElementSibling.classList.add("d-block");
  } else {
    checkBox.nextElementSibling.nextElementSibling.classList.add("d-none");
  }
}

// PHONE INPUT FORMATTING

function phoneFormat(input) {
  input = input.replace(/\D/g, "").substring(0, 12);
  var size = input.length;
  if (size > 0) {
    input = "(" + input;
  }
  if (size > 3) {
    input = input.slice(0, 4) + ") " + input.slice(4);
  }
  if (size > 6) {
    input = input.slice(0, 9) + " " + input.slice(9);
  }
  return input;
}

// FOOTER FORM CHECK
let footerFormSubmit = document.querySelector("#corporateFormFooterSubmit");
footerFormSubmit.addEventListener("click", footerFormCheck);
function footerFormCheck() {
  let formInputList = document.querySelectorAll(".footer_form_input");
  for (let i = 0; i < formInputList.length; i++) {
    const formInput = formInputList[i];
    if (formInput.value === "") {
      formInput.nextElementSibling.classList.add("d-block");
    } else {
      formInput.nextElementSibling.classList.add("d-none");
    }
  }

  let checkBox = document.querySelector("#privacyCheckbox");
  if (checkBox.checked === false) {
    checkBox.nextElementSibling.nextElementSibling.classList.add("d-block");
  } else {
    checkBox.nextElementSibling.nextElementSibling.classList.add("d-none");
  }
}

// BACK TO TOP

let topBtn = document.getElementById("goTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function goToTop() {
  document.documentElement.scrollTop = 0;
}
