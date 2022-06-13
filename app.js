/*
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

console.log(peliculas[3]);

let upper = peliculas.map(element => {
    return element.toUpperCase();

const upper = [];
 peliculas.forEach(element => {
    upper.push(element.toUpperCase());
  });

console.log(upper);
  });
let mas_peliculas= ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

let upper = mas_peliculas.map(element => {
    return element.toUpperCase()
    
});




const todas_las_peliculas = peliculas.concat(upper);
let ultimo_valor = todas_las_peliculas.pop();

console.log(todas_las_peliculas);

comparar valores de los arrays e indicar si obtuvieron el mismo o diferente puntaje
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

let comparacion = [''];

for (i = 0; i <= 8; i++){

if(asiaScores[i]  == euroScores[i]){
comparacion.push ('igual calificacion')
} else{
    comparacion.push ('diferente calificaciòn')
}

}
console.log(comparacion);*/



//ENCONTRAR CLIENTE BANCO
//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

  let clienteEncontrado = "";
  let banco =  {
      clientes: function(arrayCuentas , nombre) {
  
          for(let i=0 ; i < arrayCuentas.length; i++){
              if(arrayCuentas[i].titularCuenta === nombre){
                 return clienteEncontrado = arrayCuentas[i].titularCuenta;   
          }

          }
          return 'No Existe';
          }
          }
  
          
    
    console.log(banco.clientes(arrayCuentas,'Jarret Lafuente'));


/*pasamos un numero de inicio, final y el incremento, devolver un array, usamos for y while



function sumador (comienzo, final, contador){
    let resultado = [];
    let sumador = comienzo + contador
    resultado.push(comienzo)
    while(sumador <= final){
      resultado.push(sumador)
      sumador = sumador + contador
    }
    return resultado
  }
  sumador(1,10,3)

  function sumador (comienzo, final, contador){
    let array = [];
    for(let i = comienzo; i <= final; i += contador ){
      array.push(i)
    }
    return array;
  }
  
  sumador(1,10,3)*/
/* 
5 - 
Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como
parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor`
que contenga el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
{valor: 5}]
- arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]



function arregloDeObjetos (num){

    let array = []; 
    for(let i=1 ; i<=num ; i ++) {

        let objeto = {valor: i}; 
        array.push(objeto); 

    }
    return array; 

}

console.log(arregloDeObjetos(5));
const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso ={

encontrarGanador : function (a, b) {

//continua con esto.
let puntoAlicia = 0;
let puntoBod = 0;
let contadorA = 0;
let contadorB = 0;
for (let i =0; i <=2;i++ ){
    let puntoAlicia = alicia[i]; 
    let puntoBod = bob[i];
    if( alicia[i] > bob[i] ){
       
        let etapa = {etapa: 'Alicia'}; 
        console.log(etapa)
      
        
    contadorA +=1;
    }else if( alicia[i] < bob[i] ){
        let etapa = {etapa: 'Bob'}; 
        console.log(etapa)

        contadorB +=1;
        }else {
            let etapa = {valor: ' '}; 
            contadorA = contadorA;
            contadorB = contadorB;
        }

}

//console.log(contadorA);
//console.log(contadorB);
if(contadorA > contadorB){
    let ganador = {valor: 'Alicia'}; 
       
    console.log("el ganador es : Alicia" );
}else if (contadorA < contadorB){
    let ganador = {valor: 'Bob'}; 
   console.log("el ganador es : Bob");

}else{
    console.log('No hay ganadores');
}
}

}

concurso.encontrarGanador(alicia,bob);
console.log(concurso)

*/
/*1) Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().

Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario.

let name ='Micaela';


function frase (name) {
    console.log('Hola ' + name);
}


frase(name);




//let num1 = 10;
//let num2 = 20;
const pi = 3.14;

function suma(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
    


}

console.log(suma());
Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario

ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.

let anioNacimiento = 1993;
let anioActual = 2022;


function edad(a, b){
    let resta = (a - b);
    return 'Tienes ' + resta +' anios';
}
console.log(edad(anioActual, anioNacimiento));

Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!"

let number = 9;

function numero(num){

   let numAleatorio =  Math.floor((Math.random() * 10) + 1);
   if(num == numAleatorio){
       console.log('Felicitaciones ese era!')  
       console.log(numAleatorio);
     
   }else{
    console.log('Lo siento, intenta nuevamente');
    console.log(numAleatorio);

   }

}
numero(number);

function anterior (numeroAnterior) {
  return numeroAnterior - 1;
}
console.log(anterior(10));

function triple (numeroTriple) {
  return numeroTriple * 3;
}
console.log(triple(10));

function anteriorDelTriple (numero){

  return triple(numero) - 1;
}
console.log(anteriorDelTriple(10));
*/












