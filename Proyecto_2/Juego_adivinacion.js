var numeroPensado = Math.round(Math.random()* 10);
var numeroUsuario = parseInt(prompt("Ingrese su número pensado entre 0-10"));


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

if (numeroPensado == numeroUsuario) {
    imprimir("Usted si acertó")
}

else {
    imprimir("Usted fallo el numero era el " + numeroPensado)
}