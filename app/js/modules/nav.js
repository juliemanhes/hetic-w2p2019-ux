var navItem = document.querySelectorAll(".nav--wrap-item");
var toto = document.querySelector("body");
var scrollTotal = toto.scrollHeight;
var i = 0;
var pourcentageY = 0;

window.addEventListener("scroll", function() {
  let scrollHauteur = window.scrollY;
  pourcentageY = Math.round((scrollHauteur /= scrollTotal) * 100);

  if (pourcentageY == 0 || pourcentageY == 12) {
    i = 0;
    navItem[i].style.fontSize = "40px";
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "white";
    }
  } else if (pourcentageY > 12) {
    navItem[0].style.fontSize = "20px";
  }

  if (pourcentageY == 13 || pourcentageY == 32) {
    i = 1;
    navItem[i].style.fontSize = "40px";
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "#6D3EFF";
    }
  } else if (13 > pourcentageY || pourcentageY > 32) {
    navItem[1].style.fontSize = "20px";
  }

  if (pourcentageY == 33 || pourcentageY == 64) {
    i = 2;
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "white";
    }
    if (pourcentageY == 33 || pourcentageY == 51) {
      navItem[i].style.fontSize = "40px";
    }
  } else if (33 > pourcentageY || pourcentageY > 51) {
    navItem[2].style.fontSize = "20px";
  }

  if (pourcentageY == 52 || pourcentageY == 64) {
    i = 3;
    navItem[i].style.fontSize = "40px";
  } else if (52 > pourcentageY || pourcentageY > 64) {
    navItem[3].style.fontSize = "20px";
  }

  if (pourcentageY == 65) {
    i = 4;
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "#6D3EFF";
    }
    navItem[i].style.fontSize = "40px";
  } else if (pourcentageY < 65) {
    navItem[4].style.fontSize = "20px";
  }
});
