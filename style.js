// ========= PAGE ACCUEIL -> PAGE VALIDATION =========

document.getElementById("btnJouer")
.addEventListener("click", function(){

document.getElementById("accueil")
.style.display = "none";

document.getElementById("pageNumero")
.style.display = "block";

document.querySelector(".zoneBoutons")
.style.opacity = "1";

document.querySelector(".zoneBoutons")
.style.pointerEvents = "auto";

});



// ========= VERIFICATION GOOGLE SHEET =========

document.getElementById("btnContinuer")
.addEventListener("click", function(){

let code =
document.getElementById("code").value.trim();

if(code === ""){

alert("Ampidiro aloha ny code");

return;

}


// LIEN APPS SCRIPT
let url =
"https://script.google.com/macros/s/AKfycbxHURiFXFagInAF8GI8MN6GY8ZtHZy9LfU48XimLrtHxd4JOEFpJVxuYbB9g7eOp_qAkQ/exec?code="
+ code;


fetch(url)

.then(response => response.text())

.then(data => {

data = data.trim();


// RAHA VALIDE
if(data === "valide"){

document.getElementById("pageNumero")
.style.display = "none";

document.getElementById("tableau")
.style.display = "block";

}


// RAHA TSY VALIDE
else{

alert("Code tsy hita ao anaty Google Sheet");

}

})

.catch(error => {

alert("Erreur connexion Google Sheet");

console.log(error);

});

});



// ========= SYSTEME CHOIX =========

let dejaChoisi = false;


// ========= CAGE 1 =========

document.getElementById("cage1")
.addEventListener("click", function(){

if(dejaChoisi){

return;

}

dejaChoisi = true;

document.getElementById("resultat")
.innerHTML =
"14 CHIFFRES : 45879632145678";

});



// ========= CAGE 2 =========

document.getElementById("cage2")
.addEventListener("click", function(){

if(dejaChoisi){

return;

}

dejaChoisi = true;

document.getElementById("resultat")
.innerHTML =
"Andramo indray";

});



// ========= CAGE 3 =========

document.getElementById("cage3")
.addEventListener("click", function(){

if(dejaChoisi){

return;

}

dejaChoisi = true;

document.getElementById("resultat")
.innerHTML =
"Mbola ho avy ny anjaranao";

});



// ========= BOUTON RETOUR =========

document.getElementById("btnRetour")
.addEventListener("click", function(){

dejaChoisi = false;

document.getElementById("resultat")
.innerHTML = "";

document.getElementById("tableau")
.style.display = "none";

document.getElementById("pageNumero")
.style.display = "block";

});



// ========= BOUTON ACCUEIL =========

document.getElementById("btnAccueil")
.addEventListener("click", function(){

dejaChoisi = false;

document.getElementById("resultat")
.innerHTML = "";

document.getElementById("tableau")
.style.display = "none";

document.getElementById("pageNumero")
.style.display = "none";

document.getElementById("accueil")
.style.display = "block";

document.querySelector(".zoneBoutons")
.style.opacity = "0";

document.querySelector(".zoneBoutons")
.style.pointerEvents = "none";

});



// ========= ENTER KEY =========

document.getElementById("code")
.addEventListener("keypress", function(event){

if(event.key === "Enter"){

document.getElementById("btnContinuer")
.click();

}

});