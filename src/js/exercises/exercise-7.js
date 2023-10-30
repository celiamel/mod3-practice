/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/

function formatText(text) {
    return text = text.toLowerCase().replaceAll(" ", "")   // Convert to lowercase + Remove spaces
}

function isPalindrome(text) {
   let text = text.split('').reverse().join('');

}

showContent(7, isPalindrome);
