let datos, upcoming;

fetch('../Json/movies.json').then(res => {
    if (!res.ok) {
        throw new Error('Error in the response when loading the movies');
    }
    return res.json();
})
    .then(data => {
        // access the arrays inside the json
        datos = data.peliculasPopulares;
        upcoming = data.proximamente;

        /*Search for the 'popular' node and locate the images*/
        let popularNode = document.getElementById('popular')
        show(datos, popularNode);

        /*Search for the 'upcoming' node and locate the images*/
        let upcomingNode = document.getElementById('upcoming')
        show(upcoming, upcomingNode);
    })




function show(items, node) {
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
        let img = document.createElement('img');
        img.src = item.poster;
        img.alt = "Poster pelicula";
        fragment.appendChild(img);
    });
    node.appendChild(fragment);
}


