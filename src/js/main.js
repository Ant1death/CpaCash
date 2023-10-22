'use strict';
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
Swiper.use([Navigation]);
window.addEventListener('DOMContentLoaded',() => {
    const companySlider = document.querySelector('.company__wrapper');
    if(companySlider) {
        // if(window.innerWidth >= 1024) {
            
        // }
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
            breakpoints: {
                769: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    allowTouchMove: false,
                    draggable: false,
                    simulateTouch: false,
                    spaceBetween: 9,
                  },
                0: {
                  slidesPerView: 1,
                  allowTouchMove: true,
                  draggable: true,
                  simulateTouch: true,
                  spaceBetween: 10,
                },
              },
        });
        
    }
    // const offlineSlider = document.querySelector('.offline__wrapper');
    // if(offlineSlider) {
    //     if(window.innerWidth >= 1024) {
    //         const offlineSlider = new Swiper('.offline__wrapper', {
    //             loop: false,
    //             direction: 'horizontal',
    //             allowTouchMove: false,
    //             draggable: false,
    //             simulateTouch: false,
    //             slidesPerView: 3,
    //             spaceBetween: 24,
    //             breakpoints: {
    //                 1200: {
    //                     loop: false,
    //                     direction: 'horizontal',
    //                     allowTouchMove: false,
    //                     draggable: false,
    //                     simulateTouch: false,
    //                     slidesPerView: 3,
    //                     spaceBetween: 24,
    //                 },
    //                 768: {
    //                     slidesPerView: 2,
    //                 },
    //             },
    //             navigation: {
    //               nextEl: '.offline__next',
    //               prevEl: '.offline__prev',
    //             },
    //         });
    //     }
        
    // }
});