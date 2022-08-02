//altura y peso de David
var pesoDa = 75;
var alturaDA = 1.72;

//altura y peso de jose 
var pesoJo = 80;
var alturaJo = 1.75;

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

CalcularImc(pesoDa,alturaDA);
imprimir("El IMC de David es de :" + imc);

CalcularImc(pesoJo,alturaJo);
imprimir("El IMC de Jose es de :" + imc);