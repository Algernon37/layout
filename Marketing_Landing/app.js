document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burgerMenu");
    const nav = document.getElementById("nav");

    // При клике на кнопку бургера, добавляем или удаляем класс "active" для меню
    burgerMenu.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
    window.onload = function() {
        window.scrollTo(0, 0);
    };
})