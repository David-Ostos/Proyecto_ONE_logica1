var numeroPensado = sorteo(10);
var intentos = 1;
var contador = 1;

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


    while (contador <= 3){

        var numeroUsuario = parseInt(prompt("Ingrese su número pensado entre 0 - 10" ));

    if (numeroPensado == numeroUsuario) {    

        alert("Usted acertó, en el intento " + intentos + " el numero pensado era " + numeroPensado) 
        break; 

    } else {
             alert("Usted erró");
    
        } 

        contador++;

    }



    if (numeroPensado == numeroUsuario) {

        imprimir("Usted acertó, en el intento " + intentos + " el numero pensado era " + numeroPensado)  
    } 
        else{
            imprimir("Usted erró, el numero pensado era " + numeroPensado);
               
        }
