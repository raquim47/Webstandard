// 라이트박스
$('.popup__lightgallery').lightGallery({
  autoplay: true,
  pause: 1500,
  progressBar: true
});

// 윈도우 팝업
$('.popup__window').click(function(e){
  e.preventDefault();
  //window.open("파일명", "팝업이름", "옵션설정");
  //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open("popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});

// 레이어 팝업
$('.popup__layer').click(function(e){
  e.preventDefault();
  $('.layer').css('display', 'block');
});
$('.layer .close').click(function(e){
  e.preventDefault();
  $('.layer').css('display', 'none');
});

// 탭메뉴
const $tabList = $('.tab-menu');

$tabList.find('ul ul').hide();
$tabList.find('li.active > ul').show();

function tabMenu(e){
  e.preventDefault();
  const $this = $(this);
  $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}

$tabList.find('ul>li>a').click(tabMenu).focus(tabMenu);
// focus(tabMenu) -> 웹표준 준수

// 배너
$('.ban').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true
});

// 갤러리
$('.gallery__img').slick({
  arrows: false,
  fade: true,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow:1
});
$('.play').click(function(){
  $('.gallery__img').slick('slickPlay');
})
$('.pause').click(function(){
  $('.gallery__img').slick('slickPause');
})
$('.prev').click(function(){
  $('.gallery__img').slick('slickPrev');
})
$('.next').click(function(){
  $('.gallery__img').slick('slickNext');
})
// 버튼을 클릭하면 전체메뉴가 보임
$('.tit .btn').click(function(e){
  e.preventDefault();
  // $("#main__nav").css("display","block");
  //$("#main__nav").show();
  //$("#main__nav").fadeIn();
  //$("#main__nav").slideDown();
  //$("#main__nav").toggle();
  //$("#main__nav").fadeToggle();
  $('#main__nav').slideToggle(200);
  // $('.tit .btn').addClass('on');
  // $('.tit .btn').removeClass('on');
  $(this).toggleClass("on");
});