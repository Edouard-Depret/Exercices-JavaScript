const rayon = document.querySelector("#rayon");
const errorRayon = document.querySelector("#error_rayon");
const diametre = document.querySelector("#diametre");
const circomference = document.querySelector("#circomference");
const aire = document.querySelector("#aire");

btnSubmit.addEventListener("click", calculerCercle);

function calculerCercle(event) {
  event.preventDefault();
  if (rayon.value === "") {
    errorRayon.innerText = "Veuillez saisir le rayon";
    errorRayon.classList.add("error");
  } else {
    errorRayon.classList.remove("error");
    diametre.value = rayon.value * 2;
    circomference.value = 2 * Math.PI * rayon.value;
    aire.value = rayon.value * rayon.value * Math.PI;
  }
}
