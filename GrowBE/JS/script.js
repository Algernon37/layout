document.addEventListener("DOMContentLoaded", function() {
    const maxLength = 150; 
    const ellipsis = " ..."; 

    const featuresTextElements = document.querySelectorAll(".features__text");

    featuresTextElements.forEach(textElement => {
        const fullText = textElement.textContent;
        if (fullText.length > maxLength) {
            const truncatedText = fullText.substring(0, maxLength) + ellipsis;
            const readMoreLink = document.createElement("a");
            readMoreLink.href = "#";
            readMoreLink.textContent = "Read More...";
            readMoreLink.style.color = "black";
            readMoreLink.addEventListener("click", function(event) {
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

    $(document).ready(function(){
        var slider = $('.slider').slick({
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
            var index = $(this).data('slick-index');
            slider.slick('slickGoTo', index);
        });
    });

    $(document).ready(function(){
        var slider = $('.slider__news').slick({
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
            var index = $(this).data('slick-index');
            slider.slick('slickGoTo', index);
        });
    });
});

