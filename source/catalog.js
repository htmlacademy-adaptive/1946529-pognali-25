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

burgerButton.addEventListener('click', ()=> {
  // mainMenu.classList.toggle('visually-hidden');
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

// Высчитываем высоту

let mainHeaderBottom = document.querySelector('.main-header__bottom');
let companionsFilter = document.querySelector('.companions-filter');

let heightCalculate = function() {

  if (document.body.clientWidth < 768) {
    let headerBottomHeight = mainHeaderBottom.clientHeight;

    countryList.classList.add('visually-hidden');
    companionsFilter.style.marginTop = headerBottomHeight + 'px';
  }

  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
    let headerBottomHeight = mainHeaderBottom.clientHeight;

    companionsFilter.style.marginTop = headerBottomHeight + 'px';
    countryList.classList.remove('visually-hidden');
  }

  if (document.body.clientWidth >= 1440) {
    let headerBottomHeight = mainHeaderBottom.clientHeight;

    companionsFilter.style.marginTop = headerBottomHeight + 'px';
  }
}

window.addEventListener('resize', ()=> {
  if (document.body.clientWidth < 768) {
    let headerBottomHeight = mainHeaderBottom.clientHeight;

    if (!catalogTableList.classList.contains('visually-hidden')) {
      countryList.classList.remove('visually-hidden');
    } else {
      countryList.classList.add('visually-hidden');
    }

    companionsFilter.style.marginTop = headerBottomHeight + 'px';
  }

  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
    let headerBottomHeight = mainHeaderBottom.clientHeight;

    companionsFilter.style.marginTop = headerBottomHeight + 'px';
    countryList.classList.remove('visually-hidden');
  }

  if (document.body.clientWidth >= 1440) {
    let headerBottomHeight = mainHeaderBottom.clientHeight;

    companionsFilter.style.marginTop = headerBottomHeight + 'px';
  }
})

window.addEventListener('load', ()=> {
  heightCalculate();
})
