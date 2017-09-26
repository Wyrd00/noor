var english = document.querySelector('#english');
var arabic = document.querySelector('#arabic');
var hebrew = document.querySelector('#hebrew');
var faq = document.querySelector('#FAQ');
var tools = document.querySelector('#tools');
var videos = document.querySelector('#videos');
var articles = document.querySelector('#articles');
var newContent = document.querySelector('#new');
var home = document.querySelector('#home');
var logo = document.querySelector('#logo');
var login = document.querySelector('#login');

english.addEventListener('click', function () {
  window.location = 'index-eng.html';
});

arabic.addEventListener('click', function () {
  window.location = 'index-arb.html';
});

hebrew.addEventListener('click', function () {
  window.location = 'index-heb.html';
});

faq.addEventListener('click', function () {
  window.location = 'FAQ.html';
});

tools.addEventListener('click', function () {
  window.location = 'categoryEquipments.html'
});

videos.addEventListener('click', function () {
  window.location = 'categoryVideos.html'
});

articles.addEventListener('click', function () {
  window.location = 'categoryArticles.html'
});

newContent.addEventListener('click', function () {
  window.location = 'new.html'
});

home.addEventListener('click', function () {
  window.location = 'index-arb.html'
});

logo.addEventListener('click', function () {
  window.location = 'index-arb.html'
});

login.addEventListener('click', function () {
  window.location = 'login.html'
});
