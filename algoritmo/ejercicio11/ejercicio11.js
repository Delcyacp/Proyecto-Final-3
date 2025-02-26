//- Encontrar el segundo número más grande 
// en un array. 

const segundoMasGrande = [];
let numeros = [10, 5, 20, 8, 15];
let segundoMayor = segundoMasGrande(numeros);

function segundoMasGrande(array) {

    //verificar si el array tiene al menos dos elementos
    if (array.length < 2) {
    return "El array debe tener al menos dos elementos";
    }

    // Ordenar el array de mayor a menor
    array.sort((a, b) => b - a);

    // El segundo elemento es el segundo más grande
    return array[1];
}

  // Ejemplo 
  console.log("El segundo número más grande es:", segundoMayor); // Imprime: El segundo número más grande es: 15




function segundoMasGrande(array) {
  if (array.length < 2) {
    return "El array debe tener al menos dos elementos";
  }

  let mayor = -Infinity; // Inicializar con el valor más pequeño posible
  let segundoMayor = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      segundoMayor = mayor;
      mayor = array[i];
    } else if (array[i] > segundoMayor && array[i] !== mayor) {
      segundoMayor = array[i];
    }
  }

  if (segundoMayor === -Infinity) {
    return "No hay un segundo número más grande distinto";
  }

  return segundoMayor;
}

// Ejemplo de uso
let numeros = [10, 5, 20, 8, 15];
let segundoMayor = segundoMasGrande(numeros);
console.log("El segundo número más grande es:", segundoMayor); // Imprime: El segundo número más grande es: 15