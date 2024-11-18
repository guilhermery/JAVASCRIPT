// O mouseover é ativado quando o ponteiro do mouse passa em cima de um elemento
// Temos também o evento mouseout qunando o ponteiro sai do elemento

//mouseover

let title = window.document.querySelector(`h1#title`)

title.addEventListener(`mouseover`, function callback(){
    this.style.backgroundColor = "yellow"
})

//mouseout

title.addEventListener(`mouseout`, function(){
    this.style.backgroundColor = 'white'
})

//afetar outro elemento com mouseout

subtitle = window.document.querySelector(`h2#subtitle`)

subtitle.addEventListener(`mouseover`, function exibir(){
    let legenda = window.document.querySelector(`p#legenda`)
    legenda.classList.remove(`hide`)
})

subtitle.addEventListener(`mouseout`, function esconder(){
    let legenda = window.document.querySelector(`p#legenda`)
    legenda.classList.add(`hide`)
})