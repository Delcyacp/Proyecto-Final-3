//Crear un programa que devuelva los números primos hasta el
//número (n).

const n = 30; // Número hasta el cual queremos encontrar primos

const primosHastaN = obtenerPrimosHasta(n);


function obtenerPrimosHasta(n) {
// Array para almacenar los números primos encontrados
    const primos = []; 

    // Iterar sobre los números desde 2 hasta n
    for (let i = 2; i <= n; i++) {

// Variable para indicar si el número actual es primo 
// (inicialmente asumimos que sí)
    let esPrimo = true; 

      // Iterar solo hasta la raíz cuadrada de i
      for (let j = 2; j * j <= i; j++) {

        // Si i es divisible por j, entonces no es primo
        if (i % j === 0) {

          esPrimo = false; // Marcar como no primo
          break; // Salir del bucle interno, ya no es necesario seguir verificando divisores
        }
    }
        // Optimización 2: Si el número es par y mayor que 2, no es primo (se omite esta verificación aquí porque se maneja implícitamente en el bucle principal)

      // Si el número es primo, agregarlo al array de primos
    if (esPrimo) {
        primos.push(i);
    }
    }

    return primos; // Devolver el array con los números primos encontrados
}
  console.log(primosHastaN); // Imprime: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]