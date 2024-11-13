//Podemos alterar atributos via JS com o DOM, como alterar atributo alt de uma imagem ou o src. Todos os atributos podem ser alterados via JS

let title = window.document.querySelector(`h1#title`) //Identifiquei e obti o titulo atraves do DOM

title.setAttribute(`class`, `testando-atributo`) //Adicionei um atributo de classe no DOM, com o nome "testando-atributo"

let btn = window.document.querySelector(`div#container button`) //Identifiquei e obti o button pelo DOM

btn.setAttribute(`disabled`, `disabled`) //Adicionei um atributo que faz com que o button seja desabilitado

let subtitle = window.document.querySelector(`h2#subtitle`) //Identifiquei e obti o subtitulo

subtitle.setAttribute(`id`, `titulo-2`) //Adicionei uma id no subtitulo, com nome de "titulo-2"

//Assim como podemos adicionar atributos, também podemos remover

let lista = window.document.querySelector(`ul#lista`) //Identifiquei e obti o elemento lista que desejo remover um atributo

lista.removeAttribute(`id`) //Removi o id do elemento lista, agora só resta ul sem id