class etudiant {
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

/* const etudiants = [];
const tailleCollection = prompt("nombre d'élève a saisir :");
for (let i = 0; i < tailleCollection; i++) {
  etudiants.push(
    new etudiant(
      prompt("Eleve n°" + (i + 1) + " : Nom"),
      prompt("Eleve n°" + (i + 1) + " : Prenom"),
      prompt("Eleve n°" + (i + 1) + " : Age"),
      prompt("Eleve n°" + (i + 1) + " : Genre"),
      prompt("Eleve n°" + (i + 1) + " : Pays"),
      prompt("Eleve n°" + (i + 1) + " : Option"),
      prompt("Eleve n°" + (i + 1) + " : Cours")
    )
  );
} */

const etudiants = [];

etudiants.push(
  new etudiant("Gerard", "gggg", 25, "Homme", "russie", "informatique", "????")
);
etudiants.push(
  new etudiant("Pierre", "Paul", 23, "Homme", "France", "science", "????")
);
etudiants.push(
  new etudiant("John", "cena", 26, "Femme", "chine", "informatique", "????")
);
etudiants.push(
  new etudiant("aaaaa", "zzzzz", 25, "Homme", "France", "informatique", "????")
);

console.log(etudiants[0].nom);

/* function findOne(etudiants, pays, genre) {
  let compteur = 0;
  etudiants.forEach((etudiant) => {
    if (etudiant.pays === pays && etudiant.genre === genre) {
      compteur += 1;
    }
  });
  return compteur;
} */

function FindOneNombre(etudiants, pays, genre) {
  let compteur = etudiants.filter(
    (etudiant) => etudiant.pays === pays && etudiant.genre === genre
  ).length;
  return compteur;
}

function findLastLettre(etudiants, lettre) {
  let resultat = etudiants.filter(
    (etudiant) => etudiant.nom.slice(-1) === lettre
  );
  return resultat;
}

function tousLesNoms(etudiants) {
  let resultat = etudiants.map((etudiant) => etudiant.nom);
  return resultat;
}

function findOneListe(etudiants, pays, genre) {
  let resultat = etudiants.filter(
    (etudiant) => etudiant.pays === pays && etudiant.genre === genre
  );
  return resultat;
}

function findFirstLettreEtGenre(etudiants, lettre, genre) {
  let resultat = etudiants.filter(
    (etudiant) =>
      etudiant.nom.slice(0, 1) === lettre && etudiant.genre === genre
  );
  return resultat;
}

console.log(etudiants);
