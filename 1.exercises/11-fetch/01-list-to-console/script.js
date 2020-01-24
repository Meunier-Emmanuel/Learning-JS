/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//     document.getElementById("run").addEventListener("click",async function(){
//         fetch("http://localhost:3000/heroes")
//         //.then(response => response.json()).then(console.log)
//         .then(function(response) {
//             return response.json()
//         }).then (function(data){
//             console.log(data)
//         })
//     })
// })();

(() => {
    document.getElementById("run").addEventListener("click",async() => {
        let response = await fetch("http://localhost:3000/heroes")
        let data = await response.json()
        console.table(data);
        
    })
})();