/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
*/


function checkParity(number) {
    if (number % 2 === 0) {
        console.log("Number " + number + " is even");
    } else {
        console.log("Number " + number + " is odd");
    }
}

// Function to test with any number.
checkParity(34); 
checkParity(13); 

showContent(2, checkParity(34), checkParity(13));
