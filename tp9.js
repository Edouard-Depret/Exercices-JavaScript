let n = prompt("Rentrez un nombre");
let i = 1;

while (i <= n) {
  if (i % 3 == 0 && i % 5 != 0) {
    console.log("fizz");
  } else if (i % 3 != 0 && i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else {
    console.log(i);
  }
  i++;
}
