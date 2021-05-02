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