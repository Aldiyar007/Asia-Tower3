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
        // waitForAnimate: true,
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
    }),
        $('.slider--two').slick({
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
                    breakpoint: 1706,
                    settings: {
                        appendArrows: $('.slider-arrow')
                    }
                },
                {
                    breakpoint: 1020,
                    settings: {
                        arrows: true,
                        slidesToScroll: 2,
                        appendArrows: $('.slider-arrow'),
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
                        appendArrows: $('.slider-arrow')
                    }
                }
            ]
        });
});