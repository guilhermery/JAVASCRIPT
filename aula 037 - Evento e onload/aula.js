//Por meio do JavaScript podemos mapear algumas ações dos usuarios, que chamamos de eventos, como por exemplo movimentos do mouse, click, mouse entrando e saindo de um elemento, carregamento da pagina e etc.

//E então criar um comportamento interessante, como por exemplo: criar uma animação de menu abrindo ou fechando.

//Evento onload: é ativado ao carregar a página, podendo ser executada alguma ação após a ativação desse evento.

//Obs: para ver a execução, utilize o inspecionar no chrome.

window.onload = function(){
    console.log(`Carregou o DOM`)
    let title2 = window.document.querySelector(`h1#title`)
    console.log(title2) //Essa variável recebeu o título, pois como está dentro do evento onload, a função só foi executada após carregar todo o HTML/DOM.
}
console.log(`Carregou o JS`) //Esse será executado primeiro, pois o script carrega antes do DOM

let title = window.document.querySelector(`h1#title`) //Essa variável será null pois ela não pode receber um elemento que não foi carregado ainda (já que o script está antes desse elemento no HTML/DOM)

console.log(title)