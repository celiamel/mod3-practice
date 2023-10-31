/* DONE
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

const text = 'Number of vowels is';   //Declares a constant
const array = text.split("");        //Splits the string into an array
function vowelCount() {             //Function is declared
    return array.filter(word => word.match(/[aeiuo]/gi)).length;
    // Returns the count of vowels in the array by using the filter + creates a new array
   //(Test if a character is a vowel.If true,it's included in the new array which contains only vowels
  //Length give us the count of the vowels
}

console.log=("Number of vowels is" + vowelCount());   

showContent(3,"Number of vowels is" + vowelCount);



