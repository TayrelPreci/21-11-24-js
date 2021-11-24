var prod = prompt("qual o nome do produto: ")

var val = prompt("qual o valor do produto: ")
 
var quant = prompt("quantidade de produto na compra: ")

var res = parseInt(val)*parseInt(quant)

document.getElementById("res").innerHTML = "o valor total da compra do "+prod+" é: "+res;