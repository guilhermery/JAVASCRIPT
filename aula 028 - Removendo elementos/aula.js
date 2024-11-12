//Também é possível remover elementos utilizando JavaScript através do DOM

let container = window.document.querySelector(`div#container`) //identifiquei e obti o elemento pai

let p = window.document.querySelector(`div#container p`) //identifiquei e obti o elemento filho que quero remover do container

let body = window.document.querySelector(`body`) //identifiquei o elemento pai da maioria dos itens

container.removeChild(p) //removi apenas o filho p do container e sobrou o span

body.removeChild(container) //removi apenas um filho do elemento pai (body)

//remover o elemento em si sem ser pelo pai

let subtitle = window.document.querySelector(`h2#subtitle`) //identifiquei e obti o elemento que quero remover

subtitle.remove() //removi o elemento utilizando a função remove