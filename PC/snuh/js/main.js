$(function(){
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 60) {
      $(".logo_wrap").slideUp(100);
    } else {
      $(".logo_wrap").slideDown(100);
    }
  });

  var mainSwiper = new Swiper(".slider", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var newsSwiper = new Swiper(".news", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  if ($(".slider").hasClass("stop")) {
    mainSwiper.autoplay.stop();
    $(".slider .btn_pause").css({ opacity: 0, pointerEvents: "none" });
    $(".slider .btn_play").css({ opacity: 1, pointerEvents: "auto" });
  }
  if ($(".news").hasClass("stop")) {
    newsSwiper.autoplay.stop();
    $(".news_right .btn_pause").css({ opacity: 0, pointerEvents: "none" });
    $(".news_right .btn_play").css({ opacity: 1, pointerEvents: "auto" });
  }

  $(".btn_pause").on("click", function () {
    var targetSwiper = $(this).closest(".slider").length
      ? mainSwiper
      : newsSwiper;
    targetSwiper.autoplay.stop();
    $(this).css({ opacity: 0, pointerEvents: "none" });
    $(this).siblings(".btn_play").css({ opacity: 1, pointerEvents: "auto" });
  });

  $(".btn_play").on("click", function () {
    var targetSwiper = $(this).closest(".slider").length
      ? mainSwiper
      : newsSwiper;
    targetSwiper.autoplay.start();
    $(this).css({ opacity: 0, pointerEvents: "none" });
    $(this).siblings(".btn_pause").css({ opacity: 1, pointerEvents: "auto" });
  });
});