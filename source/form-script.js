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

// Высчитываем высоту

// let mainHeaderBottom = document.querySelector('.main-header__bottom');
// let travelerAbout = document.querySelector('.traveler-about');

// let heightCalculate = function() {

//   if (document.body.clientWidth < 768) {
//     // let headerHeight = headerTop.clientHeight;
//     let headerBottomHeight = mainHeaderBottom.clientHeight;

//     // mainHeaderBottom.style.top = headerHeight + 'px';
//     travelerAbout.style.marginTop = headerBottomHeight - 30 + 'px';
//   }

//   if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
//     // let headerHeight = headerTop.clientHeight;
//     let headerBottomHeight = mainHeaderBottom.clientHeight;

//     // mainHeaderBottom.style.top = headerHeight + 'px';
//     travelerAbout.style.marginTop = headerBottomHeight - 40 + 'px';

//     // if (headerTop.classList.contains('main-header__burger-menu-active')) {
//     //   mainHeaderBottom.style.top = 0 + 'px';
//     // }

//     // burgerCloseIcon.addEventListener('click', ()=> {
//     //   mainHeaderBottom.style.top = headerHeight + 'px';
//     // })
//   }

//   if (document.body.clientWidth >= 1440) {
//     // let headerHeight = headerTop.clientHeight;
//     let headerBottomHeight = mainHeaderBottom.clientHeight;

//     // mainHeaderBottom.style.top = headerHeight + 'px';
//     travelerAbout.style.marginTop = headerBottomHeight - 60 + 'px';
//   }
// }

// window.addEventListener('resize', ()=> {
//   heightCalculate();
// })

// window.addEventListener('load', ()=> {
//   heightCalculate();
// })

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
})

window.addEventListener('resize', ()=> {
  resizeOnload();
})


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

let openCountryList = document.querySelector('.add-new-country__add-new-plus');
let addNewCountry = document.querySelector('.add-new-country');

closeCountryList.addEventListener('click', ()=> {
  countryList.classList.add('visually-hidden');
});

openCountryList.addEventListener('click', ()=> {
  countryList.classList.remove('visually-hidden');
});




