// Escribe aquí tu codigo Javascript
var cadena="";
var suma=null;
var cont=0;
for(var i=0;i<3000;i++){
	if(i%11===0){
		cadena += i + " ";
		suma+=i;
		cont+=1;
	}
}
alert("Múltiplos de 11 : \n"+ "cantidad: " + cont + "\n La suma es: "+suma + "\n Los numero son: " + cadena );



