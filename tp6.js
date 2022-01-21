let number = parseInt(prompt("Rentrez un chiffre de 1 à 3"));

while (number > 3 || number < 0) {
  alert("Choix invalide");
  number = prompt("Rentrez un chiffre de 1 à 3");
}

console.log("Bonne réponse!");
