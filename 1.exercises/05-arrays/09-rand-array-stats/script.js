/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener('click',() => {
        const table = ['n-1','n-2', 'n-3','n-4','n-5','n-6','n-7','n-8','n-9','n-10']
        var keys = []
        var nbre;
        var sum=0;
        for (let i=0;i<10;i++){
            nbre = document.getElementById(table[i]).innerHTML = Math.random()*100<<0
            keys.push(nbre);
        }
        var max = Math.max(...keys)
        var min = Math.min(...keys)

        keys.forEach(somme => {
            sum += somme ; 
        });
        var moyenne = sum/keys.length
        document.getElementById('max').innerHTML = max
        document.getElementById('min').innerHTML = min 
        document.getElementById('sum').innerHTML = sum 
        document.getElementById('average').innerHTML = moyenne
    })


    
})();
