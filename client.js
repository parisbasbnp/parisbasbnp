// ==============================
// Notifications
// ==============================

function notification() {

    alert("Vous avez 7 nouvelles notifications.");

}



// ==============================
// Déconnexion (popup)
// ==============================

function ouvrirLogout(){

    let popup = document.getElementById("logoutModal");

    if(popup){

        popup.classList.add("show");

    }else{

        alert("Popup introuvable");

    }

}


function fermerLogout(){

    document.getElementById("logoutModal").classList.remove("show");

}


function confirmerLogout(){

    window.location.href="index.html";

}


// ==============================
// Comptes
// ==============================

function ouvrirCompte(compte){

    alert("Ouverture de : " + compte);

}


function toutVoir(){

    alert("Liste complète des comptes.");

}



// ==============================
// Actions rapides
// ==============================

function virement(){

    alert("Réaliser un virement");

}


function wero(){

    alert("Envoyer avec Wero");

}


function rib(){

    alert("Afficher le RIB");

}


function plafonds(){

    alert("Gestion des plafonds");

}



// ==============================
// Navigation
// ==============================

function menu(page){


    document.querySelectorAll("nav button").forEach(btn=>{

        btn.classList.remove("active");

    });



    if(event && event.currentTarget){

        event.currentTarget.classList.add("active");

    }



    alert("Navigation : " + page);


}



// ==============================
// Synthèse
// ==============================

let synthese = document.querySelector(".synthese-card");


if(synthese){

    synthese.addEventListener("click",()=>{

        alert("Total de vos comptes");

    });

}




// ==============================
// Animation des cartes
// ==============================

document.querySelectorAll(".card").forEach(card=>{


    card.addEventListener("mousedown",()=>{

        card.style.transform="scale(.97)";

    });



    card.addEventListener("mouseup",()=>{

        card.style.transform="scale(1)";

    });



    card.addEventListener("mouseleave",()=>{

        card.style.transform="scale(1)";

    });



});





// ==============================
// Animation des boutons
// ==============================

document.querySelectorAll("button").forEach(btn=>{


    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.95)";

    });



    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });



    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });



});

function ouvrirNotifications(){

    document.getElementById("notifModal").classList.add("show");

}


function fermerNotifications(){

    document.getElementById("notifModal").classList.remove("show");

}

function ouvrirPaiement() {
    window.location.href = "paiement.html";
}

function ouvrirDecouvrir() {
    window.location.href = "decouvrir.html";
}

function ouvrirContact() {
    window.location.href = "contact.html";
}
function ouvrirHistorique() {
    window.location.href = "historique.html";
}
