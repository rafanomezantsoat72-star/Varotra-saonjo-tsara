// BOUTON HILALAO
document.getElementById("btnJouer")
.addEventListener("click", function(){

document.getElementById("accueil")
.style.display = "none";

document.getElementById("pageNumero")
.style.display = "block";

});


// CONTINUER + VERIFICATION GOOGLE SHEET
document.getElementById("btnContinuer")
.addEventListener("click", function(){

let code =
document.getElementById("code").value;

if(code === ""){

alert("Ampidiro aloha ny code");

}

else{

fetch("https://script.google.com/macros/s/AKfycbxRgAmXdfdq9ouqn52WD7GVmjUG2dGnfGg9Yukt1_SBmoXLFWZi0A5qbi1y9pukuHHLzQ/exec?code="+code)

.then(response => response.text())

.then(data => {

if(data == "valide"){

document.getElementById("pageNumero")
.style.display = "none";

document.getElementById("tableau")
.style.display = "block";

}

else{

alert("Code tsy hita ao anaty Sheet");

}

})

.catch(error => {

alert("Erreur connexion Google Sheet");

});

}

});


// BLOQUER CHOIX
let dejaChoisi = false;


// CAGE 1
let cage1 = document.getElementById("cage1");

if(cage1){

cage1.addEventListener("click", function(){

if(dejaChoisi) return;

dejaChoisi = true;

document.getElementById("resultat")
.innerHTML =
"14 CHIFFRES : 45879632145678";

});

}


// CAGE 2
let cage2 = document.getElementById("cage2");

if(cage2){

cage2.addEventListener("click", function(){

if(dejaChoisi) return;

dejaChoisi = true;

document.getElementById("resultat")
.innerHTML =
"Andramo indray";

});

}


// CAGE 3
let cage3 = document.getElementById("cage3");

if(cage3){

cage3.addEventListener("click", function(){

if(dejaChoisi) return;

dejaChoisi = true;

document.getElementById("resultat")
.innerHTML =
"Mbola ho avy ny anjaranao";

});

}


// BOUTON AMERINA
let btnRetour =
document.getElementById("btnRetour");

if(btnRetour){

btnRetour.addEventListener("click",
function(){

dejaChoisi = false;

document.getElementById("resultat")
.innerHTML = "";

document.getElementById("tableau")
.style.display = "none";

document.getElementById("pageNumero")
.style.display = "block";

});

}


// BOUTON ACCUEIL
let btnAccueil =
document.getElementById("btnAccueil");

if(btnAccueil){

btnAccueil.addEventListener("click",
function(){

dejaChoisi = false;

document.getElementById("resultat")
.innerHTML = "";

document.getElementById("tableau")
.style.display = "none";

document.getElementById("pageNumero")
.style.display = "none";

document.getElementById("accueil")
.style.display = "block";

});

}