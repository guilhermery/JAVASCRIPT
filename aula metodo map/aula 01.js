const cursos = ['HTML', 'CSS', "JavaScript", 'PHP', 'React'] //criei uma coleção de cursos com cada elemento dentro.
cursos.map((elemento1, indice)=>{
    console.log(`Curso ${elemento1}, Posição do Curso: ${indice}`)
}) //O metodo map percorre todos os elementos da coleção, tendo o elemento e o indice como parametros. 
let c = cursos.map((elemento1, indice)=>{
    return `<div> ${elemento1} </div>`
})

console.log(c)

let el = window.document.getElementsByTagName(`div`)
el = [...el]
el.map((e,i)=>{
    e.innerHTML="CFB Cursos"
})