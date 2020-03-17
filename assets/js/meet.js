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


//Team Portraites Animation

$('.svg-portrait').hide();

$('.team_item').hover(
    function() {
        $(this).find('.svg-portrait').show();
    },
    function() {
        $(this).find('.svg-portrait').hide();
    }
);

// Title Animation
$(".letter-jump").on("webkitanimationend mozanimationend animationend", function(){
  $(this).removeClass("animated")
})
$(".letter-jump").hover(function(){
  $(this).addClass("animated");
});

// Animated COGS script

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

    var setupCogs = function(){
        //Clean exisitng cogs on resize
        $(".cogs").empty();
        //Set up dimensions
        var bodyHeight=Math.max($(document).height());
        var winWidth = $(window).width();
        var cogWidthpercent = 37;

        if(winWidth>768){
        var cogDimension = (cogWidthpercent / 100) * winWidth;
        var cogPairs = Math.ceil(bodyHeight/cogDimension);
        
        
        for(var i = 0; i<cogPairs; i++){
            var cogEl = '<svg class="cog" width="50%" height="50%" viewBox="0 0 201 201"><path d="M115.557,1.116c-9.907,-1.488 -19.981,-1.488 -29.889,0l-4.387,29.486c-5.762,1.591 -11.305,3.887 -16.503,6.836l-23.953,-17.747c-8.058,5.953 -15.181,13.076 -21.134,21.134l17.747,23.953c-2.949,5.198 -5.245,10.741 -6.836,16.503l-29.486,4.387c-1.488,9.908 -1.488,19.982 0,29.889l29.486,4.387c1.591,5.762 3.887,11.305 6.836,16.504l-17.747,23.952c5.953,8.058 13.076,15.181 21.134,21.135l23.953,-17.748c5.198,2.949 10.741,5.245 16.503,6.836l4.387,29.486c9.908,1.488 19.982,1.488 29.889,0l4.387,-29.486c5.762,-1.591 11.305,-3.887 16.504,-6.836l23.952,17.748c8.058,-5.954 15.181,-13.077 21.135,-21.135l-17.748,-23.952c2.949,-5.199 5.245,-10.742 6.836,-16.504l29.486,-4.387c1.488,-9.907 1.488,-19.981 0,-29.889l-29.486,-4.387c-1.591,-5.762 -3.887,-11.305 -6.836,-16.503l17.748,-23.953c-5.954,-8.058 -13.077,-15.181 -21.135,-21.134l-23.952,17.747c-5.199,-2.949 -10.742,-5.245 -16.504,-6.836l-4.387,-29.486ZM100.613,70.197c16.786,0 30.415,13.629 30.415,30.416c0,16.786 -13.629,30.415 -30.415,30.415c-16.787,0 -30.416,-13.629 -30.416,-30.415c0,-16.787 13.629,-30.416 30.416,-30.416Z" style="fill:rgba(128,0,0,0.2);"/></svg>';
            var cogOppEl = '<svg class="cog-opp" width="70%" height="70%" viewBox="0 0 262 262"><path d="M182.59,44.688c-8.611,-5.121 -17.939,-8.927 -27.674,-11.291l-15.201,25.643c-5.936,-0.703 -11.936,-0.671 -17.863,0.095l-15.473,-25.481c-9.71,2.468 -18.996,6.373 -27.553,11.585l7.384,28.882c-4.694,3.699 -8.914,7.964 -12.564,12.698l-28.958,-7.077c-5.121,8.611 -8.927,17.938 -11.291,27.674l25.643,15.201c-0.703,5.936 -0.671,11.935 0.095,17.863l-25.481,15.473c2.468,9.71 6.373,18.996 11.585,27.552l28.882,-7.384c3.699,4.695 7.964,8.915 12.698,12.564l-7.077,28.959c8.611,5.121 17.938,8.926 27.674,11.291l15.201,-25.644c5.936,0.704 11.935,0.672 17.863,-0.095l15.473,25.481c9.71,-2.468 18.996,-6.372 27.552,-11.584l-7.384,-28.882c4.695,-3.7 8.915,-7.964 12.564,-12.698l28.959,7.077c5.121,-8.611 8.926,-17.939 11.291,-27.674l-25.644,-15.201c0.704,-5.936 0.672,-11.936 -0.095,-17.863l25.481,-15.473c-2.468,-9.71 -6.372,-18.996 -11.584,-27.553l-28.882,7.384c-3.7,-4.694 -7.964,-8.914 -12.698,-12.564l7.077,-28.958ZM142.656,103.004c15.543,6.342 23.013,24.109 16.671,39.652c-6.341,15.543 -24.109,23.013 -39.651,16.671c-15.543,-6.341 -23.013,-24.109 -16.672,-39.651c6.342,-15.543 24.109,-23.013 39.652,-16.672Z" style="fill:rgba(128,0,0,0.2);"/></svg>';
            
            $('.cogs').append(cogEl);
            $('.cogs').append(cogOppEl);
        }
    }
    };
    setupCogs();
    $(window).resize(function(){
        setupCogs();
    });
    
});
