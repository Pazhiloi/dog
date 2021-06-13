$(function () {
 $('.user-nav__button').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
});
  $(".menu__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  window.onscroll = function showHeader() {
    var header = document.querySelector('.header__inner');
    if(window.pageYOffset > 200) {
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
   };
  $('.gallery__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
 prevArrow:'<img class="arrow-up arrow" src="..//images/icons/arrow-up.svg" alt="arrow-up image">',
nextArrow:'<img class="arrow-down arrow" src="..//images/icons/arrow-down.svg" alt="arrow-down image">',
  infinite: false
});
$(".star").rateYo({
    starWidth: "15px",
    normalFill: "#e2e2e2",
    ratedFill: "#e27b3a",
    readOnly: true,
    spacing: "5px"
  });
});