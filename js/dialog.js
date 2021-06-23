'use strict';
(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');
  var userSave = setup.querySelector('.setup-submit');

  var openPopup = function() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
      
  var closePopup = function() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    };
  };

  var submitDate = function() {
    alert('save');
    closePopup();
  };
  
  userSave.addEventListener('click', function() {
    submitDate();
  });

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

})();
