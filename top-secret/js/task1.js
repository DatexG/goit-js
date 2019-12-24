"use strict"

const clickTheButton = document.querySelector('#js-text')
const image = document.querySelector('.imagess')
const text = document.querySelector('p')

function  clickButton(){
  image.style.opacity = '1';
  text.style.visibility = "visible";
  setTimeout(refresh, 5000);
}

function refresh(){
  image.style.opacity = '0';
  text.style.visibility = "hidden";
}


clickTheButton.addEventListener('click', clickButton)