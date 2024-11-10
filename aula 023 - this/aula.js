//Sempre que usa o this fora de um escopo local, o this se refere ao window
//Em objetos, ao utilizar this, se refere a essa instância e pode acessar propriedades desse objeto
console.log(this)

let teste = 5 //se usar inspecionar, verá que o teste: 5 será encontrado dentro do escopo do window 

console.log(teste)

let pessoa = {
    nome: 'Guilherme',
    idade: 19,
    falar: function(){
        console.log('Olá, tudo bem?')
    },
    dizerNome: function(){
        console.log(`Meu nome é ${this.nome}`) //O this se refere a instância/objeto de "pessoa"
    },
    aniversario: function(){
        this.idade += 1
        console.log(`Ebaa agora você completou ${this.idade} anos`)
    },
    saudacao: function(){
        return(`Sr ${this.nome}`)
    }
}

pessoa.dizerNome() //realizei a chamada do metodo/função dizerNome do objeto pessoa para ele informar o nome

console.log(pessoa.idade)

pessoa.aniversario() //chamei o metodo/função aniversario do objeto pessoa para aumentar a idade e informar quantos anos foi completado 

let sdc = pessoa.saudacao() //Atribui o return a variavel sdc

console.log(`Olá ${sdc}`)

//Podemos usar o this para acessar as propriedades e fazer representações mais complexas
