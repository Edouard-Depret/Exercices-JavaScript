class Formulaire {
  constructor(nom, prenom, age, genre, pays, option, cours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.cours = cours;
  }
  changerNom(nom) {
    this.nom = nom;
  }
  changerPrenom(prenom) {
    this.prenom = prenom;
  }
  changerOption(option) {
    this.option = option;
  }
}

const etudiant = [];
const tailleCollection = prompt("nombre d'élève a saisir :");
for (let i = 0; i < tailleCollection; i++) {
  etudiant.push(
    new Formulaire(
      prompt("Eleve n°" + (i + 1) + " : Nom"),
      prompt("Eleve n°" + (i + 1) + " : Prenom"),
      prompt("Eleve n°" + (i + 1) + " : Age"),
      prompt("Eleve n°" + (i + 1) + " : Genre"),
      prompt("Eleve n°" + (i + 1) + " : Pays"),
      prompt("Eleve n°" + (i + 1) + " : Option"),
      prompt("Eleve n°" + (i + 1) + " : Cours")
    )
  );
}
