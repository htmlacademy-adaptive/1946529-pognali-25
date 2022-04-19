// Меню

let mainMenu = document.querySelector('.main-menu');
let burgerButton = document.querySelector('.main-header__burger-menu');
let burgerIcon = document.querySelector('.main-header__burger-menu-icon');
let burgerCloseIcon = document.querySelector('.main-header__burger-menu-close');
let headerTop = document.querySelector('.main-header__top');
let changeHeaderBg = document.querySelector('.burger-menu-active');
let logoDarkg = document.querySelector('.main-header__logo-image--dark');
let logoLight = document.querySelector('.main-header__logo-image--light');


burgerButton.addEventListener('click', ()=> {
  mainMenu.classList.toggle('visually-hidden');
  headerTop.classList.toggle('burger-menu-active');
  logoDarkg.classList.toggle('visually-hidden');
  logoLight.classList.toggle('visually-hidden');
  burgerIcon.classList.toggle('visually-hidden');
  burgerCloseIcon.classList.toggle('visually-hidden');
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

let openCountryList = document.querySelector('.add-new-country__add-new-plus');

closeCountryList.addEventListener('click', ()=> {
  countryList.classList.add('visually-hidden');
});

openCountryList.addEventListener('click', ()=> {
  countryList.classList.remove('visually-hidden');
});




