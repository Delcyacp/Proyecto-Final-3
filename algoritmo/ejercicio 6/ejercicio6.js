//Crear un programa que calcule el número Fibonacci
// en la posición (n).
let n = prompt("Ingresa la posición del número Fibonacci:");
n = parseInt(n);

if (isNaN(n) || n < 0) {
    console.log("Entrada inválida. Ingresa un número entero no negativo.");
} else if (n === 0 || n === 1) {
    console.log("El número Fibonacci en la posición " + n + " es: " + n);
} else {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    console.log("El número Fibonacci en la posición " + n + " es: " + b);
}