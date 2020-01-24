/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//     var table = document.createElement("table")
//     document.getElementById('target').appendChild(table)

//     for (let i = 1; i <= 10; i++) {
//         var row = document.createElement('tr')
//         var cell = document.createElement('td')
//         cell.textContent = `ligne ${i}`;

//         row.appendChild(cell)
//         table.appendChild(row)
//     }
// })();
(() => {
    
    let table = document.createElement("table")
    let target = document.getElementById("target").appendChild(table)
    for(i=0;i<10;i++){
    let row = document.createElement("tr")
    row.textContent="ligne"
    table.appendChild(row)}
})();
