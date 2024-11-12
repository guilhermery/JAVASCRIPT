//Podemos alterar conteudos via JavaScript de diferentes formas e com facilidade
//Também podemos atrelar essa ação a um evento

let title = window.document.querySelector(`h1#title`) //selecionando o elemento
let subtitle = window.document.querySelector(`h2#subtitle`)
//innerHTML -> 

title.innerHTML = 'Testando o texto alterado'

//textContent -> mais utilizado, recomendado e performático

subtitle.textContent = `O segundo titulo foi alterado`