const body = document.querySelector('body');
let headerBurger = document.querySelector('.header__burger');
let numOffClicks = 0;

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

headerBurger.addEventListener("click", function () {
    numOffClicks++;
    if (numOffClicks % 2 !== 0) {
        document.querySelector('.header__burger').classList.add('active');
        document.querySelector('.header__menu').classList.add('active');
        document.querySelector('header').classList.add('not-opacity');
        disable();
    } else {
        document.querySelector('.header__burger').classList.remove('active');
        document.querySelector('.header__menu').classList.remove('active');
        document.querySelector('header').classList.remove('not-opacity');
        enable();
    };
});