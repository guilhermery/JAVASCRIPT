// length

const nome = "Matheus"

console.log(nome.length)

const obj = "bola"

console.log(obj.length)

//indexOf: pega a parte da string que diz respeito ao index 

console.log(nome[0])
console.log(nome[2])

const frase = "O rato roeu a roupa do rei de roma"

console.log(frase.indexOf('roeu')) //Em que numero começa a frase roeu

//slice: pega uma parte especifica da string

const roeu = frase.slice(7, 11) //Ele recorta de um número ate outro (recortei a partir do r de roeu ate o fim e adicionei um para o /0)

console.log(roeu)

//replace: serve para trocar frases ou espaços por outros

const novafrase = frase.replace("roeu", "teste")

console.log(novafrase)