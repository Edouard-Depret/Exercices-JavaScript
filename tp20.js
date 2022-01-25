function retourner(tableau, direction, nombre) {
  if (direction === "droite") {
    for (let i = 0; i <= nombre - 1; i++) {
      tableau.unshift(tableau.pop());
    }
  } else {
    for (let i = 0; i <= nombre - 1; i++) {
      tableau.push(tableau.shift());
    }
  }
  return tableau;
}

console.log(retourner([1, 2, 3, 4], "droite", 2));
