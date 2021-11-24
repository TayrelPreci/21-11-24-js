var con = prompt("digite o valor da conta: ")

var pag = prompt("digite o valor que já foi pago: ")

var val = parseInt(con) - parseInt(pag)

document.getElementById("res").innerHTML = val