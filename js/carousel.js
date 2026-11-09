/* Winners & Finalists carousel
   - Auto-rotates every 5 seconds
   - Pauses on hover / keyboard focus
   - Dots are generated automatically from the number of slides
   - Swipe left/right on touch screens
   - No auto-rotate if the visitor has "reduce motion" turned on */
(function () {
  var root = document.querySelector('[data-carousel]');
  if (!root) return;

  var DELAY = 5000;
  var slides = Array.prototype.slice.call(root.querySelectorAll('.slide'));
  var dotsWrap = root.querySelector('.carousel-dots');
  var viewport = root.querySelector('.carousel-viewport');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0;
  var timer = null;
  var dots = [];

  if (slides.length < 2) return;

  slides.forEach(function (slide, n) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', 'Show slide ' + (n + 1) + ' of ' + slides.length);
    dot.addEventListener('click', function () {
      show(n);
      start();
    });
    dotsWrap.appendChild(dot);
    dots.push(dot);
  });

  function show(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      var active = i === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    dots.forEach(function (dot, i) {
      dot.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  function start() {
    stop();
    if (reduceMotion) return;
    timer = setInterval(function () { show(current + 1); }, DELAY);
  }

  // Pause while the visitor is looking / interacting
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);

  // Swipe support
  var startX = null;
  viewport.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });
  viewport.addEventListener('touchend', function (e) {
    if (startX === null) return;
    var diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) show(diff < 0 ? current + 1 : current - 1);
    startX = null;
    start();
  });

  // Stop the timer when the tab is in the background
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });

  show(0);
  start();
})();
