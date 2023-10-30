/* DONE
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/

let dramaMovie = movies.filter(movies => movies.category === 'Drama').map(movie => ({title: movie.title, description: movie.description}));


showContent(12, dramaMovie);
