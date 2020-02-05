const character = {
    name: "Deku",
    age: "18",
    items_to_give: ["armor", "boots", "weapon", "shield"]
}

for (const key in character) {
    if (character.hasOwnProperty(key)) {
        const element = character[key];
        console.log(element);

    }
}

function giveItem() {
    const random = Math.random() * character.items_to_give.length << 0
    console.log(`Sephyx vous donne ${character.items_to_give[random]}`)
}




//shop ligne 23 -> 160
//Création du constructeur d'item
class items {
    constructor(title, physic, magic, minLevel, available) {
        this.title = title
        this.physic = physic
        this.magic = magic
        this.minLevel = minLevel
        this.available = available
    }
}

//création des items
const sword = [new items("katana", 25, 0, 10, true),
    new items("Sabre", 100, 0, 1, true),
    new items("épée large", 20, 0, 5, false)
]

const axes = [new items("Hache lourde", 20, 0, 10, true),
    new items("hache double", 15, 0, 5, true),
    new items("hache légère", 10, 0, 1, false)
]

const sceptre = [new items("sceptre abyssal", 10, 0, 1, true),
    new items("baton de druide", 15, 0, 5, true),
    new items("sceptre of god", 20, 0, 10, false)
]


//fonction affichage items
function logitems() {
    for (let i = 0; i < sword.length; i++) {
        console.log(sword[i].title, sword[i].physic, sword[i].magic, sword[i].minLevel, sword[i].available)
    }
    for (let i = 0; i < axes.length; i++) {
        console.log(axes[i].title, axes[i].physic, axes[i].magic, axes[i].minLevel, axes[i].available)
    }
    for (let i = 0; i < sceptre.length; i++) {
        console.log(sceptre[i].title, sceptre[i].physic, sceptre[i].magic, sceptre[i].minLevel, sceptre[i].available)
    }
}


// fonction items disponibles
function available() {
    for (let i = 0; i < sword.length; i++) {
        if (sword[i].available === true) {
            console.log(`${sword[i].title} : disponible`)
        } else {
            console.log(`${sword[i].title} : rupture de stock`)
        }
    }
    for (let i = 0; i < axes.length; i++) {
        if (axes[i].available === true) {
            console.log(`${axes[i].title} : disponible`)
        } else {
            console.log(`${axes[i].title} : rupture de stock`)
        }
    }
    for (let i = 0; i < sceptre.length; i++) {
        if (sceptre[i].available === true) {
            console.log(`${sceptre[i].title} : disponible`)
        } else {
            console.log(`${sceptre[i].title} : rupture de stock`)
        }
    }
}


//function lvl requis
function LvlRequired() {
    for (let i = 0; i < sword.length; i++) {
        switch (sword[i].minLevel) {
            case 1:
                console.log(`${sword[i].title} : lvl requis - ${sword[i].minLevel}`)
                break;
            case 5:
                console.log(`${sword[i].title} : lvl requis - ${sword[i].minLevel}`)
                break;
            case 10:
                console.log(`${sword[i].title} : lvl requis - ${sword[i].minLevel}`)
                break;

        }
    }
    for (let i = 0; i < axes.length; i++) {
        switch (axes[i].minLevel) {
            case 1:
                console.log(`${axes[i].title} : lvl requis - ${axes[i].minLevel}`)
                break;
            case 5:
                console.log(`${axes[i].title} : lvl requis - ${axes[i].minLevel}`)
                break;
            case 10:
                console.log(`${axes[i].title} : lvl requis - ${axes[i].minLevel}`)
                break;

        }
    }
    for (let i = 0; i < sceptre.length; i++) {
        switch (sceptre[i].minLevel) {
            case 1:
                console.log(`${sceptre[i].title} : lvl requis - ${sceptre[i].minLevel}`)
                break;
            case 5:
                console.log(`${sceptre[i].title} : lvl requis - ${sceptre[i].minLevel}`)
                break;
            case 10:
                console.log(`${sceptre[i].title} : lvl requis - ${sceptre[i].minLevel}`)
                break;

        }
    }
}

//fonction lvl arme 10 et plus
function minlvl() {
    for (let i = 0; i < sword.length; i++) {

        if (sword[i].minLevel >= 10) {
            console.log(`${sword[i].title} ${sword[i].minLevel}`);
        }

    }
    for (let i = 0; i < axes.length; i++) {

        if (axes[i].minLevel >= 10) {
            console.log(`${axes[i].title} ${axes[i].minLevel}`);
        }

    }
    for (let i = 0; i < sceptre.length; i++) {

        if (sceptre[i].minLevel >= 10) {
            console.log(`${sceptre[i].title} ${sceptre[i].minLevel}`);
        }

    }
}

// personnage
// constructeur character

class char {
    constructor(name, lvl, life, weapon, attack) {
        this.name = name
        this.lvl = lvl
        this.life = life
        this.weapon = weapon
    }
    attack() {
        console.log(`${mainCharacter.name} attaque ${opponentCharacter.name} 
        avec l'arme ${mainCharacter.weapon}
        et lui inflige ${mainCharacter.lvl*weap.damage} de dégats
        ${opponentCharacter.name} a maintenant ${opponentCharacter.life-(mainCharacter.lvl*weap.damage)}`)
    }
}
class weapon {
    constructor(name, damage) {
        this.name = name
        this.damage = damage
    }
}

const player = new char("Sephyx", 20, 400, sword[1])
const weap = new weapon(sword[1].title, sword[1].physic)
const opponentCharacter = new char("Deamon", 5, 100, "hand")
const mainCharacter = new char ("Prohibate", 20, 400, weap.name)

// console.log(player,weap);
mainCharacter.attack()