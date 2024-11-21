const button = window.document.querySelector(`button#add-btn`) //Selecionei o button como constante ja que não ira mudar

button.addEventListener(`click`, function(event){
    event.preventDefault() //Serve para a pagina não precisar da animação de atualização sempre que for feito um submit
    let tarefa = window.document.querySelector(`input#task-title`).value  //Selecionei o input como uma variavel tarefa
    if (tarefa.length == 0){ //O if vai servir para não realizar nenhuma ação se o usuario não digitar nada no input
        
    } else if(tarefa.length > 40){ //Se tiver mais de 40 letras no input, o usuario receberá um alerta pedindo para diminuir
        window.alert(`Digite em menos de 40 letras`)
    } else{ //Aqui o else vai servir para realizar todo o processo de adicionar a lista
        let ul = window.document.querySelector(`ul#task-list`) //Selecionei a ul
        let lista = window.document.createElement(`li`) //Criei um li como variavel sempre que for apertado o botão de subbmit
        let span = window.document.createElement(`span`) //Criei um span como variavel sempre que for apertado o botão de subbmit
        let add = window.document.createElement(`ion-icon`) //Criei um icone de adicionar como variavel sempre que for apertado o botão de subbmit
        let remove = window.document.createElement(`ion-icon`) //Criei um icone de remover como variavel sempre que for apertado o botão de subbmit
        ul.id = `task-list` //Adicionei o id na ul 
        lista.classList.add(`task-box`) //Adicionei a class na lista para ela receber todo o css
        span.classList.add(`task-title`) //Adicionei a class no span para ela receber todo o css
        add.classList.add(`done-btn`) //Adicionei a class no icone de add para ele receber todo o css
        add.setAttribute(`name`, `checkmark-outline`) //Adicionei o atributo name para botar o nome do icone e fazer ele ser o de checkmark
        remove.classList.add(`remove-btn`) //Adicionei a class no icone remove para receber o css
        remove.setAttribute(`name`, `close-outline`) //Adicionei o atributo name para botar o nome do icone e fazer ele ser o de close
        span.textContent = tarefa.trim() //Adicionei o texto do input no span, utilizando a função trim para excluir os espaços em branco que podem ser digitados.
        ul.appendChild(lista) //Adicionei a lista como filha do ul
        lista.appendChild(span) //Adicionei o span como filho da lista
        lista.appendChild(add) //Adicionei o icon de add como filho da lista
        lista.appendChild(remove) //Adicionei o icon de remove como filho da lista

        add.addEventListener(`click`, function done(){
            lista.classList.add(`done`) //Adicionei um evento de click no done, para assim que for clicado, adicionar a class done no icone e fazer com que ele receba as CSS de tarefa concluida.
        })
        remove.addEventListener(`click`, function remover(){
            lista.classList.add(`hide`) //Adicionei um evento de click no botao de remove para assim que for clicado, adicionar a class hide no icone e fazer com que ele desapareça como se tivesse sido removido.
        })
    }
})

