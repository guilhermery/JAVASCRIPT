const caixa1 = window.document.querySelector(`#caixa1`)
const btn_c1 = window.document.querySelector(`#c1`)
const cursos = [...window.document.querySelectorAll(`.curso`)]

caixa1.addEventListener(`click`,(evento)=>{
    console.log(`clicou`)
}) //Esse evento funciona em tudo que estiver dentro da caixa1, mesmo que sejam outros elementos.

cursos.map((el)=>{
    el.addEventListener(`click`,(evento)=>{
        evento.stopPropagation()
    })
})