//As arrow functions são simples, pois ele mostra que os parametros irão ser utilizados dentro da função, ou seja, vão de um lugar para outro, apontados pela seta
const soma = (v1, v2)=>{return v1 + v2}

console.log (soma(1,4))

const nome = n=>{return n} //Se for apenas um parametro, não é necessário usar os parênteses

console.log(nome("Bruno"))

const add = n=>n+10 //Quando não se usa return, não precisa usar as chaves, a saída é automática

console.log (add(3))