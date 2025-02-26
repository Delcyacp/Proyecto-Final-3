//- Escribir una función que encuentre el número mayor en un
//array. 


function encontrarMayor(array) {

    // Verificar si el array está vacío
    if (array.length === 0) {
        
        return "El array está vacío"; // Devolver un mensaje si el array está vacío
    }
    
    // Asumir que el primer elemento es el mayor inicialmente
    let mayor = array[0];
    
    // Iterar sobre el resto del array
    for (let i = 1; i < array.length; i++) {
        
        // Compara el elemento actual con el mayor actual
        if (array[i] > mayor) {
            
            // Actualizar el mayor si el elemento actual es mayor
            mayor = array[i]; 
        }
    }
    
    // Devolver el número mayor encontrado
    return mayor;
}

//ejemplos

const numeros = [10, 5, 0, 8, 15];
const numeroMayor = encontrarMayor(numeros);
console.log("El número mayor es:", numeroMayor); 

const otroArray = [-5, -10, -2, -1];
const numeroMayor2 = encontrarMayor(otroArray);
  console.log("El número mayor es:", numeroMayor2); // Imprime: El número mayor es: -1

const arrayVacio = [];
const numeroMayor3 = encontrarMayor(arrayVacio);

//El array está vacío
console.log(numeroMayor3); 