const path = require('path')
const express = require('express')
const app = express();
const fs = require('fs');
const authentication = require('./controllers/authentication.js');
const movies = require('./controllers/movies.js');
const moviesVerifications = require('./controllers/movies_verifications.js');
const reviews = require('./controllers/reviews.js');

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

const filePath = path.join(__dirname, '../Web_estatica/Json/data.json'); //Cambiar ruta si es necesario
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));


//Registro y login usuario
app.post('/api/register', authentication.register)
app.post('/api/login', authentication.login)

//1. Desde postman agrega una nueva pelicula al json donde se almacenan los datos  
app.post('/api/movies', (req, res) => {
    //const { titulo, fecha_estreno, director, cast, genero, sinopsis, calificacion_general, crew, detalles, poster, reviews } = req.body;
    if (!req.body) {
        return res.status(400).json({ error: 'No se recibieron datos' });
    }

    const checkNull = moviesVerifications.null_data(req, res)
    if (checkNull.ok) {
        const checkTypes = moviesVerifications.data_type(req, res)
        if (checkTypes.ok) {
            const checkRepeated = moviesVerifications.movie_repeated(req, res)
            if (!checkRepeated.ok) {
                movies.add_movie(req, res)
            } else {
                return res.status(400).json({ error: 'Los datos no son correctos' });
            }
        } else {
            return res.status(400).json({ error: 'Los datos no son correctos' });
        }
    } else {
        return res.status(400).json({ error: 'Los datos no son correctos' });
    }
});

//Desde info.htm agrega una nueva review al json donde se almacenan los datos =>api/reviews
app.post('/api/reviews', (req, res) => {
    const { usuario, comentario, calificacion, fecha, titulo, tipo } = req.body;
    if (usuario && comentario && calificacion && fecha && titulo && tipo) {
        reviews.add_review(req, res)
    } else {
        res.status(400).send("no se enviaron los datos suficientes")
    }
});


// 2. Desde postman o google busca una pelicula 
app.get('/api/movies/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    console.log(titulo)
    if (titulo.length === 0) { return res.status(400).send(`No se envio el titulo`); }
    if (typeof titulo != 'string') { return res.status(400).send(`No se envio el tipo de dato correcto en el titulo`); }

    movies.find_movie(req, res)
});

// 3. http://localhost:3000/api/movies?cantidad=10&from=0
app.get('/api/movies', (req, res) => {
    const cantidad = parseInt(req.query.cantidad, 10);
    const from = parseInt(req.query.from, 10);

    if (!cantidad && !from) { return res.json(data.peliculas) }

    movies.get_movies_range(req, res)
});



//Inicio Servidor

const port = 3030;
app.listen(3030, () => {
    console.log(`El servidor esta en http://localhost:${port}`);
});