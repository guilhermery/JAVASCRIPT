function tabuada(){
    let tab = window.document.querySelector(`select#setab`)
    let num = window.document.querySelector(`input#numero`)
    if(num.value.length == 0){
        window.alert(`[ERRO!] Digite um número`)
    } else{
        let n = Number(num.value)
        tab.innerHTML = ""
        for(let c = 1;c <= 10; c++){
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) /*Para atribuir o item ao tab como um filho*/
       }
    }
}