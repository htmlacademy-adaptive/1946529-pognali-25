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

// Изменить количество попутчиков

let morePersons = document.querySelector('.more-persons');
let moreDuration = document.querySelector('.more-duration');

let lessPersons = document.querySelector('.less-persons');
let lessDuration = document.querySelector('.less-duration');

let personsValue = document.querySelector('.input-persons');
let durationValue = document.querySelector('.input-duration');

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

let openCountryList = document.querySelector('.add-new-plus');

closeCountryList.addEventListener('click', ()=> {
  countryList.classList.add('visually-hidden');
});

openCountryList.addEventListener('click', ()=> {
  countryList.classList.remove('visually-hidden');
});




