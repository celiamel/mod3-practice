/* DONE
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

movies.sort((a, b) => b.rating - a.rating);

console.log(movies)

showContent(11,movies);
