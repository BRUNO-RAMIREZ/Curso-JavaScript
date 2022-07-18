const numeros = [1,2,3];

function sumar(x,y,z){
    console.log(x, y, z);
    return x + y + z;
}

console.log(sumar(...numeros));
