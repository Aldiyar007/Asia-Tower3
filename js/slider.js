$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        adaptiveHeight: true,
        slidesToScroll: 3,
        autoplaySpeed: 2000,
        draggable: false,
        swipe: true,
        speed: 800,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 1706,
                settings: {
                    appendArrows: $('.slider-arrows')
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    arrows: true,
                    slidesToScroll: 2,
                    appendArrows: $('.slider-arrows'),
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 662,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    appendArrows: $('.slider-arrows')
                }
            }
        ]
    });
});