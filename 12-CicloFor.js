var arreglo = [];
for(var i=2; i<=20; i+=2){
    arreglo.push(i);
}
console.log(arreglo);
var suma = 0;
for(var i=0; i<arreglo.length; i++){
    suma += arreglo[i];
}
console.log("La suma de los elementos del arreglo es: "+suma);