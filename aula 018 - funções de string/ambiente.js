// length

let nome = "Matheus"

console.log(nome.length)

let obj = "bola"

console.log(obj.length)

//indexOf: pega a parte da string que diz respeito ao index 

console.log(nome[0])
console.log(nome[2])

let frase = "O rato roeu a roupa do rei de roma"

console.log(frase.indexOf('roeu')) //Em que numero começa a frase roeu

//slice: pega uma parte especifica da string

let roeu = frase.slice(7, 11) //Ele recorta de um número ate outro (recortei a partir do r de roeu ate o fim e adicionei um para o /0)

console.log(roeu)

//replace: serve para trocar frases ou espaços por outros

let novafrase = frase.replace("roeu", "teste")

console.log(novafrase)

//toLowerCase e toUpperCase: caixa alta e caixa baixa

let fraseCaixaAlta = (frase.toUpperCase()) //Criei uma variavel que pega a frase em caixa alta

console.log (fraseCaixaAlta)

let fraseCaixaBaixa = (frase.toLowerCase()) //Criei uma variavel que pega a frase em caixa baixa

console.log(fraseCaixaBaixa)

// trim: Serve para tirar espaços desnecessários de uma string

let novonome = "         Hello  World                 "

console.log (novonome)

let nometrim = novonome.trim()

console.log(nometrim)

//split: transforma uma variavel comum em um array

console.log(frase.split(" ")) //O espaço serve para separar cada parte do array por um parametro, que nesse caso é o espaço em branco

let tags = "PHP, JavaScript, Java, Python"

console.log(tags.split(", ")) //Separa as tags a cada , e espaço, sobrando só os nomes

//lastIndexOf: serve para achar o index de onde começa a ultima palavra que eu escolher, se houver duas, por exemplo

tags = "PHP, JavaScript, Python, Java, Python"

console.log(tags.indexOf('Python')) //Esse irá dar apenas onde começa o primeiro Python

console.log(tags.lastIndexOf('Python')) //Esse irá dar exatamente onde se encontra a ultima palavra Python