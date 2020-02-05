let target = document.querySelector("blockquote footer")
let targetq = document.querySelector("blockquote p")

async function Data() {
    let response = await fetch("https://thatsthespir.it/api")
    let data = await response.json()
    
        .then(donnee => {
            try{
            targetq.innerHTML = donnee.quote
            target.innerHTML = donnee.author
            document.querySelector("img").setAttribute("src",donnee.photo)
            }
            catch{
                alert("erreur")
            }
        })
}
Data()
