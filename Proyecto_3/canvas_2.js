function dibujarCuadroVerde(){

    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    
    pincel.fillStyle = "green"; //propiedad 
    pincel.fillRect(0,0,50,50); //funcion 
    pincel.strokeStyle ="black"; // color de linea 
    pincel.strokeRect(0,0,50,50); // hacer una linea en el borde
}


dibujarCuadroVerde();



/*
pincel.fillStyle = "green"; //propiedad 
pincel.fillRect(0,0,200,400); //funcion 

pincel.fillStyle = "red"; //propiedad 
pincel.fillRect(400,0,200,400); //funcion

pincel.fillStyle = "white"; //propiedad 
pincel.beginPath(); //funcion 
pincel.moveTo(300,200);//funcion 
pincel.lineTo(200,400);//funcion 
pincel.lineTo(400,400);//funcion 
pincel.fill(); //funcion 

pincel.fillStyle = "white"; //propiedad 
pincel.beginPath(); //funcion 
pincel.arc(300,200,50,0,2*3.14); //funcion
pincel.fill(); //funcion 
*/