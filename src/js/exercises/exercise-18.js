/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/

function transformToHashtag(string) {
    string = string.trim();
    let words = string.split("");
    let hashtag = "";
    for (let word of words) {
        let firstWord = word.charAt(0).toUpperCase();
        let restOfTheWords
    }
    return hashtag;
}

showContent(18, transformToHashtag);
