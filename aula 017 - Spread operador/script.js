const jogaodor = {
    nome: `Bruno`,
    energia:100,
    vidas:3,
    magia:150,
}
const jogador2 = {
    nome: `Kaio`,
    energia:100,
    vidas:5,
    velocidade: 80,
}
//O jogador 3 recebe uma concatenação de objetos. Ou seja, se ouver variáveis iguais, ele irá adicionar as propriedades do ultimo objeto colocado, que no caso é o jogador 2, porém se tiver variáveis diferentes, ele ira adicionar as propriedades dos dois objetos colocados, como propriedades de magia e velocidade.
const jogador3 = {
    ...jogaodor,...jogador2 
}

let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44]
//Spread para copiar os elementos do n1 e do n2 para o n3 [...n]
let n3 = [...n1,...n2] 

console.log(`n1: `+ n1)
console.log(`n2: ` + n2)
console.log(`n3: `+ n3)
console.log(jogador3)