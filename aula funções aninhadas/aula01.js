const soma = (...valores) => {
    const somar = val => {
        let res = 0
        for (v of val){
            res = res + v
        } //Percorre todos os valores do spread
        return res //retorna o resultado para a função somar
    }
    return somar(valores) //A função soma retorna o retorno da função somar com os valores de parametro
}

console.log (soma(4,5,7,8,9,4))