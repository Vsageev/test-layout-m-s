(function($) {
    var $window = $(window);


    $(".button-nav").hide();

    var navbarCollapse = function() {
        var windowsize = $window.width();
        if (windowsize < 800) {
            $(".navbar-toggler").show();
            $(".navbar-nav").hide();
        } else {
            $(".navbar-toggler").hide();
            $(".button-nav").hide();
            $(".navbar-nav").show();
        }
    };

    var navbarScroll = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
            $("#mainNav a").addClass("colorize");

        } else {
            $("#mainNav").removeClass("navbar-scrolled");
            $("#mainNav a").removeClass("colorize");
        }
    };
    navbarScroll();
    navbarCollapse();
    $(window).on('scroll', navbarScroll);
    $(window).resize(navbarCollapse);

})(jQuery);


$(document).ready(function() {


    $('.responsive-slider').slick({
        // arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
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