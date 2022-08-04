var victoris = parseInt(prompt("informe la cantidad de victorias"));
var empates = parseInt(prompt("informe la cantidad de empates"));
var puntosTotales = ((victoris * 3) + empates);

    function salta() {

         document.write("<br><br><br><hr><br><br>")
    }

        //funcion para escribir y saltar las lineas mas simplificado.
    function imprimir(frase) {

        document.write("<big>" + frase + "</big>");
        salta();

    }

    imprimir("El total de puntos del equipo es de: " + puntosTotales + " puntos.");

    if (puntosTotales > 28) {

        imprimir("El equipo está mejor que el año pasado ");

    }

    if (puntosTotales < 28) {

        imprimir("El equipo está peor que el año pasado ");
    }


    if (puntosTotales == 28) {

        imprimir("El equipo está igual que el año pasado ");

    }