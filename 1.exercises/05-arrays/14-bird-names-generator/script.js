/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
]);
let target = document.getElementById("target")
var monTableau = Array.from(adjectives)
console.log(birds[2].fem)
document.getElementById("run").addEventListener("click",()=>{
    random1=Math.random()*11 <<0
    random2=Math.random()*10 <<0 
    //console.log(monTableau[1])
    //target.textContent=birds[random1].name +" "+ monTableau[random2]
    
        // if (birds.fem==true){
        // target.textContent=`${birds[random1].name} ${monTableau[random2]}e`}
        // else{
        // target.textContent=`${birds[random1].name} ${monTableau[random2]}`}
    let bird = birds[random1]
    let adj = monTableau[random2]
    if (bird.fem)
    target.textContent=`${bird.name} ${adj}e`
    else 
    target.textContent=`${bird.name} ${adj}`

})
})();

})();
