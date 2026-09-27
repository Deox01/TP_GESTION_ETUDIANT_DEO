console.log(
  `\n----------------------- Presentation de l'etudiant -------------------------`,
);

// Informations sur l'etudiant
const studentName = "Jonathan";
let studentAge = 17;
const studentCity = "Goma";
let studentCourse = "Developpement web";
const trainingFees = 150;
let amountPaid = 95;
let hasCard = true;
let isCountActif = true;

// Presentattion complete de l'etudiant
console.log(
  `Nom : ${studentName} \nAge : ${studentAge} \nVille : ${studentCity} \nFormation : ${studentCourse} \nFrais de formation : ${trainingFees} \nMontant payé : ${amountPaid} \nCarte d'étudiant : ${hasCard} \nCompte Actif : ${isCountActif}`,
);

// Types de quelques variables
console.log(
  `\n------------------------------Types des variables----------------------------`,
);
console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof hasCard);
console.log(typeof studentCourse);

// Notes de l'etudiant
const pointTotalParNote = 100;

const html = 85;
const css = 68;
const javaScript = 42;
const algorithmique = 75;
const baseDeDonnee = 90;
const reseauInformatique = 55;

// Total des notes, Moyenne générale et pourcentage obtenue
let totalNotes;
let moyenne;
let pourcentage;

console.log(
  `\n--------------------------- if et else pour la mention------------------------`,
);
// Attribution d'une mention pour l'etudiant
let mention = null;

if (moyenne >= 80) {
  mention = "Excellent";
} else if (moyenne >= 70) {
  mention = "Tres bien";
} else if (moyenne >= 60) {
  mention = "Bien";
} else if (moyenne >= 50) {
  mention = "Passable";
} else {
  mention = "Echec";
}

// Verification si l'etudiant a reussi ou echoue
const aReussi = moyenne >= 50 && javaScript >= 50;

let motif = null;
if (moyenne < 50) {
  motif = "Moyenne inferieur a 50";
} else {
  motif = "Point en JavaScript inferieur a 50";
}

let status = null;
if (aReussi) {
  status = "Admis";
} else {
  status = "Ajourné";
}

// Situation de l'etudiant
if (status === "Admis") {
  console.log(`L'etudiant ${studentName} est ${status}. Mention : ${mention}`);
} else {
  console.log(
    `L'etudiant ${studentName} est ${status}. \nMotif : ${motif} \nMention : ${mention}`,
  );
}

// Mission 3. Gestion financiere
console.log(
  `\n--------------------------- Mission 3. Gestion financiere---------------------`,
);

let pourcentageTotal = (trainingFees / trainingFees) * 100;
let pourcentageFraisEtudiant = (amountPaid / trainingFees) * 100;
let montantRestant = trainingFees - amountPaid;
console.log(
  `Montant restant a payer : ${montantRestant}$ \nPourcentage déjà payé : ${pourcentageFraisEtudiant}%`,
);

let estAutorise = pourcentageFraisEtudiant >= 75 && hasCard && isCountActif;
if (estAutorise) {
  console.log(
    `L'etudiant ${studentName} est autorise a passé l'examen \nExplications :  \n- A déjà payé plus de 75% sur le frais \n- A une carte d'etudiant \n- Compte actif`,
  );
} else {
  if (pourcentageFraisEtudiant < 75) {
    console.log(
      "Desole, vous devez avoir payé 75% de frais pour passer l'examen",
    );
  } else if (!hasCard) {
    console.log(
      "Desole, vous devez avoir une carte d'etudiant pour passer l'examen",
    );
  } else if (!isCountActif) {
    console.log(
      "Desole, vous devez avoir une carte d'etudiant valide pour passer l'examen",
    );
  } else {
    console.log(
      ` Vous n'etes pas autorisé a passé l'examen \n- 75% de frais : Pas encore payé \n- Pas de carte d'etudiant \n- Compte inactif `,
    );
  }
}

const container = document.querySelector(".info-body");
const resultatBtn = document.querySelector(".resultat-btn");
const fraisBtn = document.querySelector(".frais-btn");
const accesBtn = document.querySelector(".acces-examen");
let editMontantBtn = document.querySelector(".edit-montant");
let nameEtudiant = document.querySelector(".name-etudiant");
let avertissement;

nameEtudiant.textContent = studentName;

resultatBtn.addEventListener("click", function () {
  container.textContent = "";
  editMontantBtn.classList.remove("active");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="res-card">
              <p class="re-title">Resultat</p>
              <div class="resultat-card">
                <div class="points">
                  <p class="total">Total points</p>
                  <span class="points-value">${totalNotes}</span>
                </div>
                <div class="moyenne">
                  <p class="Moyenne générale">Moyenne generale</p>
                  <span class="moyenne-value">${moyenne.toFixed(2)}</span>
                </div>
                <div class="Pourcentage">
                  <p class="total">Pourcentage</p>
                  <span class="pourcentage-value">${pourcentage.toFixed(2)}%</span>
                </div>
              </div>
            </div>`,
  );
});

fraisBtn.addEventListener("click", function () {
  container.textContent = "";
  editMontantBtn.classList.add("active");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="fees-card">
              <p class="frais-title">Frais scolaire</p>
              <div class="frais-card">
                <div class="frais">
                  <p class="frais-total">Total a payer</p>
                  <span class="frais-total-value">${trainingFees}$</span>
                </div>
                <div class="frais-payer">
                  <p class="frais-valide">Déjà payé</p>
                  <span class="frais-valide-value">${amountPaid}$</span>
                </div>
                <div class="frais-pourcentage">
                  <p class="reste-frais">Montant restant</p>
                  <span class="reste-pourcentage-value">${trainingFees - amountPaid}$</span>
                </div>
              </div>
            </div>`,
  );
});

accesBtn.addEventListener("click", function () {
  container.textContent = "";
  editMontantBtn.classList.remove("active");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="acc-card">
              <p class="acces-title">Acces à l'examen</p>
              <div class="acces-card">
                <div class="acces">
                  <p class="acces-tit"> Carte d'etudiant</p>
                  <span class="acces-value">${hasCard ? "Oui" : "non"}</span>
                </div>
                <div class="actif-compte">
                  <p class="actif-title">Compte actif</p>
                  <span class="actif-value">${isCountActif ? "Oui" : "Non"}</span>
                </div>
                <div class="montant-pourcentage">
                  <p class="montatnt-title">Montant en Pourcentage</p>
                  <span class="montant-value">${pourcentageFraisEtudiant.toFixed(0)}%</span>
                </div>
              </div>
               <p class = "warning">Avertissemet : <span class = "avertissement">${avertissement}</span></p>`,
  );
});

editMontantBtn.addEventListener("click", function () {
  let newAmount = +prompt("Modifier le montant", `${amountPaid}`);
  if (newAmount && newAmount <= trainingFees) {
    amountPaid = newAmount;
    fraisBtn.click();
    pourcentageFraisEtudiant = (amountPaid / trainingFees) * 100;
  } else {
    alert("Montant invalide");
  }
});

// Autorisation parentale
console.log(
  `\n--------------------------------- Autorisation parentale----------------------`,
);
let autorisationParentale = false;
if (studentAge < 18 && !autorisationParentale) {
  console.log(
    "Une autorisation parentale est resquise pour acceder a l'examen",
  );
} else {
  console.log("Autorisation accordee");
}

// Verification que les notes sont comprisent entre 0-100
if (
  html >= 0 &&
  html <= 100 &&
  css >= 0 &&
  css <= 100 &&
  javaScript >= 0 &&
  javaScript <= 100 &&
  algorithmique >= 0 &&
  algorithmique <= 100 &&
  baseDeDonnee >= 0 &&
  baseDeDonnee <= 100 &&
  reseauInformatique >= 0 &&
  reseauInformatique <= 100
) {
  totalNotes =
    html + css + javaScript + algorithmique + baseDeDonnee + reseauInformatique;
  moyenne = totalNotes / 6;
  pourcentage = (totalNotes * 100) / 600;
  console.log(
    `\n--------------------- Total de points, Moyenne générale et pourcentage--------`,
  );
  console.log(
    `Total de points : ${totalNotes} \nMoyenne gen : ${moyenne.toFixed(2)} \nPourcentage : ${pourcentage.toFixed(2)}`,
  );
} else {
  console.log("Une note est invalide");
}

// Avertissement si le compte est inactif ou pas de carte d'etudiant
console.log(
  `\n------------- Carte d'etudiant absente et compte inactif verification--------`,
);
let avertissementElement = document.querySelector(".avertissement");

if (!isCountActif && hasCard) {
  avertissement = "Compte inactif";
} else if (isCountActif && !hasCard) {
  avertissement = "Carte d'etudiant absente";
} else if (!isCountActif && !hasCard) {
  avertissement = "Compte innactif et absence de carte d'etudiant";
} else {
  avertissement = "Aucune avertissement";
}
console.log(avertissement);
avertissementElement.textContent = avertissement;
