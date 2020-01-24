/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let random = Math.random() * 100 << 0
    console.log(random)
    //var reponse = prompt("choisi un nombre");
    while (random != reponse) {
    var reponse = prompt("choisi un nombre");

    if (reponse < random)
        alert("plus grand")
    else if (reponse > random)
        alert("plus petit")
    else
        alert("bonne réponse")
    }
})();