//var a diferencia de let tiene mas alcance con respecto al ambito de una variable
//var -> Ambito Global o dentro de una funcion
//let -> Ambito Local
var saludo = "Hola Mundo";
function saludar(){
    let complemento = " Buenos Dias"
    saludo = saludo + complemento;
    return saludo;
}
console.log(saludar());

/////////////////Otro Ejemplo
for(var i = 1; i<=3; i++){
    console.log(i);
}
console.log("Variable: "+i);//Aun se puede acceder a "i"

for(let j = 5; j<=8; j++){
    console.log(j);
}
console.log("Variable: "+j);//Ya no se puede acceder a "j"