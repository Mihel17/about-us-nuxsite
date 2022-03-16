console.log('hi from slider')

$(document).ready(() => {
  $('.about-promo__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    centerPadding: '60px',
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 800,
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
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1918,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});


