var secretos =[3,5,7,9] ;
var input = document.querySelector("input");

input.focus();

function verificar() {
    
    var encontrado = false ;
    for(var posicion = 0; posicion < 4; posicion++){

        if (parseInt(input.value) == secretos[posicion]){
        
            alert("Usted acertó");
            encontrado = true
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