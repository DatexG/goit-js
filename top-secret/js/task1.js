"use strict"

const clickTheButton = document.querySelector('#js-text')
const image = document.querySelector('.imagess')
const text = document.querySelector('p')
const background = document.querySelector('.background')

function  clickButton(){
  image.style.opacity = '1';
  text.style.visibility = "visible";
  background.style.opacity = '1'
  setTimeout(refresh, 5000);
}

function refresh(){
  background.style.opacity ='0'
  image.style.opacity = '0';
  text.style.visibility = "hidden";
}


clickTheButton.addEventListener('click', clickButton)