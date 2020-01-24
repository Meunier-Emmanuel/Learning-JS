/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var age = prompt('quel est ton âge ?');
    var sexe = prompt('Quel est ton sexe?');
    var ville = prompt('ou habite tu ? ');
    while (confirm("tu as " + age + ' ans \n' + " ton sexe est: " + sexe + "\n tu habites " + ville) === false) {
        age = prompt('quel est ton âge ?');
        sexe = prompt('Quel est ton sexe?');
        ville = prompt('ou habite tu ? ');
    }

})();

    
          