$(function() {

// Animate loader off screen
$(window).load(function() {  

    $("#cogs-loader").css({
        opacity : '0',
        transition: 'all 0.2s ease-out'
    });
    
     $('.back-wall.left-wall').css({
        transform: 'translate(-50%)',
        transition: 'all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)'
    });
     $('.back-wall.right-wall').css({
        transform: 'translate(50%)',
        transition: 'all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)'
    });
    $('#loader-circular').css({
        opacity : '0',
        transition: 'all 0.2s ease-out'
        });
    
    $("#loader-container").css('visibility', 'hidden');
});

// Direct link for sharing available job positions (done with '#' sign)
if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    $('#'+hash).modal('show');    
}

// Title Animation
$(".letter-jump").on("webkitanimationend mozanimationend animationend", function(){
  $(this).removeClass("animated")  
})

$(".letter-jump").hover(function(){
  $(this).addClass("animated");        
});


// Rotate COGS

$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.cog').css({
    'transform': 'rotate(' + wScroll / 5 + 'deg)'
  });

  $('.cog-opp').css({
    'transform': 'rotate(-' + wScroll / 5 + 'deg)'
  });

});


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".scroll-top").fadeIn('1000', "easeInOutExpo");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".scroll-top").fadeOut('1000', "easeInOutExpo");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.overlay-menu ul li a,.scroll-top a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


// WOW.js initialise
// WOW.js uses animate.css to animate/reveal elements.
// Browse the list of animation effects available here-> https://daneden.github.io/animate.css/

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();


// jQuery Parallax. More info here-> https://github.com/IanLunn/jQuery-Parallax
    // apply parallax effect only when body has the ".parallax-page" class
    if ($('body').hasClass('parallax-page')) {
        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

        $('#parallax-slide').parallax("50%", 0.1);
        $('#products').parallax("50%", 0.1);
        $('#portfolio').parallax("50%", 0.1);
        $('#page-aboutus').parallax("50%", 0.1);
    }


// Closes the Responsive Menu on Menu Item Click
$('.overlay-menu ul li a').click(function() {
    $('.button_container:visible').click();
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Navigation show/hide
$('.toggle').click(function() {
    if ($('#overlay.open')) {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    }
});


// Client testimonials
    var owl = $(".client-testimonials");

    owl.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });


// Client Slider Carousel

    var owl = $(".client-slider");

    owl.owlCarousel({
        items: 4, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 2], //1 item between 480 and 0
        pagination: false, // Show pagination
        navigation: false // Show navigation
    });


// Recent Project Carousel

    var owl = $(".recent-project-carousel");

    owl.owlCarousel({
        items: 4, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        pagination: true, // Show pagination
        navigation: false, // Show navigation
        autoPlay: 2000,
        stopOnHover: true,
    });


    // Custom Navigation Events
    $(".btn-next").on('click', function() {
        owl.trigger('owl.next');
    })
    $(".btn-prev").on('click', function() {
        owl.trigger('owl.prev');
    })


    // IGOR'S CUSTOM CAROUSELL
// Tech icons' Slider Carousel

    var owl = $(".tech-custom-carousel");

    owl.owlCarousel({
        items: 6, //5 items above 1000px browser width
        itemsDesktop: [1024, 5], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 4], // betweem 900px and 601px
        itemsTablet: [600, 3], //2 items between 600 and 480
        itemsMobile: [479, 2], //1 item between 480 and 0
        pagination: false, // Show pagination
        navigation: false, // Show navigation
        autoPlay: 2000,
        stopOnHover: true
    });
    
    var owl = $(".tech-custom-carousel2");

    owl.owlCarousel({
        items: 4, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 4], // betweem 900px and 601px
        itemsTablet: [600, 3], //2 items between 600 and 480
        itemsMobile: [479, 2], //1 item between 480 and 0
        pagination: false, // Show pagination
        navigation: false, // Show navigation
        autoPlay: 2000,
        stopOnHover: true
    });


    // Custom Navigation Events
    $(".btn-next").on('click', function() {
        owl.trigger('owl.next');
    })
    $(".btn-prev").on('click', function() {
        owl.trigger('owl.prev');
    })

    // Custom Navigation Events
    $(".btn-next").on('click', function() {
        owl.trigger('owl.next');
    })
    $(".btn-prev").on('click', function() {
        owl.trigger('owl.prev');
    })

// Counter
    $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });



// Carousel Slider
    $('.carousel').carousel({
            interval: 8000 //changes the speed
    })

// YouTube Player
    $(".player").mb_YTPlayer();

    $('#video-play').click(function(event) {
        event.preventDefault();
        if ($(this).hasClass('fa-play')) {
            $('.player').playYTP();
        } else {
            $('.player').pauseYTP();
        }
        $(this).toggleClass('fa-play fa-pause');
        return false;
    });

    $('#video-volume').click(function(event) {
        event.preventDefault();
        $('.player').toggleVolume();
        $(this).toggleClass('fa-volume-off fa-volume-up');
        return false;
    });


// HTML5 Player

    var vid = $("#html5-video").get(0);

    $('#html5-video-play').click(function(event) {
        event.preventDefault();
        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }
        $(this).toggleClass('fa-play fa-pause');
        return false;
    });

    $('#html5-video-volume').click(function(event) {
        event.preventDefault();
        if (vid.muted) {
            vid.muted = false;
        } else {
            vid.muted = true;
        }
        $(this).toggleClass('fa-volume-off fa-volume-up');
        return false;
    });



// Google map API

    //set your google maps parameters
    /*var latitude = 60.237454,
        longitude = 24.820995,
        map_zoom = 14;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var marker_url = (is_internetExplorer11) ? 'assets/images/cd-icon-location.png' : 'assets/images/cd-icon-location.svg';

    //define the basic color of your map, plus a value for saturation and brightness
    var main_color = '#2d313f',
        saturation_value = -90,
        brightness_value = 2;

    //we define here the style of the map
    var style = [{
            //set saturation for the labels on the map
            elementType: "labels",
            stylers: [{
                saturation: saturation_value
            }]
        }, { //poi stands for point of interest - don't show these lables on the map 
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            //don't show highways lables on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [{
                visibility: "off"
            }]
        }, {
            //don't show local road lables on the map
            featureType: "road.local",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            //don't show arterial road lables on the map
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            //don't show road lables on the map
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                visibility: "off"
            }]
        },
        //style different elements on the map
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi.sport_complex",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "transit.station",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "landscape",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]

        }, {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }
    ];

    //set google map options
    var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style,
        }
        //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map                
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        visible: true,
        icon: marker_url,
    });

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map 
        var controlUIzoomIn = document.getElementById('cd-zoom-in'),
            controlUIzoomOut = document.getElementById('cd-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom() - 1)
        });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
*/



// Lightbox
    $('.popup-gallery').magnificPopup({
        delegate: '.full-project a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Hallooou</small>';
            }
        }
    });




// Contact form
    // validate contact form on keyup and submit
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: true
            },
            email: {
                required: true,
                minlength: 6,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 15
            },
            message: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Minimum 2 characters",
                lettersonly: "Only letters please!"
            },
            email: {
                required: "Please enter your email address",
                minlength: "Minimum 6 characters",
                email: "That's an invalid email"
            },
            phone: {
                required: "Please enter your phone number",
                digits: "Only digits (no spaces)",
                minlength: "Minimum 10 characters",
                maxlength: "Maximum 15 characters"
            },
            message: {
                required: "Please enter your message",
                minlength: "Minimum 6 characters"
            }
        },
        success: function(label) {
            label.addClass("valid").text("Perfect!");
        },
        submitHandler: function(element) {

            var ajaxform = $(element),
                url = ajaxform.attr('action'),
                type = ajaxform.attr('method'),
                data = {};

            $(ajaxform).find('[name="submit"]').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Sending...');


            ajaxform.find('[name]').each(function(index, value) {
                var field = $(this),
                    name = field.attr('name'),
                    value = field.val();

                data[name] = value;

            });

            $.ajax({
                url: url,
                type: type,
                data: data,
                success: function(response) {
                    if (response.type == 'success') {
                        $("#contactForm").before("<div class='alert alert-success' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + response.text + "</div>");
                        $(ajaxform).each(function() {
                            this.reset();
                            $(this).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send');
                        }).find('.valid').each(function() {
                            $(this).remove('label.valid');
                        })
                    } else if (response.type == 'error') {
                        $("#contactForm").before("<div class='alert alert-danger' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + response.text + "</div>");
                        $(ajaxform).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send');
                    }
                }
            });

            return false;
        }
    });
    
    var setupCogs = function(){
        $(".cogs").empty();
        var bodyHeight=Math.max($(document).height());
        var winWidth = $(window).width();
        var cogWidthpercent = 37;

        if(winWidth>768){
        var cogDimension = (cogWidthpercent / 100) * winWidth;
        var cogPairs = Math.ceil(bodyHeight/cogDimension)-1;
        
        var cogEl = '<svg class="cog" width="50%" height="50%" viewBox="0 0 201 201"><path d="M115.557,1.116c-9.907,-1.488 -19.981,-1.488 -29.889,0l-4.387,29.486c-5.762,1.591 -11.305,3.887 -16.503,6.836l-23.953,-17.747c-8.058,5.953 -15.181,13.076 -21.134,21.134l17.747,23.953c-2.949,5.198 -5.245,10.741 -6.836,16.503l-29.486,4.387c-1.488,9.908 -1.488,19.982 0,29.889l29.486,4.387c1.591,5.762 3.887,11.305 6.836,16.504l-17.747,23.952c5.953,8.058 13.076,15.181 21.134,21.135l23.953,-17.748c5.198,2.949 10.741,5.245 16.503,6.836l4.387,29.486c9.908,1.488 19.982,1.488 29.889,0l4.387,-29.486c5.762,-1.591 11.305,-3.887 16.504,-6.836l23.952,17.748c8.058,-5.954 15.181,-13.077 21.135,-21.135l-17.748,-23.952c2.949,-5.199 5.245,-10.742 6.836,-16.504l29.486,-4.387c1.488,-9.907 1.488,-19.981 0,-29.889l-29.486,-4.387c-1.591,-5.762 -3.887,-11.305 -6.836,-16.503l17.748,-23.953c-5.954,-8.058 -13.077,-15.181 -21.135,-21.134l-23.952,17.747c-5.199,-2.949 -10.742,-5.245 -16.504,-6.836l-4.387,-29.486ZM100.613,70.197c16.786,0 30.415,13.629 30.415,30.416c0,16.786 -13.629,30.415 -30.415,30.415c-16.787,0 -30.416,-13.629 -30.416,-30.415c0,-16.787 13.629,-30.416 30.416,-30.416Z" style="fill:rgba(128,0,0,0.2);"/></svg>';
        var cogOppEl = '<svg class="cog-opp" width="70%" height="70%" viewBox="0 0 262 262"><path d="M182.59,44.688c-8.611,-5.121 -17.939,-8.927 -27.674,-11.291l-15.201,25.643c-5.936,-0.703 -11.936,-0.671 -17.863,0.095l-15.473,-25.481c-9.71,2.468 -18.996,6.373 -27.553,11.585l7.384,28.882c-4.694,3.699 -8.914,7.964 -12.564,12.698l-28.958,-7.077c-5.121,8.611 -8.927,17.938 -11.291,27.674l25.643,15.201c-0.703,5.936 -0.671,11.935 0.095,17.863l-25.481,15.473c2.468,9.71 6.373,18.996 11.585,27.552l28.882,-7.384c3.699,4.695 7.964,8.915 12.698,12.564l-7.077,28.959c8.611,5.121 17.938,8.926 27.674,11.291l15.201,-25.644c5.936,0.704 11.935,0.672 17.863,-0.095l15.473,25.481c9.71,-2.468 18.996,-6.372 27.552,-11.584l-7.384,-28.882c4.695,-3.7 8.915,-7.964 12.564,-12.698l28.959,7.077c5.121,-8.611 8.926,-17.939 11.291,-27.674l-25.644,-15.201c0.704,-5.936 0.672,-11.936 -0.095,-17.863l25.481,-15.473c-2.468,-9.71 -6.372,-18.996 -11.584,-27.553l-28.882,7.384c-3.7,-4.694 -7.964,-8.914 -12.698,-12.564l7.077,-28.958ZM142.656,103.004c15.543,6.342 23.013,24.109 16.671,39.652c-6.341,15.543 -24.109,23.013 -39.651,16.671c-15.543,-6.341 -23.013,-24.109 -16.672,-39.651c6.342,-15.543 24.109,-23.013 39.652,-16.672Z" style="fill:rgba(128,0,0,0.2);"/></svg>';
        
        
        for(var i = 0; i<2; i++){
            $('.cogs').append(cogEl);
            $('.cogs').append(cogOppEl);
        }
    }
    };
    setupCogs();
    $(window).resize(function(){
        setupCogs();
    });

    //Help bootstrap modal disappear if page request comes with id in URL
    if (window.location.href.indexOf('?jump=contact') != -1) {
        $("#overlay .overlay-menu ul li a[href='#contact']").click();
        $(".button_container").click();
    }

    
});
