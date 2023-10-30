/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

function letterCounting(text) {
    text = text.toLowerCase();                 // Convert to lowercase
    let counter = {};                         // Initialize an empty object
    for (let i = 0; i < text.length; i++) {  // Loop through the string
        if (text >= 'a' && text <= 'z') {
            counter[text] = (counter[text])
        }
    }
}
return counter;

showContent(19, counter);
