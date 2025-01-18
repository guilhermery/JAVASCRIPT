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
    caixaCursos.appendChild(novoElemento)
})

//Aqui criei o evento de selecionar curso com click e arrow function
btnCursoSelecionado.addEventListener(`click`, ()=>{
    const cursosSelecionados = [...window.document.querySelectorAll(`.selecionado`)]
    const cursoSelecionado = cursosSelecionados[0].textContent
    alert(`O curso selecionado foi ${cursoSelecionado}`)
})

//Adicionei um evento de click nesse botao para adicionar cursos antes de algum especifico
btnAddAntes.addEventListener(`click`,()=>{
    const cursosSelecionados = [...window.document.querySelectorAll(`.selecionado`)]
    const cursoSelecionado = cursosSelecionados[0]
    if(cursoSelecionado){
        if(inputCurso.value.trim() !== ""){
            const cursoRef = cursoSelecionado
            const novoCurso = window.document.createElement(`div`)
            const texto = inputCurso.value.trim()
            novoCurso.setAttribute(`class`, `curso c1`)
            novoCurso.addEventListener(`click`,(evt)=>{
                tirarSelecao() //Tirei a seleção de todos antes de adicionar em um especifico
                evt.target.classList.toggle(`selecionado`)
            })
            novoCurso.innerHTML = texto
            caixaCursos.appendChild(novoCurso)
            caixaCursos.insertBefore(novoCurso, cursoRef)
        } else {
            alert(`Insira o nome do curso que deseja adicionar`)
        }
    } else {
        alert(`Selecione um curso`)
    }
})

//Adicionei evento de click para adicionar um curso depois do curso de ref.
btnAddDepois.addEventListener(`click`, ()=>{
    const cursosSelecionados = [...window.document.querySelectorAll(`.selecionado`)]
    const cursoSelecionado = cursosSelecionados[0]
    if(cursoSelecionado){
        if(inputCurso.value.trim() !== ``){
            const cursoRef = cursoSelecionado.nextSibling
            const novoCurso = window.document.createElement(`div`)
            const texto = inputCurso.value.trim()
            novoCurso.setAttribute(`class`, `curso c1`)
            novoCurso.addEventListener(`click`, (evt)=>{
                tirarSelecao()
                evt.target.classList.toggle(`selecionado`)
            })
            novoCurso.innerHTML = texto
            caixaCursos.appendChild(novoCurso)
            caixaCursos.insertBefore(novoCurso, cursoRef)
        } else {
            alert(`Insira o nome do curso que deseja adicionar`)
        }
    } else {
        alert(`Selecione um curso`)
    }
})

//Adicionei um evento para remover um curso selecionado
btnRemoverCurso.addEventListener(`click`, ()=>{
    const cursosSelecionados = [...window.document.querySelectorAll(`.selecionado`)]
    const cursoSelecionado = cursosSelecionados[0]
    if(cursoSelecionado){
        caixaCursos.removeChild(cursoSelecionado)
    } else {
        alert(`Selecione o curso que deseja remover`)
    }
})