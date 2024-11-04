function contar(){
    var res = window.document.querySelector(`div#res`);
    var i = Number(window.document.querySelector(`input#inicio`).value);
    var f = Number(window.document.querySelector(`input#fim`).value);
    var p = Number(window.document.querySelector(`input#passo`).value);
    if (p == 0){
        window.alert(`[ERRO] O passo deve ser diferente de 0!`)
    }else{
        var emoji_mao = '\u{1F449}' /*Usar codigo do unicode*/
        var emoji_chegada = '\u{1F3C1}'
        res.innerHTML = "<p>Contando:</p>"
        for(var c = i; c < f; c = c + p){
            res.innerHTML += `${c} ${emoji_mao} `
        }
        res.innerHTML += `${emoji_chegada}`
    }
}