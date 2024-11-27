//Use o inspecionar para observar a atuação do spread

//Podemos pegar todos os elementos com tag div da seguinte forma, porém eles ficarão como htmlcollection, sem ser um array
const objs = document.getElementsByTagName(`div`)

//Mas também podemos pegar os elementos do html de forma que eles fiquem como array separados por meio do spread
const objs2 = [...document.getElementsByTagName(`div`)]

//Podemos usar o forEach no objs2 por ele ser um array e percorrer todos os elementos do array que são as divs do HTML e mudar o texto delas ou fazer outras alterações
objs2.forEach(element => {
    element.innerHTML = `curso`
})

console.log(objs)
console.log(objs2)