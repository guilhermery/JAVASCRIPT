const todasDiv = [...window.document.getElementsByTagName("div")]
const todosCursos = [...window.document.getElementsByClassName("curso")]
const cursosC1 = [...window.document.getElementsByClassName("c1")]
const cursosC2 = [...window.document.getElementsByClassName("c2")]
const cursoEspecial = window.document.getElementsByClassName("curso")[6]

console.log(todasDiv)
console.log(todosCursos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

el.map((e,i)=>{
    e.innerHTML="CFB Cursos"
})