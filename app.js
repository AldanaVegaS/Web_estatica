const path = require('path')
const express = require('express')
const app = express()
const authentication = require('./controllers/authentication.js')

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


app.get('/pages/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});


app.get('/pages/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});


app.get('/pages/info.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'info.html'));
});

app.get('/pages/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});


const data = require("../Web_estatica/Json/data.json");
app.get('/api/data', (req, res) => {
    res.send(data);
});

//Registro y login usuario
app.post('/api/register',authentication.register)
app.post('/api/login',authentication.login)

//Se prueba desde postman
app.post('/api/data', (req, res) => {
    const { titulo, director, fecha_estreno, calificacion_general } = req.body;
    if (titulo && director) {
        const newMovie = { ...req.body }
        data.peliculas.push(newMovie);
        res.json(data);
    } else {
        res.send('Wrong Request')
    }
});

//Funcionamiento de reviews
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
    } else {
        res.send('Wrong Request')
    }
});

// http://localhost:3000/api/movies?cantidad=10&from=0
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
