/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }

    }
    class cat extends Animal {
        static greeting = "miaou"
        constructor(name) {
            super()
            this.name = name;

        }
    }
    class dog extends Animal {
        static greeting = "wouf wouf"
        constructor(name){
            super()
            this.name = name ;
        }
    }
    document.getElementById("run").addEventListener('click',()=>{
    let cat1 = new cat("kitty")
    let dog1 = new dog ("doggy")
    console.log(cat1.sayHello())
    console.log(dog1.sayHello())
    } )

})();