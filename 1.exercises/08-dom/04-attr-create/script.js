/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let source = document.getElementById("source").getAttribute("data-image")
    let img = document.createElement("img")
    let target = document.getElementById("target")
    img.setAttribute("src",source)
    target.appendChild(img)
    document.getElementById("source").remove
})();