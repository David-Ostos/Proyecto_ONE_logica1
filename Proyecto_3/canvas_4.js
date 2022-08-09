var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400);

function diseñarCircunferencia(x,y,radio) {

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x,y,radio, 0,2*Math.PI);
    pincel.fill();

}


function limpiarPantalla (){

    pincel.clearRect(0,0,600,400);

}

var x =0;

function actualizarPantalla (){

    limpiarPantalla()
    diseñarCircunferencia(x,20,10);
    x = x + (Math.round(Math.random() * 10));

}

setInterval(actualizarPantalla,50);

//diseñarCircunferencia(20,20,10)


