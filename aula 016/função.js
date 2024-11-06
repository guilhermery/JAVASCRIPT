function parimp(n){
    if(n%2 == 0){
        return('par')
    } else {
        return('impar')
    }
}

let res = parimp(11) /*Faz a chamada com o parametro que ao chegar na função ele substitui a variavel n, executa a ação e retorna algo*/
console.log(res)
console.log(parimp(2))