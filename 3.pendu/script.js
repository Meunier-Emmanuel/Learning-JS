function guessLetter() {
    let find = []
    let guess = new Set([])
    let numb = 0
    let mots = prompt("entrez un mots")
    let compteur = 0
    mots = mots.split("")
    for (i = 0; i < mots.length; i++) {
        find.push(" _")
    }
    while (numb != find.length) {
        let letter = prompt("entrez une lettre")
        compteur++
        guess.forEach(element => {
            if (element === letter) {
                compteur--
            }
        });
        if (letter != null) {
            for (let i = 0; i < mots.length; i++) {
                if (letter === mots[i]) {
                    numb++

                    find[i] = mots[i]
                } else {
                    guess.add(letter)

                }
            }
        }
        if (numb === find.length) {
            alert("gg")
        }
        if (compteur >= 15) {
            alert("you loose : try again");
            break
        }


        console.log(find.join(""));
        //  for (let item of guess) {
        //      console.log(`letters tried ${item}`)
        //  }
        let tab = []
        for (const item of guess) {
            tab.push(item)
        }
        console.log(`letters try : ${tab.join()} `);
        
        console.log("nombre d'essais :" + compteur);
    }
}

document.getElementById("bouton").addEventListener("click", guessLetter)