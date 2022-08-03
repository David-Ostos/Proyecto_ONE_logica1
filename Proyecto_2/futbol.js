var victoris = parseInt(prompt("informe la cantidad de victorias"));
var empates = parseInt(prompt("informe la cantidad de empates"));
//var victoris = parseInt(victoris);
//var empates = parseInt(empates);
var puntosTotales = ((victoris * 3) + empates);

function salta() {
    document.write("<br><br><br><hr><br><br>")
}
//funcion para escribir y saltar las lineas mas simplificado.
function imprimir(frase) {

    document.write("<big>" + frase + "</big>");
    salta();
    }

    imprimir("El total de puntos del equipo es: " + puntosTotales);