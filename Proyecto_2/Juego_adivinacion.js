var numeroPensado = sorteo(10);
var numeroUsuario = parseInt(prompt("Ingrese su número pensado entre 0 - 10" ));


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

if (numeroPensado == numeroUsuario) {
    imprimir("Usted si acertó")  
} 
    else{
            if (numeroUsuario > numeroPensado){
        imprimir("Usted erró, el número pensado es menor que tu número");
        } 
         else{
            imprimir("Usted erró, el nùmero pensado era mayor que tu número")  
            
    }
}