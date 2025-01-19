const pArray = window.document.querySelector(`#array`)
const btnVerificar = window.document.querySelector(`#btn_verificar`)
const pResult = window.document.querySelector(`#resultado`)

const array = [21, 25, 19, 20, 16, 18, 22]
pArray.innerHTML = `[` + array + `]`

btnVerificar.addEventListener(`click`,(evt)=>{
    const ret = array.some((e,i)=>{
        if(e<18){
            pResult.innerHTML = `O array não conforme está na posição ${i+1}`
        }
        return e>=18
    })
    if(ret){
        pResult.innerHTML = `Há pelo menos um resultado equivalente a pesquisa`
    }
})


//O metodo SOME irá retornar true se pelo menos um dos valores do array coincidir com a pesquisa/condição