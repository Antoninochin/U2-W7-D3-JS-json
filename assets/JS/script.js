
class animale {

    constructor(nome, razza, anni){
        this.nome = nome
        this.razza = razza
        this.anni = anni
    }
}
function onLoad(){
let salva = window.localStorage.getItem('visualizza')
    if(salva !== null){
        animali = JSON.parse(salva)
        clickForSee() 
    }
}


let animali = [
    new animale("Lucky,","Pastore Tedesco,", 7),
    new animale("Rocky,","Bulldog,", 5),
    new animale("Spike,","volpino,", 9),
    new animale("Teddy,","Maltese,", 4)
]


function clickForSee(){
    let animaliJSON = JSON.stringify(animali)
    window.localStorage.setItem('visualizza', animaliJSON)
    let div = document.getElementById('visualizza')
    div.innerHTML = ''
    for(let animale of animali){
        div.innerHTML += `<div>${animale.nome} ${animale.razza} ${animale.anni}</div>`
    }
}

function onLoadTwo(){
    let salva = window.localStorage.getItem('visualizza-2')
    if(salva !== null){
        utenti = JSON.parse(salva)
        utents()
    }
}

let utenti = [
    {"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz","phone": "1-770-736-8031 x56442","website": "hildegard.org","company": "Romaguera-Crona"},
    {"id": 2,"name": "Ervin Howell","username": "Antonette","email": "Shanna@melissa.tv","phone": "010-692-6593 x09125","website": "anastasia.net","company": "Deckow-Crist"},
    {"id": 3,"name": "Clementine Bauch","username": "Samantha","email": "Nathan@yesenia.net","phone": "1-463-123-4447","website": "ramiro.info","company": "Romaguera-Jacobson"},
    {"id": 4,"name": "Patricia Lebsack","username": "Karianne","email": "Julianne.OConner@kory.org","phone": "493-170-9623 x156","website": "kale.biz","company": "Robel-Corkery"},
    {"id": 5,"name": "Chelsey Dietrich","username": "Kamren","email": "Lucio_Hettinger@annie.ca","phone": "(254)954-1289","website": "demarco.info","company": "Keebler LLC"},
    {"id": 6,"name": "Mrs. Dennis Schulist","username": "Leopoldo_Corkery","email": "Karley_Dach@jasper.info","phone": "1-477-935-8478 x6430","website": "ola.org","company": "Considine-Lockman"}
    ]

    
    console.log(utentiJSON)

function utents(){
    let utentiJSON = JSON.stringify(utenti)
    window.localStorage.setItem('visualizza-2', utentiJSON)
    let div = document.getElementById('visualizza-2')
    div.innerHTML = ''
    for(let utente of utenti){
        div.innerHTML += `<div>${utente.name} ${utente.username} ${utente.email} ${utente.phone} ${utente.website} ${utente.company}</div>`
    }
}