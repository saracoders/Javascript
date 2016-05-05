// Escribe aquí tu codigo Javascript
function lista(){
	var lista=[];
 	for (var i = 1; i <= 2; i++) {
 	var a=parseInt(prompt("Ingrese el número "+i+" : "));
 	lista.push(a);
 	}
 	alert(JSON.stringify(lista));
 	return lista[0]*lista[1];
}
alert("Calculondo la determinante de una matriz de 2 x 2 :");
alert("Ingrese datos a la primera fila");
var lista_1=lista();
alert("Ingrese datos a la segunda fila");
var lista_2=lista();
var determinante=lista_2*lista_1;
alert("Resultado: "+determinante);




