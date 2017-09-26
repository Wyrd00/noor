var english = document.querySelector('#english');
var arabic = document.querySelector('#arabic');
var hebrew = document.querySelector('#hebrew');

english.addEventListener('click', function () {
  window.location = 'index-eng.html';
});

arabic.addEventListener('click', function () {
  window.location = 'index-arb.html';
});

hebrew.addEventListener('click', function () {
  window.location = 'index-heb.html';
});
