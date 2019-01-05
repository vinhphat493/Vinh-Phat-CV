//Hàm thay đổi kích thước MENU khi scroll
$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 100) {
        $('#myNBar').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#myNBar').removeClass('scrolled-nav');
      } 
      
    }); 
    
  });


  $('.slides').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    asNavFor: '.captions',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(".captions").slick({
    dots:true,
    asNavFor: '.slides',
    infinite: false,
    speed: 200,
    fade: true,
    appendArrows: $('.pagination'),
    prevArrow: '<div class="pagination__button"><img src="img/lhs-arrow.svg" alt=""></div>',
    nextArrow: '<div class="pagination__button"><img src="img/rhs-arrow.svg" alt=""></div>'
  })