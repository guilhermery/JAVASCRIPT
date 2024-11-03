function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#ano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero =  'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'criançam.png')
            } else if(idade < 21){
                img.setAttribute('src', 'adolescentem.png')
            } else if(idade < 50){
                img.setAttribute('src', 'homem.png')
            } else{
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'criançaf.png')
            } else if(idade < 21){
                img.setAttribute('src', 'adolescentef.png')
            } else if(idade< 50){
                img.setAttribute('src', 'mulher.png')
            } else{
                img.setAttribute('src', 'idosa.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }

}