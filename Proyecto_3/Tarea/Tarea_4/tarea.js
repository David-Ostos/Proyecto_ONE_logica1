var serie2009 = [6,47,41,3,3];
var serie2019 = [81,9,3,3,4]
var colores =["blue","green","yellow","red","gray"];

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function dibujarRectangulo(x, y, base, altura, color) {

    pincel.fillStyle=color;
    pincel.fillRect(x,y, base, altura);
    pincel.strokeStyle="black";
    pincel.strokeRect(x,y, base, altura);
}

function escribirTexto(x , y, texto) {

    pincel.font="15px Georgia";
    pincel.fillStyle="black";
    pincel.fillText(texto, x, y);    
}

function dibujarBarra(x, y, serie, colores, texto) {

    escribirTexto(x,y - 10, texto);

    var sumaAltura = 0;

    for(var i = 0;i < serie.length; i++){

        var altura = serie[i];
        dibujarRectangulo(x,y + sumaAltura, 50, altura,colores[i]);
        sumaAltura = sumaAltura + altura;
    }

}

function leyenda(x,y,color,texto){

    escribirTexto(x+20,y+10, texto);

    pincel.fillStyle=color;
    pincel.fillRect(x,y, 10, 10);
    pincel.strokeStyle="black";
    pincel.strokeRect(x,y, 10, 10);

}

dibujarBarra(50,50,serie2009, colores, "2009");
dibujarBarra(150,50,serie2019, colores, "2019");

leyenda(250,50,"blue","Google " + serie2009[0] + "% | " + serie2019[0] + "%");
leyenda(250,70,"green","Firefox "+ serie2009[1] + "% | " + serie2019[1] + "%");
leyenda(250,90,"yellow","Explorer/Edge "+ serie2009[2] + "% | " + serie2019[2] + "%");
leyenda(250,110,"red","Safari "+ serie2009[3] + "% | " + serie2019[3] + "%");
leyenda(250,130,"gray","Otros "+ serie2009[4] + "% | " + serie2019[4] + "%");
/*
pincel.fillStyle = color; //propiedad 
pincel.fillRect(x,y,50,50); //funcion 
pincel.strokeStyle ="black"; // color de linea 
pincel.strokeRect(x,y,50,50); // hacer una linea en el borde
*/