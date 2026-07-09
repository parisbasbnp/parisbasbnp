// ==============================
// SLIDER AUTOMATIQUE
// ==============================

let slides = document.querySelector(".slides");

let index = 0;

function sliderAuto(){

    if(!slides) return;

    index++;

    if(index > 2){

        index = 0;

    }

    slides.style.transform = "translateX(-" + (index * 33.333) + "%)";

}

setInterval(sliderAuto, 3500);


// ==============================
// POPUP NOTIFICATIONS
// ==============================

function ouvrirNotifications(){

    document.getElementById("notifModal").classList.add("show");

}

function fermerNotifications(){

    document.getElementById("notifModal").classList.remove("show");

}


// ==============================
// POPUP DECONNEXION
// ==============================

function ouvrirLogout(){

    document.getElementById("logoutModal").classList.add("show");

}

function fermerLogout(){

    document.getElementById("logoutModal").classList.remove("show");

}

function confirmerLogout(){

    window.location.href = "index.html";

}
// ==============================
// NAVIGATION
// ==============================

function ouvrirAccueil(){

    window.location.href = "client.html";

}

function ouvrirPaiement(){

    window.location.href = "paiement.html";

}

function ouvrirDecouvrir(){

    window.location.href = "decouvrir.html";

}

function ouvrirContact(){

    window.location.href = "contact.html";

}


// ==============================
// ANIMATION DES CARTES
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
// ANIMATION DES BOUTONS
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


// ==============================
// APPARITION DES ÉLÉMENTS
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".card,.offre-card,.actions button").forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(30px)";
    item.style.transition=".6s";

    observer.observe(item);

});
