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
let personCardLink = document.querySelectorAll('.person-card__button-link');
let loadMoreCard = document.querySelector('.person-card__load-more');

// Скрываем класс NO JS

headerTop.classList.remove('main-header__top--nojs');
loadMoreCard.removeAttribute('href');

for (let card of personCardLink) {
  card.removeAttribute('href');
}

// Открываем/закрываем меню

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

    // let catalogWrapper = document.querySelector('.catalog-wrapper');
    // let bgWrapperTop = document.querySelector('.bg-wrapper--dark');
    let companionsFilter = document.querySelector('.companions-filter');
    let mainHeaderBottom = document.querySelector('.main-header__bottom');
    let headerBottomHeight = mainHeaderBottom.clientHeight;
    let headerTopHeight = headerTop.clientHeight;

    window.addEventListener('scroll', ()=> {
      if (window.pageYOffset > 1) {
        mainHeader.style.position = 'fixed';
        headerTop.style.paddingTop = 23 + 'px';
        headerTop.style.paddingBottom = 23 + 'px';
        bgWrapper.style.background = '#ffffff';
        mainHeader.classList.add('main-header__top--fixed');
        headerTop.style.background = '#ffffff';
        logoDarkg.classList.remove('visually-hidden');
        logoLight.classList.add('visually-hidden');
        mainMenuList.classList.add('main-menu__list--change-before');
        // mainHeaderBottom.style.display = 'none';
        // let gruber = Number(headerBottomHeight);
        // let hyuber = Number(headerTopHeight);
        // console.log(headerBottomHeight);
        mainHeaderBottom.style.top = headerTopHeight + 'px';
        companionsFilter.style.marginTop = headerTopHeight -40 + 'px';
        // bgWrapperTop.classList.add('bg-wrapper--dark-active');
        for (link of menuLink) {
          link.classList.add('main-menu__link--scroll');
        }
      }

      if (window.pageYOffset < 1) {
        mainHeader.style.position = 'relative';
        headerTop.style.paddingTop = 46 + 'px';
        headerTop.style.paddingBottom = 0;
        headerTop.style.background = '#192144';
        bgWrapper.style.background = '#192144';
        logoDarkg.classList.add('visually-hidden');
        logoLight.classList.remove('visually-hidden');
        mainMenuList.classList.remove('main-menu__list--change-before');
        mainHeader.classList.remove('main-header__top--fixed');
        // mainHeaderBottom.style.display = 'block';
        companionsFilter.style.marginTop = -40 + 'px';
        // bgWrapperTop.classList.remove('bg-wrapper--dark-active');
        mainHeaderBottom.style.top = 0 + 'px';
        for (link of menuLink) {
          link.classList.remove('main-menu__link--scroll');
        }
      }
    });
  }

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
let showAllFilter = document.querySelector('.companions-header__show-all-text');

dottedButton.addEventListener('click', ()=> {
  closeButton.style.display = 'block';
  dottedButton.style.display = 'none';
  countryList.classList.remove('visually-hidden');
  catalogCountryList.classList.remove('visually-hidden');
  catalogTableList.classList.remove('visually-hidden');
  modalCloseButton.classList.remove('visually-hidden');
  tableListActive.classList.remove('visually-hidden');
  tableListWrapper.classList.remove('visually-hidden--secondary');
  modalCloseButton.classList.remove('visually-hidden--secondary');
  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
    modalWrapper.style.paddingBottom = 76 + 'px';
  }

  // Заменяем текст после ОТКРЫТИЯ окна фильтра
  showAllFilter.textContent = showAllFilter.textContent.replace = ('Показать все', 'Свернуть');
  showAllFilter.style.marginLeft = 5 + 'px';
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
  // Заменяем текст после закрытия окна фильтра
  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
    modalWrapper.style.paddingBottom = 56 + 'px';
  }
  showAllFilter.textContent = showAllFilter.textContent.replace = ('Свернуть', 'Показать все');
  showAllFilter.style.marginLeft = -5 + 'px';
});

// Изменение цвета кнопки "Показать все" при наведении

dottedButton.addEventListener('mouseover', ()=> {
  showAllFilter.style.opacity = '0.7';
});

closeButton.addEventListener('mouseover', ()=> {
  showAllFilter.style.opacity = '0.7';
});

dottedButton.addEventListener('mouseleave', ()=> {
  showAllFilter.style.opacity = '1';
});

closeButton.addEventListener('mouseleave', ()=> {
  showAllFilter.style.opacity = '1';
});

dottedButton.addEventListener('mousedown', ()=> {
  showAllFilter.style.opacity = '0.3';
});

closeButton.addEventListener('mousedown', ()=> {
  showAllFilter.style.opacity = '0.3';
});

dottedButton.addEventListener('mouseup', ()=> {
  showAllFilter.style.opacity = '0.3';
});

closeButton.addEventListener('mouseup', ()=> {
  showAllFilter.style.opacity = '0.3';
});

// Закрытие фильтра при нажатии на кнопку закрыть внизу окна фильтра

modalCloseButton.addEventListener('click', (event)=> {
  event.preventDefault();
  if (document.body.clientWidth < 1440) {
    dottedButton.style.display = 'block';
    // tableListActive.classList.add('visually-hidden');
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
  showAllFilter.textContent = showAllFilter.textContent.replace = ('Свернуть', 'Показать все');
  showAllFilter.style.marginLeft = -5 + 'px';
  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
    modalWrapper.style.paddingBottom = 56 + 'px';
  }
});

// Открытие окна фильтра при нажатии на три иконку слева

filterIconLeft.addEventListener('click', ()=> {
  tableListWrapper.classList.remove('visually-hidden--secondary');
  modalCloseButton.classList.add('visually-hidden');
  modalCloseButton.classList.remove('visually-hidden--secondary');
  tableListActive.classList.remove('visually-hidden');
});

// Обработчик onload

// let loadCalculate = function() {

  if (document.body.clientWidth < 768) {
    countryList.classList.add('visually-hidden');
  }

  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {

    countryList.classList.remove('visually-hidden');
    listItemHeader.classList.add('visually-hidden');
  }

  if (document.body.clientWidth >= 1440) {
    countryList.classList.remove('visually-hidden');
    // tableListActive.classList.add('visually-hidden--secondary');
    tableListActive.classList.remove('visually-hidden');
    mainMenu.classList.remove('visually-hidden');
  }
// }

// loadCalculate();


// Показываем меню при изменении ширины экрана больше 768px + изменяем стили верхнего меню при скроле

let menuLoginWrapper = document.querySelector('.main-menu__login-wrapper');
let topPhoneLink = document.querySelector('.secondary-navigation__link--phone');
let topEmailLink = document.querySelector('.secondary-navigation__link--email');
let secondaryNavigation = document.querySelector('.secondary-navigation');
// let  = document.querySelector('.main-header__burger-menu-icon');


let menuLink = document.querySelectorAll('.main-menu__link');
let menuLinkBefore = document.querySelector('.main-menu__link::before');
let mainMenuList = document.querySelector('.main-menu__list');
let mainHeader = document.querySelector('.main-header');
let bgWrapper = document.querySelector('.bg-wrapper--dark');
