/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    
    
    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition 
        let n1 = document.getElementById("op-one").value;
        let n2 = document.getElementById("op-two").value;
        result = parseInt(n1) + parseInt(n2) ;
        alert (result);

    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let n1 = document.getElementById("op-one").value;
        let n2 = document.getElementById("op-two").value;
        result = parseInt(n1) - parseInt(n2) ;
        alert (result);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let n1 = document.getElementById("op-one").value;
        let n2 = document.getElementById("op-two").value;
        result = parseInt(n1) * parseInt(n2) ;
        alert (result);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let n1 = document.getElementById("op-one").value;
        let n2 = document.getElementById("op-two").value;
        result = parseInt(n1) / parseInt(n2) ;
        alert (result);
    });
})();
