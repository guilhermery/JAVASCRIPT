//Os iteradores são retornados por coleções, como arrays, map, etc... Isso serve para eu criar minha própria função de iteradores.

const valores = [10, 8, 9]
const it_valores = valores[Symbol.iterator]()

const texto = `youtube`
const it_texto = texto[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next()) //Retornará um objeto, com um valor (que no caso será o primeiro do array), e um done: false (que significa que ainda não chegou no final da coleção).
console.log(it_valores.next().value) //Retornará o valor da posição que o iterador está na coleção
console.log(it_valores.next().done) //Retornará o valor do done, informando se já está no fim da coleção ou não
console.log(it_valores.next()) //Retornará undefined, pois não tem mais valor, e um done: true, pois a coleção ja chegou ao fim.

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next()) //Chegou ao fim da string