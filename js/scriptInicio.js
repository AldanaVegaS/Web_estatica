let datos, proximamente;

fetch('../Json/peliculasInicio.json').then(res => {
    if (!res.ok) {
        throw new Error('Error en la respuesta al cargar las películas');
    }
    return res.json();
})
.then(data =>{
     // accede a los arreglos dentro del json
     datos = data.datos;
     proximamente = data.datos;

     /*Busco nodo de populares y ubico las imagenes*/
     let popularNodo = document.getElementById('popular')
     mostrar(datos, popularNodo, 'poster');
     console.log(datos);

     /*Busco nodo proximamente y ubico las imagenes*/
     let proximamenteNodo = document.getElementById('proximamente')
     mostrar(proximamente, proximamenteNodo, 'poster');
})



function mostrar(items, nodo, aMostrar) {
    const fragment = document.createDocumentFragment();

    switch (aMostrar) {
        case 'poster':
            items.forEach((item) => {
                let img = document.createElement('img');
                img.src = item.poster;
                console.log(item.poster);
                img.alt = "Poster pelicula";
                fragment.appendChild(img);
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
    nodo.appendChild(fragment);
}


