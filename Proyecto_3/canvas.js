var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "yellow" //propiedad 
pincel.fillRect(0,0,600,400); //funcion 

pincel.fillStyle = "green" //propiedad 
pincel.fillRect(0,0,200,400); //funcion 

pincel.fillStyle = "red" //propiedad 
pincel.fillRect(400,0,200,400); //funcion

