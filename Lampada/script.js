const imagem = window.document.querySelector(`img#imagem`)

imagem.addEventListener(`mouseover`, function liga(){
    imagem.setAttribute(`src`, `imagens/ligada.jpg`)
})

imagem.addEventListener(`mouseout`, function desliga(){
    imagem.setAttribute(`src`, `imagens/desligada.jpg`)
})
