//O click é ativado quando o usuário clica em um elemento em que atrelamos ao evento.


//Inserir click

let button = window.document.querySelector(`button#btn`) //Selecionei o elemento button pelo DOM

console.log(button) //Imprimi o que tinha dentro da variavel button

button.addEventListener(`click`, function(){
    console.log(`clicou`) //Imprime a string toda vez que clica no button
    console.log(this) //Imprime O que está dentro do elemento button sempre que clicar
    this.style.color = `red`; //Muda a cor do button ao clicar
    window.document.body.style.backgroundColor = `pink` //Muda o backgroundColor do body ao clicar no button
}) //Adicionei o evento de click a variavel button

let title = window.document.querySelector(`h1#title`) //Selecionei o h1

title.addEventListener(`click`, function clica(){
    console.log(`teste`) //Imprime o teste sempre que clicar no h1
    let subtitle = window.document.querySelector(`h2#subtitle`) //Selecionei o subtitulo h2
    subtitle.style.display = `none` //Fiz com que o h2 desaparecesse ao clicar no h1 e acionar o evento
}) //Adicionei o evento de click ao h1

//Doubleclick

let subtitle = window.document.querySelector(`h2#subtitle`) //Selecionei o subtitulo h2

subtitle.addEventListener(`dblclick`, function double(){
    console.log(`click duplo!`) //Sempre que clicar duas vezes, será imprimido um click duplo na saida
    subtitle.textContent = `Clicou duas vezes!` //Ao clicar duas vezes no subtitulo, a string dentro dele será alterada para essa nova
}) //Adicionei um evento de double click ao h2