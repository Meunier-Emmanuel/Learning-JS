/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let texte = document.getElementById("target").innerHTML
    let lettres = texte.split('')
    document.getElementById("target").innerHTML = ""
    let i = 0


    if (i < lettres.length)
        let int = setInterval(() => {
            let span = document.createElement("span")
            span.innerHTML = lettres[i]
            i++
            document.getElementById("target").appendChild(span)
            // else 
            // clearInterval(int)


            if (i >= lettres.length)
                clearInterval(int)
        }, 50)




    // lettres.forEach(lettre => {
    //     setInterval(()=>{
    //     let span = document.createElement("span")
    //     span.innerHTML = lettre
    //     document.getElementById('target').appendChild(span)
    //     },1000)
    //     // console.log(lettre)
    // });



})();