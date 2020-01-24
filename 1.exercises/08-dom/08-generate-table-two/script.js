/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//     var table = document.createElement('table')
//     document.getElementById("target").appendChild(table)
//     for (let i = 1; i <= 10; i++) {
//         var row = document.createElement("tr")
//         table.appendChild(row)
//         for (let j = 1; j <= 10; j++) {
//             var cell = document.createElement("td")
//             cell.textContent = i * j
//             row.appendChild(cell)
//         }
        
        

//     }
// })();
(() => {
    let table = document.createElement("table")
    let target = document.getElementById("target").appendChild(table)

    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement("tr")
        for (let j = 1; j <= 10; j++) {
            let td = document.createElement("td")
            total = i * j
            table.appendChild(tr)
            tr.appendChild(td)
            td.textContent = total
        }
        
    }
})();