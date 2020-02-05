
//EX 1
let divsHover = document.querySelectorAll(".hoverMe")
// console.log(divsHover)
divsHover.forEach(div => {
    div.addEventListener("mouseover",(event)=>{
    div.style.opacity ="0"
    div.style.transitionDuration="0s"
})
});

//EX 2

document.querySelector("#reset").addEventListener("click",()=> {
    
    divsHover.forEach(div => {
            div.style.transitionDuration='1s'
            div.style.opacity="1"
    });
})

//EX

document.addEventListener("mousemove",(recu)=>{
    // console.log(event.x)
    document.querySelector('#axe-x').innerText=recu.x
    document.querySelector('#axe-y').innerText=recu.y
})