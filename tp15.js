let taille = prompt("Quelle taille font les tableaux?");

let listeNombre1 = prompt(
  "Rentrez une liste de chiffres séparés par un espace"
);
let listeNombre2 = prompt(
  "Rentrez une deuxième liste de chiffres séparés par un espace"
);
let arr = listeNombre1.split(" ").map(Number);
let arr2 = listeNombre2.split(" ").map(Number);
let result = [];

while (taille != arr.length || taille != arr2.length) {
  alert("La taille du tableau ne correspond pas");
  taille = prompt("Quelle taille font les tableaux?");

  listeNombre1 = prompt("Rentrez une liste de chiffres séparés par un espace");
  listeNombre2 = prompt(
    "Rentrez une deuxième liste de chiffres séparés par un espace"
  );
  arr = listeNombre1.split(" ").map(Number);
  arr2 = listeNombre2.split(" ").map(Number);
}

for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] + arr2[i]);
}

console.log(result);
