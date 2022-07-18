let ganadores = {
    "Primero": "Juan",
    "Segundo": "Lucas",
    "Tercero": "Cesar"
};
Object.freeze(ganadores);
ganadores.Segundo = "Tomas"; //No es posible cambiarlo
ganadores.Cuarto = "Pedro"; //No es posible añadir
console.log(ganadores);