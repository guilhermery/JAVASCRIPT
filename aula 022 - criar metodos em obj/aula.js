let pessoa = {
    nome: 'Guilherme',
    idade: '19',
    falar: function(){
        console.log('Olá, tudo bem?')
    }, //serve para criar um metodo do objeto
    soma: function(a, b){
        return(a + b)
    } //metodo de soma 
};

console.log(pessoa.nome)

pessoa.falar() //essas funções são conhecidas como metodos, por exemplo o indexof, o tostring e outras funções do javascript

let soma = pessoa.soma(3, 5)

console.log(soma)

