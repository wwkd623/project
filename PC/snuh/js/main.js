$(function(){
  $(document).click(function(e){
    e.preventDefault();
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 60) {
      $(".logo_wrap").slideUp(100);
    } else {
      $(".logo_wrap").slideDown(100);
    }
  });

  let $prevDepth = null;

  $("ul.gnb>li").mouseenter(
    function () {
      $("ul.gnb>li").find(".depth2").removeClass("on");
      $(this).find(".depth2").addClass("on");
    },
    function () {
      const $currentDepth = $(this).find(".depth2");

      if ($prevDepth && $prevDepth[0] !== $currentDepth[0]) {
        $prevDepth.css("transition", "none").removeClass("on");
        $currentDepth.css("transition", "none").addClass("on");

        setTimeout(() => {
          $(".depth2").css("transition", "height 0.3s ease-in-out");
        }, 10);
      } else {
        $currentDepth.addClass("on");
      }

      $prevDepth = $currentDepth;
    },
    function () {
      const $currentDepth = $(this).find(".depth2");
      $currentDepth.removeClass("on");
      $prevDepth = null;
    }
  );

  $(function () {
    const $gnb = $(".gnb");
    $gnb.append('<span class="gnb_line"></span>');
    const $line = $gnb.find(".gnb_line");

    $(".gnb>li").on("mouseenter", function () {
      const left = $(this).position().left;
      const width = $(this).outerWidth();
      $line.css({ left, width, opacity: 1 });
    });

    $("header").on("mouseleave", function () {
      $line.css({ opacity: 0 });
    });
  });

  $("header").mouseleave(function(){
    $("ul.gnb>li").find(".depth2").removeClass("on");
  });

  var mainSwiper = new Swiper(".slider", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1800,
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

  $("ul.family>li").click(function(){
    $("ul.family>li").hide();
    $("button.close").show();
    $(".family_list").addClass("on");
  });
  $("button.close").click(function(){
    $("button.close").hide();
    $("ul.family>li").show();
    $(".family_list").removeClass("on");
  });
});