//O metodo filter vai servir para retornar um array filtrado somente com os elementos que eu desejo tirados de outro array

// const filtromaior18 = (valor, indice, array), o filter aceita esses tres tipos de parametro, o valor, o indice de cada valor e o array passado
const filtromaior18 = (valor)=>{
    if(valor >= 18){
        return valor;
    }
}
const idades = [15, 21, 30, 17, 18, 44, 12, 50]
const maior18 = idades.filter(filtromaior18) //Passei uma função para o filter 
const menor18 = idades.filter((val, ind, arr)=>{
    if(val < 18){
        return val;
    }
})

console.log(idades) //retorna array inteiro
console.log(maior18) //retorna array somente com numeros iguais ou maiores que 18
console.log(menor18) //retorna array somente com numeros menores que 18