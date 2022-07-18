/*Funciones anonimas, sin nombre. Usadas mayormente cuando se pasa como argumento a otra funcion*/
/*
const concatenarArreglos = function(arr1,arr2){
    return arr1.concat(arr2);
};*/

const concatenarArreglos = (arr1,arr2) => arr1.concat(arr2);
console.log(concatenarArreglos([1,2],[3,4,5]));

const suma = (a, b) => {
    let c = 2;
    return a + b + c;
};
console.log(suma(3,1));

const incrementar = (x,y=1) => x+y;
console.log(incrementar(2));