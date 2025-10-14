$(function () {
  let i = 0;
  setInterval(function () {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }
    $("ul.mini_card>li").hide();
    $("ul.mini_card>li").eq(i).show();
  }, 3000);

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 138) {
      $(".header_fixed").slideDown(100);
    } else {
      $(".header_fixed").slideUp(100);
    }
  });

  var thumbSwiper = new Swiper(".thumb-swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    slidesPerView: 10, // 보여줄 썸네일 개수
    freeMode: true,
    watchSlidesProgress: true, // 메인과 동기화
  });

  var mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    thumbs: {
      swiper: thumbSwiper, // 썸네일과 연결
    },
  });

  $(".card").each(function () {
    var $this = $(this);

    new Swiper(this, {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: $this.next(".swiper-button-next")[0],
        prevEl: $this.nextAll(".swiper-button-prev")[0],
      },
      on: {
        slideChange: function () {
          var $next = $($this.next(".swiper-button-next")[0]);
          var $prev = $($this.nextAll(".swiper-button-prev")[0]);

          $prev.css("opacity", this.isBeginning ? 0 : 1);
          $next.css("opacity", this.isEnd ? 0 : 1);
        },
      },
    });
  });

  $(".banner").each(function () {
    var $this = $(this);

    new Swiper(this, {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: $this.next(".swiper-button-next")[0],
        prevEl: $this.nextAll(".swiper-button-prev")[0],
      },
    });
  });

  $(".best").each(function () {
    var $this = $(this);

    new Swiper(this, {
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        nextEl: $this.next(".swiper-button-next")[0],
        prevEl: $this.nextAll(".swiper-button-prev")[0],
      },
      on: {
        slideChange: function () {
          var $next = $($this.next(".swiper-button-next")[0]);
          var $prev = $($this.nextAll(".swiper-button-prev")[0]);

          $prev.css("opacity", this.isBeginning ? 0 : 1);
          $next.css("opacity", this.isEnd ? 0 : 1);
        },
      },
    });
  });

  $("ul.ft_nav>li.familysite").mouseenter(function(){
    $(this).find("ul.depth2").stop().fadeIn(100);
  });
  $("ul.ft_nav>li.familysite").mouseleave(function(){
    $(this).find("ul.depth2").stop().fadeOut(100);
  });
});