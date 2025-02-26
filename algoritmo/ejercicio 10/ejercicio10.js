//Crear un programa que convierta grados Celsius a 
// Fahrenheit y viceversa
let gradosCelsius = 50;


function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Imprime: que 50 grados Celsius son 122 grados Fahrenheit.

let gradosFahrenheit = celsiusAFahrenheit(gradosCelsius);

console.log(gradosCelsius + " grados Celsius son " + gradosFahrenheit 
    + " grados Fahrenheit."); 

