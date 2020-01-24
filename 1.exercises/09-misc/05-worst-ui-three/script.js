/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //y'a pas d'arrêt mais c'est un détail
    let p1 = document.getElementById("part-one").getAttribute("value")
    let p2= document.getElementById("part-two").getAttribute("value")
    let p3= document.getElementById("part-three").getAttribute("value")
    let p4= document.getElementById("part-four").getAttribute("value")
    let max= parseInt(document.querySelector("#part-two").getAttribute("data-max"))
    let min= parseInt(document.querySelector("#part-two").getAttribute("data-min"))
    let max1= parseInt(document.querySelector("#part-one").getAttribute("data-max"))
    let min1= parseInt(document.querySelector("#part-one").getAttribute("data-min"))
    let i = true

    document.getElementById('fix-part-one').addEventListener("click",()=>{
        let int = setInterval(()=>{
            let random = Math.floor(Math.random() * (max1 - min1 + 1)) + min1
            p1 = random
            document.getElementById("target").innerHTML= `${p1}${p2}${p3}${p4}`

        },200)
    })
    document.getElementById('fix-part-two').addEventListener("click",()=>{
        
        let int = setInterval(()=>{
            let random = Math.floor(Math.random() * (max - min + 1)) + min
            p2 = random
            document.getElementById("target").innerHTML= `${p1}${p2}${p3}${p4}`
        },200)
    })

    document.getElementById('fix-part-three').addEventListener("click",()=>{
        
        let int = setInterval(()=>{
            let random = Math.floor(Math.random() * (max - min + 1)) + min
            p3 = random
            document.getElementById("target").innerHTML= `${p1}${p2}${p3}${p4}`
        },200)
    })

    document.getElementById('fix-part-four').addEventListener("click",()=>{
        
        let int = setInterval(()=>{
            let random = Math.floor(Math.random() * (max - min + 1)) + min
            p4 = random
            document.getElementById("target").innerHTML= `${p1}${p2}${p3}${p4}`
        },200)
    })
    
    
})();
