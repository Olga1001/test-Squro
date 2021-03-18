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

function writingRangeValues1() {
  var value1 = document.getElementById('value1');
  value1.innerHTML = rng1.value;
}

function writingRangeValues2() {
  var value2 = document.getElementById('value2');
  value2.innerHTML = rng2.value;
}

function multValues() {
  var value3 = document.getElementById('value3');
  value3.innerHTML = rng1.value * rng2.value;
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
// show/hide mune

function openMenu() {
  menu.classList.toggle('active');
  btn.classList.toggle('active');
} // hide menu on click under 


function closeMenu(e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_hamburger = target == btn;
  var menu_is_active = menu.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    openMenu();
  }
} // hide menu on ESC


function closeESC(e) {
  if (e.keyCode == 27) {
    menu.classList.remove('active');
    btn.classList.remove('active');
  }
}

document.getElementById('burger').addEventListener('click', function (e) {
  e.stopPropagation();
  openMenu();
});
document.addEventListener('click', closeMenu);
document.querySelector('html').addEventListener('keydown', closeESC); // MouseHover Animation

var boxElem = document.getElementById('box');
var pointerElem = document.getElementById('animate');

function onMouseMove(event) {
  var mouseX = event.pageX * -1 / 45;
  var mouseY = event.pageY * -1 / 55;
  pointerElem.style.transform = "translate3d(" + mouseX + "px," + mouseY + "px, 0)";
}

boxElem.addEventListener('mousemove', onMouseMove, false); // graphic