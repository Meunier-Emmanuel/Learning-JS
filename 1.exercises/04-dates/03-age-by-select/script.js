/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        let day = document.getElementById('dob-day').value;
        let month = document.getElementById('dob-month').value;
        let year = document.getElementById('dob-year').value;
        let today = new Date();
        let y = today.getFullYear();
        let d = today.getDay();
        let m = today.getMonth();
        let age = y - year;
        if (m > month) {
            age = age - 1
        }
        if (m = month && d < day)
            age = age - 1
        console.log(age)

    })
    // your code here

})();