var arreglo = [[1,2,3],[3,4,5],[6,7,8]];

for(var i=0; i<arreglo.length; i++){
    var subArreglo = arreglo[i];
    console.log(subArreglo);
    for(var j=0; j<subArreglo.length; j++){
        console.log(subArreglo[j]);
    }
}