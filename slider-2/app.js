'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
  const container = document.querySelector('.container');

  const SIDEBAR = document.querySelector('.sidebar');
  const LengthSidebar = SIDEBAR.querySelectorAll('div').length;

  const sliders = document.querySelector('.main-slide');

  const upBtn = document.querySelector('.up-button');
  const downBtn = document.querySelector('.down-button');

  let count = 0;

  SIDEBAR.style.top = `-${(LengthSidebar - 1) * 100}vh`;

  upBtn.addEventListener('click', () => {
    changeSlide('up');
  })

  downBtn.addEventListener('click', () => {
    changeSlide('down');
  })

  function changeSlide(dir){
    if(dir === 'up'){
      count++;
      if(count > LengthSidebar - 1){
        count = 0;
      }
    }else if(dir === 'down'){
      count--;
      if(count < 0){
        count = LengthSidebar - 1;
      }
    }
    
    const height = container.clientHeight;
    sliders.style.transform = `translateY(-${count * height}px)`;
    SIDEBAR.style.transform = `translateY(${count * height}px)`;
  }

});