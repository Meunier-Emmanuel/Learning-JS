/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //     document.getElementById("run").addEventListener("click", () => {
    //         let name = document.getElementById("hero-name").value
    //         let alter = document.getElementById("hero-alter-ego").value
    //         let power = document.getElementById("hero-powers").value
    //         fetch("http://localhost:3000/heroes",{
    //             method : "POST",
    //             headers : { "Content-type" : "application/json"},
    //             body:JSON.stringify({name:name,alter:alter,power:power})
    //         })
    //         .then(response => response.json())
    //         .then(function(data){
    //             console.log(data)
    //         })
    //     })
    // })();

        document.getElementById("run").addEventListener("click", async()=> {
        let name = document.getElementById("hero-name").value
        let alter = document.getElementById("hero-alter-ego").value
        let power = document.getElementById("hero-powers").value
    //     if(!name || !alter || !power)
    //     alert("Tout les champs sont requis");
    //     else{
    //     let data = await fetch(("http://localhost:3000/heroes/"), {
    //             method: "POST",
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body: JSON.stringify({
    //             name : name ,
    //             AlterEgo: alter ,
    //             abilities : power.split(",") ,
    //         })
    //     })
    // }
    if(name && alter && power){
    let data = await fetch(("http://localhost:3000/heroes/"), {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
        name : name ,
        AlterEgo: alter ,
        abilities : power.split(",") ,
    })
})
}
    else{
        alert("remplis tout les champs")}

        // let donnee = await data.json()
        })

 })();