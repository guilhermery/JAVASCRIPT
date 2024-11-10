let arr = [1, 2, 3, 4, 5]

//splice: serve para adicionar um elemento entre outros, em um local especifico

arr.splice(2, 0, 999) //Os parametros são: splice(indice em que quero adicionar elemento, o numero de elementos que deseja deletar, o elemento que deseja adicionar)

console.log(arr) //adicionou o 999 no indice dois, entre o 2 e o 3

arr.splice(4, 1, 'oii') //Exclui um elemento do indice 4, e coloquei o elemento 'oii' no lugar

console.log(arr)

arr.splice(4,1) //Se não colocar um elemento para substituir, o elemento do index que escolhi sera removido

//indexOf: Encontra o index de um elemento

let index = arr.indexOf(5)

console.log(index) //o index é 4 pois eu apaguei o outro elemento que possuia index 4, logo o 5 voltou uma casa e virou index 4 

// join: transforma arrays em string

let arr2 = ['o', 'rato', 'roeu', 'a', 'roupa']

let str_arr = arr2.join(" ") //O parametro é como ele ira separar cada elemento do array

console.log(str_arr)

// reverse: inverter os elementos do array

console.log(arr.reverse()) //inverteu elementos do array 1
