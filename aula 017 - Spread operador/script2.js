//Função stipo arrow de soma
const soma = (v1, v2, v3) => {
    return v1+v2+v3
}

let valores = [1,5,4,10]

//Usa o spread para separar, espalhar e somar os numeros presentes dentro do array valores de acordo com os parametros passados (o 10 não é incluso pois os parametros so pediram 3 valores, logo o spread vai separar os primeiros tres e fornecer)
console.log(soma(...valores))