"use strict";

window.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.start');
  const screens = document.querySelectorAll('.screen');
  const timeList = document.querySelector('.time-list');
  const timeEL = document.querySelector('#time');
  const board = document.querySelector('#board');

  let time = 0;
  let score = 0;

  if(time < 0){
    
  }

  startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
  })

  timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')){
      time = +(event.target.getAttribute('data-time'));
      screens[1].classList.add('up');
      startGame();
    }
  });

  board.addEventListener('click', (event)=> {
    if(event.target.classList.contains('circle')){
      score++;
      event.target.remove();
      createRandomCircle();
    }
  });


  function startGame(){
    setTime(time);
    const interval = setInterval(() =>{
      if(time > 0){
        decreaseTime();
      } else if(time === 0){
        decreaseTime();
        clearInterval(interval);
      }
    }, 1000);
    createRandomCircle();
  }

  function decreaseTime(){
    if(time === 0){
      finishGame();
      console.log(time, typeof time);
    } else {
      let current = --time;
      if(current < 10){
        current = `0${current}`;
      }
      setTime(current);
    }
  }

  function setTime(value){
    timeEL.innerHTML = `00:${value}`;
  }

  function finishGame(){
    timeEL.parentNode.classList.add('hide');
    board.innerHTML = `<h2>Your score: <span class="primary">${score}</span></h2>`;

    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset-btn');
    resetBtn.innerHTML = 'RESET';
    board.append(resetBtn);

    resetBtn.addEventListener('click', ()=>{
      board.innerHTML = '';
      timeEL.parentNode.classList.remove('hide');
      screens[1].classList.remove('up');
      resetBtn.remove();
      time = 0;
      score = 0;
    })
  }

  function createRandomCircle(){
    const circle = document.createElement('div');

    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const color = getColorRandom();

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = `${color}`;
    circle.style.border = '1px solid #FFFFFF';

    board.append(circle);
  }

  function getRandomNumber(min, max){
   return Math.round(Math.random() *(max - min) + min);
  }

  function getColorRandom(){
    const letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
    
    
  function resetGame(){
    
  }
    
  
});