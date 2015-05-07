;(function() {
  'use strict';

  var ready;

  ready = function(selector, callback) {
    // get the element that the callback depends on
    var element = document.querySelector(selector);

    // if we have the element we fire the callback and pass the element
    // as an argument
    if (element) {
      callback(element);
    }
  };

  // expose ready
  window.ready = ready;
})();
