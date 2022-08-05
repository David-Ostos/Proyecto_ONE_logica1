var secretos = sortearNumeros(4);
var input = document.querySelector("input");
input.focus();

function aleatorio(){

    return Math.round(Math.random()*10);

}

function sortearNumeros (cantidad) {

    var secretos= [];
    var contador = 1;

    while(contador <= cantidad){

        numeroAleatorio = aleatorio();
        secretos.push(numeroAleatorio);
        contador++;

    }
    
    return secretos;
}

function verificar() {
    
    var encontrado = false ;

    for(var posicion = 0; posicion < secretos.length; posicion++){

        if (parseInt(input.value) == secretos[posicion]){
        
            alert("Usted acertó");
            encontrado = true;
            input.focus();
            input.value = "";
            break;

        }
    }
    if(encontrado == false){

        alert("usted erró");
        input.focus();
        input.value = "";
        
    }
  
}

var button = document.querySelector("button");
button.onclick = verificar;

console.log(secretos);