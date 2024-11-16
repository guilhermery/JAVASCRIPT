//São funções que podem ser usadas para criar ações e executar em um período de tempo determinados
//Um dos argumentos dessas funções é uma callback function. É uma função assincrona, pois é executada após demorar algum tempo ou cumprir algum requisito

//setTimeout: executa uma função após um tempo

console.log(`Antes do setTimeout`)

setTimeout(function() {
    console.log(`Testando o setTimeout`)
}, 1) //Os parametros são uma função de callback e o tempo que a função será executada em milissegundos

console.log(`Depois do setTimeout`) //Mesmo estando após a função, como a função timeout é assincrona, ela não segue a ordem sincrona e não interfere na ordem dos elementos, ela apenas executa após o tempo determinado

//setInterval: executa uma função após um tempo e continua executndo ela após cada intervalo de tempo definido

setInterval(function(){
    console.log(`Testando o setInterval`)
}, 1000) //Também tem os mesmos parametros do setTimeout