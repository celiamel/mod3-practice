/* DONE
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

const text = 'Hi, I am learning Javascript';
const noVowels = text.replace(/[aeiou]/gi, '');  //Replace vowels
console.log(noVowels); // Result: “H, m lrnng Jvscrpt”

showContent(4, noVowels);

