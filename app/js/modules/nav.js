var navItem = document.querySelectorAll(".nav--wrap-item");
// console.log(navItem);
var toto = document.querySelector("body");

var i = 0;

var intElemScrollTop = window.scrollY;
// console.log(intElemScrollTop);
// console.log(toto);

// navItem[i].style.fontSize = "2rem";
var scrollTotal = toto.scrollHeight;

function tata(event) {
  console.log(event);
}

var i = 0;
var pourcentageY = 0;

window.addEventListener("scroll", function() {
  let scrollHauteur = window.scrollY;
  pourcentageY = Math.round((scrollHauteur /= scrollTotal) * 100);

  if (pourcentageY == 10 || pourcentageY == 19) {
    i = 0;
    navItem[i].style.fontSize = "40px";
  } else if (pourcentageY > 20) {
    navItem[0].style.fontSize = "20px";
  }

  if (pourcentageY == 20 || pourcentageY == 29) {
    i = 1;
    navItem[i].style.fontSize = "40px";
  } else if (20 > pourcentageY || pourcentageY > 30) {
    navItem[1].style.fontSize = "20px";
  }

  if (pourcentageY == 30 || pourcentageY == 39) {
    i = 2;
    console.log(i);

    navItem[i].style.fontSize = "40px";
  } else if (30 > pourcentageY || pourcentageY > 40) {
    navItem[2].style.fontSize = "20px";
  }

  if (pourcentageY == 40) {
    i = 3;
    console.log(i);
    navItem[i].style.fontSize = "40px";
  } else if (pourcentageY < 40) {
    navItem[3].style.fontSize = "20px";
  }
});

// function navigation() {
//   if (pourcentageY < 10) {
//     i = 0;
//     console.log(i);
//     navItem[i].style.fontSize = "40px";
//   }

//   if (10 < pourcentageY < 20) {
//     i = 1;
//     console.log(i);

//     navItem[i].style.fontSize = "40px";
//   }

//   if (20 < pourcentageY < 30) {
//     i = 2;
//     console.log(i);

//     navItem[i].style.fontSize = "3rem";
//   }

//   if (40 < pourcentageY) {
//     i = 3;
//     console.log(i);

//     navItem[i].style.fontSize = "3rem";
//   }
// }
