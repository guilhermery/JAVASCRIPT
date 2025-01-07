const todasDiv = [...window.document.getElementsByTagName("div")]
const todosCursos = [...window.document.getElementsByClassName("curso")]
const cursosC1 = [...window.document.getElementsByClassName("c1")]
const cursosC2 = [...window.document.getElementsByClassName("c2")]
const cursoEspecial = window.document.getElementsByClassName("curso")[6]
const cursoEspecial2 = window.document.getElementById("c1")

const query_umP = window.document.querySelector("div > p")
const query_todasDiv = [...window.document.querySelectorAll("div")]
const query_todosCurso = [...window.document.querySelectorAll(".curso")]

console.log (query_umP)
console.log(query_todosCurso)
console.log(query_todasDiv)
/*console.log(todasDiv)
console.log(todosCursos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)*/

/*query_todosCurso.map((el)=>{
    el.classList ="azul"
})*/