function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagem02d.png'
        window.document.body.style.background = '#FCE48F'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagem01d.png'
        window.document.body.style.background = '#B7885E'
    } else {
        img.src = 'imagem03d.png'
        window.document.body.style.background = '#372A44'
    }
}
