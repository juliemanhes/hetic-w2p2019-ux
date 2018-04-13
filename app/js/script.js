/* IMPORT FILE COMPONENT/MODULE */

import slider from "./modules/slider";
import nav from "./modules/nav";

/* INSTANCE OBJECT FROM IMPORT */
new slider();
type1();
type2();

function type1() {
  var i = 0;
  var txt = "Hé, coucou !";
  var speed = 50;

  var callType = function() {
    if (window.scrollY >= 329) {
      typeWriter();
      window.removeEventListener("scroll", callType);
    }
  };

  var bot = document.querySelectorAll(".ia-dialog1");
  for (let i = 0; i < bot.length; i++) {
    let parent = bot[i].parentNode;
    window.addEventListener("scroll", callType);
  }

  function typeWriter() {
    if (i < txt.length) {
      document.querySelector(".ia-dialog1--content").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

function type2() {
  var j = 0;
  var txt2 = "On ne se connait pas encore, mais ça ne saurait tarder...";
  var speed = 50;

  var callType = function() {
    if (window.scrollY >= 935) {
      typeWriter();
      window.removeEventListener("scroll", callType);
    }
  };
}

var bot = document.querySelectorAll(".ia-dialog2");
for (let i = 0; i < bot.length; i++) {
  let parent = bot[i].parentNode;
  window.addEventListener("scroll", callType);
}

function typeWriter() {
  if (j < txt2.length) {
    document.querySelector(".ia-dialog2--content").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}

// BURGER NAV //

var burger = document.querySelectorAll('.header--nav-burger div');
var header = document.querySelector('.header--buttons');
var burger1 = document.querySelector('.burger-1');
var burger2 = document.querySelector('.burger-2');
var burger3 = document.querySelector('.burger-3');

if (burger) {
    for (let i = 0; i < burger.length;i++) {
        burger[i].addEventListener('click', function() {
            header.classList.toggle('hidden');
            burger1.classList.toggle('burger-transform-1');
            burger2.classList.toggle('burger-transform-3');
            burger3.classList.toggle('burger-transform-2');
        });
    }
}
