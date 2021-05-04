/* Burger Menu */
const body = document.querySelector('body');
const menuBody = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__burger');
let numOffClicks = 0;

if (menuBurger) {
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
        body.removeAttribute('class');
    }

    menuBurger.addEventListener("click", function () {
        numOffClicks++;
        if (numOffClicks % 2 !== 0) {
            menuBurger.classList.add('active');
            menuBody.classList.add('active');
            document.querySelector('header').classList.add('not-opacity');
            disable();
        } else {
            menuBurger.classList.remove('active');
            menuBody.classList.remove('active');
            document.querySelector('header').classList.remove('not-opacity');
            enable();
        };
    });
}

/* Scroll */
window.addEventListener('scroll', function () {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('.block').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('header').clientHeight < scrollDistance) {
            document.querySelectorAll('.header__link').forEach((el) => {
                if (el.classList.contains('active-page')) {
                    el.classList.remove('active-page');
                }
            });

            document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('active-page');
        }
    });
});

/* Anchor */
const menuLinks = document.querySelectorAll('.link[data-goto]');
if (menuLinks.length > 0) {
    for (let i = 0; i < 5; i++) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", function (e) {
                const menuLink = e.target;
                if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                    const gotoBlock = document.querySelector(menuLink.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight + 20;

                    if (menuBurger.classList.contains('active')) {
                        numOffClicks++;
                        menuBurger.classList.remove('active');
                        menuBody.classList.remove('active');
                        document.querySelector('header').classList.remove('not-opacity');
                        enable();
                    }

                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: 'smooth'
                    });
                    e.preventDefault();
                }
            });
        });
    }
}

/* Form */
"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка соединения. Повторите попытку позже');
                form.classList.remove('_sending');
            }
        } else {
            if (isAlert == 1) {
                alert('Введите обязательные поля!');
            }
        }
    }

    let isAlert = 2;

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    alert('Введите e-mail корректно');
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('phone')) {
                if (phoneTest(input)) {
                    if (isAlert == 0) {
                        alert('Введите телефон корректно');
                    }
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                isAlert = 1;
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    function phoneTest(input) {
        let s = input.value
        if (s.startsWith('+')) {
            alert('Введите число с цифры 8!');
        } else if (s.length < 10) {
            isAlert == 0
        }
        return !/^[0-9]+$/.test(input.value);
    }
});

/* Opacity Header */
window.onscroll = function showHeader() {
    var header = document.querySelector('header');

    if (window.pageYOffset > 140) {
        header.classList.add('active__scroll');
    } else {
        header.classList.remove('active__scroll');
    }
}

/* Copy */
function wpguruLink() {
    var istS = 'Источник:';
    var copyR = '© Asia-Tower.kz';
    var body_element = document.getElementsByTagName('body')[0];
    var choose = window.getSelection();
    var myLink = document.location.href;
    var authorLink = "<br /><br />" + istS + ' ' + "<a href='" + myLink + "'>" + myLink + "</a><br />" + copyR;
    var copytext = choose + authorLink;
    var addDiv = document.createElement('div');
    addDiv.style.position = 'absolute';
    addDiv.style.left = '-99999px';
    body_element.appendChild(addDiv);
    addDiv.innerHTML = copytext;
    choose.selectAllChildren(addDiv);
    window.setTimeout(function () {
        body_element.removeChild(addDiv);
    }, 0);
}
document.oncopy = wpguruLink;