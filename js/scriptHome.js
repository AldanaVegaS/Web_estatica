let popularSeries, popularMovies, romance, horror, action, animation, recommended;


createEstructure("Peliculas Populares", "popular_movies")
createEstructure("Peliculas que recomendamos", "recommended")
createEstructure("Cine de accion", "action")
createEstructure("Cine de terror", "horror")
createEstructure("Cine de Animacion", "animation")
createEstructure("Cine de romance", "romance")
createEstructure("Series Populares", "popular_series")


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


function createEstructure(itemsName, itemsClassName) {
    let node = document.getElementById('main');
    const fragment = document.createDocumentFragment();

    let section = document.createElement('section');

    let h1 = document.createElement('h1');
    h1.textContent = itemsName;

    let divWrapper = document.createElement('div');
    divWrapper.className = "wrapper";

    let buttonLeft = document.createElement('button');
    buttonLeft.className = "material-icons-outlined left";
    buttonLeft.textContent = 'chevron_left';

    let divBorder = document.createElement('div');
    divBorder.className = "border";

    let figure = document.createElement('figure');
    figure.className = "container";
    figure.id = itemsClassName;


    let buttonRight = document.createElement('button');
    buttonRight.className = "material-icons-outlined right";
    buttonRight.textContent = 'chevron_right';

    divBorder.appendChild(figure);

    divWrapper.appendChild(divBorder);
    divWrapper.appendChild(buttonLeft);
    divWrapper.appendChild(buttonRight);

    section.appendChild(h1);
    section.appendChild(divWrapper);

    fragment.appendChild(section);
    node.appendChild(fragment);

    buttonRight.onclick = function () {
        slideImages(itemsClassName, 'right')
    }
    buttonLeft.onclick = function () {
        slideImages(itemsClassName, 'left')
    }

}

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

    node.appendChild(fragment);
}

let currentIndex = 0;
function slideImages(nodo, direction) {
    console.log(direction)
    const carousel = document.getElementById(nodo);
    let maxMovement = carousel.childElementCount * 185; //item count * (width+gap)
    console.log(currentIndex)
    console.log(maxMovement)
    switch (direction) {
        case 'right':
            if (currentIndex + 185 < maxMovement && currentIndex + 185 * 6 < maxMovement) {
                currentIndex += 185;

            }
            break;
        case 'left':
            if (currentIndex > 0) {
                currentIndex -= 185;
            }
            break;

    }
    carousel.style.transform = `translateX(-${currentIndex}px)`;
}

