/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const table = document.getElementById('target').innerHTML
    document.getElementById('target').innerHTML = ""
    let lettres = table.split("")
    
    
    lettres.forEach(lettre => {
        let span = document.createElement("span")
        span.innerHTML=lettre 
        let size = 1 + Math.random()*3 +"em"
        console.log(size)
        
        span.style.fontSize = size  ;
        document.getElementById("target").appendChild(span)
        
    })
})();