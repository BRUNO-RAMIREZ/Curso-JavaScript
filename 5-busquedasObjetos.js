function buscarDatosCoche(matricula){
    var datosCoches = {
        "0001-A": ["Ferrari","Rojo","2017"],
        "0002-B": ["Toyota","Azul","2015"],
        "0003-C": ["Kya","Negro","2018"],
        "0004-D": ["Jassan","Plomo Oscuro","2012"]
    };
    return datosCoches[matricula];
}

console.log(buscarDatosCoche("0001-A"));
console.log(buscarDatosCoche("0002-B"));
console.log(buscarDatosCoche("0003-C"));
console.log(buscarDatosCoche("0004-D"));