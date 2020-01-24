/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener('click',()=>{
        class person{
            constructor(firstname,lastname) {
                this.firstname=firstname
                this.lastname=lastname
            }
            SayHello(){
                return `hello ${this.firstname} ${this.lastname}`
            }
        }
        var person1 = new person("Manu","Meunier");
        var person2 = new person("mdr","Lol");
        console.log(person1.SayHello())
    })
})();
