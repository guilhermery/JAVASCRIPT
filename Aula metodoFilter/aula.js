const caixaCursos = window.document.querySelector(`#caixaCursos`)
const btn_c = [...window.document.querySelectorAll(`.curso`)]
const c1_2 = window.document.querySelector(`#c1_2`)
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = window.document.getElementById(`btnCursoSelecionado`)

curso.map((el, chave)=>{
    const novoElemento = window.document.createElement(`div`)
    novoElemento.setAttribute(`id`,`c`+chave)
    novoElemento.setAttribute(`class`, `curso c1`)
    novoElemento.innerHTML = el

    const comandos = window.document.createElement(`div`)
    comandos.setAttribute(`class`, `comandos`)

    const rb = window.document.createElement(`input`)
    rb.setAttribute(`type`,`radio`)
    rb.setAttribute(`name`,`rb_curso`)

    comandos.appendChild(rb)
    
    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener(`click`, (evt)=>{
    const todosRadios = [...window.document.querySelectorAll(`inpute[type=radio]`)]
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert(`curso selecionado: ${cursoSelecionado}`)
})