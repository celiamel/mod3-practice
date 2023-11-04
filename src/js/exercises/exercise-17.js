/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

function isIsogram(text) {
    text = text.toLowerCase();     // Convert the string in lowercase
    let letters = {};           // Create an empty object - It keeps each letter of the string


    for (let i = 0; i < str.length; i++) {  // Loop(Initialization - variable i with value 0; Condition - Loop will continue if it's true. Loop will continue as long as i is less than the lehgth of the string; Increment by 1  )
        let letter = text[i];
        if (letters[letter]) {     // Check if letra already exists as a property in letras
            return `La cadena '${text}' no es un isograma.`;

        } else {
            letters[letter] = true;   // If letra doesn't exist->add new property and set its value to 1
        }
    }
    return `La cadena '${text}' es un isograma.`;
}

console.log(isIsograma("hola mundo"));

showContent(17, isIsograma("hola mundo"));
