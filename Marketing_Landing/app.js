document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burgerMenu");
    const nav = document.getElementById("nav");
    const cardButton = document.getElementById("cartButton");
    const productCardLink = document.getElementById('productCardLink');

    // При клике на кнопку бургера, добавляем или удаляем класс "active" для меню
    burgerMenu.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
    window.onload = function () {
        window.scrollTo(0, 0);
    };

    productCardLink.addEventListener('click', function() {
        window.location.href = '#';
    });

    cardButton.addEventListener("click", function (e) {
        e.stopPropagation();
        window.location.href = '#';
    });
})