$(document).ready(function () {
    $('.slider').slick({
        // arrows: true,
        // dots: true,
        // adaptiveHeight: true,
        // slidesToShow: 3,
        // slidesToScroll: 3,
        // speed: 800,
        // autoplay: false,
        // autoplaySpeed: 2000,
        // draggable: false,
        // swipe: true,
        // waitForAnumate: true,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             appendArrows: $('.slider-arrows')
        //         }
        //     }, {
        //         breakpoint: 699,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             appendArrows: $('.slider-arrows')
        //         }
        //     }]
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: false,
        adaptiveHeight: true,
        slidesToScroll: 3,
        autoplaySpeed: 2000,
        draggable: false,
        swipe: true,
        speed: 800,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 1371,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
        // speed: 1000,
        // autoplaySpeed: 800
    });
    // $('.slider--two').slick({
    //     arrows: true,
    //     dots: true,
    //     adaptiveHeight: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     speed: 800,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     draggable: false,
    //     swipe: true,
    //     waitForAnumate: true,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 appendArrows: $('.slider-arrows--two')
    //             }
    //         }, {
    //             breakpoint: 699,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 appendArrows: $('.slider-arrows--two')
    //             }
    //         }]
    // });
});