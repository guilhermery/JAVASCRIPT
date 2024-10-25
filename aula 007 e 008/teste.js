var n1 = Number.parseInt(window.prompt("Digite a primeira nota"));
var n2 = Number.parseInt(window.prompt("Digite a segunda nota"));
var n3 = Number.parseInt(window.prompt("Digite a terceira nota"));
var media = (n1 + n2 + n3)/3;
media>=7?(window.alert(`Você passou com media ${media}`)):(window.alert(`Você não passou com média ${media}`));