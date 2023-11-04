/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

function sortMoviesRating() {
    const Rating = movies.map((movie) => movie.rating);
    const sortMoviesRating = Rating.sort();
    return sortMoviesRating;
}

showContent(11, sortMoviesRating());