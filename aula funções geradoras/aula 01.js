function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc = cores() //O iterador recebe a função

console.log(itc) //Serve apenas para mostrar que é uma função geradora
console.log (itc.next()) //Vai para o primeiro yield, porem por não ter o .value, o valor de vermelho não é mostrado
console.log (itc.next().value) //Vai para o segundo yield
console.log (itc.next().value) //Vai par o terceiro yield

function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

itc = perguntas()

console.log(itc.next().value) //Pega o primeiro yield da função geradora
console.log(itc.next("Guilherme").value) //Atribui o parametro na variavel do primeiro yield e já executa o segundo yield.
console.log(itc.next("Queimada").value) //Atribui o parametro na variavel do segundo yield e ja executa a proxima linha que é o return

function* contador(){
    let i = 0
    while(true){
        yield i++
    } //While true é um loop infinito, logo ele vai exibir um numero de i + 1 sempre que a função for chamada
}

itc = contador()
for (let i = 0; i < 10; i++){
    console.log(itc.next().value)
} 