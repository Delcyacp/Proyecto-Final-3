let texto = "Cada día";
console.log (texto);

let letra = "a";
console.log(letra);

let cantidad = contarCaracteres(texto, letra);

console.log("La letra '" + letra + "' aparece " + cantidad + " veces en el texto.");

//Crear una función que cuente cuántas veces 
// aparece un carácter en un string.

function contarCaracteres(cadena, caracter) {

    // Convertir la cadena y el carácter a minúsculas para que la búsqueda no distinga entre mayúsculas y minúsculas
        cadena = cadena.toLowerCase();
        caracter = caracter.toLowerCase();
        
          //iniciar el contador
        let contador = 0;
        
        for (let i = 0; i < cadena.length; i++) {
        
            //comproban que i es igual a caracter
                if (cadena[i] === caracter) {
            
            //si es igual le sumo 1
            contador++;
            console.log(contador);
        }
    }
        //vuelvo a el contador
    return contador;
}

  // uso