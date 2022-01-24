let listeNombre = prompt("Rentrez une liste de chiffres séparés par un espace");
let arr = listeNombre.split(" ");

let lePlusGrand = Math.max(...arr);
let lePlusPetit = Math.min(...arr);

console.log("Votre liste est: " + arr);
console.log("Le plus grand nombre est: " + lePlusGrand);
console.log("Le plus petit nombre est: " + lePlusPetit);
