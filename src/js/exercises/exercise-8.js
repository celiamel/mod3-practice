/* DONE
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

let text = "Dábale arroz a la zorra el abad";
const alphabet = "abcdefghijklmnopqrstuvwxyz";

text = formatText(text);      // Format the text
text = removeAccents(text);   // Remove accents

let arrText = text.split("");
let arrAlphabet = alphabet.split("");
let arrResult = [];

arrText.forEach(char => arrResult.push(arrAlphabet.indexOf(char)))  // What position is in the alphabet and add it in the array
console.log(arrResult);

showContent(8, arrResult);
