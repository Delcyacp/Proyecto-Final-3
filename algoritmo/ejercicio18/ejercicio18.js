//Crear un programa que transforme una frase en "notación
//hacker" (leet speak).

function leetSpeak(frase) {
    const sustituciones = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    'l': '1',
    't': '7',
    's': '5',
    'm': '9',
    'r': '8',
    };

    let fraseLeet = "";

    for (let i = 0; i < frase.length; i++) {

        //cambiar a minusculas
    const letra = frase[i].toLowerCase();

    if (sustituciones[letra]) {
        fraseLeet += sustituciones[letra];

    } else {
        fraseLeet += letra;
    }
    }

    return fraseLeet;
}

  console.log(leetSpeak("Amor")); // 4908
  console.log(leetSpeak("Lola Mesa es su mama")); //1014 9354 
  console.log(leetSpeak("Este es un mensaje secreto")); // 3573 35 un m3n54j3 53cr370