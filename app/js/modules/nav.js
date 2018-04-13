var navItem = document.querySelectorAll(".nav--wrap-item");
var toto = document.querySelector("body");
var scrollTotal = toto.scrollHeight;
var i = 0;
var pourcentageY = 0;

window.addEventListener("scroll", function() {
  let scrollHauteur = window.scrollY;
  pourcentageY = Math.round((scrollHauteur /= scrollTotal) * 100);

  if (pourcentageY == 10 || pourcentageY == 19) {
    i = 0;
    navItem[i].style.fontSize = "40px";
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "white";
    }
  } else if (pourcentageY > 20) {
    navItem[0].style.fontSize = "20px";
  }

  if (pourcentageY == 20 || pourcentageY == 29) {
    i = 1;
    navItem[i].style.fontSize = "40px";
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "purple";
    }
  } else if (20 > pourcentageY || pourcentageY > 30) {
    navItem[1].style.fontSize = "20px";
  }

  if (pourcentageY == 30 || pourcentageY == 39) {
    i = 2;
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "white";
    }
    navItem[i].style.fontSize = "40px";
  } else if (30 > pourcentageY || pourcentageY > 40) {
    navItem[2].style.fontSize = "20px";
  }

  if (pourcentageY == 40) {
    i = 3;
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "purple";
    }
    navItem[i].style.fontSize = "40px";
  } else if (pourcentageY < 40) {
    navItem[3].style.fontSize = "20px";
  }
});
