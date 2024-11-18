// O mouseover é ativado quando o ponteiro do mouse passa em cima de um elemento
// Temos também o evento mouseout qunando o ponteiro sai do elemento

//mouseover

let title = window.document.querySelector(`h1#title`) //Selecionei o titulo h1

title.addEventListener(`mouseover`, function callback(){
    this.style.backgroundColor = "yellow" //Adicionei o evento mouseover para mudar o background do titulo para amarelo sempre que passar o mouse em cima
})

//mouseout

title.addEventListener(`mouseout`, function(){
    this.style.backgroundColor = 'white' //Adicionei o evento mouseout para mudar o background do titulo para branco sempre que tirar o mouse de cima
})

//afetar outro elemento com mouseout

subtitle = window.document.querySelector(`h2#subtitle`) //Selecionei o subtitulo h2

subtitle.addEventListener(`mouseover`, function exibir(){
    let legenda = window.document.querySelector(`p#legenda`) //Selecionei o paragrafo legenda abaixo do h2
    legenda.classList.remove(`hide`) //Usei a função mouseover para sempre remover a class hide do paragrafo quando passar o mouse em cima do h2, fazendo com q ele apareça
})

subtitle.addEventListener(`mouseout`, function esconder(){
    let legenda = window.document.querySelector(`p#legenda`)
    legenda.classList.add(`hide`) //Usei a função mouseout para sempre adicionar de volta a classe hide do paragrafo quando tirar o mouse de cima do h2, fazendo com q ele suma novamente
})