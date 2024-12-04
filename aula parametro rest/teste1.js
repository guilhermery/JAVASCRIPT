function soma(n1, n2){
    return n1+n2;
}

console.log(soma(10,5))

//Utiliza-se o spread para transformar os valores passados como parametros em elementos de um array "valores".
function somanovo(...valores){
    let tam = valores.length
    let res = 0
    for(let i = 0 ; i < tam;i++){
        res = res + valores[i];
    }
    return res
} //Para essa função, primeiro foi necessario encontrar o tamanho do array valores (que indica a quantidade de elementos que está dentro dele) e apos isso usar o for para percorrer cada elemento e somar.

console.log(somanovo(10, 5, 12, 15, 9))