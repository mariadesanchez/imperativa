//comparar valores de los arrays e indicar si obtuvieron el mismo o diferente puntaje
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
console.log(comparacion);
