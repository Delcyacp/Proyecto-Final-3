//Determinar si una palabra es un palíndromo.



function esPalindromo(palabra) {

    //aseegurarnos que las palabras esten todas las letras en minusculas y sin espacios en blanco

palabra = palabra.toLowerCase ().replace ("");

//copia de la palabra original para luego invertirla y dejarla en una nuevo array

let palabraInvertida = palabra.slice().split("").reverse().join("");

}
//comparo la palabra con la palabra invertida
if (palabra === palabraInvertida) {

    return true;
} 
else {
    return false; 
} 
console.log(esPalindromo("Omar")); 
console.log (esPalindromo("Paloma"));

console.log(palabra);
