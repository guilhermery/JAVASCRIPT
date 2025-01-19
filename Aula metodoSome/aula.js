const pArray = window.document.querySelector(`#array`)
const btnVerificar = window.document.querySelector(`#btn_verificar`)
const pResult = window.document.querySelector(`#resultado`)

const array = [21, 25, 19, 20, 16, 18, 22]
pArray.innerHTML = `[` + array + `]`

btnVerificar.addEventListener(`click`,()=>{
    const ret = array.some((e,i)=>{
        return e>=18
    })
    if(ret){
        pResult.innerHTML = `O elemento em conformidade ${e} está na posição ${i}`
    }
})


//O metodo SOME irá retornar true se pelo menos um dos valores do array coincidir com a pesquisa/condição