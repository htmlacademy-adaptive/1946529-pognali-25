// Меню

let mainMenu = document.querySelector('.main-menu');
let burgerButton = document.querySelector('.main-header__burger-menu');
let burgerIcon = document.querySelector('.main-header__burger-menu-icon');
let burgerCloseIcon = document.querySelector('.main-header__burger-menu-close');
let headerTop = document.querySelector('.main-header__top');
let changeHeaderBg = document.querySelector('.main-header__burger-menu-active');
let logoDarkg = document.querySelector('.main-header__logo-image--dark');
let logoLight = document.querySelector('.main-header__logo-image--light');

let mainMenuLogin = document.querySelector('.main-menu__login');
let menuLoginActive = document.querySelector('.main-menu__login--active');
let navigationUser = document.querySelector('.navigation-user');
let social = document.querySelector('.social');
let menuLoginHidden = document.querySelector('.main-menu__login--hidden');

headerTop.classList.remove('main-header__top--nojs');

burgerButton.addEventListener('click', ()=> {
  headerTop.classList.toggle('main-header__burger-menu-active');
  logoDarkg.classList.toggle('visually-hidden');
  logoLight.classList.toggle('visually-hidden');
  burgerIcon.classList.toggle('visually-hidden');
  burgerCloseIcon.classList.toggle('visually-hidden');
  mainMenu.classList.toggle('visually-hidden');
  mainMenuLogin.classList.toggle('main-menu__login--active');
  navigationUser.classList.toggle('visually-hidden');
  social.classList.toggle('visually-hidden');
});


// Фильтр стран

let dottedButton = document.querySelector('.companions-header__icon--active');
let closeButton = document.querySelector('.companions-header__icon--close');
let countryList = document.querySelector('.companions-header-list');
let catalogCountryList = document.querySelector('.catalog-country-list');
let catalogTableList = document.querySelector('.catalog-table-list');
let modalCloseButton = document.querySelector('.companions-filter__modal-close');
let modalWrapper = document.querySelector('.companions-filter__modal-wrapper');

let mainHeaderBottom = document.querySelector('.main-header__bottom');
let companionsFilter = document.querySelector('.companions-filter');
let tableListWrapper = document.querySelector('.catalog-table-list-wrapper');
let listItemHeader = document.querySelector('.catalog-table-list__item--header');
let tableListActive = document.querySelector('.catalog-table-list--active');
let filterIconLeft = document.querySelector('.companions-header__icon--left');

dottedButton.addEventListener('click', ()=> {
  closeButton.style.display = 'block';
  dottedButton.style.display = 'none';
  countryList.classList.remove('visually-hidden');
  catalogCountryList.classList.remove('visually-hidden');
  catalogTableList.classList.remove('visually-hidden');
  modalCloseButton.classList.remove('visually-hidden');
  // modalWrapper.style.paddingBottom = 79 + 'px';
});

closeButton.addEventListener('click', ()=> {
  dottedButton.style.display = 'block';
  closeButton.style.display = 'none';
  if (document.body.clientWidth < 768) {
    countryList.classList.add('visually-hidden');
  }
  catalogCountryList.classList.add('visually-hidden');
  catalogTableList.classList.add('visually-hidden');
  modalCloseButton.classList.add('visually-hidden');
  // modalWrapper.style.paddingBottom = 56 + 'px';
});

modalCloseButton.addEventListener('click', (event)=> {
  event.preventDefault();
  if (document.body.clientWidth < 1440) {
    dottedButton.style.display = 'block';
  }
  closeButton.style.display = 'none';
  if (document.body.clientWidth < 768) {
    countryList.classList.add('visually-hidden');
  }
  catalogCountryList.classList.add('visually-hidden');
  catalogTableList.classList.add('visually-hidden');
  modalCloseButton.classList.add('visually-hidden');
  tableListWrapper.classList.add('visually-hidden--secondary');
  modalCloseButton.classList.remove('visually-hidden');
  modalCloseButton.classList.add('visually-hidden--secondary');
  // modalWrapper.style.paddingBottom = 56 + 'px';
});

filterIconLeft.addEventListener('click', ()=> {
  tableListWrapper.classList.remove('visually-hidden--secondary');
  modalCloseButton.classList.add('visually-hidden');
  modalCloseButton.classList.remove('visually-hidden--secondary');
});

// Обработчик onload

let loadCalculate = function() {

  if (document.body.clientWidth < 768) {

    countryList.classList.add('visually-hidden');
  }

  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {

    countryList.classList.remove('visually-hidden');
    listItemHeader.classList.add('visually-hidden');
  }

  if (document.body.clientWidth >= 1440) {
    countryList.classList.remove('visually-hidden');
    tableListActive.classList.add('visually-hidden--secondary');
    mainMenu.classList.remove('visually-hidden');
  }
}

// window.addEventListener('resize', ()=> {
//   if (document.body.clientWidth < 768) {
//     let headerBottomHeight = mainHeaderBottom.clientHeight;

//     if (!catalogTableList.classList.contains('visually-hidden')) {
//       countryList.classList.remove('visually-hidden');
//     } else {
//       countryList.classList.add('visually-hidden');
//     }

//   }

//   if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
//     let headerBottomHeight = mainHeaderBottom.clientHeight;

//     countryList.classList.remove('visually-hidden');
//   }

//   // if (document.body.clientWidth >= 1440) {
//   // }
// })

window.addEventListener('load', ()=> {
  loadCalculate();
})
