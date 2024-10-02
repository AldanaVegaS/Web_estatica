import { peliculas, series } from "/datos.js";

const fragment = document.createDocumentFragment();

//Muestra el carrousel de fotos en el home
let listaSeries = document.getElementById('series')
series.forEach((item) => {
    console.log("item en home: "+item.titulo);
    let link = document.createElement('a');
    link.href = `info.html?titulo=${encodeURIComponent(item.titulo)}&tipo=${'serie'}`;

    let img = document.createElement('img');
    img.src = item.poster
    img.alt = "Poster serie";

    link.appendChild(img);

    fragment.appendChild(link);
})
listaSeries.appendChild(fragment);

let listaPeliculas = document.getElementById('peliculas')
peliculas.forEach((item) => {
    let link = document.createElement('a');
    link.href = `info.html?titulo=${encodeURIComponent(item.titulo)}&tipo=${'pelicula'}`;// URL de la página de detalles

    let img = document.createElement('img');
    img.src = item.poster;
    img.alt = "Poster pelicula";

    link.appendChild(img);

    fragment.appendChild(link);
})
listaPeliculas.appendChild(fragment);