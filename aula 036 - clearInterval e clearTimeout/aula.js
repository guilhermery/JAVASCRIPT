//Podemos dar um fim a um setTimeout ou setInterval por meio do clearInterval e clearTimeout, tendo total controle sob o nosso software.
//Logo, após determinada condição os timers não serão mais executados.

//clearTimeout 

let x = 0 //Declarei uma variavel x = 0

let myTimer = setTimeout(function(){
    console.log(`O x é 0`) //Imprimi na tela que o x é = 0
}, 1000) //Declarei uma variavel myTimer para receber a função setTimeout possibilitando utilizar o clear depois

x = 5 //Alterei o valor de x

if (x>0){
    clearTimeout(myTimer) //Parei a execução do timeout
    console.log(`O x passou de 0`)
} //Se x for maior que 0 eu fiz com que timeout parasse de executar

//clearInterval

let myInterval = setInterval(function(){
    console.log(`Imprimindo interval`)
}, 500) //Declareo ima variavel myInterval para receber a função setInterval que imprime uma string a cada meio segundo

setTimeout(function(){
    console.log(`Não precisamos mais repetir`)
    clearInterval(myInterval)
}, 1500) //Executei um setTimeout para parar a execução do setInterval após um segundo e meio de execução