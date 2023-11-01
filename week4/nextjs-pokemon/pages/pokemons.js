const pokemons = [
    {
        "id": 44,
        "name": "gloom",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
    },
    {
        "id": 45,
        "name": "vileplume",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
    },
    {
        "id": 33,
        "name": "nidorino",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
    },
    {
        "id": 19,
        "name": "rattata",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
        "id": 20,
        "name": "raticate",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    },
    {
        "id": 58,
        "name": "growlithe",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },
    {
        "id": 37,
        "name": "vulpix",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    {
        "id": 59,
        "name": "arcanine",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    {
        "id": 60,
        "name": "poliwag",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
    },
    {
        "id": 23,
        "name": "ekans",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    {
        "id": 24,
        "name": "arbok",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    },
    {
        "id": 38,
        "name": "ninetales",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
    },
    {
        "id": 61,
        "name": "poliwhirl",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
    },
    {
        "id": 62,
        "name": "poliwrath",
        "type": [
            "water",
            "fighting"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
    },
    {
        "id": 25,
        "name": "pikachu",
        "type": [
            "electric"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
        "id": 26,
        "name": "raichu",
        "type": [
            "electric"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    },
    {
        "id": 63,
        "name": "abra",
        "type": [
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
    },
    {
        "id": 29,
        "name": "nidoran-f",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    {
        "id": 30,
        "name": "nidorina",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
    },
    {
        "id": 32,
        "name": "nidoran-m",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    {
        "id": 27,
        "name": "sandshrew",
        "type": [
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    {
        "id": 41,
        "name": "zubat",
        "type": [
            "poison",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    {
        "id": 28,
        "name": "sandslash",
        "type": [
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
    },
    {
        "id": 55,
        "name": "golduck",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
    },
    {
        "id": 56,
        "name": "mankey",
        "type": [
            "fighting"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
    },
    {
        "id": 31,
        "name": "nidoqueen",
        "type": [
            "poison",
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
    },
    {
        "id": 57,
        "name": "primeape",
        "type": [
            "fighting"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    },
    {
        "id": 67,
        "name": "machoke",
        "type": [
            "fighting"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
    },
    {
        "id": 64,
        "name": "kadabra",
        "type": [
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
    },
    {
        "id": 34,
        "name": "nidoking",
        "type": [
            "poison",
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    },
    {
        "id": 65,
        "name": "alakazam",
        "type": [
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
        "id": 36,
        "name": "clefable",
        "type": [
            "fairy"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
    },
    {
        "id": 66,
        "name": "machop",
        "type": [
            "fighting"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
    },
    {
        "id": 35,
        "name": "clefairy",
        "type": [
            "fairy"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    {
        "id": 39,
        "name": "jigglypuff",
        "type": [
            "normal",
            "fairy"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
        "id": 40,
        "name": "wigglytuff",
        "type": [
            "normal",
            "fairy"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
    },
    {
        "id": 42,
        "name": "golbat",
        "type": [
            "poison",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
    },
    {
        "id": 68,
        "name": "machamp",
        "type": [
            "fighting"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    {
        "id": 43,
        "name": "oddish",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    {
        "id": 46,
        "name": "paras",
        "type": [
            "bug",
            "grass"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    {
        "id": 69,
        "name": "bellsprout",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
    },
    {
        "id": 47,
        "name": "parasect",
        "type": [
            "bug",
            "grass"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
    },
    {
        "id": 48,
        "name": "venonat",
        "type": [
            "bug",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    {
        "id": 70,
        "name": "weepinbell",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
    },
    {
        "id": 49,
        "name": "venomoth",
        "type": [
            "bug",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
    },
    {
        "id": 50,
        "name": "diglett",
        "type": [
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    },
    {
        "id": 51,
        "name": "dugtrio",
        "type": [
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
    },
    {
        "id": 52,
        "name": "meowth",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    {
        "id": 53,
        "name": "persian",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
    },
    {
        "id": 54,
        "name": "psyduck",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    {
        "id": 71,
        "name": "victreebel",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
    },
    {
        "id": 72,
        "name": "tentacool",
        "type": [
            "water",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
    },
    {
        "id": 73,
        "name": "tentacruel",
        "type": [
            "water",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
    },
    {
        "id": 74,
        "name": "geodude",
        "type": [
            "rock",
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    {
        "id": 75,
        "name": "graveler",
        "type": [
            "rock",
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
    },
    {
        "id": 76,
        "name": "golem",
        "type": [
            "rock",
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
    },
    {
        "id": 1,
        "name": "bulbasaur",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "id": 2,
        "name": "ivysaur",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
        "id": 77,
        "name": "ponyta",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },
    {
        "id": 3,
        "name": "venusaur",
        "type": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
        "id": 4,
        "name": "charmander",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        "id": 5,
        "name": "charmeleon",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "id": 6,
        "name": "charizard",
        "type": [
            "fire",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        "id": 7,
        "name": "squirtle",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        "id": 8,
        "name": "wartortle",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
        "id": 9,
        "name": "blastoise",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
        "id": 10,
        "name": "caterpie",
        "type": [
            "bug"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
        "id": 78,
        "name": "rapidash",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
    },
    {
        "id": 11,
        "name": "metapod",
        "type": [
            "bug"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
        "id": 12,
        "name": "butterfree",
        "type": [
            "bug",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
        "id": 13,
        "name": "weedle",
        "type": [
            "bug",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
        "id": 79,
        "name": "slowpoke",
        "type": [
            "water",
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
    },
    {
        "id": 14,
        "name": "kakuna",
        "type": [
            "bug",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
        "id": 15,
        "name": "beedrill",
        "type": [
            "bug",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        "id": 80,
        "name": "slowbro",
        "type": [
            "water",
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
    },
    {
        "id": 16,
        "name": "pidgey",
        "type": [
            "normal",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
        "id": 81,
        "name": "magnemite",
        "type": [
            "electric",
            "steel"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
    },
    {
        "id": 17,
        "name": "pidgeotto",
        "type": [
            "normal",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
        "id": 18,
        "name": "pidgeot",
        "type": [
            "normal",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    {
        "id": 21,
        "name": "spearow",
        "type": [
            "normal",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    {
        "id": 22,
        "name": "fearow",
        "type": [
            "normal",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    },
    {
        "id": 82,
        "name": "magneton",
        "type": [
            "electric",
            "steel"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
    },
    {
        "id": 83,
        "name": "farfetchd",
        "type": [
            "normal",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
    },
    {
        "id": 84,
        "name": "doduo",
        "type": [
            "normal",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
    },
    {
        "id": 85,
        "name": "dodrio",
        "type": [
            "normal",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
    },
    {
        "id": 86,
        "name": "seel",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
    },
    {
        "id": 87,
        "name": "dewgong",
        "type": [
            "water",
            "ice"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
    },
    {
        "id": 88,
        "name": "grimer",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
    },
    {
        "id": 89,
        "name": "muk",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
    },
    {
        "id": 90,
        "name": "shellder",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
    },
    {
        "id": 91,
        "name": "cloyster",
        "type": [
            "water",
            "ice"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
    },
    {
        "id": 92,
        "name": "gastly",
        "type": [
            "ghost",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
    },
    {
        "id": 93,
        "name": "haunter",
        "type": [
            "ghost",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
    },
    {
        "id": 94,
        "name": "gengar",
        "type": [
            "ghost",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
        "id": 129,
        "name": "magikarp",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
    },
    {
        "id": 132,
        "name": "ditto",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    },
    {
        "id": 95,
        "name": "onix",
        "type": [
            "rock",
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
    },
    {
        "id": 96,
        "name": "drowzee",
        "type": [
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
    },
    {
        "id": 97,
        "name": "hypno",
        "type": [
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
    },
    {
        "id": 98,
        "name": "krabby",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
        "id": 99,
        "name": "kingler",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
    },
    {
        "id": 100,
        "name": "voltorb",
        "type": [
            "electric"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
    },
    {
        "id": 101,
        "name": "electrode",
        "type": [
            "electric"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
        "id": 102,
        "name": "exeggcute",
        "type": [
            "grass",
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
    },
    {
        "id": 103,
        "name": "exeggutor",
        "type": [
            "grass",
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
    },
    {
        "id": 104,
        "name": "cubone",
        "type": [
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
    },
    {
        "id": 105,
        "name": "marowak",
        "type": [
            "ground"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
    },
    {
        "id": 106,
        "name": "hitmonlee",
        "type": [
            "fighting"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
    },
    {
        "id": 107,
        "name": "hitmonchan",
        "type": [
            "fighting"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
    },
    {
        "id": 108,
        "name": "lickitung",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
    },
    {
        "id": 109,
        "name": "koffing",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
    },
    {
        "id": 110,
        "name": "weezing",
        "type": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
    },
    {
        "id": 111,
        "name": "rhyhorn",
        "type": [
            "ground",
            "rock"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
    },
    {
        "id": 112,
        "name": "rhydon",
        "type": [
            "ground",
            "rock"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
        "id": 113,
        "name": "chansey",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
    },
    {
        "id": 114,
        "name": "tangela",
        "type": [
            "grass"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
    },
    {
        "id": 115,
        "name": "kangaskhan",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
    },
    {
        "id": 116,
        "name": "horsea",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
    },
    {
        "id": 117,
        "name": "seadra",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
    },
    {
        "id": 118,
        "name": "goldeen",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
    },
    {
        "id": 119,
        "name": "seaking",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
    },
    {
        "id": 120,
        "name": "staryu",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
    },
    {
        "id": 121,
        "name": "starmie",
        "type": [
            "water",
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
    },
    {
        "id": 122,
        "name": "mr-mime",
        "type": [
            "psychic",
            "fairy"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    },
    {
        "id": 123,
        "name": "scyther",
        "type": [
            "bug",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    {
        "id": 124,
        "name": "jynx",
        "type": [
            "ice",
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
    },
    {
        "id": 125,
        "name": "electabuzz",
        "type": [
            "electric"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
    },
    {
        "id": 126,
        "name": "magmar",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
    },
    {
        "id": 127,
        "name": "pinsir",
        "type": [
            "bug"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
    },
    {
        "id": 128,
        "name": "tauros",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    },
    {
        "id": 130,
        "name": "gyarados",
        "type": [
            "water",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
        "id": 131,
        "name": "lapras",
        "type": [
            "water",
            "ice"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    {
        "id": 133,
        "name": "eevee",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
        "id": 134,
        "name": "vaporeon",
        "type": [
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },
    {
        "id": 135,
        "name": "jolteon",
        "type": [
            "electric"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    {
        "id": 136,
        "name": "flareon",
        "type": [
            "fire"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
    },
    {
        "id": 137,
        "name": "porygon",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
    },
    {
        "id": 138,
        "name": "omanyte",
        "type": [
            "rock",
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
    },
    {
        "id": 139,
        "name": "omastar",
        "type": [
            "rock",
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
    },
    {
        "id": 140,
        "name": "kabuto",
        "type": [
            "rock",
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
    },
    {
        "id": 141,
        "name": "kabutops",
        "type": [
            "rock",
            "water"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
    },
    {
        "id": 142,
        "name": "aerodactyl",
        "type": [
            "rock",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
    },
    {
        "id": 143,
        "name": "snorlax",
        "type": [
            "normal"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
        "id": 144,
        "name": "articuno",
        "type": [
            "ice",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
    },
    {
        "id": 145,
        "name": "zapdos",
        "type": [
            "electric",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
    },
    {
        "id": 146,
        "name": "moltres",
        "type": [
            "fire",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
    },
    {
        "id": 147,
        "name": "dratini",
        "type": [
            "dragon"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
    },
    {
        "id": 148,
        "name": "dragonair",
        "type": [
            "dragon"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
    },
    {
        "id": 149,
        "name": "dragonite",
        "type": [
            "dragon",
            "flying"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
        "id": 150,
        "name": "mewtwo",
        "type": [
            "psychic"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    }
]
export default pokemons