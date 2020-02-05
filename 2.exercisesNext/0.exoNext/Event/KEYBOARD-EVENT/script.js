let target = document.querySelector("div")

document.body.addEventListener("keydown", (event) => {
    let touche = event.keyCode
    console.log(touche)
    // de 96 à 115 (clavier numérique)
    switch (touche) {
        case 96:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 97:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 98:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 99:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 100:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 101:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 102:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 103:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 104:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 105:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 106:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 107:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 108:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 109:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 110:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 111:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 112:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 113:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 114:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
        case 115:
            target.style.backgroundColor = '#' + (Math.random() * 0xAAAAAA << 0).toString(16)
            break
    }

})