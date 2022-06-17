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
/*let arrayCuentas = [
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

let text ='Este texto es mala onda';
let search = 'mala';
let replace = 'buena';

function reemplazoFastFast(textoSinGuiones, buscar,reemplazar){

  console.log(textoSinGuiones.replace(buscar,reemplazar));
  }
  reemplazoFastFast(text,search,replace)

  Palíndromo
  Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
  palindromo(“anilina”) debe retornar true
  palindromo(“Ana”) debe retornar true
  palindromo(“Enrique”) debe retornar false

  let array_pop = [];
  let arra_shift = [];
  let text = '';
  function palindromo (text){
   
    for (i = 0; i <= text.length; i++){
      
      (text[i]);

    }



  }
  console.log(palindromo('ana'));
  let autos = [
    {
      marca: "Citroen",
      modelo: "C3",
      año: 2013,
      dueño: "Juan",
      color: {
        capot: "gris",
        puertas: "negro",
      },
      dueñosAnteriores: [], // Lo compro 0KM
    },
    {
      marca: "Honda",
      modelo: "Fit",
      año: 2016,
      dueño: "Santiago",
      color: {
        capot: "rojo",
        puertas: "rojo",
      },
      dueñosAnteriores: ["Jorge", "Iván"],
    },
  ];

  function nuevoComprador(array,nombre,color){
    autos[0].dueñosAnteriores.push(autos[0].dueño);
    autos[0].dueño = nombre;
    autos[0].color.capot = color
    
    return autos
  }
  console.log(nuevoComprador(autos,"santiago","negro"))

  
autos[0].nombre = 'snatiago';

autos[0].color.capot = 'negro';

  b.-["a", "b", "c", "d"].indexOf("c")
  c.-PABLO
  D 
  - persona.edad = 25
  E 0

  F undefined


  //Ejercicio 3: 

Giannina necesita necesita comprar todo lo necesario para poder cocinar unas pizzas:

let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]


- Agregá dos nuevos productos al final de la lista(lo que le quieras poner a tu pizza).
pizzas.push("aceitunas","morron");
- Agregá dos productos al principio de tu lista(lo que le faltaria para la salsa).
pizzas.unshift("jamon","anana");
- Determiná cuán largo es el Arreglo en este momento. 9

- Sacá un producto y guardalo en una Variable que se llame noHabia.

let noHabia = pizzas.pop();
- Sacá un producto y guardalo en otra Variable que se llame comprado.
let comprado = pizzas.shift();

- ¿Cuán largo es el Arreglo ahora? 7


let autos = [];

autos.push(let ford = {
  año	 : 2015,
  color	: "blanco",
  puertas: 5
},
let ford = {
  año	 : 2015,
  color	: "blanco",
  puertas: 5
},
 
let peugeot = {
año	 : 2010,
color	: "rojo",
puertas: 3
},
 
let volkswagen = {
año	 : 2012,
color	: "gris",
puertas: 4
})

function futurosAutos(autosarray){

  for(let i=0;i<autosarray.length;i++){
    autosarray[i].puertas+=3;
  }
  return autosarray;
  }
  
  console.log(futurosAutos(autosarray));*/




/* EDADES <>18
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
let array_menor = [];

function menor (){

for (let i= 0; i<=edades.length -1; i++) {
  if(edades[i] >= 18){
   array_menor.push(edades[i]);
  }
}
return array_menor;

}
console.log(menor(edades));
EDADES = 18
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
let array_menor = [];

function menor (){

for (let i= 0; i<=edades.length -1; i++) {
  if(edades[i] == 18){
   array_menor.push(edades[i]);
  }
}
return array_menor;

}
console.log(menor(edades));
ENCONTRAR EL MAX
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


function mayor (){
let es_mayor = 0;

for (let i= 0; i<=edades.length -1; i++) {
  if(edades[i] > es_mayor ){
  es_mayor = edades[i];
  }
}
return es_mayor;

}
console.log(mayor(edades));
OBTENER EL MINIMO
const edades = [11, 12, 15, 18, 25, 2, 10, 33, 18, 5];


function menor (edades){
let es_menor = edades [0];

for (let i= 1; i<=edades.length -1; i++) {

  if(edades[i] < es_menor ){
  es_menor = edades[i];
  }
}
return es_menor;

}
console.log(menor(edades));
PROMEDIO EDADES:
const edades = [11, 12, 15, 18, 25, 2, 10, 33, 18, 5];


function promedio (edades){
let promedio_edades = 0;

for (let i= 1; i<=edades.length -1; i++) {

 promedio_edades += edades[i]/edades.length;
}
return promedio_edades;

}
console.log(promedio(edades));
EDADES MAS 1  
const edades = [11, 12, 15, 18, 25, 2, 10, 33, 18, 5];

let edades_mas_uno = [];
function mas_uno (edades){


for (let i= 0; i<=edades.length -1; i++) {

  edades_mas_uno.push(edades[i] + 1);
}
return edades_mas_uno;

}
console.log(mas_uno(edades));

let menor_treinta = [];
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]
for (let i = 0; i <= arrayCuentas.length -1; i++) {

  if(arrayCuentas[i].edadTitular < 30){
 // menor_treinta.push(arrayCuentas[i].titular),saldo,edadTitular,tipoCuenta
  
    {titular = menor_treinta.push(arrayCuentas[i].titular)
    estaHabilitada = menor_treinta.push(arrayCuentas[i].estaHabilitada)
    saldo =  menor_treinta.push(arrayCuentas[i].saldo)
    edadTitular = menor_treinta.push(arrayCuentas[i].edadTitular)
    tipoCuenta = menor_treinta.push(arrayCuentas[i].tipoCuenta)
  
}
}
}
console.log(menor_treinta);


function arregloDeObjetos(numero, palabra) {
  let objeto = [];
  for(let i = 1; i <= numero; i++){
  objeto.push({[palabra]:i});
}
  return objeto;
}
console.log(arregloDeObjetos(5,"hola"))

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 20,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 3,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$800",
      edadTitular: 10,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 4,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 55,
      tipoCuenta: "corriente"
    }
  ]
  /*Obtener la cuenta con el titular de la misma más joven.
  Obtener un nuevo array por cada tipo de cuenta.
  Obtener un nuevo array con las cuentas habilitadas.
  Obtener un nuevo array con las cuentas deshabilitadas.
  Obtener la cuenta con el menor saldo.
  Obtener la cuenta con el mayor saldo.

function tipo_cuenta(array) {
let nuevo_array =[];
    for(let i = 0; i <= array.length -1; i++){
       
       
        nuevo_array.push({['tipoCuenta']:array[i].tipoCuenta});

    }
    return nuevo_array;
  }
 

console.log(tipo_cuenta(arrayCuentas));


function habilitada(array) {
  let nuevo_array =[];
      for(let i = 0; i <= array.length -1; i++){
         
         
          nuevo_array.push({['estaHabilitada']:array[i].estaHabilitada});
  
      }
      return nuevo_array;
    }
   
  
  console.log(habilitada(arrayCuentas));*/







  /*function titular_joven(array) {
    let mas_joven = array[0].edadTitular; 
    let array_joven = array[0];
  
    for(let i = 1; i <= array.length -1; i++){
    if( mas_joven > array[i].edadTitular ){

        mas_joven = array[i].edadTitular;
        array_joven = array[i];
       
       
     

    }
   
  }
  return array_joven;
    
  }

console.log(titular_joven(arrayCuentas));*/
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 20,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 3,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$1,000.20",
      edadTitular: 10,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$5,616.52",
      edadTitular: 4,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 55,
      tipoCuenta: "corriente"
    }
  ]
/*
function menor_saldo (array) {
  let menos_saldo = array[0].saldo; 
  let array_menos = array[0];

  for(let i = 1; i <= array.length -1; i++){
  if( menos_saldo > array[i].saldo ){

      menos_saldo = array[i].saldo;
      array_menos = array[i];   
  }
}
return array_menos;
}
console.log(menor_saldo(arrayCuentas));
MAYOR SALDO
function mayor_saldo (array) {
  let mas_saldo = array[0].saldo; 
  let array_mas = array[0];

  for(let i = 1; i <= array.length -1; i++){
  if( mas_saldo < array[i].saldo ){

      mas_saldo = array[i].saldo;
      array_mas = array[i];   
  }
}
return array_mas;
}
console.log(mayor_saldo(arrayCuentas));
PRE-PARCIAL:
Santiago le compra el auto a Juan y le pinta el capot a negro.
¿Cómo harías para modificar esas Propiedades?


let autos = [
  {
    marca: "Citroen",
    modelo: "C3",
    año: 2013,
    dueño: "Juan",//Santigo
    color: {
      capot: "gris",//negro
      puertas: "negro",
    },
    dueñosAnteriores: [], // Lo compro 0KM//Juan
  },
  {
    marca: "Honda",
    modelo: "Fit",
    año: 2016,
    dueño: "Santiago",
    color: {
      capot: "rojo",
      puertas: "rojo",
    },
    dueñosAnteriores: ["Jorge", "Iván"],
  },
];

function compra_venta_autos(card){

  card[0].dueño = 'Santiago';
  card[0].color.capot = 'negro';
  card[0].dueñosAnteriores = 'Juan';
  return card[0];

}
console.log(compra_venta_autos(autos));


A)
Utilizamos pop() para ...

- Ingresar un elemento en la última posición del array
- Eliminar un elemento ubicado en la primera posición del array
- Ingresar un elemento en la primera posición del array
- Eliminar un elemento ubicado en la última posición del array (CORRECTA)

B) 
Para encontrar la posición de un elemento dentro de un array, ¿cuál es la instrucción correcta?

- ["a", "b", "c", "d"].indexOf("c") (CORRECTA)
- ["a", "b", "c", "d"].getItem("c")
- ["a", "b", "c", "d"].positionOf("c")
- ["a", "b", "c", "d"].get("c")


C) 
¿A qué valor estamos accediendo?

let miArray = ["Ana", "Pedro", "Pablo"]
miArray[miArray.length - 1]

- Ana
- Pedro
- Pablo (CORRECTA)
- undefined




D) 
¿Cuál o cuales son las formas correctas de agregarle un nuevo dato a un objeto llamado persona?

- persona."edad" = 25
- persona['edad'] = 25 (correcta : Bracket)
- persona.edad = 25 ( Correcta :dot notation)
- "persona".edad = 25

E) 
¿Qué se termina mostrando?

let perro = {
    nombre: "Charly",
    edad: 6
}
let key = "nombre"
console.log(perro[key])// accedo a la propiedad nombre del objeto perro por metodo bracket perro.['nomgre']

- 0
- key
- nombre
- Charly (correcto)

F) 
¿Qué se termina mostrando?

let musicos = [
    {
        nombre: "Luca Prodan",
        idiomas: ["Ingles", "Español"]
    },
    {
        nombre: "Luis A. Spinetta",
        idiomas: ["Español"]
    }
]
console.log(musicos[1].idiomas[0])

- undefined
- Español ( Corecta)
- Inglés
- Luca Prodan


//Ejercicio 2: 

Una funcion multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.

let number1 = 10;
let number2 = 5;
function multiplicador(num1,num2){
  return num1*num2;
}
console.log(multiplicador(number1, number2));

Una funcion resta que tome dos números como Parámetros y devuelva el la resta de los dos.
let number1 = 100;
let number2 = 150;
function restar(num1,num2) {
  return num1-num2;
  
}
console.log(restar(number1, number2));

Una funcion sumador que tome 4 numeros como parametros y te devuelva la suma de los 4.
let number1 = 23;
let number2 = 47;
let number3 = 10;
let number4 = 20;

function sumar_cuatro_numeros(num1,num2,num3,num4,){
return num1 + num2 + num3 + number4;

}
console.log(sumar_cuatro_numeros(number1,number2,number3,number4));


//Ejercicio 3: 

Giannina necesita necesita comprar todo lo necesario para poder cocinar unas pizzas:



- Agregá dos nuevos productos al final de la lista(lo que le quieras poner a tu pizza).
let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]
pizzas.push('Anana','Palmitos');
console.log(pizzas)

- Agregá dos productos al principio de tu lista(lo que le faltaria para la salsa).
let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]
pizzas.push('Anana','Palmitos');
pizzas.unshift('aceitunas','anchoas')
console.log(pizzas)
- Determiná cuán largo es el Arreglo en este momento
let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]
pizzas.push('Anana','Palmitos');
pizzas.unshift('aceitunas','anchoas')
console.log(pizzas)
pizzas.length;

- Sacá un producto y guardalo en una Variable que se llame noHabia.
let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]
pizzas.push('Anana','Palmitos')
pizzas.unshift('aceitunas','anchoas')
console.log(pizzas)
let noHabia = pizzas.pop()
console.log(noHabia)


- Sacá un producto y guardalo en otra Variable que se llame comprado.
let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]
pizzas.push('Anana','Palmitos')
pizzas.unshift('aceitunas','anchoas')
console.log(pizzas)
pizzas.length
let noHabia = pizzas.pop()
console.log(noHabia)
let comprado = pizzas.shift()
console.log(comprado)



- ¿Cuán largo es el Arreglo ahora?

let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]
pizzas.push('Anana','Palmitos')
pizzas.unshift('aceitunas','anchoas')
console.log(pizzas)
pizzas.length
let noHabia = pizzas.pop()
console.log(noHabia)
let comprado = pizzas.shift()
console.log(comprado)
pizzas.length */


 
//Crear un array VACÍO, que tenga el nombre de autos. 



// Usando estos 3 Objetos
let autos = [];

let ford = {
    año	 : 2015,
    color	: "blanco",
    puertas: 5
}
   
let peugeot = {
año	 : 2010,
color	: "rojo",
puertas: 3
}
   
let volkswagen = {
año	 : 2012,
color	: "gris",
puertas: 4
}
autos.push(ford,peugeot,volkswagen);
console.log(autos)

function futurosAutos(autos){
  for(let i=0; i<=autos.length -1;i++){
    autos[i].puertas +=3;

  }
  return autos;
}
console.log(futurosAutos(autos));

//Estos 3 objetos, ahora tenes que pensar como podrias agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)



// Mostrar por consola el array para ver que contenga esos objetos.


   

/* Tenes que crear una función que reciba el array autos como unico parámetro, 

e incremente en 3 la cantidad de puertas que van a tener los autos
 en el futuro con una modificacion, llámala futurosAutos. Debes 
 utilizar una estructura de repetición. */






