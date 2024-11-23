const imagem = window.document.querySelector(`img#imagem`)
const botaoLigar = window.document.querySelector(`button#liga`)
const botaoDesliga = window.document.querySelector(`button#desliga`)

function liga(){
    imagem.setAttribute(`src`, `imagens/ligada.jpg`)
}

function desliga(){
    imagem.setAttribute(`src`, `imagens/desligada.jpg`)
}

function quebra(){
    imagem.setAttribute(`src`, `imagens/quebrada.jpg`)
}

botaoLigar.addEventListener(`click`, liga)

botaoDesliga.addEventListener(`click`, desliga)

imagem.addEventListener(`mouseover`, liga)

imagem.addEventListener(`mouseout`, desliga)

imagem.addEventListener(`dblclick`, quebra)

imagem.addEventListener(`load`, function(){
    if (imagem.src.includes(`imagens/quebrada.jpg`)){
        imagem.removeEventListener(`mouseover`, liga)
        imagem.removeEventListener(`mouseout`, desliga)
        botaoLigar.removeEventListener(`click`, liga)
        botaoDesliga.removeEventListener(`click`, desliga)
    }
})