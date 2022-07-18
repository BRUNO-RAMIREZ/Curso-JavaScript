var numeros = [1,2,3,4,5,6,7,8];
while(numeros.length > 4 ){
    numeros.pop();
}
console.log(numeros);

console.log("\nNumeros Fibonacci");
var a=1, b=1, c;
for(var i=2; i<10; i++){
    c = a+b;
    a = b;
    b = c;
    console.log(c + " "); 
}