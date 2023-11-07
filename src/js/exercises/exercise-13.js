/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
*/


function filterGroupOfCategories() {
    let arrayGroupOfCategories = Object.values(categories);
    let arrayGroupOfCategories = [];
    for (let i = 0; i < groupOfCategories.length; i++) {
        const filterCategories = movies.filter((movie) => movie.category === categoryName);
        arrayGroupOfCategories.push()
    }
    return filterGroupOfCategories;
}

showContent(13, arrayOfGroupOfCategorie);
