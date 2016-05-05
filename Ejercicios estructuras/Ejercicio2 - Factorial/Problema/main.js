// Escribe aquí tu codigo Javascript

function factorial(){
	var numero = parseInt(prompt("Ingrese el número para ejecutar su factorial: "));
	var resultado=1;
	for(var i=numero; i>=1; i--){
		resultado = resultado *i;
	}
	alert("El factorial de "+ numero +" es : " + resultado);
}
factorial();


