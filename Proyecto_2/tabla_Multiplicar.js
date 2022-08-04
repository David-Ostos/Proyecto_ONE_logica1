function salta() {

    document.write("<br><br><hr><br>")
}

//funcion para escribir y saltar las lineas mas simplificado.
function imprimir(frase) {

    document.write("<big>" + frase + "</big>");
        salta();

    }

var nuemroU = parseInt(prompt("Ingrese el numero de la tabla"));
var numeroL = 0;

imprimir("WHILE")

while (numeroL <= 10) {

    imprimir(nuemroU + " por " + numeroL + " = " + nuemroU * numeroL);
    numeroL = numeroL + 1;
     }

imprimir("FOR")

for (var numeroL = 0; numeroL <= 10; numeroL++) {

        imprimir(nuemroU + " por " + numeroL + " = " + nuemroU * numeroL);

    }