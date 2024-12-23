let f = function(...valores){
    let res = 0
    for (v of valores){
        res = res + v
    }
    return res
}

console.log(f(1,3))

//Função construtor:

let n = new Function("n1", "n2", "return n1+n2") //É necessário colocar os parametros e o corpo da função (o que ela fará com os parâmetros)

console.log(n(3, 6))