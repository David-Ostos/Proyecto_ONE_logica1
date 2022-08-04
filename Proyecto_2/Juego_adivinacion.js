
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

if (imcCalculado < 18.5) {
    imprimir("El IMC esta por debajo de lo recoemndado")
}
