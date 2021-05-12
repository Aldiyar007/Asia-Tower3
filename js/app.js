'use strict'

/* Burger Menu */
const body = document.querySelector('body');
const menuBody = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__burger');
let numOffClicks = 0;
const header = document.querySelector('header.header');

function disable() {
    const pagePosition = window.scrollY;
    body.classList.add('lock');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
}

function enable() {
    const pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('lock');
    window.scroll({ top: pagePosition, left: 0 });
    body.removeAttribute('class');
}

function addClass() {
    menuBurger.classList.add('active');
    menuBody.classList.add('active');
    header.classList.add('not-opacity');
}

function removeClass() {
    menuBurger.classList.remove('active');
    menuBody.classList.remove('active');
    header.classList.remove('not-opacity');
}

if (menuBurger) {
    menuBurger.addEventListener("click", function () {
        numOffClicks++;
        if (numOffClicks % 2 !== 0) {
            addClass();
            disable();
        } else {
            removeClass();
            enable();
            body.removeAttribute('data-position');
        };
    });
}

/* Scroll */
window.addEventListener('scroll', function () {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('.block').forEach((el, i) => {
        if (el.offsetTop - header.clientHeight < scrollDistance) {
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
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", function (e) {
                const menuLink = e.target;
                if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                    const gotoBlock = document.querySelector(menuLink.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - header.offsetHeight + 20;

                    if (menuBurger) {
                        if (menuBurger.classList.contains('active')) {
                            numOffClicks++;
                            removeClass();
                            enable();
                        }
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

/* Back to top */
let backToTopEL = document.querySelector('.back-to-top');

function backToTop() {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 200) {
            backToTopEL.classList.add('open');
        } else {
            backToTopEL.classList.remove('open');
        }
    });

    const anchors = document.querySelectorAll('.smooth');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').replace('#', '');
            console.log(blockID);

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

};

backToTop();

/* Popup */
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCLoseIcon = document.querySelectorAll('.close-popup');
if (popupCLoseIcon.length > 0) {
    for (let index = 0; index < popupCLoseIcon.length; index++) {
        const el = popupCLoseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        document.querySelector('#dws-form').checked = false;
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.content').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    disable();
    body.style.paddingRight = lockPaddingValue;

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        enable();
        body.style.paddingRight = '0px';
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {

    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }

            return null;
        }
    }

})();

(function () {

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.MatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

/* Form Focus */
function Focus(x) {
    x.parentElement.classList.add('focus');
}

function Blur(x) {
    if (x.value.trim() === '') {
        x.parentElement.classList.remove('focus');
    }
}

/* Form */
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
                document.querySelectorAll('.user-input').reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка соединения. Повторите попытку позже');
                form.classList.remove('_sending');
            }
        } else {
            alert('Введите обязательные поля корректно!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('phone')) {
                if (phoneTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
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
        if (input.value.length <= 10) {
            formAddError(input);
            error++;
        }
        return !/^[0-9]+$/.test(input.value);
    }
});


/* Opacity Header */
window.onscroll = function showHeader() {
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