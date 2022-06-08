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
*/
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


