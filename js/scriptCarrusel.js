let recomendados;
let currentIndex = 0;
let totalImages = 0;

fetch('../Json/movies.json').then(res => {
    if (!res.ok) {
        throw new Error('Error en la respuesta al cargar las películas')
    }
    return res.json();
})
    .then(data => {
        // accede a los arreglos dentro del json
        recomendados = data.recomendados;
        totalImages = recomendados.length;

        /*Busco nodo de recomendadas y ubico las imagenes*/
        let recomendadoNodo = document.getElementById('images')
        addItem(recomendados, recomendadoNodo, 'poster');
    });

function addItem(items, nodo, aMostrar) {
    const carouselContainer = document.querySelector('.carousel-images');

    items.forEach((item, index) => {
        let link = document.createElement('a');
        link.href = `info.html?titulo=${item.titulo}&tipo=${item.tipo}`; // URL de la página de detalles

        let img = document.createElement('img');
        img.src = item.poster;
        img.alt = "Poster pelicula";

        if (index === 0) {
            img.classList.add('active');
        }

        link.appendChild(img);
        carouselContainer.appendChild(link);
    });

}

function showImage(index) {
    const imgElements = document.querySelectorAll('.carousel-images img');
    imgElements.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function changeItem(sentido) {

    if (sentido == "prev") {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        showImage(currentIndex);
    } else {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }

}