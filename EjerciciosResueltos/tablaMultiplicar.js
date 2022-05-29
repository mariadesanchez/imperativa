const prompt = require("prompt-sync")({ sigint: true });
let i = 0;
function tablaDeMultiplicar(numero) {
 	while (i <= 10)  {
		
		console.log( numero + ' * ' + i + ' =  ' + i * numero);
		 i++;
	 }
	
}
tablaDeMultiplicar(4);