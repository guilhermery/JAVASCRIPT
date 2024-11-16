//O document não possui somente metodos, mas também proriedades.
//Podemos retirar informações e acessar diversas tags com as propriedades do document
//Para observar as alterações, veja no inspecionar do google

console.log(document.body) //Ele seleciona o body normalmente mostrando o que ele contem

console.log(document.head) //Também podemos selecionar o head e mostrar as informações contidas nele

console.log(document.links[0]) //Podemos acessar os links da pagina e alterar conforme queremos

document.links[0].textContent = `Facebook`; //Alterei o primeiro link da pagina de google para facebook

console.log(document.URL) //Se fosse um site hospedado ele daria a URL atual

console.log(document.title) //Ele mostra o que está presente no titulo do  site

document.title = `Aula 33` //É possivel alterar o titulo do site por meio das propriedades dessa forma

console.log(document.title) //Aqui ele mostra novamente o titulo depois da alteração feita