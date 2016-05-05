// Escribe aquí tu codigo Javascript

function texto(){
	var text= prompt("Escribe un pequeño texto: ");
	var repeticion = parseInt(prompt("Escribe cuántas veces quieres que se repita el texto: "));
	var print = "\n ";
	for(i=1 ; i<=repeticion; i++){
		print += text + "\n "; 	
	}
	alert("Este es el texto repetido: " +print);
};
texto();




