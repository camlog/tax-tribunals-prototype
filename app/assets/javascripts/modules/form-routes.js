'use strict';

moj.Modules.formRoutes = {
  init: function() {
    var self = this;

    if($('form').length) {
      self.bindEvents();
    }
  },

  bindEvents: function() {
    var self = this,
        $form = $('form').eq(0);

    $form.on('submit', function(e) {
      e.preventDefault();

      moj.Modules.dataStore.checkForItemsToStore($form);
      self.checkRoute($form);
    });
  },

  checkRoute: function($form) {
    var self = this,
        $checkedButton = $form.find('input[type="radio"]:checked'),
        nextPage;

    if($checkedButton.length && typeof $checkedButton.data('destination') !== 'undefined') {
      nextPage = $checkedButton.data('destination');
    } else {
      nextPage = $form.attr('action');
    }

    self.next(nextPage);
  },

  next: function(page) {
    document.location = page;
  }
};
