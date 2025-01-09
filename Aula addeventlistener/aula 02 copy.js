const HTML = window.document.querySelector(`div#c1`)
const Cs = window.document.querySelector(`div#c2`)
const JavaScript = window.document.querySelector(`div#c3`)
const PHP = window.document.querySelector(`div#c4`)
const React = window.document.querySelector(`div#c5`)
const MySQL = window.document.querySelector(`div#c6`)
const copiar = window.document.querySelector(`#copy`)
const container2 = window.document.querySelector(`div.container2`)

let ClickHTML = false
let ClickCs = false
let ClickJS = false
let ClickPHP = false
let ClickReact = false
let ClickMySQL = false

// Função para marcar o curso como clicado, e impedir múltiplos cliques
function clicarnovamente(elemento, flag) {
    if (!flag) {  // Se a função ainda não foi executada
        elemento.classList.add(`evento`)  // Marca o curso com uma classe
        flag = true  // Marca como "clicado" (evita múltiplos cliques)
    }
    return flag;  // Retorna o valor atualizado da flag
}

// Definindo os eventos de clique nos cursos
HTML.addEventListener(`click`, (evt) => {
    ClickHTML = clicarnovamente(evt.target, ClickHTML);  // Atualiza a flag de controle
})

Cs.addEventListener(`click`, (evt) => {
    ClickCs = clicarnovamente(evt.target, ClickCs);  // Atualiza a flag de controle
})

JavaScript.addEventListener(`click`, (evt) => {
    ClickJS = clicarnovamente(evt.target, ClickJS);  // Atualiza a flag de controle
})

PHP.addEventListener(`click`, (evt) => {
    ClickPHP = clicarnovamente(evt.target, ClickPHP);  // Atualiza a flag de controle
})

React.addEventListener(`click`, (evt) => {
    ClickReact = clicarnovamente(evt.target, ClickReact);  // Atualiza a flag de controle
})

MySQL.addEventListener(`click`, (evt) => {
    ClickMySQL = clicarnovamente(evt.target, ClickMySQL);  // Atualiza a flag de controle
})

// Evento de copiar
copiar.addEventListener('click', () => {
    if (ClickHTML) {
        const HTMLCopy = window.document.createElement(`div`)
        HTMLCopy.innerHTML = `HTML`
        HTMLCopy.classList.add(`curso`)
        HTMLCopy.classList.add(`c1`)
        container2.appendChild(HTMLCopy)
        ClickHTML = false  // Impede que o HTML seja copiado novamente
    }
    if (ClickCs) {
        const CsCopy = window.document.createElement(`div`)
        CsCopy.innerHTML = `CSS`
        CsCopy.classList.add(`curso`)
        CsCopy.classList.add(`c1`)
        container2.appendChild(CsCopy)
        ClickCs = false  // Impede que o CSS seja copiado novamente
    }
    if (ClickJS) {
        const JSCopy = window.document.createElement(`div`)
        JSCopy.innerHTML = `JavaScript`
        JSCopy.classList.add(`curso`)
        JSCopy.classList.add(`c1`)
        container2.appendChild(JSCopy)
        ClickJS = false  // Impede que o JavaScript seja copiado novamente
    }
    if (ClickPHP) {
        const PHPCopy = window.document.createElement(`div`)
        PHPCopy.innerHTML = `PHP`
        PHPCopy.classList.add(`curso`)
        PHPCopy.classList.add(`c1`)
        container2.appendChild(PHPCopy)
        ClickPHP = false  // Impede que o PHP seja copiado novamente
    }
    if (ClickMySQL) {
        const MySQLCopy = window.document.createElement(`div`)
        MySQLCopy.innerHTML = `MySQL`
        MySQLCopy.classList.add(`curso`)
        MySQLCopy.classList.add(`c1`)
        container2.appendChild(MySQLCopy)
        ClickMySQL = false  // Impede que o MySQL seja copiado novamente
    }
    if (ClickReact) {
        const ReactCopy = window.document.createElement(`div`)
        ReactCopy.innerHTML = `React`
        ReactCopy.classList.add(`curso`)
        ReactCopy.classList.add(`c1`)
        container2.appendChild(ReactCopy)
        ClickReact = false  // Impede que o React seja copiado novamente
    }
})
