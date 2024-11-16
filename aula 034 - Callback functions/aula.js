//A função callback é um recurso muito utilizado em JavaScript, que permite executar uma função após uma ação
//É um conceito fundamental para entender a programação assincrona do JavaScript, ou seja, que depende de um recurso para executar uma ação
//O que caracteriza o callback é passar uma função como argumento para outra função e executar ela

function exibir(num){
    console.log(`A operação resultou em ${num}`)
}

function soma(a, b, callback){
    let op = a + b;
    callback(op)
}

function multiplicacao(a, b, cb){
    let op = a * b;
    cb(op);
}

soma(2, 2, exibir)

multiplicacao(2, 4, exibir)