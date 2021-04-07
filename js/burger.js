document.querySelector('.header__burger').addEventListener("click", function (event) {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('header').classList.toggle('not-opacity');
    const body = document.querySelector('body');
    disable();
    enable();

    function disable() {
        let pagePosition = window.scrollY;
        body.classList.add('lock');
        body.dataset.position = pagePosition;
        body.style.top = -pagePosition + 'px';
    }

    function enable() {
        let pagePosition = parseInt(body.dataset.position, 10);
        body.style.top = 'auto';
        body.classList.remove('lock');
        window.scroll({ top: pagePosition, left: 0 });
        body.removeAttribute('data-position');
    }
});