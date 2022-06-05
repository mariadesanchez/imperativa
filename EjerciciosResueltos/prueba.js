


const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt('ingresa un numero: ')
function noParesDeContarImparesHasta(num){
    let contador = 0;
    for ( let i = 0; i<= num ;i++){
        if( (i % 2 )!== 0 ){
            contador = contador + 1;    

        }     
}
return contador;
}
console.log(noParesDeContarImparesHasta(numero));