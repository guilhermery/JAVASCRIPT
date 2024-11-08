function calcula(){
    let peso = parseFloat(window.document.querySelector(`input#peso`))
    let altura = parseFloat(window.document.querySelector(`input#altura`))
    let text = window.document.querySelector(`span#imc`)
    altura = altura*altura;
    let imc = (peso/altura).toFixed(2)
    
}