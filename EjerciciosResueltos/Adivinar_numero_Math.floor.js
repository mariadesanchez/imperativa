/*Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!"*/

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