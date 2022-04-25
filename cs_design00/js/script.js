$(function () {

  //ヒーローの高さを100%に調整
  var windowHeight = $(window).height();
  $(".hero").height(windowHeight);

  $(window).resize(function () {
    var windowHeight = $(window).height();
    $(".hero").height(windowHeight);
  });

  //ページ内スクロール
  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  //ページトップへ戻る
  var $pageTop = $('.page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  //ハンバーガーメニュー
  var btnMenu = $('.btn-menu');
  var globalNav = $('.global-nav');

  btnMenu.on('click', function () {
    btnMenu.toggleClass('active');
    globalNav.toggleClass('show');
  });

});

//Swiperの設定
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  autoplay: {
    delay: 4000,
  },
  speed: 500,
  loop: true,
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})