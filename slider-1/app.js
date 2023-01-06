'use strict';

window.addEventListener('DOMContentLoaded', ()=> {
  const SLIDES = document.querySelectorAll('.slide');

  function removeClassActive(elem){
    elem.classList.remove('active');
  }

  SLIDES.forEach( slide => {
    slide.addEventListener('click', () => {
      SLIDES.forEach( slide => removeClassActive(slide));
      slide.classList.add('active');
    })
  })
});
