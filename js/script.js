$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  });
//   =======banner part end =========
//   =======about part start =========
new VenoBox({
    selector: ".venobox"
});
//   =======about part end =========
// ======testimonial part start =====
$('.slider_item').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ======testimonial part end =====
// =======counter up part start ===========
$('.counter').counterUp();
// =======counter up part end ===========
// =========logo slider part start =========
$('.logo_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid fa-chevron-left prevarrow"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:'50px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:'50px',
      }
    }
  ]
});
// =========logo slider part end =========
// =========pixed menu part ========
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('#main_menu').addClass('fix_menu')
  } else{
      $('#main_menu').removeClass('fix_menu')
  }
});
// =========pixed menu part ========