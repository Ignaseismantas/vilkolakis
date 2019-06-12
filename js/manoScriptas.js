var p = 0;
k = 0;
function versti1() {
  x = "p1";
  pav = "image/Vilkolakis.png";
 if (p == 0) {
    document.getElementById("v1").innerHTML = "Vilkolakis, paspausk ant zaidejo, jis mirs po sia nakti.";
    document.getElementById("v0").src = pav;
    p = 1;
  } else if (p == 2) {
    document.getElementById("v3").innerHTML = "Vilkolakis";
    p = 4;
}
function versti2() {
  if (p == 0) {
    x = "p2";
    pav = "image/Vilkolakis.png";
    document.getElementById("v1").innerHTML = "Vilkolakis";
    document.getElementById("v0").src = pav;
    p = 1;
  } else if (p == 2) {
    document.getElementById("v3").innerHTML = "Vilkolakis";
    p = 4;
  }
}
function versti3() {
  x = "p3";
  pav = "image/Miestietis.png";
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML = "Miestietis";
  } else if (p == 1) {
    document.getElementById("v3").innerHTML = "3 Mirs";
    y = x;
    p = 0;
    k++;
  } else if (p == 2) {
    document.getElementById("v3").innerHTML = "Ne vilkolakis";
    p = 4;
  }
}
