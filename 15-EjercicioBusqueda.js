var autos = [
    {
    "modelo": "Lamborghini",
    "color": "rojo",
    "matricula": "111-A",
    "kilometraje": 0
    },
    {
    "modelo": "Ferrari",
    "color": "azul",
    "matricula": "222-B",
    "kilometraje": 30
    },
    {
    "modelo": "Lamborghini",
    "color": "plomo oscuro",
    "matricula": "333-C",
    "kilometraje": 25
    },
    {
    "modelo": "Toyota",
    "color": "violeta",
    "matricula": "444-D",
    "kilometraje": 15
    }   
];

function buscarCoche(matricula, propiedad){
    for(var i=0; i<autos.length; i++){
        if(autos[i].matricula == matricula){
            return autos[i][propiedad] || "La propiedad del auto no se encuentra";
        }
    }
    return "El auto no se encuentra en la lista";
}

console.log(buscarCoche("222-B","modelo"));