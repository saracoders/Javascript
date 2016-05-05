// Escribe aquí tu codigo Javascript
function conversion_edad(edad){
	var edad_dia=0;
	edad_dia=edad*365;
	return edad_dia;
}
var nombre=prompt("Ingrese su nombre: ");
var edad=parseInt(prompt("Ingrese su edad: "));
var edad_dia=conversion_edad(edad);
alert("Su nombre es: "+nombre+" su edad en día es: "+edad_dia+" días.");


