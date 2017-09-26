var faq = document.querySelector('#FAQ');
var tools = document.querySelector('#tools');
var videos = document.querySelector('#videos');
var articles = document.querySelector('#articles');
var newContent = document.querySelector('#new');
var home = document.querySelector('#home');
var logo = document.querySelector('#logo');
var login = document.querySelector('#login');
var search = document.querySelector('#search');
var searchTools = document.querySelector('#search-tools');
var searchVideos = document.querySelector('#search-videos');
var searchArticles = document.querySelector('#search-articles');
var searchAll = document.querySelector('#search-all');

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

search.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    window.location = 'resultsAll.html'
  }
});

searchAll.addEventListener('click', function () {
  window.location = 'resultsAll.html'
});

searchTools.addEventListener('click', function () {
  window.location = 'resultsEquipments.html'
});

searchVideos.addEventListener('click', function () {
  window.location = 'resultsVideos.html'
});

searchArticles.addEventListener('click', function () {
  window.location = 'resultsArticles.html'
});
