function salta2() {
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<hr>")
    document.write("<br>")
    document.write("<br>")
    
}
//funcion para escribir y saltar las lineas mas simplificado.
function imprimir(frase) {

    document.write("<big>" + frase + "</big>");
    salta2();
}

function CalcularImc(peso,altura,nombre) {

    imc =Math.round(peso / (altura * altura));
    imprimir("El IMC calculado de: " + nombre + (" es ") + imc);
}

//altura y peso de jose 
CalcularImc(75,1.72, "David");
CalcularImc(80,1.75, "Jose");