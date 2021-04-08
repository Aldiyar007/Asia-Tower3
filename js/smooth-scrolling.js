$(document).ready(function () {
    $('#smooth-scrolling').on("click load resize", function (e) {
        e.preventDefault();
        var header = $('#header-first').offset().top;
        $('html, body').animate({
            scrollTop: header
        }, 1000);
    });
});
