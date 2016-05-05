// Escribe aquí tu codigo Javascript
function traductor(){
	var palabras = prompt("Ingresa una palabra para traducir (casa , mesa , perro o gato)");
	var result = "";
	switch(palabras){
		case "casa":
		result = "house";
		break;
		case "mesa" :
		result = "table";
		break;
		case "perro" : 
		result = "dog";
		break;
		case "gato" :
		result = "cat";
		break;
		default : "Esa palabra no está dentro del traductor";
		break;
	}
	return result;
}

alert(traductor());




