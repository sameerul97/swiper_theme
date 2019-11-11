var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    mousewheelControl: true,
    freeMode: true,
    // grabCursor: true,
    // speed: 900,
    direction: 'horizontal',
    parallax: true,
    preloadImages: false,
    lazyLoading: true,
    // direction: 'vertical',
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: {
        sensitivity: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 0,
            direction: 'vertical'
        },
        768: {
            slidesPerView: 3,
            direction: 'horizontal',
        },
        1024: {
            slidesPerView: 5,
            direction: 'horizontal',
        },
    }
});