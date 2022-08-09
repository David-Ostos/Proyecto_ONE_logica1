var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");    

var colores = ["blue", "red", "green"];
var colorActual = 0; 

pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400); 

function dibujarCirculo(evento){

    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;   

    pincel.fillStyle = colores[colorActual];
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();

    console.log(x + "," + y);    

}

pantalla.onclick = dibujarCirculo;

function alterarColor() {
     colorActual++;
     if(colorActual>= colores.length){
        colorActual = 0
     }
    return false;
}

pantalla.oncontextmenu = alterarColor;