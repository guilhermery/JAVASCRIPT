const pArray = window.document.querySelector(`#array`)
const txtpesquisar = window.document.querySelector(`#text_pesquisar`)
const btnPesquisar = window.document.querySelector(`#btn_pesquisar`)
const resultado = window.document.querySelector(`#resultado`)

const elementosArray = [`HTML`, `CSS`, `PHP`, `JavaScript`, `MySQL`]

pArray.innerHTML = `[`+elementosArray+`]`

btnPesquisar.addEventListener(`click`,(evt)=>{
    const ret = elementosArray.find((e, i)=>{
        if(e.toUpperCase().toLowerCase()==txtpesquisar.value){
            resultado.innerHTML = `Valor pesquisado ${e} na posição ${i+1}`
            return e
        }
    }) //O find passa por todos os elementos do array ate encontrar o que é necessário, se for encontrado, retornará true, se não for, retornará undefined
    console.log(ret)
})

//Botei o if com o elemento e.toUpperCase e toLowerCase para funcionar com letras maiusculas ou minusculas, contanto que seja a mesma palavra
