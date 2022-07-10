var auto = {
    "modelo": "Lamborghini",
    "color": "rojo",
    "kilometraje": 0,
}

console.log("Datos Actuales");
console.log(auto.modelo);
console.log(auto.color);
console.log(auto.kilometraje);

delete auto.modelo;//Eliminando la propiedad modelo
console.log("\nDatos Actuales");
console.log(auto.modelo); //Undefined
console.log(auto.color);
console.log(auto.kilometraje);
