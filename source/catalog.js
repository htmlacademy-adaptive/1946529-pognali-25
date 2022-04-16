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

// Фильтр стран

let dottedButton = document.querySelector('.companions-header__icon--active');
let closeButton = document.querySelector('.companions-header__icon--close');
let countryList = document.querySelector('.companions-header-list');
let catalogCountryList = document.querySelector('.catalog-country-list');

dottedButton.addEventListener('click', ()=> {
  closeButton.style.display = 'block';
  dottedButton.style.display = 'none';
  countryList.classList.remove('visually-hidden');
  catalogCountryList.classList.remove('visually-hidden');
});

closeButton.addEventListener('click', ()=> {
  dottedButton.style.display = 'block';
  closeButton.style.display = 'none';
  countryList.classList.add('visually-hidden');
  catalogCountryList.classList.add('visually-hidden');
});


