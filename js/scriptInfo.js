// Obtener el título de la URL
const params = new URLSearchParams(window.location.search);
const title = params.get('titulo');
const type = params.get('tipo');

fetch('../Json/data.json').then(res => {
    if (!res.ok) {
        throw new Error('Error in the response when loading the movies')
    }
    return res.json();
})
    .then(data => {
        // access the arrays inside the json
        let series = data.series;
        let movies = data.peliculas;

        if (type === 'serie') {
            document.getElementById('title').textContent = 'Serie';
            const selectedSerie = series.find(item => item.titulo === title);

            showSerie(selectedSerie);
        } else {
            document.getElementById('title').textContent = 'Pelicula'
            const selectedMovie = movies.find(item => item.titulo === title);

            showMovie(selectedMovie);
        }
    });


function showSerie(selectedSerie) {
    document.getElementById('poster').src = selectedSerie.poster;
    calificacionGeneral(selectedSerie.reviews, document.getElementById('calificacion'));
    document.getElementById('titleTab').textContent = selectedSerie.titulo;
    document.getElementById('title').textContent = selectedSerie.titulo;
    document.getElementById('year_director').textContent = selectedSerie.fecha_estreno + ", creada por " + selectedSerie.creador;
    document.getElementById('genre').textContent = selectedSerie.genero.join(', ');
    document.getElementById('sinopsis').textContent = selectedSerie.sinopsis;
    listarCast(selectedSerie.cast, document.getElementById('cast'));
    listarCrew(selectedSerie.crew, document.getElementById('crew'));
    listarDetallesSeries(selectedSerie.detalles, document.getElementById('details'));
    mostrarReviews(selectedSerie.reviews, document.getElementById('commentsBox'));
    mostrarCardReview(selectedSerie);
}



function showMovie(selectedMovie) {
    document.getElementById('poster').src = selectedMovie.poster;

    calificacionGeneral(selectedMovie.reviews, document.getElementById('calificacion'));
    document.getElementById('titleTab').textContent = selectedMovie.titulo;
    document.getElementById('title').textContent = selectedMovie.titulo;
    document.getElementById('year_director').textContent = selectedMovie.fecha_estreno + ", dirigida por " + selectedMovie.director;
    document.getElementById('genre').textContent = selectedMovie.genero.join(', ');
    document.getElementById('sinopsis').textContent = selectedMovie.sinopsis;
    listarCast(selectedMovie.cast, document.getElementById('cast'));
    listarCrew(selectedMovie.crew, document.getElementById('crew'));
    listarDetalles(selectedMovie.detalles, document.getElementById('details'));

    mostrarReviews(selectedMovie.reviews, document.getElementById('commentsBox'));
    mostrarCardReview(selectedMovie);
}

function calificacionGeneral(reviews, elto) {
    let calificacionTotal = 0;
    let cantidad = 0;
    reviews.forEach((item) => {
        calificacionTotal = calificacionTotal + item.calificacion;
        cantidad = cantidad + 1;
    })
    if (cantidad > 0) { calificacionTotal = calificacionTotal / cantidad }
    elto.textContent = "Calificación: " + calificacionTotal;
    const iconoEstrella = document.createElement('i');
    iconoEstrella.className = 'fa fa-star'; // Agregar las clases necesarias para el icono
    iconoEstrella.setAttribute('aria-hidden', 'true');
    elto.appendChild(iconoEstrella);
}

function listarCast(cast, castList) {
    cast.forEach(actor => {
        const listItem = document.createElement('li');
        listItem.textContent = actor; // Agrega el nombre del actor
        castList.appendChild(listItem); // Agrega el item a la lista
    });
}

function listarCrew(crew, crewList) {
    const listItem = document.createElement('li');
    listItem.textContent = "Productores: " + crew.productores;
    crewList.appendChild(listItem);
    const listItem2 = document.createElement('li');
    listItem2.textContent = "Guionistas: " + crew.guionistas;
    crewList.appendChild(listItem2);
    const listItem3 = document.createElement('li');
    listItem3.textContent = "Dirección de fotografía: " + crew.direccion_de_fotografia;
    crewList.appendChild(listItem3);
}
function listarDetalles(detalles, detallesList) {
    const listItem = document.createElement('li');
    listItem.textContent = "Duración: " + detalles.duracion;
    detallesList.appendChild(listItem);
    const listItem2 = document.createElement('li');
    listItem2.textContent = "Clasificación: " + detalles.clasificacion;
    detallesList.appendChild(listItem2);
}
function listarDetallesSeries(detalles, detallesList) {
    listarDetalles(detalles, detallesList);
    const listItem = document.createElement('li');
    listItem.textContent = "Temporadas: " + detalles.temporadas;
    detallesList.appendChild(listItem);
    const listItem2 = document.createElement('li');
    listItem2.textContent = "Capitulos: " + detalles.capitulos;
    detallesList.appendChild(listItem2);
}

function mostrarReviews(reviews, elto) {
    const ul = document.createElement('ul');
    ul.style.listStyle = "none";
    reviews.forEach(item => {
        console.log(item);
        const li = document.createElement('li');
        const caja = document.createElement('div');
        caja.className = "box";
        caja.id = "commentsBox";


        const user = document.createElement('div');
        user.className = "user";

        const userImg = document.createElement('i');
        userImg.className = "material-icons-outlined";
        userImg.textContent = "account_circle";

        const userInfo = document.createElement('div');
        userInfo.className = "user-info";

        const userName = document.createElement('h3');
        userName.textContent = item.usuario;

        const calificacion = document.createElement('div');
        calificacion.className = "stars";
        const estrellas = document.createElement('h4');
        estrellas.textContent = "Calificación: " + item.calificacion;
        const iconoEstrella = document.createElement('i');
        iconoEstrella.className = 'fa fa-star'; // Agregar las clases necesarias para el icono
        iconoEstrella.setAttribute('aria-hidden', 'true');
        calificacion.appendChild(estrellas);
        calificacion.appendChild(iconoEstrella);

        const fecha = document.createElement('h5');
        fecha.textContent = "30/09/2024";

        const comentario = document.createElement('div');
        comentario.className = "comentario";
        comentario.textContent = item.comentario;

        userInfo.appendChild(userName);
        userInfo.appendChild(calificacion);

        user.appendChild(userImg);
        user.appendChild(userInfo);

        caja.appendChild(user);
        caja.appendChild(fecha);
        caja.appendChild(comentario);


        li.appendChild(caja);
        ul.appendChild(li);
    });


    const li = document.createElement('li');
    const boton = document.createElement('button');
    boton.className = "ver_mas";
    boton.textContent = "Ver más";
    li.appendChild(boton);
    ul.appendChild(li);

    elto.appendChild(ul);
}


function mostrarCardReview(seleccion) {
    //Card para agregar review
    const popup = document.getElementById("popup_card");
    const popup_contenido = document.createElement('div');
    popup_contenido.className = "contenido_card";

    const cerrarIcono = document.createElement('i');
    cerrarIcono.className = "fa-solid fa-x";
    cerrarIcono.id = "cerrar_popup";

    const contenedor1 = document.createElement('div');
    contenedor1.className = "contenedor1";

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const img = document.createElement('img');
    img.src = seleccion.poster;

    contenedor1.appendChild(h2);
    contenedor1.appendChild(img);


    const contenedor2 = document.createElement('div');
    contenedor2.className = "contenedor2";

    const input = document.createElement('input');
    input.className = "comentario";

    const boton = document.createElement('button');
    boton.className = "guardar";
    boton.id = 'guardar';
    boton.textContent = "Guardar";
    boton.onclick = 'guardar()';

    const rating = document.createElement('div');
    rating.className = "rating";
    for (let i = 0; i < 5; i++) {
        const estrella = document.createElement('i');
        estrella.className = "fa-regular fa-star";
        rating.appendChild(estrella);
    }

    contenedor2.appendChild(rating);
    contenedor2.appendChild(input);
    contenedor2.appendChild(boton);

    popup_contenido.appendChild(cerrarIcono);
    popup_contenido.appendChild(contenedor1);
    popup_contenido.appendChild(contenedor2);


    popup.appendChild(popup_contenido);

    document.body.appendChild(popup);

    let rankingActual = 0;
    const stars = document.querySelectorAll(".rating i");
    console.log(stars);
    stars.forEach((star, i) => {
        star.addEventListener("click", () => {
            stars.forEach((star, j) => {
                if (j <= i) {
                    rankingActual = i + 1;
                    star.style.color = "#F26680";
                } else {
                    star.style.color = "black";
                }
            })
        })
    })


    document.getElementById('guardar').addEventListener('click', function () {
        console.log("Apreto guardar");
        document.getElementById('popup_card').style.display = 'none';
        publicarComentario()
    });


    async function publicarComentario() {
        if (input.value == "") { return }
        fetch('http://localhost:3000/api/reviews',
            {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    usuario: "default",
                    comentario: input.value,
                    calificacion: rankingActual,
                    titulo: title,
                    tipo: type
                })
            }
        ).then(console.log("exito"));
    }


    document.getElementById('cerrar_popup').addEventListener('click', function () {
        console.log("Apreto cerrar");
        document.getElementById('popup_card').style.display = 'none';
    });
}

document.getElementById('add_review').onclick = function () {
    document.getElementById('popup_card').style.display = 'flex';
    console.log("Apreto boton para agregar review");
}




