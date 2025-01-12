const caixa1 = window.document.querySelector(`#caixa1`)
const divc1 = window.document.querySelector(`#c1`)
const divc2 = window.document.querySelector(`#c2`)
const divc6 = window.document.querySelector(`#c6`)
const c1_2 = window.document.querySelector(`#c1_2`)

console.log(c1_2.parentNode) //Retorna o pai do c1_c2, que é o c1_1

console.log(c1_2.parentNode.parentNode) //Retorna o pai do pai do c1_c2, ou seja, o c1. Retorna o avÔ do c1_c2  

console.log(caixa1.hasChildNodes()) //Mostra se caixa1 possui filhos, seja elementos ou textos 

console.log(divc1.hasChildNodes()) //Mostra se divc1 possui filhos, seja elementos ou textos

console.log(divc1.childNodes) //Mostra os filhos de divc1 que no caso é apenas o texto

if(divc1.children.length > 0){
    console.log(`Possui filhos`)
} else {
    console.log(`Não possui filhos`)
} //Mostra se a divc1 possui elementos filhos, não incluindo os text

console.log(caixa1.children.length > 0 ? `Possui filhos` : `Não possui filhos`) //É uma estrutura ternária que também identifica se um elemento possui elementos filhos, sem incluir os text

/* caixa1.firstElementChild.innerHTML = `Teste` //Mudei o texto do primeiro elemento filho de caixa1 */

caixa1.children[1].innerHTML = `Teste2` //Mudei o texto do segundo elemento filho do caixa