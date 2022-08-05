var secreto = 5 ;
var input = document.querySelector("input");

function verificar() {

    if (parseInt(input.value) == secreto){
        
        alert("Usted acertó");
    }
    else {

        alert("usted erró");

    }
    
}

var button = document.querySelector("button");
button.onclick = verificar;