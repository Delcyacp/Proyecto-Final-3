//Escribir un programa que verifique si dos strings son
//anagramas. 

function sonAnagramas(string1, string2) {

    // Convertir ambos strings a minúsculas y eliminar espacios en blanco
    string1 = string1.toLowerCase().replace(/\s/g, "");
    string2 = string2.toLowerCase().replace(/\s/g, "");

    //  Verificar si tienen la misma longitud
    if (string1.length !== string2.length) {
    return false;
    }

    // Ordenar los caracteres de ambos strings
    string1 = string1.split("").sort().join("");
    string2 = string2.split("").sort().join("");

    // 4. Comparar los strings ordenados
    return string1 === string2;
}
console.log(sonAnagramas("Poder", "Pedro")); // true
console.log(sonAnagramas("Prisa", "Risa")); // false
console.log(sonAnagramas("Materialismo", "Memorialista")); // true



