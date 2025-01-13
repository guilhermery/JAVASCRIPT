const caixa1 = window.document.querySelector(`#caixa1`)
const cursos = [...window.document.querySelectorAll(`.curso`)]
const curso = [`HTML`, `CSS`, `JavaScript`, `PHP`, `React`, `MySQL`, `ReactNative`]

curso.map((el, chave)=>{ //Os dois parametros são o de cada elemento do array e da chave de cada um desses elementos (index)
    const novoElemento = window.document.createElement(`div`)
    novoElemento.setAttribute(`id`, `c`+ (chave+1)) 
    novoElemento.setAttribute(`class`, `curso c1`)
    novoElemento.innerHTML = el 
    
    const btn_lixeira = window.document.createElement(`img`)
    btn_lixeira.setAttribute(`src`, `icone_lixeira.png`) //Adicionei o src da imagem
    btn_lixeira.setAttribute(`class`, `lixeira`) //Adicionei uma classe para poder modificar a imagem e o cursor
    btn_lixeira.addEventListener("click", (evt)=>{
        const elementoremove = evt.target.parentNode
        caixa1.removeChild(elementoremove) //Criei uma variavel para o pai do icone da lixeira que é o elemento que queremos remover ao clicar na lixeira.
    }) 
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
}) 

