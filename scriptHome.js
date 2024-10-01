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
const terror = [
    {
        "titulo": "El Conjuro",
        "fecha_estreno": "2013-07-19",
        "director": "James Wan",
        "actores_principales": [
            "Vera Farmiga",
            "Patrick Wilson",
            "Lili Taylor"
        ],
        "genero": [
            "Terror",
            "Suspenso"
        ],
        "sinopsis": "Una pareja de investigadores paranormales ayuda a una familia aterrorizada por una oscura presencia en su granja.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "Peter Safran",
            "guionista": "Chad Hayes, Carey W. Hayes",
            "director_fotografia": "John R. Leonetti"
        },
        "detalles": {
            "duracion": "112 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/71rPY2AGY-L._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "scaremaster",
                "contenido": "Tensión constante y grandes sustos. ¡Un clásico moderno!",
                "calificacion": 5
            },
            {
                "usuario": "hauntedhouseaddict",
                "contenido": "Me encantó, pero no lo veré de nuevo de noche.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Hereditary",
        "fecha_estreno": "2018-06-08",
        "director": "Ari Aster",
        "actores_principales": [
            "Toni Collette",
            "Gabriel Byrne",
            "Alex Wolff"
        ],
        "genero": [
            "Terror",
            "Drama"
        ],
        "sinopsis": "Después de la muerte de su madre, una familia descubre oscuros secretos que amenazan su unidad y cordura.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Ari Aster, Lars Knudsen",
            "guionista": "Ari Aster",
            "director_fotografia": "Pawel Pogorzelski"
        },
        "detalles": {
            "duracion": "127 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/71y6mVdo5DL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "fearseeker",
                "contenido": "Una experiencia aterradora y emocional. Simplemente brillante.",
                "calificacion": 5
            },
            {
                "usuario": "darknightshade",
                "contenido": "Demasiado perturbadora para mí, pero muy bien hecha.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "La Llamada",
        "fecha_estreno": "2002-10-25",
        "director": "Gore Verbinski",
        "actores_principales": [
            "Naomi Watts",
            "Martin Henderson",
            "David Dorfman"
        ],
        "genero": [
            "Terror",
            "Misterio"
        ],
        "sinopsis": "Una periodista investiga una misteriosa cinta de video que provoca la muerte de quien la ve en siete días.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "Sam Mercer, Eric Hedayat",
            "guionista": "Jacob Estes",
            "director_fotografia": "Bojan Bazelli"
        },
        "detalles": {
            "duracion": "115 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/71sM9Rl6GtL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "tapeviewer",
                "contenido": "¡Un verdadero clásico del terror psicológico!",
                "calificacion": 5
            },
            {
                "usuario": "spooky_susan",
                "contenido": "Los sustos me dejaron sin aliento. Muy efectiva.",
                "calificacion": 4
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
            "Vilhelm Blomgren"
        ],
        "genero": [
            "Terror",
            "Drama"
        ],
        "sinopsis": "Una pareja viaja a Suecia para un festival de verano, solo para encontrarse atrapados en un culto pagano.",
        "calificacion_general": 4.3,
        "crew": {
            "productor": "Ari Aster, Patrik Andersson",
            "guionista": "Ari Aster",
            "director_fotografia": "Pawel Pogorzelski"
        },
        "detalles": {
            "duracion": "147 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/81R7OJl4MjL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "cultfanatic",
                "contenido": "Una obra maestra del horror visual y psicológico.",
                "calificacion": 5
            },
            {
                "usuario": "sunlovers",
                "contenido": "No es lo que esperaba, pero me dejó pensando.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "El Exorcista",
        "fecha_estreno": "1973-12-26",
        "director": "William Friedkin",
        "actores_principales": [
            "Ellen Burstyn",
            "Max von Sydow",
            "Linda Blair"
        ],
        "genero": [
            "Terror",
            "Suspenso"
        ],
        "sinopsis": "Una madre busca ayuda para su hija, quien está poseída por una fuerza demoníaca.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "William Peter Blatty, Richard Lederer",
            "guionista": "William Peter Blatty",
            "director_fotografia": "Owen Roizman"
        },
        "detalles": {
            "duracion": "132 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/61cYqFzKStL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "horrorhistorian",
                "contenido": "El mejor terror psicológico de todos los tiempos.",
                "calificacion": 5
            },
            {
                "usuario": "possessedfan",
                "contenido": "Nunca olvidaré esa escena del exorcismo.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "It Follows",
        "fecha_estreno": "2014-03-13",
        "director": "David Robert Mitchell",
        "actores_principales": [
            "Maika Monroe",
            "Keir Gilchrist",
            "Olivia Luccardi"
        ],
        "genero": [
            "Terror",
            "Suspenso"
        ],
        "sinopsis": "Una joven es perseguida por una entidad sobrenatural después de una experiencia sexual.",
        "calificacion_general": 4.4,
        "crew": {
            "productor": "Rebecca Green, Chris Campbell",
            "guionista": "David Robert Mitchell",
            "director_fotografia": "Mike Gioulakis"
        },
        "detalles": {
            "duracion": "100 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/71InyPCWaeL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "fearnot",
                "contenido": "Concepto original y ejecución aterradora.",
                "calificacion": 5
            }

        ]
    }
]
const accion = [
    {
        "titulo": "Mad Max: Furia en la carretera",
        "fecha_estreno": "2015-05-15",
        "director": "George Miller",
        "actores_principales": [
            "Tom Hardy",
            "Charlize Theron",
            "Nicholas Hoult"
        ],
        "genero": [
            "Acción",
            "Aventura",
            "Ciencia Ficción"
        ],
        "sinopsis": "En un mundo postapocalíptico, Max se une a un grupo de rebeldes que intentan escapar de un tirano en una carrera por la supervivencia.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "George Miller, Doug Mitchell",
            "guionista": "George Miller, Brendan McCarthy, Nick Lathouris",
            "director_fotografia": "John Seale"
        },
        "detalles": {
            "duracion": "120 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/81xV8mztN6L._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "actionjunkie",
                "contenido": "Una obra maestra visual llena de acción intensa.",
                "calificacion": 5
            },
            {
                "usuario": "carlover123",
                "contenido": "Las secuencias de persecución son increíbles.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "John Wick",
        "fecha_estreno": "2014-10-24",
        "director": "Chad Stahelski",
        "actores_principales": [
            "Keanu Reeves",
            "Michael Nyqvist",
            "Alfie Allen"
        ],
        "genero": [
            "Acción",
            "Suspenso"
        ],
        "sinopsis": "Un exasesino a sueldo regresa al mundo del crimen para vengar la muerte de su perro, un regalo de su difunta esposa.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "Basil Iwanyk, Keanu Reeves",
            "guionista": "Derek Kolstad",
            "director_fotografia": "Jonathan Sela"
        },
        "detalles": {
            "duracion": "101 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/71wbXjS+wwL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "wickfan88",
                "contenido": "Keanu Reeves es legendario en este papel.",
                "calificacion": 5
            },
            {
                "usuario": "actionlover",
                "contenido": "La coreografía de las peleas es espectacular.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Los Vengadores",
        "fecha_estreno": "2012-05-04",
        "director": "Joss Whedon",
        "actores_principales": [
            "Robert Downey Jr.",
            "Chris Evans",
            "Scarlett Johansson"
        ],
        "genero": [
            "Acción",
            "Aventura",
            "Ciencia Ficción"
        ],
        "sinopsis": "Los héroes más poderosos de la Tierra deben unirse para detener a Loki y su ejército de alienígenas.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "Kevin Feige",
            "guionista": "Joss Whedon",
            "director_fotografia": "Seamus McGarvey"
        },
        "detalles": {
            "duracion": "143 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/71RblR4Yh-L._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "marvelfan",
                "contenido": "El equipo de superhéroes funciona a la perfección.",
                "calificacion": 5
            },
            {
                "usuario": "comiclover",
                "contenido": "Un evento épico que no te puedes perder.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Gladiador",
        "fecha_estreno": "2000-05-05",
        "director": "Ridley Scott",
        "actores_principales": [
            "Russell Crowe",
            "Joaquin Phoenix",
            "Connie Nielsen"
        ],
        "genero": [
            "Acción",
            "Aventura",
            "Drama"
        ],
        "sinopsis": "Un general romano es traicionado y convertido en esclavo, y lucha por su libertad en la arena del Coliseo.",
        "calificacion_general": 4.9,
        "crew": {
            "productor": "Douglas Wick, David Franzoni",
            "guionista": "David Franzoni, John Logan, William Nicholson",
            "director_fotografia": "Joaquín Sedillo"
        },
        "detalles": {
            "duracion": "155 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/81Gm7KZ38AL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "historicalfan",
                "contenido": "Una épica historia de venganza y redención.",
                "calificacion": 5
            },
            {
                "usuario": "actionbuff",
                "contenido": "Las batallas son impresionantes y bien filmadas.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Die Hard",
        "fecha_estreno": "1988-07-20",
        "director": "John McTiernan",
        "actores_principales": [
            "Bruce Willis",
            "Alan Rickman",
            "Bonnie Bedelia"
        ],
        "genero": [
            "Acción",
            "Suspenso"
        ],
        "sinopsis": "Un policía de Nueva York intenta salvar a un grupo de rehenes en un rascacielos de Los Ángeles tomado por terroristas.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "Jerry Bruckheimer, Joel Silver",
            "guionista": "Jeb Stuart, Steven E. de Souza",
            "director_fotografia": "Jan de Bont"
        },
        "detalles": {
            "duracion": "132 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/71k3WcXyYtL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "actionhero",
                "contenido": "El clásico de acción por excelencia.",
                "calificacion": 5
            },
            {
                "usuario": "suspensefan",
                "contenido": "Alan Rickman es el villano perfecto.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Rápido y Furioso",
        "fecha_estreno": "2001-06-22",
        "director": "Rob Cohen",
        "actores_principales": [
            "Paul Walker",
            "Vin Diesel",
            "Michelle Rodriguez"
        ],
        "genero": [
            "Acción",
            "Crimen"
        ],
        "sinopsis": "Un policía encubierto se infiltra en el mundo de las carreras callejeras para atrapar a un grupo de ladrones de vehículos.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Gary Scott Thompson, Neal H. Moritz",
            "guionista": "Gary Scott Thompson",
            "director_fotografia": "Ericson Core"
        },
        "detalles": {
            "duracion": "106 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/91qO-6dMwvL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "carenthusiast",
                "contenido": "Acción trepidante y coches impresionantes.",
                "calificacion": 5
            },
            {
                "usuario": "racerboy",
                "contenido": "Un gran comienzo para una franquicia icónica.",
                "calificacion": 4
            }
        ]
    }
]
const romanticas = [
    {
        "titulo": "El diario de una pasión",
        "fecha_estreno": "2004-06-25",
        "director": "Nick Cassavetes",
        "actores_principales": [
            "Ryan Gosling",
            "Rachel McAdams",
            "James Garner"
        ],
        "genero": [
            "Romance",
            "Drama"
        ],
        "sinopsis": "La historia de amor entre Noah y Allie, que lucha contra las adversidades y el paso del tiempo.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Ryan Gosling, Nick Cassavetes",
            "guionista": "Jeremy Leven, Jan Sardi",
            "director_fotografia": "Robert Fraisse"
        },
        "detalles": {
            "duracion": "123 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/71bt4yWl7IL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "romanticheart",
                "contenido": "Una hermosa historia que me hizo llorar.",
                "calificacion": 5
            },
            {
                "usuario": "lovefanatic",
                "contenido": "La química entre los actores es mágica.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "500 días con ella",
        "fecha_estreno": "2009-07-17",
        "director": "Marc Webb",
        "actores_principales": [
            "Joseph Gordon-Levitt",
            "Zooey Deschanel",
            "Geoffrey Arend"
        ],
        "genero": [
            "Romance",
            "Comedia"
        ],
        "sinopsis": "Un joven recuerda su relación con una chica que no cree en el amor verdadero.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "Mark Waters, Jessica Tuchinsky",
            "guionista": "Scott Neustadter, Michael H. Weber",
            "director_fotografia": "Eric Steelberg"
        },
        "detalles": {
            "duracion": "95 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/81+DDEx0pOL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "indie_love",
                "contenido": "Una historia realista y conmovedora sobre el amor.",
                "calificacion": 5
            },
            {
                "usuario": "nostalgic",
                "contenido": "La narrativa no lineal es brillante.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Orgullo y prejuicio",
        "fecha_estreno": "2005-11-11",
        "director": "Joe Wright",
        "actores_principales": [
            "Keira Knightley",
            "Matthew Macfadyen",
            "Rosamund Pike"
        ],
        "genero": [
            "Romance",
            "Drama"
        ],
        "sinopsis": "La relación entre Elizabeth Bennet y el orgulloso señor Darcy se complica por los prejuicios sociales.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "Tim Bevan, Eric Fellner",
            "guionista": "Deborah Moggach",
            "director_fotografia": "Roman Osin"
        },
        "detalles": {
            "duracion": "129 minutos",
            "clasificacion": "PG"
        },
        "poster": "https://m.media-amazon.com/images/I/71o1kTWoa5L._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "classicliteraturefan",
                "contenido": "Una adaptación hermosa y fiel de la novela.",
                "calificacion": 5
            },
            {
                "usuario": "perioddramaaddict",
                "contenido": "Las actuaciones son excepcionales.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "La La Land",
        "fecha_estreno": "2016-12-09",
        "director": "Damien Chazelle",
        "actores_principales": [
            "Ryan Gosling",
            "Emma Stone",
            "John Legend"
        ],
        "genero": [
            "Romance",
            "Musical"
        ],
        "sinopsis": "Un músico y una actriz se enamoran mientras persiguen sus sueños en Los Ángeles.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Fred Berger, Jordan Horowitz",
            "guionista": "Damien Chazelle",
            "director_fotografia": "Linus Sandgren"
        },
        "detalles": {
            "duracion": "128 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/81B0rK8kAeL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "musiclover",
                "contenido": "Un homenaje a los sueños y el amor.",
                "calificacion": 5
            },
            {
                "usuario": "cinemagic",
                "contenido": "Visualmente deslumbrante y emocionalmente impactante.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Bajo la misma estrella",
        "fecha_estreno": "2014-06-06",
        "director": "Josh Boone",
        "actores_principales": [
            "Shailene Woodley",
            "Ansel Elgort",
            "Nat Wolff"
        ],
        "genero": [
            "Romance",
            "Drama"
        ],
        "sinopsis": "Dos adolescentes con cáncer se enamoran y emprenden un viaje para encontrar un autor que admiran.",
        "calificacion_general": 4.5,
        "crew": {
            "productor": "Wyck Godfrey, Marty Bowen",
            "guionista": "Scott Neustadter, Michael H. Weber",
            "director_fotografia": "Ben Richardson"
        },
        "detalles": {
            "duracion": "126 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/81g1PtJ1WwL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "tearjerker",
                "contenido": "Una historia de amor hermosa y desgarradora.",
                "calificacion": 5
            },
            {
                "usuario": "romanticdreamer",
                "contenido": "Imposible no llorar con esta película.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "Querido John",
        "fecha_estreno": "2010-02-05",
        "director": "Lasse Hallström",
        "actores_principales": [
            "Channing Tatum",
            "Amanda Seyfried",
            "Richard Jenkins"
        ],
        "genero": [
            "Romance",
            "Drama"
        ],
        "sinopsis": "Un soldado y una estudiante se enamoran, pero su relación se pone a prueba por la distancia.",
        "calificacion_general": 4.4,
        "crew": {
            "productor": "Ryan Kavanaugh, Nicholas Sparks",
            "guionista": "Jamie Linden",
            "director_fotografia": "J. Michael Muro"
        },
        "detalles": {
            "duracion": "108 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/81kl3HE7A3L._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "lovestory",
                "contenido": "Una historia de amor conmovedora.",
                "calificacion": 5
            },
            {
                "usuario": "dramaqueen",
                "contenido": "No es tan buena como el libro, pero aún así me gustó.",
                "calificacion": 4
            }
        ]
    }
]
const drama = [
    {
        "titulo": "El pianista",
        "fecha_estreno": "2002-12-25",
        "director": "Roman Polanski",
        "actores_principales": [
            "Adrien Brody",
            "Thomas Kretschmann",
            "Frank Finlay"
        ],
        "genero": [
            "Drama",
            "Biografía"
        ],
        "sinopsis": "La historia real de un pianista judío que lucha por sobrevivir en Varsovia durante la Segunda Guerra Mundial.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Roman Polanski, Robert Benmussa",
            "guionista": "Ronald Harwood",
            "director_fotografia": "Paweł Edelman"
        },
        "detalles": {
            "duracion": "150 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/81x1ryOOfzL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "historybuff",
                "contenido": "Una actuación desgarradora y conmovedora.",
                "calificacion": 5
            },
            {
                "usuario": "cinemagic",
                "contenido": "Impresionante en todos los sentidos.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "La vida es bella",
        "fecha_estreno": "1997-12-20",
        "director": "Roberto Benigni",
        "actores_principales": [
            "Roberto Benigni",
            "Nicoletta Braschi",
            "Giosuè Benigni"
        ],
        "genero": [
            "Drama",
            "Comedia"
        ],
        "sinopsis": "Un padre utiliza su imaginación para proteger a su hijo de los horrores de un campo de concentración durante la Segunda Guerra Mundial.",
        "calificacion_general": 4.9,
        "crew": {
            "productor": "Giorgio Produzioni, Nicoletta Braschi",
            "guionista": "Roberto Benigni, Vincenzo Cerami",
            "director_fotografia": "Tonino Delli Colli"
        },
        "detalles": {
            "duracion": "116 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/81cWbGE9KEL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "emotionalwatcher",
                "contenido": "Una historia de amor y esperanza increíblemente conmovedora.",
                "calificacion": 5
            },
            {
                "usuario": "dramaqueen",
                "contenido": "Es una montaña rusa emocional.",
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
            "Comedia"
        ],
        "sinopsis": "La vida de un hombre con un coeficiente intelectual bajo, que se convierte en testigo de momentos clave de la historia estadounidense.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Wendy Finerman, Steve Tisch",
            "guionista": "Eric Roth",
            "director_fotografia": "Don Burgess"
        },
        "detalles": {
            "duracion": "142 minutos",
            "clasificacion": "PG-13"
        },
        "poster": "https://m.media-amazon.com/images/I/51YpF0EqO6L._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "timetraveler",
                "contenido": "Una historia atemporal llena de vida y amor.",
                "calificacion": 5
            },
            {
                "usuario": "cinemaenthusiast",
                "contenido": "Un clásico que siempre tocará el corazón.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "El secreto de sus ojos",
        "fecha_estreno": "2009-08-13",
        "director": "Juan José Campanella",
        "actores_principales": [
            "Ricardo Darín",
            "Soledad Villamil",
            "Pablo Rago"
        ],
        "genero": [
            "Drama",
            "Suspenso"
        ],
        "sinopsis": "Un exfuncionario judicial investiga un caso de asesinato sin resolver que lo conecta con un amor del pasado.",
        "calificacion_general": 4.7,
        "crew": {
            "productor": "Juan José Campanella, Gustavo Gaviola",
            "guionista": "Juan José Campanella, Eduardo Sacheri",
            "director_fotografia": "Óscar Faura"
        },
        "detalles": {
            "duracion": "129 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/71Vx5k-nGIL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "thrillerlover",
                "contenido": "Una mezcla perfecta de romance y misterio.",
                "calificacion": 5
            },
            {
                "usuario": "argentinocinema",
                "contenido": "Una joya del cine argentino.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "12 años de esclavitud",
        "fecha_estreno": "2013-10-18",
        "director": "Steve McQueen",
        "actores_principales": [
            "Chiwetel Ejiofor",
            "Michael Fassbender",
            "Lupita Nyong'o"
        ],
        "genero": [
            "Drama",
            "Historia"
        ],
        "sinopsis": "La historia real de Solomon Northup, un hombre libre que fue secuestrado y vendido como esclavo en el sur de Estados Unidos.",
        "calificacion_general": 4.8,
        "crew": {
            "productor": "Brad Pitt, Dede Gardner",
            "guionista": "John Ridley",
            "director_fotografia": "Sean Bobbitt"
        },
        "detalles": {
            "duracion": "134 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/71Xez42s6kL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "historian",
                "contenido": "Una representación poderosa y necesaria de la historia.",
                "calificacion": 5
            },
            {
                "usuario": "dramaexpert",
                "contenido": "Desgarradora y profundamente conmovedora.",
                "calificacion": 4
            }
        ]
    },
    {
        "titulo": "La naranja mecánica",
        "fecha_estreno": "1971-12-19",
        "director": "Stanley Kubrick",
        "actores_principales": [
            "Malcolm McDowell",
            "Patrick Magee",
            "Michael Bates"
        ],
        "genero": [
            "Drama",
            "Ciencia Ficción"
        ],
        "sinopsis": "En un futuro distópico, un joven se embarca en una serie de crímenes y se somete a un experimento de rehabilitación.",
        "calificacion_general": 4.6,
        "crew": {
            "productor": "Stanley Kubrick, Terry Southern",
            "guionista": "Stanley Kubrick, Anthony Burgess",
            "director_fotografia": "John Alcott"
        },
        "detalles": {
            "duracion": "136 minutos",
            "clasificacion": "R"
        },
        "poster": "https://m.media-amazon.com/images/I/81rYpehZ+QL._AC_SY679_.jpg",
        "reviews": [
            {
                "usuario": "cultfilmfan",
                "contenido": "Una película provocativa y única.",
                "calificacion": 5
            },
            {
                "usuario": "cinemalover",
                "contenido": "Impactante y visualmente impresionante.",
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
let popularcarousel = document.getElementById('popularCarousel')
mostrar(datos, popularcarousel, 'poster');

let proximamente = document.getElementById('proximamente')
mostrar(datos, proximamente, 'poster');

const carrusel = document.getElementById('popularCarousel');
const flechaDerecha = document.getElementById('derecha')
const flechaIzquierda = document.getElementById('izquierda')



flechaDerecha.addEventListener("click", () => {
    console.log(flechaDerecha.id);
    carrusel.style.transform = 'translateX(+30px)';
})

flechaIzquierda.addEventListener("click", () => {
    console.log(flechaIzquierda.id);
    carrusel.scrollLeft;
    carrusel.style.transform = 'translateX(-30px)';
})
