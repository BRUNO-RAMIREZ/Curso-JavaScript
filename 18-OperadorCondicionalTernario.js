function retornarMayor(x,y){
    return x == y ? "ambos son iguales"
         : x > y ? "x es mayor que y"
         : "y es mayor que x";
}
console.log(retornarMayor(5,3));
console.log(retornarMayor(2,4));
console.log(retornarMayor(2,2));