//Effectue la traduction en fonction du codon
function conversionProteine (codon) {
    switch (codon) {
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
            return 'Sérine';
        case 'CCU':
        case 'CCC':
        case 'CCA':
        case 'CCG':
          return 'Proline';
        case 'UUA':
        case 'UUG':
            return 'Leucine';
        case 'UUU':
        case 'UUC':
            return 'Phénylalanine';
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
            return 'Arginine';
        case 'UAU':
        case 'UAC':
            return 'Tyrosine';
        default:
          console.log("Cette entrée n'est pas reconnue");
          break;
      };
}