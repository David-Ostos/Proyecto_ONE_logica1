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

diseñarCircunferencia(20,20,10)
