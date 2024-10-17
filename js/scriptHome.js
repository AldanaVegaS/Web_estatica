let popularSeries, popularMovies, romance, horror, action, animation, recommended;

fetch('../Json/movies.json').then(res => {
    if (!res.ok) {
        throw new Error('Error in the response when loading the movies');
    }
    return res.json();
})
    .then(data => {
        // access the arrays inside the json
        popularMovies = data.peliculasPopulares;
        romance = data.romance;
        horror = data.terror;
        action = data.accion;
        animation = data.animacion;
        recommended = data.recomendados;

        /*Search for the 'popular' node and locate the images*/
        let popularNode = document.getElementById('popular_movies')
        console.log(popularNode);
        show(popularMovies, popularNode, 'poster');


        /*Search for the 'recommended' node and locate the images*/
        let recommendedNode = document.getElementById('recommended')
        show(recommended, recommendedNode, 'poster');

        /*Search for the 'action' node and locate the images*/
        let actionNode = document.getElementById('action')
        show(action, actionNode, 'poster');

        /*Search for the 'horror' node and locate the images*/
        let horrorNode = document.getElementById('horror')
        show(horror, horrorNode, 'poster');

        /*Search for the 'animation' node and locate the images*/
        let animationNode = document.getElementById('animation')
        show(animation, animationNode, 'poster');

        /*Search for the 'romance' node and locate the images*/
        let romanceNode = document.getElementById('romance')
        show(romance, romanceNode, 'poster');
    });

fetch('../Json/series.json').then(res => {
    if (!res.ok) {
        throw new Error('Error in the response when loading the series')
    }
    return res.json();
})
    .then(data => {
        popularSeries = data.seriesPopulares;

        let popularSeriesNode = document.getElementById('popular_series')
        show(popularSeries, popularSeriesNode, 'poster');
    });

function show(items, node, toShow) {
    const fragment = document.createDocumentFragment();
    switch (toShow) {
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
        case 'description':
            items.forEach((item) => {
                let p = document.createElement('p');
                p.innerHTML = item.sinopsis;
                fragment.appendChild(p);
            });
            break;
    }

    console.log(fragment);
    node.appendChild(fragment);
}
