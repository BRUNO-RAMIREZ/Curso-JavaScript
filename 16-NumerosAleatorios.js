//Generar 10 numeros aleatorios dado un limite inferior y un limite superior
function generarNumerosAleatorios(limiteInferior,limiteSuperior){
    //con floor obtenemos la parte entera
    for(var i = 1; i<=10; i++){
        console.log(Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior);
    }
}
generarNumerosAleatorios(3,8);