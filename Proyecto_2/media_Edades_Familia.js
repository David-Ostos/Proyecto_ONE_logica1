function salta() {

    document.write("<br><br><hr><br>")
}

//funcion para escribir y saltar las lineas mas simplificado.
function imprimir(frase) {

    document.write("<big>" + frase + "</big>");
        salta();

    }

var numeroMiembros = parseInt(prompt("Ingrese numero de familiares"))
var contador = 1;
var totalEdades = 0;

while (contador <= numeroMiembros) {

    var edad = parseInt(prompt("Ingrese la edad del familiar"));
    totalEdades = totalEdades + edad;
    contador++;
}

var  promedioEdad = totalEdades / numeroMiembros;

imprimir("El promedio de las edades es de: " + promedioEdad);