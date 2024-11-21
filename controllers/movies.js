const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../Json/data.json'); //Cambiar ruta si es necesario
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));


async function add_movie(req,res){
    const { titulo, fecha_estreno, director, cast, genero, sinopsis, calificacion_general, crew, detalles, poster, reviews } = req.body;

    const newMovie = { ...req.body }
    data.peliculas.push(newMovie);
    res.send(newMovie);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

}

async function find_movie(req,res){
    const titulo = req.params.titulo;
    let indice = -1;
    console.log(titulo)
    indice = data.peliculas.findIndex(pelicula => pelicula.titulo == titulo)
    if (indice < 0) { return res.status(404).send(`No existe la pelicula ${titulo}`); } else {
        res.json(data.peliculas[indice]);
    }
}

async function get_movies_range(req,res){
    const cantidad = parseInt(req.query.cantidad, 10);
    const from = parseInt(req.query.from, 10);
    for (let i = 0; i <= cantidad; i++) {
        let indice = from + i;
        if (data.peliculas[indice]) {
            newJson.peliculas.push(data.peliculas[indice])
        } else {
            console.log(`no existe la pelicula numero ${from + i}`)
        }

    }
    res.json(newJson);
}



module.exports = {add_movie, find_movie, get_movies_range};