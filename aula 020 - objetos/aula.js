let obj = {
    nome: 'Guilherme',
    idade: 19,
    profissao: 'estudante'
};

console.log(obj) //mostra todas as variaveis presentes dentro do objeto

console.log(typeof(obj)) //mostra o tipo, que nesse caso é objeto

console.log(obj.nome) //mostra o que está na variavel nome

console.log(obj.idade) //acessa o que esta na variável idade

console.log(`O meu nome é ${obj.nome}`)

obj.nome = 18 //Posso substituir normalmente a variavel de string para numero

console.log(obj.nome + obj.idade)

obj.adiciona = true //podemos adicionar uma propriedade a um objeto dessa forma

console.log(obj)