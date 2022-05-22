// Меню

let mainMenu = document.querySelector('.main-menu');
let burgerButton = document.querySelector('.main-header__burger-menu');
let burgerIcon = document.querySelector('.main-header__burger-menu-icon');
let darkBurgerIcon = document.querySelector('.main-header__burger-menu-icon-dark');
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

// переменные для меню при изменении ширины экрана больше 768px

let menuLoginWrapper = document.querySelector('.main-menu__login-wrapper');
let topPhoneLink = document.querySelector('.secondary-navigation__link--phone');
let topEmailLink = document.querySelector('.secondary-navigation__link--email');
let secondaryNavigation = document.querySelector('.secondary-navigation');

let menuLink = document.querySelectorAll('.main-menu__link');
let mainMenuList = document.querySelector('.main-menu__list');
let mainHeader = document.querySelector('.main-header');
let bgWrapper = document.querySelector('.bg-wrapper--dark')
let mapBackground = document.querySelector('.map_background');

// Скрываем класс NO JS

headerTop.classList.remove('main-header__top--nojs');
// mapBackground.classList.remove('main-header__top--nojs');

// Открываем/закрываем меню без

  burgerIcon.addEventListener('click', ()=> {
    headerTop.classList.add('main-header__burger-menu-active');
    logoDarkg.classList.remove('visually-hidden');
    logoLight.classList.add('visually-hidden');
    burgerIcon.classList.add('visually-hidden');
    burgerCloseIcon.classList.remove('visually-hidden');
    mainMenu.classList.remove('visually-hidden');
    mainMenuLogin.classList.add('main-menu__login--active');
    navigationUser.classList.remove('visually-hidden');
    social.classList.remove('visually-hidden');
    headerTop.classList.add('main-header__check-menu-open');
  });

  darkBurgerIcon.addEventListener('click', ()=> {
    headerTop.classList.add('main-header__burger-menu-active');
    logoDarkg.classList.remove('visually-hidden');
    logoLight.classList.add('visually-hidden');
    darkBurgerIcon.classList.add('visually-hidden');
    burgerCloseIcon.classList.remove('visually-hidden');
    mainMenu.classList.remove('visually-hidden');
    mainMenuLogin.classList.add('main-menu__login--active');
    navigationUser.classList.remove('visually-hidden');
    social.classList.remove('visually-hidden');
    headerTop.classList.add('main-header__check-menu-open');
  });

  burgerCloseIcon.addEventListener('click', ()=> {
    // Проверка была ли прокручена страница
    if (headerTop.classList.contains('main-header__check-scrol')) {
      burgerIcon.classList.add('visually-hidden');
      darkBurgerIcon.classList.remove('visually-hidden');
      headerTop.classList.add('main-header__burger-menu-active');
      burgerCloseIcon.classList.add('visually-hidden');
      mainMenu.classList.add('visually-hidden');
      mainMenuLogin.classList.remove('main-menu__login--active');
      navigationUser.classList.add('visually-hidden');
      social.classList.add('visually-hidden');
      headerTop.classList.remove('main-header__check-menu-open');
    } else {
      headerTop.classList.remove('main-header__burger-menu-active');
      logoDarkg.classList.add('visually-hidden');
      logoLight.classList.remove('visually-hidden');
      burgerIcon.classList.remove('visually-hidden');
      burgerCloseIcon.classList.add('visually-hidden');
      mainMenu.classList.add('visually-hidden');
      mainMenuLogin.classList.remove('main-menu__login--active');
      navigationUser.classList.add('visually-hidden');
      social.classList.add('visually-hidden');
      headerTop.classList.remove('main-header__check-menu-open');
    }
  });

console.log(window.pageYOffset);

  if (document.body.clientWidth < 768) {

    window.addEventListener('scroll', ()=> {
      if (window.pageYOffset >= 200) {
        console.log(window.pageYOffset);
        headerTop.classList.add('main-header__check-scrol');
        headerTop.classList.add('main-header__burger-menu-active');
        logoDarkg.classList.remove('visually-hidden');
        logoLight.classList.add('visually-hidden');
        if (!headerTop.classList.contains('main-header__check-menu-open')) {
          darkBurgerIcon.classList.remove('visually-hidden');
        }
        burgerIcon.classList.add('visually-hidden');
      }

      if (window.pageYOffset < 200){
        headerTop.classList.remove('main-header__check-scrol');
        if (!headerTop.classList.contains('main-header__check-menu-open')) {
          headerTop.classList.remove('main-header__burger-menu-active');
          logoDarkg.classList.add('visually-hidden');
          logoLight.classList.remove('visually-hidden');
          burgerIcon.classList.remove('visually-hidden');
        }
        darkBurgerIcon.classList.add('visually-hidden');
      }
    });
  }

  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {

      window.addEventListener('scroll', ()=> {
        if (window.pageYOffset >= 200) {
          console.log(window.pageYOffset);
          headerTop.classList.add('main-header__check-scrol');
          headerTop.classList.add('main-header__burger-menu-active');
          logoDarkg.classList.remove('visually-hidden');
          logoLight.classList.add('visually-hidden');
          if (!headerTop.classList.contains('main-header__check-menu-open')) {
            darkBurgerIcon.classList.remove('visually-hidden');
          }
          burgerIcon.classList.add('visually-hidden');
        }

        if (window.pageYOffset < 200){
          headerTop.classList.remove('main-header__check-scrol');
          if (!headerTop.classList.contains('main-header__check-menu-open')) {
            headerTop.classList.remove('main-header__burger-menu-active');
            logoDarkg.classList.add('visually-hidden');
            logoLight.classList.remove('visually-hidden');
            burgerIcon.classList.remove('visually-hidden');
          }
          darkBurgerIcon.classList.add('visually-hidden');
        }
      });

    if (!headerTop.classList.contains('main-header__burger-menu-active')) {
      mainMenu.classList.add('visually-hidden');
    }
  }

  if (document.body.clientWidth >= 1440) {

    let firstScreen = document.querySelector('.first-screen');
    let headerTopHeight = headerTop.clientHeight;

    window.addEventListener('scroll', ()=> {
      if (window.pageYOffset > 700) {
        mainHeader.style.position = 'fixed';
        headerTop.style.paddingTop = 23 + 'px';
        headerTop.style.paddingBottom = 23 + 'px';
        bgWrapper.style.background = '#ffffff';
        mainHeader.classList.add('main-header__top--fixed');
        headerTop.style.background = '#ffffff';
        logoDarkg.classList.remove('visually-hidden');
        logoLight.classList.add('visually-hidden');
        mainMenuList.classList.add('main-menu__list--change-before');
        firstScreen.style.marginTop = headerTopHeight + 'px';
        mainHeader.style.top = '0';
        // headerTop.style.top = 0 + 'px';
        for (link of menuLink) {
          link.classList.add('main-menu__link--scroll');
        }
      }

      if (window.pageYOffset < 700) {
        mainHeader.style.position = 'static';
        headerTop.style.paddingTop = 46 + 'px';
        headerTop.style.paddingBottom = 0;
        headerTop.style.background = '#161c35';
        bgWrapper.style.background = '#161c35';
        logoDarkg.classList.add('visually-hidden');
        logoLight.classList.remove('visually-hidden');
        mainMenuList.classList.remove('main-menu__list--change-before');
        mainHeader.classList.remove('main-header__top--fixed');
        firstScreen.style.marginTop = 0 + 'px';
        for (link of menuLink) {
          link.classList.remove('main-menu__link--scroll');
        }
      }
    });

    if (!headerTop.classList.contains('main-header__burger-menu-active')) {
      mainMenu.classList.remove('visually-hidden');
    }

    menuLoginWrapper.prepend(topEmailLink);
    menuLoginWrapper.prepend(topPhoneLink);
  }

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

// Проверка заполнения e-mail формы

let emailButton = document.querySelector('.interesting__email-button');
let emailText = document.querySelector('.interesting__email-text');

emailButton.onclick = function() {
  if (emailText.value.length < 1) {
    console.log('Hello!');
    emailText.placeholder = 'Введите e-mail';
    emailText.classList.add('interesting__email-text--wrong');
    emailText.style.background = '#ffffff';
  }
}
