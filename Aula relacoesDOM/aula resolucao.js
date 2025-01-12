const caixa1 = window.document.querySelector(`#caixa1`)
const divc1 = window.document.querySelector(`#c1`)
const divc2 = window.document.querySelector(`#c2`)
const divc6 = window.document.querySelector(`#c6`)

//A caixa é Parent do divc1, c2 e c6.
//Os divs c1, c2 e c6 são child da caixa1 e são siblings entre si, no caso a divc2 é o nextsibling do divc1. 
//A divc1 é a firstelementchild e a divc6 é lastelementchild da caixa1
//A childnode mostra tanto os child elementos quanto os child textos, o firstchild da caixa1 é um texto, mas firstelementchild é c1, pois ele é um elemento children.

console.log(caixa1.children[0]) //Mostra o primeiro elemento filho (divc1)

console.log(caixa1.children[caixa1.children.length-1]) //Pega o ultimo elemento filho da caixa, pois pega o tanto de elementos filhos e subtrai de 1 para mostrar o ultimo

console.log(caixa1.firstElementChild) //Também mostra o primeiro.

console.log(caixa1.lastElementChild) //Também mostra o ultimo elemento.

console.log(caixa1.children) //Mostra todos os elementos filhos de caixa1

console.log(divc1.getRootNode()) //Mostra o nó raiz, que sempre será o document