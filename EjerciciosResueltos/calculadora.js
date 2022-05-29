const prompt = require("prompt-sync")({ sigint: true });
/*let operator = prompt('Qué Operaciòn desea realizar ? ');
let numeroA = parseInt(prompt('Introduce primer número'));
let numeroB = parseInt(prompt('Introduce segundo número'));


function restar(a, b){
    return a - b;
}*/
function multiplicar(a, b){
    return a * b;
}
function sumar(a, b){
    return a + b;
}

/*function dividir(a, b){
    
    if( b == 0){
    let b = parseInt(prompt('Introduce número distinto de cero'));
    return a / b;
}else{
    return a / b; 
}
}

switch ( operator ){
case operator = 'suma':
console.log(sumar(numeroA, numeroB));
break;
case operator = 'resta':
    console.log(restar(numeroA, numeroB));
break;
case operator = 'division':
    console.log(dividir(numeroA, numeroB));
break;

case operator = 'multiplicacion':
    console.log(multiplicar(numeroA, numeroB));
break;

}

function cuadradoDeUnNumero(numero){
    console.log(multiplicar(numero, numero));

    }

cuadradoDeUnNumero(6);

let numeroA = parseInt(prompt('Introduce primer número'));
let numeroB = parseInt(prompt('Introduce segundo número'));
let numeroC = parseInt(prompt('Introduce tercer número'));

function promedioDeTresNumeros(a,b, c){
     console.log((sumar(a,b) +c)/3);
}
promedioDeTresNumeros(numeroA, numeroB, numeroC);

let numeroA = parseInt(prompt('Introduce primer número'));
let numeroB = parseInt(prompt('Introduce el porcentaje a calcular'));

function calcularPorcentaje(a, b){
    console.log((multiplicar(a,b)/100));
}
calcularPorcentaje(numeroA, numeroB);
*/
let numeroA = parseInt(prompt('Introduce a calcular porcentaje'));
let numeroB = parseInt(prompt('Introduce el numero total'));

function GeneradorDePorcentaje(a, b){
    console.log((multiplicar(a,100)/b));
}
GeneradorDePorcentaje(numeroA, numeroB);