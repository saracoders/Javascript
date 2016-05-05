// Escribe aquí tu codigo Javascript
function area_circulo(){
	var radio=parseFloat(prompt("Ingrese el radio del circulo: "));
	var area=Math.pow(radio,2)*(Math.PI);
	alert("ÁREA DEL CIRCULO DE RADIO "+radio+" ES: \n"+area.toFixed(2));
}
alert("Calculo del área de un circulo");
area_circulo();


