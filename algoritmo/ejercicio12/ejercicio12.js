//Escribir una función que elimine los elementos 
// duplicados de un array

const numeros = [1, 2, 2, 3, 4, 4, 5];
const resultado = eliminarDuplicados(numeros);

function eliminarDuplicados(array) {
    const unicos = [];   
    
    // Objeto para almacenar los elementos ya vistos
    const vistos = {}; 
    
    for (let i = 0; i < array.length; i++) {
    const elemento = array[i];

    // Si el elemento no ha sido visto antes
    if (!vistos[elemento]) { 

        console.log(elemento)
        // Agregar el elemento al array de únicos
        unicos.push(elemento); 

// Marcar el elemento como visto        
        vistos[elemento] = true; 

    }
    }

    return unicos;
}

  console.log(resultado); // Imprime: [1, 2, 3, 4, 5]