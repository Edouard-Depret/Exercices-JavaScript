const tailleMatrice = prompt("Taille de la matrice carée");
let array = [];
let matrice = [];
let diagonale = 0;
//const matrice = [[2, 3, 4],[5, 9, 8],[2, 4, 1]]; diagonale = 12
for (let i = 0; i < tailleMatrice; i++) {
  array = [];
  for (let j = 0; j < tailleMatrice; j++) {
    array.push(prompt("valeur de [" + i + "," + j + "] :"));
    if (i === j) {
      diagonale += parseInt(array[j]);
    }
  }
  matrice.push(array);
}
console.log(matrice);
console.log(diagonale);
