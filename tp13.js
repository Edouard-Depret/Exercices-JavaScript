let listeNombre = prompt("Rentrez une liste de chiffres séparés par un espace");
let arr = listeNombre.split(" ").map(Number);

let somme = arr.reduce(function (a, b) {
  return a + b;
}, 0);

let moyenne = somme / arr.length;

console.log("la somme est de: " + somme);
console.log("La moyenne est de: " + moyenne);
