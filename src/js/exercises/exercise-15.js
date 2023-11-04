/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

function addBoxes(numBoxes){
    let container = document.createElement("div");
    container.className = "container"

    for (let i = 0; i < numBoxes; i++) {
        const box = document.createElement("div");
        box.className = 'box';

        if (i % 3 === 0){
            box.className += 'blue';
        } else if (i % 3 === 1) {
            box.className += 'green';
        } else {
            box.className += 'red';
        }
        container.sppendChild(box);
    }
    document.body.appendChild(container);
}

showContent(15, addBoxes);
