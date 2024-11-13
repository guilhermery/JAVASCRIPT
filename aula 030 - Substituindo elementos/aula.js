//Podemos substituir elementos do HTML utilizando o DOM por meio do JavaScript, trocando uma tag por outra

let el = window.document.createElement(`h3`) //Criei o elemento h3

el.classList.add(`testando-classe`)//Adicionei uma classe ao elemento

let text = window.document.createTextNode(`Esse é o texto do h3`)//Criei um texto que será inserido no elemento

el.appendChild(text)//Inseri o texto no elemento pai

//selecionar o elemento que quero trocar

let title = window.document.querySelector(`h1#title`) //Identifiquei o titulo e obti como variavel

//selecionar o pai do elemento

let pai = title.parentNode //Serve para pegar o elemento pai de outro elemento, que no caaso o pai é o body e o h1 é o titulo

//trocar os elementos

pai.replaceChild(el, title) //A função que serve para trocar os filhos de um elemento, que tem como parametro: o que desejo inserir no lugar, o que desejo tirar/substituir