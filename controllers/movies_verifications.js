const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../Json/data.json'); //Cambiar ruta si es necesario
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

function null_data(req,res){
    //Verificacion de datos nulos
    const { titulo, fecha_estreno, director, cast, genero, sinopsis, calificacion_general, crew, detalles, poster, reviews } = req.body;

    if (!titulo) { return { ok: false, message: 'No se envio el titulo' }; }
    if (!fecha_estreno) { return { ok: false, message: 'No se envio la fecha de estreno' }; }
    if (!director) { return { ok: false, message: 'No se envio el director' }; }
    if (!cast) { return { ok: false, message: 'No se envio el cast' }; }
    if (!genero) { return { ok: false, message: 'No se envio el genero' }; }
    if (!sinopsis) { return { ok: false, message: 'No se envio la sinopsis' }; }
    if (calificacion_general < 0) { return { ok: false, message: 'No se envio la calificación general' }; }
    if (!crew) { return { ok: false, message: 'No se envio el crew' }; }
    if (!detalles) { return { ok: false, message: 'No se enviaron los detalles' }; }
    if (!poster) { return { ok: false, message: 'No se envio el poster' }; }
    if (!reviews) { return { ok: false, message: 'No se enviaron reviews' };  }

    return { ok: true, message: 'Datos correctos (no nulos)' };
}

function data_type(req,res){
    //Verificacion de tipo de datos
    const { titulo, fecha_estreno, director, cast, genero, sinopsis, calificacion_general, crew, detalles, poster, reviews } = req.body;
    if (typeof titulo != 'string') { return { ok: false, message: 'No se envio el tipo de dato correcto en titulo' }; }
    if (typeof fecha_estreno != 'string') { return { ok: false, message: 'No se envio el tipo de dato correcto en fecha de estreno' }; }
    if (typeof director != 'string') { return { ok: false, message: 'No se envio el tipo de dato correcto en director' }; }
    if (typeof cast != 'object') { return { ok: false, message: 'No se envio el tipo de dato correcto en cast' }; }
    if (typeof genero != 'object') { return { ok: false, message: 'No se envio el tipo de dato correcto en genero' }; }
    if (typeof sinopsis != 'string') { return { ok: false, message: 'No se envio el tipo de dato correcto en sinopsis' }; }
    if (typeof calificacion_general != 'number') { return { ok: false, message: 'No se envio el tipo de dato correcto en calificaion general' }; }
    if (typeof crew != 'object') { return { ok: false, message: 'No se envio el tipo de dato correcto en crew' }; }
    if (typeof detalles != 'object') { return { ok: false, message: 'No se envio el tipo de dato correcto en detalles' }; }
    if (typeof poster != 'string') { return { ok: false, message: 'No se envio el tipo de dato correcto en poster' }; }
    if (typeof reviews != 'object') { return { ok: false, message: 'No se envio el tipo de dato correcto en reviews' }; }

    return { ok: true, message: 'Datos correctos (tipo)' };
}

async function movie_repeated(req,res){
    //Verificacion de tipo de datos
    const { titulo, fecha_estreno, director, cast, genero, sinopsis, calificacion_general, crew, detalles, poster, reviews } = req.body;
    let indice = 0;
    indice = data.peliculas.findIndex(pelicula => pelicula.titulo == titulo)
    //console.log(indice);
    if (indice >= 0) { return { ok: false, message: 'Ya existe la pelicula' } }

    return { ok: true, message: 'Datos correctos' };
}

module.exports = {null_data, data_type, movie_repeated};