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


// Показываем меню при изменении ширины экрана больше 768px

let menuLoginWrapper = document.querySelector('.main-menu__login-wrapper');
let topPhoneLink = document.querySelector('.secondary-navigation__link--phone');
let topEmailLink = document.querySelector('.secondary-navigation__link--email');
let secondaryNavigation = document.querySelector('.secondary-navigation');


let resizeOnload = function() {
  if (document.body.clientWidth < 1440) {

    if (!headerTop.classList.contains('main-header__burger-menu-active')) {
      mainMenu.classList.add('visually-hidden');
    }

    secondaryNavigation.prepend(topEmailLink);
    secondaryNavigation.prepend(topPhoneLink);
  }

  if (document.body.clientWidth >= 1440) {


    if (!headerTop.classList.contains('main-header__burger-menu-active')) {
      mainMenu.classList.remove('visually-hidden');
      console.log('hello')
    }

    menuLoginWrapper.prepend(topEmailLink);
    menuLoginWrapper.prepend(topPhoneLink);
  }
}

window.addEventListener('load', ()=> {
  resizeOnload();
})


window.addEventListener('resize', ()=> {
  resizeOnload();
})



