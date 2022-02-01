const nav = document.querySelector(".nav");
const container = document.querySelector(".container");
const registerForm = document.querySelector(".form--register");
const password = document.querySelector(".password");
const passwordRepeat = document.querySelector(".password-repeat");
const formError = document.querySelector(".form__error");
const loader = document.querySelector(".loader");

const openMenu = () => {
  nav.classList.add("nav--active");

  setTimeout(function () {
    nav.classList.add("nav--open");
  }, 20);
};

const closeMenu = () => {
  nav.classList.remove("nav--open");
  setTimeout(function () {
    nav.classList.remove("nav--active");
  }, 300);
};

const nextStep = () => {
  container.style.transition = ".3s";
  container.style.transform = "translateY(-100%)";
  setTimeout(function () {
    loader.classList.add("loader--active");
  }, 300);
};

const createAlert = (content) => {
  formError.innerHTML = content;
  formError.setAttribute("aria-hidden", "false");
};

const validateForm = (e) => {
  e.preventDefault();
  if (passwordRepeat.value && password.value) {
    if (password.value == passwordRepeat.value) {
      formError.innerHTML = "";
      formError.setAttribute("aria-hidden", "true");
      nextStep();
    } else {
      createAlert("Hasła muszą być identyczne!");
    }
  } else {
    createAlert("Sprawdź poprawność wszystkich pól!");
  }
};

registerForm.addEventListener("submit", validateForm);
