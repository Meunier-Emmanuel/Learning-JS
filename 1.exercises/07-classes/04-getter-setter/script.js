/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class person {
        constructor(firstname, lastname) {
            this.firstname = firstname
            this.lastname = lastname
        }
        get fullName() {
            return `${this.firstname} ${this.lastname}`
        }
        set fullName(value) {
            const space = value.split(' ')
            this.firstname = space[0]
            this.lastname = space[1]
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let moi = new person("Manu","Meunier")
        console.log(moi.fullName)
        moi.fullName = "pierre leboss";
        console.log(moi.fullName);
        console.log(moi);
    })

})();