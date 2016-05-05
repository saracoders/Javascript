var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
var dni = parseInt(prompt("Escribe tu numero de DNI"));
var letra = cadena[dni % 23];
		
	if (dni < 0 || dni > 99999999) {
		alert("El dni indicado no es válido");
	} else {
		alert (dni + " - " + letra);
	}
