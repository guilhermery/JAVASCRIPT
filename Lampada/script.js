//Selecionar as variáveis imagem e os botões
const imagem = window.document.querySelector(`img#imagem`)
const botaoLigar = window.document.querySelector(`button#liga`)
const botaoDesliga = window.document.querySelector(`button#desliga`)

//Função de ligar a lampada
function liga(){
    imagem.setAttribute(`src`, `imagens/ligada.jpg`)
}

//Função de desligar a lampada
function desliga(){
    imagem.setAttribute(`src`, `imagens/desligada.jpg`)
}

//Criar função de quebrar a lampada
function quebra(){
    imagem.setAttribute(`src`, `imagens/quebrada.jpg`)
}

//Adicionar evento de ligar a lampada ao clicar no botão
botaoLigar.addEventListener(`click`, liga)

//Adicionar evento de desligar a lampada ao clicar no botão
botaoDesliga.addEventListener(`click`, desliga)

//Adicionar evento de ligar a lampada ao passar o mouse em cima
imagem.addEventListener(`mouseover`, liga)

//Adicionar evento de desligar a lampada ao tirar o mouse de cima
imagem.addEventListener(`mouseout`, desliga)

//Adicionar evento de quebrar a lampada ao clicar duas vezes
imagem.addEventListener(`dblclick`, quebra)

//Adicionar função ao evento load que verifica se a imagem carregou completamente
imagem.addEventListener(`load`, function(){
    //Adicionar if para verificar se o source da imagem inclui a imagem quebrada
    if (imagem.src.includes(`imagens/quebrada.jpg`)){
        //Remover todos os eventos de imagem e botão
        imagem.removeEventListener(`mouseover`, liga)
        imagem.removeEventListener(`mouseout`, desliga)
        botaoLigar.removeEventListener(`click`, liga)
        botaoDesliga.removeEventListener(`click`, desliga)
        //Adicionar evento para alertar o usuario ao clicar na lampada quebrada
        botaoLigar.addEventListener(`click`, function(){
            window.alert(`A lampada não pode ligar pois está quebrada!`)
        })
        botaoDesliga.addEventListener(`click`, function(){
            window.alert(`A lampada não pode desligar pois está quebrada!`)
        })
    }
})