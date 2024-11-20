const formulario = window.document.querySelector(`form#add-task-form`)

formulario.addEventListener(`submit`, function(event){
    event.preventDefault()
    let tarefa = window.document.querySelector(`input#task-title`).value
    let ul = window.document.querySelector(`ul#task-list`)
    let lista = window.document.createElement(`li`)
    let span = window.document.createElement(`span`)
    let add = window.document.createElement(`ion-icon`)
    let remove = window.document.createElement(`ion-icon`)
    ul.id = `task-list`
    lista.classList.add(`task-box`)
    span.classList.add(`task-title`)
    add.classList.add(`done-btn`)
    add.setAttribute(`name`, `checkmark-outline`)
    remove.classList.add(`remove-btn`)
    remove.setAttribute(`name`, `close-outline`)
    span.textContent = tarefa.trim()
    ul.appendChild(lista)
    lista.appendChild(span)
    lista.appendChild(add)
    lista.appendChild(remove)
})

