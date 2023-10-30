/* DONE
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/

function calculateCentury(year) {
    return Math.ceil(year / 100);
}

calculateCentury(2023);  // Result: 21

showContent(16, calculateCentury);
