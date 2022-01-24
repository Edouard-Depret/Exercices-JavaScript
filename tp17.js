const tailleMatrice = prompt("Taille de la matrice carée");
let array = [];
let matrice = [];
let premiereDiagonale = 0;
let deuxiemeDiagonale = 0;
let sommeFinale = 0;
//const matrice = [[2, 3, 4],[5, 9, 8],[2, 4, 1]]; premiereDiagonale = 2 + 9 + 1 = 12 ; deuxiemeDiagonale = 4 + 9 + 2 = 15 = 27
for (let i = 0; i < tailleMatrice; i++) {
  array = [];
  for (let j = 0; j < tailleMatrice; j++) {
    array.push(prompt("valeur de [" + i + "," + j + "] :"));
    if (i === j) {
      premiereDiagonale += parseInt(array[j]);
    }
    if (j === tailleMatrice - 1 - i) {
      deuxiemeDiagonale += parseInt(array[j]);
    }
  }
  matrice.push(array);
}

sommeFinale = premiereDiagonale + deuxiemeDiagonale;
console.log(matrice);
console.log(premiereDiagonale);
console.log(deuxiemeDiagonale);
console.log(sommeFinale);
