let slider = $('.slider');
let textLloading = $('.text__loading');
let button = $('.back-to-top');

if (slider.slick) {
    textLloading.text('');
}

$('.user-input').focus(function () {
    $(this).parent().addClass("focus");
}).blur(function () {
    if ($(this).val() === '') {
        $(this).parent().removeClass('focus');
    }
});

function backToTop() {
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 200) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    });

}

backToTop();

/* Parallax */
$(window).scroll(function (e) {
    var s = $(this).scrollTop();
    var w = $(this).outerWidth();
    var h = $('.intro__title').outerWidth();
    var h_b = $('.parallax').outerWidth();
    // var p = s / h * 100;
    var p_b = s / h_b * 100;
    var o = 1 - 1 / 100 * p_b;

    var z_1 = 1 + (w / 10000 * p_b);
    $('.parallax__fog').css('transform', 'scale(' + z_1 + ')');
    $('.parallax__fog').css('opacity', o);

    // var z_2 = 1 + (w / 5000000 * p);
    // $('.parallax__montain_1').css('transform', 'scale(' + z_2 + ')');
});