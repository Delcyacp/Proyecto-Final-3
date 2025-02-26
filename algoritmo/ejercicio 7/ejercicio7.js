//Ordenar un array de números en orden ascendente 
//(sin usar sort). 

function ordenarAscendente(array) {

    //Crear un array vacio
    const nuevoArray = [];
    
    //Itera el array original
    for (let i = 0; i < array.length; i++) {
        
        console.log("array original:", array);

        //obtiene el elemento actual del array original
    const elemento = array[i];
    
    // Encuentra la posicion correcto donde para insertar el nuevo elemento 
    let j = 0;
            while (j < nuevoArray.length && elemento > nuevoArray[j]) {
                    j++;
            }
    //Inserta el elemento en la posicion orrecta
    nuevoArray.splice(j, 0, elemento);
    
}

//Devuelve el nuevo array  ordenado
return nuevoArray;
console.log("array ordenado:", nuevoArray);
}



