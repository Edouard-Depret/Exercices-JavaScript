let email = prompt("Rentrez votre email");
let password = prompt("Rentrez votre mot de passe");
let userEmail = prompt("LOGIN EMAIL: ");
let userPassword = prompt("LOGIN PASSWORD: ");

while (email != userEmail || password != userPassword) {
  alert("LOGIN INCORRECTS");
  userEmail = prompt("Veuillez rentrer votre email");
  userPassword = prompt("Veuillez rentrer votre mot de passe");
}

console.log("Bienvenu dans votre espace client.");
