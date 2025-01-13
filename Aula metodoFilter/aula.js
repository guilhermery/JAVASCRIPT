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
    
})