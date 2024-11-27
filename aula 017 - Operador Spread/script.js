let amigo = {
nome:`José`, 
sexo:`Masculino`, 
peso: 84.3, 
engordar(p=0){ /*p=0 pois apenas se não for atribuida nenhum parametro a p, ele receberá valor 0*/
    console.log(`Engordou`)
    this.peso += p /*this se refere ao objeto da própria função, também podia ser amigo.peso += p*/
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`) /*Se quiser exibir uma dessas variaveis/funções dentro do objeto, basta escrever amigo.variaveldesejada*/