function retourner(tableau, direction, nombre) {
  let transitionUne = "";
  if (direction === "droite") {
    for (let i = 0; i <= nombre - 1; i++) {
      transitionUne = tableau.pop();
      tableau.unshift(transitionUne);
    }
    return tableau;
  } else if (direction === "gauche") {
    for (let i = 0; i <= nombre - 1; i++) {
      transitionUne = tableau.shift();
      tableau.push(transitionUne);
    }
    return tableau;
  }
}

console.log(retourner([1, 2, 3, 4], "droite", 2));
