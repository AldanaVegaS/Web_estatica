let seriesPopulares,peliculasPopulares, romance, terror, accion, animacion, recomendados;

fetch('../Json/peliculas.json').then(res => {
    if (!res.ok) {
        throw new Error('Error en la respuesta al cargar las películas');
    }
    return res.json();
})
    .then(data => {
        // accede a los arreglos dentro del json
        peliculasPopulares = data.peliculasPopulares;
        romance = data.romance;
        terror = data.terror;
        accion = data.accion;
        animacion = data.animacion;
        recomendados = data.recomendados;

        /*Busco nodo de populares y ubico las imagenes*/
        let popularNodo = document.getElementById('peliculas_popular')
        mostrar(peliculasPopulares, popularNodo, 'poster');

        /*Busco nodo de recomendadas y ubico las imagenes*/
        let recomendadoNodo = document.getElementById('recomendado')
        mostrar(recomendados, recomendadoNodo, 'poster');

        /*Busco nodo de accion y ubico las imagenes*/
        let accionNodo = document.getElementById('accion')
        mostrar(accion, accionNodo, 'poster');

        /*Busco nodo de accion y ubico las imagenes*/
        let terrorNodo = document.getElementById('terror')
        mostrar(terror, terrorNodo, 'poster');

        /*Busco nodo de terror y ubico las imagenes*/
        let animacionNodo = document.getElementById('animacion')
        mostrar(animacion, animacionNodo, 'poster');

        /*Busco nodo de terror y ubico las imagenes*/
        let romanceNodo = document.getElementById('romance')
        mostrar(romance, romanceNodo, 'poster');
    });

fetch('../Json/series.json').then(res => {
    if (!res.ok) {
        throw new Error('Error en la respuesta al cargar las series')
    }
    return res.json();
})
    .then(data => {
        seriesPopulares = data.seriesPopulares;

        let popularNodo2 = document.getElementById('series_popular')
        mostrar(seriesPopulares, popularNodo2, 'poster');
    });

function mostrar(items, nodo, aMostrar) {
    const fragment = document.createDocumentFragment();
    switch (aMostrar) {
        case 'poster':
            items.forEach((item) => {
                let link = document.createElement('a');
                link.href = `info.html?titulo=${item.titulo}&tipo=${item.tipo}`; // URL de la página de detalles

                let img = document.createElement('img');
                img.src = item.poster;
                img.alt = "Poster pelicula";

                link.appendChild(img);
                fragment.appendChild(link);
            });
            break;
        case 'descripcion':
            items.forEach((item) => {
                let p = document.createElement('p');
                p.innerHTML = item.sinopsis;
                fragment.appendChild(p);
            });
            break;
    }

    console.log(fragment);
    nodo.appendChild(fragment);
}
