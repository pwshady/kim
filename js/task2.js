'use struct';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var WIZ_FIRST_NAMES = [
    'Иван', 
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'];

var WIZ_LAST_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
]

var wiz2 = [];

var randomColorRgb = function() {
    return 'rgb(' + randomInteger(0, 255) + ', ' + randomInteger(0, 255) + ', ' + randomInteger(0, 255) + ')';
    
}

var createDate = function() {
    wizard = ( {
        //'name' : i,
        'wizard_coat' : randomColorRgb(),
        'wizard_head' : randomColorRgb(),
        'wizard_eyes' : randomColorRgb(),
        'wizard_hands' : randomColorRgb(),
    });
    return wizard;    
};

var wiz = [
    {
        coatCol: 'rgb(60, 60, 60)'
    },
    {
        coatCol: 'rgb(120, 120, 120)'
    },
    {
        coatCol: 'rgb(180, 180, 180)'
    },
    {
        coatCol: 'rgb(240, 240, 240)'
    },
];

for (i = 0; i < 4; i++) {
    wiz2[i] = createDate();
}

//Генерирует случайное число min max
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

var createName = function() {
    var wiz_name = WIZ_FIRST_NAMES[randomInteger(0, WIZ_FIRST_NAMES.length - 1)] + ' ' + WIZ_LAST_NAMES[randomInteger(0, WIZ_LAST_NAMES.length - 1)]

    return wiz_name;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    console.log(wiz2[i].wizard_coat);
    wizardElement.querySelector('.setup-similar-label').textContent = createName();
    wizardElement.querySelector('.wizard-coat').style.fill = wiz2[i].wizard_coat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wiz2[i].wizard_eyes;
    return wizardElement;
};
  
var fragment = document.createDocumentFragment();


for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(i));
}
  similarListElement.appendChild(fragment);
  
  userDialog.querySelector('.setup-similar').classList.remove('hidden');