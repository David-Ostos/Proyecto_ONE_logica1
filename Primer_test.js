     // variable año
    var anho = 2022;
 
    //variable de edad en el año 1995
    var a95 = anho-1995;
 
    //variable del año 2000
     var a00 = anho-2000;
 
     //variable año 2005
    var a05 = anho-2005;
 
    //variable año 2010
    var a10 = anho-2010;
 
    //funccion de saltar 2 linea 
    function salta2() {
        document.write("<br>")
        document.write("<br>")
        document.write("<br>")
        document.write("<hr>")
        document.write("<br>")
        document.write("<br>")
        
    }
    //funcion para escribir y saltar las lineas mas simplificado.
    function imprimir(frase) {

        document.write("<big>" + frase + "</big>")
        
        salta2()
    }
    imprimir("<hr><br>Todo es posible mientras seas constante.");

    imprimir("La edad de David es...<br>" + a95 + " años.");

	imprimir("Juan tiene: " + a00 + " años.");
	
	imprimir("Pedro tiene: " + a95 + " años.");
    
    //anexando la era 2030
    anho = 2030;

	imprimir("Carlos tiene: " + a05 + " años.");

    promedio = Math.round((22+27+25+27)/4);

    //Promedio de las edades de los hombres
    imprimir("El promedio de las edades de los hombres es: " + promedio + " años.");

    //anexando a las chicas en el año actual
    anho = 2022;

    imprimir("Jimena tiene: " + a10 + " años.");

    imprimir("Paola tiene: " + a95 + " años.");

    imprimir("laura tiene: " + a05 + " años.");

    //creando variable promedio 
    promedio = Math.round((12+17+27)/3);

    //Promedio de las edades de las chicas
    imprimir("El promedio de las edades de las mujeres es: " + promedio + " años.");
    

    /*    }
    //funccion de saltar linea de 4 lineas
    function salta4() {

        document.write("<br>")
        document.write("<br>")
        document.write("<br>")
        document.write("<br>")
    }
    
    //variabled esalto de linea
    var salto4 = "<br><br><br><br>"
    var salto2 = "<br><br>"
    var salto1 ="<br>"

       //funccion de saltar linea de 1 linea
    function salta1() {

        document.write("<br>")
    }
    */
