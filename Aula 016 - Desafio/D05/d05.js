let num = window.document.querySelector(`input#num`)
let lista = window.document.querySelector(`select#lista`)
let res = window.document.querySelector(`input#res`)
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
        
    }
}