// Escribe aquí tu codigo Javascript
function punto_medio(){
	var var_1=[];
	var var_2=[];
	a=parseInt(prompt("Ingrese el valor1 del primer vector:"));
	var_1.push(a);
	b=parseInt(prompt("Ingrese elv valor1 del primer vector:"));
	var_1.push(b);
	c=parseInt(prompt("Ingrese el valor2 del primer vector:"));
	var_2.push(c);
	d=parseInt(prompt("Ingrese el valor2 del primer vector:"));
	var_2.push(d);
	var var_3=[];
	x=((a+c)/2);
	y=((b+d)/2);
	var_3.push(x);
	var_3.push(y);
	alert("El punto medio del segmento de extremos, los puntos: \n"+" ["+var_1+"]  y "+" ["+var_2+"]"+"  es  ["+var_3+"]");

}
punto_medio();


