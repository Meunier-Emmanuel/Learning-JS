/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // let field = document.getElementById("slider")
    // let target = document.getElementById("target")
    // target.innerHTML = field.value;

    // field.oninput = function() {
    //     target.innerHTML = this.value;
    //   }

    document.getElementById('target').addEventListener("input",()=>{
      let field = document.getElementById("slider").value 
      slider.innerHTML = "nb" + field
    })
    console.log(field)
    
})();
