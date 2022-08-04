function sorteo(n) {
   return Math.round(Math.random() * n);   
}

function salta() {
    document.write("<br><br><br><hr><br><br>")
}
//funcion para escribir y saltar las lineas mas simplificado.
function imprimir(frase) {

    document.write("<big>" + frase + "</big>");
    salta();
}

for(var lineas = 1; lineas <= 3; lineas++) {

    for(var columnas = 1; columnas <= 10; columnas++){

         document.write("*")
    }
    salta();
}
 imprimir("Fin")