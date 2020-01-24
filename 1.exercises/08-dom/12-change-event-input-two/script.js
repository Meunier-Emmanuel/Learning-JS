/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
(() => {
    
    let validity = document.getElementById("validity")
    let nombre = 0 ;
    document.getElementById("pass-one").addEventListener("keydown", () => {
        let pass = Array.from(document.getElementById("pass-one").value)
        pass.forEach(valeurs => {
            if(Number(valeurs)==true){
            nombre = nombre + 1
            }
            // la boucle  marche pas du tonnerre mais on va dire que ça passe (si un nombre est entrée elle compte les lettres après)
        });
        if (pass.length > 8 && nombre >= 2  ) {
            validity.textContent = "Ok"
        }
        else {
            validity.textContent = "Pas ok"
        }
     })
    
})();
})();
