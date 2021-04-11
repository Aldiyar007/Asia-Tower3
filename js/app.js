let textLoading = document.querySelector('.text__loading');
let slider = document.querySelector('.slider');

if (!slider.classList.contains('slick-initialized')) {
    slider.classList.add('finish');
}

if (slider.classList.contains('finish')) {
    textLoading.innerHTML = "Ваш интернет слабый, слайдер загружается, подождите!";
}