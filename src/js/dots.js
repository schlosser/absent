document.addEventListener('DOMContentLoaded', function() {
  // var deepBackgroundDots = document.querySelectorAll('.deep-background-layer li');
  // var middleBackgroundDots = document.querySelectorAll('.middle-background-layer li');
  // var closeBackgroundDots = document.querySelectorAll('.close-background-layer li');
  var dots = document.querySelectorAll('.deep-background-layer li, .middle-background-layer li, .close-background-layer li');
  var main = document.querySelector('.main');
  var shouldPeek = true;

  /**
   * Don't peek down the page, because they've already started to scroll.
   */
  function noPeek() {
    console.log('hi');
    shouldPeek = false;
  };

  /**
   * @param {Number} x - percent complete
   * @param {Number} t - time elapsed
   * @param {Number} b - start value
   * @param {Number} c - end value
   * @param {Number} d - duration
   */
  function _easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  }

  /**
   * Scroll to the top of the page, for scrollDuration ms, calling cb when done.
   *
   * @param {int} offset - the offset from the top of the document to scroll to
   * @param {int} scrollDuration - how long the scroll should take, in ms
   * @param {function} cb - callback to call when the scroll is complete
   */
  function scrollTo(offset, scrollDuration, cb) {
    cb = cb || function() {};
    var startT = Date.now();
    var startY = main.scrollTop;
    var distanceToTravel = offset - startY;
    var percentComplete = 0;
    var elapsed;
    var scrollToPercent;
    var scrollToY;

    function step() {
      setTimeout(function() {
        if (percentComplete < 1) {
          elapsed = Date.now() - startT;
          percentComplete = elapsed / scrollDuration;
          scrollToPercent = _easeInOutQuad(percentComplete, elapsed, 0, 1, scrollDuration);
          scrollToY = scrollToPercent * distanceToTravel + startY;
          main.scrollTop = scrollToY;
          requestAnimationFrame(step);
        } else {
          main.scrollTop = offset;
          cb();
        }
      }, 15);
    }
    step();
  };



  // Create the dots.
  setTimeout(function() {
    for (var i = 0; i < dots.length; i++) {
      var dot = dots[i];
      var top = Math.random() * 110 - 5;
      var left = Math.random() * 110 - 5;
      var scale = Math.pow(Math.random() * 2, 2) + 0.5;

      dot.style = 'top: ' + top + '%; left: ' + left + '%; transform: scale(' +
        scale + '); -webkit-transform: scale(' + scale + ');';
    }
  }, 500);

  var peekTimeoutId = setTimeout(function() {
    if (shouldPeek) {
      scrollTo(200, 500);
    }

    main.removeEventListener('scroll', noPeek, false);
  }, 3000);

  main.addEventListener('scroll', noPeek, false);
});
