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


// Показываем меню при изменении ширины экрана больше 768px + изменяем стили верхнего меню при скроле

let menuLoginWrapper = document.querySelector('.main-menu__login-wrapper');
let topPhoneLink = document.querySelector('.secondary-navigation__link--phone');
let topEmailLink = document.querySelector('.secondary-navigation__link--email');
let secondaryNavigation = document.querySelector('.secondary-navigation');
let darkBurgerIcon = document.querySelector('.main-header__burger-menu-icon-dark');

let menuLink = document.querySelectorAll('.main-menu__link');
let menuLinkBefore = document.querySelector('.main-menu__link::before');
let mainMenuList = document.querySelector('.main-menu__list');
let mainHeader = document.querySelector('.main-header');
let bgWrapper = document.querySelector('.bg-wrapper--dark');

let resizeOnload = function() {

if (document.body.clientWidth < 768) {

    window.addEventListener('scroll', ()=> {
      if (window.pageYOffset > 1) {
        // headerTop.style.position = 'fixed';
        headerTop.style.background = '#ffffff';
        logoDarkg.classList.remove('visually-hidden');
        logoLight.classList.add('visually-hidden');
        darkBurgerIcon.classList.remove('visually-hidden');

      } else {
        // headerTop.style.position = 'static';
        headerTop.style.background = '#161c35';
        logoDarkg.classList.add('visually-hidden');
        logoLight.classList.remove('visually-hidden');
        darkBurgerIcon.classList.add('visually-hidden');
      }
    });
  }

  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {

    // if (document.body.clientWidth < 1440) {
      window.addEventListener('scroll', ()=> {
        if (window.pageYOffset > 1) {
          // headerTop.style.position = 'fixed';
          headerTop.style.background = '#ffffff';
          logoDarkg.classList.remove('visually-hidden');
          logoLight.classList.add('visually-hidden');
          darkBurgerIcon.classList.remove('visually-hidden');

        } else {
          // headerTop.style.position = 'static';
          headerTop.style.background = '#182044';
          logoDarkg.classList.add('visually-hidden');
          logoLight.classList.remove('visually-hidden');
          darkBurgerIcon.classList.add('visually-hidden');
        }
      });
    // }

    if (!headerTop.classList.contains('main-header__burger-menu-active')) {
      mainMenu.classList.add('visually-hidden');
    }

    secondaryNavigation.prepend(topEmailLink);
    secondaryNavigation.prepend(topPhoneLink);
  }

  if (document.body.clientWidth >= 1440) {

    window.addEventListener('scroll', ()=> {
      if (window.pageYOffset > 700) {
        mainHeader.style.position = 'fixed';
        // headerTop.style.position = 'fixed';
        headerTop.style.paddingTop = 23 + 'px';
        headerTop.style.paddingBottom = 23 + 'px';
        bgWrapper.style.background = '#ffffff';
        // headerTop.style.left = 223 + 'px';
        mainHeader.classList.add('main-header__top--fixed');
        headerTop.style.background = '#ffffff';
        logoDarkg.classList.remove('visually-hidden');
        logoLight.classList.add('visually-hidden');
        mainMenuList.classList.add('main-menu__list--change-before');

        for (link of menuLink) {
          link.style.color = '#192144';
        }
      } else {
        mainHeader.style.position = 'static';
        headerTop.style.paddingTop = 46 + 'px';
        headerTop.style.paddingBottom = 0;
        headerTop.style.background = '#161c35';
        bgWrapper.style.background = '#161c35';
        logoDarkg.classList.add('visually-hidden');
        logoLight.classList.remove('visually-hidden');
        mainMenuList.classList.remove('main-menu__list--change-before');
        mainHeader.classList.remove('main-header__top--fixed');

        for (link of menuLink) {
          link.style.color = '#ffffff';
        }
      }
    });

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

// Изменение верхнего меню

// let menuLink = document.querySelectorAll('.main-menu__link');
// let menuLinkBefore = document.querySelector('.main-menu__link::before');
// let mainMenuList = document.querySelector('.main-menu__list');

// let onscrollWindow = function() {

  // if (document.body.clientWidth >= 1440) {
  //   window.addEventListener('scroll', ()=> {
  //     if (window.pageYOffset > 700) {
  //       headerTop.style.position = 'fixed';
  //       headerTop.style.paddingTop = 23 + 'px';
  //       headerTop.style.paddingBottom = 23 + 'px';
  //       headerTop.style.background = '#ffffff';
  //       logoDarkg.classList.remove('visually-hidden');
  //       logoLight.classList.add('visually-hidden');
  //       mainMenuList.classList.add('main-menu__list--change-before');

  //       for (link of menuLink) {
  //         link.style.color = '#192144';
  //       }
  //     } else {
  //       headerTop.style.position = 'static';
  //       headerTop.style.paddingTop = 46 + 'px';
  //       headerTop.style.paddingBottom = 0;
  //       headerTop.style.background = '#161c35';
  //       logoDarkg.classList.add('visually-hidden');
  //       logoLight.classList.remove('visually-hidden');
  //       mainMenuList.classList.remove('main-menu__list--change-before');

  //       for (link of menuLink) {
  //         link.style.color = '#ffffff';
  //       }
  //     }
  //   });


  // }
// }

// onscrollWindow();
