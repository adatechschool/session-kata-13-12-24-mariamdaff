

let codeSecret = prompt("Joueur 1, entrez 4 couleurs séparées par un espace (par exemple: rouge bleu vert jaune)").split(" ");

// Fonction qui vérifie si la nombreDeCouleursPropose est bien composée uniquement des 4 couleurs possibles
function verifierNombreCouleur(nombreDeCouleursPropose) {
   // let couleursPossibles = ['rouge', 'bleu', 'vert', 'jaune']; // Liste des couleurs possibles
    // Vérifier que la nombreDeCouleursPropose contient exactement 4 couleurs valides
    if (nombreDeCouleursPropose.length === 4 ) {
        console.log("Bonne proposition!");
        return true;
    } else {
        console.log("Entrez une proposition composée uniquement des couleurs suivantes  ");
        return false;
    }
}

// Fonction qui vérifie si la combinaison est correcte
function verifierCombinaison(nombreDeCouleursPropose, combinaisonSecrete) {
    let bienPlacees = 0;
    let malPlacees = 0;

    // Vérifier les couleurs bien placées
    for (let i = 0; i < nombreDeCouleursPropose.length; i++) {
        if (nombreDeCouleursPropose[i] === combinaisonSecrete[i]) {
            bienPlacees++;
        }
    }

    // Vérifier les couleurs présentes mais mal placées
    malPlacees = nombreDeCouleursPropose.filter(couleur => combinaisonSecrete.includes(couleur)).length - bienPlacees;

    return [bienPlacees, malPlacees];
}

function jouerLaPartie() {
    let essais = 0;
    while (essais < 12) {
        let joueur2 = prompt("Joueur 2, devine 4 couleurs séparées par un espace (par exemple: rouge bleu vert jaune)").split(" ");
        
        // Vérifie si la nombreDeCouleursPropose est valide
        if (!verifierNombreCouleur(joueur2)) {
            continue;
        }
    }
}







