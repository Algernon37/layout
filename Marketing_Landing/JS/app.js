document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burgerMenu");
    const nav = document.getElementById("nav");
    const productCardLinks = document.querySelectorAll('.products__cards');

    // При клике на кнопку бургера, добавляем или удаляем класс "active" для меню
    burgerMenu.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    window.onload = function () {
        window.scrollTo(0, 0);
    };

    productCardLinks.forEach(function (card) {
        card.addEventListener('click', function () {
            window.location.href = '../frames/product.html';
        });
    });

    $(document).ready(function () {
        let header = $("#header");
        let burgerImg = $("#burgerImg");
        let intro = $("#intro");
        let introH = intro.height();
        let scrollPos = $(window).scrollTop();
        checkScroll(scrollPos, introH);

        $(window).on("scroll resize", function () {
            introH = intro.height();
            scrollPos = $(this).scrollTop();
            checkScroll(scrollPos, introH);
        });

        function checkScroll(scrollPos, introH) {
            if (scrollPos > introH) {
                header.addClass("fixed");
                burgerImg.addClass("fixedImg")
            } else {
                header.removeClass("fixed");
            }
        }
    });

})

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

