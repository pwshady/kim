'use strict';
(function () {
  
  var userDialog = document.querySelector('.setup');
  //userDialog.classList.remove('hidden');
    
  var WIZ_FIRST_NAMES = [
    'Иван', 
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',];
    
  var WIZ_LAST_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг',
  ];
    
  var wiz2 = [];
    
  var randomColorRgb = function() {
    return 'rgb(' + randomInteger(0, 255) + ', ' + randomInteger(0, 255) + ', ' + randomInteger(0, 255) + ')';
  };
    
  var createDate = function() {
    var wizard = ( {
      'wizard_coat' : randomColorRgb(),
      'wizard_head' : randomColorRgb(),
      'wizard_eyes' : randomColorRgb(),
      'wizard_hands' : randomColorRgb(),
    });
      return wizard;    
  };
    
  var createName = function() {
    return WIZ_FIRST_NAMES[randomInteger(0, WIZ_FIRST_NAMES.length - 1)] + ' ' + WIZ_LAST_NAMES[randomInteger(0, WIZ_LAST_NAMES.length - 1)];
  };
    
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = createName();
    wizardElement.querySelector('.wizard-coat').style.fill = wiz2[wizard].wizard_coat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wiz2[wizard].wizard_eyes;
    return wizardElement;
  };
      
  var fragment = document.createDocumentFragment();

  //Генерирует случайное число min max
  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
    
  document.querySelector('.setup-similar').classList.remove('hidden');

  for (i = 0; i < 4; i++) {
    wiz2[i] = createDate();
  };

  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(i));
  };
  similarListElement.appendChild(fragment);
      
  userDialog.querySelector('.setup-similar').classList.remove('hidden');


})();