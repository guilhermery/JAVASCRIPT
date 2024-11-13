//Podemos substituir elementos do HTML utilizando o DOM por meio do JavaScript, trocando uma tag por outra

let el = window.document.createElement(`h3`)

el.classList.add(`testando-classe`)

let text = window.document.createTextNode(`Esse é o texto do h3`)

el.appendChild(text)

//selecionar o elemento que quero trocar

let title = window.document.querySelector(`h1#title`)

//selecionar o pai do elemento

let pai = title.parentNode //Serve para pegar o pai de um elemento, que ensse caso vai ser o body

//trocar os elementos

pai.replaceChild(el, title) //A função que serve para trocar os filhos de um elemento, que tem como parametro: o que desejo inserir no lugar, o que desejo tirar/substituir