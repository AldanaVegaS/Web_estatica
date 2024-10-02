const datos = [
    {
        "titulo": "Inception",
        "fecha_estreno": "2010-07-16",
        "director": "Christopher Nolan",
        "actores_principales": [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt",
            "Elliot Page"
        ],
        "genero": [
            "Ciencia ficción",
            "Acción"
        ],
        "sinopsis": "Un ladrón que roba secretos corporativos a través de los sueños es ofrecido la oportunidad de borrar su pasado a cambio de implantar una idea en la mente de un CEO.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Emma Thomas",
            "guionista": "Christopher Nolan",
            "director_fotografia": "Wally Pfister"
        },
        "detalles": {
            "duracion": "148 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        "reviews": [
            {
                "usuario": "dreamer123",
                "contenido": "Una película que te hace cuestionar la realidad. Increíble.",
                "calificacion": 5
            },
            {
                "usuario": "filmlover88",
                "contenido": "La narrativa es un rompecabezas que me mantuvo al borde del asiento.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "The Godfather",
        "fecha_estreno": "1972-03-24",
        "director": "Francis Ford Coppola",
        "actores_principales": [
            "Marlon Brando",
            "Al Pacino",
            "James Caan"
        ],
        "genero": [
            "Crimen",
            "Drama"
        ],
        "sinopsis": "La historia de la familia mafiosa Corleone y su lucha por mantener el control en el mundo del crimen organizado en América.",
        "calificacion_general": 5.0,
        "crew": {
            "productor": "Albert S. Ruddy",
            "guionista": "Mario Puzo, Francis Ford Coppola",
            "director_fotografia": "Gordon Willis"
        },
        "detalles": {
            "duracion": "175 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "mafiaboy",
                "contenido": "Un clásico que nunca pasa de moda. La actuación de Brando es legendaria.",
                "calificacion": 5
            },
            {
                "usuario": "cinemagic",
                "contenido": "Una obra maestra sobre poder y familia.",
                "calificacion": 5
            }
        ]
    },
    {
        "titulo": "The Dark Knight",
        "fecha_estreno": "2008-07-18",
        "director": "Christopher Nolan",
        "actores_principales": [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart"
        ],
        "genero": [
            "Acción",
            "Crimen",
            "Drama"
        ],
        "sinopsis": "Batman debe enfrentarse al Joker, un criminal anárquico que quiere sumergir a Gotham City en el caos.",
        "calificacion_general": 4.9,
        "crew": {
            "productor": "Charles Roven, Emma Thomas",
            "guionista": "Jonathan Nolan, Christopher Nolan",
            "director_fotografia": "Wally Pfister"
        },
        "detalles": {
            "duracion": "152 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
        "reviews": [
            {
                "usuario": "jokerfan99",
                "contenido": "Heath Ledger se robó la película. Una actuación inolvidable.",
                "calificacion": 5
            },
            {
                "usuario": "batmanfan23",
                "contenido": "El mejor filme de superhéroes de todos los tiempos.",
                "calificacion": 5
            }
        ]
    },
    {
        "titulo": "Pulp Fiction",
        "fecha_estreno": "1994-10-14",
        "director": "Quentin Tarantino",
        "actores_principales": [
            "John Travolta",
            "Uma Thurman",
            "Samuel L. Jackson"
        ],
        "genero": [
            "Crimen",
            "Drama"
        ],
        "sinopsis": "Las historias entrelazadas de varios criminales en Los Ángeles, que exploran la cultura pop y la moralidad.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Lawrence Bender",
            "guionista": "Quentin Tarantino",
            "director_fotografia": "Andrzej Sekuła"
        },
        "detalles": {
            "duracion": "154 minutos",
            "clasificacion": "R"
        },
        "poster": "https://pics.filmaffinity.com/pulp_fiction-210382116-mmed.jpg",
        "reviews": [
            {
                "usuario": "tarantinofan",
                "contenido": "Las conversaciones son lo mejor. Estilo único.",
                "calificacion": 5
            },
            {
                "usuario": "cinephile89",
                "contenido": "Un viaje caótico y fascinante a través de la vida criminal.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "The Shawshank Redemption",
        "fecha_estreno": "1994-09-23",
        "director": "Frank Darabont",
        "actores_principales": [
            "Tim Robbins",
            "Morgan Freeman",
            "Bob Gunton"
        ],
        "genero": [
            "Drama",
            "Crimen"
        ],
        "sinopsis": "La historia de un banquero que es encarcelado por un crimen que no cometió y su amistad con otro prisionero.",
        "calificacion_general": 4.9,
        "crew": {
            "productor": "Niki Marvin",
            "guionista": "Frank Darabont",
            "director_fotografia": "Roger Deakins"
        },
        "detalles": {
            "duracion": "142 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "hopefulsoul",
                "contenido": "Una historia de esperanza que me tocó el corazón.",
                "calificacion": 5
            },
            {
                "usuario": "prisoner_of_time",
                "contenido": "Una película que todos deberían ver al menos una vez.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "The Matrix",
        "fecha_estreno": "1999-03-31",
        "director": "Lana Wachowski, Lilly Wachowski",
        "actores_principales": [
            "Keanu Reeves",
            "Laurence Fishburne",
            "Carrie-Anne Moss"
        ],
        "genero": [
            "Ciencia ficción",
            "Acción"
        ],
        "sinopsis": "Un hacker descubre la verdad sobre su realidad y su papel en la guerra contra sus controladores.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "Joel Silver",
            "guionista": "Lana Wachowski, Lilly Wachowski",
            "director_fotografia": "Bill Pope"
        },
        "detalles": {
            "duracion": "136 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "neo_lover",
                "contenido": "Revolucionó el cine. Visualmente impresionante.",
                "calificacion": 5
            },
            {
                "usuario": "cypher_here",
                "contenido": "Una película que me hizo cuestionar todo.",
                "calificacion": 4
            }
        ]
    }
]

const proximamente = [
    {
        "titulo": "El asesino del juego de citas",
        "fecha_estreno": "2024-10-10",
        "sinopsis": "Un thriller en el que un asesino en serie utiliza aplicaciones de citas para seleccionar a sus víctimas.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Woman_of_the_Hour_poster.jpg/220px-Woman_of_the_Hour_poster.jpg"
    },
    {
        "titulo": "El Hoyo 2",
        "fecha_estreno": "2024-11-22",
        "sinopsis": "La secuela de la película de culto 'El Hoyo', donde nuevos personajes enfrentan el aterrador sistema vertical de celdas.",
        "poster": "https://pics.filmaffinity.com/El_hoyo_2-101401547-large.jpg"
    },
    {
        "titulo": "Gladiator 2",
        "fecha_estreno": "2024-11-22",
        "sinopsis": "La secuela del aclamado filme Gladiator, explorando una nueva generación en el mundo del Imperio Romano.",
        "poster": "https://media.glamour.es/photos/668d3887960bb235399856c3/master/w_1600%2Cc_limit/poster%2520gladiador%25202%2520OK.jpg"
    },
    {
        "titulo": "Spider-Man: Beyond the Spider-Verse",
        "fecha_estreno": "2025-03-14",
        "sinopsis": "Miles Morales sigue su viaje a través del multiverso para enfrentarse a una nueva amenaza que podría destruir todas las realidades.",
        "poster": "https://m.media-amazon.com/images/M/MV5BZGZhMmE5OTYtMjM3Ny00NTVmLTgwZmEtZDY4YmE3MzQwN2ViXkEyXkFqcGc@._V1_.jpg"
    },
    {
        "titulo": "La Sustancia",
        "fecha_estreno": "2024-06-14",
        "sinopsis": "Un thriller de ciencia ficción que explora las consecuencias de una sustancia biotecnológica que amenaza con transformar la humanidad.",
        "poster": "https://pics.filmaffinity.com/La_sustancia-265285928-large.jpg"
    },
    {
        "titulo": "Venom: El último baile",
        "fecha_estreno": "2024-12-13",
        "sinopsis": "En esta tercera entrega, Venom enfrenta una amenaza que podría marcar el final de su conexión con Eddie Brock.",
        "poster": "https://pics.filmaffinity.com/Venom_El_aultimo_baile-379990903-large.jpg"
    }
]

function mostrar(items, nodo, aMostrar) {
    const fragment = document.createDocumentFragment();

    switch (aMostrar) {
        case 'poster':
            items.forEach((item) => {
                let img = document.createElement('img');
                img.src = item.poster;
                img.alt = "Poster pelicula";
                fragment.appendChild(img);
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
let popular = document.getElementById('popular')
mostrar(datos, popular, 'poster');

/*Busco nodo de proximamentes y ubico las imagenes*/
let proximo = document.getElementById('proximamente')
mostrar(proximamente, proximo, 'poster');



