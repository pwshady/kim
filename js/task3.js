'use strict';
include("task2.js");

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');
var userSave = setup.querySelector('.setup-submit');
var wizCoat = setup.querySelector('.wizard-coat');
var wizEyes = setup.querySelector('.wizard-eyes');
var wizFireball = setup.querySelector('.setup-fireball-wrap');
var wizFireballColor = wizFireball.querySelector('[name="fireball-color"]');
var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  };
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  console.log('\uD83D\uDC2D');
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  console.log('\uD83D\uDC38');
};

var submitDate = function() {
    alert('save');
    closePopup();
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userName.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        evt.stopPropagation();
      }
});

userSave.addEventListener('click', function() {
    submitDate();
});

wizCoat.addEventListener('click', function() {
  wizCoat.style.fill = randomColorRgb();
});

wizEyes.addEventListener('click', function() {
  wizEyes.style.fill = randomColorRgb();
});



//Генерирует случайный цвет в формате #XXXXXX
var randomColorHTML = function () {
  return '#' + randomInteger(0,255).toString(16) + randomInteger(0,255).toString(16) + randomInteger(0,255).toString(16);
}

wizFireball.addEventListener('click', function() {
  //console.log(wizFireball.style.background);
  //console.log(randomColorHTML());
  wizFireball.style.background = randomColorHTML();

});