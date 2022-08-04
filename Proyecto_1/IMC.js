var nombre = prompt("Cual es tu nombre?")
var peso = prompt("Cual es tu peso:");
var altura = prompt("cual es tu altura:")
var imcCalculado= CalcularImc(peso,altura)


function salta() {
    document.write("<br><br><br><hr><br><br>")
}
//funcion para escribir y saltar las lineas mas simplificado.
function imprimir(frase) {

    document.write("<big>" + frase + "</big>");
    salta();
}

function CalcularImc(peso,altura) {

   return((peso / (altura * altura)))
}

imprimir(nombre + " tu IMC es de: " + imcCalculado);

if (imcCalculado < 18.5) {
    imprimir("El IMC esta por debajo de lo recoemndado")
}

if (imcCalculado >= 18.5 && imcCalculado <= 24.99) {
    imprimir("El IMC esta en los parametros normales")
}

if (imcCalculado >= 25 && imcCalculado < 30) {
    imprimir("El IMC es considerado como sobrepeso")
}

if (imcCalculado >= 30 ) {
    imprimir("El IMC considerado es considerado como obesidad")
}

