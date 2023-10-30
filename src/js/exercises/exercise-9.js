/* DONE
EJERCICIO 9:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

function getRandom() {        //Generate random numbers
    const numRand = Math.random() * max;
    return Math.floor(numRand);
}

function randomArray(numberOfItems, max) { // Get the array with 10 random numbers
    const randomArray = [];
    
    for (let i = 1; i <= 10; i++) {
        randomArray.push(getRandom(max));
    }

    return randomArray;
}

function findMinMaxInArray(array) {    //Find min & max
    let min;
    let max;

    array.forEach(randomNum => {
        if (min === undefined) {
            min = randomNum;
            max = randomNum;
        } else if (randomNum < min) {
            min = randomNum;
        } else if (randomNum > max) {
            max = randomNum;

        }
    });

    return [min,max]
}

const randArr = randomArray(10, 100);

console.log(randomArray);
console.log(findMinMaxInArray(randomArray));

showContent(9, randomArray, findMinMaxInArray);