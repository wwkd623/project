$(function(){
    // 메인슬라이드
    $(".slide").slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false
    });
    // 모바일메인슬라이드
    $(".m_slide").slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false
    });

    // 모바일 햄버거버튼, 사이드바, 그림자효과 이벤트
    $(".m_menu_btn").click(function(){
        $("html, body, .m_header, .tab_wrap").addClass("scroll_lock");
        $(".dimmed").fadeIn(300);
        $(".m_sidebar").stop().animate({left: 0});
    })
    $(".dimmed").click(function(){
        $("html, body, .m_header, .tab_wrap").removeClass("scroll_lock");
        $(".dimmed").fadeOut(300);
        $(".m_sidebar").stop().animate({left: "-100%"});
    })

    // 모바일사이드바 아코디언메뉴
    $("ul.m_gnb>li").click(function(){
        $("ul.m_gnb>li>ul.depth2").stop().slideUp();
        $(this).find(".depth2").stop().slideToggle();
    });

    // 메뉴슬라이드
    $(".menu_sl").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2
    });

    // .gnb>li 호버 밑줄 애니메이션
    $(".gnb>li").mouseenter(function(){
        $("nav .gnb_line").css({
            left: ($(this).index() * 100 / 7) + "%",
            opacity: 1
        })
        $(".header_wrap").stop().animate({height: 420},300);
        $("ul.depth2").stop().fadeIn();
    });
    $(".header_wrap").mouseleave(function(){
        $("nav .gnb_line").css({opacity: 0});
        $(".header_wrap").stop().animate({height: 0},300);
        $("ul.depth2").stop().fadeOut(100);
    });

    // ul.menu_tab li.on 클래스 이벤트
    $("ul.menu_tab li").click(function(e){
        e.preventDefault();
        $("ul.menu_tab li").removeClass("on");
        $(this).addClass("on");
    });

    // 하단슬라이더
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        asNavFor: '.slider-for',
        focusOnSelect: false,
        infinite: true
    });
      
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        dots: true,
        infinite: true
    });

    // 위로가기 버튼
    $(".up_btn").click(function(){
        $("html, body").animate({scrollTop: 0},500);
    })
})
