/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//     document.getElementById('run').addEventListener('click',()=> {
//         if(document.getElementById("pass-one").value != document.getElementById('pass-two').value){
//         document.getElementById('pass-two').classList.add("error")
//         document.getElementById('pass-one').classList.add("error") 
//         }
//     })
// })();

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let pass = document.getElementById("pass-one")
        let match = document.getElementById("pass-two")
        
        if (pass.value != match.value) {
        let classe = document.createElement("class")
            classe.textContent = "error"
            pass.appendChild(classe)
            match.appendChild(classe)
        } 
    })
})();

// (() => {
//     document.getElementById("run").addEventListener("click", () => {
//         let pass = document.getElementById("pass-one")
//         let match = document.getElementById("pass-two")

//         if (pass.value != match.value) {
//             document.getElementById("pass-one").setAttribute("class", "error")
//             document.getElementById("pass-two").setAttribute("class", "error")

//         }
//     })
// })();