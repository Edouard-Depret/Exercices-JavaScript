let start = prompt("Rentrez la première table de multiplication");
let end = prompt("Rentrez la dernière table de multiplication");
let multiStart = prompt("Multiplier de ...");
let multiEnd = prompt("à ...");

for (let i = start; i <= end; i++) {
  let j = multiStart;
  while (j <= multiEnd) {
    console.log(start + " x " + j + " = " + start * j);
    j++;
  }
}
