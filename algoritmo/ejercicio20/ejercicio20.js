//Un reloj muestra:
//-> la hora (0 <= h <= 23)
//-> los minutos (0 <= m <= 59)
//-> y los segundos (0 <= s <= 59).
//Escribe una funcion que calcule los millisegundos que han pasado
//desde media noche 00:00:00 hasta la hora actual teniendo en
//cuenta que:
//Hay 1000 millisegundos en un segundo
//Podemos obtener la hora, minutos y segundos con la función
//"getTime"

function milisegundosDesdeMedianoche() {

    // Obtener la fecha y hora actuales
    const ahora = new Date(); 

    // Obtener la hora, los minutos y los segundos actuales
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    // Calcular los milisegundos transcurridos desde la medianoche
    const milisegundos = (horas * 60 * 60 + minutos * 60 + segundos) * 1000;

    return milisegundos;
}

const milisegundos = milisegundosDesdeMedianoche();
console.log("Milisegundos desde la medianoche:", milisegundos, new Date);
