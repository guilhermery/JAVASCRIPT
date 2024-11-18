//O evento keydown é ativado quando uma tecla é pressionada
//Quando a tecla volta a posição normal, podemos atrelar um evento keyup

//Keydown

document.addEventListener(`keydown`, function kd(event){
    console.log(event.key)
    if(event.key == `Enter`){
        console.log("Você pressionou enter!")
    }
})

//Keyup
document.addEventListener(`keyup`, function ku(event){
    if(event.key == `Enter`){
        console.log(`Soltou o enter`)
    }
})