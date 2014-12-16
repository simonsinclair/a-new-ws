// main.js
//

(function(w, $, undefined) {
  "use strict";

  $('html').removeClass('no-js');

  // Odometer Setup
  var od = new Odometer({
    el: $('#js-s3-count .odometer')[0],
    value: 0,
    duration: 5000,
    format: '(,ddd)',
    theme: 'minimal'
  });

  // Track
  var counted = false;

  // On Scroll
  $(window).on('scroll', onWindowScroll);

  function onWindowScroll() {

    if(isElementInViewport($('#js-s3-count')[0])) {
      $(window).off();
      od.update(70000000);
      counted = true;
    }

  }

  // Utility
  function isElementInViewport (el) {
      var rect = el.getBoundingClientRect();

      return (
          rect.top    >= 0 &&
          rect.left   >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
          rect.right  <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
  }

})(this, jQuery);
