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

    document.write("<big>" + frase + "</big>")
    
    salta2()
}

//altura y peso de David
var pesoDa = 75;
var alturaDA = 1.72;
var imc = pesoDa / (alturaDA * alturaDA)

imprimir("El peso IMC de David es:" + imc)