let age = prompt("Quel est ton âge?");

if (age >= 7 && age <= 9) {
  console.log("Catégorie Poussin");
} else if (age == 10 || age == 11) {
  console.log("Catégorie Pupille");
} else if (age == 12 || age == 13) {
  console.log("Catégorie Benjamin");
} else if (age == 14 || age == 15) {
  console.log("Catégorie Minime");
} else if (age == 16 || age == 17) {
  console.log("Catégorie Cadet");
} else if (age > 17) {
  console.log("Trop vieux");
} else {
  console.log("Trop jeune");
}
