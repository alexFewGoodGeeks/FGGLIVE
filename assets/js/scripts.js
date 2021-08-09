// document.addEventListener( 'DOMContentLoaded', function () {
// 	new Splide( '#image-slider', {
//         perPage    : 3,
//         gap: 1
//     } ).mount();
// } );

// $(function() {

//   $('.owl-carousel').find('.owl-nav').removeClass('disabled');
//   $('.owl-carousel').on('changed.owl.carousel', function(event) {
//     $(this).find('.owl-nav').removeClass('disabled');
//   });
  
//     // Owl Carousel
//     var owlProjects = $("#owl-projects");
//     owlProjects.owlCarousel({
//       items:6,
//       margin: 10,
//       // navText: ["<img src='../assets/images/left-icon.png>", "<img src='../assets/images/right-icon.png>"],
//       // navClass: ['owl-prev', 'owl-next'],
//       loop: true,
//       nav: true
//     });
//   });


  // $('#our-projects').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // });

  $(document).ready(function() {
    $('#our-projects').slick({
      centerMode: true,
      //centerPadding: '90px',
      // dots: true,
      /* Just changed this to get the bottom dots navigation */
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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

