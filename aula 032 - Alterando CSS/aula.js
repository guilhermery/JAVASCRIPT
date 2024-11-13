//Podemos alterar on CSS por meio do JavaScript
//As regras do CSS ficam inline e sobrescrevem a maioria das outras regras pois fica como um atributo, logo é necessario ter cuidado para não sobrescever um elemento sem querer

let title = window.document.querySelector(`h1#title`) //selecionei o elemento title

title.style.color = `blue`; //Adicionei um estilo de cor ao titulo, alterando a cor para azul. É importante notar que mesmo eu botando outra cor no style.css, o style do javascript acaba sobrepondo e reescrevendo.

title.style.backgroundColor = 'yellow' //Adicionei um estilo de background ao titulo. É necessário prestar atenção em estilos que usam um traço, como o background-color, que no JavaScript temos que juntar. background-color -> backgroundColor

let subtitle = window.document.querySelector(`h2#subtitle`) //Selecionei o elemento subtitle

subtitle.style.cssText = `color: blue; background-color: pink; font-size: 20px;`; //Podemos adicionar varios estilos ao mesmo tempo em um elemento só com o cssText, utilizando a mesma organização do css normal com - e ;