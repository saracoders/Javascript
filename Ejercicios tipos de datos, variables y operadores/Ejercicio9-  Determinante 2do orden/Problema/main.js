// Escribe aquí tu codigo Javascript
function determinante(){
	var arreglo=[];
	a11=parseInt(prompt("Ingrese el valor a11 de la matriz A:"));
	a12=parseInt(prompt("Ingrese el valor a12 de la matriz A:"));
	arreglo.push([a11,12]);
	a21=parseInt(prompt("Ingrese el valor a21 de la matriz A:"));
	a22=parseInt(prompt("Ingrese el valor a22 de la matriz A:"));
	arreglo.push([a21,a22]);
	var determinate=a11*a22-a12*a21;
	return determinate;

	}
alert("Calculo de la determinante:");
alert("Resultado de la determinante de la matriz A : "+determinante());


