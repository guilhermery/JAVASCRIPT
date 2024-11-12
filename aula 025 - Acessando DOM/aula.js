//Acessar o DOM é acessar um elemento do DOM e obter ele para poder manipular da forma que quisermos, parecido as regras do CSS
//É possível acessar um elemento do DOM por meio de tags, classes e ids

let titulo = window.document.getElementsByTagName('h1')[0] //Esse numero 0 indica qual h1 eu quero pegar, pois pode ter mais de um h1, e esse 0 é o primeiro elemento

let item3 = window.document.getElementsByTagName(`li`)[2]
let items = window.document.getElementsByClassName(`Item`)

console.log(item3)

function abrir(){
    item3.textContent = 'Olá mundo'
    let item2 = items[1]
    item2.innerHTML = `Segundo item`
}