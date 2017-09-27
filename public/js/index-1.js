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
  window.location = './public/FAQ.html';
});

tools.addEventListener('click', function () {
  window.location = './public/categoryEquipments.html'
});

videos.addEventListener('click', function () {
  window.location = './public/categoryVideos.html'
});

articles.addEventListener('click', function () {
  window.location = './public/categoryArticles.html'
});

newContent.addEventListener('click', function () {
  window.location = './public/new.html'
});

home.addEventListener('click', function () {
  window.location = './public/index-arb.html'
});

logo.addEventListener('click', function () {
  window.location = './public/index-arb.html'
});

login.addEventListener('click', function () {
  window.location = './public/login.html'
});

search.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    window.location = './public/resultsAll.html'
  }
});

searchAll.addEventListener('click', function () {
  window.location = './public/resultsAll.html'
});

searchTools.addEventListener('click', function () {
  window.location = './public/resultsEquipments.html'
});

searchVideos.addEventListener('click', function () {
  window.location = './public/resultsVideos.html'
});

searchArticles.addEventListener('click', function () {
  window.location = './public/resultsArticles.html'
});
