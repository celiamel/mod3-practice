/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

function isIsogram(str) {
    str = str.toLowerCase();     // Convert the string in lowercase
    let letters = {};           // Create an empty object - It keeps each letter of the string


    for (let i = 0; i < str.length; i++) {  // Loop(Initialization - variable i with value 0; Condition - Loop will continue if it's true. Loop will continue as long as i is less than the lehgth of the string; Increment by 1  )
        let letter = str[i];
        if (letters[letter]) {     // Check if letras already exists as a property in letras
            return `La cadena '${str}' no es un isograma.`;

        } else {
            letters[letter] = true;   // If letra doesn't exist->add new property and set its value to 1
        }
    }
    return `La cadena '${str}' es un isograma.`;
}

console.log(isIsograma("hola mundo"));

showContent(17, isIsograma("hola mundo"));
