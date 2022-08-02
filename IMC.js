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

//altura y peso de jose 
var david = CalcularImc(75,1.72);
var jose = CalcularImc(80,1.75);

imprimir("El IMC calculado de David es de: " + david + ", el de Jose es de: " + jose + " y el promedio de los 2 es de: " + (david+jose)/2);
