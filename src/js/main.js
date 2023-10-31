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
            breakpoints: {
                769: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    allowTouchMove: false,
                    draggable: false,
                    simulateTouch: false,
                    spaceBetween: 24,
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
    const bonusesSection = document.querySelector('.bonus');
    const bonusesLi = document.querySelectorAll('.bonus__wrapper-item ul li');
    const bonusesImg = document.querySelectorAll('.bonus__wrapper-item img');
    let isFunctionExecuted = false;

    function handleSectionScroll() {
      const sectionRect = bonusesSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (sectionRect.top < windowHeight && sectionRect.bottom >= 0 && !isFunctionExecuted) {
          isFunctionExecuted = true;
          let currentIndex = 1;
          const timer = setInterval(() => {
              bonusesLi[currentIndex].classList.add('active');
              bonusesImg[currentIndex].classList.add('active');
              if (currentIndex > 0) {
                  bonusesLi[currentIndex - 1].classList.remove('active');
                  bonusesImg[currentIndex - 1].classList.remove('active');
              }
              if (currentIndex === bonusesLi.length - 1) {
                  clearInterval(timer);
              }
              currentIndex++;
          }, 5000);
      }
  }
  window.addEventListener('scroll', handleSectionScroll);

  // burger
  const burger = document.querySelector('.burger');
  const headerMenu = document.querySelector('.header__menu');
  burger.addEventListener('click',(e) => {
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    if (burger.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
    
});