var nombre = prompt("Cual es tu nombre?")
var peso = prompt("Cual es tu peso:");
var altura = prompt("cual es tu altura:")

function salta() {
    document.write("<br><br><br><hr><br><br>")
}
//funcion para escribir y saltar las lineas mas simplificado.
function imprimir(frase) {

    document.write("<big>" + frase + "</big>");
    salta();
}

function CalcularImc(peso,altura) {

   return(Math.round(peso / (altura * altura)))
}

var david= CalcularImc(peso,altura)
imprimir(nombre + " tu IMC es de: " + david);
