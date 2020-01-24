/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    img = document.querySelector("img").getAttribute("data-hover")
    over = document.querySelector('img').getAttribute('src')
    //console.log(over)
    document.querySelector('figure').addEventListener('mouseover',()=> {
        document.querySelector('img').setAttribute('src',img)
    })
    document.querySelector('figure').addEventListener('mouseout',()=> {
        document.querySelector('img').setAttribute('src',over)
    })
})();
