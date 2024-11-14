const path = require('path')
const express = require('express')
const app = express();
const fs = require('fs');


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/Json', express.static(path.join(__dirname, 'Json')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());


//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

app.get('/info.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'info.html'));
});


const data = require("../Web_estatica/Json/data.json");

//Obtiene todos los datos 
app.get('/api/data', (req, res) => {
    res.send(data);
});

//Registro y login usuario
app.post('/api/register',authentication.register)
app.post('/api/login',authentication.login)

//1. Desde postman agrega una nueva pelicula al json donde se almacenan los datos
app.post('/api/data/movies', (req, res) => {
    const { titulo, fecha_estreno, director, cast, genero, sinopsis, calificacion_general, crew, detalles, poster, reviews } = req.body;

    if (!titulo) { return res.status(400).send(`No se envio el titulo`); }
    if (!fecha_estreno) { return res.status(400).send(`No se envio fecha de estreno`); }
    if (!director) { return res.status(400).send(`No se envio director`); }
    if (!cast) { return res.status(400).send(`No se envio cast`); }
    if (!genero) { return res.status(400).send(`No se envio genero`); }
    if (!sinopsis) { return res.status(400).send(`No se envio sinopsis`); }
    if (!calificacion_general) { return res.status(400).send(`No se envio calificacion general`); }
    if (!crew) { return res.status(400).send(`No se envio crew`); }
    if (!detalles) { return res.status(400).send(`No se envio detalles`); }
    if (!poster) { return res.status(400).send(`No se envio poster`); }
    if (!reviews) { return res.status(400).send(`No se envio reviews`); }

    if (typeof titulo != 'string') { return res.status(400).send(`No se envio el tipo de dato correcto en el titulo`); }
    if (typeof fecha_estreno != 'string') { return res.status(400).send(`No se envio el tipo de dato correcto en fecha de estreno`); }
    if (typeof director != 'string') { return res.status(400).send(`No se envio el tipo de dato correcto en director`); }
    if (typeof cast != 'object') { return res.status(400).send(`No se envio el tipo de dato correcto en cast`); }
    if (typeof genero != 'object') { return res.status(400).send(`No se envio el tipo de dato correcto en genero`); }
    if (typeof sinopsis != 'string') { return res.status(400).send(`No se envio el tipo de dato correcto en sinopsis`); }
    if (typeof calificacion_general != 'number') { return res.status(400).send(`No se envio el tipo de dato correcto en calificacion general`); }
    if (typeof crew != 'object') { return res.status(400).send(`No se envio el tipo de dato correcto en crew`); }
    if (typeof detalles != 'object') { return res.status(400).send(`No se envio el tipo de dato correcto en detalles`); }
    if (typeof poster != 'string') { return res.status(400).send(`No se envio el tipo de dato correcto en poster`); }
    if (typeof reviews != 'object') { return res.status(400).send(`No se envio el tipo de dato correcto en reviews`); }

    let indice = 0;
    indice = data.peliculas.findIndex(pelicula => pelicula.titulo == titulo)
    console.log(indice);
    if (indice >= 0) { return res.status(409).send(`Ya existe la pelicula`); }


    const newMovie = { ...req.body }
    data.peliculas.push(newMovie);
    res.send(newMovie);
    //Al buscar en /api/movies y en /info.html?titulo=${titulo}&tipo=pelicula estara, pero no en home.html
    fs.writeFile("../Web_estatica/Json/data.json", JSON.stringify(data), (err) => {
        if (err) {
            console.error("Error al escribir el archivo JSON:", err);
        } else {
            console.log("Archivo JSON actualizado correctamente.");
        }
    });

});

//Desde info.htm agrega una nueva review al json donde se almacenan los datos
app.post('/pages/info.html', (req, res) => {
    const { usuario, comentario, calificacion, titulo, tipo } = req.body;
    if (usuario && comentario && calificacion && titulo && tipo) {
        const newReview = {
            usuario: usuario,
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
        fs.writeFile("../Web_estatica/Json/data.json", JSON.stringify(data), (err) => {
            if (err) {
                console.error("Error al escribir el archivo JSON:", err);
            } else {
                console.log("Archivo JSON actualizado correctamente.");
            }
        })

    } else {
        res.send('Wrong Request')
    }
});

// 2. Desde postman o google busca una pelicula
app.get('/api/data/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    if (titulo.length === 0) { return res.status(400).send(`No se envio el titulo`); }
    if (typeof titulo != 'string') { return res.status(400).send(`No se envio el tipo de dato correcto en el titulo`); }

    let indice = 0;
    indice = data.peliculas.findIndex(pelicula => pelicula.titulo == titulo)
    if (indice < 0) { return res.status(404).send(`No existe la pelicula ${titulo}`); } else {
        res.json(data.peliculas[indice]);
    }


});

// 3. http://localhost:3000/api/movies?cantidad=10&from=0
app.get('/api/movies', (req, res) => {
    const cantidad = parseInt(req.query.cantidad, 10);
    const from = parseInt(req.query.from, 10);
    let newJson = {
        "peliculas": []
    };

    for (let i = 0; i <= cantidad; i++) {
        let indice = from + i;
        if (data.peliculas[indice]) {
            newJson.peliculas.push(data.peliculas[indice])
        } else {
            console.log(`no existe la pelicula numero ${from + i}`)
        }

    }
    res.send(newJson);
});


//Inicio Servidor

const port = 3000;
app.listen(3000, () => {
    console.log(`El servidor esta en http://localhost:${port}`);
});