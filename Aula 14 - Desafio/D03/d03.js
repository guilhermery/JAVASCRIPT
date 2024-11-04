function contar(){
    var res = window.document.querySelector(`div#res`);
    var i = window.document.querySelector(`input#inicio`);
    var f = window.document.querySelector(`input#fim`);
    var p = window.document.querySelector(`input#passo`);
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        window.alert(`[ERRO] Faltam dados!`);
    } else{
        var emoji_mao = '\u{1F449}' /*Usar codigo do unicode*/
        var emoji_chegada = '\u{1F3C1}'
        res.innerHTML = "<p>Contando:</p>"
        if (p == 0){
            window.alert(`[ERRO] Passo invalido, considerando PASSO 1!`);
            for(var c = i; c < f; c++){
                res.innerHTML += `${c} ${emoji_mao} `
            }
            res.innerHTML += `${emoji_chegada}`
        } else{
        for(var c = i; c < f; c = c + p){
            res.innerHTML += `${c} ${emoji_mao} `
        }
        res.innerHTML += `${emoji_chegada}`
        }
    }
    }   