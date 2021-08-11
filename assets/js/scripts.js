$(document).ready(function () {

  

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


// Project Boxes
$("#project-11").click(function () {
  console.log("click");
  $(".project-1").slideToggle("slow");
  
  $("#project-1").css("display", "block");
})

$("#project-22").click(function () {
  console.log("click");
  $(".project-2").slideToggle("slow");
  $("#project-2").css("display", "block");
})

$("#project-33").click(function () {
  console.log("click");
  $(".project-3").slideToggle("slow");
  $("#project-3").css("display", "block");
})

