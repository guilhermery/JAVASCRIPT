function soma(n1, n2){
    return n1+n2;
}

console.log(soma(10,5))

function somanovo(...valores){
    let tam = valores.length
    let res = 0
    for(let i = 0 ; i < tam;i++){
        res = res + valores[i];
    }
    return res
}

console.log(somanovo(10, 5, 12, 15, 9))