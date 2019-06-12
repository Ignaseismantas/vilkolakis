var x1, x2, x3, x4, x5, x6, x7, x8, x9, y, d;
var vilkolakiutekstas = "";
var culttekstas = "";
var seertekstas = "";
var p = 0;
var k = 0;
function rasyti() {
  var tekstas = document.getElementById("a1").value;
  if (p == 1) {
    document.getElementById("v4").innerHTML += tekstas;
    document.getElementById("v4").innerHTML += " ";
  }
  if (p == 4) {
    document.getElementById("v4").innerHTML += tekstas;
    document.getElementById("v4").innerHTML += " ";
  }
  if (p == 2 || p == 100) {
    document.getElementById("v4").innerHTML += tekstas;
    document.getElementById("v4").innerHTML += " ";
  }
}
function istrinti() {
  if (p == 1) {
    vilkolakiutekstas = "";
    document.getElementById("v4").innerHTML = " ";
  }
  if (p == 4) {
    culttekstas = "";
    document.getElementById("v4").innerHTML = " ";
  }
  if (p == 2 || p == 100) {
    seertekstas = "";
    document.getElementById("v4").innerHTML = " ";
  }
}
function versti1() {
  x = "p1";
  pav = "image/Vilkolakis.png";
  if (p == 51) {
    x1 = "Werewolf";
    document.getElementById("v3").innerHTML = "Wow geras!! Tu esi Vilkolakis!";
  }
  if (p == 52) {
    x2 = "Werewolf";
    document.getElementById("v3").innerHTML = "Wow geras!! Tu esi Vilkolakis!";
  }
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Vilkolakis";
    document.getElementById("v0").src = pav;
    document.getElementById("v4").innerHTML = vilkolakiutekstas;
    p = 1;
  }
}
function versti2() {
  x = "p2";
  pav = "image/Miestietis.png";
  if (p == 51) {
    x1 = "Villager";
    document.getElementById("v3").innerHTML = "Wow geras!! Tu esi Miestietis!";
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML = "Miestietis";
  }
}
function versti3() {
  x = "p3";
  pav = "image/Serifas.png";
  if (p == 51) {
    x1 = "Seer";
    document.getElementById("v3").innerHTML = "Wow geras!! Tu esi aiškiaregė!!";
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML = "Seer";
    document.getElementById("v4").innerHTML = seertekstas;
    p = 2;
  }
}
function versti4() {
  x = "p4";
  pav = "image/Miestietis.png";
  if (p == 51) {
    x1 = "Bodyguard";
    document.getElementById("v3").innerHTML = "Wow geras!! Tu esi daktaras!!";
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML = "Bodyguard";
    p = 3;
  }
}
function versti6() {
  x = "p6";
  pav = "image/Serifas.png";
  if (p == 51) {
    x1 = "Cultleader";
    document.getElementById("v3").innerHTML =
      "Wow geras!! Tu esi kulto vadovas!!";
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML = "Cult Leader";
    document.getElementById("v4").innerHTML = culttekstas;
    p = 4;
  }
}
function versti7() {
  x = "p7";
  pav = "image/Miestietis.png";
  if (p == 51) {
    x1 = "Lycan";
    document.getElementById("v3").innerHTML =
      "Wow geras!! Tu esi gauruotoji :DDDDD!";
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML = "Lycan";
  }
}
function nerodyti() {
  if (p == 1) {
    vilkolakiutekstas = document.getElementById("v4").innerHTML;
  }
  if (p == 4) {
    culttekstas = document.getElementById("v4").innerHTML;
  }
  if (p == 2 || p == 100) {
    seertekstas = document.getElementById("v4").innerHTML;
  }
  console.log(document.getElementById("v4"));
  document.getElementById("v0").src = "image/Neatversta.jpg";
  p = 0;
  document.getElementById("v1").innerHTML = "Paspauskite, kuris žaidėjas esate";
  document.getElementById("v4").innerHTML = "";
  document.getElementById("v3").innerHTML = "";
}
function diena() {
  if (k > 0 && y != d) {
    document.getElementById(y).innerHTML = "X";
  }
  document.getElementById("faze").innerHTML = "Diena";
}
function naktis() {
  document.getElementById("faze").innerHTML = "Naktis";
}

/*Zaidejai renkasi roles, arba yra zudomi, tikrinami.*/
function zversti(event) {
  var value = event.target.innerHTML;
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 51;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = `${value} Mirs`;
    y = `z${value}`;
    k++;
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = `${value} bus išsaugotas`;
    d = `z${value}`;
  } else if (p == 2) {
    if (x1 == "Werewolf" || x1 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
function zversti2(event) {
  var value = event.target.innerHTML;
  if (p == 1) {
    document.getElementById("v3").innerHTML = `${value} Mirs`;
    y = `z${value}`;

    k++;
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = `${value} bus išsaugotas`;
    d = `z${value}`;
  }
}
function zversti3() {
  if (p == 1) {
    document.getElementById("v3").innerHTML = "3 Mirs";
    y = "z3";

    k++;
  }
}
function zversti4() {
  if (p == 1) {
    document.getElementById("v3").innerHTML = "4 Mirs";
    y = "z4";

    k++;
  }
}
function zversti5() {
  if (p == 1) {
    document.getElementById("v3").innerHTML = "5 Mirs";
    y = "z5";

    k++;
  }
}
function zversti6() {
  if (p == 1) {
    document.getElementById("v3").innerHTML = "6 Mirs";
    y = "z6";

    k++;
  }
}
function zversti7() {
  if (p == 1) {
    document.getElementById("v3").innerHTML = "7 Mirs";
    y = "z7";

    k++;
  }
}
function zversti8() {
  if (p == 1) {
    document.getElementById("v3").innerHTML = "8 Mirs";
    y = "z8";

    k++;
  }
}
function zversti9() {
  if (p == 1) {
    document.getElementById("v3").innerHTML = "9 Mirs";
    y = "z9";

    k++;
  }
}
