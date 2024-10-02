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
    },
    {
        "titulo": "Spirited Away",
        "fecha_estreno": "2001-07-20",
        "director": "Hayao Miyazaki",
        "actores_principales": [
            "Rumi Hiiragi",
            "Miyu Irino",
            "Mari Natsukawa"
        ],
        "genero": [
            "Animación",
            "Aventura",
            "Fantasía"
        ],
        "sinopsis": "Una niña se encuentra en un mundo mágico y debe trabajar en una casa de baños para salvar a sus padres que han sido transformados en cerdos.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Toshio Suzuki",
            "guionista": "Hayao Miyazaki",
            "director_fotografia": "Atsushi Okui"
        },
        "detalles": {
            "duracion": "125 minutos",
            "clasificacion": "PG"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "animefan123",
                "contenido": "Una obra maestra de la animación, llena de imaginación y emoción.",
                "calificacion": 5
            },
            {
                "usuario": "mystic_viewer",
                "contenido": "Cada escena es un deleite visual y emocional.",
                "calificacion": 5
            }
        ]
    },
    {
        "titulo": "Jurassic Park",
        "fecha_estreno": "1993-06-11",
        "director": "Steven Spielberg",
        "actores_principales": [
            "Sam Neill",
            "Laura Dern",
            "Jeff Goldblum"
        ],
        "genero": [
            "Ciencia ficción",
            "Aventura",
            "Suspenso"
        ],
        "sinopsis": "Un grupo de personas visita un parque temático donde los dinosaurios han sido traídos a la vida mediante ingeniería genética, pero las cosas salen mal.",
        "calificacion_general": 4.0,
        "crew": {
            "productor": "Steven Spielberg, Kathleen Kennedy",
            "guionista": "Michael Crichton, David Koepp",
            "director_fotografia": "Dean Cundey"
        },
        "detalles": {
            "duracion": "127 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
        "reviews": [
            {
                "usuario": "dino_adventurer",
                "contenido": "Una experiencia de aventuras que me hizo amar a los dinosaurios.",
                "calificacion": 5
            },
            {
                "usuario": "film_geek",
                "contenido": "Los efectos especiales siguen siendo impresionantes incluso décadas después.",
                "calificacion": 4
            }
        ]
    }
]

const terror = [
    {
        "titulo": "Talk to Me",
        "fecha_estreno": "2023-07-28",
        "director": "Danny Philippou, Michael Philippou",
        "actores_principales": [
            "Sophie Wilde",
            "Miranda Otto",
            "Alexandra Jensen"
        ],
        "genero": [
            "Terror",
            "Suspenso"
        ],
        "sinopsis": "Un grupo de amigos descubre una manera de invocar espíritus usando una mano embalsamada, pero lo que comienza como un juego se convierte en una pesadilla aterradora.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Kristin O'Connell, Sam McCool",
            "guionista": "Danny Philippou, Bill Hinzman",
            "director_fotografia": "Ari Wegner"
        },
        "detalles": {
            "duracion": "95 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BY2I2NzJmY2YtYTM3Ni00ZGJhLThkZTItODFhMzhlZjZkMDQ5XkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "scarymoviefan",
                "contenido": "Una de las mejores películas de terror del año.",
                "calificacion": 5
            },
            {
                "usuario": "horrorlover",
                "contenido": "Original y aterradora, definitivamente no es para los débiles de corazón.",
                "calificacion": 4.5
            }
        ]
    },
    {
        "titulo": "The Boogeyman",
        "fecha_estreno": "2023-06-02",
        "director": "Rob Savage",
        "actores_principales": [
            "Sophie Thatcher",
            "Chris Messina",
            "Vivien Lyra Blair"
        ],
        "genero": [
            "Terror",
            "Suspenso"
        ],
        "sinopsis": "Una adolescente y su hermana pequeña enfrentan a un ser aterrador que se alimenta del dolor de su familia tras la muerte de su madre.",
        "calificacion_general": 4.2,
        "crew": {
            "productor": "Dan Mazeau, Shawn Levy",
            "guionista": "Scott Beck, Bryan Woods",
            "director_fotografia": "Pawel Pogorzelski"
        },
        "detalles": {
            "duracion": "98 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://upload.wikimedia.org/wikipedia/en/8/89/The_Boogeyman_2023_poster.png",
        "reviews": [
            {
                "usuario": "horrorfreak",
                "contenido": "Terror psicológico en su máxima expresión.",
                "calificacion": 4.5
            },
            {
                "usuario": "ghosthunter",
                "contenido": "Sustos bien ejecutados y un gran guion.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Evil Dead Rise",
        "fecha_estreno": "2023-04-21",
        "director": "Lee Cronin",
        "actores_principales": [
            "Lily Sullivan",
            "Alyssa Sutherland",
            "Morgan Davies"
        ],
        "genero": [
            "Terror",
            "Comedia"
        ],
        "sinopsis": "Dos hermanas se reúnen, solo para descubrir un libro maldito que desata demonios en su edificio de apartamentos.",
        "calificacion_general": 4.3,
        "crew": {
            "productor": "Sam Raimi, Bruce Campbell",
            "guionista": "Lee Cronin",
            "director_fotografia": "Dave Garbett"
        },
        "detalles": {
            "duracion": "97 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMjM1ZmViMmYtOGYzZC00YzhmLWE0MTMtMzNjYzcyNjEwYWRkXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "horrorenthusiast",
                "contenido": "Una reinvención brillante y aterradora de la saga.",
                "calificacion": 4.8
            },
            {
                "usuario": "bloodandgore",
                "contenido": "Sangrienta y divertida, perfecta para los fans del terror.",
                "calificacion": 4.5
            }
        ]
    },
    {
        "titulo": "The Nun II",
        "fecha_estreno": "2023-09-08",
        "director": "Michael Chaves",
        "actores_principales": [
            "Taissa Farmiga",
            "Jonny Flemyng",
            "Storm Reid"
        ],
        "genero": [
            "Terror",
            "Suspenso"
        ],
        "sinopsis": "La monja demoníaca Valak regresa para atormentar a un convento en Francia, mientras una hermana intenta enfrentarse a su oscuro pasado.",
        "calificacion_general": 4.0,
        "crew": {
            "productor": "James Wan, Peter Safran",
            "guionista": "Ian Goldberg, Richard Naing",
            "director_fotografia": "Maxime Alexandre"
        },
        "detalles": {
            "duracion": "110 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BY2YxYmEyYmUtOWRkMi00NDU3LTk0NGMtOTA5MzliMDg3NDQ0XkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "nunfan2023",
                "contenido": "Las escenas de terror son impresionantes.",
                "calificacion": 4.5
            },
            {
                "usuario": "horrorlovers",
                "contenido": "Una buena continuación de la saga.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Pearl",
        "fecha_estreno": "2022-09-16",
        "director": "Ti West",
        "actores_principales": [
            "Mia Goth",
            "David Corenswet",
            "Tandi Wright"
        ],
        "genero": [
            "Terror",
            "Drama"
        ],
        "sinopsis": "La joven Pearl busca escapar de su vida en una granja y sueña con convertirse en una estrella, pero su ambición tiene un alto precio.",
        "calificacion_general": 4.4,
        "crew": {
            "productor": "Ti West, Mia Goth",
            "guionista": "Ti West, Mia Goth",
            "director_fotografia": "Eliot Rockett"
        },
        "detalles": {
            "duracion": "102 minutos",
            "clasificacion": "R"
        },
        "poster": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbgqRastFgpQeIlYqElTkXlTkrGrZg_7wF4Jze7EoC74xlyrV9dWkum_Fsw3ZVfMcRJmT6Ed7xB_3ww-WcCW1IztB9J79xT3rDrXVU4FBElHbDGnXyu7KGLEHCfTz3nHSO0tUqX5UeQPvUb3BahHoWp5rM84Qzvqu82TSPuMl9rN-UuwNvlfbqAAdfQ2M/s1082/Pearl.jpg",
        "reviews": [
            {
                "usuario": "horrorcritic",
                "contenido": "Mia Goth ofrece una actuación sobresaliente.",
                "calificacion": 4.8
            },
            {
                "usuario": "dramaqueen",
                "contenido": "Una historia inquietante que explora la locura y la ambición.",
                "calificacion": 4.5
            }
        ]
    },
    {
        "titulo": "Hereditary",
        "fecha_estreno": "2018-06-08",
        "director": "Ari Aster",
        "actores_principales": [
            "Toni Collette",
            "Alex Wolff",
            "Milly Shapiro"
        ],
        "genero": [
            "Terror",
            "Drama"
        ],
        "sinopsis": "Una familia es atormentada por secretos oscuros tras la muerte de su enigmática abuela, lo que desata una serie de eventos sobrenaturales.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "Ari Aster, Kevin Frakes",
            "guionista": "Ari Aster",
            "director_fotografia": "Pawel Pogorzelski"
        },
        "detalles": {
            "duracion": "127 minutos",
            "clasificacion": "R"
        },
        "poster": "https://pics.filmaffinity.com/Hereditary-411242403-large.jpg",
        "reviews": [
            {
                "usuario": "horrormaster",
                "contenido": "Una obra maestra del terror moderno que deja una huella duradera.",
                "calificacion": 5
            },
            {
                "usuario": "psychologicalhorrorfan",
                "contenido": "Intenso y perturbador, con actuaciones impresionantes.",
                "calificacion": 4.7
            }
        ]
    }, {
        "titulo": "El Exorcista",
        "fecha_estreno": "1973-12-26",
        "director": "William Friedkin",
        "actores_principales": [
            "Ellen Burstyn",
            "Linda Blair",
            "Max von Sydow"
        ],
        "genero": [
            "Terror",
            "Sobrenatural"
        ],
        "sinopsis": "Una joven es poseída por una entidad maligna y su madre recurre a dos sacerdotes para realizar un exorcismo.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "William Peter Blatty",
            "guionista": "William Peter Blatty",
            "director_fotografia": "Owen Roizman"
        },
        "detalles": {
            "duracion": "122 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BZjg3YjE4ZjAtYTdmYS00ZTBkLWE1ZjgtNzAzODUwNzRiYjlmXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "horror_lover",
                "contenido": "Una de las películas más aterradoras de todos los tiempos.",
                "calificacion": 5
            },
            {
                "usuario": "fear_fanatic",
                "contenido": "Me dejó con pesadillas por semanas.",
                "calificacion": 4.8
            }
        ]
    },
    {
        "titulo": "It",
        "fecha_estreno": "2017-09-08",
        "director": "Andy Muschietti",
        "actores_principales": [
            "Bill Skarsgård",
            "Jaeden Martell",
            "Finn Wolfhard"
        ],
        "genero": [
            "Terror",
            "Sobrenatural"
        ],
        "sinopsis": "Un grupo de niños se enfrenta a una entidad maligna que toma la forma de un payaso llamado Pennywise.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Barbara Muschietti, Roy Lee, Dan Lin",
            "guionista": "Chase Palmer, Cary Fukunaga, Gary Dauberman",
            "director_fotografia": "Chung-hoon Chung"
        },
        "detalles": {
            "duracion": "135 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "losers_club_member",
                "contenido": "Una adaptación excelente y aterradora.",
                "calificacion": 5
            },
            {
                "usuario": "clownphobia_101",
                "contenido": "Me aterrorizó, pero fue muy entretenida.",
                "calificacion": 4.5
            }
        ]
    },
    {
        "titulo": "Midsommar",
        "fecha_estreno": "2019-07-03",
        "director": "Ari Aster",
        "actores_principales": [
            "Florence Pugh",
            "Jack Reynor",
            "William Jackson Harper"
        ],
        "genero": [
            "Terror",
            "Suspenso"
        ],
        "sinopsis": "Una pareja asiste a un festival rural en Suecia, que pronto se convierte en una aterradora experiencia de culto.",
        "calificacion_general": 4.3,
        "crew": {
            "productor": "Lars Knudsen, Patrik Andersson",
            "guionista": "Ari Aster",
            "director_fotografia": "Pawel Pogorzelski"
        },
        "detalles": {
            "duracion": "148 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_FMjpg_UX1000_.jpg",
        "reviews": [
            {
                "usuario": "cult_watcher",
                "contenido": "Una película inquietante con una atmósfera sofocante.",
                "calificacion": 4.7
            },
            {
                "usuario": "bright_horror_fan",
                "contenido": "Visualmente hermosa pero profundamente perturbadora.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "El Resplandor",
        "fecha_estreno": "1980-05-23",
        "director": "Stanley Kubrick",
        "actores_principales": [
            "Jack Nicholson",
            "Shelley Duvall",
            "Danny Lloyd"
        ],
        "genero": [
            "Terror",
            "Suspenso"
        ],
        "sinopsis": "Un hombre se convierte en vigilante de un hotel aislado donde sufre una perturbadora transformación mental, poniendo en peligro a su familia.",
        "calificacion_general": 4.9,
        "crew": {
            "productor": "Stanley Kubrick",
            "guionista": "Stanley Kubrick, Diane Johnson",
            "director_fotografia": "John Alcott"
        },
        "detalles": {
            "duracion": "146 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "overlook_guest",
                "contenido": "Una obra maestra del terror psicológico.",
                "calificacion": 5
            },
            {
                "usuario": "redrum_fan",
                "contenido": "La actuación de Jack Nicholson es icónica.",
                "calificacion": 5
            }
        ]
    }

]

const accion = [{
    "titulo": "John Wick: Chapter 4",
    "fecha_estreno": "2023-03-24",
    "director": "Chad Stahelski",
    "actores_principales": [
        "Keanu Reeves",
        "Donnie Yen",
        "Bill Skarsgård"
    ],
    "genero": [
        "Acción",
        "Thriller"
    ],
    "sinopsis": "John Wick busca vengar la muerte de su amigo mientras enfrenta a poderosos enemigos en una batalla global.",
    "calificacion_general": 4.8,
    "crew": {
        "productor": "Basil Iwanyk, Erica Lee, Chad Stahelski",
        "guionista": "Shay Hatten, Michael Finch, Chad Stahelski",
        "director_fotografia": "Dan Laustsen"
    },
    "detalles": {
        "duracion": "169 minutos",
        "clasificacion": "R"
    },
    "poster": "https://pics.filmaffinity.com/John_Wick_4-101402041-mmed.jpg",
    "reviews": [
        {
            "usuario": "actionfanatic",
            "contenido": "Una explosión de acción de principio a fin, ¡no te la puedes perder!",
            "calificacion": 5
        },
        {
            "usuario": "stuntlover",
            "contenido": "Las secuencias de pelea son impresionantes.",
            "calificacion": 4.9
        }
    ]
},
{
    "titulo": "Fast & Furious X",
    "fecha_estreno": "2023-05-19",
    "director": "Louis Leterrier",
    "actores_principales": [
        "Vin Diesel",
        "Michelle Rodriguez",
        "Jordana Brewster"
    ],
    "genero": [
        "Acción",
        "Aventura"
    ],
    "sinopsis": "La familia Toretto se enfrenta a un nuevo villano que busca vengarse por el pasado.",
    "calificacion_general": 4.5,
    "crew": {
        "productor": "Vin Diesel, Neal H. Moritz",
        "guionista": "Dan Mazeau, Justin Lin",
        "director_fotografia": "Larkin Seiple"
    },
    "detalles": {
        "duracion": "141 minutos",
        "clasificacion": "PG-13"
    },
    "poster": "https://pics.filmaffinity.com/Fast_Furious_X-556821969-large.jpg",
    "reviews": [
        {
            "usuario": "carlover",
            "contenido": "¡Acción trepidante y coches espectaculares!",
            "calificacion": 4.6
        },
        {
            "usuario": "familyfirst",
            "contenido": "Siempre un placer ver a esta familia unida.",
            "calificacion": 4.3
        }
    ]
},
{
    "titulo": "Guardians of the Galaxy Vol. 3",
    "fecha_estreno": "2023-05-05",
    "director": "James Gunn",
    "actores_principales": [
        "Chris Pratt",
        "Zoe Saldana",
        "Dave Bautista"
    ],
    "genero": [
        "Acción",
        "Aventura",
        "Comedia"
    ],
    "sinopsis": "Los Guardianes deben proteger a uno de los suyos mientras enfrentan un nuevo enemigo en el espacio.",
    "calificacion_general": 4.7,
    "crew": {
        "productor": "Kevin Feige, Louis D'Esposito",
        "guionista": "James Gunn",
        "director_fotografia": "Henry Braham"
    },
    "detalles": {
        "duracion": "150 minutos",
        "clasificacion": "PG-13"
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_.jpg",
    "reviews": [
        {
            "usuario": "marvelmaniac",
            "contenido": "Una emocionante aventura espacial llena de risas y acción.",
            "calificacion": 5
        },
        {
            "usuario": "teamguardians",
            "contenido": "Los mejores momentos de la trilogía.",
            "calificacion": 4.8
        }
    ]
},
{
    "titulo": "Mission: Impossible - Dead Reckoning Part One",
    "fecha_estreno": "2023-07-12",
    "director": "Christopher McQuarrie",
    "actores_principales": [
        "Tom Cruise",
        "Hayley Atwell",
        "Ving Rhames"
    ],
    "genero": [
        "Acción",
        "Aventura",
        "Suspenso"
    ],
    "sinopsis": "Ethan Hunt y su equipo deben rastrear un arma secreta antes de que caiga en manos equivocadas.",
    "calificacion_general": 4.8,
    "crew": {
        "productor": "Tom Cruise, Christopher McQuarrie",
        "guionista": "Christopher McQuarrie, Erik Jendresen",
        "director_fotografia": "Haitham A. Dabbour"
    },
    "detalles": {
        "duracion": "163 minutos",
        "clasificacion": "PG-13"
    },
    "poster": "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg",
    "reviews": [
        {
            "usuario": "spyfan",
            "contenido": "La mejor película de acción del año, con acrobacias impresionantes.",
            "calificacion": 5
        },
        {
            "usuario": "missionpossible",
            "contenido": "Tom Cruise sigue superándose en cada entrega.",
            "calificacion": 4.9
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
}, {
    "titulo": "Rocky",
    "fecha_estreno": "1976-12-03",
    "director": "John G. Avildsen",
    "actores_principales": [
        "Sylvester Stallone",
        "Talia Shire",
        "Burt Young"
    ],
    "genero": [
        "Drama",
        "Deporte"
    ],
    "sinopsis": "Un boxeador desconocido de Filadelfia recibe una oportunidad inesperada para luchar por el título mundial de peso pesado.",
    "calificacion_general": 4.3,
    "crew": {
        "productor": "Robert Chartoff, Irwin Winkler",
        "guionista": "Sylvester Stallone",
        "director_fotografia": "James Crabe"
    },
    "detalles": {
        "duracion": "120 minutos",
        "clasificacion": "PG"
    },
    "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Rocky_poster.jpg/220px-Rocky_poster.jpg",
    "reviews": [
        {
            "usuario": "boxingfan123",
            "contenido": "Una historia inspiradora, Sylvester Stallone es perfecto.",
            "calificacion": 5
        },
        {
            "usuario": "moviebuff99",
            "contenido": "Aunque predecible, es una gran película de superación.",
            "calificacion": 4
        }
    ]
},
{
    "titulo": "Mad Max 2",
    "fecha_estreno": "1981-12-24",
    "director": "George Miller",
    "actores_principales": [
        "Mel Gibson",
        "Bruce Spence",
        "Michael Preston"
    ],
    "genero": [
        "Acción",
        "Ciencia ficción"
    ],
    "sinopsis": "En un mundo postapocalíptico, Max debe ayudar a un grupo de colonos a defenderse de una pandilla de merodeadores.",
    "calificacion_general": 4.5,
    "crew": {
        "productor": "Byron Kennedy",
        "guionista": "Terry Hayes, George Miller, Brian Hannant",
        "director_fotografia": "Dean Semler"
    },
    "detalles": {
        "duracion": "96 minutos",
        "clasificacion": "R"
    },
    "poster": "https://m.media-amazon.com/images/S/pv-target-images/6874a688cc4f1fdb2fa4067210e09bc604a5b2a492482aa932906415132a2c0c.jpg",
    "reviews": [
        {
            "usuario": "roadwarrior85",
            "contenido": "La mejor película de acción postapocalíptica.",
            "calificacion": 5
        },
        {
            "usuario": "apocalypsefan",
            "contenido": "Gran secuela, aunque un poco exagerada a veces.",
            "calificacion": 4
        }
    ]
},
{
    "titulo": "The Terminator",
    "fecha_estreno": "1984-10-26",
    "director": "James Cameron",
    "actores_principales": [
        "Arnold Schwarzenegger",
        "Linda Hamilton",
        "Michael Biehn"
    ],
    "genero": [
        "Ciencia ficción",
        "Acción"
    ],
    "sinopsis": "Un ciborg asesino es enviado desde el futuro para matar a una mujer cuyo hijo será clave para el futuro de la humanidad.",
    "calificacion_general": 4.8,
    "crew": {
        "productor": "Gale Anne Hurd",
        "guionista": "James Cameron, Gale Anne Hurd",
        "director_fotografia": "Adam Greenberg"
    },
    "detalles": {
        "duracion": "107 minutos",
        "clasificacion": "R"
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_.jpg",
    "reviews": [
        {
            "usuario": "cyberdynefan",
            "contenido": "Un clásico absoluto de la ciencia ficción.",
            "calificacion": 5
        },
        {
            "usuario": "time_traveler_101",
            "contenido": "Increíble para su época, aunque con algunos clichés.",
            "calificacion": 4.5
        }
    ]
},
{
    "titulo": "Aliens",
    "fecha_estreno": "1986-07-18",
    "director": "James Cameron",
    "actores_principales": [
        "Sigourney Weaver",
        "Michael Biehn",
        "Carrie Henn"
    ],
    "genero": [
        "Ciencia ficción",
        "Terror"
    ],
    "sinopsis": "Después de sobrevivir a un ataque alienígena, Ripley vuelve al planeta con un grupo de marines para enfrentarse a los horrores que dejó atrás.",
    "calificacion_general": 4.7,
    "crew": {
        "productor": "Gale Anne Hurd",
        "guionista": "James Cameron",
        "director_fotografia": "Adrian Biddle"
    },
    "detalles": {
        "duracion": "137 minutos",
        "clasificacion": "R"
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZjIyNGJhYzYtN2I1My00OTVhLWEyMzItZTVjNDMzOTVkYWViXkEyXkFqcGc@._V1_.jpg",
    "reviews": [
        {
            "usuario": "xenomorph_hunter",
            "contenido": "La mejor secuela que he visto en mi vida.",
            "calificacion": 5
        },
        {
            "usuario": "colonial_marine",
            "contenido": "Terror y acción mezclados de manera magistral.",
            "calificacion": 4.8
        }
    ]
},
{
    "titulo": "Deadpool",
    "fecha_estreno": "2016-02-12",
    "director": "Tim Miller",
    "actores_principales": [
        "Ryan Reynolds",
        "Morena Baccarin",
        "T.J. Miller"
    ],
    "genero": [
        "Acción",
        "Comedia"
    ],
    "sinopsis": "Un mercenario desfigurado con un sentido del humor irreverente busca venganza contra el hombre que arruinó su vida.",
    "calificacion_general": 4.4,
    "crew": {
        "productor": "Simon Kinberg, Ryan Reynolds, Lauren Shuler Donner",
        "guionista": "Rhett Reese, Paul Wernick",
        "director_fotografia": "Ken Seng"
    },
    "detalles": {
        "duracion": "108 minutos",
        "clasificacion": "R"
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "reviews": [
        {
            "usuario": "merc_with_a_mouth",
            "contenido": "Una película hilarante y llena de acción.",
            "calificacion": 5
        },
        {
            "usuario": "hero_fan",
            "contenido": "Un poco sobrevalorada, pero entretenida.",
            "calificacion": 4
        }
    ]
}

]

const animacion =
    [
        {
            "titulo": "Robot Dreams",
            "fecha_estreno": "2023-09-08",
            "director": "Pablo Berger",
            "actores_principales": [
                "Actores de voz",
                "Animación"
            ],
            "genero": [
                "Animación",
                "Drama"
            ],
            "sinopsis": "La amistad entre un perro y un robot se ve interrumpida cuando el robot queda atrapado en la playa.",
            "calificacion_general": 4.2,
            "crew": {
                "productor": "Pablo Berger",
                "guionista": "Pablo Berger",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "90 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BMTE0OGRjZWQtMDRiOS00ZjM4LTg2NjAtZGYyZDk1NGRkMzg1XkEyXkFqcGc@._V1_.jpg",
            "reviews": [
                {
                    "usuario": "dreamy_robot",
                    "contenido": "Un viaje emocional y visualmente hermoso.",
                    "calificacion": 4.5
                },
                {
                    "usuario": "beachbot",
                    "contenido": "Enternecedora y creativa, aunque un poco lenta.",
                    "calificacion": 4
                }
            ]
        },
        {
            "titulo": "Bee Movie",
            "fecha_estreno": "2007-11-02",
            "director": "Simon J. Smith, Steve Hickner",
            "actores_principales": [
                "Jerry Seinfeld",
                "Renée Zellweger",
                "Matthew Broderick"
            ],
            "genero": [
                "Animación",
                "Comedia"
            ],
            "sinopsis": "Una abeja recién graduada de la universidad entabla una demanda contra los humanos por explotar la miel.",
            "calificacion_general": 3.8,
            "crew": {
                "productor": "Jerry Seinfeld, Christina Steinberg",
                "guionista": "Jerry Seinfeld, Spike Feresten",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "91 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1NjE0NzM1NF5BMl5BanBnXkFtZTcwMTM4MTE2MQ@@._V1_.jpg",
            "reviews": [
                {
                    "usuario": "honey_defender",
                    "contenido": "Divertida y con un mensaje inusual.",
                    "calificacion": 4
                },
                {
                    "usuario": "buzz_buzz",
                    "contenido": "Extraña pero entretenida, aunque no para todos.",
                    "calificacion": 3.5
                }
            ]
        },
        {
            "titulo": "Spider-Man: Into the Spider-Verse",
            "fecha_estreno": "2018-12-14",
            "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
            "actores_principales": [
                "Shameik Moore",
                "Jake Johnson",
                "Hailee Steinfeld"
            ],
            "genero": [
                "Animación",
                "Acción"
            ],
            "sinopsis": "Miles Morales se convierte en Spider-Man y descubre que puede haber más versiones del héroe en otros universos.",
            "calificacion_general": 4.8,
            "crew": {
                "productor": "Phil Lord, Christopher Miller",
                "guionista": "Phil Lord, Rodney Rothman",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "117 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
            "reviews": [
                {
                    "usuario": "spidey_fan_99",
                    "contenido": "La mejor película de Spider-Man hasta la fecha.",
                    "calificacion": 5
                },
                {
                    "usuario": "multiverse_traveler",
                    "contenido": "Visualmente impactante y muy entretenida.",
                    "calificacion": 4.8
                }
            ]
        },
        {
            "titulo": "Fantastic Mr. Fox",
            "fecha_estreno": "2009-11-25",
            "director": "Wes Anderson",
            "actores_principales": [
                "George Clooney",
                "Meryl Streep",
                "Jason Schwartzman"
            ],
            "genero": [
                "Animación",
                "Aventura"
            ],
            "sinopsis": "Un zorro astuto planea un último atraco a tres granjas, poniendo en peligro a su familia.",
            "calificacion_general": 4.6,
            "crew": {
                "productor": "Wes Anderson, Scott Rudin",
                "guionista": "Wes Anderson, Noah Baumbach",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "87 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/S/pv-target-images/b54c6f334c8a1b0d8aa5fff693a14b4eb3bdc7cc83d5f16cccd56761d388c75e.jpg",
            "reviews": [
                {
                    "usuario": "foxy_plan",
                    "contenido": "Un filme ingenioso y lleno de encanto.",
                    "calificacion": 4.7
                },
                {
                    "usuario": "wild_wild_animal",
                    "contenido": "Wes Anderson en su mejor forma, ideal para toda la familia.",
                    "calificacion": 4.5
                }
            ]
        },
        {
            "titulo": "Grandes Héroes",
            "fecha_estreno": "2014-11-07",
            "director": "Don Hall, Chris Williams",
            "actores_principales": [
                "Ryan Potter",
                "Scott Adsit",
                "Jamie Chung"
            ],
            "genero": [
                "Animación",
                "Aventura"
            ],
            "sinopsis": "Un prodigioso joven y su robot Baymax forman un equipo de héroes para detener una peligrosa amenaza tecnológica.",
            "calificacion_general": 4.4,
            "crew": {
                "productor": "Roy Conli",
                "guionista": "Jordan Roberts, Daniel Gerson",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "102 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BYjQ3YzUyOGQtNjdlYS00YmRhLWIyOWYtMGQ3YjkwMjJiYzRjXkEyXkFqcGc@._V1_.jpg",
            "reviews": [
                {
                    "usuario": "hiro_and_baymax",
                    "contenido": "Emocionante y con un gran corazón.",
                    "calificacion": 4.5
                },
                {
                    "usuario": "techie_hero",
                    "contenido": "Diversión y tecnología combinados perfectamente.",
                    "calificacion": 4.2
                }
            ]
        },
        {
            "titulo": "Leo",
            "fecha_estreno": "2023-11-21",
            "director": "Robert Marianetti, David Wachtenheim",
            "actores_principales": [
                "Adam Sandler",
                "Bill Burr",
                "Cecily Strong"
            ],
            "genero": [
                "Animación",
                "Comedia"
            ],
            "sinopsis": "Un lagarto de clase que ha vivido años como mascota escolar, decide disfrutar su último año de vida ayudando a los estudiantes.",
            "calificacion_general": 4.1,
            "crew": {
                "productor": "Adam Sandler",
                "guionista": "Robert Marianetti, David Wachtenheim",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "100 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BNGMyMjQ0Y2MtMzhkZS00NGU5LThmMmYtZDE0MWIwOTY2MjlhXkEyXkFqcGc@._V1_.jpg",
            "reviews": [
                {
                    "usuario": "lizard_fan",
                    "contenido": "Divertida y emotiva, Adam Sandler sorprende con su interpretación.",
                    "calificacion": 4.2
                },
                {
                    "usuario": "classroom_lizard",
                    "contenido": "Tierna historia con buen humor y lecciones de vida.",
                    "calificacion": 4
                }
            ]
        },
        {
            "titulo": "El Castillo Ambulante",
            "fecha_estreno": "2004-11-20",
            "director": "Hayao Miyazaki",
            "actores_principales": [
                "Chieko Baishō",
                "Takuya Kimura",
                "Akihiro Miwa"
            ],
            "genero": [
                "Animación",
                "Fantasía"
            ],
            "sinopsis": "Una joven es transformada en una anciana por una bruja y busca refugio en el castillo ambulante de un mago llamado Howl.",
            "calificacion_general": 4.8,
            "crew": {
                "productor": "Toshio Suzuki",
                "guionista": "Hayao Miyazaki",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "119 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BMTZhNTc2M2YtOGFhMS00MmQ2LTkxNWUtYWNhNWYyN2E2YzY1XkEyXkFqcGc@._V1_.jpg",
            "reviews": [
                {
                    "usuario": "miyazaki_lover",
                    "contenido": "Un festín visual con una historia conmovedora.",
                    "calificacion": 5
                },
                {
                    "usuario": "howls_moving_castle_fan",
                    "contenido": "Una película mágica que nunca envejece.",
                    "calificacion": 4.9
                }
            ]
        },
        {
            "titulo": "Metegol",
            "fecha_estreno": "2013-07-18",
            "director": "Juan José Campanella",
            "actores_principales": [
                "David Masajnik",
                "Pablo Rago",
                "Lucía Maciel"
            ],
            "genero": [
                "Animación",
                "Aventura"
            ],
            "sinopsis": "Amadeo, un joven apasionado del fútbol de mesa, debe enfrentar a un exjugador profesional en una partida de vida o muerte, con la ayuda de figuras animadas del metegol.",
            "calificacion_general": 4.0,
            "crew": {
                "productor": "Juan José Campanella",
                "guionista": "Eduardo Sacheri, Juan José Campanella",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "106 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BMTEzMjY1OTM5NjVeQTJeQWpwZ15BbWU3MDcyMjU2NTk@._V1_.jpg",
            "reviews": [
                {
                    "usuario": "futbolito_fan",
                    "contenido": "Divertida y llena de acción, perfecta para los amantes del fútbol.",
                    "calificacion": 4.2
                },
                {
                    "usuario": "table_soccer_pro",
                    "contenido": "Creativa y entretenida, aunque la animación podría ser mejor.",
                    "calificacion": 3.8
                }
            ]
        },
        {
            "titulo": "Cómo Entrenar a tu Dragón",
            "fecha_estreno": "2010-03-26",
            "director": "Dean DeBlois, Chris Sanders",
            "actores_principales": [
                "Jay Baruchel",
                "Gerard Butler",
                "America Ferrera"
            ],
            "genero": [
                "Animación",
                "Aventura"
            ],
            "sinopsis": "Un joven vikingo llamado Hipo desafía las tradiciones al entrenar a un dragón en lugar de cazarlo, lo que cambiará el destino de su pueblo.",
            "calificacion_general": 4.7,
            "crew": {
                "productor": "Bonnie Arnold",
                "guionista": "Dean DeBlois, Chris Sanders",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "98 minutos",
                "clasificacion": "PG"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
            "reviews": [
                {
                    "usuario": "dragon_rider",
                    "contenido": "Una de las mejores películas de animación, con una historia entrañable.",
                    "calificacion": 4.9
                },
                {
                    "usuario": "toothless_fan",
                    "contenido": "Visualmente espectacular y emocionalmente poderosa.",
                    "calificacion": 4.8
                }
            ]
        },
        {
            "titulo": "El Niño y la Garza",
            "fecha_estreno": "2023-07-14",
            "director": "Hayao Miyazaki",
            "actores_principales": [
                "Soma Santoki",
                "Masaki Suda",
                "Takuya Kimura"
            ],
            "genero": [
                "Animación",
                "Fantasía"
            ],
            "sinopsis": "Un joven niño vive una serie de aventuras fantásticas tras mudarse a una nueva ciudad luego de la muerte de su madre.",
            "calificacion_general": 4.9,
            "crew": {
                "productor": "Toshio Suzuki",
                "guionista": "Hayao Miyazaki",
                "director_fotografia": "Animación"
            },
            "detalles": {
                "duracion": "124 minutos",
                "clasificacion": "PG-13"
            },
            "poster": "https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "reviews": [
                {
                    "usuario": "miyazaki_magic",
                    "contenido": "Una película visualmente asombrosa y profundamente conmovedora.", "calificacion": 5
                },
                {
                    "usuario": "garza_lover",
                    "contenido": "Una historia única, llena de simbolismo y belleza.",
                    "calificacion": 4.9
                }
            ]
        }
    ]

const romance = [
    {
        "titulo": "Yo Antes de Ti",
        "fecha_estreno": "2016-06-03",
        "director": "Thea Sharrock",
        "actores_principales": [
            "Emilia Clarke",
            "Sam Claflin",
            "Janet McTeer"
        ],
        "genero": [
            "Drama",
            "Romance"
        ],
        "sinopsis": "Una joven alegre se convierte en la cuidadora de un hombre parapléjico, cambiando la vida de ambos para siempre.",
        "calificacion_general": 4.3,
        "crew": {
            "productor": "Karen Rosenfelt, Alison Owen",
            "guionista": "Jojo Moyes",
            "director_fotografia": "Remi Adefarasin"
        },
        "detalles": {
            "duracion": "110 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_FMjpg_UX1000_.jpg",
        "reviews": [
            {
                "usuario": "romantic_dreamer",
                "contenido": "Conmovedora y hermosa, aunque desgarradora.",
                "calificacion": 4.5
            },
            {
                "usuario": "will_and_lou_fan",
                "contenido": "Una historia de amor profunda, con momentos desgarradores.",
                "calificacion": 4.2
            }
        ]
    },
    {
        "titulo": "Cómo Perder a un Hombre en 10 Días",
        "fecha_estreno": "2003-02-07",
        "director": "Donald Petrie",
        "actores_principales": [
            "Kate Hudson",
            "Matthew McConaughey",
            "Kathryn Hahn"
        ],
        "genero": [
            "Comedia",
            "Romance"
        ],
        "sinopsis": "Una columnista decide escribir un artículo sobre cómo alejar a un hombre en 10 días, mientras su objetivo intenta hacer que se enamore de él.",
        "calificacion_general": 4.1,
        "crew": {
            "productor": "Lynda Obst, Robert Evans",
            "guionista": "Kristen Buckley, Brian Regan",
            "director_fotografia": "John Bailey"
        },
        "detalles": {
            "duracion": "116 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_QL75_UY281_CR0,0,190,281_.jpg",
        "reviews": [
            {
                "usuario": "love_expert",
                "contenido": "Divertida, con química encantadora entre los protagonistas.",
                "calificacion": 4.3
            },
            {
                "usuario": "romantic_comedy_fan",
                "contenido": "Predecible pero muy entretenida, perfecta para reír.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Mujer Bonita",
        "fecha_estreno": "1990-03-23",
        "director": "Garry Marshall",
        "actores_principales": [
            "Richard Gere",
            "Julia Roberts",
            "Jason Alexander"
        ],
        "genero": [
            "Comedia",
            "Romance"
        ],
        "sinopsis": "Un empresario rico contrata a una joven para que lo acompañe durante una semana, pero ambos se enamoran en el proceso.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Arnon Milchan, Steven Reuther",
            "guionista": "J.F. Lawton",
            "director_fotografia": "Charles Minsky"
        },
        "detalles": {
            "duracion": "119 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BNmNlZjAxMzEtNzNlYy00ZWY4LTkwN2QtYTljZjgzZjQ2ZDU5XkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "romantic_classic",
                "contenido": "Un clásico que nunca pasa de moda. Julia Roberts es encantadora.",
                "calificacion": 4.7
            },
            {
                "usuario": "business_lover",
                "contenido": "Romántica y divertida, con grandes actuaciones.",
                "calificacion": 4.5
            }
        ]
    },
    {
        "titulo": "About Time",
        "fecha_estreno": "2013-11-08",
        "director": "Richard Curtis",
        "actores_principales": [
            "Domhnall Gleeson",
            "Rachel McAdams",
            "Bill Nighy"
        ],
        "genero": [
            "Drama",
            "Romance"
        ],
        "sinopsis": "Un joven descubre que puede viajar en el tiempo y usa esta habilidad para mejorar su vida amorosa y familiar.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "Tim Bevan, Eric Fellner",
            "guionista": "Richard Curtis",
            "director_fotografia": "John Guleserian"
        },
        "detalles": {
            "duracion": "123 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg",
        "reviews": [
            {
                "usuario": "time_traveler",
                "contenido": "Una película hermosa que te hace valorar cada momento.",
                "calificacion": 4.8
            },
            {
                "usuario": "love_and_time",
                "contenido": "Emotiva y profunda, una joya en el género romántico.",
                "calificacion": 4.7
            }
        ]
    },
    {
        "titulo": "10 Things I Hate About You",
        "fecha_estreno": "1999-03-31",
        "director": "Gil Junger",
        "actores_principales": [
            "Heath Ledger",
            "Julia Stiles",
            "Joseph Gordon-Levitt"
        ],
        "genero": [
            "Comedia",
            "Romance"
        ],
        "sinopsis": "Una moderna adaptación de 'La fierecilla domada', en la que un joven intenta salir con una chica rebelde para ayudar a su amigo a conquistar a su hermana.",
        "calificacion_general": 4.4,
        "crew": {
            "productor": "Andrew Lazar",
            "guionista": "Karen McCullah, Kirsten Smith",
            "director_fotografia": "Mark Irwin"
        },
        "detalles": {
            "duracion": "97 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BOTQwYmRhNGQtODI2Mi00ZTRlLTk0Y2QtY2NkNjE1MGNhNTgwXkEyXkFqcGc@._V1_QL75_UX190_CR0,1,190,281_.jpg",
        "reviews": [
            {
                "usuario": "shakespeare_lover",
                "contenido": "Una adaptación divertida y encantadora.",
                "calificacion": 4.5
            },
            {
                "usuario": "ledger_fan",
                "contenido": "Heath Ledger es increíble, ¡una de las mejores películas de los 90!",
                "calificacion": 4.6
            }
        ]
    },
    {
        "titulo": "The Notebook",
        "fecha_estreno": "2004-06-25",
        "director": "Nick Cassavetes",
        "actores_principales": [
            "Ryan Gosling",
            "Rachel McAdams",
            "James Garner"
        ],
        "genero": [
            "Drama",
            "Romance"
        ],
        "sinopsis": "Una pareja narra la historia de su amor a lo largo de los años, desde su primer encuentro hasta los desafíos que enfrentan.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "Lynn Harris, Mark Johnson",
            "guionista": "Jeremy Leven",
            "director_fotografia": "Robert Fraisse"
        },
        "detalles": {
            "duracion": "123 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "tear_jerker_fan",
                "contenido": "Emocional y romántica, una historia de amor que trasciende el tiempo.",
                "calificacion": 4.8
            },
            {
                "usuario": "love_story_addict",
                "contenido": "Hermosa, te hará llorar y sentir la intensidad del amor verdadero.",
                "calificacion": 4.7
            }
        ]
    },
    {
        "titulo": "Notting Hill",
        "fecha_estreno": "1999-05-28",
        "director": "Roger Michell",
        "actores_principales": [
            "Hugh Grant",
            "Julia Roberts",
            "Rhys Ifans"
        ],
        "genero": [
            "Comedia",
            "Romance"
        ],
        "sinopsis": "La vida de un tranquilo librero de Londres cambia cuando una famosa actriz entra en su tienda y comienza una inesperada relación con él.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Duncan Kenworthy",
            "guionista": "Richard Curtis",
            "director_fotografia": "Michael Coulter"
        },
        "detalles": {
            "duracion": "124 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://pics.filmaffinity.com/Notting_Hill-686655867-large.jpg",
        "reviews": [
            {
                "usuario": "british_lover",
                "contenido": "Una encantadora comedia romántica, llena de momentos divertidos y dulces.",
                "calificacion": 4.6
            },
            {
                "usuario": "movie_buff",
                "contenido": "La química entre Julia Roberts y Hugh Grant es fantástica.",
                "calificacion": 4.5
            }
        ]
    },
    {
        "titulo": "Orgullo y Prejuicio",
        "fecha_estreno": "2005-11-11",
        "director": "Joe Wright",
        "actores_principales": [
            "Keira Knightley",
            "Matthew Macfadyen",
            "Brenda Blethyn"
        ],
        "genero": [
            "Drama",
            "Romance"
        ],
        "sinopsis": "Una joven con fuertes convicciones se enfrenta a los desafíos del amor y las clases sociales en la Inglaterra del siglo XIX.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Tim Bevan, Eric Fellner",
            "guionista": "Deborah Moggach",
            "director_fotografia": "Roman Osin"
        },
        "detalles": {
            "duracion": "129 minutos",
            "clasificacion": "PG"
        },
        "poster": "https://pics.filmaffinity.com/Orgullo_y_prejuicio-197724218-large.jpg",
        "reviews": [
            {
                "usuario": "austen_fan",
                "contenido": "Una adaptación perfecta con magníficas actuaciones y paisajes impresionantes.",
                "calificacion": 5
            },
            {
                "usuario": "romance_reader",
                "contenido": "Keira Knightley brilla como Elizabeth Bennet, una de las mejores adaptaciones de Austen.",
                "calificacion": 4.9
            }
        ]
    },
    {
        "titulo": "Con Todos Menos Contigo",
        "fecha_estreno": "1990-06-01",
        "director": "Roger Young",
        "actores_principales": [
            "James Garner",
            "Sally Field",
            "Brian Kerwin"
        ],
        "genero": [
            "Comedia",
            "Romance"
        ],
        "sinopsis": "Una periodista con problemas de confianza se involucra en un triángulo amoroso mientras trata de superar su escepticismo sobre el amor.",
        "calificacion_general": 4.0,
        "crew": {
            "productor": "Jerry Bruckheimer",
            "guionista": "Richard LaGravenese",
            "director_fotografia": "Ralf D. Bode"
        },
        "detalles": {
            "duracion": "113 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BOGIyZTgxMWEtOWNkMS00NDgzLWE0Y2UtNWRjOGQyOGRlZGVhXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "romcom_addict",
                "contenido": "Divertida y encantadora, con personajes adorables.",
                "calificacion": 4.2
            },
            {
                "usuario": "love_seeker",
                "contenido": "Una comedia romántica entretenida con un toque clásico.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Crazy Rich Asians",
        "fecha_estreno": "2018-08-15",
        "director": "Jon M. Chu",
        "actores_principales": [
            "Constance Wu",
            "Henry Golding",
            "Michelle Yeoh"
        ],
        "genero": [
            "Comedia",
            "Romance"
        ],
        "sinopsis": "Una joven descubre que su novio pertenece a una de las familias más ricas de Singapur y se enfrenta a las presiones de su estatus social.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Nina Jacobson, Brad Simpson",
            "guionista": "Peter Chiarelli, Adele Lim",
            "director_fotografia": "Vanja Cernjul"
        },
        "detalles": {
            "duracion": "120 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
        "reviews": [
            {
                "usuario": "asia_glamour",
                "contenido": "Una película deslumbrante visualmente, con una historia entretenida y emocionante.",
                "calificacion": 4.6
            },
            {
                "usuario": "rich_romantic",
                "contenido": "Divertida y emocional, un giro refrescante en las comedias románticas.",
                "calificacion": 4.5
            }
        ]
    }
]
const recomendado = [
    {
        "titulo": "Harry Potter y la piedra filosofal",
        "fecha_estreno": "2001-11-16",
        "director": "Chris Columbus",
        "actores_principales": [
            "Daniel Radcliffe",
            "Emma Watson",
            "Rupert Grint"
        ],
        "genero": [
            "Aventura",
            "Fantasía"
        ],
        "sinopsis": "Un joven descubre que es un mago y asiste a un colegio de magia.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "David Heyman",
            "guionista": "Steve Kloves",
            "director_fotografia": "John Seale"
        },
        "detalles": {
            "duracion": "152 minutos",
            "clasificacion": "PG"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BYTkyYjVkNDItODc1Ny00NzA1LTkwY2YtZDUwNTlhMDk3MTZiXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "magicalfan",
                "contenido": "Una adaptación mágica de un libro icónico.",
                "calificacion": 5
            },
            {
                "usuario": "wizardsoul",
                "contenido": "Perfecto para todas las edades, pero le falta algo.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Intensamente 2",
        "fecha_estreno": "2024-06-14",
        "director": "Kaitlyn Dias",
        "actores_principales": [
            "Amy Poehler",
            "Phyllis Smith",
            "Bill Hader"
        ],
        "genero": [
            "Animación",
            "Aventura"
        ],
        "sinopsis": "Riley y sus emociones enfrentan nuevos desafíos a medida que crece.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "Jonas Rivera",
            "guionista": "Meg LeFauve, Josh Cooley",
            "director_fotografia": "Shirley Kurata"
        },
        "detalles": {
            "duracion": "95 minutos",
            "clasificacion": "PG"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        "reviews": [
            {
                "usuario": "joyfulmind",
                "contenido": "Una secuela conmovedora que no decepciona.",
                "calificacion": 5
            },
            {
                "usuario": "sadnessfan",
                "contenido": "Los personajes están tan bien desarrollados como en la primera película.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Paprika",
        "fecha_estreno": "2006-11-25",
        "director": "Satoshi Kon",
        "actores_principales": [
            "Megumi Hayashibara",
            "Tôru Furuya",
            "Katsunosuke Hori"
        ],
        "genero": [
            "Animación",
            "Ciencia ficción"
        ],
        "sinopsis": "Una psiquiatra utiliza un dispositivo que permite entrar en los sueños de los pacientes.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Toshio Suzuki",
            "guionista": "Satoshi Kon",
            "director_fotografia": "Mitsuo Iso"
        },
        "detalles": {
            "duracion": "90 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BZGJkYjkyMDUtM2U3ZC00NDM3LWI0MzItZjU5MmYwYjg2YmIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "reviews": [
            {
                "usuario": "dreamweaver",
                "contenido": "Una experiencia visual y emocional extraordinaria.",
                "calificacion": 5
            },
            {
                "usuario": "animationfan",
                "contenido": "Una obra maestra del cine de animación.",
                "calificacion": 5
            }
        ]
    },
    {
        "titulo": "Cuando acecha la maldad",
        "fecha_estreno": "2024-02-15",
        "director": "Pablo Trapero",
        "actores_principales": [
            "Ricardo Darín",
            "Martina Stoessel",
            "Joaquín Furriel"
        ],
        "genero": [
            "Drama",
            "Thriller"
        ],
        "sinopsis": "Un detective investiga un crimen que lo lleva a un oscuro submundo.",
        "calificacion_general": 4.2,
        "crew": {
            "productor": "Lita Stantic",
            "guionista": "Pablo Trapero",
            "director_fotografia": "Javier Juliá"
        },
        "detalles": {
            "duracion": "120 minutos",
            "clasificacion": "NR"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMWEwZWE1Y2UtMTllOS00YmRiLWFmNTQtZTg5MzYwMGMwMmJmXkEyXkFqcGc@._V1_.jpg",
        "reviews": [
            {
                "usuario": "thrillerlover",
                "contenido": "Intenso y atrapante, no pude despegarme de la pantalla.",
                "calificacion": 5
            },
            {
                "usuario": "suspensefan",
                "contenido": "Un gran giro en la trama que me sorprendió.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Everything Everywhere All at Once",
        "fecha_estreno": "2022-03-11",
        "director": "Daniel Kwan, Daniel Scheinert",
        "actores_principales": [
            "Michelle Yeoh",
            "Stephanie Hsu",
            "Ke Huy Quan"
        ],
        "genero": [
            "Acción",
            "Aventura"
        ],
        "sinopsis": "Una mujer común debe conectarse con versiones alternativas de sí misma para salvar el multiverso.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "Daniel Kwan, Daniel Scheinert",
            "guionista": "Daniel Kwan, Daniel Scheinert",
            "director_fotografia": "Larkin Seiple"
        },
        "detalles": {
            "duracion": "139 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg",
        "reviews": [
            {
                "usuario": "multiversefan",
                "contenido": "Una película que desafía la realidad de una forma nunca vista antes.",
                "calificacion": 5
            },
            {
                "usuario": "adventurereview",
                "contenido": "Divertida y llena de acción, pero un poco confusa.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Harry Potter y el cáliz de fuego",
        "fecha_estreno": "2005-11-18",
        "director": "Mike Newell",
        "actores_principales": [
            "Daniel Radcliffe",
            "Emma Watson",
            "Rupert Grint"
        ],
        "genero": [
            "Aventura",
            "Fantasía"
        ],
        "sinopsis": "Harry Potter compite en un peligroso torneo mágico mientras enfrenta nuevas amenazas.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "David Heyman",
            "guionista": "Steve Kloves",
            "director_fotografia": "Roger Pratt"
        },
        "detalles": {
            "duracion": "157 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_FMjpg_UX1000_.jpg",
        "reviews": [
            {
                "usuario": "wizardingfan",
                "contenido": "Un emocionante desarrollo de la historia con grandes giros.",
                "calificacion": 5
            },
            {
                "usuario": "chamberlover",
                "contenido": "Visualmente impresionante, aunque un poco largo.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Eternal Sunshine of the Spotless Mind",
        "fecha_estreno": "2004-03-19",
        "director": "Michel Gondry",
        "actores_principales": [
            "Jim Carrey",
            "Kate Winslet",
            "Tom Wilkinson"
        ],
        "genero": [
            "Romance",
            "Ciencia ficción"
        ],
        "sinopsis": "Después de una ruptura dolorosa, una pareja se somete a un procedimiento para borrar sus recuerdos mutuos.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "Steve Golin",
            "guionista": "Charlie Kaufman",
            "director_fotografia": "Ellen Kuras"
        },
        "detalles": {
            "duracion": "108 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_FMjpg_UX1000_.jpg",
        "reviews": [
            {
                "usuario": "lovestoryfan",
                "contenido": "Una exploración profunda del amor y la memoria.",
                "calificacion": 5
            },
            {
                "usuario": "mindbender",
                "contenido": "Original y conmovedora, una de las mejores películas de la década.",
                "calificacion": 5
            }
        ]
    },
    {
        "titulo": "Oldboy",
        "fecha_estreno": "2003-11-21",
        "director": "Park Chan-wook",
        "actores_principales": [
            "Choi Min-sik",
            "Yoo Ji-tae",
            "Kang Hye-jeong"
        ],
        "genero": [
            "Thriller",
            "Acción"
        ],
        "sinopsis": "Un hombre es secuestrado y encarcelado durante 15 años sin saber por qué, y busca venganza tras su liberación.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Lee Eun-joo",
            "guionista": "Park Chan-wook, Jo Hyeon-kyeong",
            "director_fotografia": "Jung Jung-hoon"
        },
        "detalles": {
            "duracion": "120 minutos",
            "clasificacion": "NR"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg",
        "reviews": [
            {
                "usuario": "thrillerjunkie",
                "contenido": "Un viaje impactante lleno de giros inesperados.",
                "calificacion": 5
            },
            {
                "usuario": "cinemalover",
                "contenido": "Oscuro y fascinante, una obra maestra del cine coreano.",
                "calificacion": 5
            }
        ]
    },
    {
        "titulo": "Carrie",
        "fecha_estreno": "1976-11-03",
        "director": "Brian De Palma",
        "actores_principales": [
            "Sissy Spacek",
            "John Travolta",
            "Piper Laurie"
        ],
        "genero": [
            "Horror",
            "Drama"
        ],
        "sinopsis": "Una adolescente con habilidades telequinéticas busca venganza después de ser acosada en la escuela.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Paul Monash",
            "guionista": "Lawrence D. Cohen",
            "director_fotografia": "Mario Tosi"
        },
        "detalles": {
            "duracion": "98 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BNjMwMDVlZjYtMWRlZS00OTU1LTlmYTQtOGViNTdmYTE0ZjRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "reviews": [
            {
                "usuario": "horrorenthusiast",
                "contenido": "Un clásico del horror que nunca pasa de moda.",
                "calificacion": 5
            },
            {
                "usuario": "psychologicalthriller",
                "contenido": "Una historia poderosa sobre el bullying y la venganza.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "The Holdovers",
        "fecha_estreno": "2023-12-01",
        "director": "Alexander Payne",
        "actores_principales": [
            "Paul Giamatti",
            "Dominique Saldana",
            "Julio Torres"
        ],
        "genero": [
            "Comedia",
            "Drama"
        ],
        "sinopsis": "Un maestro de escuela interna se queda durante las vacaciones con un estudiante problemático.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Mark Johnson",
            "guionista": "David Hemingson",
            "director_fotografia": "Phedon Papamichael"
        },
        "detalles": {
            "duracion": "126 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BOWY3MjUzZTctOTI5ZC00MDA5LTk4ZTMtZWJjNjRmMzE4ZmI2XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        "reviews": [
            {
                "usuario": "comedyfan123",
                "contenido": "Una historia conmovedora y divertida sobre relaciones humanas.",
                "calificacion": 5
            },
            {
                "usuario": "dramalover",
                "contenido": "Excelentes actuaciones, especialmente de Giamatti.",
                "calificacion": 4
            }
        ]
    }, {
        "titulo": "Uzumaki",
        "fecha_estreno": "2022-10-07",
        "director": "Akira Yamamoto",
        "actores_principales": [
            "Tina Yu",
            "Nicholas H. Boulanger",
            "Mako Tsuji"
        ],
        "genero": [
            "Horror",
            "Anime"
        ],
        "sinopsis": "En un pequeño pueblo japonés, los residentes se ven atrapados en un ciclo de horror y locura debido a una extraña obsesión con espirales.",
        "calificacion_general": 4.4,
        "crew": {
            "productor": "Production I.G",
            "guionista": "Hiroshi Nagahama",
            "director_fotografia": "Mitsuo Iso"
        },
        "detalles": {
            "duracion": "25 minutos por episodio",
            "clasificacion": "TV-MA"
        },
        "poster": "https://m.media-amazon.com/images/M/MV5BMmQwYTllODMtNGYwZC00ZDhkLWIzZWEtNWMyMTQ2YThjNTUxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "reviews": [
            {
                "usuario": "horroraficionado",
                "contenido": "Una adaptación inquietante y visualmente impresionante del manga clásico.",
                "calificacion": 5
            },
            {
                "usuario": "animespooky",
                "contenido": "La atmósfera es escalofriante, pero a veces se siente un poco lenta.",
                "calificacion": 4
            }
        ]
    }

]





function mostrar(items, nodo, aMostrar) {
    const fragment = document.createDocumentFragment();

    switch (aMostrar) {
        case 'poster':
            items.forEach((item) => {
                //let link = document.createElement('a');
                //link.href = `info.html?titulo=${encondeURIComponent(item.titulo)}&tipo=${pelicula}`;

                let img = document.createElement('img');
                img.src = item.poster;
                img.alt = "Poster pelicula";

                fragment.appendChild(img);
                //link.appendChild(img);
                //fragment.appendChild(link);
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
let popularNodo = document.getElementById('popular')
console.log(popularNodo);
mostrar(datos, popularNodo, 'poster');

/*Busco nodo de accion y ubico las imagenes*/
let accionNodo = document.getElementById('accion')
mostrar(accion, accionNodo, 'poster');

/*Busco nodo de terror y ubico las imagenes*/
let terrorNodo = document.getElementById('terror')
mostrar(terror, terrorNodo, 'poster');

/*Busco nodo de animacion y ubico las imagenes*/
let animacionNodo = document.getElementById('animacion')
mostrar(animacion, animacionNodo, 'poster');

/*Busco nodo de romance y ubico las imagenes*/
let romanceNodo = document.getElementById('romance')
mostrar(romance, romanceNodo, 'poster');

/*Busco nodo de recomendados y ubico las imagenes*/
let recomendadoNodo = document.getElementById('recomendado')
mostrar(recomendado, recomendadoNodo, 'poster');



//Para controlar el movimiento de las flechas

function moverse(nodo, direccion) {
    const carrusel = document.getElementById(nodo);

    switch (direccion) {
        case 'der':
            carrusel.style.justifyContent = 'flex-end';
            break;
        case 'iz':
            carrusel.style.justifyContent = 'flex-start';
            break;
    }
}



