const caixa1 = window.document.querySelector(`#caixa1`)
const cursos = [...window.document.querySelectorAll(`.curso`)]
const curso = [`HTML`, `CSS`, `JavaScript`, `PHP`, `React`, `MySQL`, `ReactNative`]

curso.map((el, chave)=>{ //Os dois parametros são o de cada elemento do array e da chave de cada um desses elementos (index)
    const novoElemento = window.document.createElement(`div`)
    novoElemento.setAttribute(`id`, `c`+ (chave+1)) //Adiciona um id distinto para cada elemento, botei chave + 1 para ele iniciar no 1 ao invés do 0
    novoElemento.setAttribute(`class`, `curso c1`)
    novoElemento.innerHTML = el //InnerHTML vai pegar o elemento, que no caso já era um texto.
    caixa1.appendChild(novoElemento)
}) //Percorre todo o array de curso, criando uma div pra cada elemento