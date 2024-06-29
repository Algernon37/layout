document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.carousel__card');
    let currentIndex = 0;
    const totalCards = cards.length;
    let visibleCards = 3;

    const indicator = document.getElementById('indicator');
    let autoSlideInterval;

    function updateVisibleCards() {
        if (window.innerWidth < 768) {
            visibleCards = 1;
        } else if (window.innerWidth <= 1024) {
            visibleCards = 2;
        } else {
            visibleCards = 3;
        }
    }


    function updateIndicator() {
        const currentVisibleIndex = Math.min(currentIndex + visibleCards, totalCards);
        const total = totalCards;
        indicator.innerHTML = `<span class="carousel__indicator-current">${currentVisibleIndex}</span>/<span class="carousel__indicator-total">${total}</span>`;
    }

    function next() {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            updateCarousel();
        }
    }

    function prev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function updateCarousel() {
        const cardStyle = window.getComputedStyle(cards[0]);
        const cardWidth = cards[0].offsetWidth + parseFloat(cardStyle.marginRight);
        const translateX = -(currentIndex * cardWidth);
        carousel.style.transform = `translateX(${translateX}px)`;
        updateIndicator();
        updateButtons();
    }

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalCards - visibleCards;
        prevBtn.style.backgroundColor = prevBtn.disabled ? '#D6D6D6' : '#313131';
        nextBtn.style.backgroundColor = nextBtn.disabled ? '#D6D6D6' : '#313131';
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(next, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function startAutoSlide() {
        resetAutoSlide();
    }

    updateVisibleCards();
    window.addEventListener('resize', () => {
        updateVisibleCards();
        updateCarousel();
    });

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    prevBtn.addEventListener('mouseenter', stopAutoSlide);
    nextBtn.addEventListener('mouseenter', stopAutoSlide);

    prevBtn.addEventListener('mouseleave', startAutoSlide);
    nextBtn.addEventListener('mouseleave', startAutoSlide);

    resetAutoSlide();
    updateIndicator();
    updateButtons();

    const title = document.querySelector('.assistance__title');
    const container = document.querySelector('.assistance__container');
    const image = document.querySelector('.assistance__img');


    const originalTitleContent = title.innerHTML;
    const originalParent = image.parentNode;

    function moveImage() {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth <= 768 && !title.contains(image)) {
            const text = title.innerText.split('посетите лекцию на тему:')[0];
            title.innerHTML = '';
            const textSpan = document.createElement('span');
            textSpan.innerText = text;
            const specialTextSpan = document.createElement('span');
            specialTextSpan.innerHTML = 'посетите лекцию на тему:' + '<span class="special-text">«Плодотворная дебютная идея»</span>';
            title.appendChild(textSpan);
            title.appendChild(image);
            title.appendChild(specialTextSpan);
        } else if (screenWidth > 768 && title.contains(image)) {
            title.innerHTML = originalTitleContent;
            originalParent.appendChild(image);
        }
    }

    moveImage();
    window.addEventListener('resize', moveImage);
});


document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let totalSlides;
    let slides;
    let indicators;
    let prevBtn;
    let nextBtn;

    function initializeSlider() {
        slides = document.querySelectorAll('.stage');
        prevBtn = document.getElementById('prevBtn1');
        nextBtn = document.getElementById('nextBtn1');
        indicators = document.querySelectorAll('.carouseldot');
        totalSlides = slides.length;

        showSlides();
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    function destroySlider() {
        if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
        if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
        slides.forEach(slide => {
            slide.style.display = '';
        });
        indicators.forEach(indicator => {
            indicator.style.backgroundColor = '';
        });
        prevBtn = null;
        nextBtn = null;
        slides = null;
        indicators = null;
        totalSlides = 0;
        slideIndex = 0;
    }

    function showSlides() {
        if (slides.length !== indicators.length) {
            console.error('Количество слайдов и количество индикаторов не совпадает!');
            return;
        }

        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = 'block';
                indicators[index].style.backgroundColor = '#313131';
            } else {
                slide.style.display = 'none';
                indicators[index].style.backgroundColor = '#D9D9D9';
            }
        });
        updateButtons();
    }

    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        }
        showSlides();
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        showSlides();
    }

    function updateButtons() {
        if (prevBtn && nextBtn) {
            prevBtn.disabled = slideIndex === 0;
            nextBtn.disabled = slideIndex === totalSlides - 1;
            prevBtn.style.backgroundColor = prevBtn.disabled ? '#D6D6D6' : '#313131';
            nextBtn.style.backgroundColor = nextBtn.disabled ? '#D6D6D6' : '#313131';
        }
    }

    function handleResize() {
        if (window.innerWidth <= 760) {
            if (!prevBtn) {
                initializeSlider();
            }
        } else {
            if (prevBtn) {
                destroySlider();
            }
        }
    }

    window.addEventListener('resize', handleResize);

    handleResize();
});
