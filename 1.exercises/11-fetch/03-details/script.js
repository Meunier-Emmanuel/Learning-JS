/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click",async()=>{
        response = await fetch("http://localhost:3000/heroes") 
        data = await response.json()
        console.log(data);
        let valeur = parseInt(document.getElementById("hero-id").value)-1
        console.log(valeur);
        
        document.getElementById("target").innerHTML=
        
            `<li class="hero">
            <h4 class="title">
                <strong class="name">${data[parseInt(valeur)].name}</strong>
                <em class="alter-ego">${data[valeur].alterEgo}</em>
            </h4>
            <p class="powers">${data[valeur].abilities}</p>
            </li>`
     
        })
        
})();
    // let template = document.getElementById("tpl-hero")
    // let target = document.getElementById("target")
    // document.getElementById("run").addEventListener("click",() =>{
    //     let id = document.getElementById("hero-id").value 
    //     fetch("http://localhost:3000/heroes")
    //     .then(response => response.json())
    //     .then(function(hero){
    //         let temp = document.importNode(template.content,true)
    //         temp.querySelector(".name").textContent = hero[id].name
    //         temp.querySelector(".alter-ego").textContent = hero[id].alterEgo
    //         temp.querySelector(".powers").textContent = hero[id].abilities

    //         target.appendChild(temp)
    //     console.log(hero)
            
        // })
    // })