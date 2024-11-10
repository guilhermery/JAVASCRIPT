// length: mostra a quantidade de elementos que o vetor possui

let arr = [1, 2, 3, 4, 5]

console.log(arr.length)

// push: serve para adicionar um elemento ao vetor

arr.push(12)

arr.push('Qualquer coisa') // podemos add qualquer coisa ao array

console.log(arr)

console.log(arr[6])

// pop: remove o ultimo elemento do array

arr.pop() // Se eu atribuir essa propriedade a uma variavel, a variavel recebe o valor do elemento que foi removido

console.log(arr)

// unshift: adiciona um elemento no começo do array

arr.unshift(0) //adicionei o numero 0 no inicio do array

arr.unshift('teste')

console.log(arr)

// shift: remove um elemento do começo do array

arr.shift() //removeu o elemento teste

console.log(arr)

// como acessar o ultimo elemento do array

console.log(arr[arr.length - 1]) //o numero de elementos do array - 1 é igual ao indice do ultimo elemento

//isArray: serve para saber se estamos trabalhando com um array

console.log(Array.isArray(43)) //vai dar false pois é apenas um numero

console.log(Array.isArray(arr)) //da true pois arr é um array