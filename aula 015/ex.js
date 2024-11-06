let num = [1, 5, 3];
num[3] = 2
num.sort() /*Coloca os números em ordem crescente*/
num.push(4)/*Serve para criar e colocar um elemento na ultima posição*/
let tam = num.length /*serve para saber o tamanho do array*/
for(let i = 0; i < tam; i++){
    console.log(`${num[i]}`)
} 
/*obs: deve manter atenção na ordem das funções, pois o sort botou apenas os números definidos antes dele em ordem, não colocou o 4 que veio após com o push 4, e o length deve vim sempre no final da definição*/