// ===============================
// CHAT AUTOMATIQUE
// ===============================


let messages = document.getElementById("messages");

let input = document.getElementById("messageInput");




// ENVOYER UN MESSAGE

function envoyerMessage(){


    let texte = input.value.trim();


    if(texte === ""){

        return;

    }



    ajouterMessage(texte,"client");


    input.value="";



    setTimeout(()=>{

        reponseBanque(texte);

    },800);



}





// ENVOYER AVEC LES BOUTONS RAPIDES

function envoyerSuggestion(texte){


    ajouterMessage(texte,"client");


    setTimeout(()=>{

        reponseBanque(texte);

    },800);


}





// AJOUTER MESSAGE DANS LE CHAT

function ajouterMessage(texte,type){


    let div = document.createElement("div");


    div.classList.add("message",type);


    div.innerText = texte;



    messages.appendChild(div);



    messages.scrollTop = messages.scrollHeight;


}





// REPONSES AUTOMATIQUES

function reponseBanque(message){


    let msg = message.toLowerCase();



    let reponse = "";



    if(msg.includes("salut") || msg.includes("bonjour")){


        reponse =
        "Bonjour 👋 Bienvenue chez notre banque. Je suis là pour répondre à vos questions.";


    }



    else if(msg.includes("service") || msg.includes("banque") || msg.includes("détail")){


        reponse =
        "Nous proposons des comptes bancaires, cartes, épargne, crédits, assurances et services mobiles.";


    }



    else if(msg.includes("compte")){


        reponse =
        "Nous avons des comptes courants et des comptes épargne adaptés à vos besoins.";


    }
    else if(msg.includes("carte")){


        reponse =
        "Nous proposons plusieurs cartes bancaires avec des avantages adaptés à chaque client.";


    }



    else if(msg.includes("crédit") || msg.includes("pret")){


        reponse =
        "Nous proposons des solutions de financement pour vos projets personnels et immobiliers.";


    }



    else if(msg.includes("aide") || msg.includes("problème")){


        reponse =
        "Je suis disponible pour vous aider. Expliquez-moi votre demande plus précisément.";


    }



    else if(msg.includes("merci")){


        reponse =
        "Avec plaisir 😊 Nous restons à votre disposition.";


    }



    else{


        reponse =
        "Merci pour votre message. Un conseiller pourra vous accompagner prochainement. Pour plus d'informations, demandez nos services, comptes ou cartes.";


    }




    ajouterMessage(reponse,"banque");


}
