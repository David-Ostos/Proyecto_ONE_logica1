//altura y peso de jose 
var imcDa  = CalcularImc(75,1.72);
var imcJo = CalcularImc(80,1.75)

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

function CalcularImc(peso,altura) {

    imc =Math.round(peso / (altura * altura));
    return(imc);
}

imprimir("El IMC de David es de :" + imcDa);

imprimir("El IMC de Jose es de :" + imcJo);