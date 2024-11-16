//A função callback é um recurso muito utilizado em JavaScript, que permite executar uma função após uma ação.
//É um conceito fundamental para entender a programação assincrona do JavaScript, ou seja, que depende de um recurso para executar uma ação
//O que caracteriza o callback é passar uma função como argumento para outra função e executar ela

function exibir(num){
    console.log(`A operação resultou em ${num}`)
} //Essa será a função de callback que precisa ser chamada

function soma(a, b, callback){
    let op = a + b;
    callback(op)
} //Essa é a função soma que usa a função callback para exibir o resultado da operação

function multiplicacao(a, b, cb){
    let op = a * b;
    cb(op);
} //Essa éa  função multiplicação que usa a função callback para exibir o resultado da operação

soma(2, 2, exibir) //Aqui botamos os parametros e o callback

multiplicacao(2, 4, exibir)