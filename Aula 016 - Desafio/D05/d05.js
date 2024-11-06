let num = window.document.querySelector(`input#num`)
let lista = window.document.querySelector(`select#lista`)
let res = window.document.querySelector(`div#res`)
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, list){
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adiciona(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.innerText = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`[ERRO!] Valor inválido ou já encontrado na lista`)
    }
    num.value = '' /*Para apagar o numero anterior da barra*/
    num.focus() /*Para o cursor piscar*/
} 

function finalizar() {
    if(valores.length == 0){
        window.alert(`Adicione um valor antes de finalizar`)
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let s = 0 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        for (let c in valores){
            if (maior < valores[c]){
                maior = valores[c]
            } else if (menor > valores[c]){
                menor = valores[c]
            }
            s = s + valores[c]
        }
        let media = s/tot
        res.innerHTML += `<p>O maior número cadastrado é ${maior}.</p>`
        res.innerHTML += `<p>O menor número cadastrado é ${menor}.</p>`
        res.innerHTML += `<p>A soma entre todos os valores é igual a ${s}.</p>`
        res.innerHTML += `<p>A media entre todos os valores é ${media.toFixed(2)}.</p>` /*o toFixed é o numero de casas decimais que eu desejo*/
    }
}