//Acessar o DOM é acessar um elemento do DOM e obter ele para poder manipular da forma que quisermos, parecido as regras do CSS
//É possível acessar um elemento do DOM por meio de tags, classes e ids

let titulo = window.document.getElementsByTagName('h1')[0] //Esse numero 0 indica qual h1 eu quero pegar, pois pode ter mais de um h1, e esse 0 é o primeiro elemento

let item3 = window.document.getElementsByTagName(`li`)[2]
let items = window.document.getElementsByClassName(`Item`)

console.log(item3)

function abrir(){
    item3.textContent = 'Olá mundo'
    let item2 = items[1] //Pode ser selecionado igual a um vetor/array
    item2.innerHTML = `Segundo item`
} //essa variável item2 só funciona dentro desse escopo, pois ela é uma variável que está dentro do objeto "abrir", diferente das variaveis item3 e items, que estão dentro do escopo global/window e funciona para todos os outros dentro dele