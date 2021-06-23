'use strict';

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setup = document.querySelector('.setup');


var wizCoat = setup.querySelector('.wizard-coat');
var wizEyes = setup.querySelector('.wizard-eyes');
var wizFireball = setup.querySelector('.setup-fireball-wrap');
var wizFireballColor = wizFireball.querySelector('[name="fireball-color"]');




  //Генерирует случайное число min max
  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };





wizCoat.addEventListener('click', function() {
  wizCoat.style.fill = randomColorRgb();
});

wizEyes.addEventListener('click', function() {
  wizEyes.style.fill = randomColorRgb();
});

var randomColorRgb = function() {
  return 'rgb(' + randomInteger(0, 255) + ', ' + randomInteger(0, 255) + ', ' + randomInteger(0, 255) + ')';
};

//Генерирует случайный цвет в формате #XXXXXX
var randomColorHTML = function () {
  return '#' + randomInteger(0,255).toString(16) + randomInteger(0,255).toString(16) + randomInteger(0,255).toString(16);
}

wizFireball.addEventListener('click', function() {
  wizFireball.style.background = randomColorHTML();

});