
//Escribir una función que determine 
// si un número es par o impar.
function esParImpar (numero) {
    if (numero % 2 === 0) {
        return "par;"
    } else {
        return "imprar";
    }
}

// Función para manejar el evento del botón (se llamará desde el HTML)
function verificar() {
    // par el número del campo 
    let numero = document.getElementById("numero").value;

    // Convertir a número (si es válido)
    numero = parseInt(numero);

    // Verificar si es un número válido
    if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
    return;
    }

    // Obtener el resultado (par o impar)
    let resultado = esParImpar(numero);

    // Mostrar el resultado en el elemento HTML
    document.getElementById("resultado").textContent = "El número es " + resultado;
}
