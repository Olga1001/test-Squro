"use strict";

var rng1 = document.getElementById('range1');
var rng2 = document.getElementById('range2');
var menu = document.getElementById('navtop');
var btn = document.getElementById('burger');
var html = document.getElementById('html'); // slider

var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  effect: 'fade',
  speed: 400,
  autoplay: {
    delay: 5000
  }
}); // range 

function fun1() {
  var p = document.getElementById('count1');
  p.innerHTML = rng1.value;
}

function fun2() {
  var p = document.getElementById('count2');
  p.innerHTML = rng2.value;
}

function mult() {
  var sumcount = document.getElementById('sumcount');
  sumcount.innerHTML = rng1.value * rng2.value;
} // select


var select = function select() {
  var selectItem = document.querySelectorAll('.select-item');
  var selectOption = document.querySelectorAll('.select-option');
  var selectFlag = document.querySelectorAll('.select-item_flag');
  var selectOptionFlag = document.querySelectorAll('.select-option_flag');
  selectItem.forEach(function (item) {
    item.addEventListener('click', selectToggle);
  });
  selectOption.forEach(function (item) {
    item.addEventListener('click', selectChoose);
  });
  selectFlag.forEach(function (item) {
    item.addEventListener('click', selectToggle);
  });
  selectOptionFlag.forEach(function (item) {
    item.addEventListener('click', selectChooseFlag);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('show');
  }

  function selectChoose() {
    var text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select-current');
    currentText.innerText = text;
    select.classList.remove('show');
  }

  function selectChooseFlag() {
    var data = this.getAttribute('data-flag'),
        alt = this.getAttribute('alt'),
        select = this.closest('.select'),
        codeContry = this.getAttribute("data-code"),
        currentFlag = select.querySelector('.select-item_flag img'),
        inputCode = document.getElementById('input-code');
    currentFlag.src = data;
    currentFlag.alt = alt;
    inputCode.placeholder = codeContry;
    select.classList.remove('show');
  }
};

select(); // menu
// show mune

function showMenu() {
  menu.classList.toggle('active');
  btn.classList.toggle('active');
} // hide mune


function hideMenu(e) {
  if (e.target.id != 'burger' && e.target.id != 'navtop') {
    menu.classList.remove('active');
    btn.classList.remove('active');
  }
} // hide menu on ESC


function closeESC(evt) {
  if (evt.keyCode == 27) {
    menu.classList.remove('active');
    btn.classList.remove('active');
  }
}

document.getElementById('burger').addEventListener('click', showMenu);
document.querySelector('html').addEventListener('click', hideMenu);
document.querySelector('html').addEventListener('keydown', closeESC); // MouseHover Animation

var boxElem = document.getElementById('box');
var pointerElem = document.getElementById('animate');

function onMouseMove(event) {
  var mouseX = event.pageX * -1 / 45;
  var mouseY = event.pageY * -1 / 55;
  pointerElem.style.transform = "translate3d(" + mouseX + "px," + mouseY + "px, 0)";
}

boxElem.addEventListener('mousemove', onMouseMove, false);