//Podemos alterar atributos via JS com o DOM, como alterar atributo alt de uma imagem ou o src. Todos os atributos podem ser alterados via JS

let title = window.document.querySelector(`h1#title`)

title.setAttribute(`class`, `testando-atributo`)

let btn = window.document.querySelector(`div#container button`)

btn.setAttribute(`disabled`, `disabled`)

let subtitle = window.document.querySelector(`h2#subtitle`)

subtitle.setAttribute(`id`, `titulo-2`)

//Assim como podemos adicionar atributos, também podemos remover

let lista = window.document.querySelector(`ul#lista`)

lista.removeAttribute(`id`)