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

HTML.addEventListener(`click`,(evt)=>{
    el = evt.target
    el.classList.add(`evento`)
    ClickHTML = true
})

Cs.addEventListener(`click`, ()=>{
    el = evt.target
    el.classList.add(`evento`)
    ClickCs = true
})

JavaScript.addEventListener(`click`, ()=>{
    el = evt.target
    el.classList.add(`evento`)
    ClickJS = true
})

PHP.addEventListener(`click`, ()=>{
    el = evt.target
    el.classList.add(`evento`)
    ClickPHP = true
})

React.addEventListener(`click`, ()=>{
    el = evt.target
    el.classList.add(`evento`)
    ClickReact = true
})

MySQL.addEventListener(`click`, ()=>{
    el = evt.target
    el.classList.add(`evento`)
    ClickMySQL = true
})

copiar.addEventListener('click',()=>{
    if(ClickHTML = true){
        const HTMLCopy = window.document.createElement(`div`)
        HTMLCopy.innerHTML = `HTML`
        HTMLCopy.classList.add(`curso`)
        HTMLCopy.classList.add(`c1`)
        container2.appendChild(HTMLCopy)
    }
    if(ClickCs = true){
        const CsCopy = window.document.createElement(`div`)
        CsCopy.innerHTML = `CSS`
        CsCopy.classList.add(`curso`)
        CsCopy.classList.add(`c1`)
        container2.appendChild(CsCopy)
    }
    if(ClickJS = true){
        const JSCopy = window.document.createElement(`div`)
        JSCopy.innerHTML = `JavaScript`
        JSCopy.classList.add(`curso`)
        JSCopy.classList.add(`c1`)
        container2.appendChild(JSCopy)
    }
    if(ClickPHP = true){
        const PHPCopy = window.document.createElement(`div`)
        PHPCopy.innerHTML = `PHP`
        PHPCopy.classList.add(`curso`)
        PHPCopy.classList.add(`c1`)
        container2.appendChild(PHPCopy)
    }
    if(ClickMySQL = true){
        const MySQLCopy = window.document.createElement(`div`)
        MySQLCopy.innerHTML = `MySQL`
        MySQLCopy.classList.add(`curso`)
        MySQLCopy.classList.add(`c1`)
        container2.appendChild(MySQLCopy)
    }
    if(ClickReact = true){
        const ReactCopy = window.document.createElement(`div`)
        ReactCopy.innerHTML = `React`
        ReactCopy.classList.add(`curso`)
        ReactCopy.classList.add(`c1`)
        container2.appendChild(ReactCopy)
    }
})