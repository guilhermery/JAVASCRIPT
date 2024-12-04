//Podemos usar funções de parametro rest quando não sabemos quantos valores iremos utilizar de parametro

function soma(n1, n2){
    return n1+n2;
} //Essa é uma função de soma comum com dois parametros

console.log(soma(10,5)) //Exibe o resultado da função soma

function somanovo(...valores){
    let res = 0 //inicializei a variavel res com 0
    for(let i of valores){
        res = res + i; //Para i percorrendo a variavel valores, somamos o resultado com ele mesmo + os valores de i.
    }
    return res
} //Essa é a função soma com o parametro rest e o for of que percorre todos os numeros presentes no array valores

console.log(somanovo(10, 5, 12, 15, 9)) //Exibe o resultado da função soma de parametro rest