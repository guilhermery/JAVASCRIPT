const horas = window.document.querySelector(`span#horas`) /*Não se usa let pois a variavel não irá mudar*/
const minutos = window.document.querySelector(`span#minutos`)
const segundos = window.document.querySelector(`span#segundos`)

const relogio = setInterval(function time(){
    let data = new Date()
    let hr = data.getHours()
    let mins = data.getMinutes()
    let s = data.getSeconds()
    if (hr < 10){
        hr = '0' + hr
    }
    if (mins < 10){
        mins = '0' + mins
    }
    if (s < 10){
        s = '0' + s
    }
    horas.innerHTML = hr
    minutos.innerHTML = mins
    segundos.innerHTML = s
}) /*Essa função funciona em um loop infinito enquanto o site estiver aberto ou receber um clearInterval()*/
