const caixa1 = window.document.querySelector(`#caixa1`)
const cursos = [...window.document.querySelectorAll(`.curso`)]
const curso = [`HTML`, `CSS`, `JavaScript`, `PHP`, `React`, `MySQL`, `ReactNative`]

const novoElemento = window.document.createElement(`div`)
novoElemento.setAttribute(`id`, `c7`)
novoElemento.setAttribute(`class`, `curso c1`)
novoElemento.innerHTML = `ReactNative`

caixa1.appendChild(novoElemento)