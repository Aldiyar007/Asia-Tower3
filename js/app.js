let button = $('.back-to-top');

/* Form */
$('.user-input').focus(function () {
    $(this).parent().addClass("focus");
}).blur(function () {
    if ($(this).val() === '') {
        $(this).parent().removeClass('focus');
    }
});

/* Back to top */
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