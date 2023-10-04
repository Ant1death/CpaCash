'use strict';
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
Swiper.use([Navigation]);
window.addEventListener('DOMContentLoaded',() => {
    const companySlider = document.querySelector('.company__wrapper');
    if(companySlider) {
        const companySlider = new Swiper('.company__wrapper', {
            loop: false,
            direction: 'horizontal',
            allowTouchMove: false,
            draggable: false,
            simulateTouch: false,
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: '.company__next',
              prevEl: '.company__prev',
            },
        });
    }
    const offlineSlider = document.querySelector('.offline__wrapper');
    if(offlineSlider) {
        const offlineSlider = new Swiper('.offline__wrapper', {
            loop: false,
            direction: 'horizontal',
            allowTouchMove: false,
            draggable: false,
            simulateTouch: false,
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: '.offline__next',
              prevEl: '.offline__prev',
            },
        });
    }
    
});