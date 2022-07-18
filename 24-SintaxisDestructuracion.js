var coordenadas = {
    x:4,
    y:6,
    z:12
};
const {x, y, z} = coordenadas;
console.log(x);
console.log(y);
console.log(z);
console.log("\n");
///////////////////Para Objetos Anidados
const usuario = {
    diego:{
        edad:20,
        correo:"diego@gmail.com"
    }
};
const {diego:{edad,correo}} = usuario;
console.log(edad, correo);
console.log("\n");
///////////////////////////
const pronostico = {
    "hoy":{
        minima:60,
        maxima:70
    },
    "mañana":{
        minima:75,
        maxima:80
    }
};
const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = pronostico;
console.log(minimaHoy, maximaHoy);
/////////////Sintaxis de desestructuración: arreglos
var a;
var b;
var c;
[a, b] = [1,2];
console.log(a);
console.log(b);
//////////////////
[a, b,,, c] = [1,2,3,4,5,6];
console.log(a);
console.log(b);
console.log(c);
//////////////////
var m=2;
var n=5;
[n, m] = [m, n];
console.log("m: " + m);
console.log("n: " + n); 
//Sintaxis de desestructuración con el operador rest
var a;
var b;
var arr;
[a, b, ...arr] = [1,2,3,4,5,6,7,8];
console.log(a);
console.log(b);
console.log(arr);
/////
const arregloInicial = [1,2,3,4,5,6,7,8];
function removerTresPrimerosElementos(arreglo){
    const [, , , ...nuevoArreglo] = arreglo;
    return nuevoArreglo;
} 
const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);
///Sintaxis de desestructuración: pasar objeto como argumento
var nuevoPerfilCliente = {
    nombre: "Samuel",
    edad: 24,
    nacionalidad: "Boliviano"
};
const actualizarPerfil = ({nombre, edad}) => {
    console.log(nombre);
    console.log(edad);
};
actualizarPerfil(nuevoPerfilCliente);