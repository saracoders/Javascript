// Escribe aquí tu codigo Javascript
function area_triangulo(){
	var altura=parseFloat(prompt("Ingrese la altura del triangulo a calcular"));
	var base=parseFloat(prompt("Ingrese la base del triangulo a calcular"));
	var area=((altura*base)/2);
	return area;
}
alert("CALCULO DEL AREA DEL TRIANGULO:");
alert("El área del triangulo es: \n"+area_triangulo());

