/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

 const alphabet = "abcdefghijklmnopqrstuvwxyz";
 
 function alphabetPositionInArray(text){

 text1 = transformText(text);      // Format the text
text2 = removeAccents(text1);   // Remove accents

 let arrText = text2.split("");
 let arrAlphabet = alphabet.split("");
 let arrResult = [];

arrText.forEach(char => arrResult.push(arrAlphabet.indexOf(char)));  // What position is in the alphabet and add it in the array
return arrResult;
}

showContent(8, alphabetPositionInArray("Dábale arroz a la zorra el abad"));