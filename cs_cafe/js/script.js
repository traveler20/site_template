$(function () {

  //ハンバーガーメニュー
  $('#js-btnMenu').on('click', function () {
    $(this).toggleClass('active');
    $('.gnav').toggleClass('show');
  });

})