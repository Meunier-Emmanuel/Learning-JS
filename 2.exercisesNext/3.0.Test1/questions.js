/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    // let a = texte.indexOf("e")
    // let text = texte.substr(" ",a) + " " +texte.substr(a+1,texte.length);
    // return text
    // const texte1= texte.substring(0,1)
    // const texte2 = texte.substring(2)
    // return texte1 +" " +  texte2
    const texte1= texte.substring(0,1)
    const texte2 = texte.substring(2)
    return texte1 +" " +  texte2

}
let concatString = (texte1, texte2) => {
    // return texte1.concat( texte2)
    return texte1 + texte2
}
let afficherCar5 =  (texte) => {
    return texte.charAt(4)
}
let afficher9Car =  (texte) => {
    return texte.slice(0,9)
}
let majusculeString =  (texte) => {
    return texte.toUpperCase()
}
let minusculeString =  (texte) => {
    return texte.toLowerCase()
}
let SupprEspaceString =  (texte) => {
    return texte.trim()
}
let IsString =  (texte) => {
    if(String(texte))
    return true
}

let AfficherExtensionString =  (texte) => {
    return texte.slice(15,18)
    // console.log(texte.indexOf("j"));
    // let variable = texte.split(".")
    // return variable[1]
    
}
let NombreEspaceString =  (texte) => {
 return texte.split(" ").length-1
 
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join("")
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y)
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray =  (array) => {
    let nombre = []
    array.forEach(chiffre => {
        nombre.push(Math.abs(chiffre))
    });
    return nombre
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI*Math.pow(rayon,2))
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(Math.pow(ab,2)+Math.pow(ac,2))
}
let calculIMC =  (poids, taille) => {
    return parseFloat((poids/(taille*taille)).toFixed(2))
}
