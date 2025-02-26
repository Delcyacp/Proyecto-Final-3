function calcularFactorial(numero) {
    // 1. Validar la entrada
    if (numero < 0) {
    return "El factorial de un número negativo no está definido.";
    } else if (numero === 0) {
    return 1;
    }

    // 2. Crear un array para almacenar los resultados
    let resultados = [];

    // 3. Calcular el factorial y almacenar los resultados en el array
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    resultados.push(factorial);
    }

    // 4. Devolver el último valor del array (el factorial final)
    return resultados[resultados.length - 1];
}

  // Ejemplos de uso
  console.log(calcularFactorial(6)); // Imprime 720
  console.log(calcularFactorial(7)); // Imprime 5040
  console.log(calcularFactorial(-5)); // Imprime "El factorial de un número negativo no está definido."