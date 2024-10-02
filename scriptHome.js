import {datos,romance,terror,accion,animacion} from "./peliculas.js";


function mostrar(items, nodo, aMostrar) {
    const fragment = document.createDocumentFragment();
    switch (aMostrar) {
        case 'poster':
            items.forEach((item) => {         
                console.log(item.titulo);   
                let link = document.createElement('a');
                link.href = `info.html?titulo=${item.titulo}&tipo=${"pelicula"}`; // URL de la página de detalles
            
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
let popularNodo = document.getElementById('popular')
console.log(popularNodo);
mostrar(datos, popularNodo, 'poster');



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



//Para controlar el movimiento de las flechas
const carrusel = document.getElementById('popular');
const flechaDerecha = document.getElementById('derecha')
const flechaIzquierda = document.getElementById('izquierda')



flechaDerecha.addEventListener("click", () => {
    console.log(flechaDerecha.id);
    carrusel.style.transform = 'translateX(+30px)';
    carrusel.style.justifyContent = 'flex-end';
})

flechaIzquierda.addEventListener("click", () => {
    console.log(flechaIzquierda.id);
    carrusel.scrollLeft;
    carrusel.style.justifyContent = 'flex-start';



})
