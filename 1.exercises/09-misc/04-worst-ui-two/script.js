/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let p1 = document.getElementById("part-one").innerHTML
    let p2= document.getElementById("part-two").innerHTML
    let p3= document.getElementById("part-three").innerHTML
    let p4= document.getElementById("part-four").innerHTML
    let max= document.querySelector("#part-two").getAttribute("data-max")
    let min= document.querySelector("#part-two").getAttribute("data-min")
    let max1= document.querySelector("#part-one").getAttribute("data-max")
    let min1= document.querySelector("#part-one").getAttribute("data-min")
    console.log(max)

    document.querySelector("#part-one").addEventListener("click",()=> {
        if(p1<max1)
        p1++
        else
        p1=min1
        document.getElementById("part-two").innerHTML=p2
        document.getElementById("target").innerHTML = `+${p1}${p2}${p3}${p4}`
        
    })
    document.querySelector("#part-two").addEventListener("click",()=> {
        if(p2<max)
        p2++
        else
        p2=min
        if(p2<10)
        p2="0"+p2
        document.getElementById("part-two").innerHTML=p2
        document.getElementById("target").innerHTML = `+${p1}${p2}${p3}${p4}`
        
    })
    document.querySelector("#part-three").addEventListener("click",()=> {
        if(p3<max)
        p3++
        else
        p3=min
        if(p3<10)
        p3="0"+p3
        document.getElementById("part-two").innerHTML=p2
        document.getElementById("target").innerHTML = `+${p1}${p2}${p3}${p4}`
        
    })
    document.querySelector("#part-four").addEventListener("click",()=> {
        if(p4<max)
        p4++
        else
        p4=min
        if(p4<10)
        p4="0"+p4
        document.getElementById("part-two").innerHTML=p2
        document.getElementById("target").innerHTML = `+${p1}${p2}${p3}${p4}`
        
    })
// Faire avec des boucles 

})();
