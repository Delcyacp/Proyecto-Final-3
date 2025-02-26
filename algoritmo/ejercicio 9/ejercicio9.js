//Escribir un algoritmo que 
//determine si un año es bisiesto. 

//ya que matematicamente puedo saber si un año es biciesto 
// o no dividiendo el año entre 4 Si elresultado es diferente de 0 No es bisiesto

function anoBisiesto(ano) {
    if (ano % 4 !== 0)  {
        return false;
    }
// 2. compruebo si el año es divisible por 100, es bisiesto.
if (ano % 100 === 0) {

    // 3. compruebo si el año es divisible por 400, es bisiesto.
    return ano % 400 === 0;
}

return true;
}

// Ejemplos 
console.log(anoBisiesto(2024)); // true
console.log(anoBisiesto(2000)); // true
console.log(anoBisiesto(1900)); // false
console.log(anoBisiesto(2025)); // false
