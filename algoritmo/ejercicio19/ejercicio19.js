//Dado un año como parámetro (número), devuelve el número
//del siglo al que pertenece.

function obtenerSiglo(ano) {
    //  Dividir el año por 100
    const siglo = Math.ceil(ano / 100);

    // Devolver el siglo
    return siglo;
}

  // Ejemplos de uso
  console.log(obtenerSiglo(1971)); // 20
  console.log(obtenerSiglo(2008)); // 21
  console.log(obtenerSiglo(1873)); // 19
  console.log(obtenerSiglo(200)); // 2