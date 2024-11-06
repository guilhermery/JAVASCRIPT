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

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adiciona(){
    if(isNumero(num.value) && !(inLista(num.value, valores))){
        window.alert(`Tudo OK!`)
    } else {
        window.alert(`[ERRO!] Valor inválido ou já adicionado a lista`)
    }
} 