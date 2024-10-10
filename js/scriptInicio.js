let peliculasPopulares, proximamente;
fetch('../Json/peliculas.json').then(res => {
    if (!res.ok) {
        throw new Error('Error en la respuesta al cargar las películas')
    }
    return res.json();
})
    .then(data => {
        // accede a los arreglos dentro del json
        peliculasPopulares = data.peliculasPopulares;
        proximamente = data.proximamente;

        /*Busco nodo de populares y ubico las imagenes*/
        let popular = document.getElementById('popular')
        mostrar(peliculasPopulares, popular);

        /*Busco nodo de proximamentes y ubico las imagenes*/
        let proximo = document.getElementById('proximamente')
        mostrar(proximamente, proximo);
    });

function mostrar(items, nodo, aMostrar) {
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
        let img = document.createElement('img');
        img.src = item.poster;
        img.alt = "Poster pelicula";
        fragment.appendChild(img);
    });
    nodo.appendChild(fragment);
}
