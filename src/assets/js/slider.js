console.log('hi from slider')

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.about-promo__slider'
});

$(document).ready(() => {
  $('.about-promo__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    centerPadding: '60px',
    focusOnSelect: true,
    asNavFor: '.slider-for',
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // до 768пх 1 колонка
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1440, // до 1440пх 2 колонки
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1918,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});


