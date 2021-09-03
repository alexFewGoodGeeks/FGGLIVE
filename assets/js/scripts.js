$(document).ready(function () {

  
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.text-box-animate').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('box-left-in');
        }
    });
});





  setTimeout(function() {
    $(".slick-list").addClass("fix-width");
  }, 1000);

  $('#our-projects').slick({
    //centerMode: true,
    // centerPadding: '90px',
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


// Project Slider Boxes
$(".project-data-item").click(function() {
  $(".project-data-item").removeClass("active");
  $(this).addClass("active");
    var currentProjectId = $(this).data('project-id');

    $(".project-item-wrapper").addClass("hide");
  
    $(".project-item-wrapper[data-project-item-id='"+currentProjectId+"']")
      .removeClass("hide")
      .addClass("sliderSlideDown")
});


// Services Boxes
$(".services-section-1").click(function(){
  var dataSectionId =  $(this).data('section-id');
  console.log(dataSectionId);

  $(".services-section-11").addClass("fixed-height");
  $(".services-box").css("margin-top", "-525px");

  $(".services-box").addClass("hide");
  $(".services-section").removeClass("hide");
  
  $(".services-box[data-section-item-id='"+dataSectionId+"']")
    .removeClass("hide")
    .addClass("sliderSlideDown")
});


