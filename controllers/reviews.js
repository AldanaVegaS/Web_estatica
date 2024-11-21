const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../Json/data.json'); //Cambiar ruta si es necesario
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));


async function add_review(req, res) {
    const { usuario, comentario, calificacion, fecha, titulo, tipo } = req.body;
    const newReview = {
        usuario: usuario,
        fecha: fecha,
        comentario: comentario,
        calificacion: calificacion
    }
    console.log(newReview);
    let indice = 0;
    if (tipo == "pelicula") {
        indice = data.peliculas.findIndex(pelicula => pelicula.titulo == titulo)
        if (indice >= 0) {
            data.peliculas[indice].reviews.push(newReview);
            res.send(data.peliculas[indice])
        }
    } else {
        indice = data.series.findIndex(series => series.titulo == titulo);
        if (indice >= 0) {
            data.series[indice].reviews.push(newReview);
            res.send(data.series[indice])
        }
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

}



module.exports = { add_review };