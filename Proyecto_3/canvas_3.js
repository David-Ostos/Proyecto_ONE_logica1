var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

 pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400);

function exibirAlerta(evento){
    var x = evento.pageX - pantalla.offsetLeft; // donde pantalla.offsetLeft es el indicardor externo izquierdo de la pantalla ( lienzo) 
    var y = evento.pageY - pantalla.offsetTop; // donde top es arriba 

    console.log(evento)
    alert(x + "," + y);
}

function dibujarCirculo(evento){
    var x = evento.pageX - pantalla.offsetLeft; // donde pantalla.offsetLeft es el indicardor externo izquierdo de la pantalla ( lienzo) 
    var y = evento.pageY - pantalla.offsetTop; // donde top es arriba 

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();
    console.log(evento)
}

pantalla.onclick = dibujarCirculo; 