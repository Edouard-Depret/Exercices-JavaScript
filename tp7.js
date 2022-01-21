let number = parseInt(prompt("Rentrez un chiffre de 10 à 20"));

while (number > 20 || number < 10) {
  if (number > 20) {
    alert("Plus petit!");
    number = prompt("Rentrez un nombre entre 10 et 20");
  } else {
    alert("Plus grand!");
    number = prompt("Rentrez un nombre entre 10 et 20");
  }
}

console.log("Bonne réponse!");
