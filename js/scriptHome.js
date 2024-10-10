import { peliculasPopulares, romance, terror, accion, animacion, recomendados } from "./peliculas.js";
// import { seriesPopulares } from "./series.js"

let series;
fetch('http://127.0.0.1:5500/js/series.json')
    .then((response)=>response.json())
    .then((data)=>{console.log(data);
        let popularNodo2 = document.getElementById('series_popular');
        mostrar(series, popularNodo2, 'poster');})
    .catch((error)=> console.log("ERROR", error))

// if(response.ok){
//     console.log(response.json);
// }else{
//     console.log(response.status);
// }


function mostrar(items, nodo, aMostrar) {
    const fragment = document.createDocumentFragment();
    switch (aMostrar) {
        case 'poster':
            items.forEach((item) => {
                let link = document.createElement('a');
                link.href = `../pages/info.html?titulo=${item.titulo}&tipo=${item.tipo}`; // URL de la página de detalles

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


/*Busco nodo de populares y ubico las imagenes*/
let popularNodo = document.getElementById('peliculas_popular')
console.log(popularNodo);
mostrar(peliculasPopulares, popularNodo, 'poster');

// let popularNodo2 = document.getElementById('series_popular')
// console.log(popularNodo);
// mostrar(series, popularNodo2, 'poster');

/*Busco nodo de recomendadas y ubico las imagenes*/
let recomendadoNodo = document.getElementById('recomendado')
mostrar(recomendados, recomendadoNodo, 'poster');

/*Busco nodo de accion y ubico las imagenes*/
let accionNodo = document.getElementById('accion')
mostrar(accion, accionNodo, 'poster');

/*Busco nodo de terror y ubico las imagenes*/
let terrorNodo = document.getElementById('terror')
mostrar(terror, terrorNodo, 'poster');

/*Busco nodo de animacion y ubico las imagenes*/
let animacionNodo = document.getElementById('animacion')
mostrar(animacion, animacionNodo, 'poster');

/*Busco nodo de romance y ubico las imagenes*/
let romanceNodo = document.getElementById('romance')
mostrar(romance, romanceNodo, 'poster');



