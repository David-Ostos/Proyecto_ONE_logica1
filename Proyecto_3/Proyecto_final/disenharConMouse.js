
var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var colorActual = "blue";
var puedoDibujar = false;

// variables para etener el tamaño de los cudrados del cambio de los colores
var xRojo = 0;
var xVerde = 50;
var xAzul = 100;
var yCuadrados = 0;
var tamanhoCuadrados = 50;


function dibujarCirculo(x,y,colorActual) {
    if(puedoDibujar) {

       // var x = evento.pageX - pantalla.offsetLeft;
       // var y = evento.pageY - pantalla.offsetTop;

        pincel.fillStyle = colorActual;
        pincel.beginPath();
        pincel.arc(x, y, 5, 0, 2 * 3.14);
        pincel.fill();

    }

}

    
// funcion para dibujar cuadrados
function dibujarCuadrado(x, y, tamanho, color) {

    pincel.fillStyle = color;
    pincel.fillRect(x, y, tamanho, tamanho);
    pincel.fill();
    
}

// funcion para darle los parametros a los cuadrados para el cambio de color 
function dibujarPaletaColores() {
    
    dibujarCuadrado(xRojo, yCuadrados, tamanhoCuadrados, 'red');
    dibujarCuadrado(xVerde, yCuadrados, tamanhoCuadrados, 'green');
    dibujarCuadrado(xAzul, yCuadrados, tamanhoCuadrados, 'blue');
    
}

//pantalla.onmousemove = dibujarCirculo;

function habilitarDibujar() {

    puedoDibujar = true;
}

function deshabilitarDibujar() {

    puedoDibujar = false;
}
 
    //Funcion para poder dibujar y no llenar el arrea restringida
function puedeDisenharArea(xCoordenada,yCoordenada){
    
    if  (xCoordenada >= 0 && (xCoordenada < (3*tamanhoCuadrados+5)) && 
        (yCoordenada >=0 && yCoordenada < (tamanhoCuadrados+5))) {
    
        return false;
    
    } else{
    
        return true;
    
    }
    
}    

/*funcion para capturar el movimiento con las restrinciones, tambien tiene if para
que cuando sea permitido active la funcion dibujar*/     
function capturarMovimientoDelMouse(evento){
    
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    
    if (puedeDisenharArea(x,y)){
    
                dibujarCirculo(x,y,colorActual);
    
    }
    
}

function seleccionarColor(evento){
     
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if  (y > yCuadrados && y < (yCuadrados + tamanhoCuadrados)){  
    
    if  (x > xRojo && x < (xRojo + tamanhoCuadrados)){

            return colorActual = "red";
        
        }else if(x > xVerde && x < (xVerde + tamanhoCuadrados)){

            return colorActual = "green";
        }else if (x > xAzul && x < (xAzul + tamanhoCuadrados)){

            return colorActual = "blue";
        }
    }    
}

pantalla.onclick = seleccionarColor;
    
pantalla.onmousemove = capturarMovimientoDelMouse;

pantalla.onmousedown = habilitarDibujar;

pantalla.onmouseup = deshabilitarDibujar;

dibujarPaletaColores();
