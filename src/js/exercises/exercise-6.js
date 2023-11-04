/*
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

function getRandom(min, max){   //Generate a random number between min and max
    return Math.floor(Math.random() * 100);
}

const randomArray = [];   //Empty array to hold the random numbers

for (let i = 1; i <= 10; i++){ //Loop runs 10 times generating a random number and add it to the randomArray
    randomArray.push(getRandom(0, 100));
}

let minNumber = Math.min(...randomArray);   // Hold the min numbers in randomArray
let maxNumber = Math.max(...randomArray);   // Hold the max numbers in randomArray

let result = "The array is" + randomArray + "The minimun is" + minNumber + "," + "The maximun is" + maxNumber;

showContent(6, result);


