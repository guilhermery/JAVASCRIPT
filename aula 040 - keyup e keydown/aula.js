//O evento keydown é ativado quando uma tecla é pressionada
//Quando a tecla volta a posição normal, podemos atrelar um evento keyup

//Keydown

document.addEventListener(`keydown`, function kd(event){
    console.log(event.key)
    if(event.key == `Enter`){ //O event mostra todas as informações obtidas por esse evento. Logo, event.key mostra só a parte em específica dentro do evento, que nesse caso foi a tecla pressionada.
        console.log("Você pressionou enter!")
    }
}) //Adicionei o evento de keydown ao documento, para sempre que eu pressionar uma tecla, ele imprimir na tela, e sempre que pressionar Enter ele imprimir uma frase. Deve ter cuidado em questão a manter o botão presssionado, pois se for feito, o keydown vai contar como se tivesse pressionando varias vezes seguidas 

//Keyup
document.addEventListener(`keyup`, function ku(event){
    if(event.key == `Enter`){
        console.log(`Soltou o enter`)
    }
}) //Adicionei o evento keyup ao documento para sempre que eu soltar o botão de enter, ele imprimir uma mensagem avisando que soltei o enter