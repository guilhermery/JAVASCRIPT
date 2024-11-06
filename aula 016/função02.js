function soma(n1 = 0, n2 = 0){
    return n1 + n2
} /*Dessa forma, se eu passar apenas um parametro como fiz abaixo, o n1 sera 2 e o n2 será 0, pois seguirá os parametros da função*/

let s = soma(2, 6)
console.log(soma(2)) /*Como eu só passsei um parametro, n1 vira 2 e n2 fica indefinido, logo a soma entre os dois é NaN (not a number)*/