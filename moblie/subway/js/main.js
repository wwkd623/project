$(function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    // ↓ 주석 처리된 요소는 포함하지 않음
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });

  $('.menu_slide').slick({
    autoplay: true,
    slidesToShow: 2,
    arrows: false,
    dots: true
  });

  // 아코디언메뉴
  $(".m_side_wrap .m_gnb>ul>li>a").click(function(){
    $(this).toggleClass("on")
    $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
    $(this).parent().siblings().find("a").removeClass("on");
  })

  // 햄버거버튼 누르면 모바일 더보기 옆에서 슬라이드인 하기
  $(".m_all_btn").click(function(){
    $(".cover").fadeIn();
    $(".m_side_wrap").animate({"left": 0},300);
  })
  // 클로즈 버튼으로 닫기
  $(".m_close").click(function(){
    $(".cover").fadeOut();
    $(".m_side_wrap").animate({"left": "-100%"},300);
  })

  // 텝바 아이콘 중에 li를 클릭하면 on class추가
  $(".tab_ul li").click(function(){
    $(".tab_ul li").removeClass("on");
    $(this).addClass("on");
  })

  // 팝업창 스크립트
  $('.popup .close label, #today_close').click(function(){
    // setcookie함수 호출 후 팝업창은 닫음(숨김)
    if($('#today_close').is(':checked')){
      setCookie('subway', 'today', 1);
      $('.popup').hide();
    }else{
      $('.popup').hide();
    }
  })
  // 닫기버튼
  $('.popup .close .txt_btn').click(function(){
    $('.popup').hide();
  })

  // 쿠키정보 확인해서 쿠키 정보내역이 있으면 팝업 숨김, 아니면 재노출 가능
  if(GetCookie('subway')=='today'){
    $('.popup').hide();
  }else{
    $('.popup').show();
  }


  // GetCookie 쿠키 정보를 가져오는 명령
			function GetCookie(name){
				var value=null, search=name+"=";
				if(document.cookie.length > 0){
					var offset=document.cookie.indexOf(search);
					if(offset != -1){
						offset+=search.length;
						var end=document.cookie.indexOf(";", offset);
						if(end == -1) end=document.cookie.length;
						value=unescape(document.cookie.substring(offset, end));
					}
				} return value;
			}
			// SetCookie 쿠키 정보를 저장하는 함수
			function setCookie(name, value, expiredays){
				var days=10;
				if(days){
					var date=new Date(); 
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires="; expires="+date.toGMTString();
				}else{
					var expires=""; 
				}
				document.cookie=name+"="+value+expires+"; path=/";
			}
});