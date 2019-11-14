//############ Opérations & boucles ######/*

//"""""" Pyramide de Mario"""""""/*
étages = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let pierre = "#";
let i = 1
function pyramide(étages){
    while (i<= étages) {
    let ligne  = "";
    for (let k = 0; k < (étages-i); k++) {
        ligne += " "  
    }
    for (let index = 0; index < i; index++) {
     ligne = ligne + pierre;
    }
    i++;
    console.log(ligne)
}

}
console.log(pyramide(étages))