/*Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario

ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.*/

let anioNacimiento = 1993;
let anioActual = 2022;


function edad(a, b){
    let resta = (a - b);
    return 'Tienes ' + resta +' anios';
}
console.log(edad(anioActual, anioNacimiento));