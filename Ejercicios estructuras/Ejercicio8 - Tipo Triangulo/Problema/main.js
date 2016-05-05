// Escribe aquí tu codigo Javascript

function tipoTriangula(){
	var a = parseInt(prompt("Ingresa la primera longitud de uno de los lados del triángulo: "));
	var b = parseInt(prompt("Ingresa la segunda longitud de uno de los lados del triángulo: "));
	var c = parseInt(prompt("Ingresa la tercera longitud de uno de los lados del triángulo: "));
	if(a===NaN && b === NaN && c===NaN){
		alert("No es un triángulo.");
	}else if((a*a === b*b+c*c)||(b*b === a*a+c*c)||(c*c === b*b+a*a)){
		alert("Es un triángulo rectángulo.");
	}else if (a===b && b===c && a===c){
		alert("Es un triángulo equilátero.");
	}else if((a===b)||(b===c)||(a===c)){
		alert("Es un triángulo isóceles.");
	}else{
		alert("Es un triángulo escaleno.");
	};
};
tipoTriangula();