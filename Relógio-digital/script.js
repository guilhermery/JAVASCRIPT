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
    } /*Para adicionar um 0 antes do horario, ex: 09 horas 12 minutos e 03 segundos*/
    horas.textContent = hr
    minutos.textContent = mins
    segundos.textContent = s /*Se usa textContent, pois ele sempre trata tudo como string puro, sem formatação e sem considerar números. O innerHTML trata números como números, logo ele não vê sentido adicionar um 0 a esquerda do número e acaba descartando. Desssa forma, se quiser usar innerHTML deve transferir a variavel para string com innerHTML = String(variavel)*/
}) 
/*Essa função funciona em um loop infinito enquanto o site estiver aberto ou receber um clearInterval()*/
