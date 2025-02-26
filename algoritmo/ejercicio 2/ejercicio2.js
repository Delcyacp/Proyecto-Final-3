
function invertirString(inverStr) {

    // 1. Verificar si el string es válido
    
    if (!inverStr) {
    return "El string está vacío o no es válido.";
    }

    // 2. Dividir el string en un array de caracteres
    const caracteres = inverStr.split("");

    // 3. Invertir el orden de los elementos del array
    caracteres.reverse();

    // 4. Unir los elementos del array en un nuevo string
    const stringInvertido = caracteres.join("");

    // 5. Devolver el string invertido
    return stringInvertido;
}

function invertirTexto() {
    let texto = document.getElementById("texto").value;
    let textoInvertido = invertirString(texto);
    document.getElementById("resultado").textContent = "Texto invertido: "
+ textoInvertido;
}
