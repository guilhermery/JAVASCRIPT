const imagem = window.document.querySelector(`img#imagem`)
let src = imagem.src

function liga(){
    imagem.setAttribute(`src`, `imagens/ligada.jpg`)
}

function desliga(){
    imagem.setAttribute(`src`, `imagens/desligada.jpg`)
}

function quebra(){
    imagem.setAttribute(`src`, `imagens/quebrada.jpg`)
}

imagem.addEventListener(`mouseover`, liga)

imagem.addEventListener(`mouseout`, desliga)

imagem.addEventListener(`dblclick`, quebra)