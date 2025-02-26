//Escribir una función que convierta un número romano a
//número arábigo.

function romanoAArabigo(numeroRomano) {
    const valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

let resultado = 0;
let valorAnterior = 0;

for (let i = numeroRomano.length - 1; i >= 0; i--) {
    const caracter = numeroRomano[i];
    const valorActual = valores[caracter];
    
    if (valorActual < valorAnterior) {
        resultado -= valorActual;
    } else {
        resultado += valorActual;
    }
    
    valorAnterior = valorActual;
}

return resultado;
}

console.log(romanoAArabigo("III")); // 3
console.log(romanoAArabigo("CLVIII")); // 158
console.log(romanoAArabigo("MCMXCV")); // 1995