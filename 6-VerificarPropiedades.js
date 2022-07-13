function verificarPropiedad(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    }else{
        return "El objeto no tiene esa propiedad.";
    }
}

var laptop = { 
    "Camara Web": "Creative Live! Cam Sync HD",
    "Ram": "4Gb",
    "Procesador": "Intel Core I5"
};

console.log(verificarPropiedad(laptop,"Camara Web"));