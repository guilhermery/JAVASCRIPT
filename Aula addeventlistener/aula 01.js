const msg = ()=>{
    alert('Mouse em cima do CSS ou JavaScript')
}

const todosCursos = [...window.document.querySelectorAll(".curso")] //Seleciona todos os elementos com classe curso em forma de um array

const c3 = window.document.querySelector("#c3")

const c4 = window.document.querySelector("#c4")

c3.addEventListener("click", msg) //Adiciona o evento e o que ele deve fazer

c3.addEventListener("mouseenter", ()=>{
    prompt('Olá') 
}) //Também pode ser passado uma função anônima como argumento

c4.addEventListener("click", (evt)=>{
    const el = evt.target //Para descobrir qual elemento que iniciou o evento 
    el.classList.add("evento") //Adiciona a classe evento ao elemento que iniciou o evento
})

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.target.classList.add("evento") //Adicionou a classe evento a todos os elementos que possuem classe curso
        console.log(evt.target.id + "Foi clicado!") //Mostrou o id de todos os elementos
        console.log(evt.target.innerHTML + "Foi clicado") //Mostrou o texto de todos os elementos
    })
})