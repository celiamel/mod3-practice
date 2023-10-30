/* DONE
EJERCICIO 14:
Muestra un array que solo incluya la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/
//funcion que devuelva todas las peliculas de un actor


function filterByActor(movies, actor) {
    return movies.filter(movies => movies.actor.toLowerCase() === actor.toLowerCase());
}

function highestRating(movies) {
    const resultado = movies.sort((movie1, movie2) => {
        if (movie1.rating < movie2.rating) return -1;
        if (movie1.rating > movies2.rating) return 1;
        return 0;
    });
    return resultado.pop();
}

const result = [];

["Leonardo Dicaprio", "Robert De Niro", "Tom Hanks"].forEach(actor =>{
    const actorMovies = filterByActor(movies,actor);
    const actorHighest = highestRating(actorMovies);
    result.push(actorHighest);
})

showContent(14, result);

