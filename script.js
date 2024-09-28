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
    },
    {
        "titulo": "Forrest Gump",
        "fecha_estreno": "1994-07-06",
        "director": "Robert Zemeckis",
        "actores_principales": [
            "Tom Hanks",
            "Robin Wright",
            "Gary Sinise"
        ],
        "genero": [
            "Drama",
            "Romance"
        ],
        "sinopsis": "La vida extraordinaria de un hombre con un coeficiente intelectual bajo, que se convierte en testigo de eventos históricos.",
        "calificacion_general": 4.2,
        "crew": {
            "productor": "Wendy Finerman, Steve Tisch, Frank Marshall",
            "guionista": "Eric Roth",
            "director_fotografia": "Don Burgess"
        },
        "detalles": {
            "duracion": "142 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg",
        "reviews": [
            {
                "usuario": "gumpfan",
                "contenido": "Una historia hermosa sobre la vida y la amistad.",
                "calificacion": 5
            },
            {
                "usuario": "nostalgicviewer",
                "contenido": "Me hizo reír y llorar al mismo tiempo.",
                "calificacion": 5
            }
        ]
    },
    {
        "titulo": "Gladiator",
        "fecha_estreno": "2000-05-05",
        "director": "Ridley Scott",
        "actores_principales": [
            "Russell Crowe",
            "Joaquin Phoenix",
            "Connie Nielsen"
        ],
        "genero": [
            "Acción",
            "Drama"
        ],
        "sinopsis": "Un general romano es traicionado y convertido en esclavo, luego busca venganza como gladiador.",
        "crew": {
            "productor": "Douglas Wick, David Franzoni, Walter Parkes",
            "guionista": "David Franzoni, John Logan, William Nicholson",
            "director_fotografia": "Joaquin A. de la Torre"
        },
        "detalles": {
            "duracion": "155 minutos",
            "clasificacion": "R"
        },
        "poster": "https://pics.filmaffinity.com/Gladiator-368149580-large.jpg",
        "reviews": [
            {
                "usuario": "gladiatorfan",
                "contenido": "Una historia épica llena de emoción y acción.",
                "calificacion": 5
            },
            {
                "usuario": "romeo_reviewer",
                "contenido": "La batalla final es simplemente increíble.",
                "calificacion": 5
            }
        ]
    },
    {
        "titulo": "Avatar",
        "fecha_estreno": "2009-12-18",
        "director": "James Cameron",
        "actores_principales": [
            "Sam Worthington",
            "Zoe Saldana",
            "Sigourney Weaver"
        ],
        "genero": [
            "Ciencia ficción",
            "Aventura"
        ],
        "sinopsis": "En un mundo alienígena, un exmarine se convierte en un avatar para interactuar con la población nativa y proteger su hogar.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "James Cameron, Jon Landau",
            "guionista": "James Cameron",
            "director_fotografia": "Mauro Fiore"
        },
        "detalles": {
            "duracion": "162 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg",
        "reviews": [
            {
                "usuario": "pandorafreak",
                "contenido": "Visualmente deslumbrante, una experiencia cinematográfica única.",
                "calificacion": 5
            },
            {
                "usuario": "alienadventurer",
                "contenido": "La historia puede ser simple, pero el mundo que crea es impresionante.",
                "calificacion": 4
            }
        ]
    }]

let popular = document.getElementById('popular')

const fragment = document.createDocumentFragment();



datos.forEach((item) => {
    let img = document.createElement('img');
    img.src = item.poster;
    img.alt = "Poster pelicula";
    fragment.appendChild(img);
})
popular.appendChild(fragment);

let proximo = document.getElementById('proximamente')

datos.forEach((item) => {
    let img = document.createElement('img');
    img.src = item.poster;
    img.alt = "Poster pelicula";
    fragment.appendChild(img);
})
proximo.appendChild(fragment);


