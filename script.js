// script.js

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
class Carousel {
    constructor(element, options) {
        this.element = element;
        this.items = element.querySelectorAll('.item');
        this.currentIndex = 0;
        this.options = options || { interval: 3000 };
        this.start();
    }

    start() {
        this.interval = setInterval(() => this.next(), this.options.interval);
    }

    stop() {
        clearInterval(this.interval);
    }

    next() {
        this.items[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.items[this.currentIndex].classList.add('active');
    }

    prev() {
        this.items[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.items[this.currentIndex].classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.owl-carousel');
    new Carousel(carouselElement);
});

