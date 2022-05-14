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

// Переменные для меню при изменении ширины экрана больше 768px

let menuLoginWrapper = document.querySelector('.main-menu__login-wrapper');
let topPhoneLink = document.querySelector('.secondary-navigation__link--phone');
let topEmailLink = document.querySelector('.secondary-navigation__link--email');
let secondaryNavigation = document.querySelector('.secondary-navigation');

let menuLink = document.querySelectorAll('.main-menu__link');
let mainMenuList = document.querySelector('.main-menu__list');
let mainHeader = document.querySelector('.main-header');
let mainHeaderBottom = document.querySelector('.main-header__bottom');
let bgWrapper = document.querySelector('.bg-wrapper--dark');
let travelerAbout = document.querySelector('.traveler-about');
let bgWrapperTop = document.querySelector('.bg-wrapper--dark');

// Скрываем класс NO JS

headerTop.classList.remove('main-header__top--nojs');

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

        if (window.pageYOffset < 200) {
          headerTop.classList.remove('main-header__check-scrol');
          if (!headerTop.classList.contains('main-header__check-menu-open')) {
            headerTop.classList.remove('main-header__burger-menu-active');
            logoDarkg.classList.add('visually-hidden');
            logoLight.classList.remove('visually-hidden');
            burgerIcon.classList.remove('visually-hidden');
          }
          // logoDarkg.classList.add('visually-hidden');
          // logoLight.classList.remove('visually-hidden');
          darkBurgerIcon.classList.add('visually-hidden');
          // burgerIcon.classList.remove('visually-hidden');
          // mainMenuFunc();
        }
      });

    if (!headerTop.classList.contains('main-header__burger-menu-active')) {
      mainMenu.classList.add('visually-hidden');
    }
  }

  if (document.body.clientWidth >= 1440) {

    let mainHeaderBottom = document.querySelector('.main-header__bottom');
    let travelerAbout = document.querySelector('.traveler-about');
    let headerBottomHeight = mainHeaderBottom.clientHeight;
    let headerTopHeight = headerTop.clientHeight;

    window.addEventListener('scroll', ()=> {
      if (window.pageYOffset >= 10) {
        mainHeader.style.position = 'fixed';
        mainHeader.style.top = '0';
        headerTop.style.paddingTop = 23 + 'px';
        headerTop.style.paddingBottom = 23 + 'px';
        bgWrapper.style.background = '#ffffff';
        mainHeader.classList.add('main-header__top--fixed');
        headerTop.style.background = '#ffffff';
        logoDarkg.classList.remove('visually-hidden');
        logoLight.classList.add('visually-hidden');
        mainMenuList.classList.add('main-menu__list--change-before');
        // mainHeaderBottom.style.display = 'none';
        mainHeaderBottom.style.top = headerTopHeight + 'px';
        travelerAbout.style.marginTop = headerTopHeight -60 + 'px';
        // bgWrapperTop.classList.add('bg-wrapper--dark-active');
        for (link of menuLink) {
          link.classList.add('main-menu__link--scroll');
        }
      }

      if (window.pageYOffset < 10) {
        mainHeader.style.position = 'relative';
        headerTop.style.paddingTop = 46 + 'px';
        headerTop.style.paddingBottom = 0;
        headerTop.style.background = '#161c35';
        bgWrapper.style.background = '#161c35';
        logoDarkg.classList.add('visually-hidden');
        logoLight.classList.remove('visually-hidden');
        mainMenuList.classList.remove('main-menu__list--change-before');
        mainHeader.classList.remove('main-header__top--fixed');
        // mainHeaderBottom.style.display = 'block';
        travelerAbout.style.marginTop = -60 + 'px';
        mainHeaderBottom.style.top = 0 + 'px';
        // bgWrapperTop.classList.remove('bg-wrapper--dark-active');
        for (link of menuLink) {
          link.classList.remove('main-menu__link--scroll');
        }
      }
    });
  }

// Показываем меню при изменении ширины экрана больше 768px

let resizeOnload = function() {
  if (document.body.clientWidth < 1440) {

    if (!headerTop.classList.contains('main-header__burger-menu-active')) {
      mainMenu.classList.add('visually-hidden');
    }
  }

  if (document.body.clientWidth >= 1440) {

    if (!headerTop.classList.contains('main-header__burger-menu-active')) {
      mainMenu.classList.remove('visually-hidden');
      console.log('hello')
    }
  }
}

window.addEventListener('load', ()=> {
  resizeOnload();
});


// Изменить количество попутчиков

let morePersons = document.querySelector('.companions-persons__more-persons');
let moreDuration = document.querySelector('.companions-persons__more-duration');

let lessPersons = document.querySelector('.companions-persons__less-persons');
let lessDuration = document.querySelector('.companions-persons__less-duration');

let personsValue = document.querySelector('.companions-persons__input-persons');
let durationValue = document.querySelector('.companions-persons__input-duration');

morePersons.addEventListener('click', ()=> {
  let numberPersons = Number(personsValue.value);
  personsValue.value = numberPersons + 1;
});

lessPersons.addEventListener('click', ()=> {
  if (personsValue.value < 1) {
    personsValue.value = 0;
  } else {
    let numberPersons = Number(personsValue.value);
    personsValue.value = numberPersons - 1;
  }
});

moreDuration.addEventListener('click', ()=> {
  let numberDuration = Number(durationValue.value);
  durationValue.value = numberDuration + 1;
});

lessDuration.addEventListener('click', ()=> {
  if (durationValue.value < 1) {
    durationValue.value = 0;
  } else {
    let numberDuration = Number(durationValue.value);
    durationValue.value = numberDuration - 1;
  }
});

// Модальное окно выбора стран

let countryList = document.querySelector('.country-list');
let closeCountryList = document.querySelector('.country-list__close');

let openCountryList = document.querySelector('.add-new-country__button');
let addNewCountry = document.querySelector('.add-new-country');

closeCountryList.addEventListener('click', ()=> {
  countryList.classList.add('visually-hidden');
});

openCountryList.addEventListener('click', (event)=> {
  event.preventDefault();
  countryList.classList.remove('visually-hidden');
});

// Проверка введённого текста

let aboutHobbies = document.querySelector('.second-country__about-my-hobbies');
let errorMessage = document.querySelector('.second-country__error-message');

aboutHobbies.addEventListener('blur', (event)=> {
  event.target.style.borderColor = '#f47e7e';
  errorMessage.classList.remove('visually-hidden');
});

aboutHobbies.addEventListener('focus', (event)=> {
  event.target.style.borderColor = '#cbced9';
  errorMessage.classList.add('visually-hidden');
})

let aboutPlans = document.querySelector('.first-country__about-my-plans');
let errorMessagePlans = document.querySelector('.first-country__error-message');

aboutPlans.addEventListener('blur', (event)=> {
  event.target.style.borderColor = '#f47e7e';
  errorMessagePlans.classList.remove('visually-hidden');
});

aboutPlans.addEventListener('focus', (event)=> {
  event.target.style.borderColor = '#cbced9';
  errorMessagePlans.classList.add('visually-hidden');
})

