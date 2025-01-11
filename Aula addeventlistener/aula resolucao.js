const caixa1 = window.document.querySelector(`#caixa1`)
const caixa2 = window.document.querySelector(`.container2`)
const button = window.document.querySelector(`#copiar`)
const todosCursos = [...window.document.querySelectorAll(`.curso`)] //Usei spread para transformar em um array ao invés de HTML collection

todosCursos.map((el)=>{ //Usar map para, de elemento por elemento, adicionar um evento
    el.addEventListener(`click`,(evt)=>{
        const curso = evt.target //Pegamos cada elemento que está sendo afetado pelo evento.
        curso.classList.toggle(`evento`) //O toggle serve para adicionar a classe se o elemento não tiver, e para remover a classe se ele tiver.
    })
})

button.addEventListener(`click`,()=>{
    const selecionados = [...window.document.querySelectorAll(`.evento`)]
    const naoselecionados = [...window.document.querySelectorAll(`.curso:not(.evento)`)] //Para, dos elementos que possuem a classe curso, obter apenas os que não possuem a classe evento
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    naoselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
