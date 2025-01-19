const pArray = window.document.querySelector(`#array`)
const btnVerificar = window.document.querySelector(`#btn_verificar`)
const pResult = window.document.querySelector(`#resultado`)

const array = [21, 25, 19, 20, 16, 18, 22]
pArray.innerHTML = `[` + array + `]`

btnVerificar.addEventListener(`click`, (evt)=>{
    const retorno = array.every((e,i)=>{
        if(e<18){
            pResult.innerHTML = `Array não conforme na posição ${i+1}` //Informa a posição do array que não estiver conforme 
        }
        return e>=18 //Se os elementos forem todos maioresmou iguais a 18, ele retorna true
    })
    if(retorno){
        pResult.innerHTML = `OK`
    }
})

//O metodo every verifica se todos os elementos equivalem a uma certa condição/pesquisa, e se equivalem, será retornado true, senão false