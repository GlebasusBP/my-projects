'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
  const container = document.querySelector('.container');
  const NUMBER_SQUARE = 500;

  for(let i = 0; i < NUMBER_SQUARE; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);

    square.addEventListener('mouseover', () => {
      addColor(square);
    })

    square.addEventListener('mouseleave', () => {
      removeColor(square);
    })
  }

  function addColor(elem){
    const color = getRandomColor()
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(elem){
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = '0 0 2px #000000';
  }

  function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }
});