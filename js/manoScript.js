var x1, x2, x3, x4, x5, x6, x7, x8, x9, y, d, karti;
var c1 = 0,
  c2 = 0,
  c3 = 0,
  c4 = 0,
  c5 = 0,
  c6 = 0,
  c7 = 0,
  c8 = 0,
  c9 = 0;
var mirtis = "";
var vilkolakiutekstas = "";
var culttekstas = "";
var seertekstas = "";
var p = 0;
var k = 0;
var siaip = 0;
function rasyti() {
  var tekstas = document.getElementById("a1").value;
  if (p == 1 || p == 6 || p == 2 || p == 100 || p == 4) {
    document.getElementById("v4").innerHTML += tekstas;
    document.getElementById("v4").innerHTML += " ";
    document.getElementById("a1").value = "";
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
  pav = "image/Werewolf.png";
  if (siaip == 0) {
    if (p == 51) {
      x1 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
    if (p == 52) {
      x2 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
    if (p == 53) {
      x3 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
    if (p == 54) {
      x4 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
    if (p == 55) {
      x5 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
    if (p == 56) {
      x6 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
    if (p == 57) {
      x7 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
    if (p == 58) {
      x8 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
    if (p == 59) {
      x9 = "Werewolf";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Vilkolakis!";
    }
  }
  if (p == 0) {
    document.getElementById("v1").innerHTML =
      "Vilkolakis. Pasirink žaidėją, jis mirs šią naktį. Taip pat gali susirašinėti su vilkolakių komandos nariais.";
    document.getElementById("v0").src = pav;
    document.getElementById("v4").innerHTML = vilkolakiutekstas;
    p = 1;
  }
}
function versti2() {
  x = "p2";
  pav = "image/Villager.png";
  if (siaip == 0) {
    if (p == 51) {
      x1 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
    if (p == 52) {
      x2 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
    if (p == 53) {
      x3 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
    if (p == 54) {
      x4 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
    if (p == 55) {
      x5 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
    if (p == 56) {
      x6 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
    if (p == 57) {
      x7 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
    if (p == 58) {
      x8 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
    if (p == 59) {
      x9 = "Villager";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi Miestietis!";
    }
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML =
      "Miestietis. Atsiprašau, bet nieko įdomaus nedarai.";
  }
}
function versti3() {
  x = "p3";
  pav = "image/Seer.png";
  if (siaip == 0) {
    if (p == 51) {
      x1 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
    if (p == 52) {
      x2 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
    if (p == 53) {
      x3 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
    if (p == 54) {
      x4 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
    if (p == 55) {
      x5 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
    if (p == 56) {
      x6 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
    if (p == 57) {
      x7 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
    if (p == 58) {
      x8 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
    if (p == 59) {
      x9 = "Seer";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi aiškiaregė!!";
    }
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML =
      "Aiškiaregė. Pasirink žaidėją ir sužinok, ar jis vilkolakis, ar ne.";
    document.getElementById("v4").innerHTML = seertekstas;
    p = 2;
  }
}
function versti4() {
  x = "p4";
  pav = "image/Bodyguard.png";
  if (siaip == 0) {
    if (p == 51) {
      x1 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
    if (p == 52) {
      x2 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
    if (p == 53) {
      x3 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
    if (p == 54) {
      x4 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
    if (p == 55) {
      x5 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
    if (p == 56) {
      x6 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
    if (p == 57) {
      x7 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
    if (p == 58) {
      x8 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
    if (p == 59) {
      x9 = "Bodyguard";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi sargybinis!!";
    }
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML =
      "Sargybinis. Pasirink žaidėją. Jis šią naktį negali mirti.";
    p = 3;
  }
}
function versti5() {
  x = "p5";
  pav = "image/Hunter.png";
  if (siaip == 0) {
    if (p == 51) {
      x1 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
    if (p == 52) {
      x2 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
    if (p == 53) {
      x3 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
    if (p == 54) {
      x4 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
    if (p == 55) {
      x5 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
    if (p == 56) {
      x6 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
    if (p == 57) {
      x7 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
    if (p == 58) {
      x8 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
    if (p == 59) {
      x9 = "Hunter";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi medžiotojas!";
    }
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML =
      "Medžiotojas. Kai mirsi, galėsi kažką nušaut.";
  }
}
function versti6() {
  x = "p6";
  pav = "image/Cultleader.png";
  if (siaip == 0) {
    if (p == 51) {
      x1 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
    if (p == 52) {
      x2 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
    if (p == 53) {
      x3 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
    if (p == 54) {
      x4 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
    if (p == 55) {
      x5 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
    if (p == 56) {
      x6 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
    if (p == 57) {
      x7 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
    if (p == 58) {
      x1 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
    if (p == 59) {
      x9 = "Cultleader";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi kulto vadovas!!";
    }
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML =
      "Kulto vadovas. Pasirink žaidėją. Jis prisijungs prie tavo kulto.";
    document.getElementById("v4").innerHTML = culttekstas;
    p = 4;
  }
}
function versti7() {
  x = "p7";
  pav = "image/Lycan.png";
  if (siaip == 0) {
    if (p == 51) {
      x1 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
    if (p == 52) {
      x2 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
    if (p == 53) {
      x3 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
    if (p == 54) {
      x4 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
    if (p == 55) {
      x6 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
    if (p == 56) {
      x6 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
    if (p == 57) {
      x7 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
    if (p == 58) {
      x8 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
    if (p == 59) {
      x9 = "Lycan";
      document.getElementById("v3").innerHTML =
        "Wow geras!! Tu esi gauruotoji :DDDDD!";
    }
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML =
      "Gauruotoji. Jei tave aiškiaregė tikrins, pagalvos, kad tu vilkolakis.";
  }
}
function versti8() {
  x = "p8";
  pav = "image/Minion.png";
  if (siaip == 0) {
    if (p == 51) {
      x1 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
    if (p == 52) {
      x2 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
    if (p == 53) {
      x3 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
    if (p == 54) {
      x4 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
    if (p == 55) {
      x5 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
    if (p == 56) {
      x6 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
    if (p == 57) {
      x7 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
    if (p == 58) {
      x8 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
    if (p == 59) {
      x9 = "Minion";
      document.getElementById("v3").innerHTML = "Wow geras!! Tu esi pakalikas!";
    }
  }
  if (p == 0) {
    document.getElementById("v0").src = pav;
    document.getElementById("v1").innerHTML =
      "Pakalikas. Gali susirašinėti su vilkolakiais, bet negali spręsti, ką jie nužudys.";
    document.getElementById("v4").innerHTML = vilkolakiutekstas;
    p = 6;
  }
}
function nerodyti() {
  if (p == 1 || p == 6) {
    vilkolakiutekstas = document.getElementById("v4").innerHTML;
  }
  if (p == 4) {
    culttekstas = document.getElementById("v4").innerHTML;
  }
  if (p == 2 || p == 100) {
    seertekstas = document.getElementById("v4").innerHTML;
  }
  console.log(document.getElementById("v4"));
  document.getElementById("v0").src = "image/Default.png";
  p = 0;
  document.getElementById("v1").innerHTML = "Paspauskite, kuris žaidėjas esate";
  document.getElementById("v4").innerHTML = "";
  document.getElementById("v3").innerHTML = "";
}
function diena() {
  if (k > 0 && y != d) {
    mirtis = document.getElementById(y).innerHTML;
    document.getElementById(y).innerHTML = "X";
    document.getElementById("mire").innerHTML += " Labai gaila, bet mirė ";
    document.getElementById("mire").innerHTML += mirtis;
    mirtis = "";
  }
  document.getElementById("faze").innerHTML = "Diena";
}
function naktis() {
  document.getElementById("faze").innerHTML = "Naktis";
  mirtis = document.getElementById(karti).innerHTML;
  document.getElementById(karti).innerHTML = "X";
  document.getElementById("mire").innerHTML += " Labai gaila, bet pakorėme ";
  document.getElementById("mire").innerHTML += mirtis;
  mirtis = "";
  document.getElementById("v4").innerHTML = "";
  document.getElementById("v3").innerHTML = "";
  p = 0;
}

/*Zaidejai renkasi roles, arba yra zudomi, tikrinami.*/
function zversti1() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 51;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "1 Mirs";
    y = "z1";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "1 bus pakartas";
    karti = "z1";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "1 bus išsaugotas";
    d = "z1";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "1 buvo priimtas į kultą";
    c1 = 1;
    p = 100;
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
function zversti2() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 52;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "2 Mirs";
    y = "z2";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "2 bus pakartas";
    karti = "z2";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "2 bus išsaugotas";
    d = "z2";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "2 buvo priimtas į kultą";
    c2 = 1;
    p = 100;
  } else if (p == 2) {
    if (x2 == "Werewolf" || x2 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
/*function zversti2(event) {
  var value = event.target.innerHTML;
  if (p == 1) {
    document.getElementById("v3").innerHTML = `${value} Mirs`;
    y = `z${value}`;

    k++;
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = `${value} bus išsaugotas`;
    d = `z${value}`;
  }
} */
function zversti3() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 53;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "3 Mirs";
    y = "z3";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "3 bus pakartas";
    karti = "z3";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "3 bus išsaugotas";
    d = "z3";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "3 buvo priimtas į kultą";
    c3 = 1;
    p = 100;
  } else if (p == 2) {
    if (x3 == "Werewolf" || x3 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
function zversti4() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 54;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "4 Mirs";
    y = "z4";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "4 bus pakartas";
    karti = "z4";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "4 bus išsaugotas";
    d = "z4";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "4 buvo priimtas į kultą";
    c4 = 1;
    p = 100;
  } else if (p == 2) {
    if (x4 == "Werewolf" || x4 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
function zversti5() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 55;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "5 Mirs";
    y = "z5";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "5 bus pakartas";
    karti = "z5";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "5 bus išsaugotas";
    d = "z5";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "5 buvo priimtas į kultą";
    c5 = 1;
    p = 100;
  } else if (p == 2) {
    if (x5 == "Werewolf" || x5 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
function zversti6() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 56;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "6 Mirs";
    y = "z6";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "6 bus pakartas";
    karti = "z6";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "6 bus išsaugotas";
    d = "z6";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "6 buvo priimtas į kultą";
    c6 = 1;
    p = 100;
  } else if (p == 2) {
    if (x6 == "Werewolf" || x6 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
function zversti7() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 57;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "7 Mirs";
    y = "z7";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "7 bus pakartas";
    karti = "z7";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "7 bus išsaugotas";
    d = "z7";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "7 buvo priimtas į kultą";
    c7 = 1;
    p = 100;
  } else if (p == 2) {
    if (x7 == "Werewolf" || x7 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
function zversti8() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 58;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "8 Mirs";
    y = "z8";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "8 bus pakartas";
    karti = "z8";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "8 bus išsaugotas";
    d = "z8";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "8 buvo priimtas į kultą";
    c8 = 1;
    p = 100;
  } else if (p == 2) {
    if (x8 == "Werewolf" || x8 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
function zversti9() {
  if (p == 0) {
    document.getElementById("v1").innerHTML = "Paspauskite, kokią rolę gavote!";
    p = 59;
  }
  if (p == 1) {
    document.getElementById("v3").innerHTML = "9 Mirs";
    y = "z9";
    k++;
  } else if (p == 7) {
    document.getElementById("v3").innerHTML = "9 bus pakartas";
    karti = "z9";
  } else if (p == 3) {
    document.getElementById("v3").innerHTML = "9 bus išsaugotas";
    d = "z9";
  } else if (p == 4) {
    document.getElementById("v3").innerHTML = "9 buvo priimtas į kultą";
    c9 = 1;
    p = 100;
  } else if (p == 2) {
    if (x9 == "Werewolf" || x9 == "Lycan") {
      document.getElementById("v3").innerHTML = "Vilkolakis";
      p = 100;
    } else {
      document.getElementById("v3").innerHTML = "Ne vilkolakis";
      p = 100;
    }
  }
}
function pakarti() {
  if (p == 0) {
    document.getElementById("v3").innerHTML =
      "Paspauskite, kuris žaidėjas bus pakartas";
    p = 7;
  }
}
