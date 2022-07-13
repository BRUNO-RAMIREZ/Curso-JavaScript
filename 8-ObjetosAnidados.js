var receta = {
    "precio": 1.85,
    "masa": {
        "harina": "200gr",
        "sal": "1 cucharadita",
        "agua": "1 taza"
    },
    "cobertura": {
        "azucar": "150gr",
        "crema de leche": "50gr",
        "chispas de chocolate": "20gr"
    }
};

console.log(receta.masa.harina);
console.log(receta.masa.sal);
console.log(receta.masa.agua);
console.log(receta.cobertura["azucar"]);
console.log(receta.cobertura["crema de leche"]);
console.log(receta.cobertura["chispas de chocolate"]);