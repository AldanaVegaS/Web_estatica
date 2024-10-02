import { peliculas, series, proximamente } from "/datos.js";

//Muestra el carrousel de fotos al inicio/registro
let popular = document.getElementById('series_popular')
const fragment = document.createDocumentFragment();

series.forEach((item) => {
    if(item.popular){
        let img = document.createElement('img');
        img.src = item.poster;
        img.alt = "Poster pelicula";
        fragment.appendChild(img);
    }
})
popular.appendChild(fragment);

let pelicula = document.getElementById('peliculas_popular')
peliculas.forEach((item) => {
    if(item.popular){
        let img = document.createElement('img');
        img.src = item.poster;
        img.alt = "Poster pelicula";
        fragment.appendChild(img);
    }
})
pelicula.appendChild(fragment);

let proximo = document.getElementById('proximamente')
proximamente.forEach((item) => {
    let img = document.createElement('img');
    img.src = item.poster;
    img.alt = "Poster";
    fragment.appendChild(img);
})
proximo.appendChild(fragment);