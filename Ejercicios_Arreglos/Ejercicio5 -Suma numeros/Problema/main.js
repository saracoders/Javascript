// Escribe aquí tu codigo Javascript

var a=[];
var suma=0;
for (var i = 1; i <=10; i++) {
    a[i]=[];
    a[i] =parseInt(prompt('Ingrese numero'+i+':'));
    suma+=a[i];
}
alert('la suma es:'+suma);
