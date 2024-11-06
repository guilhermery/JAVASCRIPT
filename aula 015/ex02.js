let num = [1, 5, 3];
num[3] = 2
num.sort() /*Coloca os números em ordem crescente*/
num.push(4)/*Serve para criar e colocar um elemento na ultima posição*/
let tam = num.length /*serve para saber o tamanho do array*/
for(let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
} /*Para cada i dentro de num, vou fazer o seguinte bloco: console.log(num[i])*/
console.log(num.indexOf(4)) /*Serve para buscar o index de um valor determinado dentro de um array, ou seja, localiza um valor no array*/
console.log(num.indexOf(9)) /*Irá ter como saída o numero -1 pois não há nenhum 9 no array, então ele buscou e não achou e imprime o -1*/
console.log(`O vetor tem ${tam} posições`)
if(num.indexOf(8) == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${num.indexOf(8)}`)
}