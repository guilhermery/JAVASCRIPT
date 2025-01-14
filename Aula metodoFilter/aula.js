const caixaCursos = window.document.querySelector(`#caixaCursos`)
const btn_c = [...window.document.querySelectorAll(`.curso`)]
const c1_2 = window.document.querySelector(`#c1_2`)
let cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = window.document.getElementById(`btnCursoSelecionado`)
const btnAddAntes = window.document.getElementById(`btnAdicionarNovoCurso`)
const btnAddDepois = window.document.getElementById(`btnAdicionarDepois`)
const btnRemoverCurso = window.document.getElementById(`btnRemoverCurso`)
const inputCurso = window.document.querySelector(`#nomeCurso`)

cursos.map((el, chave)=>{
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

btnCursoSelecionado.addEventListener(`click`, ()=>{
    const todosRadios = [...window.document.querySelectorAll(`input[type=radio]`)]
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    if(radioSelecionado){
        const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
        alert(`curso selecionado: ${cursoSelecionado}`)
    } else {
        alert(`Selecione um curso`)
    }
})

btnAddAntes.addEventListener(`click`,()=>{
    const todosRadios = [...window.document.querySelectorAll(`input[type=radio]`)]
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    if(radioSelecionado){
        if(inputCurso.value.trim() !== ""){
            const cursoRef = radioSelecionado.parentNode.parentNode

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

btnRemoverCurso.addEventListener(`click`, ()=>{
    const todosRadios = [...window.document.querySelectorAll(`input[type=radio]`)]
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    if (radioSelecionado){
        const cursoRemovido = radioSelecionado.parentNode.parentNode
        console.log(cursoRemovido)
        caixaCursos.removeChild(cursoRemovido)
    } else {
        alert(`Selecione o curso que deseja remover`)
    }
})