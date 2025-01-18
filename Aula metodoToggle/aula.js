//Peguei a caixa pai que é o container onde fica os cursos
const caixaCursos = window.document.querySelector(`#caixaCursos`) 
//Peguei as divs com a classe curso
const btn_c = [...window.document.querySelectorAll(`.curso`)]

const c1_2 = window.document.querySelector(`#c1_2`)
//Criei um array com os cursos que vou adicionar na página inicialmente
let cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
//Peguei o botão de curso selecionado
const btnCursoSelecionado = window.document.getElementById(`btnCursoSelecionado`)
//Peguei o botão de add antes
const btnAddAntes = window.document.getElementById(`btnAdicionarNovoCurso`)
//Peguei o botão de add depois
const btnAddDepois = window.document.getElementById(`btnAdicionarDepois`)
//Peguei o botão de remover o curso
const btnRemoverCurso = window.document.getElementById(`btnRemoverCurso`)
//Peguei o input de onde digita o curso para add
const inputCurso = window.document.querySelector(`#nomeCurso`)

const tirarSelecao = ()=>{
    const cursosSelecionados = [...window.document.querySelectorAll(`.selecionado`)] //Adicionei todos os cursos selecionados a um array
    cursosSelecionados.map((el)=>{
        el.classList.remove(`selecionado`)
    }) //removi a classe de todos os cursos selecionados
}

//Utilizei o map para percorrer os elementos dentro do array cursos
cursos.map((el, chave)=>{
    //Criei a div que será o curso e atribui todas as tags necessárias, de id e classe
    const novoElemento = window.document.createElement(`div`)
    novoElemento.setAttribute(`id`,`c`+chave)
    novoElemento.setAttribute(`class`, `curso c1`)
    novoElemento.addEventListener(`click`,(evt)=>{
        tirarSelecao() //Tirei a seleção de todos antes de adicionar em um especifico
        evt.target.classList.toggle(`selecionado`)
    })
    novoElemento.innerHTML = el
    //Criei a div comandos em que irá ficar o input
    const comandos = window.document.createElement(`div`)
    comandos.setAttribute(`class`, `comandos`)
    //Criei o input que será utilizado para selecionar os cursos
    const rb = window.document.createElement(`input`)
    rb.setAttribute(`type`,`radio`)
    rb.setAttribute(`name`,`rb_curso`)
    //Adicionei o input como filho da div comandos
    comandos.appendChild(rb)
    //Adicionei a div comandos como filho do elemento
    novoElemento.appendChild(comandos)
    //Adicionei o curso como filho da caixa container 
    caixaCursos.appendChild(novoElemento)
})

//Aqui criei o evento de selecionar curso com click e arrow function
btnCursoSelecionado.addEventListener(`click`, ()=>{
    //Selecionei todos os inputs que foram criados anteriormente
    const todosRadios = [...window.document.querySelectorAll(`input[type=radio]`)]
    //Criei uma variavel para guardar apenas os inputs que foram marcados
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    //Fiz com que a variavel guardasse o input que está marcado no momento
    radioSelecionado = radioSelecionado[0]
    if(radioSelecionado){
        //Criei uma variavel que ira guardar o texto do curso selecionado
        const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
        alert(`curso selecionado: ${cursoSelecionado}`)
    } else {
        alert(`Selecione um curso`)
    }
})

//Adicionei um evento de click nesse botao para adicionar cursos antes de algum especifico
btnAddAntes.addEventListener(`click`,()=>{
    //Fiz o mesmo processo anterior
    const todosRadios = [...window.document.querySelectorAll(`input[type=radio]`)]
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    //Estabeleci uma condição que só permite executar o bloco se tiver algum curso selecionado
    if(radioSelecionado){
        //Utilizei o trim para tirar os espaços desnecessários e estabeleci a condição que so executa o bloco se possuir algum texto no input (diferente de nada)
        if(inputCurso.value.trim() !== ""){
            //Adicionei a constante que estabelece o curso de referência
            const cursoRef = radioSelecionado.parentNode.parentNode
            //Adicionei uma constante que possui o texto do input
            const textoCurso = inputCurso.value.trim()
            //Adicionei o curso novo 
            const novoCurso = window.document.createElement(`div`)
            novoCurso.setAttribute(`class`, `curso c1`)
            novoCurso.innerHTML = textoCurso
            //Adicionei a div de comandos desse curso
            const comandos = window.document.createElement(`div`)
            comandos.setAttribute(`class`, `comandos`)
            //Adicionei o input desse curso
            const rb = window.document.createElement(`input`)
            rb.setAttribute(`type`,`radio`)
            rb.setAttribute(`name`,`rb_curso`)
    
            comandos.appendChild(rb)
            
            novoCurso.appendChild(comandos)
    
            caixaCursos.appendChild(novoCurso)
            //Adicionei o curso novo antes do curso de referencia com insertBefore
            caixaCursos.insertBefore(novoCurso, cursoRef)
            //No final a caixa do input voltara a nao ter texto algum
            inputCurso.value = ""
        } else {
            alert(`Digite o nome do curso na caixa de entrada`)
        }
    } else {
        alert(`Selecione o curso de referência`)
    }
})

//Adicionei evento de click para adicionar um curso depois do curso de ref.
btnAddDepois.addEventListener(`click`, ()=>{
    const todosRadios = [...window.document.querySelectorAll(`input[type=radio]`)]
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    if(radioSelecionado){
        if(inputCurso.value.trim() != ""){
            const cursoRef = radioSelecionado.parentNode.parentNode.nextSibling

            const textoCurso = inputCurso.value.trim()

            const novoCurso = window.document.createElement(`div`)
            novoCurso.setAttribute(`class`, `curso c1`)
            novoCurso.innerHTML = textoCurso

            const comandos = window.document.createElement(`div`)
            comandos.setAttribute(`class`, `comandos`)

            const rb = window.document.createElement(`input`)
            rb.setAttribute(`type`,`radio`)
            rb.setAttribute(`name`,`rb_curso`)

            comandos.appendChild(rb)
            
            novoCurso.appendChild(comandos)

            caixaCursos.appendChild(novoCurso)

            caixaCursos.insertBefore(novoCurso, cursoRef)

            inputCurso.value = ""
        } else {
            alert(`Digite o nome do curso na caixa de entrada`)
        }
    } else {
        alert(`Selecione o curso de referência`)
    }
})

//Adicionei um evento para remover um curso selecionado
btnRemoverCurso.addEventListener(`click`, ()=>{
    const todosRadios = [...window.document.querySelectorAll(`input[type=radio]`)]
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    if (radioSelecionado){
        //Criei a variavel que pega o curso correspondente ao input checked
        const cursoRemovido = radioSelecionado.parentNode.parentNode
        console.log(cursoRemovido)
        //Removi o curso da caixa pai 
        caixaCursos.removeChild(cursoRemovido)
    } else {
        alert(`Selecione o curso que deseja remover`)
    }
})