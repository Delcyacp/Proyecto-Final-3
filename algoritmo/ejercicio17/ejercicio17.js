//Crear un algoritmo que valide si un string tiene paréntesis
//balanceados

 // Pila se utilizara para almacenar los paréntesis de apertura
function validarParentesis(str) {
    const pila = [];
    const parejas = {
    ')': '(',
    ']': '[',
    '}': '{'
    };

    for (let i = 0; i < str.length; i++) {
        const cierre = str[i];

      // Pareja es para un paréntesis de cierre
    if (parejas[cierre]) { 
        const ultimo = pila.length === 0 ? '#' : pila.pop(); // Obtener el último elemento de la pila o '#' si está vacía
        if (parejas[cierre] !== ultimo) { 
            // Si no coinciden
          return false; 
        }
      } else if ('({['.includes(cierre)) { // Si es un paréntesis de apertura
        pila.push(cierre); // Apilar el paréntesis de apertur
        }
    }

    return pila.length === 0; // Si la pila está vacía al final, están balanceados
}



  console.log(validarParentesis('()')); // true
  console.log(validarParentesis('({[]})')); // true
  console.log(validarParentesis('[(])')); // false
  console.log(validarParentesis('{{}')); // false
  console.log(validarParentesis('')); // true (un string vacío se considera balanceado)