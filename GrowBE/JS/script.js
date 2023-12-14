document.addEventListener("DOMContentLoaded", function() {
    function addReadMoreFunctionality(maxLength, ellipsis, selector) {
        const elements = document.querySelectorAll(selector);
      
        elements.forEach(textElement => {
          const fullText = textElement.textContent;
      
          if (fullText.length > maxLength) {
            const truncatedText = fullText.substring(0, maxLength) + ellipsis;
      
            const readMoreLink = document.createElement("a");
            readMoreLink.href = "#";
            readMoreLink.textContent = "Read More...";
            readMoreLink.style.color = "black";
      
            readMoreLink.addEventListener("click", function (event) {
              event.preventDefault();
              textElement.textContent = fullText;
              readMoreLink.style.display = "none";
            });
      
            const readMoreWrapper = document.createElement("div");
            readMoreWrapper.appendChild(readMoreLink);
    
            textElement.textContent = truncatedText;
            textElement.insertAdjacentElement("afterend", readMoreWrapper);
          }
        });
    }
    function setupBurgerMenu() {
        const nav = document.getElementById("nav");
        burgerMenu.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }
    addReadMoreFunctionality(150, " ...", ".features__text");
    setupBurgerMenu();
 

    $(document).ready(function(){
        let slider = $('.slider').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 700,
            easing: 'easing',
            infinite: true,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            draggable: true,
            swipe: true,
            touchThreshold: 5,
            touchMove: true,
            waitForAnimate: true,
            centerMode: true,
            variableWidth: true
        });
    
        $('.slider__item').on('click', function() {
            let index = $(this).data('slick-index');
            slider.slick('slickGoTo', index);
        });
    });

    $(document).ready(function(){
        let slider__news = $('.slider__news').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            easing: 'easing',
            infinite: true,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            draggable: true,
            swipe: true,
            touchThreshold: 5,
            touchMove: true,
            waitForAnimate: true,
            centerMode: true,
            variableWidth: true
        });
        $('.slider-item').on('click', function() {
            let index__news = $(this).data('slick-index');
            slider__news.slick('slickGoTo', index__news);
        });
    });

    $(document).ready(function() {

        // Fixed Header
        let header = $("#header");
        let burgerImg = $("#burgerImg");
        let pageMainBlock = $("#pageMainBlock");
        let pageMainBlockH = pageMainBlock.height();
        let scrollPos = $(window).scrollTop();
        checkScroll(scrollPos, pageMainBlockH);

        $(window).on("scroll resize",function(){
            pageMainBlockH = pageMainBlock.height();
            scrollPos = $(this).scrollTop();
            checkScroll(scrollPos, pageMainBlockH);
        });

        function checkScroll(scrollPos, pageMainBlockH){
            if(scrollPos > pageMainBlockH){
                header.addClass("fixed");
                burgerImg.addClass("fixedImg")
            } else {
                header.removeClass("fixed");
            }
        }

        // Smooth scroll
        $("[data-scroll]").on("click", function(event){
            event.preventDefault();

            let elementID = $(this).data('scroll'); 
            let elementOffset = $(elementID).offset().top;

            $("html, body").animate({
                scrollTop: elementOffset - 68
            }, 700);
        });
    });
});

