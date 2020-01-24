/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    for (let i=0 ; i<5;i++){
    document.getElementsByClassName("target")[i].innerText="owned"
    }

    // texte.forEach(element => {
    //     document.getElementsByClassName('target')[element]
    //     element.innerText = "owned"
    // });

//     let paraElt = document.getElementsByClassName('target'); 
// for(const para of paraElt){

// para.textContent = 'owned';
//}
})();