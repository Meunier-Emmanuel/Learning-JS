const canvas = document.getElementById('canvas');
canvas.style.border = "solid", "black"
canvas.height = 600
canvas.width = 1000
let fireX = 400
let fireY=550
let targetX = 0
let targetY = 0
let v = 20
const ctx = canvas.getContext('2d')
ctx.fillRect(fireX, 550, 20, 60)
ctx.fillRect(targetX, targetY, 20, 20)

//deplacement du "canon"
document.addEventListener("keydown", () => {
    let touche = event.keyCode
    ctx.clearRect(0,0, canvas.width,canvas.height)
    ctx.fillRect(fireX, 550, 20, 60)
    ctx.fillRect(targetX, targetY, 20, 20)
    switch (touche) {
        case 37: // left 
            ctx.fillRect(fireX, 550, 20, 60)
            fireX -= 10
            break
        case 39: //right 
            ctx.fillRect(fireX, 550, 20, 60)
            fireX += 10
            break
        case 32: //space
        let int = setInterval(() => {
            ctx.fillRect(fireX,fireY,10,10)
        
        }, 50);
        if(fireY===0){
            clearInterval(int)
        }
        break
        
    }
})

//deplacement de la cible

// for (let i=0;i<canvas.height-60;i++){
//     targetY++
//     while(targetY>1000){
        
//         targetX += 20
//     }
// }

const pioupiou = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, 540)
    ctx.fillRect(targetX, targetY, 20, 20)
    // console.log(targetX);
    if(targetX>canvas.width-40 || targetX<0){
        v = -v
        targetY+=20
        // console.log(targetY);
    }
    if (targetY === 540) {
        console.log("U LOOSE ")
        ctx.clearRect(0,0,canvas.width,540)
        targetX=0
        targetY=0
    }
    targetX +=v
    // else{
    //     clearInterval(pioupiou);
    //     targetX-=20
    // }
}, 100);