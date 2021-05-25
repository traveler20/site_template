$(function () {
  var navToggle = $("#header-nav-toggle");
  var headerNav = $("#header-nav");
  navToggle.on("click", function () {
    if (navToggle.hasClass("active")) {
      navToggle.removeClass("active");
      headerNav.removeClass("active");
    } else {
      navToggle.addClass("active");
      headerNav.addClass("active");
    }
  });

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
