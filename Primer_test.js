    // variable año
    var anho = 2022;

   //variable de la edad de David
    var edDa = anho-1995;
   
   //variable de la edad de Juan
     var edJu = anho-2000;
   
   //variable de la edad de Pedro
    var edPe = anho-1995;
   
   //variable de la edad de Carlos
    var edCa = anho-2005;
  
  //variable de la edad de Jimena
    var edJi = anho-2010;

  //variable de la edad de Paula
    var edPa = anho-1995;

  //variable de la edad de Laura
    var edLa = anho-2005;

    //variabled esalto de linea
    var salto4 = "<br><br><br><br>"
    var salto2 = "<br><br>"
    var salto1 ="<br>"


    //Esta es la edad de david     
    document.write("La edad de David es...")
    document.write(salto1);
    document.write(edDa + " años");
    document.write(salto2);

    
    //Edad de juan en el 2022
	document.write("Juan tiene: " + edJu + " años");;
	document.write(salto2);

    //edad de pedro en el 2022
	document.write("Pedro tiene: " + edPe + " años");
	document.write(salto2);;
    
    //anexando la era 2030
    anho = 2030;
    
    //edad de carlos en el 2030
	document.write("Carlos tiene: " + edCa + " años");
    document.write(salto2);

    //creando variable promedio 
    promedio = Math.round((22+27+25+27)/4)

    //Promedio de las edades de los hombres
    document.write("El promedio de las edades de los hombres es: " + promedio + " años");
    document.write(salto4);

    //anexando a las chicas en el año actual
    anho = 2022

    //Edad de Jimena
    document.write("Jimena tiene: " + edJi + " años")
    document.write(salto2);

    //Edad de paula
    document.write("Paola tiene: " + edPa + " años");
    document.write(salto2);

    //Edad de laura
    document.write("laura tiene: " + edLa + " años");
    document.write(salto2);

    //creando variable promedio 
    promedio = Math.round((12+17+27)/3)

    //Promedio de las edades de las chicas
    document.write("El promedio de las edades de las mujeres es: " + promedio + " años");
    document.write(salto2);
    