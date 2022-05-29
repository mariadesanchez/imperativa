const prompt = require("prompt-sync")({ sigint: true });
/*Funciones simples
En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso

por consola de los valores-
1. Crear una función qcd..cd ..ue convierta pulgadas en centímetros.

Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellotouchs.
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/
 
const pulgada = prompt('Ingrese valor de pulgadas');

function convertir(pulgada){
    
    return pulgada*2.54;
}

console.log(convertir(10));