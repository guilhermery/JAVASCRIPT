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

let copiouHTML = true
let copiouCs = true
let copiouJS = true
let copiouPHP = true
let copiouMySQL = true
let copiouReact = true

function clicarnovamente(elemento, funcao){
    if(!funcao){ //Se o curso ainda nao tiver sido copiado, ou seja, a função nao tiver sido executada
        elemento.classList.add(`evento`)
        funcao = true //Marca a função como executado
    }
    return funcao;
}

HTML.addEventListener(`click`,(evt)=>{
    if(copiouHTML){
        ClickHTML = clicarnovamente(evt.target, ClickHTML)
        copiouHTML = false
    }
})

Cs.addEventListener(`click`, (evt)=>{
    if(copiouCs){
        ClickCs = clicarnovamente(evt.target, ClickCs)
        copiouCs = false
    }
})

JavaScript.addEventListener(`click`, (evt)=>{
    if(copiouJS){
        ClickJS = clicarnovamente(evt.target, ClickJS)
        copiouJS = false
    }
})

PHP.addEventListener(`click`, (evt)=>{
    if(copiouPHP){
        ClickPHP = clicarnovamente(evt.target, ClickPHP)
        copiouPHP = false
    }
})

React.addEventListener(`click`, (evt)=>{
    if(copiouReact){
        ClickReact = clicarnovamente(evt.target, ClickReact)
        copiouReact = false
    }
})

MySQL.addEventListener(`click`, (evt)=>{
    if(copiouMySQL){
        ClickMySQL = clicarnovamente(evt.target, ClickMySQL)
        copiouMySQL = false
    }
})

copiar.addEventListener('click',()=>{
    if(ClickHTML == true){
        const HTMLCopy = window.document.createElement(`div`)
        HTMLCopy.innerHTML = `HTML`
        HTMLCopy.classList.add(`curso`)
        HTMLCopy.classList.add(`c1`)
        container2.appendChild(HTMLCopy)
        ClickHTML = false
    }
    if(ClickCs == true){
        const CsCopy = window.document.createElement(`div`)
        CsCopy.innerHTML = `CSS`
        CsCopy.classList.add(`curso`)
        CsCopy.classList.add(`c1`)
        container2.appendChild(CsCopy)
        ClickCs = false
    }
    if(ClickJS == true){
        const JSCopy = window.document.createElement(`div`)
        JSCopy.innerHTML = `JavaScript`
        JSCopy.classList.add(`curso`)
        JSCopy.classList.add(`c1`)
        container2.appendChild(JSCopy)
        ClickJS = false
    }
    if(ClickPHP == true){
        const PHPCopy = window.document.createElement(`div`)
        PHPCopy.innerHTML = `PHP`
        PHPCopy.classList.add(`curso`)
        PHPCopy.classList.add(`c1`)
        container2.appendChild(PHPCopy)
        ClickPHP = false
    }
    if(ClickMySQL == true){
        const MySQLCopy = window.document.createElement(`div`)
        MySQLCopy.innerHTML = `MySQL`
        MySQLCopy.classList.add(`curso`)
        MySQLCopy.classList.add(`c1`)
        container2.appendChild(MySQLCopy)
        ClickMySQL = false
    }
    if(ClickReact == true){
        const ReactCopy = window.document.createElement(`div`)
        ReactCopy.innerHTML = `React`
        ReactCopy.classList.add(`curso`)
        ReactCopy.classList.add(`c1`)
        container2.appendChild(ReactCopy)
        ClickReact = false
    }
})