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

function isAPalindromo(){
    let text = "Dábale arroz a la zorra el abad";
    text = transformText(text);
    text = replaceText(text);
    let text1 = text;
    text1 = reverseText(text);    
    if (text === text1){    
        return (`Es un palindromo`);        
    } else {
        return(`No es un palindromo`);    
    }
    }
    showContent(7, isAPalindromo());