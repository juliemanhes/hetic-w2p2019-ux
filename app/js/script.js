/* IMPORT FILE COMPONENT/MODULE */

import slider from "./modules/slider";
import nav from "./modules/nav";

/* INSTANCE OBJECT FROM IMPORT */
new slider();

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
