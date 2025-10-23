$(function(){
  $(".fixed_chat button.close").click(function(){
    $(".fixed_chat").hide();
  });

  $(".menu_btn").click(function(){
    $(".side_bar, .overlay").addClass("on");
    $("body").css({overflow: "hidden"});
  });

  $(".home_btn, .side_close, .overlay").click(function(){
    $(".side_bar, .overlay").removeClass("on");
    $("body").css({overflow: ""});
  });

  var swiper = new Swiper(".slide", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  $(".btn_wrap .play").hide();

  $(".btn_wrap .pause").click(function(){
    swiper.autoplay.stop();
    $(this).hide();
    $(".btn_wrap .play").show();
  });

  $(".btn_wrap .play").click(function(){
    swiper.autoplay.start();
    $(this).hide();
    $(".btn_wrap .pause").show();
  });

  $(".cor button").click(function(){
    $(this).toggleClass("on");
    $(".cor .chat").toggle();
  });

  $(".prev_btn").click(function(){
    if (document.referrer === "") {
      window.location.href = "index.html";
    } else {
      history.back();
    }
  });

  $(".check label input").click(function(){
    $(".check label").toggleClass("checked");
  });
});
