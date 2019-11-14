//############ Opérations & boucles ######/*

//""""" Calculs rapides """"""/*
n = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"));
function factorielle(n) {
      return n == 0 ? 1 :  n * factorielle (n-1);
    }
console.log(`le résultat est de : ${factorielle(n)}`)