// Меню

let mainMenu = document.querySelector('.main-menu');
let burgerButton = document.querySelector('.burger-menu-button');
let burgerIcon = document.querySelector('.burger-menu-button__icon');
let burgerCloseIcon = document.querySelector('.burger-menu-button__close');
let headerTop = document.querySelector('.main-header__top');
let changeHeaderBg = document.querySelector('.burger-menu-active');
let logoDarkg = document.querySelector('.header-logo__image--dark');
let logoLight = document.querySelector('.header-logo__image--light');


burgerButton.addEventListener('click', ()=> {
  mainMenu.classList.toggle('visually-hidden');
  headerTop.classList.toggle('burger-menu-active');
  logoDarkg.classList.toggle('visually-hidden');
  logoLight.classList.toggle('visually-hidden');
  burgerIcon.classList.toggle('visually-hidden');
  burgerCloseIcon.classList.toggle('visually-hidden');
});

// Модальное окно "Тарифы"

let showTariffs = document.querySelector('.tariffs__show-link');
let closeTariffs = document.querySelector('.tariffs-modal__close-link');
let modalWindow = document.querySelector('.tariffs-modal');

showTariffs.addEventListener('click', ()=> {
  modalWindow.classList.remove('visually-hidden');
});

closeTariffs.addEventListener('click', ()=> {
  modalWindow.classList.add('visually-hidden');
});
