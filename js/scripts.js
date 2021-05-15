(function($) {

    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#mainNav a").addClass("colorize");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#mainNav a").removeClass("colorize");
        }
    };
    navbarCollapse();
    $(window).on('scroll', navbarCollapse);

})(jQuery);

$(document).ready(function() {
    $('.responsive').slick({
        arrows: false,
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

    $('.left').click(function() {
        $('.responsive').slick('slickPrev');
    })

    $('.right').click(function() {
        $('.responsive').slick('slickNext');
    })
});