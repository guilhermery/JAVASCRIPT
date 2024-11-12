//É possível criar elementos pelo DOM e inserir no HTML

let novoParagrafo = window.document.createElement(`p`) //criei o elemento puro

let texto = window.document.createTextNode(`Este é o conteudo do parágrafo`) //criei um nó de texto que vai ser adicionado ao parágrafo

novoParagrafo.appendChild(texto) //adicionei o texto ao elemento criado

let body = window.document.querySelector(`body`) //mapeei o body para poder inserir o elemento nele em seguida

body.appendChild(novoParagrafo) //adicionei o paragrafo ao body como filho

//inserir em um container

let container = window.document.querySelector(`div#container`)//localizei o container pelo id

var element = window.document.createElement(`span`)//criei o elemento span

element.appendChild(window.document.createTextNode(`Texto do span`)) //criei e inseri o texto diretamente dentro do span

container.appendChild(element) //inseri o elemento ao container

//Observação, todos os elementos que foram criados no HTML vem antes dos elementos que foram criados diretamente no JavaScript, como por exemplo a div que está antes do paragrafo que foi criado.