function calcula(){
    let peso = window.document.querySelector(`input#peso`).value.replace(',', '.')
    let altura = window.document.querySelector(`input#altura`).value.replace(',', '.') /**/
    let text = window.document.querySelector(`span#imc`)
    if(Number(altura) <= 0 || Number(peso) <= 0 || altura === '' || peso === '') {
        window.alert(`[ERRO!] Verifique se inseriu valores válidos`)
    } else {
        peso = Number(peso)
        altura = Number(altura)
        let imc = peso / (altura*altura)
        text.innerHTML = ``
        text.innerHTML = `Seu IMC: ${imc.toFixed(2)}`
    }
}