const name = "Christian Lisangola";
const regexVowel = /[aeiou]/;
const regexConsonant = /[b-df-hj-np-tv-z]/;
let allVowels = [];
let allConsonant = [];
var lowerName = name.toLowerCase();
for (let i = 0; i < name.length; i++) {
  if (lowerName[i].match(regexVowel)) {
    allVowels.push(name[i]);
  } else if (lowerName[i].match(regexConsonant)) {
    allConsonant.push(name[i]);
  } else {
    continue;
  }
}

console.log(allVowels.toString());
console.log(allConsonant.toString());
