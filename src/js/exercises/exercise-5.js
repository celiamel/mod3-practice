/*  DONE
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/


function repetitions(text) {
    let result = '';     // Initializing an empty string
    for (let i = 0; i < text.length; i++) {   // Enters the loop
        let x = text[i];
        result += x.toUpperCase(); //Adds to result the uppercase version of x
        result += x.toLowerCase().repeat(i); // Adds to result the lowercase version of x
    }
    return result;  // Once the loop is done the function returns result
}

console.log(repetitions('code'));        // Result: "COoDddEeee"
console.log(repetitions('list'));       // Result: "LIiSssTttt"
console.log(repetitions('function'));  // Result: "FUuNnnTtttIiiiiOoooooNnnnnnn"


showContent(5, result);
