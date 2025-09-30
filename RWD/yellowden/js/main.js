$(function () {
  $(document).click(function(e){
    e.preventDefault();
  });

  // gnb 2단 메뉴
  $("ul.gnb>li").mouseenter(function () {
    $("header").addClass("on");
    $("ul.gnb>li").find("ul.depth2").stop().fadeIn(400);
  });
  $("header").mouseleave(function () {
    $("header").removeClass("on");
    $("ul.gnb>li").find("ul.depth2").stop().fadeOut(100);
  });

  $("ul.list>li").mouseenter(function () {
    $(this).find("p").stop().fadeIn(300);
  });
  $("ul.list>li").mouseleave(function () {
    $(this).find("p").stop().fadeOut(100);
  });

  // 모바일 메뉴슬라이드
  $("ul.m_gnb>li").click(function(){
    $("ul.depth2").stop().slideUp();
    $(this).find("ul.depth2").stop().slideToggle();
  });
  $(".menubtn").click(function(){
    $(".side_bg").fadeIn(200);
    $(".sidebar").animate({right: 0});
    $("body").css("overflow", "hidden");
  });
  $(".closebtn").click(function(){
    $(".side_bg").fadeOut(200);
    $(".sidebar").animate({right: "-100%"});
    $("body").css("overflow", "auto");
  });

  // 메인 슬라이드
  var swiper = new Swiper(".slide", {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 모바일 시그니처 영역
  var swiper = new Swiper(".m_signature", {
    loop: true,
    navigation: {
      nextEl: ".sig_next",
      prevEl: ".sig_prev",
    },
  });

  // 디저트 탭 메뉴 버튼
  let t;
  $(".list_wrap>.dessert-list").hide().eq(0).show();

  $("ul.tab_btn>li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    t = $(this).index();
    $(".list_wrap>.dessert-list").eq(t).fadeIn().siblings().hide();
  });

  // 디저트 탭 메뉴 슬라이드
  var swiper2 = new Swiper(".fi", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2.4,
        spaceBetween: 10,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
        navigation: {
          enabled: false,
        },
      },
      882: {
        slidesPerView: 3.6,
        spaceBetween: 10,
        slidesOffsetBefore: 50,
        slidesOffsetAfter: 50,
        navigation: {
          enabled: false,
        },
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    }
  });
  
  var swiper2 = new Swiper(".cake, .scone, .bread", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 2.4,
        spaceBetween: 10,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
      },
      882: {
        slidesPerView: 3.6,
        spaceBetween: 10,
        slidesOffsetBefore: 50,
        slidesOffsetAfter: 50,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
    }
  });
});
