// Escribe aquí tu codigo Javascript
function producto_escalar(){
	var mensaje="Ingrese datos para el vector [a,b] [c,d]";
	var a=parseInt(prompt(mensaje + "  Ingrese a"));
	var b=parseInt(prompt(mensaje + "  Ingrese b"));
	var c=parseInt(prompt(mensaje + "  Ingrese c"));
	var d=parseInt(prompt(mensaje + "  Ingrese d"));
	var a_b=[a, b];
	var c_d=[c, d];
	var resultado=a*c+b*d;
alert("El producto escalar de los vectores: \n["+a_b+"] y ["+c_d+"] es "+resultado);
}

producto_escalar();
