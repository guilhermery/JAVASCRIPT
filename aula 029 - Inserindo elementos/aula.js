//Podemos inserir elementos dentro de outro com JavaScript através do DOM, sendo uma forma de acrescentar um elemento como filho a outro

let elemento = window.document.createElement(`div`) //Criei o elemento como uma div

elemento.classList.add(`div-criada`) //Adicionei uma classe ao elemento criado. Podemos excluir classes de um elemento com classList.remove ou alternar entre adicionar e excluir com classList.toggle (se a classe existir, será removida, e se não existir sera criada)

let container = window.document.querySelector(`div#container`) //Acessei a div container que será a div pai

container.appendChild(elemento) //Adicionei o elemento como uma div filho do container

let p0 = window.document.createElement(`p`) //Criei o elemento p0 como um parágrafo que será inserido no elemento

let text0 = window.document.createTextNode(`Esse está no elemento 1`) //Criei o text0 como o texto que sera inserido ao parágrafo

p0.appendChild(text0) //Inseri o texto ao paragrafo

elemento.appendChild(p0) //Inseri o paragrafo dentro da div elemento

//insertBefore

let elemento2 = window.document.createElement(`div`) //Criei o elemento 2 como outra div

let p1 = window.document.createElement(`p`) //Criei p1 como o paragrafo que sera inserido no elemento 2

let text1 = window.document.createTextNode(`Esse está no elemento 2`) //Criei o text1 que será inserido no p1

p1.appendChild(text1) //Inseri o text1 dentro do paragrafo

elemento2.appendChild(p1) //Inseri o paragrafo dentro do elemento 2

elemento2.id = `div-before` //Criei um id para o elemento 2 assim como criei uma classe para o elemento 1. Para remover o id de um elemento, podemos botar apenas elemento2.id = `` sem nada dentro. Para substituir o id de um elemento podemos botar elemento2.id = `novoid` sem usar nenhuma função distinta.

container.insertBefore(elemento2, elemento) //Usei a função insertBefore para inserir o elemento 2 dentro do container antes do elemento 1. Os parametros são: o elemento que deseja inserir, elemento que deseja que fique após o elemento inserido