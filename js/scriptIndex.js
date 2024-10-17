let datos, upcoming;

fetch('../Json/peliculasInicio.json').then(res => {
    if (!res.ok) {
        throw new Error('Error in the response when loading the movies');
    }
    return res.json();
})
.then(data =>{
     // access the arrays inside the json
     datos = data.datos;
     upcoming = data.datos;

     /*Search for the 'popular' node and locate the images*/
     let popularNode = document.getElementById('popular')
     show(datos, popularNode, 'poster');

     /*Search for the 'upcoming' node and locate the images*/
     let upcomingNode = document.getElementById('upcoming')
     show(upcoming, upcomingNode, 'poster');
})



function show(items, node, toShow) {
    const fragment = document.createDocumentFragment();

    switch (toShow) {
        case 'poster':
            items.forEach((item) => {
                let img = document.createElement('img');
                img.src = item.poster;
                img.alt = "Poster pelicula";
                fragment.appendChild(img);
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


