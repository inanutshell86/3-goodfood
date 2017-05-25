// bxSlider settings
$('.slider__list').bxSlider({
  auto: 'true',
  pause: 5000
});

// Navigation toggle
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('#menu');
var mainContent = document.querySelector('.main-content');

navToggle.addEventListener('click', function(e) {
  navMain.classList.toggle('main-nav--open');
  e.preventDefault();
});
