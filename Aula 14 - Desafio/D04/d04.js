function tabuada(){
    var res = window.document.querySelector(`div#res`)
    var n = window.document.querySelector(`input#numero`)
    if(n.value.length == 0){
        window.alert(`[ERRO!] Digite um número`)
    } else{
        var n = Number(n.value)
        for(var c = 0;c <= 10; c++){
            var r = n*c;
            res.innerHTML += `<p>${n} X ${c} = ${r}</p>`
        }
    }
}