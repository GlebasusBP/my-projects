'use strict';

window.addEventListener("DOMContentLoaded", () => {

  const ITEM = document.querySelector('.item');
  const PLACEHOLDERS = document.querySelectorAll('.placeholder');

  ITEM.addEventListener('dragstart', dragstart);
  ITEM.addEventListener('dragend', dragend);

  function dragstart(){
    ITEM.classList.add('hold');
    setTimeout(() => {
      ITEM.classList.add('hide');
    }, 0);
  }

  function dragend(){
    ITEM.classList.remove('hold');
    ITEM.classList.remove('hide');
  }


  PLACEHOLDERS.forEach((elem) => {
    elem.addEventListener('dragover', dragover);
    elem.addEventListener('dragenter', dragenter);
    elem.addEventListener('dragleave', dragleave);
    elem.addEventListener('drop', dragdrop);
  });

  function dragover(elem){
    elem.preventDefault();
    PLACEHOLDERS.forEach(e => {
      e.classList.add('hovered');
    });
  }

  function dragenter(elem){
    elem.target.classList.add('change');
  }

  function dragleave(elem){
    elem.target.classList.remove('change');
  }

  function dragdrop(elem){
    elem.target.append(ITEM);
    elem.target.classList.remove('change');
    PLACEHOLDERS.forEach(e => {
      e.classList.remove('hovered');
    });
  }
});