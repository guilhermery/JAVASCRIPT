const pArray = window.document.querySelector(`#array`)
const btnReduzir = window.document.querySelector(`#btn_reduzir`)
const pResult = window.document.querySelector(`#resultado`)

const array = [1, 2, 3, 4, 5, 6]
let ant = []
let atu = []
let dobro = []

pArray.innerHTML = `[` + array + `]`

btnReduzir.addEventListener(`click`, (evt)=>{
    dobro.push(array[0]*2)
    pResult.innerHTML = array.reduce((anterior, atual, posicao)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior
        //O parametro anterior, é um acumulador entre a soma do valor atual e o valor anterior a ele
    })
    pResult.innerHTML += `<br/> ${ant} <br/> ${atu} <br/> ${dobro}` //Mosra quais são os valores anteriores e os valores atuais 
})

//O metodo REDUCE permite fazer uma redução do array com as especificações