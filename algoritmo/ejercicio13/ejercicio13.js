//Crear un algoritmo que sume 
// todos los números de un array. 

//declaramos variables

function sumarNumeros(numeros) {
    let total = 0; 
    
    // Recorremos cada número de los numeros
    
    for (let i = 0; i < numeros.length; i++) {
        
        // Añadimos el número actual
        total = total + numeros[i];
    
    }
    // Mostramos el número total de todos los números
    return total;  
}

let numeros = [5, 10, 15, 20]; 
let sumarNumeros = (numeros);
console.log("La suma de los números es: " + suma); // ¡Y aquí está el resultado!
