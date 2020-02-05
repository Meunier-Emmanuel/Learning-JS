document.body.addEventListener("keydown", (event) => {
    let touche = event.keyCode
    // top:38 => bottom : 40 => left :37 => right : 39
    console.log(touche)
    switch (touche) {
        case 37:
            document.getElementById("left").setAttribute("class", "highlight")
            break
        case 38:
            document.getElementById("up").setAttribute("class", "highlight")
            break
        case 39:
            document.getElementById("right").setAttribute("class", "highlight")
            break

        case 40:
            document.getElementById("down").setAttribute("class", "highlight")
            break

    }
})
    document.body.addEventListener("keyup", (event) => {
        let touche = event.keyCode
        // top:38 => bottom : 40 => left :37 => right : 39
        console.log(touche)
        switch (touche) {
            case 37:
                document.getElementById("left").removeAttribute("class", "highlight")
                break
            case 38:
                document.getElementById("up").removeAttribute("class", "highlight")
                break

            case 39:
                document.getElementById("right").removeAttribute("class", "highlight")
                break
            case 40:
                document.getElementById("down").removeAttribute("class", "highlight")
                break
        }

    })

