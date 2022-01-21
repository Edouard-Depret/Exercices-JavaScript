let email = prompt("Rentrez votre email");
let password = prompt("Rentrez votre mot de passe");
let userEmail = prompt("LOGIN EMAIL: ");
let userPassword = prompt("LOGIN PASSWORD: ");
let i = 0;

while ((email != userEmail || password != userPassword) && i < 4) {
  alert("LOGIN INCORRECTS");
  userEmail = prompt("Veuillez rentrer votre email");
  userPassword = prompt("Veuillez rentrer votre mot de passe");
  console.log(i);
  i++;
}

if (i == 4) {
  console.log(
    "Vous avez rentré 5 fois les mauvais mots de passe, vous êtes maintenant bloqué."
  );
}
if (email == userEmail && password == userPassword) {
  console.log("Bienvenu dans votre espace client.");
}
