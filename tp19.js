function ajouterDiagonale(matrix) {
  let sommeFinale = 0;
  for (let i = 0; i < matrix.length; i++) {
    sommeFinale +=
      parseInt(matrix[i][i]) + parseInt(matrix[i][matrix.length - 1 - i]);
  }
  return sommeFinale;
}

console.log(
  ajouterDiagonale([
    [2, 3, 4],
    [5, 9, 8],
    [2, 4, 1],
  ])
);
//const matrice = [[2, 3, 4],[5, 9, 8],[2, 4, 1]]; diagonale = 12 + 15
