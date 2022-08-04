     function salta() {

         document.write("<br><br><br><hr><br><br>")
    }

        //funcion para escribir y saltar las lineas mas simplificado.
    function imprimir(frase) {

        document.write("<big>" + frase + "</big>");
        salta();

    }

    var anhoMundial = 1930;
    var limite = parseInt(prompt("ingrece el año limite para calcular"))
    while (anhoMundial <= limite){
        
        imprimir("Hubo mundial de la FIFA en el año " + anhoMundial);
        anhoMundial = anhoMundial + 4;

    }