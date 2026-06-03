/* NatoBytes — interactions */
(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---- nav scroll state + altimeter progress ---- */
  var nav = document.getElementById('nav');
  var alt = document.getElementById('altimeter');
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle('scrolled', y > 40);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    alt.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mobile nav ---- */
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  function closeMenu() { burger.classList.remove('open'); links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  /* ---- scroll reveals ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

  /* ---- the duck: debugging quips + squish ---- */
  var duck = document.getElementById('duck');
  var bubble = document.getElementById('duckBubble');
  var quips = [
    'So… walk me through it line by line.',
    'Have you tried explaining it out loud?',
    'It worked yesterday? Tell me more.',
    'What did you *expect* it to do?',
    'Sounds like an off-by-one. Quack.',
    'Is it plugged in? (the API key, I mean)',
    'Read the stack trace. Slowly. To me.',
    'Ship it. But test it first. Quack.',
    'That semicolon is judging you.',
    'Rubber duck rule #1: blame the cache.'
  ];
  var qi = -1, hideTimer;
  function speak() {
    qi = (qi + 1) % quips.length;
    bubble.textContent = quips[qi];
    bubble.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { bubble.classList.remove('show'); }, 3600);
  }
  function pokeDuck() {
    duck.style.animation = 'none';
    // force reflow so the squish animation restarts
    void duck.offsetWidth;
    duck.style.animation = 'squish .35s ease, bob 3.4s ease-in-out infinite .35s';
    speak();
  }
  if (duck) {
    duck.addEventListener('click', pokeDuck);
    // keyboard-operable (role=button): Enter / Space activate like a click
    duck.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); pokeDuck(); }
    });
    // greet once when the duck scrolls into view
    var greeted = false;
    var dio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !greeted) {
          greeted = true;
          setTimeout(speak, 700);
        }
      });
    }, { threshold: 0.5 });
    dio.observe(duck);
  }
})();
