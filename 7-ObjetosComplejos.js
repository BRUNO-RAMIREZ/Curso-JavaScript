//Arreglos de Objetos
var videojuegos = [
    {
        "Nombre": "DragonKingth2",
        "Desarrollador": [
            "Jysaw",
            "Kira"
        ],
        "Genero": "Terror",
        "Precio": 10.15,
        "Disponible": true
    },
    {
        "Nombre": "Soccer159",
        "Desarrollador": [
            "Tuugle",
            "Quimera"
        ],
        "Genero": "Deportes",
        "Precio": 10.16,
        "Disponible": false
    }
];

console.log(videojuegos[0]);
console.log(videojuegos[1]["Precio"]);
console.log(videojuegos[1].Genero);