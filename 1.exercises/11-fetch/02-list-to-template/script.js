/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//         const target = document.getElementById('target')
//         let template = document.getElementById("tpl-hero")
        //document.getElementById("run").addEventListener("click",() =>{
            // fetch("http://localhost:3000/heroes")
            //     .then(function (response) {
            //         return response.json()
            //     }).then(function (datas) {
            //         datas.forEach(data => {
            //             let temp = document.importNode(template.content,true)
            //             temp.querySelector(".name").textContent = data.name
            //             temp.querySelector(".alter-ego").textContent = data.alter-ego
            //             temp.querySelector(".powers").textContent = data.abilities
                        
            //             target.appendChild(temp)

            // fetch("http://localhost:3000/heroes")
            // .then(response => response.json())
            //     .then(function (datas) {
            //         datas.forEach(data => {
            //             let temp = document.importNode(template.content,true)
            //             temp.querySelector(".name").textContent = data.name
            //             temp.querySelector(".alter-ego").textContent = data.alterEgo
            //             temp.querySelector(".powers").textContent = data.abilities
                        
            //             target.appendChild(temp)
            //         });
            //     })
            // })
            (() => { document.getElementById("run").addEventListener("click",async()=>{
                let response = await fetch("http://localhost:3000/heroes")
                let data = await response.json()
                console.log(data) 
                document.getElementById("target").innerHTML=

                data.map((héro)=> {
                    return `<div id=${héro.id}>
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name">${héro.name}</strong>
                                <em class="alter-ego">${héro.alterEgo}</em>
                            </h4>
                            <p class="powers">${héro.abilities}</p>
                        </li>
                    </div>` 
                    
                })
            })
        })();
        //map : pour chaque element d'un array on applique une function 